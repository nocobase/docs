# create-nocobase-app

## 0. Предварительные требования

Убедитесь, что у вас:

- Установлены Node.js 20+, Yarn 1.22.x
- Настроена и запущена одна из поддерживаемых баз данных: MySQL 8.x, MariaDB 10.9+ или PostgreSQL 10+

Рекомендуется установить последнюю LTS-версию Node.js с официального сайта. Для удобства управления версиями Node.js используйте nvm (или nvm-windows для Windows).

Проверка установленной версии:
```bash
$ node -v

v20.10.0
```

Установка менеджера пакетов Yarn:

```bash
$ npm install --global yarn
$ yarn -v

1.22.21
```

## 1. Создание проекта NocoBase

### Последняя стабильная версия (Latest)

Рекомендуется к установке. Надёжная и протестированная версия, обновляется только с исправлениями ошибок.

<Tabs>
<div label="PostgreSQL" name="postgres">

```bash
yarn create nocobase-app my-nocobase-app -d postgres \
   -e DB_HOST=localhost \
   -e DB_PORT=5432 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=UTC \
   -e NOCOBASE_PKG_USERNAME= \
   -e NOCOBASE_PKG_PASSWORD=
```

</div>

<div label="MySQL" name="mysql">

```bash
yarn create nocobase-app my-nocobase-app -d mysql \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=UTC \
   -e NOCOBASE_PKG_USERNAME= \
   -e NOCOBASE_PKG_PASSWORD=
```

</div>

<div label="MariaDB" name="mariadb">

```bash
yarn create nocobase-app my-nocobase-app -d mariadb \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=UTC \
   -e NOCOBASE_PKG_USERNAME= \
   -e NOCOBASE_PKG_PASSWORD=
```

</div>
</Tabs>

### Бета-версия (Beta)

Содержит функции, которые ещё не выпущены, но уже прошли первичное тестирование. Может содержать ошибки.

<Tabs>
<div label="PostgreSQL" name="postgres">

```bash
npx create-nocobase-app@beta my-nocobase-app -d postgres \
   -e DB_HOST=localhost \
   -e DB_PORT=5432 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=UTC \
   -e NOCOBASE_PKG_USERNAME= \
   -e NOCOBASE_PKG_PASSWORD=
```

</div>

<div label="MySQL" name="mysql">

```bash
npx create-nocobase-app@beta my-nocobase-app -d mysql \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=UTC \
   -e NOCOBASE_PKG_USERNAME= \
   -e NOCOBASE_PKG_PASSWORD=
```

</div>

<div label="MariaDB" name="mariadb">

```bash
npx create-nocobase-app@beta my-nocobase-app -d mariadb \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=UTC \
   -e NOCOBASE_PKG_USERNAME= \
   -e NOCOBASE_PKG_PASSWORD=
```

</div>
</Tabs>

### Альфа-версия (Alpha)

Версия в активной разработке. Содержит самые свежие функции, которые могут быть нестабильны или незавершены.

<Tabs>
<div label="PostgreSQL" name="postgres">

```bash
npx create-nocobase-app@alpha my-nocobase-app -d postgres \
   -e DB_HOST=localhost \
   -e DB_PORT=5432 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=UTC \
   -e NOCOBASE_PKG_USERNAME= \
   -e NOCOBASE_PKG_PASSWORD=
```

</div>

<div label="MySQL" name="mysql">

```bash
npx create-nocobase-app@alpha my-nocobase-app -d mysql \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=UTC \
   -e NOCOBASE_PKG_USERNAME= \
   -e NOCOBASE_PKG_PASSWORD=
```

</div>

<div label="MariaDB" name="mariadb">

```bash
npx create-nocobase-app@alpha my-nocobase-app -d mariadb \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=UTC \
   -e NOCOBASE_PKG_USERNAME= \
   -e NOCOBASE_PKG_PASSWORD=
```

</div>
</Tabs>

:::warning

- **Версия 1.4 и выше**: можно указать переменные [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) и [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password), чтобы автоматически загружать коммерческие плагины во время установки или обновления.;
- `TZ` часовой пояс приложения (по умолчанию — системный).;
- `APP_KEY` секретный ключ приложения для генерации токенов. Обязательно задайте свой собственный ключ и не публикуйте его.
- `DB_*` параметры подключения к базе данных. При использовании внешнего сервера измените значения на собственные.
  :::

## 2. Переход в директорию проекта

```bash
cd my-nocobase-app
```

## 3. Установка зависимостей

📢 Установка может занять более 10 минут в зависимости от скорости сети и конфигурации системы.

```bash
yarn install
```

## 4. Установка NocoBase

```bash
yarn nocobase install --lang=ru-RU
```

## 5. Запуск NocoBase

Режим разработки

```bash
yarn dev
```

Режим продакшн

```bash
yarn start
```

💡 Для продакшн-режима: если вы внесли изменения в код, перед запуском необходимо выполнить yarn build.

## 6. Вход в систему

Откройте [http://localhost:13000](http://localhost:13000) в браузере. Стандартные данные для входа: Email: `admin@nocobase.com` и Пароль: `admin123`.
