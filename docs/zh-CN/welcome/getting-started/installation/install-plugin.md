# 如何安装第三方插件

NocoBase 预置了一些插件供使用，同时也支持安装第三方插件。你可以通过以下方式安装：

- 通过界面安装；
- 通过命令安装；
- 预置插件的安装。

## 通过界面安装

:::warning
- 通过界面添加的插件存放在 `storages/plugins` 目录下，必须是已编译的插件，无需安装其他依赖。
:::

![20240424135049](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424135049.png)

添加后的插件还需要激活才能使用

![20240424175655](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424175655.png)

## 通过命令安装

将本地已有的插件添加到应用里

```bash
yarn pm add <packageName> # 这种用法常用于添加本地开发中的插件
```

如果你需要先下载、再解压，再添加到应用里，可以使用以下几种方式（插件存放在 `storages/plugins` 目录下）：

```bash
# 从远程的 npm registry 下载并添加到应用里
yarn pm add <packageName> --registry=<registry>
# 从远程 URL 下载并添加到应用里
yarn pm add <url>
# 将本地压缩包解压并添加到应用里
yarn pm add <filePath>
```

:::warning
- 使用 Docker 版本时，需要先进入 Docker 容器再执行 `pm add` 命令；
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
yarn pm add /downloads/plugin-custom-brand-0.21.0-alpha.15.tgz
```

`pm add` 命令只用于添加插件，插件还需要激活才能使用，请使用 `pm enable` 命令激活

```bash
yarn pm enable <packageName>
```

示例

```bash
yarn pm enable @nocobase/plugin-data-source-external-mariadb @nocobase/plugin-custom-brand
```

## 预置插件的安装

为了方便安装插件，提供了两个环境变量用于配置预置插件，预置插件会在应用安装或升级时，自动添加、安装或升级。

- [APPEND_PRESET_LOCAL_PLUGINS](/welcome/getting-started/env#append_preset_local_plugins)：用于附加预置的未激活插件；
- [APPEND_PRESET_BUILT_IN_PLUGINS](/welcome/getting-started/env#append_preset_built_in_plugins)：用于附加内置并默认安装的插件。

:::warning
- 配置了预置插件的环境变量后，需要执行 `nocobase install` 或 `nocobase upgrade` 命令，插件才会自动添加或安装。
- 确保在执行 `nocobase install` 或 `nocobase upgrade` 时，插件已经下载到本地，并且在 `node_modules` 目录里可以找到。你可以查看 [插件的组织方式](/development/plugin) 以便了解插件的具体情况。
:::

**示例**

#### 1. 将以下插件添加到预置插件列表里，默认不激活。

```bash
APPEND_PRESET_LOCAL_PLUGINS=@nocobase/plugin-data-source-external-postgres,@nocobase/plugin-data-source-external-mysql,@nocobase/plugin-data-source-external-mariadb
```

#### 2. 预置插件建议通过 dependencies 的方式声明，添加到项目目录的 package.json 里。

你可以直接通过 `yarn add` 添加插件声明并下载

```bash
yarn add @nocobase/plugin-data-source-external-postgres @nocobase/plugin-data-source-external-mysql @nocobase/plugin-data-source-external-mariadb -W
```

或者手动 package.json 里填写，再通过 `yarn install` 下载插件

```ts
{
  "dependencies": {
    "@nocobase/plugin-data-source-external-postgres": "0.21.0-alpha.15",
    "@nocobase/plugin-data-source-external-mysql": "0.21.0-alpha.15",
    "@nocobase/plugin-data-source-external-mariadb": "0.21.0-alpha.15",
  }
}
```

#### 3. 最后，别忘了执行 `nocobase install` 或 `nocobase upgrade` 命令

安装或重装

```bash
# 安装
yarn nocobase install
# 重装
yarn nocobase install -f
```

如果应用已安装，执行升级操作

```bash
yarn nocobase upgrade
```
