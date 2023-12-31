# 0.17.0-alpha.1

:::warning
本篇文章只介绍与插件开发相关的不兼容变化
:::

## SchemaInitializer 的变化

- 新增 `SchemaInitializerManager`，用于注册 `SchemaInitializer`
- 新增 `useSchemaInitializerRender()` 代替原来的 `useSchemaInitializer()` 的 `render()`
- 新增 `useSchemaInitializerItem()`，用于获取当前初始化项的上下文
- 新增 `SchemaInitializerItemGroup` 组件，用作 `type: 'itemGroup'` 的默认组件
- 新增 `SchemaInitializerSubMenu` 组件，用作 `type: 'subMenu'` 的默认组件
- 新增 `SchemaInitializerDivider` 组件，用作 `type: 'divider'` 的默认组件
- 新增 `SchemaInitializerChildren` 组件，用于自定义渲染多个列表项
- 新增 `SchemaInitializerChild` 组件，用于自定义渲染单个列表项
- 更改 `SchemaInitializerContext` 职责变更，用于存放当前初始化器的上下文
- 更改 `useSchemaInitializer()` 职责变更，用于获取当前初始化器的上下文
- 更改 `function SchemaInitializer` 变更为 `class SchemaInitializer`，用于定义初始化器
- 更改 `SchemaInitializer` 参数变更
  - 新增 `name` 必填参数，用于 `x-initializer` 的值。
  - 新增 `Component` 参数，用于定制化渲染的按钮。默认为 `SchemaInitializerButton`。
  - 新增 `componentProps`、`style` 用于配置 `Component` 的属性和样式。
  - 新增 `ItemsComponent` 参数，用于定制化渲染的列表。默认为 `SchemaInitializerItems`。
  - 新增 `itemsComponentProps`、`itemsComponentStyle` 用于配置 `ItemsComponent` 的属性和样式。
  - 新增 `popover` 参数，用于配置是否显示 `popover` 效果。
  - 新增 `useInsert` 参数，用于当 `insert` 函数需要使用 hooks 时。
  - 更改 将 `dropdown` 参数改为了 `popoverProps`，使用 `Popover` 代替了 `Dropdown`。
- 更改 `SchemaInitializer` 的 `items` 参数变更
  - 新增 `useChildren` 函数，用于动态控制子项。
  - 新增 `componentProps` 函数，用于组件自身的属性。
  - 新增 `useComponentProps` 函数，用于动态处理组件的 props
  - 更改 将 `key` 参数改为了 `name`，用于列表项的唯一标识。
  - 更改 将 `visible` 参数改为了 `useVisible` 函数，用于动态控制是否显示。
  - 更改 将 `component` 参数改为了 `Component`，用于列表项的渲染。
- 更改 `SchemaInitializer.Button` 变更为 `SchemaInitializerButton`，是 SchemaInitializer 的 Component 参数的默认值；
- 更改 `SchemaInitializer.Item` 变更为 `SchemaInitializerItem`，参数不变；
- 更改 `SchemaInitializer.ActionModal` 变更为 `SchemaInitializerActionModal`，参数不变；
- 更改 `SchemaInitializer.SwitchItem` 变更为 `SchemaInitializer.Switch`，参数不变。
- 删除 `SchemaInitializerProvider`，用 `SchemaInitializerManager` 代替
- 删除 `SchemaInitializer.itemWrap`，不需要再包裹 `item` 组件了；

相关文档参考

