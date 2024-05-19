# 表格配置页面

## 场景说明

配置界面是由一个表格组成，表格可以添加、编辑、删除数据。

## 示例说明

假设我们需要做一个邮件通知的插件，邮件通知的模板可以有多个，每个模板包含邮件主题和邮件内容等信息，我们需要一个配置界面来管理这些模板。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-settings-table) 中查看。

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
yarn pm create @nocobase-sample/plugin-settings-table
yarn pm enable @nocobase-sample/plugin-settings-table
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

对于本示例而言，我们创建 `packages/plugins/@nocobase-sample/plugin-settings-table/src/server/collections/email-templates.ts` 文件，其内容如下：

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'samplesEmailTemplates',
  fields: [
    {
      type: 'string',
      name: 'subject',
    },
    {
      type: 'text',
      name: 'content',
    },
  ],
});
```

根据需求，我们创建了一个 `samplesEmailTemplates` 数据表，包含 `subject` 和 `content` 两个字段，两个字段我们根据需求使用单行文本以及富文本进行存储。

- `subject`字段是单行文本类型，所以 type 值为 `string`
- `content` 字段是长文本类型，所以 type 值为 `text`

### 2. 执行更新

我们还需要将数据表定义更新到数据库中，我们可以通过以下命令来执行更新：

```bash
yarn nocobase upgrade
```

![img_v3_02av_eb156d0e-9f25-4702-a5de-2bfa5cde84bg](https://static-docs.nocobase.com/img_v3_02av_eb156d0e-9f25-4702-a5de-2bfa5cde84bg.jpg)

## 前端功能实现

### 1. 创建插件配置页面

之前的 [新增插件配置页面（单个路由）](/plugin-samples/router/add-setting-page-single-route) 已经详细介绍过，我们这里就不再赘述了。

我们修改 `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx` 文件，其内容如下：

```tsx | pure
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

export class PluginSettingsTableClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Table',
      icon: 'TableOutlined',
      Component: () => 'TODO',
    });
  }
}

export default PluginSettingsTableClient;
```

然后访问 [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table) 就可以我们的配置页面了。

![img_v3_02av_c610403d-95d8-466a-a3d1-cfcab232057g](https://static-docs.nocobase.com/img_v3_02av_c610403d-95d8-466a-a3d1-cfcab232057g.jpg)

### 2. 定义数据表结构

基于 Schema 的写法，我们需要先定义数据表的结构。关于前端数据表结构的定义，我们需要了解以下知识：

- [数据表和字段](/development/server/collections#field-component)
- [Field Type](/development/server/collections/options#field-type)
- [Field Interface](/development/server/collections/options#field-interface)
- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)
- [字段组件](https://client.docs.nocobase.com/components)

然后我们新建 `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` 文件，其内容如下：

```ts
const emailTemplatesCollection = {
  name: 'samplesEmailTemplates',
  filterTargetKey: 'id',
  fields: [
    {
      type: 'string',
      name: 'subject',
      interface: 'input',
      uiSchema: {
        title: 'Subject',
        required: true,
        'x-component': 'Input',
      },
    },
    {
      type: 'text',
      name: 'content',
      interface: 'richText',
      uiSchema: {
        title: 'Content',
        required: true,
        'x-component': 'RichText',
      },
    },
  ],
};
```

我们定义了一个 `samplesEmailTemplates` 数据表，包含 `subject` 和 `content` 两个字段。以下是 `fields` 字段的说明：

- `type`：因为是其值字符串，所以其值需要和后端的数据表字段类型一致
- `name`：字段的名称，需要和后端的数据表字段名称一致
- `interface`
  - `subject` 字段：单行文本，对应到 interface，所以其值为 `input`
  - `content` 字段：富文本，对应到 interface，所以其值为 `richText`
- `uiSchema`：其对应着前端表单项组件的渲染
  - `type`：无论是单行文本还是长文本，其值都是字符串，所以其值为 `string`
  - `title`：表单项的标题
  - `required`：因为是必填项，所以其值为 `true`
  - `x-component`：
    - `subject` 字段：使用 [Input 组件](https://client.docs.nocobase.com/components/input)
    - `content` 字段：使用 [RichText 组件](https://client.docs.nocobase.com/components/rich-text)

### 3. 创建 Table Schema

关于表单 Schema 的写法，我们需要了解以下知识：

- [Table 组件](https://client.docs.nocobase.com/components/table-v2)
- [CollectionField 组件](https://client.docs.nocobase.com/core/data-source/collection-field)
- [CardItem 组件](https://client.docs.nocobase.com/components/card-item)
- [Schema 协议](/development/client/ui-schema/what-is-ui-schema)
- [DataBlockProvider 组件](https://client.docs.nocobase.com/core/data-block/data-block-provider)

我们参考 Table [Extends Collection](https://client.docs.nocobase.com/components/table-v2#extends-collection) 示例，继续修改 `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` 文件：

```tsx | pure
import { ISchema } from '@nocobase/client';
import { uid } from '@formily/shared'

