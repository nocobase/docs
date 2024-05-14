# 表单配置页面

## 场景说明

配置界面是由一个表单组成的。

这种情况下不需要进行后端的开发。

## 示例说明

假设我们需要对接一个第三方地图服务，需要配置地图的 `key` 和 `secret`，我们可以通过插件的方式添加一个配置页面，用于填写这些信息。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-setting-form) 中查看。

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
yarn pm create @nocobase-sample/plugin-setting-form
yarn pm enable @nocobase-sample/plugin-setting-form
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 实现功能

实现这个插件的功能，主要是靠以下几个方法：

- [usePluginSettingData()](#TODO)：用于获取表单数据
- [useUpdatePluginSettingData()](#TODO)：用于更新表单数据
- [createPluginSettingForm](#TODO)：用于创建表单（内置了 `usePluginSettingData` 和 `useUpdatePluginSettingData`）

同时我们还需要熟悉 [Schema 协议](/development/client/ui-schema/what-is-ui-schema) 的写法以及 [字段组件](https://client.docs.nocobase.com/components) 的属性和作用。

### 1. 创建一个插件配置页面

之前的 [新增插件配置页面（单个路由）](/plugin-samples/router/add-setting-page-single-route) 已经详细介绍过，我们这里就不再赘述了。

```tsx | pure
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

export class PluginSettingFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Setting Form',
      icon: 'FormOutlined',
      Component: () => 'TODO',
    });
  }
}

export default PluginSettingFormClient;
```

然后访问 [http://localhost:13000/admin/settings/@nocobase-sample/plugin-setting-form](http://localhost:13000/admin/settings/@nocobase-sample/plugin-setting-form) 就可以我们的配置页面了。

TODO：截图

### 2. 创建配置表单

根据需求我们需要创建一个表单，用于填写地图的 `key` 和 `secret`。

```ts
import { Plugin, createPluginSettingForm } from '@nocobase/client';

const PluginSettingForm = createPluginSettingForm({
  packageName: name,
  fields: {
    key: {
      type: 'string',
      title: 'Key',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    secret: {
      type: 'string',
      title: 'Secret',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    }
  }
});
```

我们这里使用了 [createPluginSettingForm](#TODO) 来创建表单。如果需要特殊，此方法无法满足需求的话，也可以使用 ant-design 的 [Form 组件](https://ant.design/components/form) 来自定义表单，同时结合 [usePluginSettingData()](#TODO) 和 [useUpdatePluginSettingData](#TODO) 来获取和更新数据。

然后替换 `Component` 属性：

```diff
- import { Plugin } from '@nocobase/client';
+ import { Plugin, createPluginSettingForm } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

+ const PluginSettingForm = createPluginSettingForm({
+   // ...
+ })

export class PluginSettingFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Setting Form',
      icon: 'FormOutlined',
-     Component: () => 'TODO',
+     Component: PluginSettingForm,
    });
  }
}

export default PluginSettingFormClient;
```

`fields` 是表单的字段配置，本示例有 `key` 和 `secret` 两个字段。

- `type`：因为是其值字符串，所以其值是 [string](/development/client/ui-schema/what-is-ui-schema#type)
- `title`：字段的标题
- `x-decorator`：因为是表单项，所以其值是 [FormItem](https://client.docs.nocobase.com/components/form-item) 组件
- `x-component`：因为其值为字符串，所以我们使用 [Input](https://client.docs.nocobase.com/components/components/input) 组件
- `required`：因为是必填项，所以其值是 `true`

这样我们就创建了一个表单，并且提交后会保存到数据库中。

TODO：截图

### 3. 获取表单数据

我们可以通过 `usePluginSettingData()` 方法获取表单数据，但本示例只做最简单的演示，将数据打印到控制台。

```tsx | pure
import React, { FC } from 'react';
// @ts-ignore
import { name } from '../../package.json';
import { usePluginSettingData } from '@nocobase/client';

const PluginSettingFormDemoPage: FC = () => {
  const { loading, data } = usePluginSettingData(name);

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
```

```diff
+ import React, { FC } from 'react';
- import { Plugin, createPluginSettingForm } from '@nocobase/client';
+ import { Plugin, createPluginSettingForm, usePluginSettingData } from '@nocobase/client';

// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...
+   this.app.router.add(`admin.${name}`, {
+     path: '/admin/plugin-setting-form-demo',
+     Component: PluginSettingFormDemoPage,
+   })
  }
}

export default PluginSettingFormClient;
```

TODO：截图控制台

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-setting-form --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-setting-form.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
