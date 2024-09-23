# ページの置き換え

## シナリオ説明

既存のページのレイアウトを変更するか、ページ全体の内容を直接置き換える必要があるシナリオです。

## サンプル説明

ログインおよび登録ページのレイアウトをカスタマイズする必要があります。現在は1つのフォームのみですが、左右にレイアウトを変更し、左側に画像、右側にフォームを配置します。

この文書の完全なサンプルコードは、[plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-replace-page)で確認できます。

![20240512200917](https://static-docs.nocobase.com/20240512200917.png)

## プラグインの初期化

[最初のプラグインを書く](/development/your-fisrt-plugin)の文書に従い、プロジェクトがなければ新しく作成し、すでにある場合やクローンしたソースコードがある場合はこのステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-replace-page
yarn pm enable @nocobase-sample/plugin-replace-page
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/)にアクセスすると、プラグインがインストールされ、有効化されていることを確認できます。

## 機能の実装

### 1. 要件とソースコードの分析

ログインおよび登録ページは、[Auth プラグイン](/handbook/auth/dev/api#route)によって登録されています。以下のルートが登録されています：

- Auth レイアウト
  - 名前: `auth`
  - パス: `-`
  - コンポーネント: `AuthLayout`

- ログインページ
  - 名前: `auth.signin`
  - パス: `/signin`
  - コンポーネント: `SignInPage`

- 登録ページ
  - 名前: `auth.signup`
  - パス: `/signup`
  - コンポーネント: `SignUpPage`

ここで `AuthLayout` がログインおよび登録ページ全体のレイアウトです。`AuthLayout` を置き換えることでカスタムレイアウトを実現できます。

実装方法については、元の[AuthLayout](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-auth/src/client/pages/AuthLayout.tsx)のソースコードを参考にしてください。

```tsx | pure
export function AuthLayout() {
  const { data } = useSystemSettings();

  return (
    <div
      style={{
        maxWidth: 320,
        margin: '0 auto',
        paddingTop: '20vh',
      }}
    >
      <h1>{data?.data?.title}</h1>
      <AuthenticatorsContextProvider>
        <Outlet />
      </AuthenticatorsContextProvider>
      <div
        className={css`
          position: absolute;
          bottom: 24px;
          width: 100%;
          left: 0;
          text-align: center;
        `}
      >
        <PoweredBy />
      </div>
    </div>
  );
}
```

ソースコード全体は比較的シンプルです。左右レイアウトを実現するために、左側に画像を配置し、右側にログインおよび登録のフォームを設置します。既存の `AuthLayout` をコピーして右側に配置するか、元の `AuthLayout` を直接インポートし、左側に画像を置くだけで済みます。

### 2. カスタム AuthLayout コンポーネントの実装

`packages/plugins/@nocobase-sample/plugin-replace-page/src/client/AuthLayout.tsx`を新しく作成し、内容は以下の通りです：

```tsx | pure
import React from 'react';
import { Col, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import { PoweredBy, css, useSystemSettings } from '@nocobase/client';
import { AuthenticatorsContextProvider } from '@nocobase/plugin-auth/client';

import authImg from './auth-image.jpg';

export function CustomAuthLayout() {
  const { data } = useSystemSettings();

  return (
    <Row style={{ height: '100%' }}>
      <Col xs={{ span: 0 }} md={{ span: 12 }}>
        <img src={authImg} style={{
          objectFit: 'cover',
          objectPosition: 'center',
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          display: 'block',
          verticalAlign: 'middle'
        }} />
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <div
          style={{
            maxWidth: 320,
            margin: '0 auto',
            paddingTop: '20vh',
          }}
        >
          <h1>{data?.data?.title}</h1>
          <AuthenticatorsContextProvider>
            <Outlet />
          </AuthenticatorsContextProvider>
          <div
            className={css`
              position: absolute;
              bottom: 24px;
              width: 100%;
              left: 0;
              text-align: center;
            `}
          >
            <PoweredBy />
          </div>
        </div>
      </Col>
    </Row>
  );
}
```

左側の背景画像 [auth-image.jpg](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-replace-page/src/client/auth-image.jpg) を `packages/plugins/@nocobase-sample/plugin-replace-page/src/client` ディレクトリに配置します。

これで左右レイアウトのログインページが完成しました。

### 3. `CustomAuthLayout` を使って `AuthLayout` を置き換える

次に、`packages/plugins/@nocobase-sample/plugin-replace-page/src/client/index.tsx` に `CustomAuthLayout` をインポートし、使用します。

`AuthLayout` を置き換える方法は2種類あります。一つは[ルーティングのオーバーライド](/development/client/router#常规页面扩展)、もう一つは[コンポーネントのオーバーライド](/development/client/ui-schema/rendering#登録-components-和-scopes)です。

#### ルーティングオーバーライドの方法

`AuthLayout` に対応するルート名は `auth` です。ルートをオーバーライドすることができます：

```ts
import { Plugin } from '@nocobase/client';
import { CustomAuthLayout } from './AuthLayout';

export class PluginReplacePageClient extends Plugin {
  async load() {
    this.app.router.add('auth', {
      Component: CustomAuthLayout,
    });
  }
}

export default PluginReplacePageClient;
```

ここで `router.add()` メソッドの最初の引数はルートの名前です。同じ名前を再度追加すると、既存のルートが上書きされます。

#### コンポーネントオーバーライドの方法

```ts
import { Plugin } from '@nocobase/client';
import { CustomAuthLayout } from './AuthLayout';

export class PluginChangePageClient extends Plugin {
  async load() {
    this.app.addComponents({ AuthLayout: CustomAuthLayout });
  }
}
```

この方法でのオーバーライドは、*文字列コンポーネント*として登録されたルートに対して行う必要があります。例えば[authプラグインのソースコード](https://github.com/nocobase/nocobase/blob/cff530acac45cc615291c344b4a26c7bc7f410dc/packages/plugins/%40nocobase/plugin-auth/src/client/index.tsx#L47)は以下のようになります：

```ts
this.app.router.add('auth', {
  Component: 'AuthLayout',
});

this.app.addComponents({ AuthLayout });
```

もしauthプラグインのソースコードが以下のように登録されている場合は、オーバーライドできません：

```ts
this.app.router.add('auth', {
  Component: AuthLayout,
});
```

その後、ログアウトして [http://localhost:13000/signin](http://localhost:13000/signin) にアクセスすると、ログインページのレイアウトが変更されていることを確認できます。

![20240512200917](https://static-docs.nocobase.com/20240512200917.png)

## パッケージ化と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-fisrt-plugin#构建并打包插件)のドキュメントに従って、プラグインをパッケージ化して本番環境にアップロードできます。

クローンしたソースコードの場合、最初に全体のビルドを一度実行し、プラグインの依存関係もビルドする必要があります。

```bash
yarn build
```

`create-nocobase-app`で作成したプロジェクトの場合は、そのまま実行できます：

```bash
yarn build @nocobase-sample/plugin-replace-page --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-replace-page.tar.gz`ファイルが生成されます。その後、[アップロード方法](/welcome/getting-started/plugin)に従ってインストールしてください。

