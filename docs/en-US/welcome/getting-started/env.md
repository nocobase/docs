# Environment Variables

## Global Environment Variables

Saved in the `.env` file

### APP_ENV

Application environment, default is `development`, options include

- `production` production environment
- `development` development environment

```bash
APP_ENV=production
```

### APP_HOST

Application host, default is `0.0.0.0`

```bash
APP_HOST=192.168.3.154
```

### APP_PORT

Application port, default is `13000`

```bash
APP_PORT=13000
```

### APP_KEY

Secret key, for scenarios such as jwt

```bash
APP_KEY=app-key-test
```

### API_BASE_PATH

NocoBase API address prefix, default is `/api/`

```bash
API_BASE_PATH=/api/
```

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
DB_HOST=storage/db/nocobase.db
# Absolute path
DB_HOST=/your/path/nocobase.db
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

日志打印格式，开发环境默认 `logfmt`, 生产环境默认 `json`. 可选项:

- `logfmt`
- `json`
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

启动遥测数据收集，默认为 `false`.

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
