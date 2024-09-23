# v0.10：2023-06-20

## 第2四半期の新機能

- 関係フィールドコンポーネントの改善、複数のコンポーネントの切り替えをサポート
  - ドロップダウンセレクター
  - データセレクター
  - サブフォーム/サブ詳細
  - サブテーブル
  - ファイルマネージャー
  - タイトル（閲覧モードのみ）
- 関係データのクイック作成、2つのクイック作成モードをサポート
  - ドロップダウンメニューで追加、タイトルフィールドに基づいて新しいレコードを迅速に作成
  - ポップアップで追加、複雑な追加フォームを設定可能
- コピー操作、2つのコピー方法をサポート
  - 直接コピー
  - フォームにコピーして続行
- フォームデータテンプレートの追加
- データ範囲のフィルタリングに変数をサポート
- リストブロックの追加
- グリッドカードブロックの追加
- モバイルプラグインの追加
- ユーザー認証プラグイン、異なるログイン方法をサポート
  - Email/パスワード
  - SMS
  - OIDC
  - SAML
- ワークフローに新しいノードを追加
  - 人工ノードのアップグレード、既存のデータテーブルからの追加と編集をサポート
  - ループノードの追加
  - 集約クエリノードの追加
- ファイルマネージャー
  - ファイルテーブルテンプレートを提供
  - ファイルマネージャーコンポーネントを提供

## アプリケーションのアップグレード

### Docker インストールのアップグレード

変更はありません。アップグレードの参考に [Docker イメージアップグレードガイド](/welcome/getting-started/upgrading/docker-compose) をご覧ください。

### ソースコードインストールのアップグレード

v0.10では依存関係に重大なアップグレードが行われました。ソースコードをアップグレードする際、エラーを防ぐために以下のディレクトリを削除してからアップグレードしてください。

```bash
# .umi 関連のキャッシュを削除
yarn rimraf -rf "./**/{.umi,.umi-production}"
# コンパイルファイルを削除
yarn rimraf -rf "packages/*/*/{lib,esm,es,dist,node_modules}"
# 依存関係を削除
yarn rimraf -rf node_modules
```

さらなる詳細は [Git ソースコードアップグレードガイド](/welcome/getting-started/upgrading/git-clone) をご覧ください。

### create-nocobase-app インストールのアップグレード

`yarn create` を使用して新しいバージョンを再ダウンロードし、.env 設定を更新することをお勧めします。さらなる詳細は [メジャーバージョンアップグレードガイド](/welcome/getting-started/upgrading/create-nocobase-app#大版本升级) をご覧ください。

## 近い将来の廃止と互換性のない変更

### サブテーブルフィールドコンポーネント

新しいバージョンとの互換性がなく、ブロックフィールドは削除し、再構成する必要があります（UIの再構成のみが必要です）。

### 添付ファイルアップロードインターフェースの変更

組み込みの attachments テーブルに加え、ユーザーはカスタムファイルテーブルも作成可能です。添付ファイルのアップロードインターフェースは `/api/attachments:upload` から `/api/<file-collection>:create` に変更されました。upload は廃止されますが、v0.10 との互換性は維持され、次の主要バージョンで削除される予定です。

### ログイン、登録インターフェースの変更

nocobase コアは、より強力な [auth モジュール](https://github.com/nocobase/nocobase/tree/main/packages/plugins/auth) を提供します。ユーザーのログイン、登録、検証、ログアウトインターフェースは以下のように変更されます：

```bash
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

注：上記の users インターフェースは廃止され、v0.10 との互換性は維持されますが、次の主要バージョンで削除される予定です。

### 日付フィールドフィルタの調整

以前のデータ範囲に日付関連のフィルタが設定されている場合は、削除して再構成する必要があります。

## サードパーティプラグインアップグレードガイド

### 依存関係のアップグレード

v0.10 の依存関係のアップグレードは、主に以下を含みます：

- `react` を v18 にアップグレード
- `react-dom` を v18 にアップグレード
- `react-router` を v6.11 にアップグレード
- `umi` を v4 にアップグレード
- `dumi` を v2 にアップグレード

プラグインの `package.json` に関連する依存関係を最新版に変更する必要があります。例：

```diff
{
  "devDependencies": {
+   "react": "^18",
+   "react-dom": "^18",
+   "react-router-dom": "^6.11.2",
-   "react": "^17",
-   "react-dom": "^17",
-   "react-router-dom": "^5",
  }
}
```

### コードの修正

react-routerのアップグレードに伴い、コードレベルでの変更が必要です。主な変更点は以下の通りです。

#### Layout コンポーネント

Layout コンポーネントは `props.children` の代わりに `<Outlet />` を使用する必要があります。

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
-      { props.children }
+      <Outlet />
    </div>
  );
}
```

`React.cloneElement` を使用してレンダリングされたルートコンポーネントの改造例：

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function RouteComponent(props) {
  return (
    <div>
-      { React.cloneElement(props.children, { someProp: 'p1' }) }
+      <Outlet context={{ someProp: 'p1' }} />
    </div>
  );
}
```

コンポーネントは `useOutletContext` から値を取得するように変更します。

```diff
import React from 'react';
+ import { useOutletContext } from 'react-router-dom';

- export function Comp(props){
+ export function Comp() {
+   const props = useOutletContext();
  return props.someProp;
}
```

#### Redirect

`<Redirect>` は `<Navigate replace />` に変換します。

```diff
- <Redirect to="about" />
+ <Navigate to="about" replace />
```

#### useHistory

`useNavigate` は `useHistory` の代わりとして使用します。

```diff
- import { useHistory } from 'react-router-dom';
+ import { useNavigate } from 'react-router-dom';

- const history = useHistory();
+ const navigate = useNavigate();

- history.push('/about');
+ navigate('/about');

- history.replace('/about');
+ navigate('/about', { replace: true });
```

#### useLocation

`useLocation<type>()` は `useLocation` に変更されます。

```diff
- const location = useLocation<type>();
+ const location = useLocation();
```

`const { query } = useLocation()` は `useSearchParams()` に変更されます。

```diff
- const location = useLocation();
- const query = location.query;
- const name = query.name;
+ const [searchParams, setSearchParams] = useSearchParams();
+ searchParams.get('name');
```

#### path

以下の `path` 形式がサポートされています。

```
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
```

以下の形式はサポートされなくなります。

```
/tweets/:id(\d+)
/files/*/cat.jpg
/files-*
```

さらなる変更およびAPIの変更については、[react-router@6](https://reactrouter.com/en/main/upgrading/v5)をご確認ください。

