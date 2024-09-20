# 表单配置页面

## 场景说明

配置界面是由一个表单组成的。

## 示例说明

假设我们需要对接一个第三方地图服务，需要配置地图的 `key` 和 `secret`，我们可以通过插件的方式添加一个配置页面，用于填写这些信息。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-settings-form) 中查看。

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
yarn pm create @nocobase-sample/plugin-settings-form
yarn pm enable @nocobase-sample/plugin-settings-form
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 后端功能实现

### 1. 创建数据表

后端主要是创建一个数据表用于存储配置信息。关于数据表创建我们需要了解以下知识：

- [数据表和字段](/development/server/collections)
- [数据表创建](/development/server/collections/configure#在插件代码里定义)
- [Field Type](/development/server/collections/options#field-type)
- [defineCollection()  API](/api/database#definecollection)
- [Collection API](/api/database/collection)

对于本示例而言，我们创建 `packages/plugins/@nocobase-sample/plugin-settings-form/src/server/collections/map-configuration.ts` 文件，其内容如下：

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'SamplesMapConfiguration',
  fields: [
    {
      type: 'string',
      name: 'key',
    },
    {
      type: 'string',
      name: 'secret',
    },
  ],
});
```

根据需求，我们创建了一个 `SamplesMapConfiguration` 数据表，包含 `key` 和 `secret` 两个字段，并且都是字符串类型。

### 2. 执行更新

我们还需要将数据表定义更新到数据库中，我们可以通过以下命令来执行更新：

```bash
yarn nocobase upgrade
```

![img_v3_02av_db5e9985-eb20-4420-a0b2-8a809ff05a5g](https://static-docs.nocobase.com/img_v3_02av_db5e9985-eb20-4420-a0b2-8a809ff05a5g.jpg)

## 前端功能实现

### 1. 创建插件配置页面

之前的 [新增插件配置页面（单个路由）](/plugin-samples/router/add-setting-page-single-route) 已经详细介绍过，我们这里就不再赘述了。

我们修改 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx` 文件，其内容如下：

```tsx | pure
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

export class PluginSettingsFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Form',
      icon: 'FormOutlined',
      Component: () => 'TODO',
    });
  }
}

export default PluginSettingsFormClient;
```

然后访问 [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form) 就可以我们的配置页面了。

![img_v3_02av_c90b5767-97dd-4fef-8dd0-c7ff9a136a9g](https://static-docs.nocobase.com/img_v3_02av_c90b5767-97dd-4fef-8dd0-c7ff9a136a9g.jpg)

### 2. 定义数据表结构

基于 Schema 的写法，我们需要先定义数据表的结构。关于前端数据表结构的定义，我们需要了解以下知识：

- [数据表和字段](/development/server/collections#field-component)
- [Field Type](/development/server/collections/options#field-type)
- [Field Interface](/development/server/collections/options#field-interface)
- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)
- [字段组件](https://client.docs.nocobase.com/components)

然后我们新建 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx` 文件，其内容如下：

```ts
const mapConfigurationCollection = {
  name: 'SamplesMapConfiguration',
  filterTargetKey: 'id',
  fields: [
    {
      type: 'string',
      name: 'key',
      interface: 'input',
      uiSchema: {
        title: 'Title',
        required: true,
        'x-component': 'Input',
      },
    },
    {
      type: 'string',
      name: 'secret',
      interface: 'input',
      uiSchema: {
        title: 'Secret',
        required: true,
        'x-component': 'Input',
      },
    },
  ],
};
```

我们定义了一个 `SamplesMapConfiguration` 数据表，包含 `key` 和 `secret` 两个字段。以下是 `fields` 字段的说明：

- `type`：因为是其值字符串，所以其值为 `string`，需要和后端的数据表字段类型一致
- `name`：字段的名称，需要和后端的数据表字段名称一致
- `interface`：这里因为其值字符串，对应到 interface，所以其值为 `input`
- `uiSchema`：其对应着前端表单项组件的渲染
  - `title`：表单项的标题
  - `required`：因为是必填项，所以其值为 `true`
  - `x-component`：这里选用单行文本的 [Input 组件](https://client.docs.nocobase.com/components/input)

### 3. 创建表单 Schema

关于表单 Schema 的写法，我们需要了解以下知识：

- [Form 组件](https://client.docs.nocobase.com/components/form-v2)
- [CollectionField 组件](https://client.docs.nocobase.com/core/data-source/collection-field)
- [CardItem 组件](https://client.docs.nocobase.com/components/card-item)
- [Schema 协议](/development/client/ui-schema/what-is-ui-schema)
- [DataBlockProvider 组件](https://client.docs.nocobase.com/core/data-block/data-block-provider)
- [Action 组件](https://client.docs.nocobase.com/components/action)

我们依然在 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx` 文件中继续编写：

```ts
import { useMemo } from 'react';
import { App as AntdApp } from 'antd';
import { createForm } from '@formily/core';
import { useForm } from '@formily/react';
import { uid } from '@formily/shared';
import { ActionProps, ISchema, useCollection, useCollectionRecordData, useDataBlockResource } from '@nocobase/client';

const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': 'CardItem',
  'x-decorator': 'DataBlockProvider',
  'x-decorator-props': {
    collection: mapConfigurationCollection.name,
    action: 'get',
  },
  properties: {
    form: {
      type: 'void',
      'x-component': 'FormV2',
      'x-use-component-props': 'useFormBlockProps',
      properties: {
        key: {
          title: 'Key',
          'x-decorator': 'FormItem',
          'x-component': 'CollectionField',
        },
        secret: {
          title: 'Secret',
          'x-decorator': 'FormItem',
          'x-component': 'CollectionField',
        },
        footer: {
          type: 'void',
          'x-component': 'Action',
          title: 'Submit',
          'x-use-component-props': 'useSubmitActionProps',
        },
      },
    },
  },
};

const useFormBlockProps = () => {
  const recordData = useCollectionRecordData();
  const form = useMemo(
    () => createForm({
      initialValues: recordData,
    }),
    [recordData],
  );
  return {
    form,
  };
};

const useSubmitActionProps = (): ActionProps => {
  const form = useForm();
  const { message } = AntdApp.useApp();
  const collection = useCollection();
  const resource = useDataBlockResource();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.updateOrCreate({
        values,
        filterKeys: [collection.filterTargetKey],
      });
      message.success('Saved successfully!');
    },
  };
};
```

- [CardItem](https://client.docs.nocobase.com/components/card-item)：卡片组件，主要是提供卡片样式
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)：数据块组件，用于向子节点提供数据，因为是表单获取单行数据，我们提供了 `collection` 和 `action` 两个属性
- [FormV2](https://client.docs.nocobase.com/components/form-v2)：表单组件，用于渲染表单
- `useFormBlockProps`：用于获取数据块的属性，并传递给 FormV2 组件，具体示例参考 FormV2 [Default values](https://client.docs.nocobase.com/components/form-v2#default-values)
- [CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field)：数据表字段组件，用于读取 Collection 中的 UI Schema 并渲染
- [Action](https://client.docs.nocobase.com/components/action)：操作按钮组件，用于提交表单
- `useSubmitActionProps`: 用于获取提交按钮的属性
  - [useCollection](/core/data-source/collection-provider)：用于获取数据表的信息
  - [useDataBlockResource](/core/data-block/data-block-resource-provider)：是 DataBlockProvider 提供的一个 hook，用于获取数据块的资源，方便增删改查

### 4. 创建表单组件

将 Schema 渲染成组件，我们需要了解以下知识：

- [ExtendCollectionsProvider](https://client.docs.nocobase.com/core/data-source/extend-collections-provider) 组件来扩展数据表
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component) 组件来渲染表单

我们继续在 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx` 文件中继续编写：

```tsx | pure
import React from 'react';
import { ExtendCollectionsProvider, SchemaComponent } from '@nocobase/client';
export const PluginSettingsForm = () => {
  return (
    <ExtendCollectionsProvider collections={[mapConfigurationCollection]}>
      <SchemaComponent schema={schema} scope={{ useFormBlockProps, useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

### 5. 注册插件配置页面

我们修改 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx` 文件，其内容如下：

```diff
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';
+ import { PluginSettingsForm } from './PluginSettingsForm'

export class PluginSettingFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Form',
      icon: 'FormOutlined',
-     Component: () => 'TODO',
+     Component: PluginSettingsForm,
    });
  }
}

export default PluginSettingFormClient;
```

然后我们访问 [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form) 就可以看到我们的配置页面了。

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-182716.mp4" type="video/mp4">
</video>

### 6. 在页面内部使用配置数据

关于使用表单数据，有 2 种场景，一种是在页面内部使用，一种是在全局使用。两者的区别是：

- 全局使用：需要在表单数据更新后，将数据同步到全局状态中，达到实时更新的效果
- 页面内部使用：因为页面的切换会自动销毁和创建，所以不需要同步数据

本步骤我们主要讲解在页面内部使用表单数据。

我们创建 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsFormPage.tsx` 文件，其内容如下：

```tsx | pure
import { useRequest } from '@nocobase/client';
import React from 'react';

export const PluginSettingsFormPage = () => {
  const { data, loading } = useRequest<{ data?: { key: string; secret: string } }>({
    url: 'SamplesMapConfiguration:get',
  });

  if (loading) return null;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>
}
```

然后我们在 `PluginSettingsForm` 组件中引入 `PluginSettingsFormPage` 组件：

```tsx | pure
import { PluginSettingsFormPage } from './PluginSettingsFormPage'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...

    this.app.router.add(`admin.${name}-page`, {
      path: '/admin/plugin-settings-form-page',
      Component: PluginSettingsFormPage,
    })
  }
}
```

然后我们访问 [http://localhost:13000/admin/plugin-settings-form-page](http://localhost:13000/admin/plugin-settings-form-page) 就可以看到我们的表单数据了。

![img_v3_02av_70ade722-7069-4fc7-a2c3-c080f85ff30g](https://static-docs.nocobase.com/img_v3_02av_70ade722-7069-4fc7-a2c3-c080f85ff30g.jpg)

### 7. 全局使用配置数据

全局使用且需要实时刷新，需要使用到 `Context` 和 NocoBase [Provider](/development/client/providers) 能力。

我们创建 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsFormProvider.tsx` 文件，其内容如下：

```tsx | pure
import React, { createContext, FC } from 'react';
import { useRequest, UseRequestResult } from '@nocobase/client';

const PluginSettingsFormContext = createContext<UseRequestResult<{ data?: { key: string; secret: string } }>>(null as any);

export const PluginSettingsFormProvider: FC<{ children: React.ReactNode }> = ({children}) => {
  const request = useRequest<{ data?: { key: string; secret: string } }>({
    url: 'SamplesMapConfiguration:get',
  });

  console.log('PluginSettingsFormProvider', request.data?.data);

  return <PluginSettingsFormContext.Provider value={request}>{children}</PluginSettingsFormContext.Provider>;
}

export const usePluginSettingsFormRequest = () => {
  return React.useContext(PluginSettingsFormContext);
};
```

然后修改 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx` 文件，将其注册到全局中：

```ts
import { PluginSettingsFormProvider } from './PluginSettingsFormProvider'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...
    this.app.addProvider(PluginSettingsFormProvider)
  }
}
```

然后在表单更新后，我们需要重新获取全局的数据。我们修改 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx`：

```diff
+ import { usePluginSettingsFormRequest } from './PluginSettingsFormProvider';

const useSubmitActionProps = (): ActionProps => {
  const form = useForm();
  const { message } = AntdApp.useApp();
  const collection = useCollection();
  const resource = useDataBlockResource();
+ const globalSettingsFormRequest = usePluginSettingsFormRequest();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.updateOrCreate({
        values,
        filterKeys: [collection.filterTargetKey],
      });
+     await globalSettingsFormRequest.runAsync();
      message.success('Saved successfully!');
    },
  };
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-182717.mp4" type="video/mp4">
</video>

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-settings-form --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-settings-form.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
