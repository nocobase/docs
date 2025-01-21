# 配列

## {{after}}

指定されたインデックスの後にある配列内のすべてのアイテムを返します。[before](#before)の反対です。

**パラメータ**

* `array` **{Array}**: データシート
* `n` **{Number}**: 開始インデックス（除外するアイテムの数）
* `returns` **{Array}**: `n` 個のアイテムを除外した配列

**例**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{after array 1}}
<!-- 結果: '["c"]' -->
```

## {{arrayify}}

与えられた`value`を配列にキャストします。

**パラメータ**

* `value` **{any}**
* `returns` **{Array}**

**例**

```handlebars
{{arrayify "foo"}}
<!-- 結果: [ "foo" ] -->
```

## {{before}}

指定された数の前にあるコレクション内のすべてのアイテムを返します。[after](#after)の反対です。

**パラメータ**

* `array` **{Array}**
* `n` **{Number}**
* `returns` **{Array}**: 指定された数の後のアイテムを除外した配列

**例**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{before array 2}}
<!-- 結果: '["a", "b"]' -->
```

## {{eachIndex}}

**パラメータ**

* `array` **{Array}**
* `options` **{Object}**
* `returns` **{String}**

**例**

```handlebars
<!-- array: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] -->
{{#eachIndex array}}
  {{item}} is {{index}}
{{/eachIndex}}
```

## {{filter}}

与えられた配列をフィルタリングし、`true`と評価される値に対してブロックをレンダリングするブロックヘルパーです。それ以外の場合は逆ブロックが返されます。

**パラメータ**

* `array` **{Array}**
* `value` **{any}**
* `options` **{Object}**
* `returns` **{String}**

