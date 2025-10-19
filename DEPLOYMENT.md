# 🚀 Инструкция по развертыванию ГенералИИ

## 📦 Содержимое пакета

Архив `generalii-improved.tar.gz` содержит полный проект с:
- Исходным кодом React приложения
- Конфигурацией Docker
- Настройками Nginx
- Документацией

## 🐙 Загрузка на GitHub

### Шаг 1: Создайте репозиторий на GitHub

1. Перейдите на https://github.com/new
2. Введите название репозитория: `generalii-improved`
3. Выберите видимость (Public или Private)
4. **НЕ** добавляйте README, .gitignore или лицензию
5. Нажмите "Create repository"

### Шаг 2: Распакуйте и загрузите проект

```bash
# Распакуйте архив
tar -xzf generalii-improved.tar.gz
cd generalii-improved

# Инициализируйте Git
git init
git add .
git commit -m "Initial commit: Improved GeneralII AI website"

# Добавьте remote репозиторий (замените YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/generalii-improved.git

# Отправьте код на GitHub
git branch -M main
git push -u origin main
```

## 🐳 Развертывание с Docker

### Вариант 1: Docker Compose (Рекомендуется)

```bash
# Запустите контейнер
docker-compose up -d

# Проверьте статус
docker-compose ps

# Просмотрите логи
docker-compose logs -f

# Остановите контейнер
docker-compose down
```

Сайт будет доступен по адресу: **http://localhost:8080**

### Вариант 2: Docker CLI

```bash
# Соберите образ
docker build -t generalii-improved:latest .

# Запустите контейнер
docker run -d \
  --name generalii-improved \
  -p 8080:80 \
  --restart unless-stopped \
  generalii-improved:latest

# Проверьте статус
docker ps

# Просмотрите логи
docker logs -f generalii-improved

# Остановите контейнер
docker stop generalii-improved
docker rm generalii-improved
```

## 🌐 Развертывание на сервере

### На VPS/Dedicated сервере

```bash
# 1. Установите Docker (если еще не установлен)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 2. Установите Docker Compose
sudo apt-get update
sudo apt-get install docker-compose-plugin

# 3. Клонируйте репозиторий
git clone https://github.com/YOUR_USERNAME/generalii-improved.git
cd generalii-improved

# 4. Запустите приложение
docker-compose up -d

# 5. Настройте Nginx reverse proxy (опционально)
# Создайте файл /etc/nginx/sites-available/generalii
```

Пример конфигурации Nginx reverse proxy:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### SSL сертификат с Let's Encrypt

```bash
# Установите Certbot
sudo apt-get install certbot python3-certbot-nginx

# Получите SSL сертификат
sudo certbot --nginx -d your-domain.com

# Автоматическое обновление
sudo certbot renew --dry-run
```

## ☁️ Развертывание на облачных платформах

### Heroku

```bash
# Установите Heroku CLI
curl https://cli-assets.heroku.com/install.sh | sh

# Войдите в аккаунт
heroku login

# Создайте приложение
heroku create generalii-improved

# Установите buildpack для статических сайтов
heroku buildpacks:set heroku/nodejs

# Добавьте Procfile
echo "web: pnpm build && npx serve -s dist/public -l $PORT" > Procfile

# Деплой
git push heroku main
```

### Vercel

```bash
# Установите Vercel CLI
npm i -g vercel

# Деплой
vercel

# Production деплой
vercel --prod
```

### Netlify

```bash
# Установите Netlify CLI
npm install -g netlify-cli

# Войдите в аккаунт
netlify login

# Инициализируйте проект
netlify init

# Деплой
netlify deploy --prod
```

## 🔧 Локальная разработка

```bash
# Установите зависимости
pnpm install

# Запустите dev сервер
pnpm dev

# Откройте http://localhost:3000
```

## 📊 Мониторинг

### Проверка здоровья контейнера

```bash
# Статус контейнера
docker ps

# Использование ресурсов
docker stats generalii-improved

# Логи
docker logs -f generalii-improved --tail 100
```

### Метрики производительности

```bash
# Размер образа
docker images generalii-improved

# Использование дискового пространства
docker system df
```

## 🔄 Обновление

```bash
# Получите последние изменения
git pull origin main

# Пересоберите и перезапустите
docker-compose down
docker-compose up -d --build

# Или с Docker CLI
docker stop generalii-improved
docker rm generalii-improved
docker build -t generalii-improved:latest .
docker run -d --name generalii-improved -p 8080:80 generalii-improved:latest
```

## 🐛 Устранение неполадок

### Контейнер не запускается

```bash
# Проверьте логи
docker logs generalii-improved

# Проверьте статус Docker
sudo systemctl status docker

# Перезапустите Docker
sudo systemctl restart docker
```

### Порт уже используется

```bash
# Найдите процесс, использующий порт 8080
sudo lsof -i :8080

# Остановите процесс или измените порт в docker-compose.yml
ports:
  - "8081:80"  # Используйте другой порт
```

### Проблемы со сборкой

```bash
# Очистите кеш Docker
docker builder prune -a

# Пересоберите без кеша
docker build --no-cache -t generalii-improved:latest .
```

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи контейнера
2. Убедитесь, что Docker запущен
3. Проверьте доступность портов
4. Обратитесь к документации Docker

## 📝 Чеклист развертывания

- [ ] Репозиторий создан на GitHub
- [ ] Код загружен в репозиторий
- [ ] Docker установлен на сервере
- [ ] Образ успешно собран
- [ ] Контейнер запущен
- [ ] Сайт доступен по URL
- [ ] SSL сертификат настроен (для production)
- [ ] Мониторинг настроен
- [ ] Резервное копирование настроено

---

**Успешного развертывания! 🚀**

