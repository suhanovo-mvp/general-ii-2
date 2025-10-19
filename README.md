# ГенералИИ - Улучшенная версия

Современный лендинг для AI-консалтинговой компании с улучшенным дизайном, анимациями и интерактивными элементами.

## 🚀 Особенности

- **Современный дизайн**: Dark mode с градиентами и glassmorphism эффектами
- **Анимации**: Плавные переходы и микроинтеракции с Framer Motion
- **Адаптивность**: Полностью responsive дизайн для всех устройств
- **Производительность**: Оптимизированная сборка с code splitting
- **SEO-friendly**: Семантическая разметка и мета-теги

## 🛠 Технологический стек

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **UI Components**: shadcn/ui

## 📦 Установка и запуск

### Локальная разработка

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

### Docker развертывание

#### Вариант 1: Docker Compose (рекомендуется)

```bash
# Сборка и запуск контейнера
docker-compose up -d

# Просмотр логов
docker-compose logs -f

# Остановка контейнера
docker-compose down
```

Приложение будет доступно по адресу: http://localhost:8080

#### Вариант 2: Docker CLI

```bash
# Сборка образа
docker build -t generalii-improved .

# Запуск контейнера
docker run -d -p 8080:80 --name generalii-improved generalii-improved

# Просмотр логов
docker logs -f generalii-improved

# Остановка контейнера
docker stop generalii-improved

# Удаление контейнера
docker rm generalii-improved
```

## 🐙 Развертывание на GitHub

### 1. Создание репозитория

```bash
# Инициализация git (если еще не сделано)
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: Improved GeneralII website"

# Добавление remote репозитория
git remote add origin https://github.com/ваш-username/generalii-improved.git

# Отправка в GitHub
git push -u origin main
```

### 2. GitHub Actions для автоматической сборки Docker образа

Создайте файл `.github/workflows/docker-build.yml`:

```yaml
name: Docker Build and Push

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v2
    
    - name: Login to Docker Hub
      uses: docker/login-action@v2
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}
    
    - name: Build and push
      uses: docker/build-push-action@v4
      with:
        context: .
        push: true
        tags: |
          your-username/generalii-improved:latest
          your-username/generalii-improved:${{ github.sha }}
```

## 📁 Структура проекта

```
generalii-improved/
├── client/
│   ├── public/          # Статические файлы
│   └── src/
│       ├── components/  # React компоненты
│       ├── pages/       # Страницы приложения
│       ├── lib/         # Утилиты
│       └── index.css    # Глобальные стили
├── Dockerfile           # Docker конфигурация
├── docker-compose.yml   # Docker Compose конфигурация
├── nginx.conf          # Nginx конфигурация
└── package.json        # Зависимости проекта
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
- Buttons: Blue to Cyan
- Cards: Pink to Red

## 🔧 Конфигурация

### Переменные окружения

Создайте файл `.env` в корне проекта:

```env
VITE_APP_TITLE=ГенералИИ
VITE_API_URL=https://api.example.com
```

### Порты

- **Development**: 3000
- **Production (Docker)**: 8080

## 📝 Лицензия

© 2025 ГенералИИ. Все права защищены.

## 🤝 Контакты

- Email: info@generalii.ru
- Телефон: +7 (495) 123-45-67
- Адрес: Москва, Россия

