# Строки

## {{append}}

Добавляет указанный `suffix` к заданной строке.

**Параметры**

* `str` **{String}**
* `suffix` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
<!-- если "item.stem" равно "foo" -->
{{append item.stem ".html"}}
<!-- результат: 'foo.html' -->
```

## {{camelcase}}

Преобразует символы в заданной строке в camelCase.

**Параметры**

* `string` **{String}**: Строка для преобразования.
* `returns` **{String}**

**Пример**

```handlebars
{{camelcase "foo bar baz"}};
<!-- результат: 'fooBarBaz' -->
```

## {{capitalize}}

Делает первую букву в предложении заглавной.

**Параметры**

* `str` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{capitalize "foo bar baz"}}
<!-- результат: "Foo bar baz" -->
```

## {{capitalizeAll}}

Делает первую букву каждого слова в строке заглавной.

**Параметры**

* `str` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{capitalizeAll "foo bar baz"}}
<!-- результат: "Foo Bar Baz" -->
```

## {{center}}

Центрирует строку, используя неразрывные пробелы.

**Параметры**

* `str` **{String}**
* `spaces` **{String}**
* `returns` **{String}**

## {{chop}}

Удаляет лишние пробелы и небуквенные символы с начала и конца строки.

**Параметры**

* `string` **{String}**: Строка для обработки.
* `returns` **{String}**

**Пример**

```handlebars
{{chop "_ABC_"}}
<!-- результат: 'ABC' -->

{{chop "-ABC-"}}
<!-- результат: 'ABC' -->

{{chop " ABC "}}
<!-- результат: 'ABC' -->
```

## {{dashcase}}

Преобразует символы в строке в dash-case. Заменяет небуквенные символы и точки на дефисы.

**Параметры**

* `string` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{dashcase "a-b-c d_e"}}
<!-- результат: 'a-b-c-d-e' -->
```

## {{dotcase}}

Преобразует символы в строке в dot.case.

**Параметры**

* `string` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{dotcase "a-b-c d_e"}}
<!-- результат: 'a.b.c.d.e' -->
```

## {{downcase}}

Преобразует все символы в строке в нижний регистр. Аналог [lowercase](#lowercase).

**Параметры**

* `string` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{downcase "aBcDeF"}}
<!-- результат: 'abcdef' -->
```

## {{ellipsis}}

Обрезает строку до указанной длины и добавляет многоточие (`…`).

**Параметры**

* `str` **{String}**
* `length` **{Number}**: Желаемая длина строки.
* `returns` **{String}**: Обрезанная строка.

**Пример**

```handlebars
{{ellipsis (sanitize "<span>foo bar baz</span>"), 7}}
<!-- результат: 'foo bar…' -->
{{ellipsis "foo bar baz", 7}}
<!-- результат: 'foo bar…' -->
```

## {{hyphenate}}

Заменяет пробелы в строке на дефисы.

**Параметры**

* `str` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{hyphenate "foo bar baz qux"}}
<!-- результат: "foo-bar-baz-qux" -->
```

## {{isString}}

Возвращает `true`, если значение является строкой.

**Параметры**

* `value` **{String}**
* `returns` **{Boolean}**

**Пример**

```handlebars
{{isString "foo"}}
<!-- результат: 'true' -->
```

## {{lowercase}}

Преобразует все символы в строке в нижний регистр.

**Параметры**

* `str` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{lowercase "Foo BAR baZ"}}
<!-- результат: 'foo bar baz' -->
```

## {{occurrences}}

Возвращает количество вхождений подстроки в заданной строке.

**Параметры**

* `str` **{String}**
* `substring` **{String}**
* `returns` **{Number}**: Количество вхождений.

**Пример**

```handlebars
{{occurrences "foo bar foo bar baz" "foo"}}
<!-- результат: 2 -->
```

## {{pascalcase}}

Преобразует символы в строке в PascalCase.

**Параметры**

* `string` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{pascalcase "foo bar baz"}}
<!-- результат: 'FooBarBaz' -->
```

## {{pathcase}}

Преобразует символы в строке в path/case.

**Параметры**

* `string` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{pathcase "a-b-c d_e"}}
<!-- результат: 'a/b/c/d/e' -->
```

## {{plusify}}

Заменяет пробелы в строке на знаки плюса.

**Параметры**

* `str` **{String}**: Входная строка.
* `returns` **{String}**: Строка с пробелами, заменёнными на плюсы.

**Пример**

```handlebars
{{plusify "foo bar baz"}}
<!-- результат: 'foo+bar+baz' -->
```

## {{prepend}}

Добавляет указанный `prefix` в начало строки.

**Параметры**

