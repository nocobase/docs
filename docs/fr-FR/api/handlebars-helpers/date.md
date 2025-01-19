# Date

## {{dateFormat}}

The "dateFormat" helper in Handlebars is used to format a date using the day.js library. It takes two required arguments and an optional third argument for the timezone.

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
