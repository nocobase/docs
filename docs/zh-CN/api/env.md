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

### APP_HOST

应用主机，默认值 `0.0.0.0`

```bash
APP_HOST=192.168.3.154
```

### APP_PORT

应用端口，默认值 `13000`

```bash
APP_PORT=13000
```

### APP_KEY

秘钥，用于 jwt 等场景

```bash
APP_KEY=app-key-test
```

### API_BASE_PATH

NocoBase API 地址前缀，默认值 `/api/`

```bash
API_BASE_PATH=/api/
```

### PLUGIN_PACKAGE_PREFIX

插件包前缀，默认值 `@nocobase/plugin-,@nocobase/preset-`

例如，有一名为 `my-nocobase-app` 的项目，新增了 `hello` 插件，包名为 `@my-nocobase-app/plugin-hello`。

PLUGIN_PACKAGE_PREFIX 配置如下：

```bash
PLUGIN_PACKAGE_PREFIX=@nocobase/plugin-,@nocobase/preset-,@my-nocobase-app/plugin-
```

插件名和包名的对应关系为：

- `users` 插件包名为 `@nocobase/plugin-users`
- `nocobase` 插件包名为 `@nocobase/preset-nocobase`
- `hello` 插件包名为 `@my-nocobase-app/plugin-hello`

### DB_DIALECT

数据库类型，默认值 `sqlite`，可选项包括：

- `sqlite`
- `mysql`
- `postgres`

```bash
DB_DIALECT=mysql
```

### DB_STORAGE

数据库文件路径（使用 SQLite 数据库时配置）

```bash
# 相对路径
DB_HOST=storage/db/nocobase.db
# 绝对路径
DB_HOST=/your/path/nocobase.db
```

### DB_HOST

数据库主机（使用 MySQL 或 PostgreSQL 数据库时需要配置）

默认值 `localhost`

```bash
DB_HOST=localhost
```

### DB_PORT

数据库端口（使用 MySQL 或 PostgreSQL 数据库时需要配置）

- MySQL 默认端口 3306
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
