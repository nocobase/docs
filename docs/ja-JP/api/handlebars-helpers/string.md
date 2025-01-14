
# 文字列

## {{append}}

指定された `suffix` を指定された文字列に追加します。

**パラメータ**

* `str` **{String}**
* `suffix` **{String}**
* `returns` **{String}**

**例**

```handlebars
<!-- "item.stem" が "foo" の場合 -->
{{append item.stem ".html"}}
<!-- 結果:  'foo.html' -->
```

## {{camelcase}}

指定された `string` の文字をキャメルケースに変換します。

**パラメータ**

* `string` **{String}**: キャメルケースに変換する文字列。
* `returns` **{String}**

**例**

```handlebars
{{camelcase "foo bar baz"}};
<!-- 結果:  'fooBarBaz' -->
```

## {{capitalize}}

文の最初の単語を大文字にします。

**パラメータ**

* `str` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{capitalize "foo bar baz"}}
<!-- 結果:  "Foo bar baz" -->
```

## {{capitalizeAll}}

文字列内のすべての単語を大文字にします。

**パラメータ**

* `str` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{capitalizeAll "foo bar baz"}}
<!-- 結果:  "Foo Bar Baz" -->
```

## {{center}}

非改行スペースを使用して文字列を中央揃えします。

**パラメータ**

* `str` **{String}**
* `spaces` **{String}**
* `returns` **{String}**

## {{chop}}

trimと同様ですが、文字列の先頭と末尾から余分な空白と非単語文字を削除します。

**パラメータ**

* `string` **{String}**: トリミングする文字列。
* `returns` **{String}**

**例**

```handlebars
{{chop "_ABC_"}}
<!-- 結果:  'ABC' -->

{{chop "-ABC-"}}
<!-- 結果:  'ABC' -->

{{chop " ABC "}}
<!-- 結果:  'ABC' -->
```

## {{dashcase}}

`string` の文字をダッシュケースに変換します。非単語文字とピリオドをハイフンに置き換えます。

**パラメータ**

* `string` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{dashcase "a-b-c d_e"}}
<!-- 結果:  'a-b-c-d-e' -->
```

## {{dotcase}}

`string` の文字をドットケースに変換します。

**パラメータ**

* `string` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{dotcase "a-b-c d_e"}}
<!-- 結果:  'a.b.c.d.e' -->
```

## {{downcase}}

指定された文字列のすべての文字を小文字に変換します。[lowercase](#lowercase) のエイリアスです。

**パラメータ**

* `string` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{downcase "aBcDeF"}}
<!-- 結果:  'abcdef' -->
```

## {{ellipsis}}

文字列を指定された `length` に切り詰め、省略記号 `…` を追加します。

**パラメータ**

* `str` **{String}**
* `length` **{Number}**: 返される文字列の希望の長さ。
* `returns` **{String}**: 切り詰められた文字列。

**例**

```handlebars
{{ellipsis (sanitize "<span>foo bar baz</span>"), 7}}
<!-- 結果:  'foo bar…' -->
{{ellipsis "foo bar baz", 7}}
<!-- 結果:  'foo bar…' -->
```

## {{hyphenate}}

文字列内のスペースをハイフンに置き換えます。

**パラメータ**

* `str` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{hyphenate "foo bar baz qux"}}
<!-- 結果:  "foo-bar-baz-qux" -->
```

## {{isString}}

`value` が文字列の場合、true を返します。

**パラメータ**

* `value` **{String}**
* `returns` **{Boolean}**

**例**

```handlebars
{{isString "foo"}}
<!-- 結果:  'true' -->
```

## {{lowercase}}

指定された文字列のすべての文字を小文字に変換します。

**パラメータ**

* `str` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{lowercase "Foo BAR baZ"}}
<!-- 結果:  'foo bar baz' -->
```

## {{occurrences}}

指定された `string` 内の `substring` の出現回数を返します。

**パラメータ**

* `str` **{String}**
* `substring` **{String}**
* `returns` **{Number}**: 出現回数

**例**

```handlebars
{{occurrences "foo bar foo bar baz" "foo"}}
<!-- 結果:  2 -->
```

## {{pascalcase}}

`string` の文字をパスカルケースに変換します。

**パラメータ**

* `string` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{pascalcase "foo bar baz"}}
<!-- 結果:  'FooBarBaz' -->
```

## {{pathcase}}

`string` の文字をパスケースに変換します。

**パラメータ**

