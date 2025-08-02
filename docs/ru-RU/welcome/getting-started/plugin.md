# Установка и обновление плагинов

## Установка и обновление коммерческих плагинов (версии 1.4 и выше)

### Настройка переменных среды

Задайте переменные среды [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) и [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password) (имя пользователя и пароль сервисной платформы NocoBase) для автоматической загрузки коммерческих плагинов во время установки или обновления приложения.

```bash
NOCOBASE_PKG_USERNAME=your-username
NOCOBASE_PKG_PASSWORD=your-password
```

[Как задать переменные окружения?](/welcome/getting-started/env)

### Загрузка плагинов

#### Установка Docker

Перезапустите контейнер для автоматической загрузки плагинов

```bash
docker compose restart app
```

#### Получите исходный код Git или создайте-nocobase-приложение для установки

Выполните команду `pkg download-pro`, чтобы загрузить плагины

```bash
yarn nocobase pkg download-pro
```

Внимание ! ! !

- Вышеуказанные шаги позволят загрузить только те плагины, которые соответствуют текущей версии приложения, и не приведут к обновлению плагинов. Если вам нужно обновить плагины, пожалуйста, сначала [обновите приложение](/welcome/getting-started/upgrading), авторизованные плагины будут автоматически обновляться.
- Авторизованные плагины также будут автоматически загружены во время [установки](/welcome/getting-started/installation) или [обновления](/welcome/getting-started/upgrading).

### Активировать плагины

Выберите плагины, которые вы хотите активировать, в менеджере плагинов.

![20241204000230](https://static-docs.nocobase.com/20241204000230.png)

### Обновите плагины

Сначала [обновите приложение](/welcome/getting-started/upgrading) и авторизованные плагины будут автоматически загружены или обновлены во время обновления приложения. В настоящее время невозможно обновить плагины без обновления приложения.

## Установка и обновление плагинов через интерфейс

Добавление или обновление плагинов через интерфейс приведет к перезапуску приложения. Для пакетных операций рассмотрите альтернативные методы.

### Upload Plugin Packages via Plugin Manager

Как коммерческие, так и сторонние плагины могут быть загружены непосредственно через интерфейс.

![20241204000127](https://static-docs.nocobase.com/20241204000127.png)

Заметки:

- Для создания пакетов плагинов обратитесь к [Написание вашего первого плагина](/development/your-fisrt-plugin) для обеспечения надлежащего изготовления и упаковки.

### Активировать плагины

Выберите плагины, которые вы хотите активировать, в менеджере плагинов.

![20241204000230](https://static-docs.nocobase.com/20241204000230.png)

## Установка и обновление плагинов через загрузку каталога плагинов

Предупреждение:

- Поддерживает пакетные операции и удобен для миграции.
- Подходит для серверов в среде интрасети.
- Рекомендуется для обновления несовместимых плагинов, вызванных обновлениями приложений.

### Добавляйте или обновляйте плагины

Храните коммерческие и сторонние плагины в каталоге `./storage/plugins/`. Вы можете загрузить плагины в среду разработки и загрузить их в каталог `./storage/plugins/` на сервере. В качестве альтернативы, можно напрямую извлечь пакет плагина в каталог. Например:

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.4.0.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

Эта команда гарантирует, что плагин будет извлечен в `/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas` без каталога `package`. Правильная структура каталогов выглядит следующим образом:

```bash
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.js
./plugin-auth-cas/dist/server/auth.js
./plugin-auth-cas/client.js
./plugin-auth-cas/dist/constants.js
./plugin-auth-cas/dist/externalVersion.js
./plugin-auth-cas/dist/client/index.js
./plugin-auth-cas/dist/index.js
./plugin-auth-cas/dist/server/index.js
./plugin-auth-cas/dist/server/actions/login.js
./plugin-auth-cas/dist/server/plugin.js
./plugin-auth-cas/server.js
./plugin-auth-cas/dist/server/actions/service.js
./plugin-auth-cas/dist/locale/en-US.json
./plugin-auth-cas/dist/locale/ko_KR.json
./plugin-auth-cas/package.json
./plugin-auth-cas/dist/locale/zh-CN.json
./plugin-auth-cas/README.md
./plugin-auth-cas/README.zh-CN.md
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.d.ts
./plugin-auth-cas/dist/server/auth.d.ts
./plugin-auth-cas/client.d.ts
./plugin-auth-cas/dist/constants.d.ts
./plugin-auth-cas/dist/client/index.d.ts
./plugin-auth-cas/dist/client/locale/index.d.ts
./plugin-auth-cas/dist/index.d.ts
./plugin-auth-cas/dist/server/index.d.ts
./plugin-auth-cas/dist/server/actions/login.d.ts
./plugin-auth-cas/dist/client/Options.d.ts
./plugin-auth-cas/dist/server/plugin.d.ts
./plugin-auth-cas/server.d.ts
./plugin-auth-cas/dist/server/actions/service.d.ts
./plugin-auth-cas/dist/client/SigninPage.d.ts
./plugin-auth-cas/LICENSE.txt
```

### Запустите команду Upgrade для обновления плагинов

После загрузки плагинов в каталог плагинов выполните команду `nocobase upgrade`, чтобы завершить обновление.

```bash
yarn nocobase upgrade --skip-code-update
```
