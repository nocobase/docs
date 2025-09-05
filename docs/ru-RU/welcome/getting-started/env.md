# Переменные окружения

## Как задать переменные окружения?

### Установка из исходного кода или с помощью `create-nocobase-app`

Задайте переменные окружения в файле .env в корневой директории проекта. После изменения переменных необходимо перезапустить процесс приложения.

### Установка через Docker

Измените файл `docker-compose.yml`, добавив переменные окружения в параметр `environment`. Пример:

```yml
services:
  app:
    image: nocobase/nocobase:latest
    environment:
      - APP_ENV=production
```

Можно также использовать параметр `env_file`, чтобы задать переменные в отдельном `.env` файле. Пример:

```yml
services:
  app:
    image: nocobase/nocobase:latest
    env_file: .env
```

После изменения переменных окружения перезапустите контейнер:

```yml
docker compose up -d app
```

## Глобальные переменные окружения

Хранятся в файле `.env`

### TZ

Устанавливает часовой пояс приложения. По умолчанию используется системный часовой пояс.

https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

:::warning
Операции, связанные со временем, будут выполняться в соответствии с этим часовым поясом. Изменение TZ может повлиять на значения даты в базе данных. Более подробную информацию см. в разделе [Обзор даты и времени](/handbook/data-modeling/collection-fields/datetime).
:::

### APP_ENV

Среда выполнения приложения, по умолчанию `development`. Возможные значения

- `production` среда в производстве
- `development` среда разработки

```bash
APP_ENV=production
```

### APP_KEY

Секретный ключ, используется, например, для генерации JWT.

```bash
APP_KEY=app-key-test
```

### APP_PORT

Порт, на котором работает приложение. По умолчанию: `13000`

```bash
APP_PORT=13000
```

### API_BASE_PATH

Префикс адреса API NocoBase. По умолчанию:  `/api/`

```bash
API_BASE_PATH=/api/
```

### CLUSTER_MODE

> `v1.6.0+`

