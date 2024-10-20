# スキーマレンダリング

## コアコンポーネント

スキーマレンダリングに関連するコンポーネントは以下の通りです：

- `<SchemaComponentProvider />`：スキーマレンダリングに必要なコンテキストを提供します。
- `<SchemaComponentOptions />`：コンポーネントとスコープを拡張するために使用され、必須ではありません。
- `<SchemaComponent />`：スキーマをレンダリングするために使用し、`<SchemaComponentProvider />` 内で使用する必要があります。

基本的な使用法は以下の通りです。

```tsx
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const Hello = () => <h1>Hello, world!</h1>;

const schema = {
  type: 'void',
  name: 'hello',
  'x-component': 'Hello',
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Hello }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

具体的なAPIについては [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component) を参照してください。

## スコープとは？

スコープとは、スキーマ内で利用可能な変数や関数を指します。以下の例の関数 `t()` は、タイトルを正しくレンダリングするためにスコープに登録する必要があります。

```tsx | pure
<SchemaComponent
  scope={{ t }}
  schema={{
    title: '{{t("Hello")}}',
  }}
>
```

## コンポーネントとスコープの登録

`SchemaComponentProvider`、`SchemaComponentOptions`、および `SchemaComponent` は、コンポーネントとスコープを登録することができます。各コンポーネントの役割は以下の通りです：

- `SchemaComponentProvider`：最上位のコンテキストを提供します。
- `SchemaComponentOptions`：局所的なコンテキストの置き換えと拡張に使用します。
- `SchemaComponent`：現在のスキーマのコンテキストを提供します。

以下の例を参照してください：

```tsx | pure
<SchemaComponentProvider components={{ ComponentA }}>
  <SchemaComponent components={{ ComponentB }} schema={schema1} />
  <SchemaComponent components={{ ComponentC }} schema={schema2} />
  <SchemaComponentOptions components={{ ComponentD }}>
    <SchemaComponent components={{ ComponentE }} schema={schema3} />
    <SchemaComponent components={{ ComponentF }} schema={schema4} />
  </SchemaComponentOptions>
</SchemaComponentProvider>
```

- `schema1` では `ComponentA` と `ComponentB` が使用可能です。
- `schema2` では `ComponentA` と `ComponentC` が使用可能です。
- `schema3` では `ComponentA`、`ComponentD`、および `ComponentE` が使用可能です。
- `schema4` では `ComponentA`、`ComponentD`、および `ComponentF` が使用可能です。

## アプリケーション内での使用

NocoBaseクライアントのアプリケーションプロバイダーには、`SchemaComponentProvider` コンポーネントが組み込まれています。

```ts
class Application {
  // デフォルト提供されるプロバイダー
  addDefaultProviders() {
    this.addProvider(SchemaComponentProvider, {
      scopes: this.scopes,
      components: this.components,
    });
  }
}
```

最終的にレンダリングされるコンポーネントの構造は以下の通りです。

```tsx | pure
<Router>
  {/* ルートのコンテキストプロバイダー */}
  <SchemaComponentProvider components={app.components} scopes={app.scopes}>
    {/* その他のカスタムプロバイダーコンポーネント - 開始タグ */}
    <Routes />
    {/* その他のカスタムプロバイダーコンポーネント - 終了タグ */}
  </SchemaComponentProvider>
</Router>
```

アプリケーション内部で使用する際は、再度 `SchemaComponentProvider` をラップする必要はなく、直接 `SchemaComponent` を使用できます。

```tsx
import {
  Application,
  Plugin,
  SchemaComponent,
  SchemaComponentProvider,
} from '@nocobase/client';
import React from 'react';

const Hello = () => <h1>Hello, world!</h1>;

const HelloPage = () => {
  return (
    <SchemaComponent
      schema={{
        name: 'hello',
        type: 'void',
        'x-component': 'Hello',
      }}
    />
  );
};
```

アプリケーションのライフサイクルメソッド内では、`app.addComponents()` および `app.addScopes()` を使用して、グローバルなコンポーネントとスコープを拡張できます。

```ts
class PluginHello extends Plugin {
  async load() {
    this.app.addComponents({
      // 拡張するコンポーネント
    });
    this.app.addScopes({
      // 拡張するスコープ
    });
  }
}
```
