# Built-in Helpers

https://handlebarsjs.com/guide/builtin-helpers.html

## {{if}}

Renders a block if the given condition is truthy.

**Params**

- `condition` **{Any}**: The condition to evaluate.

**Returns**: The content inside the block if the condition is truthy, otherwise returns nothing.

**Example**

```handlebars
{{#if condition}}
  This will be displayed if the condition is true.
{{/if}}
```

## {{unless}}

Renders a block if the given condition is falsy. This is the opposite of `if`.

**Params**

- `condition` **{Any}**: The condition to evaluate.

**Returns**: The content inside the block if the condition is falsy, otherwise returns nothing.

**Example**

```handlebars
{{#unless condition}}
  This will be displayed if the condition is false.
{{/unless}}
```

---

## {{each}}

Iterates over an array or object and renders a block for each item.

**Params**

- `collection` **{Array|Object}**: The array or object to iterate over.

**Returns**: Renders the block for each item in the collection.

**Example**

```handlebars
{{#each items}}
  <li>{{this}}</li>
{{/each}}
```

## {{with}}

Renders a block with a given context. It allows you to specify a context for the block, simplifying access to deeply nested properties.

**Params**

- `context` **{Any}**: The context to use within the block.

**Returns**: Renders the block with the provided context.

**Example**

```handlebars
{{#with person}}
  <p>Name: {{name}}</p>
  <p>Age: {{age}}</p>
{{/with}}
```

## {{lookup}}

Looks up the value of a specified key in an object. This helper is useful for accessing dynamic keys.

**Params**

- `context` **{Object}**: The object to look up the key from.
- `key` **{String|Number}**: The key to look up.

**Returns**: The value of the specified key in the object.

**Example**

```handlebars
{{lookup person "name"}}
<!-- If person is { name: "Alice", age: 30 }, it results in: "Alice" -->
```
