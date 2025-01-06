# 日付

## {{dateFormat}}

Handlebarsの「dateFormat」ヘルパーは、day.jsライブラリを使用して日付をフォーマットするために使用されます。2つの必須引数と、タイムゾーンのためのオプションの第3引数を取ります。

**パラメータ**

* `datetime` **{String}**
* `format` **{String}**
* `timezone` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{dateFormat now "YYYY-MM-DD HH:mm:ss"}}
{{dateFormat now "YYYY-MM-DD HH:mm:ss" "Asia/Tokyo"}}
{{dateFormat now "YYYY-MM-DD HH:mm:ss" "UTC"}}
```