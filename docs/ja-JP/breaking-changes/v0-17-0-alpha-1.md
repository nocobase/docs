# 0.17.0-alpha.1

:::warning
本記事では、プラグイン開発に関連する非互換の変更点のみを紹介します。
:::

## SchemaInitializer の変更点

- 新たに `SchemaInitializerManager` が追加され、`SchemaInitializer` を登録するために使用されます。
- 新たに `useSchemaInitializerRender()` が追加され、従来の `useSchemaInitializer()` の `render()` を置き換えます。
- 新たに `useSchemaInitializerItem()` が追加され、現在の初期化アイテムのコンテキストを取得するために使用されます。
- 新たに `SchemaInitializerItemGroup` コンポーネントが追加され、`type: 'itemGroup'` のデフォルトコンポーネントとして使用されます。
- 新たに `SchemaInitializerSubMenu` コンポーネントが追加され、`type: 'subMenu'` のデフォルトコンポーネントとして使用されます。
- 新たに `SchemaInitializerDivider` コンポーネントが追加され、`type: 'divider'` のデフォルトコンポーネントとして使用されます。
- 新たに `SchemaInitializerChildren` コンポーネントが追加され、複数のリスト項目をカスタムレンダリングするために使用されます。
- 新たに `SchemaInitializerChild` コンポーネントが追加され、単一のリスト項目をカスタムレンダリングするために使用されます。
- `SchemaInitializerContext` の役割が変更され、現在の初期化器のコンテキストを保存するために使用されます。
- `useSchemaInitializer()` の役割が変更され、現在の初期化器のコンテキストを取得するために使用されます。
- `function SchemaInitializer` が `class SchemaInitializer` に変更され、初期化器を定義するために使用されます。
- `SchemaInitializer` のパラメータが変更されました。
  - 新たに必須パラメータ `name` が追加され、`x-initializer` の値として使用されます。
  - 新たに `Component` パラメータが追加され、カスタムレンダリングされるボタン用です。デフォルトは `SchemaInitializerButton` です。
  - 新たに `componentProps`、`style` が追加され、`Component` の属性とスタイルを設定するために使用されます。
  - 新たに `ItemsComponent` パラメータが追加され、カスタムレンダリングされるリスト用です。デフォルトは `SchemaInitializerItems` です。
  - 新たに `itemsComponentProps`、`itemsComponentStyle` が追加され、`ItemsComponent` の属性とスタイルを設定するために使用されます。
  - 新たに `popover` パラメータが追加され、`popover` 効果の表示を設定するために使用されます。
  - 新たに `useInsert` パラメータが追加され、`insert` 関数がフックを使用する必要がある場合に使用されます。
  - `dropdown` パラメータが `popoverProps` に変更され、`Popover` が `Dropdown` の代わりに使用されます。
- `SchemaInitializer` の `items` パラメータが変更されました。
  - 新たに `useChildren` 関数が追加され、子項目を動的に制御するために使用されます。
  - 新たに `componentProps` 関数が追加され、コンポーネント自身の属性として使用されます。
  - 新たに `useComponentProps` 関数が追加され、コンポーネントの props を動的に処理するために使用されます。
  - `key` パラメータが `name` に変更され、リスト項目の一意の識別子として使用されます。
  - `visible` パラメータが `useVisible` 関数に変更され、表示の動的制御に使用されます。
  - `component` パラメータが `Component` に変更され、リスト項目のレンダリングに使用されます。
- `SchemaInitializer.Button` が `SchemaInitializerButton` に変更され、`SchemaInitializer` のコンポーネントパラメータのデフォルト値となります。
- `SchemaInitializer.Item` が `SchemaInitializerItem` に変更され、パラメータは変わりません。
- `SchemaInitializer.ActionModal` が `SchemaInitializerActionModal` に変更され、パラメータは変わりません。
- `SchemaInitializer.SwitchItem` が `SchemaInitializer.Switch` に変更され、パラメータは変わりません。
- `SchemaInitializerProvider` が削除され、`SchemaInitializerManager` に置き換えられました。
- `SchemaInitializer.itemWrap` が削除され、`item` コンポーネントをラップする必要がなくなりました。

