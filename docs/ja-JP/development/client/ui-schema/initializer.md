# SchemaInitializer 初期化器

UI 設定がアクティブ化されると、インターフェース上に直感的に見える様々なオレンジ色のボタンが Schema 初期化器となり、インターフェース内に様々なブロック、フィールド、操作などを追加するために使用されます。

<img src="./image-5.png" style="width: 960px;">

## 内蔵の初期化器

<img src="./image-3.png" style="width: 960px;"/>

## 既存の初期化器に項目を追加する

項目を追加するには、[`schemaInitializerManager.addItem()`](#) メソッドの使用をお勧めします。項目の詳細な設定については [SchemaInitializer Item API](#) を参照してください。

```ts
class PluginDemoAddSchemaInitializerItem extends Plugin {
  async load() {
    this.schemaInitializerManager.addItem(
      'myInitializer', // 例：既存の schema initializer
      'otherBlocks.custom', // otherBlocks グループに custom を追加
      {
        type: 'item',
        useComponentProps() {},
      },
    );
  }
}
```

## 新しい初期化器を追加する

SchemaInitializer の詳細なパラメータについては [SchemaInitializerOptions API](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer#new-schemainitializeroptions) を参照してください。

```ts
const myInitializer = new SchemaInitializer({
  // 初期化器識別子、グローバルにユニーク
  name: 'myInitializer',
  title: 'ブロックを追加',
  // ラップ、例えば Grid に挿入する場合は Grid.wrap を使用（行列ラベルを追加）
  wrap: Grid.wrap,
  // 挿入位置、デフォルトは beforeEnd、'beforeBegin' | 'afterBegin' | 'beforeEnd' | 'afterEnd' がサポート
  insertPosition: 'beforeEnd',
  // ドロップダウンメニュー項目
  items: [
    {
      name: 'a',
      type: 'item',
      useComponentProps() {},
    },
  ],
});
```

### プラグインの load メソッド内で登録する

新しい初期化器をアプリに追加するには `schemaInitializerManager.add()` の使用をお勧めします。

```ts
class PluginDemoAddSchemaInitializer extends Plugin {
  async load() {
    const myInitializer = new SchemaInitializer({
      name: 'myInitializer',
      title: 'ブロックを追加',
      wrap: Grid.wrap,
      items: [
        {
          name: 'helloBlock',
          type: 'item',
          useComponentProps() {
            const { insert } = useSchemaInitializer();
            return {
              title: 'こんにちは',
              onClick: () => {
                insert({
                  type: 'void',
                  'x-decorator': 'CardItem',
                  'x-component': 'h1',
                  'x-content': 'こんにちは、世界！',
                });
              },
            };
          },
        },
      ],
    });
    this.schemaInitializerManager.add(myInitializer);
  }
}
```

### 追加した初期化器の使用方法

SchemaInitializer は Schema の `x-initializer` パラメータで使用されます。

#### 既存の `x-initializer` をサポートする Schema コンポーネント

一般的に `x-initializer` をサポートする Schema コンポーネントには Grid、ActionBar、Tabs があります。例えば：

```ts
{
  type: 'void',
  'x-component': 'Grid',
  'x-initializer': 'myInitializer',
}
```

#### カスタムコンポーネントが `x-initializer` パラメータをサポートする方法

Grid、ActionBar、Tabs などのコンポーネントがニーズを満たさない場合でも、カスタムコンポーネント内で [useSchemaInitializerRender()](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer#useschemainitializerrender) を使用して `x-initializer` のレンダリングを処理できます。

## API 参考

- [SchemaInitializerManager](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer-manager)
- [SchemaInitializer](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer)

