# mrnet Landing Page

Лендинг-страница для интернет-провайдера mrnet на основе макета из Figma.

**Стек:** Next.js 14 + TypeScript + Tailwind CSS

## Особенности

- Темная тема с оранжевыми и бирюзовыми акцентами
- Адаптивный дизайн
- Все секции согласно макету Figma
- Плавающая кнопка звонка

## Установка

```bash
npm install
# или
yarn install
# или
pnpm install
```

## Запуск в режиме разработки

```bash
npm run dev
# или
yarn dev
# или
pnpm dev
```

Откройте [http://localhost:5000](http://localhost:5000) в браузере.

## Сборка для продакшена

```bash
npm run build
npm start
```

## Структура проекта

```
new-project/
├── app/
│   ├── layout.tsx      # Корневой layout
│   ├── page.tsx        # Главная страница со всеми секциями
│   └── globals.css     # Глобальные стили
├── components/         # React компоненты
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ClientsSection.tsx
│   ├── TechnologySection.tsx
│   ├── AggregationSection.tsx
│   ├── PersonalAccountSection.tsx
│   ├── ForITSection.tsx
│   ├── FreeTrialSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── MapSection.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── FloatingCallButton.tsx
├── public/            # Статические файлы
├── tailwind.config.ts # Конфигурация Tailwind с кастомными цветами
└── package.json       # Зависимости проекта
```

## Цветовая схема

- **Оранжевый:** #FF6B35
- **Бирюзовый:** #00D4AA
- **Темный фон:** #0a0a0a
- **Градиенты:** от оранжевого к бирюзовому