**例**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{#filter array "foo"}}AAA{{else}}BBB{{/filter}}
<!-- 結果: 'BBB' -->
```

## {{first}}

配列の最初のアイテム、または最初の`n`個のアイテムを返します。

**パラメータ**

* `array` **{Array}**
* `n` **{Number}**: 返すアイテムの数、`0`から開始
* `returns` **{Array}**

**例**

```handlebars
{{first "['a', 'b', 'c', 'd', 'e']" 2}}
<!-- 結果: '["a", "b"]' -->
```

## {{forEach}}

配列内の各アイテムを反復処理し、現在の配列アイテムを内部ブロックのコンテキストとして公開します。現在の配列アイテムに加えて、ヘルパーは内部ブロックに以下の変数を公開します：

* `index`
* `total`
* `isFirst`
* `isLast`
また、`@index`はプライベート変数として公開され、追加のプライベート変数はハッシュ引数として定義される場合があります。

**パラメータ**

* `array` **{Array}**
* `returns` **{String}**

**例**

```handlebars
<!-- accounts = [
{'name': 'John', 'email': 'john@example.com'},
{'name': 'Malcolm', 'email': 'malcolm@example.com'},
{'name': 'David', 'email': 'david@example.com'}
] -->

{{#forEach accounts}}
  <a href="mailto:{{ email }}" title="Send an email to {{ name }}">
    {{ name }}
  </a>{{#unless isLast}}, {{/unless}}
{{/forEach}}
```

## {{inArray}}

配列に指定された`value`がある場合にブロックをレンダリングするブロックヘルパーです。オプションで、配列に指定された値がない場合にレンダリングする逆ブロックを指定できます。

**パラメータ**

* `array` **{Array}**
* `value` **{any}**
* `options` **{Object}**
* `returns` **{String}**

**例**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{#inArray array "d"}}
  foo
{{else}}
  bar
{{/inArray}}
<!-- 結果: 'bar' -->
```

## {{isArray}}

`value`がes5配列の場合にtrueを返します。

**パラメータ**

* `value` **{any}**: テストする値
* `returns` **{Boolean}**

**例**

```handlebars
{{isArray "abc"}}
<!-- 結果: false -->

<!-- array: [1, 2, 3] -->
{{isArray array}}
<!-- 結果: true -->
```

## {{itemAt}}

`array`内のインデックス`idx`にあるアイテムを返します。

**パラメータ**

* `array` **{Array}**
* `idx` **{Number}**
* `returns` **{any}** `value`

**例**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{itemAt array 1}}
<!-- 結果: 'b' -->
```

## {{join}}

配列のすべての要素を文字列に結合します。オプションで指定されたセパレータを使用します。

**パラメータ**

* `array` **{Array}**
* `separator` **{String}**: 使用するセパレータ。デフォルトは`,`です。
* `returns` **{String}**

**例**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{join array}}
<!-- 結果: 'a, b, c' -->

{{join array '-'}}
<!-- 結果: 'a-b-c' -->
```

## {{equalsLength}}

与えられた`value`の長さが指定された`length`と等しい場合にtrueを返します。ブロックまたはインラインヘルパーとして使用できます。

**パラメータ**

* `value` **{Array|String}**
* `length` **{Number}**
* `options` **{Object}**
* `returns` **{String}**

## {{last}}

配列または文字列の最後のアイテム、または最後の`n`個のアイテムを返します。[first](#first)の反対です。

**パラメータ**

* `value` **{Array|String}**: 配列または文字列
* `n` **{Number}**: 配列の末尾から返すアイテムの数
* `returns` **{Array}**

**例**

```handlebars
<!-- var value = ['a', 'b', 'c', 'd', 'e'] -->

{{last value}}
<!-- 結果: ['e'] -->

{{last value 2}}
<!-- 結果: ['d', 'e'] -->

{{last value 3}}
<!-- 結果: ['c', 'd', 'e'] -->
```

## {{length}}

与えられた文字列または配列の長さを返します。

**パラメータ**

* `value` **{Array|Object|String}**
* `returns` **{Number}**: 値の長さ

**例**

```handlebars
{{length '["a", "b", "c"]'}}
<!-- 結果: 3 -->

<!-- 結果: myArray = ['a', 'b', 'c', 'd', 'e']; -->
{{length myArray}}
<!-- 結果: 5 -->

<!-- 結果: myObject = {'a': 'a', 'b': 'b'}; -->
{{length myObject}}
<!-- 結果: 2 -->
```

## {{lengthEqual}}

[equalsLength](#equalsLength)のエイリアス

## {{map}}

与えられた`array`の各要素に対して`function`を呼び出して作成された新しい配列を返します。

**パラメータ**

* `array` **{Array}**
* `fn` **{Function}**
* `returns` **{String}**

**例**

```handlebars
<!-- array: ['a', 'b', 'c'], and "double" is a
fictitious function that duplicates letters -->
{{map array double}}
<!-- 結果: '["aa", "bb", "cc"]' -->
```

## {{pluck}}

与えられたオブジェクトまたはオブジェクトの配列をマッピングし、指定された`prop`から値の配列を作成します。ドット表記（文字列として）を使用してネストされたプロパティを取得できます。

**パラメータ**

* `データシート` **{Array|Object}**
* `prop` **{Function}**
* `returns` **{String}**

**例**

```handlebars
// {{pluck items "data.title"}}
<!-- 結果: '["aa", "bb", "cc"]' -->
```

## {{reverse}}

配列内の要素、または文字列内の文字を逆順にします。

**パラメータ**

* `value` **{Array|String}**
* `returns` **{Array|String}**: 逆順にされた文字列または配列を返します。

**例**

```handlebars
<!-- value: 'abcd' -->
{{reverse value}}
<!-- 結果: 'dcba' -->
<!-- value: ['a', 'b', 'c', 'd'] -->
{{reverse value}}
<!-- 結果: ['d', 'c', 'b', 'a'] -->
```

## {{some}}

与えられた配列内の値に対してコールバックがtrueを返す場合にブロックを返すブロックヘルパーです。

**パラメータ**

* `array` **{Array}**
* `iter` **{Function}**: イテレータ
* **{Options}**: Handlebarsが提供するオプションオブジェクト
* `returns` **{String}**

**例**

```handlebars
<!-- array: [1, 'b', 3] -->
{{#some array isString}}
  Render me if the array has a string.
{{else}}
  Render me if it doesn't.
{{/some}}
<!-- 結果: 'Render me if the array has a string.' -->
```

## {{sort}}

与えられた`array`をソートします。オブジェクトの配列が渡された場合、オプションでソートするための`key`を第二引数として渡すことができます。また、ソート関数を第二引数として渡すこともできます。

**パラメータ**

* `array` **{Array}**: ソートする配列
* `key` **{String|Function}**: ソートするオブジェクトのキー、またはソート関数

**例**

```handlebars
<!-- array: ['b', 'a', 'c'] -->
{{sort array}}
<!-- 結果: '["a", "b", "c"]' -->
```

## {{sortBy}}

`array`をソートします。オブジェクトの配列が渡された場合、オプションでソートするための`key`を第二引数として渡すことができます。また、ソート関数を第二引数として渡すこともできます。

**パラメータ**

* `array` **{Array}**: ソートする配列
* `props` **{String|Function}**: ソートするための1つ以上のプロパティ、または使用するソート関数

**例**

```handlebars
<!-- array: [{a: 'zzz'}, {a: 'aaa'}] -->
{{sortBy array "a"}}
<!-- 結果: '[{"a":"aaa"}, {"a":"zzz"}]' -->
```

## {{withAfter}}

指定されたインデックスの後の配列内のアイテムをブロック内のコンテキストとして使用します。[withBefore](#withBefore)の反対です。

**パラメータ**

* `array` **{Array}**
* `idx` **{Number}**
* `options` **{Object}**
* `returns` **{Array}**

**例**

```handlebars
<!-- array: ['a', 'b', 'c', 'd', 'e'] -->
{{#withAfter array 3}}
  {{this}}
{{/withAfter}}
<!-- 結果: "de" -->
```

## {{withBefore}}
指定されたインデックスの前にある配列の項目をブロック内のコンテキストとして使用します。[withAfter](#withAfter)の逆です。

**パラメータ**

* `array` **{Array}**
* `idx` **{Number}**
* `options` **{Object}**
* `returns` **{Array}**

**例**

```handlebars
<!-- array: ['a', 'b', 'c', 'd', 'e'] -->
{{#withBefore array 3}}
  {{this}}
{{/withBefore}}
<!-- 結果: 'ab' -->
```

## {{withFirst}}

ハンドルバーズブロック式内でコレクションの最初の項目を使用します。[withLast](#withLast)の逆です。

**パラメータ**

* `array` **{Array}**
* `idx` **{Number}**
* `options` **{Object}**
* `returns` **{String}**

**例**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{#withFirst array}}
  {{this}}
{{/withFirst}}
<!-- 結果: 'a' -->
```

## {{withGroup}}

指定されたグループ`size`で配列要素をグループ化するブロックヘルパーです。

**パラメータ**

* `array` **{Array}**: イテレートする配列
* `size` **{Number}**: 各配列「グループ」の希望する長さ
* `options` **{Object}**: ハンドルバーズオプション
* `returns` **{String}**

**例**

```handlebars
<!-- array: ['a','b','c','d','e','f','g','h'] -->
{{#withGroup array 4}}
  {{#each this}}
    {{.}}
  {{each}}
  <br>
{{/withGroup}}
<!-- 結果: -->
<!-- 'a','b','c','d'<br> -->
<!-- 'e','f','g','h'<br> -->
```

## {{withLast}}

配列の最後の項目または`n`個の項目をブロック内のコンテキストとして使用します。[withFirst](#withFirst)の逆です。

**パラメータ**

* `array` **{Array}**
* `idx` **{Number}**: 開始インデックス
* `options` **{Object}**
* `returns` **{String}**

**例**

```handlebars
<!-- array: ['a', 'b', 'c'] -->
{{#withLast array}}
  {{this}}
{{/withLast}}
<!-- 結果: 'c' -->
```

## {{withSort}}

コレクションをソートし、ソートされたコレクションをブロック内のコンテキストとして公開するブロックヘルパーです。

**パラメータ**

* `array` **{Array}**
* `prop` **{String}**
* `options` **{Object}**: `reverse="true"`を指定して配列を逆順にします。
* `returns` **{String}**

**例**

```handlebars
<!-- array: ['b', 'a', 'c'] -->
{{#withSort array}}{{this}}{{/withSort}}
<!-- 結果: 'abc' -->
```

## {{unique}}

すべての重複する値を削除した配列を返すブロックヘルパーです。[each](#each)ヘルパーと一緒に使用するのが最適です。

**パラメータ**

* `array` **{Array}**
* `options` **{Object}**
* `returns` **{Array}**

**例**

```handlebars
<!-- array: ['a', 'a', 'c', 'b', 'e', 'e'] -->
{{#each (unique array)}}{{.}}{{/each}}
<!-- 結果: 'acbe' -->
```
