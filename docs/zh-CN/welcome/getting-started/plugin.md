# 独立插件的安装与升级

## 通过界面安装与更新插件

这个办法非常简单，但需要一个一个添加、激活、更新。

### 1. 下载插件

通过 NocoBase 提供的插件源服务下载插件

### 2. 添加插件

将刚才下载的插件上传并添加

![20240424221258_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424221258_rec_.gif)

### 3. 激活插件

激活刚才上传的插件

![20240424220854](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424220854.png)

### 4. 更新插件

通过 NocoBase 提供的插件源下载插件最新版，之后将下载的插件上传并提交更新

:::warning
- 预置的插件会随主应用一起升级，没有「更新」的操作
- 不要通过先删除，再添加的方式升级插件。
:::

![20240424221119_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424221119_rec_.gif)

## 通过命令行安装与更新插件

支持批量处理，如果应用更新导致插件不兼容并无法启动时，也可以使用命令行的方式处理

### 0. Docker 版本需要先进入容器

```bash
docker-compose exec app bash
```

### 1. 登录商业插件的 npm registry

登录 NocoBase 提供的 npm registry

```bash
npm login --registry=https://pkg.nocobase.com/
```

### 2. 添加插件

```bash
yarn pm add @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed --registry=https://pkg.nocobase.com/
```

### 3. 激活插件

```bash
yarn pm enable @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed
```

### 4. 更新插件

:::warning
如果你需要同时升级应用与插件，请参考 [NocoBase 升级概述](/welcome/getting-started/upgrading)，先将 NocoBase 升级到最新版之后，再执行 `pm update` 命令。
:::

```bash
yarn pm update @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed --registry=https://pkg.nocobase.com/
```
