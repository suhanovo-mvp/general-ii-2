# ГенералИИ - Улучшенная версия

Современный лендинг для AI-консалтинговой компании с улучшенным дизайном, анимациями и интерактивными элементами.

## 🚀 Особенности

- **Современный дизайн**: Dark mode с градиентами и glassmorphism эффектами
- **Анимации**: Плавные переходы и микроинтеракции с Framer Motion
- **Адаптивность**: Полностью responsive дизайн для всех устройств
- **Производительность**: Оптимизированная сборка с code splitting
- **SEO-friendly**: Семантическая разметка и мета-теги
- **Навигация**: Плавная прокрутка ко всем секциям с учетом фиксированного header

## 🛠 Технологический стек

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Deployment**: Docker + Nginx

## 📦 Быстрый старт

### 🐳 Docker (Рекомендуется для production)

```bash
# Запуск с Docker Compose
docker-compose up -d

# Сайт доступен на http://localhost:8080
```

📖 **Полное руководство**: См. [DOCKER-GUIDE.md](./DOCKER-GUIDE.md)

### 💻 Локальная разработка

```bash
# Установка зависимостей
pnpm install

# Запуск dev сервера
pnpm dev

# Сборка для production
pnpm build

# Предварительный просмотр production сборки
pnpm preview
```

## 🎨 Дизайн-система

### Цветовая палитра

- **Primary**: Indigo (#6366f1) - основной бренд
- **Secondary**: Purple (#8b5cf6) - акценты
- **Accent**: Pink (#ec4899) - CTA элементы
- **Background**: Dark slate - темный фон
- **Foreground**: White - текст

### Градиенты

- Hero: Purple to Pink
- Buttons: Primary to Accent
- Cards: Subtle glassmorphism

### Типографика

- **Заголовки**: Bold, gradient text
- **Основной текст**: Regular, muted foreground
- **Акценты**: Semibold, primary color

## 📁 Структура проекта

```
generalii-improved/
├── client/
│   ├── public/              # Статические файлы
│   └── src/
│       ├── components/      # React компоненты
│       │   ├── ui/         # shadcn/ui компоненты
│       │   └── MobileMenu.tsx
│       ├── pages/          # Страницы приложения
│       │   └── Home.tsx    # Главная страница
│       ├── lib/            # Утилиты
│       ├── App.tsx         # Корневой компонент
│       └── index.css       # Глобальные стили
├── server/                 # Server placeholder
├── shared/                 # Shared constants
├── Dockerfile              # Docker конфигурация
├── docker-compose.yml      # Docker Compose конфигурация
├── nginx.conf             # Nginx конфигурация
├── package.json           # Зависимости проекта
├── README.md              # Этот файл
├── DOCKER-GUIDE.md        # Полное руководство по Docker
└── DEPLOYMENT.md          # Инструкции по развертыванию
```

## 🎯 Основные секции сайта

1. **Hero** - Главный экран с призывом к действию
2. **Stats** - Ключевые показатели компании
3. **About** - Преимущества компании
4. **Services** - Услуги компании
5. **Experts** - База экспертов (placeholder)
6. **Cases** - Кейсы проектов (placeholder)
7. **Pricing** - Тарифы (placeholder)
8. **Contact** - Контактная информация и CTA
9. **Footer** - Навигация и контакты

## 🔧 Функциональность

### Навигация

- Фиксированный header с плавной прокруткой
- Мобильное меню с анимациями
- Smooth scroll с offset для фиксированного navbar
- Поддержка hash-ссылок (#about, #services и т.д.)

### Интерактивность

- Анимации при прокрутке (scroll animations)
- Hover эффекты на карточках
- Плавные переходы между секциями
- Анимированный scroll indicator

### Адаптивность

- Mobile-first подход
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Адаптивная типографика
- Оптимизированные изображения и иконки

## 🐙 Развертывание на GitHub

### 1. Создание репозитория

```bash
# Инициализация git
git init

# Добавление файлов
git add .

# Первый коммит
git commit -m "Initial commit: Improved GeneralII website"

# Добавление remote
git remote add origin https://github.com/your-username/generalii-improved.git

# Отправка в GitHub
git push -u origin main
```

### 2. GitHub Actions (опционально)

Создайте `.github/workflows/docker-build.yml` для автоматической сборки:

```yaml
name: Docker Build and Push

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Build Docker image
      run: docker build -t generalii-improved .
```

## 🌐 Развертывание

### Docker (Production)

```bash
# С Docker Compose
docker-compose up -d

# С Docker CLI
docker build -t generalii-improved .
docker run -d -p 8080:80 generalii-improved
```

### Облачные платформы

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **Heroku**: `git push heroku main`

Подробные инструкции: [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🔧 Конфигурация

### Переменные окружения

Создайте файл `.env`:

```env
VITE_APP_TITLE=ГенералИИ
VITE_API_URL=https://api.example.com
```

### Порты

- **Development**: 3000 (Vite dev server)
- **Production (Docker)**: 8080 (настраивается в docker-compose.yml)

## 📊 Производительность

### Метрики

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 90+

### Оптимизации

- Code splitting с Vite
- Lazy loading компонентов
- Оптимизированные изображения
- Gzip сжатие (в Nginx)
- Кеширование статики

## 🧪 Тестирование

```bash
# Запуск линтера
pnpm lint

# Проверка типов TypeScript
pnpm type-check

# Production сборка (тест)
pnpm build
```

## 📝 Лицензия

© 2025 ГенералИИ. Все права защищены.

## 🤝 Контакты

- **Email**: info@generalii.ru
- **Телефон**: +7 (495) 123-45-67
- **Адрес**: Москва, Россия

## 🔗 Полезные ссылки

- [Docker Guide](./DOCKER-GUIDE.md) - Полное руководство по Docker
- [Deployment Guide](./DEPLOYMENT.md) - Инструкции по развертыванию
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 🆘 Поддержка

Если у вас возникли проблемы:

1. Проверьте [DOCKER-GUIDE.md](./DOCKER-GUIDE.md) для Docker-специфичных вопросов
2. Проверьте [DEPLOYMENT.md](./DEPLOYMENT.md) для вопросов развертывания
3. Откройте issue на GitHub
4. Свяжитесь с нами по email

---

**Создано с ❤️ для ГенералИИ**

