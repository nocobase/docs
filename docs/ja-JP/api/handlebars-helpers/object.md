# オブジェクト

## {{extend}}

他のオブジェクトのプロパティでコンテキストを拡張します。
コンテキストの変更を避けるために、浅いマージが実行されます。

**パラメータ**

* `objects` **{Object}**: 拡張する1つ以上のオブジェクト。
* `returns` **{Object}**

## {{forIn}}

オブジェクトのプロパティを反復処理するブロックヘルパーで、
各キーと値をコンテキストに公開します。

**パラメータ**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

## {{forOwn}}

オブジェクトの**独自**プロパティを反復処理するブロックヘルパーで、
各キーと値をコンテキストに公開します。

**パラメータ**

* `obj` **{Object}**: 反復処理するオブジェクト。
* `options` **{Object}**
* `returns` **{String}**

## {{toPath}}

引数を受け取り、それらが文字列または数値の場合、ドット区切りのオブジェクトプロパティパスに変換します。

**パラメータ**

* `prop` **{String|Number}**: 組み立てるプロパティセグメント（複数可）。
* `returns` **{String}**

## {{get}}

プロパティパス（`a.b.c`）を使用して、コンテキストから値またはネストされた値を取得します。
通常のヘルパーまたはブロックヘルパーとして機能します。

**パラメータ**

* `prop` **{String}**: 取得するプロパティ。ネストされたプロパティの場合はドット記法を使用できます。
* `context` **{Object}**: コンテキストオブジェクト
* `options` **{Object}**: ブロックヘルパーとして使用する場合のHandlebarsオプションオブジェクト。
* `returns` **{String}**

## {{getObject}}

プロパティパス（`a.b.c`）を使用して、コンテキストからオブジェクトを取得します。
`get`ヘルパーとは異なり、このヘルパーは実際のオブジェクトを返し、
指定されたプロパティキーを含みます。また、このヘルパーはブロックヘルパーとして機能しません。

**パラメータ**

* `prop` **{String}**: 取得するプロパティ。ネストされたプロパティの場合はドット記法を使用できます。
* `context` **{Object}**: コンテキストオブジェクト
* `returns` **{String}**

## {{hasOwn}}

`key`が指定された`context`オブジェクトの独自の列挙可能なプロパティである場合、trueを返します。

**パラメータ**

* `key` **{String}**
* `context` **{Object}**: コンテキストオブジェクト。
* `returns` **{Boolean}**

**例**

```handlebars
{{hasOwn context key}}
```

## {{isObject}}

`value`がオブジェクトである場合、trueを返します。

**パラメータ**

* `value` **{String}**
* `returns` **{Boolean}**

**例**

```handlebars
{{isObject "foo"}}
//=> false
```

## {{JSONparse}}

`JSON.parse`を使用して、指定された文字列を解析します。

**パラメータ**

* `string` **{String}**: 解析する文字列

**例**

```handlebars
<!-- string: '{"foo": "bar"}' -->
{{JSONparse string}}
<!-- 結果: { foo: 'bar' } -->
```

## {{JSONstringify}}

`JSON.stringify`を使用してオブジェクトを文字列化します。

**パラメータ**

* `obj` **{Object}**: 文字列化するオブジェクト
* `returns` **{String}**

**例**

```handlebars
<!-- object: { foo: 'bar' } -->
{{JSONstringify object}}
<!-- 結果: '{"foo": "bar"}' -->
```

## {{merge}}

指定された`objects`のプロパティをコンテキストオブジェクトと深くマージします。

**パラメータ**

* `object` **{Object}**: ターゲットオブジェクト。浅いクローンを作成する場合は空のオブジェクトを渡します。
* `objects` **{Object}**
* `returns` **{Object}**

## {{pick}}

コンテキストオブジェクトからプロパティを選択します。

**パラメータ**

* `properties` **{Array|String}**: 選択する1つ以上のプロパティ。
* `context` **{Object}**
* `options` **{Object}**: Handlebarsオプションオブジェクト。
* `returns` **{Object}**: 選択された値を持つオブジェクトを返します。ブロックヘルパーとして使用する場合、値は内部ブロックにコンテキストとして渡されます。値が見つからない場合、コンテキストは逆ブロックに渡されます。