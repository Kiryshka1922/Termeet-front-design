/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order", "stylelint-declaration-strict-value"],
  ignoreFiles: "./dist/**",
  cache: true,
  rules: {
    "declaration-empty-line-before": null,
    // Сортируем свойства
    "order/properties-order": [
      [
        {
          groupName: "Позиционирование",
          emptyLineBefore: "always",
          properties: ["position", "z-index", "top", "right", "bottom", "left"],
          noEmptyLineBetween: true,
          order: "flexible",
        },
        {
          groupName: "Отображение",
          emptyLineBefore: "always",
          properties: ["display", "visibility", "overflow", "flex", "grid"],
          noEmptyLineBetween: true,
          order: "flexible",
        },
        {
          groupName: "Размеры и отступы",
          emptyLineBefore: "always",
          properties: ["width", "height", "margin", "padding", "box-sizing"],
          noEmptyLineBetween: true,
          order: "flexible",
        },
        {
          groupName: "Типографика",
          emptyLineBefore: "always",
          properties: ["font", "text-align", "text-decoration"],
          noEmptyLineBetween: true,
          order: "flexible",
        },
        {
          groupName: "Визуальное оформление",
          emptyLineBefore: "always",
          properties: ["color", "background-color", "border", "border-radius", "box-shadow"],
          noEmptyLineBetween: true,
          order: "flexible",
        },
        {
          groupName: "Анимации и трансформации",
          emptyLineBefore: "always",
          properties: ["transform", "animation", "transition"],
          noEmptyLineBetween: true,
          order: "flexible",
        },
      ],
      {
        unspecified: "bottomAlphabetical",
        emptyLineBeforeUnspecified: "always",
      },
    ],
    // Используем css-переменные
    "scale-unlimited/declaration-strict-value": [
      ["/color$/", "/border$/", "/font$/"],
      {
        ignoreValues: {
          "/color$/": ["transparent", "currentColor", "inherit"],
          "/border$/": ["none"],
        },
        message: "Давайте стараться использовать css-переменные. Если нет нужной сходи к дизайнеру или сам создай",
      },
    ],
  },
};