関連文書の参照

- [プラグイン開発 / Schema 初期化器](/development/client/ui-schema/initializer)
- [API 文書 / SchemaInitializer](https://client.docs-cn.nocobase.com/core/ui-schema/schema-component)

### 既存の初期化器に項目を追加する

以前は `SchemaInitializerContext` を通じてすべての `Initializers` を取得し、追加、削除、変更を行っていました。以下のコードは `BlockInitializers` の `media` 内に `Hello` を追加するためのものです。

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
    title: '{{t("こんにちはブロック")}}',
    component: HelloBlockInitializer,
  });
}
```

新しい方法では、プラグインの load メソッド内で `schemaInitializerManager.addItem()` メソッドを使用して項目を追加します。

```tsx | pure
class MyPlugin extends Plugin {
  async load() {
    this.schemaInitializerManager.addItem(
      'BlockInitializers',
      'otherBlocks.hello',
      {
        title: '{{t("こんにちはブロック")}}',
        Component: HelloBlockInitializer,
      },
    );
  }
}
```

詳細なドキュメントは以下を参照してください。

- [プラグイン開発 / スキーマ初期化子 / 既存の初期化子に項目を追加する](/development/client/ui-schema/initializer)
- [API ドキュメント / SchemaInitializer / 組み込みコンポーネントとタイプ](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer)

### 新しい初期化子をアプリに追加する

以前は `SchemaInitializerProvider` を通じて追加していました。例えば：

```tsx | pure
<SchemaInitializerProvider
  initializers={{ BlockInitializers }}
  components={{ ManualActionDesigner }}
></SchemaInitializerProvider>
```

現在は、プラグインの load メソッドの中で追加します。例えば：

```tsx | pure
import { Plugin } from '@nocobase/client';

