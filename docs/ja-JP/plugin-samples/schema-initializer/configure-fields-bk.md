# データフィールドイニシャライザーの実装

## シーン説明

新しく作成されたブロックが複雑なデータブロックである場合、その内部には複数の動的に追加された部分が含まれる可能性があります。その中で重要なのは、`Configure fields` に対応するイニシャライザーを使用してフィールドを動的に追加することです。例えば、`Form` ブロックでは、`Configure fields` を使用して表示するフィールドを設定できます。

![img_v3_02b4_111734a2-755f-4100-949d-96803ad1912g](https://static-docs.nocobase.com/img_v3_02b4_111734a2-755f-4100-949d-96803ad1912g.jpg)

## 例の説明

この例では、[データブロックの追加](/plugin-samples/schema-initializer/data-block) に基づいて、`Form` ブロックのような効果を実現します。`Configure fields` を使用して表示するフィールドを構成します。

この文書の完全な例コードは、[plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-configure-fields) にて確認できます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-190508.mp4" type="video/mp4" />
</video>

## プラグインの初期化

まず、[最初のプラグインを書く](/development/your-fisrt-plugin) のドキュメントに従い、プロジェクトがない場合は新しく作成します。すでにプロジェクトがあるか、ソースコードをクローンしている場合は、このステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化してシステムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-initializer-configure-fields
yarn pm enable @nocobase-sample/plugin-initializer-configure-fields
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) にアクセスすると、プラグインがインストールされ、有効になっていることが確認できます。

## 機能の実装

この例を実現する前に、いくつかの基本的な知識を理解する必要があります：

- [SchemaInitializer チュートリアル](/development/client/ui-schema/initializer)：インターフェースにさまざまなブロック、フィールド、操作を追加するためのもの
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：インターフェースにさまざまなブロック、フィールド、操作を追加するためのもの
- [UI スキーマ](/development/client/ui-schema/what-is-ui-schema)：インターフェースの構造とスタイルを定義するためのもの
- [Designable デザイナー](/development/client/ui-schema/designable)：スキーマを変更するためのもの

### 1. コードをコピーしてプラグイン名を変更

この例は、[データブロックの追加](/plugin-samples/schema-initializer/data-block) に基づいて続けて実装することが説明されていますので、`packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client` ディレクトリをコピーして、`packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client` に上書きします。

次に、`packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/index.tsx` を変更します：

```diff
import { Plugin } from '@nocobase/client';
import { InfoBlock, infoBlockSettings, infoBlockInitializerItem } from './InfoBlock';

- export class PluginInitializerBlockDataClient extends Plugin {
+ export class PluginInitializerConfigureFieldsClient extends Plugin {
  async load() {
    // ...
  }
}

- export default PluginInitializerBlockDataClient;
+ export default PluginInitializerConfigureFieldsClient;
```

他の例との衝突を避けるために、すべての `InfoBlock` を `InfoBlock2` に変更しますが、この例の文書では依然として `InfoBlock` として説明します。

### 2. `Configure fields` に対応するイニシャライザーを作成する

`packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/configureFields.tsx` ファイルを新規作成します：

```tsx | pure
import { Grid, SchemaInitializer, useSchemaInitializer } from "@nocobase/client";

export const configureFields = new SchemaInitializer({
  name: 'info:configureFields',
  icon: 'SettingOutlined',
  title: 'フィールド設定',
  items: [
    {
      type: 'itemGroup',
      name: 'fields',
      title: '表示フィールド',
      useChildren() {
        const { insert } = useSchemaInitializer();

        return []
      },
    }
  ]
});
```

