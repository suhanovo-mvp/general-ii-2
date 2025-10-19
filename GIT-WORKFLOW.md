# 🔄 Git Workflow - ГенералИИ

Инструкции по работе с Git репозиторием проекта.

## 📦 Репозиторий

- **GitHub**: https://github.com/suhanovo-mvp/general-ii-2
- **Ветка**: `main`

## 🚀 Первоначальная настройка (уже выполнено)

```bash
# Настройка пользователя
git config --global user.name "Dmitrii"
git config --global user.email "suhanovo.2.17@gmail.com"

# Инициализация репозитория
git init
git remote add origin https://github.com/suhanovo-mvp/general-ii-2.git
git branch -M main

# Первый push
git push -u origin main
```

## 📝 Ежедневная работа

### Внесение изменений

```bash
# 1. Проверить статус
git status

# 2. Добавить измененные файлы
git add .

# 3. Создать коммит
git commit -m "Описание изменений"

# 4. Отправить на GitHub
git push origin main
```

### Получение изменений

```bash
# Получить последние изменения с GitHub
git pull origin main
```

## 🔧 Полезные команды

### Просмотр истории

```bash
# Последние 10 коммитов
git log --oneline -10

# Детальная история
git log --graph --oneline --all

# Изменения в конкретном файле
git log -p client/src/pages/Home.tsx
```

### Отмена изменений

```bash
# Отменить изменения в файле (до add)
git checkout -- filename

# Отменить git add
git reset HEAD filename

# Отменить последний коммит (сохранив изменения)
git reset --soft HEAD~1

# Отменить последний коммит (удалив изменения)
git reset --hard HEAD~1
```

### Ветки

```bash
# Создать новую ветку
git checkout -b feature/new-feature

# Переключиться на ветку
git checkout main

# Список веток
git branch -a

# Удалить ветку
git branch -d feature/old-feature
```

### Слияние веток

```bash
# Переключиться на main
git checkout main

# Слить feature ветку
git merge feature/new-feature

# Отправить на GitHub
git push origin main
```

## 🔐 Работа с токенами

### Использование Personal Access Token

```bash
# Push с токеном (одноразово)
git push https://TOKEN@github.com/suhanovo-mvp/general-ii-2.git main

# Настроить credential helper (сохранить токен)
git config --global credential.helper store
git push origin main
# Введите username: suhanovo-mvp
# Введите password: ваш_токен
```

### Создание нового токена

1. Откройте: https://github.com/settings/tokens
2. "Generate new token (classic)"
3. Выберите права:
   - ✅ `repo` (все подпункты)
   - ✅ `workflow` (если используете GitHub Actions)
4. Скопируйте токен (показывается только один раз!)

## 📋 Рекомендуемые практики

### Структура коммитов

```bash
# Хорошие примеры
git commit -m "feat: Add mobile menu component"
git commit -m "fix: Correct navigation scroll offset"
git commit -m "docs: Update Docker guide"
git commit -m "style: Improve button hover effects"
git commit -m "refactor: Optimize Home component"

# Плохие примеры
git commit -m "fix"
git commit -m "changes"
git commit -m "update"
```

### Типы коммитов

- `feat`: Новая функциональность
- `fix`: Исправление бага
- `docs`: Изменения в документации
- `style`: Форматирование, стили (не влияет на код)
- `refactor`: Рефакторинг кода
- `test`: Добавление тестов
- `chore`: Обновление зависимостей, конфигурации

### Частота коммитов

- ✅ Коммитьте часто (логические единицы работы)
- ✅ Один коммит = одна задача/фикс
- ❌ Не накапливайте много изменений в одном коммите
- ❌ Не коммитьте незавершенную работу

## 🔄 Workflow для обновлений

### Обновление дизайна

```bash
# 1. Внесите изменения в код
# 2. Проверьте локально
pnpm dev

# 3. Создайте коммит
git add client/src/
git commit -m "style: Update hero section gradient"

# 4. Отправьте на GitHub
git push origin main
```

### Добавление новой секции

```bash
# 1. Создайте новый компонент
# 2. Импортируйте в Home.tsx
# 3. Протестируйте

# 4. Коммит
git add .
git commit -m "feat: Add testimonials section"
git push origin main
```

### Обновление зависимостей

```bash
# 1. Обновите package.json
pnpm update

# 2. Протестируйте
pnpm build

# 3. Коммит
git add package.json pnpm-lock.yaml
git commit -m "chore: Update dependencies"
git push origin main
```

## 🐛 Решение проблем

### Конфликты при pull

```bash
# 1. Получить изменения
git pull origin main

# 2. Если есть конфликты, разрешите их в редакторе
# Найдите строки с <<<<<<< HEAD

# 3. После разрешения конфликтов
git add .
git commit -m "merge: Resolve conflicts"
git push origin main
```

### Случайно закоммитили секреты

```bash
# 1. Удалите файл с секретами
git rm --cached .env

# 2. Добавьте в .gitignore
echo ".env" >> .gitignore

# 3. Коммит
git commit -m "chore: Remove secrets from repo"
git push origin main

# 4. ВАЖНО: Смените все секреты/токены!
```

### Откатить изменения на GitHub

```bash
# 1. Найдите хеш коммита для отката
git log --oneline

# 2. Откатитесь локально
git reset --hard COMMIT_HASH

# 3. Force push (осторожно!)
git push origin main --force
```

## 📊 Мониторинг репозитория

### Проверка размера

```bash
# Размер репозитория
du -sh .git

# Большие файлы
git rev-list --objects --all | \
  git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' | \
  awk '/^blob/ {print substr($0,6)}' | \
  sort --numeric-sort --key=2 | \
  tail -10
```

### Статистика

```bash
# Количество коммитов
git rev-list --count main

# Авторы и их вклад
git shortlog -sn

# Изменения за последнюю неделю
git log --since="1 week ago" --oneline
```

## 🔗 Полезные ссылки

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Best Practices](https://github.com/git-tips/tips)

## 📞 Помощь

При возникновении проблем с Git:

1. Проверьте статус: `git status`
2. Проверьте логи: `git log --oneline -5`
3. Проверьте remote: `git remote -v`
4. Обратитесь к этому документу
5. Поищите решение: https://stackoverflow.com/questions/tagged/git

---

**Успешной работы с Git! 🚀**

