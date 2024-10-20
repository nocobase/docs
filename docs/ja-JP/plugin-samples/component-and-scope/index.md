# コンポーネントとスコープの登録と使用

## シーン説明

コンポーネントとスコープを登録する必要がある理由は、以下の2つです。

### 理由1：UIスキーマはサーバー側に保存する必要がある

NocoBaseのフロントエンドページは[UIスキーマ](/development/client/ui-schema/what-is-ui-schema)に基づいてレンダリングされますが、UIスキーマはデータベースに保存する必要があるため、参照型のプロパティを持つことはできません。そのため、`x-component`、`x-decorator`、`x-use-component-props`、`x-use-decorator-props`などの属性の値を文字列として保存し、対応するコンポーネントとスコープをNocoBaseに登録します。これにより、ページをレンダリングする際に文字列に基づいて対応するコンポーネントとスコープを見つけることができます。

逆に、データベースに保存する必要がないUIスキーマでは、参照型のプロパティを直接使用できます。例えば、ローカルの[プラグイン設定ページ](/plugin-samples/plugin-settings/form)で使用される`x-component`や`x-use-component-props`などの属性の値は、参照型のプロパティを直接使用することができます。

```ts
const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': MyComponent,
  'x-use-component-props': useMyComponentProps,
}
```

### 理由2：拡張性の要求

コンポーネントは、UIスキーマ内で使用されるだけでなく、ルーティングでも使用されます。この2つのシーンでは、特定のコンポーネントをオーバーライドしてカスタマイズできます。例えば：

```ts
class AuthPlugin extends Plugin {
  async load() {
    this.app.addComponents({ LoginPage })
    this.app.router.add('auth.signin', {
      path: '/signin',
      Component: 'SignInPage',
    })
  }
}
```

他の人がログインページを置き換える必要がある場合、2つの選択肢があります。

#### 方案1：ルートの置き換え

```ts
class CustomPlugin extends Plugin {
  async load() {
    this.app.router.add('auth.login', {
      path: '/login',
      Component: CustomLoginPage,
    })
  }
}
```

#### 方案2：コンポーネントの直接置き換え

```ts
class CustomPlugin extends Plugin {
  async load() {
    this.app.addComponent({ LoginPage: CustomLoginPage })
  }
}
```

このように、これら2つのシーンでない限り、コンポーネントとスコープを登録する必要はなく、参照型のプロパティを直接使用できます。

## グローバル登録とローカル登録

コンポーネントとスコープは、グローバルに登録することもローカルに登録することもできます。

### グローバル登録

グローバル登録は、[app.addComponents()](https://client.docs.nocobase.com/core/application/application#appaddcomponents)と[app.addScopes()](https://client.docs.nocobase.com/core/application/application#appaddscopes)メソッドを使用して行います。例えば：

```ts
class MyPlugin extends Plugin {
  async load() {
    this.app.addComponents({ MyComponent })
    this.app.addScopes({ MyScope })
  }
}
```

### ローカル登録

ローカル登録は、[SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)と[SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions)コンポーネントの`components`と`scope`属性を使用して行います。例えば：

```tsx | pure
<SchemaComponentProvider components={{ Hello }} scope={{ useDeleteProps }}>
  <SchemaComponent schema={schema} components={{ World }} scope={{ useSubmitProps }} />
</SchemaComponentProvider>
```

`SchemaComponentProvider`は多層にネストでき、内部の`SchemaComponent`は外部の`components`と`scope`を継承します。

上記のシーンに対して、以下の例を提供します：

- [グローバル登録コンポーネントとスコープ](/plugin-samples/component-and-scope/global)
- [ローカル登録コンポーネントとスコープ](/plugin-samples/component-and-scope/local)

オーバーライドシーンについては、ルートの例での[ページの置き換え](/plugin-samples/router/replace-page)を参考にしてください。