- [SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：Schema Initializer インスタンスを作成するために使用します。
- `icon`：アイコン。詳細なアイコンは Ant Design [Icons](https://ant.design/components/icon/) を参照してください。
- `title`：ボタンのタイトル。
- [items](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types)：ボタンの下のサブアイテム。
  - `type: 'itemGroup'`：サブアイテムの型。複数のサブアイテムをラップするために使用します。
  - `name: 'fields'`：サブアイテムの名前。
  - `title: '表示フィールド'`：サブアイテムのタイトル。
  - `useChildren`：サブアイテムのサブアイテムを定義し、配列を返します。配列内の各項目がサブアイテムとなります。

### 3. `Configure fields` 初期化子の登録

次に `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/index.tsx` ファイルを修正し、この初期化子をインポートして登録します：

```tsx | pure
import { configureFields } from './configureFields'

export class PluginInitializerConfigureFieldsClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(configureFields)
  }
}
```

### 4. `getInfoBlockSchema()` ブロックの修正

`packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/InfoBlock.tsx` ファイルを修正し、`getInfoBlockSchema()` ブロックを次のように変更します：

```diff
function getInfoBlockSchema({ dataSource, collection }) {
  return {
    // ...
    properties: {
      info: {
        type: 'void',
        'x-component': 'InfoBlock',
+       properties: {
+         fields: {
+           type: 'void',
+           'x-component': 'Grid',
+           'x-initializer': 'info:configureFields',
+         }
+       }
      }
    }
  }
}
```

`InfoBlock` の子ノードに `fields` フィールドを追加しました。より良いレイアウトのために `Grid` コンポーネントでラップし、`x-initializer` を `info:configureFields` に指定しました。`Grid` は [useSchemaInitializerRender()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializerrender) のレンダリングロジックを内蔵しているため、直接使用できます。カスタムコンポーネントの場合は、自分で `useSchemaInitializerRender()` を使用してレンダリングロジックを実装する必要があります。

### 5. `InfoBlock` コンポーネントの修正

`packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/InfoBlock.tsx` ファイルを修正し、`InfoBlock` コンポーネントを次のように変更します：

```tsx | pure
export const InfoBlock = ({ children }) => {
  return <div>{children}</div>
}
```

`properties` の内容は `InfoBlock` コンポーネントの `children` に渡されるため、直接 `children` をレンダリングします。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-190759.mp4" type="video/mp4" />
</video>

### 6. データソースフィールドを `Configure fields` の子項目として読み取る

引き続き `packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/configureFields.tsx` ファイルを修正します：

```tsx | pure
interface GetFieldInitializerItemOptions {
  collectionField: CollectionFieldOptions;
}

function getFieldInitializerItem(options: GetFieldInitializerItemOptions) {
  const { collectionField } = options;
  const title = collectionField.uiSchema?.title || collectionField.name;
  const name = collectionField.name;
  return {
    name: collectionField.name,
    title: collectionField.uiSchema?.title || collectionField.name,
    type: 'switch',
    onClick() {
      // TODO
    }
  } as SchemaInitializerItemType;
}

export const configureFields = new SchemaInitializer({
  name: 'info:configureFields',
  icon: 'SettingOutlined',
  title: 'フィールド設定',
  items: [
    {
      type: 'itemGroup',
      name: 'fields',
      title: '表示フィールド',
      useChildren() {
        const collection = useCollection();

        const schemaItems = collection
          .getFields()
          .map<SchemaInitializerItemType>(getFieldInitializerItem({
            collectionField,
          }));

        return schemaItems;
      },
    }
  ]
});
```

- [useCollection()](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection)：現在のデータテーブルのインスタンスを取得するために使用します。`getInfoBlockSchema()`内では、[DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)を使用しており、その内部には[CollectionProvider](https://client.docs.nocobase.com/core/data-source/collection-provider)が含まれているため、直接使用することができます。
  - `collection.getFields()`：データテーブルのフィールドを取得します。

- getFieldInitializerItem：フィールドのスキーマイニシャライザーアイテムを取得するために使用します。
  - `name`：サブアイテム名で、ユニークに識別します。
  - `title`：サブアイテムのタイトルで、表示に使用します。フィールドに`uiSchema.title`がある場合はそれを使用し、なければフィールド名を使用します。`field.uiSchema`のデータ構造については[CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field)を参照してください。
  - `type: 'switch'`：サブアイテムのタイプで、[Switchタイプ](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#type-switch--schemainitializerswitch)です。核心は`onClick`メソッドを実装することで、クリックされたときに存在すれば削除し、存在しなければ追加します。
  - `onClick`：クリックイベントです。ここでは一時的に実装されておらず、今後の実装を予定しています。

![img_v3_02b4_7d5c145e-cb15-4d93-9004-bde406e42a5g](https://static-docs.nocobase.com/img_v3_02b4_7d5c145e-cb15-4d93-9004-bde406e42a5g.jpg)

### 7. `switch`の追加と削除の実装

`packages/plugins/@nocobase-sample/plugin-initializer-configure-fields/src/client/configureFields.tsx`ファイルを修正します：

```diff
+ import { CollectionFieldOptions, ISchema, SchemaInitializer, SchemaInitializerItemType, SchemaSettings, useCollection, useDesignable, useSchemaInitializer } from "@nocobase/client";

export const configureFields = new SchemaInitializer({
  name: 'info:configureFields',
  icon: 'SettingOutlined',
  title: 'フィールド設定',
  items: [
    {
      type: 'itemGroup',
      name: 'fields',
      title: '表示フィールド',
      useChildren() {
+       const { insert } = useSchemaInitializer();
+       const { remove } = useDesignable();
+       const schema = useFieldSchema();
        const collection = useCollection();

        const schemaItems = collection
          .getFields()
          .map<SchemaInitializerItemType>((collectionField) => getFieldInitializerItem({
            collectionField,
+           schema,
+           remove,
+           insert
+         }));

        return schemaItems;
      },
    }
  ]
});
```

- [useDesignable()](https://client.docs.nocobase.com/core/ui-schema/designable#usedesignable)：スキーマの追加、削除、更新、取得を行うためのメソッドです。
- [useSchemaInitializer()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：スキーマイニシャライザコンテキストを提供するために使用されます。
  - `insert`：スキーマを挿入するために使用されます。`useSchemaInitializer()` が提供する insert メソッドを使用する理由は、スキーマが階層的であり、`useSchemaInitializer()` で取得されるのは `SchemaInitializer` の階層で、`useDesignable()` で取得されるのは現在のスキーマの階層であるため、`SchemaInitializer` の兄弟階層に挿入する必要があります。したがって、`useSchemaInitializer()` の insert メソッドを使用します。

```tsx | pure
function getInfoItemSchema(collectionFieldName: string) {
  return {
    type: 'void',
    'x-collection-field': collectionFieldName,
    // TODO
  }
}

interface GetFieldInitializerItemOptions {
  collectionField: CollectionFieldOptions;
  schema: ISchema;
  remove: (schema: ISchema) => void;
  insert: (schema: ISchema) => void;
}

function getFieldInitializerItem(options: GetFieldInitializerItemOptions) {
  const { collectionField, schema, remove, insert } = options;
  const title = collectionField.uiSchema?.title || collectionField.name;
  const name = collectionField.name;
  const collectionFieldSchema = Object.values(schema.properties || {}).find((item) => item['x-collection-field'] === name);
  return {
    name,
    type: 'switch',
    title,
    checked: !!collectionFieldSchema,
    onClick() {
      if (collectionFieldSchema) {
        remove(collectionFieldSchema);
        return;
      }
      insert(getInfoItemSchema(name));
    }
  } as SchemaInitializerItemType;
}
```

まず `getInfoItemSchema` はフィールドのスキーマを返すために使用されます。ここで重要なポイントは `x-collection-field` フィールドであり、これはこのスキーマがどのフィールドに属するかを示します。

次に、`schema.properties` のデータを読み取ることで、対応するフィールドのスキーマを見つけます。存在する場合は削除し、存在しない場合は挿入します。

### 8. サブノードのスキーマとコンポーネントを充実させる

```ts
export const infoItemSettings = new SchemaSettings({
  name: 'fieldSettings:info',
  items: [
    {
      name: 'remove',
      type: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn(s) {
          return s['x-component'] === 'Grid';
        },
      },
    }
  ]
})

export const InfoItem = () => {
  const fieldSchema = useFieldSchema();
  const collection = useCollection();
  const collectionFieldName = fieldSchema.name;
  return <pre>{JSON.stringify(collection.getField(collectionFieldName), null, 2)}</pre>
}

function getInfoItemSchema(collectionFieldName: string) {
  return {
    type: 'void',
    'x-collection-field': collectionFieldName,
    'x-component': 'Grid.Row',
    properties: {
      [uid()]: {
        type: 'void',
        'x-component': 'Grid.Col',
        properties: {
          [collectionFieldName]: {
            type: 'void',
            'x-component': 'InfoItem',
            'x-decorator': 'CardItem',
            'x-settings': infoItemSettings.name,
          },
        },
      },
    },
  } as ISchema;
}
```

`getInfoBlockSchema()` 関数では、親として `Grid` コンポーネントを使用します。そのため、子ノードには `Grid.Row` と `Grid.Col` コンポーネントを使用し、さらに `Grid.Col` 内で `InfoItem` コンポーネントを使用します。

`InfoItem` は具体的なフィールド情報を表示するコンポーネントです。ここでは、まず現在のフィールドのスキーマを読み込みます。その中で `schema.name` は `collectionFieldName` に対応し、次に [collection.getField(collectionFieldName)](https://client.docs.nocobase.com/core/data-source/collection#collectiongetfieldname) を通じてフィールドの詳細情報を取得し、それを表示します。

次に、`InfoItem` と `infoItemSettings` コンポーネントをシステムに登録します：

```ts
export class PluginInitializerComplexDataBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ InfoBlock, InfoItem });
    this.app.schemaSettingsManager.add(infoBlockSettings, infoItemSettings);
  }
}
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-190508.mp4" type="video/mp4" />
</video>

## パッケージ化と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-fisrt-plugin#构建并打包插件) に関するドキュメントに従い、プラグインをパッケージ化して本番環境にアップロードできます。

クローンしたソースコードの場合、まず全体ビルドを一度実行し、プラグインの依存関係を構築します。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合、次のコマンドを直接実行できます：

```bash
yarn build @nocobase-sample/plugin-initializer-configure-fields --tar
```

これにより `storage/tar/@nocobase-sample/plugin-initializer-configure-fields.tar.gz` ファイルが生成され、その後 [アップロードの方法](/welcome/getting-started/plugin) に従ってインストールを行います。