const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': 'CardItem',
  'x-decorator': 'TableBlockProvider',
  'x-decorator-props': {
    collection: emailTemplatesCollection.name,
    action: 'list',
    showIndex: true,
    dragSort: false,
  },
  properties: {
    table: {
      type: 'array',
      'x-component': 'TableV2',
      'x-use-component-props': 'useTableBlockProps',
      'x-component-props': {
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
        },
      },
      properties: {
        subject: {
          type: 'void',
          title: 'Subject',
          'x-component': 'TableV2.Column',
          properties: {
            subject: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
        content: {
          type: 'void',
          title: 'Content',
          'x-component': 'TableV2.Column',
          properties: {
            content: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
      },
    },
  },
}
```

- [CardItem](https://client.docs.nocobase.com/components/card-item)：卡片组件，主要是提供卡片样式
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)：数据块组件，用于向子节点提供数据，因为是表单获取单行数据，我们提供了 `collection` 和 `action` 两个属性
- [TableV2](https://client.docs.nocobase.com/components/table-v2)：Table 组件，用于渲染表单
- `useTableBlockProps`：用于获取数据块的属性，并传递给 TableV2 组件，一般情况下不需要改
- `TableV2.Column`：Table 列组件，用于渲染表单列
- [CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field)：数据表字段组件，用于读取 Collection 中的 `UI Schema` 并渲染

### 4. 创建 Table 组件

将 Schema 渲染成组件，我们需要了解以下知识：

- [ExtendCollectionsProvider](https://client.docs.nocobase.com/core/data-source/extend-collections-provider) 组件来扩展数据表
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component) 组件来渲染表单

我们继续在 `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` 文件中编写：

```tsx | pure
import React from 'react';
import { ExtendCollectionsProvider, SchemaComponent } from '@nocobase/client';
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
      <SchemaComponent schema={schema} scope={{ useFormBlockProps, useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

### 5. 注册插件配置页面

我们修改 `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx` 文件，其内容如下：

```diff
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';
+ import { PluginSettingsTable } from './PluginSettingsTable'

export class PluginSettingFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Form',
      icon: 'FormOutlined',
-     Component: () => 'TODO',
+     Component: PluginSettingsTable,
    });
  }
}

export default PluginSettingFormClient;
```

然后我们访问 [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table) 就可以看到我们的配置页面了。

![img_v3_02av_97fd272d-1333-4faf-9ce1-6363c6a049dg](https://static-docs.nocobase.com/img_v3_02av_97fd272d-1333-4faf-9ce1-6363c6a049dg.jpg)

### 6. 实现新增功能

现在的 Table 没有任何数据，我们需要增加新增功能。想实现新增功能，需要参考以下文档：

- Table 组件 [With ActionToolbar 示例](https://client.docs.nocobase.com/components/table-v2)
- [Form 组件](https://client.docs.nocobase.com/components/form-v2)
- [Action 组件](https://client.docs.nocobase.com/components/action)

我们继续在 `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` 文件中编写：

```tsx | pure
import React from 'react';
import { ISchema, useActionContext, useDataBlockRequest, useDataBlockResource } from '@nocobase/client';
import { App as AntdApp } from 'antd';
import { useForm } from '@formily/react';

const schema: ISchema = {
  // ...
  properties: {
    actions: {
      type: 'void',
      'x-component': 'ActionBar',
      'x-component-props': {
        style: {
          marginBottom: 20,
        },
      },
      properties: {
        add: {
          type: 'void',
          'x-component': 'Action',
          title: 'Add New',
          'x-align': 'right',
          'x-component-props': {
            type: 'primary',
          },
          properties: {
            drawer: {
              type: 'void',
              'x-component': 'Action.Drawer',
              title: 'Add new',
              properties: {
                form: {
                  type: 'void',
                  'x-component': 'FormV2',
                  properties: {
                    subject: {
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    content: {
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    footer: {
                      type: 'void',
                      'x-component': 'Action.Drawer.Footer',
                      properties: {
                        submit: {
                          title: 'Submit',
                          'x-component': 'Action',
                          'x-use-component-props': 'useSubmitActionProps',
                        },
                      }
                    }
                  },
                },
              },
            },
          },
        },
      }
    },

    table: {
      // ...
    }
  }
}


const useSubmitActionProps = () => {
  const { setVisible } = useActionContext();
  const { message } = AntdApp.useApp();
  const form = useForm();
  const resource = useDataBlockResource();
  const { runAsync } = useDataBlockRequest();

  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.create({ values })
      await runAsync()
      message.success('Saved successfully');
      setVisible(false);
    },
  };
};
```

其中：

- [ActionBar](https://client.docs.nocobase.com/components/action#actionbar)：提供了操作按钮的布局
- [Action](https://client.docs.nocobase.com/components/action)：新增按钮
- [Action.Drawer](https://client.docs.nocobase.com/components/action#actiondrawer)：点击后是弹窗
- [FormV2](https://client.docs.nocobase.com/components/form-v2)：表单组件
- [FormItem](https://client.docs.nocobase.com/components/form-v2#formitem)：表单项组件
- [Action.Drawer.Footer](https://client.docs.nocobase.com/components/action#actiondrawerfooter)：弹窗底部
- [useSubmitActionProps](https://client.docs.nocobase.com/core/data-block/use-data-block-request#use-submit-action-props)：用于提交表单
  - `useActionContext()`：获取 Action 上下文
  - [useDataBlockResource()](https://client.docs.nocobase.com/core/data-block/data-block-resource-provider)：获取 `TableBlockProvider` 提供的 `resource`，用于对数据进行增删改查
  - [useDataBlockRequest()](https://client.docs.nocobase.com/core/data-block/data-block-request-provider)：Table 区块的请求对象，当调用 `runAsync` 会重新请求，已达到刷新 Table 数据的目的

然后需要将 `useSubmitActionProps` 添加到上下文中：

```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-190400.mp4" type="video/mp4">
</video>

### 7. 实现编辑功能

编辑功能和新增功能类似，只是需要在 Table 中添加编辑按钮，然后在弹窗中更改数据。想要实现编辑功能，需要参考以下文档：

- Table 组件 [View Or Edit Record](https://client.docs.nocobase.com/components/table-v2#view-or-edit-record)
- Form 组件 [Default Values](https://client.docs.nocobase.com/components/form-v2#default-values)
- [useCollectionRecord()](https://client.docs.nocobase.com/core/data-block/collection-record-provider)：用于获取当前行的数据

我们继续在 `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` 文件中编写：

```tsx | pure
import { useCollectionRecordData } from '@nocobase/client';
import { useMemo } from 'react';

const useEditFormProps = () => {
  const recordData = useCollectionRecordData();
  const form = useMemo(
    () =>
      createForm({
        values: recordData,
      }),
    [],
  );

  return {
    form,
  };
}

const schema: ISchema = {
  // ...
  properties: {
    // ...
    table: {
      // ...
      properties: {
        // ...
        actions: {
          type: 'void',
          title: 'Actions',
          'x-component': 'TableV2.Column',
          properties: {
            actions: {
              type: 'void',
              'x-component': 'Space',
              'x-component-props': {
                split: '|',
              },
              properties: {
                edit: {
                  type: 'void',
                  title: 'Edit',
                  'x-component': 'Action.Link',
                  'x-component-props': {
                    openMode: 'drawer',
                    icon: 'EditOutlined',
                  },
                  properties: {
                    drawer: {
                      type: 'void',
                      title: 'Edit',
                      'x-component': 'Action.Drawer',
                      properties: {
                        form: {
                          type: 'void',
                          'x-component': 'FormV2',
                          'x-use-component-props': 'useEditFormProps',
                          properties: {
                            subject: {
                              'x-decorator': 'FormItem',
                              'x-component': 'CollectionField',
                            },
                            content: {
                              'x-decorator': 'FormItem',
                              'x-component': 'CollectionField',
                            },
                            footer: {
                              type: 'void',
                              'x-component': 'Action.Drawer.Footer',
                              properties: {
                                submit: {
                                  title: 'Submit',
                                  'x-component': 'Action',
                                  'x-use-component-props': 'useSubmitActionProps',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            }
          },
        }
      }
    }
  }
}
```

`Table` 会将每行的数据通过 [CollectionRecordProvider](https://client.docs.nocobase.com/core/data-block/collection-record-provider) 向子节点传递。

我们在我们 `useEditFormProps` 中使用 `useCollectionRecordData()` 获取当前行的数据，然后通过 `createForm` 创建一个表单，将当前行的数据作为默认值传递给表单。

然后我们修改 `useSubmitActionProps()` 的逻辑，让其支持新增和编辑：

```diff
const useSubmitActionProps = () => {
  // ...
+ const collection = useCollection();
  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
-     await resource.create({ values })
+     if (values[collection.filterTargetKey]) {
+       await resource.update({
+         values,
+         filterByTk: values[collection.filterTargetKey],
+       });
+     } else {
+       await resource.create({
+         values,
+       });
+     }
      // ...
    },
  };
};
```

- [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection): 由 DataBlockProvider 提供的数据表对象

最后将 `useEditFormProps` 注册到上下文中：

```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} scope={{ useSubmitActionProps }} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-190849.mp4" type="video/mp4">
</video>

### 8. 实现删除功能

删除功能比较简单，我们只需要在 Action 列中增加 `Delete` 按钮，点击后调用 `resource.destroy()` 然后再刷新 Table 数据即可。

- Action [Confirm](https://client.docs.nocobase.com/components/action#confirm)

我们继续在 `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` 文件中编写：

```ts
import { ActionProps } from '@nocobase/client';

function useDeleteActionProps(): ActionProps {
  const { message } = AntdApp.useApp();
  const record = useCollectionRecordData();
  const resource = useDataBlockResource();
  const collection = useCollection();
  const { runAsync } = useDataBlockRequest();
  return {
    confirm: {
      title: 'Delete',
      content: 'Are you sure you want to delete it?',
    },
    async onClick() {
      await resource.destroy({
        filterByTk: record[collection.filterTargetKey]
      });
      await runAsync();
      message.success('Deleted!');
    },
  };
}

const schema: ISchema = {
  // ...
  properties: {
    // ...
    table: {
      // ...
      properties: {
        // ...
        actions: {
          // ...
          properties: {
            // ...
            delete: {
              type: 'void',
              title: 'Delete',
              'x-component': 'Action.Link',
              'x-use-component-props': 'useDeleteActionProps',
            }
          }
        }
      }
    }
  }
}
```

然后我们将 `useDeleteActionProps` 注册到上下文中。


```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps }} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps, useDeleteActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-191110.mp4" type="video/mp4">
</video>

### 9. 在页面内部使用配置数据

关于使用表单数据，有 2 种场景，一种是在页面内部使用，一种是在全局使用。两者的区别是：

- 全局使用：需要在表单数据更新后，将数据同步到全局状态中，达到实时更新的效果
- 页面内部使用：因为页面的切换会自动销毁和创建，所以不需要同步数据

本步骤我们主要讲解在页面内部使用表单数据。

我们创建 `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTablePage.tsx` 文件，其内容如下：

```tsx | pure
import { useRequest } from '@nocobase/client';
import React from 'react';

export const PluginSettingsTablePage = () => {
  const { data, loading } = useRequest<{ data?: any[] }>({
    url: 'samplesEmailTemplates:list',
  });

  if (loading) return null;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>
}
```

然后我们在 `PluginSettingsTable` 组件中引入 `PluginSettingsTablePage` 组件：

```tsx | pure
import { PluginSettingsTablePage } from './PluginSettingsTablePage'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...

    this.app.router.add(`admin.${name}-page`, {
      path: '/admin/plugin-settings-table-page',
      Component: PluginSettingsTablePage,
    })
  }
}
```

然后我们访问 [http://localhost:13000/admin/plugin-settings-table-page](http://localhost:13000/admin/plugin-settings-table-page) 就可以看到我们的表单数据了。

![img_v3_02av_753dd9f1-9e8c-43c5-a1c6-1fb217844cag](https://static-docs.nocobase.com/img_v3_02av_753dd9f1-9e8c-43c5-a1c6-1fb217844cag.jpg)

### 10. 全局使用配置数据

全局使用且需要实时刷新，需要使用到 `Context` 和 NocoBase [Provider](/development/client/providers) 能力。

我们创建 `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTableProvider.tsx` 文件，其内容如下：

```tsx | pure
import React, { createContext, FC } from 'react';
import { useRequest, UseRequestResult } from '@nocobase/client';

const PluginSettingsTableContext = createContext<UseRequestResult<{ data?: any[] }>>(null as any);

export const PluginSettingsTableProvider: FC<{ children: React.ReactNode }> = ({children}) => {
  const request = useRequest<{ data?: any[] }>({
    url: 'samplesEmailTemplates:list',
  });

  console.log('PluginSettingsTableProvider', request.data?.data);

  return <PluginSettingsTableContext.Provider value={request}>{children}</PluginSettingsTableContext.Provider>;
}

export const usePluginSettingsTableRequest = () => {
  return React.useContext(PluginSettingsTableContext);
};
```

然后修改 `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx` 文件，将其注册到全局中：

```ts
import { PluginSettingsTableProvider } from './PluginSettingsTableProvider'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...
    this.app.addProvider(PluginSettingsTableProvider)
  }
}
```

然后在表单更新后，我们需要重新获取全局的数据。我们修改 `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`：

```diff
import { usePluginSettingsTableRequest } from './PluginSettingsTableProvider';

// ...

const useSubmitActionProps = (): ActionProps => {
  // ...
+ const globalSettingsTableRequest = usePluginSettingsTableRequest();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      // ...
+     await globalSettingsTableRequest.runAsync();
      message.success('Saved successfully!');
    },
  };
};

function useDeleteActionProps(): ActionProps {
+ const globalSettingsTableRequest = usePluginSettingsTableRequest();

  return {
    // ...
    async onClick() {
      // ...
+     await globalSettingsTableRequest.runAsync();
      message.success('Deleted!');
    }
  }
}
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-191452.mp4" type="video/mp4">
</video>

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-settings-table --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-settings-table.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
