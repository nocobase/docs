# HTTPリクエスト

<PluginInfo name="workflow-request" link="/handbook/workflow-request"></PluginInfo>

他のWebシステムと相互作用する必要がある場合、HTTPリクエストノードを使用できます。このノードは、実行時に設定に従って指定されたアドレスにHTTPリクエストを送信し、JSONまたは`application/x-www-form-urlencoded`形式のデータを添えて外部システムとのデータ交換を行います。

Postmanのようなリクエスト送信ツールに慣れている方なら、HTTPリクエストノードの使い方をすぐに習得できるでしょう。これらのツールとは異なり、HTTPリクエストノードの各パラメータは現在のプロセスのコンテキスト変数を使用でき、現在のシステムのビジネス処理と有機的に結びつけることが可能です。

## インストール

このノードは組み込みプラグインであり、インストールは不要です。

## 使用マニュアル

### ノードの作成

ワークフロー設定画面で、プロセス内のプラス（“+”）ボタンをクリックし、「HTTPリクエスト」ノードを追加します：

![HTTPリクエスト_追加](https://static-docs.nocobase.com/46f2a6fc3f6869c80f8fbd362a54e644.png)

### ノード設定

![HTTPリクエストノード_ノード設定](https://static-docs.nocobase.com/2fcb29af66b892fa704add52e2974a52.png)

#### リクエストメソッド

選択可能なHTTPリクエストメソッド：`GET`、`POST`、`PUT`、`PATCH`、および`DELETE`です。

#### リクエストアドレス

HTTPサービスのURLで、プロトコル部分（`http://`または`https://`）を含む必要があります。`https://`の使用をお勧めします。

#### リクエストデータ形式

リクエストヘッダーの `Content-Type` に対応する形式です。対応フォーマットは「[リクエストボディ](#リクエスト体)」のセクションを参照してください。

#### リクエストヘッダー設定

リクエストヘッダー部分のキーと値のペアを設定します。関連する値はプロセスコンテキストの変数を使用できます。

:::info{title=ヒント}
`Content-Type`リクエストヘッダーは、リクエストデータ形式で設定されているため、手動での記入は不要で、上書きは無効です。
:::

#### リクエストパラメータ

リクエストクエリ部分のキーと値のペアは、プロセスコンテキストの変数を使用して関連する値を取得できます。
#### リクエストボディ

リクエストの Body 部分は、`Content-Type` の選択に応じて異なる形式をサポートします。

##### `application/json`

標準的な JSON 形式のテキストをサポートしており、テキスト編集ボックスの右上にある変数ボタンから、フローのコンテキスト変数を挿入できます。

:::info{title=ヒント}
変数は JSON の文字列内で使用する必要があります。例：`{ "a": "{{$context.data.a}}" }`。
:::

##### `application/x-www-form-urlencoded`

キーと値のペア形式をサポートしており、値にはフローコンテキストの変数を使用できます。変数を含む場合、それは文字列テンプレートとして解釈され、最終的な文字列として連結されます。

##### `application/xml`

標準的な XML 形式のテキストをサポートしており、テキスト編集ボックスの右上にある変数ボタンから、フローのコンテキスト変数を挿入できます。

##### `multipart/form-data` <Badge>v1.8.0+</Badge>

フォームデータのキーと値のペアをサポートしています。データタイプに「ファイルオブジェクト」を選択した場合、ファイルのアップロードが可能です。ファイルは、コンテキスト内にすでに存在するファイルオブジェクト（ファイルテーブルのクエリ結果や、関連するファイルテーブルのリレーションデータ）を変数として指定する必要があります。

:::info{title=ヒント}
ファイルを指定する場合、変数が単一のファイルオブジェクトである必要があります。複数ファイル（多対多リレーション）の場合、リレーションフィールドの値は配列になります。
:::

#### タイムアウト設定

リクエストが長時間応答しない場合、タイムアウト設定により、そのリクエストの実行をキャンセルします。リクエストがタイムアウトすると、現在のプロセスは失敗状態で早期に終了します。

#### 失敗を無視

リクエストノードは、標準HTTPステータスコードの`200`から`299`（含む）を成功状態と見なします。それ以外は失敗と見なされます。「失敗したリクエストを無視してワークフローを続行する」オプションが選択されている場合、リクエストが失敗した後でも後続の他のプロセスノードは実行され続けます。

### 応答結果の使用

HTTPリクエストの応答結果は、[JSON解析](./plugins/json-query.md)ノードを使用して解析し、後続のノードで使用できます。

`v1.0.0-alpha.16`バージョン以降、リクエストノードの応答結果には3つの部分があり、それぞれを変数として使用できます：

* 応答ステータスコード
* 応答ヘッダー
* 応答データ

![HTTPリクエストノード_応答結果の使用](https://static-docs.nocobase.com/20240529110610.png)

応答ステータスコードは通常、数字形式の標準HTTPステータスコードで、`200`、`403`など（具体的にはサービス提供者に依存します）。

応答ヘッダーはJSON形式で、JSON形式の応答データが含まれており、JSONノードで解析して使用する必要があります。

### 例

例えば、リクエストノードを使用してクラウドプラットフォームに通知SMSを送信することができます。阿里云のSMS送信インターフェースを例に配置は以下の通りです（関連パラメータは文書を参照して適合させる必要があります）：

![HTTPリクエストノード_ノード設定](https://static-docs.nocobase.com/20240515124004.png)

ワークフローがこのノードを実行すると、設定内容に基づいて阿里云のSMSインターフェースが呼び出され、リクエストが成功した場合、SMSクラウドサービスを介してSMSが送信されます。

