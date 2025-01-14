
# URL

## {{encodeURI}}

URI（Uniform Resource Identifier）コンポーネントをエンコードします。特定の文字の各インスタンスを、その文字のUTF-8エンコーディングを表す1つ、2つ、3つ、または4つのエスケープシーケンスに置き換えます。

**パラメータ**

* `str` **{String}**: エンコードされていない文字列
* `returns` **{String}**: エンコードされた文字列

## {{escape}}

与えられた文字列をエスケープシーケンスに置き換えてエスケープします。URLなどで文字列を使用できるようにするのに便利です。

**パラメータ**

* `str` **{String}**
* `returns` **{String}**: エスケープされた文字列

## {{decodeURI}}

URI（Uniform Resource Identifier）コンポーネントをデコードします。

**パラメータ**

* `str` **{String}**
* `returns` **{String}**

## {{url_encode}}

[encodeURI](#encodeuri)のエイリアスです。

## {{url_decode}}

[decodeURI](#decodeuri)のエイリアスです。

## {{urlResolve}}

ベースURLとhref URLを取り、アンカータグとしてブラウザが解決するようにそれらを解決します。

**パラメータ**

* `base` **{String}**
* `href` **{String}**
* `returns` **{String}**

## {{urlParse}}

`url`文字列をオブジェクトに解析します。

**パラメータ**

* `str` **{String}**: URL文字列
* `returns` **{String}**: 文字列化されたJSONを返します

## {{stripQuerystring}}

与えられた`url`からクエリ文字列を取り除きます。

**パラメータ**

* `url` **{String}**
* `returns` **{String}**: クエリ文字列のないURL

## {{stripProtocol}}

`url`からプロトコルを取り除きます。セキュアな接続で'http'プロトコルを持つ可能性のあるメディアを表示するのに便利です。

**パラメータ**

* `str` **{String}**
* `returns` **{String}**: httpプロトコルが取り除かれたURL

**例**

```handlebars
<!-- url = 'http://foo.bar' -->
{{stripProtocol url}}
<!-- 結果: '//foo.bar' -->
```