* `string` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{pathcase "a-b-c d_e"}}
<!-- 結果:  'a/b/c/d/e' -->
```

## {{plusify}}

指定された文字列内のスペースをプラス記号に置き換えます。

**パラメータ**

* `str` **{String}**: 入力文字列
* `returns` **{String}**: スペースがプラス記号に置き換えられた入力文字列

**例**

```handlebars
{{plusify "foo bar baz"}}
<!-- 結果:  'foo+bar+baz' -->
```

## {{prepend}}

指定された `string` に指定された `prefix` を前置します。

**パラメータ**

* `str` **{String}**
* `prefix` **{String}**
* `returns` **{String}**

**例**

```handlebars
<!-- "val" が "bar" の場合 -->
{{prepend val "foo-"}}
<!-- 結果:  'foo-bar' -->
```

## {{raw}}

ブロック内のMustacheテンプレートを処理せずにブロックをレンダリングします。

**パラメータ**

* `options` **{Object}**
* `returns` **{String}**

**例**

```handlebars
{{{{#raw}}}}
{{foo}}
{{{{/raw}}}}
<!-- 結果:  '{{foo}}' -->
```

## {{remove}}

指定された `str` から `substring` のすべての出現を削除します。

**パラメータ**

* `str` **{String}**
* `substring` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{remove "a b a b a b" "a "}}
<!-- 結果:  'b b b' -->
```

## {{removeFirst}}

指定された `str` から `substring` の最初の出現を削除します。

**パラメータ**

* `str` **{String}**
* `substring` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{remove "a b a b a b" "a"}}
<!-- 結果:  ' b a b a b' -->
```

## {{replace}}

`substring` `a` のすべての出現を `substring` `b` に置き換えます。

**パラメータ**

* `str` **{String}**
* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{replace "a b a b a b" "a" "z"}}
<!-- 結果:  'z b z b z b' -->
```

## {{replaceFirst}}

`substring` `a` の最初の出現を `substring` `b` に置き換えます。

**パラメータ**

* `str` **{String}**
* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{replace "a b a b a b" "a" "z"}}
<!-- 結果:  'z b a b a b' -->
```

## {{reverse}}

文字列を逆順にします。

**パラメータ**

* `str` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{reverse "abcde"}}
<!-- 結果:  'edcba' -->
```

## {{sentence}}

指定された文字列をセンテンスケースに変換します。

**パラメータ**

* `str` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{sentence "hello world. goodbye world."}}
<!-- 結果:  'Hello world. Goodbye world.' -->
```

## {{snakecase}}

指定された `string` の文字をスネークケースに変換します。

**パラメータ**

* `string` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{snakecase "a-b-c d_e"}}
<!-- 結果:  'a_b_c_d_e' -->
```

## {{split}}

指定された `character` で `string` を分割します。

**パラメータ**

* `string` **{String}**: 分割する文字列。
* `returns` **{String}** `character`: デフォルトは空の文字列です。

**例**

```handlebars
{{split "a,b,c" ","}}
<!-- 結果:  ['a', 'b', 'c'] -->
```

## {{startsWith}}

文字列が指定された接頭辞で始まるかどうかをテストします。

**パラメータ**

* `prefix` **{String}**
* `testString` **{String}**
* `options` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{#startsWith "Goodbye" "Hello, world!"}}
  Whoops
{{else}}
  Bro, do you even hello world?
{{/startsWith}}
```

## {{titleize}}

指定された文字列をタイトルケースに変換します。

**パラメータ**

* `str` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{titleize "this is title case"}}
<!-- 結果:  'This Is Title Case' -->
```

## {{trim}}

文字列の先頭と末尾から余分な空白を削除します。

**パラメータ**

* `string` **{String}**: トリミングする文字列。
* `returns` **{String}**

**例**

```handlebars
{{trim " ABC "}}
<!-- 結果:  'ABC' -->
```

## {{trimLeft}}

文字列の先頭から余分な空白を削除します。

**パラメータ**

* `string` **{String}**: トリミングする文字列。
* `returns` **{String}**

**例**

```handlebars
{{trim " ABC "}}
<!-- 結果:  'ABC ' -->
```

## {{trimRight}}

文字列の末尾から余分な空白を削除します。

**パラメータ**

* `string` **{String}**: トリミングする文字列。
* `returns` **{String}**

**例**

```handlebars
{{trimRight " ABC "}}
<!-- 結果:  ' ABC' -->
```

## {{truncate}}

文字列を指定された `length` に切り詰めます。[ellipsis](#ellipsis) も参照してください。

**パラメータ**

* `str` **{String}**
* `limit` **{Number}**: 返される文字列の希望の長さ。
* `suffix` **{String}**: 切り詰められたことを示すために使用する文字列をオプションで指定します。指定しない場合、省略記号 (`…`) が使用されます。
* `returns` **{String}**: 切り詰められた文字列。

**例**

```handlebars
truncate("foo bar baz", 7);
<!-- 結果:  'foo bar' -->
truncate(sanitize("<span>foo bar baz</span>", 7));
<!-- 結果:  'foo bar' -->
```

## {{truncateWords}}

指定された単語数に文字列を切り詰めます。詳細は[truncate](#truncate)を参照してください。

**パラメータ**

* `str` **{String}**
* `limit` **{Number}**: 返される文字列の希望する長さ。
* `suffix` **{String}**: 任意で、文字列が切り詰められたことを示すために使用する接尾辞を指定します。
* `returns` **{String}**: 切り詰められた文字列。

**例**

```handlebars
truncateWords("foo bar baz", 1);
<!-- 結果:  'foo…' -->
truncateWords("foo bar baz", 2);
<!-- 結果:  'foo bar…' -->
truncateWords("foo bar baz", 3);
<!-- 結果:  'foo bar baz' -->
```

## {{upcase}}

指定された文字列のすべての文字を大文字に変換します。[uppercase](#uppercase)のエイリアスです。

**パラメータ**

* `string` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{upcase "aBcDeF"}}
<!-- 結果:  'ABCDEF' -->
```

## {{uppercase}}

指定された文字列のすべての文字を大文字に変換します。ブロックヘルパーとして使用すると、ブロック全体を大文字に変換します。このヘルパーは逆ブロックをサポートしていません。

**パラメータ**

* `str` **{String}**: 大文字に変換する文字列
* `options` **{Object}**: Handlebarsのオプションオブジェクト
* `returns` **{String}**

**例**

```handlebars
{{uppercase "aBcDeF"}}
<!-- 結果:  'ABCDEF' -->
```
