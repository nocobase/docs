# Git 源码安装的升级

## 0. 升级前的准备

:::warning
- 升级前一定要先备份数据库！！！
:::

## 1. 切换到 NocoBase 项目目录

```bash
cd my-nocobase-app
```

## 2. 拉取最新代码

```bash
git pull
```

## 3. 删除缓存和旧依赖（非必须）

如果正常的升级流程失败，可以尝试清空缓存和依赖之后重新下载

```bash
# 删除 nocobase 缓存
yarn nocobase clean
# 删除依赖
yarn rimraf -rf node_modules
```

## 4. 更新依赖

由于国内网络环境的原因，强烈建议你更换国内镜像。

```bash
$ yarn config set disable-self-update-check true
$ yarn config set registry https://registry.npmmirror.com/
$ yarn config set sqlite3_binary_host_mirror https://npmmirror.com/mirrors/sqlite3/
```

📢 由于网络环境、系统配置等因素影响，接下来这一步骤可能需要十几分钟时间。

```bash
yarn install
```

## 5. 执行更新命令

```bash
yarn nocobase upgrade
```

## 6. 启动 NocoBase

开发环境

```bash
yarn dev
```

生产环境

```bash
# 编译
yarn build
# 启动
yarn start
```

## 7. 独立插件的升级

NocoBase 升级之后，通过界面安装的独立插件可能也需要升级，参考文档 [独立插件的安装与升级](/welcome/getting-started/plugin)