class MyPlugin extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(blockInitializers);
    this.app.addComponents({ ManualActionDesigner });
  }
}
```

詳細なドキュメントは以下を参照してください。

- [プラグイン開発 / スキーマ初期化子 / 新しい初期化子を追加する](/development/client/ui-schema/initializer)
- [API ドキュメント / SchemaInitializerManager / schemaInitializerManager.addItem()](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer-manager)

### 新しい初期化子を追加する

以前は `SchemaInitializer` が JSON オブジェクトとコンポーネントの書き方をサポートしていましたが、現在は `new SchemaInitializer()` のみです。

例1：以前の JSON の書き方を `new SchemaInitializer()` 方式に変更

```diff
- export const BlockInitializers = {
+ export const blockInitializers = new SchemaInitializer({
+ name: 'BlockInitializers',
  'data-testid': 'add-block-button-in-page',
  title: '{{t("ブロックを追加")}}',
  icon: 'PlusOutlined',
  wrap: gridRowColWrap,
   items: [
    {
-     key: 'dataBlocks',
+     name: 'data-blocks',
      type: 'itemGroup',
      title: '{{t("データブロック")}}',
      children: [
        {
-         key: 'table',
+         name: 'table',
-         type: 'item', // Component パラメータがある場合、これは必要ありません
          title: '{{t("テーブル")}}',
-         component: TableBlockInitializer,
+         Component: TableBlockInitializer,
        },
         {
          key: 'form',
          type: 'item',
          title: '{{t("フォーム")}}',
          component: FormBlockInitializer,
        }
      ],
    },
  ],
});
```

例2：コンポーネントの書き方を `new SchemaInitializer()` 方式に変更

元々はコンポーネント定義の方式：

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
          title: t('表示フィールド'),
          children: useCustomBulkEditFormItemInitializerFields(),
        },
        {
          type: 'divider',
        },
        {
          type: 'item',
          title: t('テキストを追加'),
          component: BlockItemInitializer,
        },
      ]}
      insertPosition={insertPosition}
      component={component}
      title={component ? null : t('フィールドを設定')}
    />
  );
};
```

現在は `new SchemaInitializer()` 方式に変更する必要があります。

```tsx | pure
const bulkEditFormItemInitializers = new SchemaInitializer({
  name: 'BulkEditFormItemInitializers',
  'data-testid': 'configure-fields-button-of-bulk-edit-form-item',
  wrap: gridRowColWrap,
  icon: 'SettingOutlined',
  // 元の insertPosition と component は透過されるため、ここでは気にしない
  items: [
    {
      type: 'itemGroup',
      title: t('表示フィールド'),
      name: 'displayFields', // name を追加
      useChildren: useCustomBulkEditFormItemInitializerFields, // useChildren を使用
    },
    {
      type: 'divider',
    },
    {
      title: t('テキストを追加'),
      name: 'addText',
      Component: BlockItemInitializer, // component を Component に置き換え
    },
  ],
});
```

詳細なドキュメントは以下を参照してください。

- [プラグイン開発 / スキーマ初期化器 / 新しい初期化子を追加する](/development/client/ui-schema/initializer)
- [API ドキュメント / SchemaInitializer / new SchemaInitializer(options)](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer)

### Item の定義と実装

以前は Item を設定する際、コンポーネントの props をすべて item に入れていましたが、現在は `componentProps` と `useComponentProps` の使用が推奨されています。

```diff
{
 name: 'BlockInitializers',
 items: [
  {
    name: 'xxx',
    Component: XXXSchemaInitializerItem,
    title: 'タイトル 1',
    schema: {},
-   foo: 'bar',
+   useComponentProps: () => {
+     return { foo: 'bar' }
+   }
  }
 ]
}
```

Item コンポーネント内では、以前は Item 設定が直接 props に渡されましたが、現在は `useSchemaInitializerItem()` を使用して取得します。関連する hook には以下が含まれます：

- `useSchemaInitializer()` 現在の初期化器のコンテキストを取得
- `useSchemaInitializerItem()` 現在の項目のコンテキストを取得

```diff
const XXXSchemaInitializerItem = (props) => {
-  const { insert, title, schema, foo } = props;
+  const { foo } = props;
+  const { insert } = useSchemaInitializer();
+  const { title, schema } = useSchemaInitializerItem();
 // ...
}
```

詳細なドキュメントを参照してください。

- [API ドキュメント / SchemaInitializer / 組み込みコンポーネントとタイプ](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer)

## SchemaSettings の変更点

- 新たに `SchemaSettingsManager` を追加し、`SchemaSettings` を登録するために使用します。
- 新たに `useSchemaSettingsItem()` を追加します。
- 新たに `useSchemaSettingsRender()` を追加します。
- 新たに `x-settings` パラメータを追加し、スキーマの設定器を構成するために使用します。
- 新たに `x-toolbar` パラメータを追加し、スキーマのツールバーを構成するために使用します。
- 新たに `SchemaToolbar` コンポーネントを追加し、スキーマのツールバーをカスタマイズするために使用します。
- 新たに `useSchemaToolbarRender()` を追加し、従来の `useDesigner()` の代わりに使用します。
- `function SchemaSettings` を `class SchemaSettings` に変更し、設定器を定義するために使用します。
- 既存の `SchemaSettings` を `SchemaSettingsDropdown` に変更します。
- `SchemaSettings.Item` を `SchemaSettingsItem` に変更します。
- `SchemaSettings.ItemGroup` を `SchemaSettingsItemGroup` に変更します。
- `SchemaSettings.SubMenu` を `SchemaSettingsSubMenu` に変更します。
- `SchemaSettings.Divider` を `SchemaSettingsDivider` に変更します。
- `SchemaSettings.Remove` を `SchemaSettingsRemove` に変更します。
- `SchemaSettings.SelectItem` を `SchemaSettingsSelectItem` に変更します。
- `SchemaSettings.CascaderItem` を `SchemaSettingsCascaderItem` に変更します。
- `SchemaSettings.SwitchItem` を `SchemaSettingsSwitchItem` に変更します。
- `SchemaSettings.ModalItem` を `SchemaSettingsModalItem` に変更します。
- `SchemaSettings.ActionModalItem` を `SchemaSettingsActionModalItem` に変更します。
- `x-designer` パラメータは廃止され、将来的に削除されます。代わりに `x-toolbar` を使用してください。
- `useDesigner()` は廃止され、将来的に削除されます。代わりに `useSchemaToolbarRender()` を使用してください。

関連文書の参照

- [プラグイン開発 / SchemaSettings 設定器](/development/client/ui-schema/initializer)
- [プラグイン開発 / SchemaToolbar ツールバー](/development/client/ui-schema/initializer)
- [API 文書 / SchemaSettings](https://client.docs-cn.nocobase.com/core/ui-schema/schema-component)
- [API 文書 / SchemaSettingsManager](https://client.docs-cn.nocobase.com/core/ui-schema/schema-component)
- [API 文書 / SchemaToolbar](https://client.docs-cn.nocobase.com/core/ui-schema/schema-component)

### 設定器の定義と実装

以前は `SchemaSettings` と `GeneralSchemaDesigner` が一緒に実装され、`x-designer` で使用されていました。

```tsx | pure
<GeneralSchemaDesigner>
  <SchemaSettings.SwitchItem
    title={'ヘッダーを有効にする'}
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

現在は二者を `x-toolbar` と `x-settings` に分割し、`x-toolbar` は省略可能で、`SchemaSettings` は `x-settings` で使用されます。

```ts
const mySettings = new SchemaSettings({
  name: 'MySettings',
  items: [
    {
      name: 'enableHeader',
      type: 'switch',
      componentProps: {
        title: 'ヘッダーを有効にする',
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
        // useSchemaDesigner() で props が渡されます
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

スキーマ内の変更

```diff
{
  type: 'void',
- 'x-designer': 'CustomButton.Designer'
+ 'x-toolbar': 'CustomButtonToolbar',  // 任意
+ 'x-settings': 'CustomButtonSettings',
  'x-component': 'CustomButton',
  'x-content': 'Hello2',
}
```

### 設定項目 Item の実装

以前のバージョンでは、Itemコンポーネントの実装が非常に手間がかかりましたが、現在はuseSchemaSettings()を使用して現在のSchemaのDesignableを取得し、Designableを通じて現在のSchemaを変更できるようになりました。

```diff
function EditBlockTitle(props) {
- const field = useField();
- const fieldSchema = useFieldSchema();
- const { dn } = useDesignable();
+ const { dn } = useSchemaSettings();

  return (
    <SchemaSettings.ModalItem
      title={'ブロックタイトルを編集'}
      schema={
        {
          type: 'object',
          title: 'ブロックタイトルを編集',
          properties: {
            title: {
              title: 'ブロックタイトル',
              type: 'string',
              // schemaのデフォルト値を取得
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

関連文書の参照

- [プラグイン開発 / SchemaSettings セッター / Schemaの設定を実現する方法](/development/client/ui-schema/settings)
- [プラグイン開発 / Designable デザイナー](/development/client/ui-schema/designable)
- [API 参照 / SchemaSettings / 内蔵コンポーネントとタイプ](https://client.docs-cn.nocobase.com/core/ui-schema/schema-settings)
- [API 参照 / Designable](https://client.docs-cn.nocobase.com/core/ui-schema/designable)

## その他

### app.addComponent メソッドの非公開化

`app.addComponent` メソッドは非公開化され、外部に露出しなくなりました。コンポーネントを登録するには、`app.addComponents` メソッドを使用する必要があります。

```diff
- app.addComponent(MyComponent, 'MyComponent')
+ app.addComponents({ MyComponent })
```

### `PluginManagerContext` の削除

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

