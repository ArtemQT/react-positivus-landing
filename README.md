<div align="center">

# React Positivus Landing

**Современный адаптивный лендинг на `React`, `Vite` и `SCSS Modules`**

<br />

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Открыть-4ADE80?style=for-the-badge&labelColor=0F172A)](https://artemqt.github.io/react-positivus-landing/)
[![Figma](https://img.shields.io/badge/🎨_Figma-Дизайн-F24E1E?style=for-the-badge&labelColor=0F172A)](https://www.figma.com/community/file/1230604708032389430/positivus-landing-page-design)
[![GitHub](https://img.shields.io/badge/💻_GitHub-Репозиторий-181717?style=for-the-badge&labelColor=0F172A)](https://github.com/ArtemQT/react-positivus-landing)

<br />

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=0F172A)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=0F172A)
![SCSS](https://img.shields.io/badge/SCSS_Modules-Styled-CC6699?style=for-the-badge&logo=sass&logoColor=white&labelColor=0F172A)
![Swiper](https://img.shields.io/badge/Swiper-Slider-6332F6?style=for-the-badge&logo=swiper&logoColor=white&labelColor=0F172A)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-222222?style=for-the-badge&logo=github&logoColor=white&labelColor=0F172A)

</div>

---

## Навигация

- [О проекте](#о-проекте)
- [Возможности](#возможности)
- [Технологии](#технологии)
- [Секции лендинга](#секции-лендинга)
- [Быстрый старт](#быстрый-старт)
- [Доступные команды](#доступные-команды)
- [Деплой на GitHub Pages](#деплой-на-github-pages)
- [Структура проекта](#структура-проекта)
- [Макет](#макет)
- [Автор](#автор)

---

## О проекте

**React Positivus Landing** — одностраничный маркетинговый лендинг, созданный по дизайн-концепции **Positivus**.

Основной фокус проекта:

- аккуратная компонентная архитектура,
- чистая адаптивная верстка,
- переиспользуемые UI-блоки,
- готовая сборка и деплой на **GitHub Pages**.

---

## Возможности

- Полностью адаптивная верстка: **desktop**, **tablet**, **mobile**
- Модульная структура компонентов с переиспользуемыми UI-блоками
- Изолированные стили на **SCSS Modules**
- Интерактивные слайдеры на **Swiper**
- Быстрая сборка и dev-сервер на **Vite**

---

## Технологии

| Категория | Инструменты |
|---|---|
| **Frontend** | `React 19`, `JSX` |
| **Сборка** | `Vite 7` |
| **Стили** | `SCSS Modules`, `Sass` |
| **UI / UX** | `Swiper`, `react-responsive` |
| **Деплой** | `gh-pages`, `GitHub Pages` |
| **Качество кода** | `ESLint`, `eslint-plugin-react-hooks` |

---

## Секции лендинга

Лендинг состоит из следующих блоков:

- **Header** — навигация и мобильное меню
- **Hero** — главный экран с призывом к действию
- **Services** — список услуг
- **Case Studies** — кейсы и примеры работ
- **Working Process** — описание процесса работы
- **Team** — команда
- **Testimonials** — отзывы в виде слайдера
- **Contact Us** — форма обратной связи
- **Footer** — навигация и социальные сети

---

## Быстрый старт

### 1. Клонировать репозиторий

```bash
git clone git@github.com:ArtemQT/react-positivus-landing.git
cd react-positivus-landing
```

### 2. Установить зависимости

```bash
npm install
```

### 3. Запустить в режиме разработки

```bash
npm run dev
```

После запуска приложение будет доступно по адресу, указанному в консоли (обычно `http://localhost:5173`).

### 4. Собрать продакшн-версию

```bash
npm run build
```

Готовая сборка появится в папке `dist/`.

### 5. Локальный предпросмотр сборки

```bash
npm run preview
```

---

## Доступные команды

| Команда | Описание |
|---|---|
| `npm run dev` | Запуск локального dev-сервера |
| `npm run build` | Сборка проекта в папку `dist/` |
| `npm run preview` | Предпросмотр собранной версии |
| `npm run lint` | Проверка кода через ESLint |
| `npm run deploy` | Деплой `dist/` на GitHub Pages |

---

## Деплой на GitHub Pages

Проект настроен на автоматический деплой через **`gh-pages`**.

```bash
npm run deploy
```

Что происходит при деплое:

1. Vite собирает продакшн-версию в папку `dist/`
2. Файл `dist/index.html` копируется в `dist/404.html` (для корректной работы маршрутов на GitHub Pages)
3. Содержимое `dist/` публикуется в ветку `gh-pages`

> [!IMPORTANT]
> Для project-сайтов GitHub Pages значение `base` в `vite.config.js` должно совпадать с именем репозитория:
>
> ```js
> base: '/react-positivus-landing/'
> ```

---

## Структура проекта

```text
react-positivus-landing/
├─ public/
├─ src/
│  ├─ assets/
│  │  ├─ icons/
│  │  └─ images/
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ Header/
│  │  │  ├─ Footer/
│  │  │  └─ Main/
│  │  ├─ sections/
│  │  │  ├─ HeroSection/
│  │  │  ├─ ServicesSection/
│  │  │  ├─ CaseStudiesSection/
│  │  │  ├─ WorkSection/
│  │  │  ├─ TeamSection/
│  │  │  ├─ TestimonialsSection/
│  │  │  └─ ContactUsSection/
│  │  └─ ui/
│  ├─ styles/
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ vite.config.js
└─ package.json
```

---

## Макет

Проект реализован по дизайн-концепции **Positivus** из Figma Community:

**[Positivus Landing Page Design в Figma](https://www.figma.com/community/file/1230604708032389430/positivus-landing-page-design)**

---

## Автор

<div align="center">

**[ArtemQT](https://github.com/ArtemQT)**

<br />

**[Открыть демо сайта](https://artemqt.github.io/react-positivus-landing/)**

</div>
