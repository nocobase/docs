# REST API データソース

<PluginInfo commercial="true" name="data-source-rest-api"></PluginInfo>

## 紹介

REST API ソースに接続するためのデータです。

## インストール

このプラグインは商用プラグインであり、プラグインマネージャーを通じてアップロードし、アクティブにする必要があります。

![20240323162741](https://static-docs.nocobase.com/20240323162741.png)

## REST API ソースの追加

プラグインをアクティブにした後、データソース管理の「新規追加」ドロップダウンメニューから「REST API」を選択します。

![20240721171420](https://static-docs.nocobase.com/20240721171420.png)

REST API ソースを設定します。

![20240721171507](https://static-docs.nocobase.com/20240721171507.png)

## コレクションの追加

RESTful リソースは NocoBase のコレクションです。例えば、Users リソース：

```bash
GET /users
POST /users
GET /users/1
PUT /users/1
DELETE /users/1
```

これは NocoBase API における設定として次のようにマッピングされます。

```bash
GET /users:list
POST /users:create
POST /users:get?filterByTk=1
POST /users:update?filterByTk=1
POST /users:destroy?filterByTk=1
```

完全な NocoBase API 設計規範については API ドキュメントを参照してください。

![20240716213344](https://static-docs.nocobase.com/20240716213344.png)

「NocoBase API - Core」セクションを確認してください。

![20240716213258](https://static-docs.nocobase.com/20240716213258.png)

REST API データソースのコレクション設定は以下の通りです。

### リスト

リソースリストを表示するためのインターフェースマッピングを設定します。

![20240716211351](https://static-docs.nocobase.com/20240716211351.png)

### Get

リソースの詳細を表示するためのインターフェースマッピングを設定します。

![20240716211532](https://static-docs.nocobase.com/20240716211532.png)

### Create

リソースを作成するためのインターフェースマッピングを設定します。

![20240716211634](https://static-docs.nocobase.com/20240716211634.png)

### Update

リソースを更新するためのインターフェースマッピングを設定します。

![20240716211733](https://static-docs.nocobase.com/20240716211733.png)

### Destroy

リソースを削除するためのインターフェースマッピングを設定します。

![20240716211808](https://static-docs.nocobase.com/20240716211808.png)

## API デバッグ

「Try it out」をクリックしてデバッグを行います。

![20240716212722](https://static-docs.nocobase.com/20240716212722.png)

デバッグフローの説明

![20250418085020](https://static-docs.nocobase.com/20250418085020.png)

## 変数

REST API データソースは、インターフェース接続のために 3 種類の変数を提供します。

- データソースカスタム変数
- NocoBase リクエスト
- サードパーティレスポンス

### データソースカスタム変数

![20240716221937](https://static-docs.nocobase.com/20240716221937.png)

![20240716221858](https://static-docs.nocobase.com/20240716221858.png)

### NocoBase リクエスト

- **パラメータ**：URL 検索パラメータ（Search Params）。各インターフェースのパラメータは異なります。
- **ヘッダー**：リクエストボディ。主に NocoBase のカスタム X- 情報を提供します。
- **ボディ**：リクエストのボディです。
- **トークン**：現在の NocoBase リクエストの API トークンです。

![20240716222042](https://static-docs.nocobase.com/20240716222042.png)

### サードパーティの応答

現在提供されているのは応答のボディのみです。

![20240716222303](https://static-docs.nocobase.com/20240716222303.png)

各インターフェースで利用可能な変数は以下の通りです：

### リスト

| パラメータ | 説明 |
| -- | -- |
| request.params.page | ページングパラメータ |
| request.params.pageSize | 1ページあたりの表示数量 |
| request.params.filter | 条件フィルタリング |
| request.params.sort | ソート |
| request.params.appends | 必要に応じてロードするフィールド（一般的にリレーションフィールドのロードに使用） |
| request.params.fields | インターフェースが出力するフィールド（ホワイトリスト） |
| request.params.except | 除外するフィールド（ブラックリスト） |

### 取得

| パラメータ | 説明 |
| -- | -- |
| request.params.filterByTk | フィルタリング用のキー |
| request.params.filter | 条件フィルタリング |
| request.params.appends | 必要に応じてロードするフィールド（一般的にリレーションフィールドのロードに使用） |
| request.params.fields | インターフェースが出力するフィールド（ホワイトリスト） |
| request.params.except | 除外するフィールド（ブラックリスト） |

### 作成

| パラメータ | 説明 |
| -- | -- |
| request.params.whiteList | ホワイトリスト |
| request.params.blacklist | ブラックリスト |
| request.body | 作成された初期データ |

### 更新

| パラメータ | 説明 |
| -- | -- |
| request.params.filterByTk | フィルタリング用のキー |
| request.params.filter | 条件フィルタリング |
| request.params.whiteList | ホワイトリスト |
| request.params.blacklist | ブラックリスト |
| request.body | 更新されたデータ |

### 削除

| パラメータ | 説明 |
| -- | -- |
| request.params.filterByTk | フィルタリング用のキー |
| request.params.filter | 条件フィルタリング |

## フィールドの設定

適合するリソースのCRUDインターフェースのデータから、フィールドメタデータ（Fields）をコレクションのフィールドとして抽出します。

![20250418085048](https://static-docs.nocobase.com/20250418085048.png)

フィールドメタデータの抽出

![20240716224010](https://static-docs.nocobase.com/20240716224010.png)

フィールドとプレビュー

![20240716224403](https://static-docs.nocobase.com/20240716224403.png)

フィールドの編集（他のデータソースと同様の手法で）

![20240716224704](https://static-docs.nocobase.com/20240716224704.png)

## REST API データソースブロックの追加

コレクションの設定が完了したら、インターフェースにブロックを追加します。

![20240716225120](https://static-docs.nocobase.com/20240716225120.png)

