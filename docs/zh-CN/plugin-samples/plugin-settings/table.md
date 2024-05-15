# 表格配置页面

## 场景说明

配置界面是由一个表格组成，表格可以添加、编辑、删除数据。

此类场景需要前后端配合。

## 示例说明

假设我们需要做一个邮件通知的插件，邮件通知的模板可以有多个，每个模板包含邮件主题和邮件内容等信息，我们需要一个配置界面来管理这些模板。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-setting-table) 中查看。

## 初始化插件

我们按照 [编写第一个插件](/development/your-fisrt-plugin) 文档说明，如果没有一个项目，可以先创建一个项目，如果已经有了或者是 clone 的源码，则跳过这一步。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

然后初始化一个插件，并添加到系统中：

```bash
yarn pm create @nocobase-sample/plugin-setting-table
yarn pm enable @nocobase-sample/plugin-setting-table
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

TODO：视频演示

## 前端实现功能

想要实现视频演示中的功能，我们需要了解以下几个知识：

- [Table 组件](https://client.docs.nocobase.com/components/table-v2)
- [Form 组件](https://client.docs.nocobase.com/components/form)
- [Schema 协议](/development/client/ui-schema/what-is-ui-schema)
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)


### 1. 创建一个插件配置页面

之前的 [新增插件配置页面（单个路由）](/plugin-samples/router/add-setting-page-single-route) 已经详细介绍过，我们这里就不再赘述了。

```tsx | pure
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

export class PluginSettingTableClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Setting Table',
      icon: 'TableOutlined',
      Component: () => 'TODO',
    });
  }
}

export default PluginSettingTableClient;
```

然后访问 [http://localhost:13000/admin/settings/@nocobase-sample/plugin-setting-table](http://localhost:13000/admin/settings/@nocobase-sample/plugin-setting-table) 就可以我们的配置页面了。

TODO：截图

### 2. 创建数据表

我们需要创建一个表结构，用于存储邮件通知的模板。

我们打开 Data sources [Main 数据源](http://localhost:13000/admin/settings/data-source-manager/main/collections)，新建一个数据表。为了简化示例，我们只创建如下 2 个字段：

- `subject`：邮件主题，字符串类型
- `content`：邮件内容，富文本类型

TODO：录制视频操作过程。

### 3. 表格实现

<!--
### 3. 新增表单实现

### 4. 编辑表单实现

### 5. 删除、筛选和批量删除实现 -->

## 后端功能实现

TODO：

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-setting-table --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-setting-table.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
