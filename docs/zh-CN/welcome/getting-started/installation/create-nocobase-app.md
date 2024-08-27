# `create-nocobase-app` 安装

## 0. 先决条件

请确保你已经：

- 安装了 Node.js 18+、Yarn 1.22.x
- 配置并启动了所需数据库 MySQL 8.0.17+、MariaDB 10.9+、PostgreSQL 10+ 任选其一

如果你没有安装 Node.js 可以从官网下载并安装最新的 LTS 版本。如果你打算长期与 Node.js 打交道，推荐使用 nvm（Win 系统可以使用 nvm-windows ）来管理 Node.js 版本。

```bash
$ node -v

v18.19.0
```

推荐使用 yarn 包管理器。

```bash
$ npm install --global yarn
$ yarn -v

1.22.21
```

由于国内网络环境的原因，强烈建议你更换国内镜像。

```bash
$ yarn config set disable-self-update-check true
$ yarn config set registry https://registry.npmmirror.com/
$ yarn config set sqlite3_binary_host_mirror https://npmmirror.com/mirrors/sqlite3/
```

## 1. 创建 NocoBase 项目

### latest 版本

截止目前最稳定的版本，推荐安装此版本。

<Tabs>
<div label="PostgreSQL" name="postgres">

```bash
yarn create nocobase-app my-nocobase-app -d postgres \
   -e DB_HOST=localhost \
   -e DB_PORT=5432 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Shanghai
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
   -e TZ=Asia/Shanghai
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
   -e TZ=Asia/Shanghai
```

</div>
</Tabs>

### next 版本

内测版，包含一些未发布的新特性，这个版本可能还不完全稳定，适用于开发者或测试人员，用于提前体验新功能或进行兼容性测试。

<Tabs>
<div label="PostgreSQL" name="postgres">

```bash
npx create-nocobase-app@next my-nocobase-app -d postgres \
   -e DB_HOST=localhost \
   -e DB_PORT=5432 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Shanghai
```

</div>

<div label="MySQL" name="mysql">

```bash
npx create-nocobase-app@next my-nocobase-app -d mysql \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Shanghai
```

</div>

<div label="MariaDB" name="mariadb">

```bash
npx create-nocobase-app@next my-nocobase-app -d mariadb \
   -e DB_HOST=localhost \
   -e DB_PORT=3306 \
   -e DB_DATABASE=nocobase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Shanghai
```

</div>
</Tabs>

:::warning
- `TZ` 用于设置应用的时区，默认为操作系统时区；
- `APP_KEY` 是应用的密钥，用于生成用户 token 等（如果 APP_KEY 修改了，旧的 token 也会随之失效）。它可以是任意随机字符串。请修改为自己的秘钥，并确保不对外泄露；
- `DB_*` 为数据库相关，如果不是例子默认的数据库服务，请根据实际情况修改。
:::

## 2. 切换目录

```bash
cd my-nocobase-app
```

## 3. 安装依赖

📢 由于网络环境、系统配置等因素影响，接下来这一步骤可能需要十几分钟时间。

```bash
yarn install
# 生产环境部署时，为了减少体积，可以只安装必要的依赖
yarn install --production
```

## 4. 安装 NocoBase

```bash
yarn nocobase install --lang=zh-CN
```

## 5. 启动 NocoBase

开发环境

```bash
yarn dev
```

生产环境

```bash
yarn start
```

注：生产环境，如果代码有修改，需要执行 `yarn build`，再重新启动 NocoBase。

## 6. 登录 NocoBase

使用浏览器打开 http://localhost:13000/ 初始化账号和密码是 `admin@nocobase.com` 和 `admin123`。
