# 如何安装第三方插件

NocoBase 预置了一些插件，除此之外，也可以安装其他第三方插件

## 通过界面安装

![20240424135049](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424135049.png)

通过界面添加的插件存放在 storages/plugins 目录下。

## 通过命令安装

将本地已有的插件添加到应用里

```bash
yarn pm add <packageName> # 如果本地不存在会报错
```

需要先下载再添加，请用以下方式，下载后的插件文件夹在 storage/plugins 目录下

```bash
# 从远程的 npm registry 下载并添加到应用里
yarn pm add <packageName> --registry=<registry>
# 从远程 URL 下载并添加到应用里
yarn pm add <url>
# 将本地压缩包解压并添加到应用里
yarn pm add <filePath>
```

:::warning
`pm add` 命令只用于添加插件，更新插件请使用 `pm update` 命令。 
:::

示例

```bash
# 将本地已有的插件添加到应用里
yarn pm add @nocobase/plugin-data-source-external-mariadb
# 从远程的 npm registry 下载并添加到应用里
yarn pm add @nocobase/plugin-data-source-external-mariadb --registry=https://pkg.nocobase.com/
# 从远程 URL 下载并添加到应用里
yarn pm add https://registry.npmmirror.com/@nocobase/plugin-sample-hello/-/plugin-sample-hello-0.21.0-alpha.15.tgz
# 将本地压缩包解压并添加到应用里
yarn pm add /Users/chen/Downloads/plugin-custom-brand-0.21.0-alpha.15.tgz
```

## 预置插件

通过界面或命令的方式添加的插件，应用安装或者重装时都需要操作一遍。为了更便捷的处理插件的安装，NocoBase 提供了两个环境变量用于配置预置插件。如果你希望应用在安装后就显示在插件管理器页面里，可以通过以下两个环境变量实现。

- [APPEND_PRESET_LOCAL_PLUGINS](/welcome/getting-started/env#append_preset_local_plugins)：用于附加预置的未激活插件
- [APPEND_PRESET_BUILT_IN_PLUGINS](http://localhost:8000/welcome/getting-started/env#append_preset_built_in_plugins)：用于附加内置并默认安装的插件

:::info
1. 需要确保插件已经下载到本地，并且在 `node_modules` 目录里可以找到，更多内容查看 [插件的组织方式](/development/plugin)。
2. 添加了环境变量后，需要在初始化安装 `nocobase install` 或升级 `nocobase upgrade` 时会自动添加、安装或升级。
:::

<br />