- [插件开发 / Schema 初始化器](/development/client/ui-schema/initializer)
- [API 文档 / SchemaInitializer](https://client.docs-cn.nocobase.com/core/ui-schema/schema-component)

### 向已有的初始化器里添加项

以前是通过 `SchemaInitializerContext` 获取到全部的 `Initializers` 然后进行增删改。例如下面代码是为了往 `BlockInitializers` 中的 `media` 下添加 `Hello`：

```tsx | pure
const items = useContext<any>(SchemaInitializerContext);
const mediaItems = items.BlockInitializers.items.find(
  (item) => item.key === 'media',
);

if (process.env.NODE_ENV !== 'production' && !mediaItems) {
  throw new Error('media block initializer not found');
}

const children = mediaItems.children;
if (!children.find((item) => item.key === 'hello')) {
  children.push({
    key: 'hello',
    type: 'item',
    title: '{{t("Hello block")}}',
    component: HelloBlockInitializer,
  });
}
```

新的方式在插件的 load 方法里，使用 schemaInitializerManager.addItem() 方法添加项

```tsx | pure
class MyPlugin extends Plugin {
  async load() {
    this.schemaInitializerManager.addItem(
      'BlockInitializers',
      'otherBlocks.hello',
      {
        title: '{{t("Hello block")}}',
        Component: HelloBlockInitializer,
      },
    );
  }
}
```

详细文档参考

- [插件开发 / Schema 初始化器 / 向已有的初始化器里添加项](/development/client/ui-schema/initializer)
- [API 文档 / SchemaInitializer / 内置组件和类型](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer)

### 将新的初始化器添加到应用里

以前通过 `SchemaInitializerProvider` 添加，例如：

```tsx | pure
<SchemaInitializerProvider
  initializers={{ BlockInitializers }}
  components={{ ManualActionDesigner }}
></SchemaInitializerProvider>
```

现在在插件的 load 里添加，例如：

```tsx | pure
import { Plugin } from '@nocobase/client';

class MyPlugin extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(blockInitializers);
    this.app.addComponents({ ManualActionDesigner });
  }
}
```

详细文档参考

- [插件开发 / Schema 初始化器 / 添加新的初始化器](/development/client/ui-schema/initializer)
- [API 文档 / SchemaInitializerManager / schemaInitializerManager.addItem()](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer-manager)

### 添加新的初始化器

以前 `SchemaInitializer` 支持 JSON 对象和组件的写法，现在只有 `new SchemaInitializer()`。

示例一：以前 JSON 的写法，修改为 `new SchemaInitializer()` 方式

```diff
- export const BlockInitializers = {
+ export const blockInitializers = new SchemaInitializer({
+ name: 'BlockInitializers',
  'data-testid': 'add-block-button-in-page',
  title: '{{t("Add block")}}',
  icon: 'PlusOutlined',
  wrap: gridRowColWrap,
   items: [
    {
-     key: 'dataBlocks',
+     name: 'data-blocks',
      type: 'itemGroup',
      title: '{{t("Data blocks")}}',
      children: [
        {
-         key: 'table',
+         name: 'table',
-         type: 'item', // 当有 Component 参数时，就不需要此了
          title: '{{t("Table")}}',
-         component: TableBlockInitializer,
+         Component: TableBlockInitializer,
        },
         {
          key: 'form',
          type: 'item',
          title: '{{t("Form")}}',
          component: FormBlockInitializer,
        }
      ],
    },
  ],
});
```

示例二：组件的写法修改为 `new SchemaInitializer()` 方式

原来是组件定义的方式：

```tsx | pure
export const BulkEditFormItemInitializers = (props: any) => {
  const { t } = useTranslation();
  const { insertPosition, component } = props;
  const associationFields = useAssociatedFormItemInitializerFields({
    readPretty: true,
    block: 'Form',
  });
  return (
    <SchemaInitializer.Button
      data-testid="configure-fields-button-of-bulk-edit-form-item"
      wrap={gridRowColWrap}
      icon={'SettingOutlined'}
      items={[
        {
          type: 'itemGroup',
          title: t('Display fields'),
          children: useCustomBulkEditFormItemInitializerFields(),
        },
        {
          type: 'divider',
        },
        {
          type: 'item',
          title: t('Add text'),
          component: BlockItemInitializer,
        },
      ]}
      insertPosition={insertPosition}
      component={component}
      title={component ? null : t('Configure fields')}
    />
  );
};
```

现在需要改为 `new SchemaInitializer()` 的方式：

```tsx | pure
const bulkEditFormItemInitializers = new SchemaInitializer({
  name: 'BulkEditFormItemInitializers',
  'data-testid': 'configure-fields-button-of-bulk-edit-form-item',
  wrap: gridRowColWrap,
  icon: 'SettingOutlined',
  // 原 insertPosition 和 component 是透传的，这里不用管，也是透传的
  items: [
    {
      type: 'itemGroup',
      title: t('Display fields'),
      name: 'displayFields', // 记得加上 name
      useChildren: useCustomBulkEditFormItemInitializerFields, // 使用到了 useChildren
    },
    {
      type: 'divider',
    },
    {
      title: t('Add text'),
      name: 'addText',
      Component: BlockItemInitializer, // component 替换为 Component
    },
  ],
});
```

详细文档参考

- [插件开发 / Schema 初始化器 / 添加新的初始化器](/development/client/ui-schema/initializer)
- [API 文档 / SchemaInitializer / new SchemaInitializer(options)](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer)

### Item 的定义与实现

以前配置 Item 时，将组件的 props 都放在了 item 里，现在推荐使用 `componentProps` 和 `useComponentProps`。

```diff
{
 name: 'BlockInitializers',
 items: [
  {
    name: 'xxx',
    Component: XXXSchemaInitializerItem,
    title: 'Title 1',
    schema: {},
-   foo: 'bar',
+   useComponentProps: () => {
+     return { foo: 'bar' }
+   }
  }
 ]
}
```

在 Item 组件里，以前 Item 配置是直接 props 传递，现在通过 `useSchemaInitializerItem()` 获取，相关 hook 包括：

- `useSchemaInitializer()` 获取当前初始化器的上下文
- `useSchemaInitializerItem()` 获取当前项的上下文

```diff
const XXXSchemaInitializerItem = (props) => {
-  const { insert, title, schema, foo } = props;
+  const { foo } = props;
+  const { insert } = useSchemaInitializer();
+  const { title, schema } = useSchemaInitializerItem();
 // ...
}
```

详细文档参考

- [API 文档 / SchemaInitializer / 内置组件和类型](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer)

## SchemaSettings 的变化

- 新增 `SchemaSettingsManager` 用于注册 `SchemaSettings`
- 新增 `useSchemaSettingsItem()`
- 新增 `useSchemaSettingsRender()`
- 新增 `x-settings` 参数，用于配置 schema 的设置器
- 新增 `x-toolbar` 参数，用于配置 schema 的工具栏
- 新增 `SchemaToolbar` 组件，用于自定义 schema 的工具栏
- 新增 `useSchemaToolbarRender()`，代替原来的 `useDesigner()`
- 更改 `function SchemaSettings` 变更为 `class SchemaSettings`，用于定义设置器
- 更改 原 `SchemaSettings` 变更为 `SchemaSettingsDropdown`
- 更改 `SchemaSettings.Item` 变更为 `SchemaSettingsItem`
- 更改 `SchemaSettings.ItemGroup` 变更为 `SchemaSettingsItemGroup`
- 更改 `SchemaSettings.SubMenu` 变更为 `SchemaSettingsSubMenu`
- 更改 `SchemaSettings.Divider` 变更为 `SchemaSettingsDivider`
- 更改 `SchemaSettings.Remove` 变更为 `SchemaSettingsRemove`
- 更改 `SchemaSettings.SelectItem` 变更为 `SchemaSettingsSelectItem`
- 更改 `SchemaSettings.CascaderItem` 变更为 `SchemaSettingsCascaderItem`
- 更改 `SchemaSettings.SwitchItem` 变更为 `SchemaSettingsSwitchItem`
- 更改 `SchemaSettings.ModalItem` 变更为 `SchemaSettingsModalItem`
- 更改 `SchemaSettings.ActionModalItem` 变更为 `SchemaSettingsActionModalItem`
- 删除 `x-designer` 参数已废弃，将来会删除，使用 `x-toolbar` 代替，
- 删除 `useDesigner()` 已废弃，将来会删除，使用 `useSchemaToolbarRender()` 代替

相关文档参考

- [插件开发 / SchemaSettings 设置器](/development/client/ui-schema/initializer)
- [插件开发 / SchemaToolbar 工具栏](/development/client/ui-schema/initializer)
- [API 文档 / SchemaSettings](https://client.docs-cn.nocobase.com/core/ui-schema/schema-component)
- [API 文档 / SchemaSettingsManager](https://client.docs-cn.nocobase.com/core/ui-schema/schema-component)
- [API 文档 / SchemaToolbar](https://client.docs-cn.nocobase.com/core/ui-schema/schema-component)

### 设置器定义与实现

以前 SchemaSettings 和 GeneralSchemaDesigner 一起实现，并用在 `x-designer` 里。

```tsx | pure
<GeneralSchemaDesigner>
  <SchemaSettings.SwitchItem
    title={'Enable Header'}
    onClick={() => {}}
  ></SchemaSettings.SwitchItem>
  <SchemaSettings.Divider />
  <SchemaSettings.ModalItem
    title={'xxx'}
    schema={}
    onSubmit={props.onSubmit}
  ></SchemaSettings.ModalItem>
</GeneralSchemaDesigner>
```

现在将二者拆分为 `x-toolbar` 和 `x-settings`，`x-toolbar` 可缺失，SchemaSettings 用在 `x-settings` 里

```ts
const mySettings = new SchemaSettings({
  name: 'MySettings',
  items: [
    {
      name: 'enableHeader',
      type: 'switch',
      componentProps: {
        title: 'Enable Header',
        onClick: () => {},
      },
    },
    {
      name: 'divider',
      type: 'divider',
    },
    {
      name: 'xxx',
      type: 'modal',
      useComponentProps() {
        // useSchemaDesigner() 会传入 props
        const { onSubmit } = useSchemaDesigner();
        return {
          title: 'xxx',
          schema: {},
          onSubmit,
        };
      },
    },
  ],
});
```

在 schema 里的变化

```diff
{
  type: 'void',
- 'x-designer': 'CustomButton.Designer'
+ 'x-toolbar': 'CustomButtonToolbar',  // 非必须
+ 'x-settings': 'CustomButtonSettings',
  'x-component': 'CustomButton',
  'x-content': 'Hello2',
}
```

### 设置项 Item 的实现

以前版本实现 Item 组件写法非常费劲，现在通过 useSchemaSettings() 获取当前 Schema 的 Designable，通过 Designable 来修改当前 Schema

```diff
function EditBlockTitle(props) {
- const field = useField();
- const fieldSchema = useFieldSchema();
- const { dn } = useDesignable();
+ const { dn } = useSchemaSettings();

  return (
    <SchemaSettings.ModalItem
      title={'Edit block title'}
      schema={
        {
          type: 'object',
          title: 'Edit block title',
          properties: {
            title: {
              title: 'Block title',
              type: 'string',
              // 获取 schema 的默认值
-             default: fieldSchema?.['x-decorator-props']?.title,
+             default: dn.getSchemaAttribute('x-decorator-props.title'),
              'x-decorator': 'FormItem',
              'x-component': 'Input',
              'x-compile-omitted': ['default'],
            },
          },
        } as ISchema
      }
      onSubmit={({ title }) => {
-       field.decoratorProps.title = title;
-       fieldSchema['x-decorator-props'] = fieldSchema['x-decorator-props'] || {};
-       fieldSchema['x-decorator-props'].title = title;
-       dn.emit('patch', {
-         schema: {
-           ['x-uid']: fieldSchema['x-uid'],
-           'x-decorator-props': {
-             ...fieldSchema['x-decorator-props'],
-           },
-         },
-       });
-       dn.refresh();
+       dn.deepMerge({
+         'x-decorator-props': {
+           title,
+         },
+       });
      }}
    />
  );
}
```

相关文档参考

- [插件开发 / SchemaSettings 设置器 / 如何实现 Schema 的设置](/development/client/ui-schema/settings)
- [插件开发 / Designable 设计器](/development/client/ui-schema/designable)
- [API 参考 / SchemaSettings / 内置组件和类型](https://client.docs-cn.nocobase.com/core/ui-schema/schema-settings)
- [API 参考 / Designable](https://client.docs-cn.nocobase.com/core/ui-schema/designable)

## 其他

### app.addComponent 方法私有化

`app.addComponent` 方法私有化，不再对外暴露，需要通过 `app.addComponents` 方法注册组件。

```diff
- app.addComponent(MyComponent, 'MyComponent')
+ app.addComponents({ MyComponent })
```

### 删除 `PluginManagerContext`

```diff
const MyProvider = props => {
- const ctx = useContext(PluginManagerContext);
return <div>
- <PluginManagerContext.Provider value={{components: { ...ctx?.components }}}>
  {/* ... */}
- </PluginManagerContext.Provider>
</div>
}
```
