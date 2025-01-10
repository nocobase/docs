# Environment Variables

## How to Set Environment Variables?

### Git Source Code or `create-nocobase-app` Installation Method

Set environment variables in the `.env` file in the project's root directory. After modifying the environment variables, kill the application process and restart it.

### Docker Installation Method

Modify the `docker-compose.yml` configuration and set the environment variables in the `environment` parameter. Example:

```yml
services:
  app:
    image: nocobase/nocobase:latest
    environment:
      - APP_ENV=production
```

You can also use `env_file` to set environment variables in the `.env` file. Example:

```yml
services:
  app:
    image: nocobase/nocobase:latest
    env_file: .env
```

After modifying the environment variables, rebuild the app container:

```yml
docker-compose up -d app
```

## Global Environment Variables

Saved in the `.env` file

### TZ

Used to set the application's time zone, with the default being the system's time zone.

https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

:::warning
Time-related operations will be handled according to this time zone. Changing TZ may affect date values in the database. For more details, refer to [Date & Time Overview](/handbook/data-modeling/collection-fields/datetime).
:::

### APP_ENV

Application environment, default is `development`, options include

- `production` production environment
- `development` development environment

```bash
APP_ENV=production
```

### APP_KEY

Secret key, for scenarios such as jwt

```bash
APP_KEY=app-key-test
```

### APP_PORT

Application port, default is `13000`

```bash
APP_PORT=13000
```

### API_BASE_PATH

NocoBase API address prefix, default is `/api/`

```bash
API_BASE_PATH=/api/
```

### CLUSTER_MODE

> `v1.6.0+`

The multi-core (cluster) mode for starting app. If this variable is configured, will be passed to the pm2 start command as the `-i <instances>` parameter. The options are consistent with the pm2 `-i` parameter (refer to [PM2: Cluster Mode](https://pm2.keymetrics.io/docs/usage/cluster-mode/)), including:

- `max`: Use the maximum number of CPU cores
- `-1`: Use the maximum number of CPU cores minus one
- `<number>`: Specify the number of cores

The default value is empty, meaning it is not enabled.

:::warning{title="Attention"}
This mode requires the use of plugins related to cluster mode, such as `@nocobase/plugin-sync-adapter-redis`. Otherwise, the functionality of applicaiton may encounter unexpected issues.
:::

Reference: [Cluster mode](./deployment/cluster-mode.md).

### PLUGIN_PACKAGE_PREFIX

Plugin package prefix, default is `@nocobase/plugin-,@nocobase/preset-`

For example, add plugin `hello` into project `my-nocobase-app`, the plugin package name is `@my-nocobase-app/plugin-hello`.

PLUGIN_PACKAGE_PREFIX is configured as follows:

```bash
PLUGIN_PACKAGE_PREFIX=@nocobase/plugin-,@nocobase-preset-,@my-nocobase-app/plugin-
```

The correspondence between plugin name and package name is:

- `users` plugin package name is `@nocobase/plugin-users`
- `nocobase` plugin package name is `@nocobase/preset-nocobase`
- `hello` plugin package name is `@my-nocobase-app/plugin-hello`

### DB_DIALECT

Database type, default is `sqlite`, options include

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

Database host (required when using MySQL or PostgreSQL databases)

Default is `localhost`

```bash
DB_HOST=localhost
```

### DB_PORT

Database port (required when using MySQL or PostgreSQL databases)

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

日志输出方式，多个用 `,` 分隔。开发环境默认值 `console`, 生产环境默认值 `console,dailyRotateFile`.
可选项：

- `console` - `console.log`
- `file` - `文件`
- `dailyRotateFile` - `按天滚动文件`

```bash
LOGGER_TRANSPORT=console,dailyRotateFile
```

### LOGGER_BASE_PATH

基于文件的日志存储路径，默认为 `storage/logs`。

```bash
LOGGER_BASE_PATH=storage/logs
```

### LOGGER_LEVEL

输出日志级别，开发环境默认值 `debug`, 生产环境默认值 `info`. 可选项：

- `error`
- `warn`
- `info`
- `debug`
- `trace`

```bash
LOGGER_LEVEL=info
```

数据库日志输出级别为 `debug`, 由 `DB_LOGGING` 控制是否输出，不受 `LOGGER_LEVEL` 影响。

### LOGGER_MAX_FILES

最大保留日志文件数。

- `LOGGER_TRANSPORT` 为 `file` 时，默认值为 `10`.
- `LOGGER_TRANSPORT` 为 `dailyRotateFile`, 使用 `[n]d` 代表天数。默认值为 `14d`.

```bash
LOGGER_MAX_FILES=14d
```

### LOGGER_MAX_SIZE

按大小滚动日志。

- `LOGGER_TRANSPORT` 为 `file` 时，单位为 `byte`, 默认值为 `20971520 (20 * 1024 * 1024)`.
- `LOGGER_TRANSPORT` 为 `dailyRotateFile`, 可以使用 `[n]k`, `[n]m`, `[n]g`. 默认不配置。

```bash
LOGGER_MAX_SIZE=20971520
```

### LOGGER_FORMAT

日志打印格式，开发环境默认 `console`, 生产环境默认 `json`. 可选项:

- `console`
- `json`
- `logfmt`
- `delimiter`

```bash
LOGGER_FORMAT=json
```

参考：[日志格式](../plugins/logger/index.md#logformat)

### CACHE_DEFAULT_STORE

Specify the default cache method using the unique name，default is `memory`, options inlcude：

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

启动遥测数据收集，默认为 `off`.

```bash
TELEMETRY_ENABLED=on
```

### TELEMETRY_METRIC_READER

启用的监控指标采集器，默认为 `console`. 其他值需要参考对应采集器插件注册的名字，如 `prometheus`. 多个使用 `,` 分隔。

```bash
TELEMETRY_METRIC_READER=console,prometheus
```

### TELEMETRY_TRACE_PROCESSOR

启用的链路数据处理器，默认为 `console`. 其他值需要参考对应处理器插件注册的名字。多个使用 `,` 分隔。

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
APPEND_PRESET_LOCAL_PLUGINS=@my-project/plugin-foo,@my-project/plugin-bar
```

## Temporary Environment Variables

The installation of NocoBase can be assited by setting temporary environment variables, such as:

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

Root user mailbox

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
