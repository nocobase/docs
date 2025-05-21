# 插件的安装与升级

## 插件的安装与升级

### 配置授权信息

#### NocoBase 版本 >=1.7.0：配置许可证密钥

##### 获取 InstanceID（需要先确保数据库可以正常连接）

**Docker 安装**

- 直接复制 `./storage/.license/instance-id` 内容

**Git 源码或 create-nocobase-app 安装**

- 先执行 `yarn nocobase generate-instance-id`
- 再复制 `./storage/.license/instance-id`

##### 生成并下载许可证密钥

根据获取到的 InstanceID 生成许可证密钥

![image](https://github.com/user-attachments/assets/009c54df-4de2-4160-8f1d-533cc56704c2)

下载许可证密钥

![image](https://github.com/user-attachments/assets/adec5af6-ebd3-434d-ad0f-f80103a916e0)

##### 上传许可证密钥

- 将生成的文件上传至 `./storage/.license/license-key`

#### NocoBase 版本 <1.7.0：配置账号和密码

:::warning
配置账号和密码的方式即将废弃，请尽快升级并更改为许可证密钥的方式。
:::

通过设置环境变量 [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) 和 [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password)（NocoBase 服务平台的用户名和密码），即可在安装或升级应用时自动下载商业插件。

```bash
NOCOBASE_PKG_USERNAME=your-username
NOCOBASE_PKG_PASSWORD=your-password
```

[如何设置环境变量？](/welcome/getting-started/env)

### 下载插件

#### Docker 安装

重启容器即可自动下载插件

```bash
docker compose restart app
```

#### Git 源码或 create-nocobase-app 安装

执行 `pkg download-pro` 命令下载插件

```bash
yarn nocobase pkg download-pro
```

:::warning

- 以上步骤，只会下载与当前应用版本匹配的插件，并不会更新插件，如果需要更新插件请先[升级应用](/welcome/getting-started/upgrading)，授权的插件会自动更新。
- 授权的插件也会在应用 [安装](/welcome/getting-started/installation) 或 [升级](/welcome/getting-started/upgrading) 时自动下载。

:::

### 激活插件

在插件管理器中选择需要激活的插件即可。

![20241204000230](https://static-docs.nocobase.com/20241204000230.png)

### 升级插件

先[升级应用](/welcome/getting-started/upgrading)，授权的插件会在应用升级时自动下载或更新。目前暂不支持仅升级插件而不升级应用。

## 通过界面安装与更新插件

:::warning
插件添加或更新时会重启应用。如果需要批量添加或更新插件，建议采用其他方式处理。
:::

### 通过插件管理器上传插件包

无论是商业插件还是第三方插件，都可以通过界面直接上传插件包。

![20241204000127](https://static-docs.nocobase.com/20241204000127.png)

备注：

- 插件包的制作流程请参考 [编写第一个插件](/development/your-fisrt-plugin) ，以便正确构建并打包插件。

### 激活插件

在插件管理器中选择需要激活的插件即可。

![20241204000230](https://static-docs.nocobase.com/20241204000230.png)

## 将插件上传到插件目录来安装与升级

:::warning
- 支持批处理，移植方便
- 支持内网服务器
- 如果因应用更新导致插件不兼容并无法启动，可以采用这种方式来更新不兼容的插件
:::

### 添加或更新插件

商业插件和第三方插件都存放在 `./storage/plugins/` 目录。可以先在开发环境中下载插件，再上传到服务器的 `./storage/plugins/` 目录进行添加或更新，或者直接将插件包解压到该目录中。例如：

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.4.0.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

这个命令确保插件解压到 `/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas`，并且不会包含 `package` 目录，正确的目录结构如下：

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

### 执行升级命令来更新插件

将插件上传到插件目录之后，需要执行 `nocobase upgrade` 命令来更新插件。

```bash
yarn nocobase upgrade --skip-code-update
```
