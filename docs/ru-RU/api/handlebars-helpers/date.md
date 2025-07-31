# Данные

## {{dateFormat}}

Хелпер `dateFormat` в Handlebars используется для форматирования даты с использованием библиотеки day.js. Он принимает два обязательных аргумента и третий необязательный аргумент для указания часового пояса.

**Параметры**

* `datetime` **{String}**: Дата и время для форматирования.
* `format` **{String}**: Строка формата даты (например, "YYYY-MM-DD HH:mm:ss").
* `timezone` **{String}**: Часовой пояс (опционально).
* `returns` **{String}**: Отформатированная строка даты.

**Пример**

```handlebars
{{dateFormat now "YYYY-MM-DD HH:mm:ss"}}
{{dateFormat now "YYYY-MM-DD HH:mm:ss" "Asia/Tokyo"}}
{{dateFormat now "YYYY-MM-DD HH:mm:ss" "UTC"}}
```
