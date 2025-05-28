# Установка из (Git)

## 0. Предварительные требования

Убедитесь, что у вас установлены:

- Git, Node.js 20+, Yarn 1.22.x
- Настроена и запущена одна из поддерживаемых баз данных: MySQL 8.x, MariaDB 10.9+ или PostgreSQL 10+

## 1. Клонирование репозитория через Git

### Последняя стабильная версия (Latest) (`main`)

Надёжная, протестированная версия. Обновляется только с исправлениями ошибок. Рекомендуется.

```bash
git clone https://github.com/nocobase/nocobase.git -b main --depth=1 my-nocobase
```

### Бета-версия (Beta) (`next`)

Содержит новые функции, которые скоро будут выпущены. Уже протестирована, но могут быть ошибки.

```bash
git clone https://github.com/nocobase/nocobase.git -b next --depth=1 my-nocobase
```

### Альфа-версия (Alpha) (`develop`)

Версия в активной разработке. Содержит новейшие функции, но может быть нестабильной или незавершённой.

```bash
git clone https://github.com/nocobase/nocobase.git -b develop --depth=1 my-nocobase
```

## 2. Переход в директорию проекта

```bash
cd my-nocobase
```

## 3. Установка зависимостей

```bash
yarn install --frozen-lockfile
```

## 4. Настройка переменных окружения

Переменные среды хранятся в файле `.env` в корне проекта. Измените значения в соответствии с вашей конфигурацией. Если не знаете, что указывать — [click here for environment variables description](../env.md), или оставьте значения по умолчанию:

```bash
TZ=UTC
APP_KEY=your-secret-key
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=postgres
DB_USER=nocobase
DB_PASSWORD=nocobase
NOCOBASE_PKG_USERNAME=your-username
NOCOBASE_PKG_PASSWORD=your-password
```

:::warning

- **Версия 1.4 и выше**: можно указать переменные [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) и [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password), чтобы автоматически загружать коммерческие плагины во время установки или обновления.;
- `TZ` часовой пояс приложения (по умолчанию — системный).;
- `APP_KEY` секретный ключ приложения для генерации токенов. Обязательно задайте свой собственный ключ и не публикуйте его.
- `DB_*` параметры подключения к базе данных. При использовании внешнего сервера измените значения на собственные.
  :::

## 5. Установка NocoBase

```bash
yarn nocobase install --lang=ru-RU
```

## 6. Запуск NocoBase

Режим разработки

```bash
yarn dev
```

Режим продакшн

```bash
# Сборка проекта (только после установки зависимостей!)
yarn build
# Запуск в продакшене
yarn start
```

## 7. Вход в систему

Откройте [http://localhost:13000](http://localhost:13000) в браузере. Стандартные данные для входа: Email: `admin@nocobase.com` и Пароль: `admin123`.
