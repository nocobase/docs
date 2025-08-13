# `create-nocobase-app` 安装的升级

## 0. 升级前的准备

:::warning
- 升级前一定要先备份数据库！！！
:::

由于国内网络环境的原因，强烈建议你更换国内镜像。

```bash
$ yarn config set disable-self-update-check true
$ yarn config set registry https://registry.npmmirror.com/
$ yarn config set sqlite3_binary_host_mirror https://npmmirror.com/mirrors/sqlite3/
```

## 1. 升级

直接执行 `yarn nocobase upgrade` 升级命令即可

```bash
# 切换到对应的目录
cd my-nocobase-app
# 执行更新命令
yarn nocobase upgrade
# 启动
yarn dev
```

如果升级存在问题，也可以[重新创建新应用](/welcome/getting-started/installation/create-nocobase-app)，并参考旧版本的 .env 修改环境变量。数据库信息需要配置正确，使用 SQLite 数据库时，需要将数据库文件复制到 `./storage/db/` 目录。最后再执行 `yarn nocobase upgrade` 进行升级。

## 独立插件升级

NocoBase 升级之后，通过界面安装的独立插件可能也需要升级，参考文档 [独立插件的安装与升级](/welcome/getting-started/plugin)

## 升级到指定版本

修改项目根目录的 `package.json` 文件，修改 `@nocobase/cli` 和 `@nocobase/devtools` 的版本号即可（只能升级不能降级）。如：

```diff
{
  "dependencies": {
-   "@nocobase/cli": "1.5.11"
+   "@nocobase/cli": "1.6.0-beta.8"
  },
  "devDependencies": {
-   "@nocobase/devtools": "1.5.11"
+   "@nocobase/devtools": "1.6.0-beta.8"
  }
}
```

然后执行升级命令

```bash
yarn nocobase upgrade --skip-code-update
```
