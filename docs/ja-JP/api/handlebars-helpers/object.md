# Object

## {{extend}}

Extend the context with the properties of other objects.
A shallow merge is performed to avoid mutating the context.

**Params**

* `objects` **{Object}**: One or more objects to extend.
* `returns` **{Object}**

## {{forIn}}

Block helper that iterates over the properties of
an object, exposing each key and value on the context.

**Params**

* `context` **{Object}**
* `options` **{Object}**
* `returns` **{String}**

## {{forOwn}}

Block helper that iterates over the **own** properties of
an object, exposing each key and value on the context.

**Params**

* `obj` **{Object}**: The object to iterate over.
* `options` **{Object}**
* `returns` **{String}**

## {{toPath}}

Take arguments and, if they are string or number, convert them to a dot-delineated object property path.

**Params**

* `prop` **{String|Number}**: The property segments to assemble (can be multiple).
* `returns` **{String}**

## {{get}}

Use property paths (`a.b.c`) to get a value or nested value from
the context. Works as a regular helper or block helper.

**Params**

* `prop` **{String}**: The property to get, optionally using dot notation for nested properties.
* `context` **{Object}**: The context object
* `options` **{Object}**: The handlebars options object, if used as a block helper.
* `returns` **{String}**

## {{getObject}}

Use property paths (`a.b.c`) to get an object from
the context. Differs from the `get` helper in that this
helper will return the actual object, including the
given property key. Also, this helper does not work as a
block helper.

**Params**

* `prop` **{String}**: The property to get, optionally using dot notation for nested properties.
* `context` **{Object}**: The context object
* `returns` **{String}**

## {{hasOwn}}

Return true if `key` is an own, enumerable property of the given `context` object.

**Params**

* `key` **{String}**
* `context` **{Object}**: The context object.
* `returns` **{Boolean}**

**Example**

```handlebars
{{hasOwn context key}}
```

## {{isObject}}

Return true if `value` is an object.

**Params**

* `value` **{String}**
* `returns` **{Boolean}**

**Example**

```handlebars
{{isObject "foo"}}
//=> false
```

## {{JSONparse}}

Parses the given string using `JSON.parse`.

**Params**

* `string` **{String}**: The string to parse

**Example**

```handlebars
<!-- string: '{"foo": "bar"}' -->
{{JSONparse string}}
<!-- results in: { foo: 'bar' } -->
```

## {{JSONstringify}}

Stringify an object using `JSON.stringify`.

**Params**

* `obj` **{Object}**: Object to stringify
* `returns` **{String}**

**Example**

```handlebars
<!-- object: { foo: 'bar' } -->
{{JSONstringify object}}
<!-- results in: '{"foo": "bar"}' -->
```

## {{merge}}

Deeply merge the properties of the given `objects` with the
context object.

**Params**

* `object` **{Object}**: The target object. Pass an empty object to shallow clone.
* `objects` **{Object}**
* `returns` **{Object}**

## {{pick}}

Pick properties from the context object.

**Params**

* `properties` **{Array|String}**: One or more properties to pick.
* `context` **{Object}**
* `options` **{Object}**: Handlebars options object.
* `returns` **{Object}**: Returns an object with the picked values. If used as a block helper, the values are passed as context to the inner block. If no values are found, the context is passed to the inverse block.
