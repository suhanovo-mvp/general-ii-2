# 🐳 Docker Guide - ГенералИИ

Полное руководство по сборке и развертыванию Docker-контейнера.

## 📋 Предварительные требования

- Docker 20.10+ установлен
- Docker Compose 2.0+ (опционально, но рекомендуется)
- 2GB свободного места на диске
- Порт 8080 свободен (или измените в docker-compose.yml)

## 🚀 Быстрый старт

### Вариант 1: Docker Compose (Рекомендуется)

```bash
# 1. Распакуйте проект
tar -xzf generalii-improved.tar.gz
cd generalii-improved

# 2. Запустите контейнер
docker-compose up -d

# 3. Откройте в браузере
# http://localhost:8080
```

### Вариант 2: Docker CLI

```bash
# 1. Соберите образ
docker build -t generalii-improved:latest .

# 2. Запустите контейнер
docker run -d \
  --name generalii-improved \
  -p 8080:80 \
  --restart unless-stopped \
  generalii-improved:latest

# 3. Откройте в браузере
# http://localhost:8080
```

## 📦 Структура Docker конфигурации

```
generalii-improved/
├── Dockerfile              # Multi-stage build конфигурация
├── docker-compose.yml      # Compose конфигурация
├── nginx.conf             # Nginx конфигурация для production
├── .dockerignore          # Исключения при сборке
└── build-docker.sh        # Скрипт автоматической сборки
```

## 🔧 Dockerfile - Подробности

Используется **multi-stage build** для оптимизации размера образа:

### Stage 1: Builder
- Базовый образ: `node:22-alpine`
- Устанавливает pnpm
- Собирает production версию приложения
- Результат: `/app/dist/public`

### Stage 2: Production
- Базовый образ: `nginx:alpine`
- Копирует собранные файлы из builder
- Настраивает Nginx
- Размер итогового образа: ~50MB

## ⚙️ Nginx конфигурация

Оптимизированная конфигурация включает:

- **Gzip сжатие** для текстовых файлов
- **Кеширование статики** на 1 год
- **Security headers** (X-Frame-Options, X-XSS-Protection и др.)
- **SPA routing** - все маршруты ведут к index.html
- **Healthcheck** на порту 80

## 🛠 Управление контейнером

### Docker Compose команды

```bash
# Запустить
docker-compose up -d

# Остановить
docker-compose down

# Перезапустить
docker-compose restart

# Просмотр логов
docker-compose logs -f

# Просмотр логов (последние 100 строк)
docker-compose logs -f --tail 100

# Проверка статуса
docker-compose ps

# Пересборка и перезапуск
docker-compose up -d --build
```

### Docker CLI команды

```bash
# Просмотр запущенных контейнеров
docker ps

# Просмотр логов
docker logs -f generalii-improved

# Остановка
docker stop generalii-improved

# Запуск
docker start generalii-improved

# Перезапуск
docker restart generalii-improved

# Удаление контейнера
docker rm -f generalii-improved

# Удаление образа
docker rmi generalii-improved:latest
```

## 📊 Мониторинг

### Проверка здоровья контейнера

```bash
# Статус healthcheck
docker inspect --format='{{.State.Health.Status}}' generalii-improved

# Детальная информация о здоровье
docker inspect generalii-improved | jq '.[0].State.Health'
```

### Использование ресурсов

```bash
# Статистика в реальном времени
docker stats generalii-improved

# Использование диска
docker system df

# Размер образа
docker images generalii-improved
```

## 🔄 Обновление приложения

### Метод 1: Пересборка

```bash
# Получите обновленный код
git pull origin main

# Пересоберите и перезапустите
docker-compose down
docker-compose up -d --build
```

### Метод 2: Новый образ

```bash
# Остановите старый контейнер
docker stop generalii-improved
docker rm generalii-improved

# Удалите старый образ
docker rmi generalii-improved:latest

# Соберите новый образ
docker build -t generalii-improved:latest .

# Запустите новый контейнер
docker run -d --name generalii-improved -p 8080:80 generalii-improved:latest
```

