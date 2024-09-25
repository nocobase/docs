# Date

## {{dateFormat}}

**Params**

* `datetime` **{String}**
* `format` **{String}**
* `timezone` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{dateFormat now "YYYY-MM-DD HH:mm:ss"}}
{{dateFormat now "YYYY-MM-DD HH:mm:ss" "Asia/Tokyo"}}
{{dateFormat now "YYYY-MM-DD HH:mm:ss" "UTC"}}
```