Многопроцессный (кластерный) режим запуска приложения. Если переменная задана, она будет передана в команду запуска pm2 как параметр `-i` <instances>. Поддерживаются те же параметры, что и в: [PM2: Cluster Mode](https://pm2.keymetrics.io/docs/usage/cluster-mode/)),

- `max`: Использовать максимум доступных ядер CPU
- `-1`: Использовать максимум ядер минус одно
- `<number>`: Указать конкретное количество ядер

Если переменная не задана — режим кластера отключён.

:::warning{title="Attention"}
Этот режим требует использования плагинов, связанных с кластерным режимом, таких как `@nocobase/plugin-sync-adapter-redis`. В противном случае функциональность приложения может столкнуться с непредвиденными проблемами.
:::

Подробнее: [Cluster mode](./deployment/cluster-mode.md).

### PLUGIN_PACKAGE_PREFIX

Префикс имён пакетов плагинов. По умолчанию: `@nocobase/plugin-,@nocobase/preset-`

Пример: при добавлении плагина `hello` в проект `my-nocobase-app`, имя пакета будет `@my-nocobase-app/plugin-hello`.

PLUGIN_PACKAGE_PREFIX is configured as follows:

```bash
PLUGIN_PACKAGE_PREFIX=@nocobase/plugin-,@nocobase-preset-,@my-nocobase-app/plugin-
```

Соответствие имён плагинов и пакетов:

- `users` Название пакета плагина `@nocobase/plugin-users`
- `nocobase` Название пакета плагина `@nocobase/preset-nocobase`
- `hello` Название пакета плагина `@my-nocobase-app/plugin-hello`

### DB_DIALECT

Тип базы данных, по умолчанию — `sqlite`. Возможные значения:

- `sqlite`
- `mysql`
- `postgres`

```bash
DB_DIALECT=mysql
```

### DB_STORAGE

Database file path (required when using a SQLite database)

```bash
### Relative path
DB_STORAGE=storage/db/nocobase.db
# Absolute path
DB_STORAGE=/your/path/nocobase.db
```

### DB_HOST

Путь к файлу базы данных (обязательно при использовании базы данных SQLite)

По умолчанию `localhost`

```bash
DB_HOST=localhost
```

### DB_PORT

Порт базы данных (обязательно при использовании MySQL или PostgreSQL)

- Default port of MySQL is 3306
- Default port of PostgreSQL is 5432

```bash
DB_PORT=3306
```

### DB_DATABASE

Database name (required when using MySQL or PostgreSQL databases)

```bash
DB_DATABASE=nocobase
```

### DB_USER

Database user (required when using MySQL or PostgreSQL databases)

```bash
DB_USER=nocobase
```

### DB_PASSWORD

Database password (required when using MySQL or PostgreSQL databases)

```bash
DB_PASSWORD=nocobase
```

### DB_TABLE_PREFIX

Data table prefix

```bash
DB_TABLE_PREFIX=nocobase_
```

### DB_LOGGING

Database log switch, default is `off`, options include

- `on` on
- `off` off

```bash
DB_LOGGING=on
```

### NOCOBASE_PKG_USERNAME

Service platform username, used for automatically downloading and updating plugins.

### NOCOBASE_PKG_PASSWORD

Service platform password, used for automatically downloading and updating plugins.

### LOGGER_TRANSPORT

Log output method，separated by `,` 。Default is `console` in development, `console,dailyRotateFile` in production. 
Options：

- `console` - `console.log`
- `file` - `Output to file`
- `dailyRotateFile` - `Output to daily rotating files`

```bash
LOGGER_TRANSPORT=console,dailyRotateFile
```

### LOGGER_BASE_PATH

File-based log storage path, default is `storage/logs`。

```bash
LOGGER_BASE_PATH=storage/logs
```

### LOGGER_LEVEL

Output log level. Default is `debug` in development and `info` in production. Options:

- `error`
- `warn`
- `info`
- `debug`
- `trace`

```bash
LOGGER_LEVEL=info
```

The database log output level is `debug`, controlled by `DB_LOGGING`, and is unaffected by `LOGGER_LEVEL`.

### LOGGER_MAX_FILES

Maximum number of log files to keep.

- When `LOGGER_TRANSPORT` is `file` : Default is `10`.
- When `LOGGER_TRANSPORT` is `dailyRotateFile`: Use `[n]d` to represent days. Default is `14d`.

```bash
LOGGER_MAX_FILES=14d
```

### LOGGER_MAX_SIZE

Log rotation by size.

- When `LOGGER_TRANSPORT` is `file`: Unit is `byte`. Default is `20971520 (20 * 1024 * 1024)`.
- When `LOGGER_TRANSPORT` is `dailyRotateFile`: Use `[n]k`, `[n]m`, `[n]g`. Default is not set.

```bash
LOGGER_MAX_SIZE=20971520
```

### LOGGER_FORMAT

Log print format. Default is `console` in development and `json` in production. Options:

- `console`
- `json`
- `logfmt`
- `delimiter`

```bash
LOGGER_FORMAT=json
```

Reference：[Log Format](../plugins/logger/index.md#logformat)

### CACHE_DEFAULT_STORE

Specify the default cache method using the unique name，default is `memory`, options include：

- `memory`
- `redis`

```bash
CACHE_DEFAULT_STORE=memory
```

### CACHE_MEMORY_MAX

Max number of items in memory cache，default is `2000`.

```bash
CACHE_MEMORY_MAX=2000
```

### CACHE_REDIS_URL

Redis URL, optional. Example：`redis://localhost:6379`

```bash
CACHE_REDIS_URL=redis://localhost:6379
```

### TELEMETRY_ENABLED

Enable telemetry data collection，default is `off`.

```bash
TELEMETRY_ENABLED=on
```

### TELEMETRY_METRIC_READER

Enabled monitoring metric collectors, default is `console`. Other values should refer to the names registered by corresponding collector plugins, such as `prometheus`. Multiple separated by `,` .

```bash
TELEMETRY_METRIC_READER=console,prometheus
```

### TELEMETRY_TRACE_PROCESSOR

Enabled trace data processors, default is `console`. Other values should refer to the names registered by corresponding processor plugins. Multiple separated by `,`.

```bash
TELEMETRY_TRACE_PROCESSOR=console
```

## Experimental Environment Variables

### APPEND_PRESET_LOCAL_PLUGINS

Used to append preset local plugins, with the value being the package name (the `name` parameter in `package.json`), separated by commas for multiple plugins.

:::info
These will only appear in the plugin manager page after initializing installation with `nocobase install` or upgrading with `nocobase upgrade`.
:::

```bash
APPEND_PRESET_LOCAL_PLUGINS=@my-project/plugin-foo,@my-project/plugin-bar
```

### APPEND_PRESET_BUILT_IN_PLUGINS

Used to append built-in plugins that are automatically installed by default, with the value being the package name (the `name` parameter in `package.json`), separated by commas for multiple plugins.

:::info
These plugins will be automatically installed or upgraded during initialization with `nocobase install` or `nocobase upgrade`.
:::

```bash
APPEND_PRESET_BUILT_IN_PLUGINS=@my-project/plugin-foo,@my-project/plugin-bar
```

## Temporary Environment Variables

The installation of NocoBase can be assisted by setting temporary environment variables, such as:

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  INIT_ROOT_NICKNAME="Super Admin" \
  nocobase install

# Equivalent to
yarn nocobase install \
  --lang=zh-CN \
  --root-email=demo@nocobase.com \
  --root-password=admin123 \
  --root-nickname="Super Admin"

# Equivalent to
yarn nocobase install -l zh-CN -e demo@nocobase.com -p admin123 -n "Super Admin"
```

### INIT_APP_LANG

Language at the time of installation, default is `en-US`, options include

- `en-US` English
- `zh-CN` Chinese (Simplified)

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  nocobase install
```

### INIT_ROOT_EMAIL

Root user email

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  nocobase install
```

### INIT_ROOT_PASSWORD

Root user password

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  nocobase install
```

### INIT_ROOT_NICKNAME

Root user nickname

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  INIT_ROOT_NICKNAME="Super Admin" \
  nocobase install
```