## 🌐 Развертывание на сервере

### На VPS/Dedicated сервере

```bash
# 1. Подключитесь к серверу
ssh user@your-server.com

# 2. Установите Docker (если не установлен)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 3. Установите Docker Compose
sudo apt-get update
sudo apt-get install docker-compose-plugin

# 4. Загрузите проект
git clone https://github.com/your-username/generalii-improved.git
cd generalii-improved

# 5. Запустите
docker-compose up -d

# 6. Проверьте статус
docker-compose ps
docker-compose logs -f
```

### С Nginx reverse proxy

Создайте файл `/etc/nginx/sites-available/generalii`:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Активируйте конфигурацию:

```bash
sudo ln -s /etc/nginx/sites-available/generalii /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### SSL с Let's Encrypt

```bash
# Установите Certbot
sudo apt-get install certbot python3-certbot-nginx

# Получите сертификат
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Автоматическое обновление (тест)
sudo certbot renew --dry-run
```

## 📤 Экспорт и импорт образа

### Экспорт образа в файл

```bash
# Сохранить образ в tar архив
docker save -o generalii-improved.tar generalii-improved:latest

# Сжать архив
gzip generalii-improved.tar

# Результат: generalii-improved.tar.gz
```

### Импорт образа из файла

```bash
# Распаковать и загрузить образ
gunzip -c generalii-improved.tar.gz | docker load

# Или в два шага
gunzip generalii-improved.tar.gz
docker load -i generalii-improved.tar

# Запустить контейнер
docker run -d -p 8080:80 generalii-improved:latest
```

## 🐛 Устранение неполадок

### Контейнер не запускается

```bash
# Проверьте логи
docker logs generalii-improved

# Проверьте статус Docker
sudo systemctl status docker

# Перезапустите Docker daemon
sudo systemctl restart docker
```

### Порт уже занят

```bash
# Найдите процесс на порту 8080
sudo lsof -i :8080
sudo netstat -tulpn | grep 8080

# Измените порт в docker-compose.yml
ports:
  - "8081:80"  # Используйте другой порт
```

### Проблемы со сборкой

```bash
# Очистите кеш Docker
docker builder prune -a

# Пересоберите без кеша
docker build --no-cache -t generalii-improved:latest .

# Проверьте место на диске
df -h
docker system df
```

### Образ слишком большой

```bash
# Проверьте размер слоев
docker history generalii-improved:latest

# Очистите неиспользуемые образы
docker image prune -a

# Оптимизируйте Dockerfile (уже оптимизирован)
```

## 🔐 Безопасность

### Рекомендации

1. **Не запускайте от root** - контейнер уже настроен на работу от nginx user
2. **Обновляйте базовые образы** - регулярно пересобирайте с новыми версиями
3. **Используйте SSL** - всегда используйте HTTPS в production
4. **Ограничьте ресурсы** - добавьте лимиты в docker-compose.yml:

```yaml
services:
  web:
    # ... другие настройки
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
```

5. **Сканируйте на уязвимости**:

```bash
# Установите Trivy
docker run aquasec/trivy image generalii-improved:latest
```

## 📈 Производительность

### Оптимизации уже применены

- ✅ Multi-stage build (минимальный размер)
- ✅ Gzip сжатие
- ✅ Кеширование статики (1 год)
- ✅ Alpine Linux (минимальный образ)
- ✅ Healthcheck для мониторинга

### Дополнительные оптимизации

```yaml
# docker-compose.yml
services:
  web:
    # ... другие настройки
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

## 🔗 Полезные ссылки

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)

## 📞 Поддержка

При возникновении проблем:

1. Проверьте логи: `docker logs generalii-improved`
2. Проверьте статус: `docker ps -a`
3. Проверьте ресурсы: `docker stats`
4. Обратитесь к разделу "Устранение неполадок"

---

**Успешного развертывания! 🚀**

