
# Regex

## {{toRegex}}

Convert the given string to a regular expression.

**Params**

* `str` **{String}**
* `returns` **{RegExp}**

**Example**

```handlebars
{{toRegex "foo"}}
<!-- results in: /foo/ -->
```

## {{test}}

Returns true if the given `str` matches the given regex. A regex can be passed on the context, or using the [toRegex](#toregex) helper as a subexpression.

**Params**

* `str` **{String}**
* `returns` **{RegExp}**

**Example**

```handlebars
{{test "bar" (toRegex "foo")}}
<!-- results in: false -->
{{test "foobar" (toRegex "foo")}}
<!-- results in: true -->
{{test "foobar" (toRegex "^foo$")}}
<!-- results in: false -->
```
