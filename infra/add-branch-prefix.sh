#!/bin/bash

# Получаем имя текущей ветки
branch_name=$(git symbolic-ref --short HEAD 2>/dev/null)

# Проверяем, что мы не на detached HEAD и ветка существует
if [ -n "$branch_name" ] && [ "$branch_name" != "HEAD" ]; then
    # Пропускаем основные ветки (main, master)
    case "$branch_name" in
        main|master)
            exit 0
            ;;
    esac
    
    # Проверяем, что это не merge commit, rebase или amend
    case "$2" in
        merge|squash|commit)
            exit 0
            ;;
    esac
    
    # Читаем текущее содержимое файла с коммитным сообщением
    commit_msg_file="$1"
    
    # Проверяем, не начинается ли уже сообщение с названием ветки или это не пустое сообщение
    if [ -s "$commit_msg_file" ]; then
        # Читаем первую строку коммитного сообщения
        first_line=$(head -1 "$commit_msg_file")
        
        # Проверяем, не начинается ли уже с названием ветки
        if [[ "$first_line" =~ ^$branch_name: ]] || [[ "$first_line" =~ ^# ]]; then
            exit 0
        fi
        
        # Создаем временный файл
        temp_file=$(mktemp)
        
        # Записываем название ветки в начало, если первая строка не пустая
        if [ -n "$(echo "$first_line" | tr -d '[:space:]')" ]; then
            echo "$branch_name: $first_line" > "$temp_file"
            # Добавляем остальные строки
            tail -n +2 "$commit_msg_file" >> "$temp_file"
        else
            echo "$branch_name: " > "$temp_file"
            cat "$commit_msg_file" >> "$temp_file"
        fi
        
        # Заменяем оригинальный файл
        mv "$temp_file" "$commit_msg_file"
    else
        # Если файл пустой, просто добавляем префикс
        echo "$branch_name: " > "$commit_msg_file"
    fi
fi