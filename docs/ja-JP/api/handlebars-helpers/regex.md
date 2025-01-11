# 正規表現 (Regex)

## {{toRegex}}

指定された文字列を正規表現に変換します。

**パラメータ**

* `str` **{String}**
* `returns` **{RegExp}**

**例**

```handlebars
{{toRegex "foo"}}
<!-- 結果: /foo/ -->
```

## {{test}}

指定された `str` が指定された正規表現に一致する場合に true を返します。正規表現はコンテキストで渡すか、サブ式として [toRegex](#toregex) ヘルパーを使用して渡すことができます。

**パラメータ**

* `str` **{String}**
* `returns` **{RegExp}**

**例**

```handlebars
{{test "bar" (toRegex "foo")}}
<!-- 結果: false -->
{{test "foobar" (toRegex "foo")}}
<!-- 結果: true -->
{{test "foobar" (toRegex "^foo$")}}
<!-- 結果: false -->
```