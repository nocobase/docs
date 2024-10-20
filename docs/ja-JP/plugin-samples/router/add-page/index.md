# ページの追加

## シナリオ説明

いくつかのページを追加し、個性を表現した表示を行います。

## 例の説明

この例では、次の4つのページを追加します：

- `/about`：システムに関する情報を表示する「About」ページで、ログインせずにアクセスできます。
- `/admin/data-view`：データ表示ページで、ログイン後にアクセス可能です。
- `/admin/material-manage`：画像や動画を管理する素材管理センターで、親ルートページです。
  - `/admin/material-manage/image`：画像管理
  - `/admin/material-manage/video`：動画管理

内容の過剰な開発は行わず、ページの追加方法を示すためのデモです。

この文書の完全なサンプルコードは [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-page) で確認できます。

## プラグインの初期化

[最初のプラグインの作成](/development/your-first-plugin) ドキュメントに従い、プロジェクトがない場合は新しく作成します。すでにプロジェクトがある場合や、ソースコードをクローンした場合はこのステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-add-page
yarn pm enable @nocobase-sample/plugin-add-page
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) にアクセスすると、プラグインがインストールされ、有効化されていることが確認できます。

## 機能の実装

### 1. `/about` ページの追加

プラグイン開発チュートリアルの [ページルーティングと拡張](/development/client/router) に従い、プラグインの `packages/plugins/@nocobase-sample/plugin-add-page/src/client/index.tsx` を修正します：

```ts
import React, { useEffect } from 'react';
import { Plugin, useDocumentTitle } from '@nocobase/client';

const AboutPage = () => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle('About');
  }, [])

  return <div>About Page</div>;
}

export class PluginAddPageClient extends Plugin {
  async load() {
    this.app.router.add('about', {
      path: '/about',
      Component: AboutPage,
    })
  }
}

export default PluginAddPageClient;
```

ここで `router.add()` の第1引数はページの名前で、CRUDや階層構造のために使用されます。第2引数はページの設定で、`path` はページのパス、`Component` はページのコンポーネントです。

`useDocumentTitle()` はページのタイトルを変更するために使用されます。

その後、[http://localhost:13000/about](http://localhost:13000/about) にアクセスすると、ページに `About Page` が表示されていることが確認できます。

![20240512200508](https://static-docs.nocobase.com/20240512200508.png)

### 2. `/admin/data-view` ページの追加

[既存のページルーティング](/development/client/router#existing-page-routes) ドキュメントによれば、`/admin/*` に対応する `name` は `admin` です。その下に新しいページを追加する場合は、`admin.` プレフィックスを使用します。たとえば `admin.dataView` です。

```tsx | pure
// ...
const DataViewPage = () => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle('DataView');
  }, [])

  return <div>DataView</div>
};

export class PluginAddPageClient extends Plugin {
  async load() {
    this.app.router.add('admin.dataView', {
      path: '/admin/data-view',
      Component: DataViewPage,
    })
  }
}

export default PluginAddPageClient;
```

その後、[http://localhost:13000/admin/data-view](http://localhost:13000/admin/data-view) にアクセスすると、ページに `DataView` が表示されていることが確認でき、ログアウトした後にアクセスするとログインページにリダイレクトされます。

![20240512200555](https://static-docs.nocobase.com/20240512200555.png)

### 3. `/admin/material-manage` およびその子ページの追加

新しく `packages/plugins/@nocobase-sample/plugin-add-page/src/client/MaterialPage.tsx` ファイルを作成し、その内容は以下の通りです：

```tsx | pure
import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDocumentTitle } from '@nocobase/client';

export const MaterialPage = () => {
  return <div>
    <h1>マテリアルページ</h1>
    <ul>
      <li>
        <Link to="video">ビデオ</Link>
      </li>
      <li>
        <Link to="img">画像</Link>
      </li>
    </ul>
    <Outlet />
  </div>
}

export const MaterialVideo = () => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle('マテリアルビデオ');
  }, [])

  return <div>マテリアルビデオ</div>
}
export const MaterialImg = () => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle('マテリアル画像');
  }, [])

  return <div>マテリアル画像</div>;
}
```

その後、`packages/plugins/@nocobase-sample/plugin-add-page/src/client/index.tsx` にインポートして使用します：

```ts
// ...
import { MaterialImg, MaterialPage, MaterialVideo } from './MaterialPage';

export class PluginAddPageClient extends Plugin {
  async load() {
    this.app.router.add('admin.material', {
      path: '/admin/material',
      Component: MaterialPage,
    })

    this.app.router.add('admin.material.video', {
      path: '/admin/material/video',
      Component: MaterialVideo,
    })

    this.app.router.add('admin.material.img', {
      path: '/admin/material/img',
      Component: MaterialImg,
    })
  }
}
```

`MaterialPage` が親ページとしてカスタムレイアウトを必要としない場合、`Component` プロパティは省略できます。

```ts
this.app.router.add('admin.material', {
  path: '/admin/material',
})
```

次に、[http://localhost:13000/admin/material](http://localhost:13000/admin/material) にアクセスすると、ページ上に `マテリアルページ` が表示され、`ビデオ` および `画像` リンクをクリックすると、それぞれのページに切り替わります。

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/3.mp4" type="video/mp4">
</video>

## パッケージ化と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-first-plugin#building-and-packaging-plugins) に従って、プラグインをパッケージ化し、本番環境にアップロードします。

クローンしたソースコードの場合、最初にフルビルドを実行し、プラグインの依存関係も構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合、次のコマンドを直接実行できます：

```bash
yarn build @nocobase-sample/plugin-add-page --tar
```

これで `storage/tar/@nocobase-sample/plugin-add-page.tar.gz` ファイルが生成され、その後[アップロード方法](/welcome/getting-started/plugin)でインストールできます。

