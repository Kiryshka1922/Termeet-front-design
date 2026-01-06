# Termeet-frontend

<div align="center">
  <img src="termeet.jpg" alt="Termeet" width=200 height=200/>
</div>

### Фронтенд-часть проекта Termeet

## Технологический стек

- **React 19** — библиотека для построения пользовательских интерфейсов
- **TypeScript** — типизированный JavaScript
- **Vite** — быстрый сборщик и dev-сервер
- **ESLint** — линтер для JavaScript/TypeScript
- **Prettier** — форматтер кода
- **Stylelint** — линтер для CSS
- **Husky** — Git hooks для автоматизации проверок

## Быстрый старт

```bash
# Клонирование репозитория
git clone https://github.com/StyleruOrganization/Termeet-front.git

# Установка зависимостей (рекомендуется pnpm)
pnpm install

# Запуск dev-сервера
pnpm run dev

# Сборка для production
pnpm run build
```

## Настройка окружения

### 1. Установка pnpm (рекомендуется)

```bash
npm install -g pnpm
```

### 2. Настройка Git Hooks (обязательно!)

После установки зависимостей выполните команду:

```bash
git config core.hooksPath .husky
```

Это активирует Git-хуки:

- **pre-commit** — проверка кода на соответствие правилам ESLint, Prettier и Stylelint перед коммитом
- **commit-msg** — автоматическое добавление префикса с названием ветки к сообщению коммита в формате `[branch-name]: [commit message]`

### 3. Настройка VS Code

При клонировании репозитория VS Code предложит установить рекомендуемые расширения из файла [`.vscode/extensions.json`](.vscode/extensions.json).

Добавьте в настройки VS Code автоматическое исправление при сохранении:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": "always",
  "source.fixAll.stylelint": "always"
},
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

## Структура проекта

_Раздел будет заполнен при начале разработки_

## Правила разработки

1. **Merge в main** — используется только squash merge для линейной истории коммитов
2. **CSS-переменные** — обязательное использование CSS-переменных для свойств: `color` и всех производных от него, `border` также, `font` также. Все остальные свойства должны быть в алфавитном порядке
3. **Порядок CSS-свойств** — автоматически сортируется при сохранении файла

---

> **Вопросы и предложения** приветствуются в [Issues](../../issues)
