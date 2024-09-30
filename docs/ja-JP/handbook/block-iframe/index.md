# iframe ブロック

<PluginInfo name="block-iframe"></PluginInfo>

## イントロダクション
Iframe ブロックは、外部のウェブページやコンテンツを現在のページに埋め込むことを可能にします。

## インストール
内蔵プラグインのため、インストールは不要です。

## ブロックの追加
![20240408220259](https://static-docs.nocobase.com/20240408220259.png)

URL または HTML を設定して、外部アプリを埋め込みます。

![20240408220322](https://static-docs.nocobase.com/20240408220322.png)

## 文字列テンプレート

### デフォルトのテンプレートエンジン
#### Handlebars

Handlebars は JavaScript のテンプレートエンジンで、条件判断（{{#if}}）やループ（{{#each}}）をサポートし、ユーザーが使用できる多くの一般的なヘルパー（`dateFormat` など）を内蔵しています。現在、カスタムヘルパーの拡張はサポートされていません。

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

<a href="https://handlebarsjs.com/guide/builtin-helpers" target="_blank">Handlebars 構文リファレンス</a>

### よく使うヘルパー

#### `dateFormat`

日時フィールドをフォーマットします（タイムゾーン処理をサポート）。

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

配列に指定された要素が含まれているかを確認し、リストに特定の値が存在するかを判断します。

#### `gt / lt / gte / lte`

大小比較に使用します。`gt`（大きい）、`lt`（小さい）、`gte`（以上）、`lte`（以下）は一般的な論理比較です。

```javascript
{{#if (gt value1 value2)}}
  <p>Value1 は Value2 より大きいです</p>
{{/if}}

{{#if (lt value1 value2)}}
  <p>Value1 は Value2 より小さいです</p>
{{/if}}
```

#### `and`

二つの条件が共に真である場合の結果を返します。複数の条件の判断に適しています。

```javascript
{{#if (and condition1 condition2)}}
  <p>両方の条件が真です</p>
{{/if}}
```

#### `upperCase / lowerCase`

文字列を全て大文字または全て小文字に変換します。

```javascript
<p>{{lowerCase $user.nickname }}</p>
<p>{{upperCase $user.nickname }}</p>
```

その他の組み込みヘルパーについては<a href="https://www.npmjs.com/package/@budibase/handlebars-helpers#helpers" target="_blank">Handlebars ヘルパー</a>を参照してください。

## 変数の受け渡し

### HTMLは変数解析をサポートしています。

![20240603120321](https://static-docs.nocobase.com/20240603120321.png)

![20240603120629](https://static-docs.nocobase.com/20240603120629.gif)

### URLの変数サポート

![20240603142219](https://static-docs.nocobase.com/20240603142219.png)

詳細な変数については、[変数](/handbook/ui/variables)をご参照ください。

