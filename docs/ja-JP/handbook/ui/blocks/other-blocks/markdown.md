# Markdown ブロック

## 紹介

Markdown ブロックはデータソースにバインドせずに使用でき、Markdown 構文を用いてテキスト内容を定義します。フォーマットされたテキスト内容を表示するのに利用できます。

## ブロックの追加

ページやポップアップウィンドウに Markdown ブロックを追加できます。

![20240612205004](https://static-docs.nocobase.com/20240612205004.png)

また、フォームブロックや詳細ブロック内にインラインの Markdown ブロックを追加することも可能です。

![20240612205215](https://static-docs.nocobase.com/20240612205215.png)

## 文字列テンプレート

![20240817175031](https://static-docs.nocobase.com/20240817175031.png)

## Handlebars

Handlebars は JavaScript テンプレートエンジンで、条件判断（{{#if}}）やループ（{{#each}}）をサポートしています。ユーザーが利用できる多くの一般的なヘルパー（`dateFormat` など）が組み込まれており、現在のところカスタムヘルパーの拡張はサポートされていません。

![20240817175355](https://static-docs.nocobase.com/20240817175355.png)

![20240817175501](https://static-docs.nocobase.com/20240817175501.png)

```javascript
<h3>current role is : {{$nRole}}</h3>
 role list is
<ul>
 {{#each $user.roles}}
   <li>{{this.name}}</li>
  {{/each}}
 </ul>
```

<a href="https://handlebarsjs.com/guide/builtin-helpers" target="_blank">Handlebars 構文リファレンス</a>

### 一般的なヘルパー

より高度な機能はヘルパーを通して利用可能であり、以下はビルトインされた一般的なヘルパーのリストです。より多くの組み込みヘルパーは、<a href="https://www.npmjs.com/package/@budibase/handlebars-helpers#helpers" target="_blank">Handlebars ヘルパー</a>に参考してください。

#### `dateFormat`

日時フィールドをフォーマットします（タイムゾーン処理をサポートしています）。 

![20240914125432](https://static-docs.nocobase.com/20240914125432.png)

```javascript
{{$nDate.now }}
日付フォーマット: {{dateFormat $nDate.now "YYYY-MM-DD HH:mm:ss"}}
日付フォーマット: {{dateFormat $nDate.now "YYYY-MM-DD HH:mm:ss" "Asia/Tokyo"}}
日付フォーマット: {{dateFormat $nDate.now "YYYY-MM-DD HH:mm:ss" "UTC"}}
```

#### `isEmpty`

指定された配列、オブジェクト、または文字列が空であるかどうかを確認します。

![20240914132524](https://static-docs.nocobase.com/20240914132524.png)

```javascript
{{#isEmpty someArray}}
  <p>配列は空です</p>
{{else}}
  <p>配列は空ではありません</p>
{{/isEmpty}}
```

#### `contains`

配列に指定された要素が含まれているかを確認し、特定の値がリストに存在するかを判断します。

#### `gt / lt / gte / lte`

大小を比較するために使用されます。`gt`（大きい）、`lt`（小さい）、`gte`（以上）、`lte`（以下）は一般的な論理比較です。

```javascript
{{#if (gt value1 value2)}}
  <p>Value1はValue2より大きいです</p>
{{/if}}

{{#if (lt value1 value2)}}
  <p>Value1はValue2より小さいです</p>
{{/if}}
```

#### `and`

二つの条件が真である場合の結果を返し、複数条件の判断に適しています。

```javascript
{{#if (and condition1 condition2)}}
  <p>両方の条件が真です</p>
{{/if}}
```

#### `upperCase / lowerCase`

文字列をすべて大文字またはすべて小文字に変換します。

```javascript
<p>{{lowerCase $user.nickname }}</p>
<p>{{upperCase $user.nickname }}</p>
```

## 変数の使用

Markdown テキスト内でも変数の使用がサポートされています。

![20240612205857](https://static-docs.nocobase.com/20240612205857.png)

ブロック内のインライン Markdown でも変数がサポートされています。

![20240612210333](https://static-docs.nocobase.com/20240612210333.png)

### 補足説明

変数に関連するデータを使用する場合、異なるテンプレートが異なる構文をサポートしているため、配列型データ変数を使用する際には異なる書き方を区別する必要があります。例えば、ユーザー/役割（一対多）。

文字列テンプレートを使用する場合:

![20240909154424](https://static-docs.nocobase.com/20240909154424.png)

文字列テンプレートでは配列が自動的に「,」で区切られて表示されます。

![20240909154449](https://static-docs.nocobase.com/20240909154449.png)

Handlebars テンプレートを使用する場合:

![20240909155651](https://static-docs.nocobase.com/20240909155651.png)

配列を繰り返すには `#each` を使用します。

![20240909155720](https://static-docs.nocobase.com/20240909155720.png)

より多くの変数の紹介については [設定画面 / 変数](/handbook/ui/variables) の章を参照してください。

## Localization
> Supported in version 1.7.6 and later.

Markdown content now supports localization. You can use the `{{t 'xxx'}}` syntax to insert multilingual text (make sure the **Localization** plugin is enabled), and configure the corresponding translations in the Localization Management panel.

![20250707154720](https://static-docs.nocobase.com/20250707154720.png)

Translations can be added and managed in the Localization panel. After configuring, don't forget to publish the changes.

![20250707154933](https://static-docs.nocobase.com/20250707154933.png)

![20250707155049](https://static-docs.nocobase.com/20250707155049.png)

![20250707155236](https://static-docs.nocobase.com/20250707155236.gif)

## QRコード

Markdown では QR コードの設定がサポートされており、変数と組み合わせて使用できます。

```html
<qr-code value="https://www.nocobase.com/" type="svg"></qr-code>
```

