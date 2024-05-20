# 环境变量

## 全局环境变量

保存在 `.env` 文件里

### APP_ENV

应用环境，默认值 `development`，可选项包括：

- `production` 生产环境
- `development` 开发环境

```bash
APP_ENV=production
```

### APP_KEY

应用的密钥，用于生成用户 token 等，修改为自己的应用密钥，并确保不对外泄露

:::warning
如果 APP_KEY 修改了，旧的 token 也会随之失效
:::

```bash
APP_KEY=app-key-test
```

### APP_PORT

应用端口，默认值 `13000`

```bash
APP_PORT=13000
```

### API_BASE_PATH

NocoBase API 地址前缀，默认值 `/api/`

```bash
API_BASE_PATH=/api/
```

### API_BASE_URL

### DB_DIALECT

数据库类型，默认值 `sqlite`，可选项包括：

- `sqlite`
- `mariadb`
- `mysql`
- `postgres`

```bash
DB_DIALECT=mysql
```

### DB_STORAGE

数据库文件路径（使用 SQLite 数据库时配置）

```bash
# 相对路径
DB_STORAGE=storage/db/nocobase.db
# 绝对路径
DB_STORAGE=/your/path/nocobase.db
```

### DB_HOST

数据库主机（使用 MySQL 或 PostgreSQL 数据库时需要配置）

默认值 `localhost`

```bash
DB_HOST=localhost
```

### DB_PORT

数据库端口（使用 MySQL 或 PostgreSQL 数据库时需要配置）

- MySQL、MariaDB 默认端口 3306
- PostgreSQL 默认端口 5432

```bash
DB_PORT=3306
```

### DB_DATABASE

数据库名（使用 MySQL 或 PostgreSQL 数据库时需要配置）

```bash
DB_DATABASE=nocobase
```

### DB_USER

数据库用户（使用 MySQL 或 PostgreSQL 数据库时需要配置）

```bash
DB_USER=nocobase
```

### DB_PASSWORD

数据库密码（使用 MySQL 或 PostgreSQL 数据库时需要配置）

```bash
DB_PASSWORD=nocobase
```

### DB_TABLE_PREFIX

数据表前缀

```bash
DB_TABLE_PREFIX=nocobase_
```

### DB_UNDERSCORED

数据库表名、字段名是否转为 snake case 风格，默认为 `false`。如果使用 MySQL（MariaDB）数据库，并且 `lower_case_table_names=1`，则 DB_UNDERSCORED 必须为 `true`

:::warning
当 `DB_UNDERSCORED=true` 时，数据库实际的表名和字段名与界面所见的并不一致，如 `orderDetails` 数据库里的是 `order_details`
:::

### DB_TIMEZONE

仅 MySQL（或 MariaDB）有效，MySQL 数据库的 timestamp 日期字段支持时区，但是只支持 1970 ~ 2038 区间，所以日期字段改为 datetime 适配，但 datetime 本身并不支持时区，需要通过环境变量 DB_TIMEZONE 来转换。

:::warning
如果 DB_TIMEZONE 有改动，已经生成的日期数据不会根据时区变化。
:::

### DB_LOGGING

数据库日志开关，默认值 `off`，可选项包括：

- `on` 打开
- `off` 关闭

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

参考：[日志格式](../plugins/logger/index.md#日志格式)

### CACHE_DEFAULT_STORE

使用缓存方式的唯一标识，指定服务端默认缓存方式，默认值 `memory`, 内置可选项：

- `memory`
- `redis`

```bash
CACHE_DEFAULT_STORE=memory
```

### CACHE_MEMORY_MAX

内存缓存项目最大个数，默认值 `2000`。

```bash
CACHE_MEMORY_MAX=2000
```

### CACHE_REDIS_URL

Redis连接，可选。示例：`redis://localhost:6379`

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

## 实验性环境变量

### APPEND_PRESET_LOCAL_PLUGINS

用于附加预置的未激活插件，值为插件包名（package.json 的 name 参数），多个插件英文逗号分隔。

:::info

1. 需要确保插件已经下载到本地，并且在 `node_modules` 目录里可以找到，更多内容查看 [插件的组织方式](/development/plugin)。
2. 添加了环境变量后，需要在初始化安装 `nocobase install` 或升级 `nocobase upgrade` 后才会在插件管理器页面里显示。
   :::

```bash
APPEND_PRESET_LOCAL_PLUGINS=@my-project/plugin-foo,@my-project/plugin-bar
```

### APPEND_PRESET_BUILT_IN_PLUGINS

用于附加内置并默认安装的插件，值为插件包名（package.json 的 name 参数），多个插件英文逗号分隔。

:::info

1. 需要确保插件已经下载到本地，并且在 `node_modules` 目录里可以找到，更多内容查看 [插件的组织方式](/development/plugin)。
2. 添加了环境变量后，需要在初始化安装 `nocobase install` 或升级 `nocobase upgrade` 时会自动安装或升级插件。
   :::

```bash
APPEND_PRESET_BUILT_IN_PLUGINS=@my-project/plugin-foo,@my-project/plugin-bar
```

## 临时环境变量

安装 NocoBase 时，可以通过设置临时的环境变量来辅助安装，如：

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  INIT_ROOT_NICKNAME="Super Admin" \
  nocobase install

# 等同于
yarn nocobase install \
  --lang=zh-CN  \
  --root-email=demo@nocobase.com \
  --root-password=admin123 \
  --root-nickname="Super Admin"

# 等同于
yarn nocobase install -l zh-CN -e demo@nocobase.com -p admin123 -n "Super Admin"
```

### INIT_APP_LANG

安装时的语言，默认值 `en-US`，可选项包括：

- `en-US`
- `zh-CN`

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  nocobase install
```

### INIT_ROOT_EMAIL

Root 用户邮箱

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  nocobase install
```

### INIT_ROOT_PASSWORD

Root 用户密码

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  nocobase install
```

### INIT_ROOT_NICKNAME

Root 用户昵称

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  INIT_ROOT_NICKNAME="Super Admin" \
  nocobase install
```