* `str` **{String}**
* `prefix` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
<!-- если "val" равно "bar" -->
{{prepend val "foo-"}}
<!-- результат: 'foo-bar' -->
```

## {{raw}}

Выводит блок без обработки шаблонов Mustache внутри него.

**Параметры**

* `options` **{Object}**
* `returns` **{String}**

**Пример**

```handlebars
{{{{#raw}}}}
{{foo}}
{{{{/raw}}}}
<!-- результат: '{{foo}}' -->
```

## {{remove}}

Удаляет все вхождения подстроки из строки.

**Параметры**

* `str` **{String}**
* `substring` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{remove "a b a b a b" "a "}}
<!-- результат: 'b b b' -->
```

## {{removeFirst}}

Удаляет первое вхождение подстроки из строки.

**Параметры**

* `str` **{String}**
* `substring` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{remove "a b a b a b" "a"}}
<!-- результат: ' b a b a b' -->
```

## {{replace}}

Заменяет все вхождения подстроки `a` на подстроку `b`.

**Параметры**

* `str` **{String}**
* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{replace "a b a b a b" "a" "z"}}
<!-- результат: 'z b z b z b' -->
```

## {{replaceFirst}}

Заменяет первое вхождение подстроки `a` на подстроку `b`.

**Параметры**

* `str` **{String}**
* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{replace "a b a b a b" "a" "z"}}
<!-- результат: 'z b a b a b' -->
```

## {{reverse}}

Переворачивает строку.

**Параметры**

* `str` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{reverse "abcde"}}
<!-- результат: 'edcba' -->
```

## {{sentence}}

Преобразует строку в sentence case (первая буква каждого предложения заглавная).

**Параметры**

* `str` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{sentence "hello world. goodbye world."}}
<!-- результат: 'Hello world. Goodbye world.' -->
```

## {{snakecase}}

Преобразует символы в строке в snake_case.

**Параметры**

* `string` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{snakecase "a-b-c d_e"}}
<!-- результат: 'a_b_c_d_e' -->
```

## {{split}}

Разделяет строку по указанному символу.

**Параметры**

* `string` **{String}**: Строка для разделения.
* `returns` **{String}** `character`: По умолчанию — пустая строка.

**Пример**

```handlebars
{{split "a,b,c" ","}}
<!-- результат: ['a', 'b', 'c'] -->
```

## {{startsWith}}

Проверяет, начинается ли строка с указанного префикса.

**Параметры**

* `prefix` **{String}**
* `testString` **{String}**
* `options` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{#startsWith "Goodbye" "Hello, world!"}}
  Упс
{{else}}
  Бро, ты вообще "Hello, world!"?
{{/startsWith}}
```

## {{titleize}}

Преобразует строку в Title Case (каждое слово с заглавной буквы).

**Параметры**

* `str` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{titleize "this is title case"}}
<!-- результат: 'This Is Title Case' -->
```

## {{trim}}

Удаляет лишние пробелы с начала и конца строки.

**Параметры**

* `string` **{String}**: Строка для обработки.
* `returns` **{String}**

**Пример**

```handlebars
{{trim " ABC "}}
<!-- результат: 'ABC' -->
```

## {{trimLeft}}

Удаляет лишние пробелы с начала строки.

**Параметры**

* `string` **{String}**: Строка для обработки.
* `returns` **{String}**

**Пример**

```handlebars
{{trim " ABC "}}
<!-- результат: 'ABC ' -->
```

## {{trimRight}}

Удаляет лишние пробелы с конца строки.

**Параметры**

* `string` **{String}**: Строка для обработки.
* `returns` **{String}**

**Пример**

```handlebars
{{trimRight " ABC "}}
<!-- результат: ' ABC' -->
```

## {{truncate}}

Обрезает строку до указанной длины. См. также [ellipsis](#ellipsis).

**Параметры**

* `str` **{String}**
* `limit` **{Number}**: Желаемая длина строки.
* `suffix` **{String}**: Опционально, строка для обозначения обрезки (по умолчанию — многоточие `…`).
* `returns` **{String}**: Обрезанная строка.

**Пример**

```handlebars
truncate("foo bar baz", 7);
<!-- результат: 'foo bar' -->
truncate(sanitize("<span>foo bar baz</span>", 7));
<!-- результат: 'foo bar' -->
```

## {{truncateWords}}

Обрезает строку до указанного количества слов. См. также [truncate](#truncate).

**Параметры**

* `str` **{String}**
* `limit` **{Number}**: Желаемое количество слов.
* `suffix` **{String}**: Опционально, строка для обозначения обрезки.
* `returns` **{String}**: Обрезанная строка.

**Пример**

```handlebars
truncateWords("foo bar baz", 1);
<!-- результат: 'foo…' -->
truncateWords("foo bar baz", 2);
<!-- результат: 'foo bar…' -->
truncateWords("foo bar baz", 3);
<!-- результат: 'foo bar baz' -->
```

## {{upcase}}

Преобразует все символы в строке в верхний регистр. Аналог [uppercase](#uppercase).

**Параметры**

* `string` **{String}**
* `returns` **{String}**

**Пример**

```handlebars
{{upcase "aBcDeF"}}
<!-- результат: 'ABCDEF' -->
```

## {{uppercase}}

Преобразует все символы в строке в верхний регистр. Если используется как блок, преобразует весь блок. Не поддерживает инверсные блоки.

**Параметры**

* `str` **{String}**: Строка для преобразования.
* `options` **{Object}**: Объект опций Handlebars.
* `returns` **{String}**

**Пример**

```handlebars
{{uppercase "aBcDeF"}}
<!-- результат: 'ABCDEF' -->
```
