# JSON Template

## Introduction

In a JSON template, variables are represented in string format and must be enclosed in double quotes, such as {{xxxx}}. During the parsing process, each variable's value is converted to its appropriate type based on its actual content. Thus, while the variable itself is a string, the resulting parsed value may not necessarily remain a string.

## Example

The JSON template is as follows

```json
{
  "key1": "{{current.key1}}",
  "key2": "{{current.key2}}",
  "key3": "{{current.key3}}",
  "key4": "{{current.key4}}",
  "key5": "{{current.key5}}",
  "key6": "{{current.key6}}",
  "key7": {
    "key1": "{{current.key1}}",
    "key2": "{{current.key2}}"
  },
  "key8": ["{{current.key1}}", "{{current.key3}}"],
  "key9": "{{current.key1}} - \"{{current.key3}}\" - {{current.key3}} - val9"
}
```

The current variables are as follows

```json
{
  "key1": "val1",
  "key2": null,
  "key3": 3,
  "key4": {"k": "v"},
  "key5": [1, 2, 3],
  "key6": undefined
}
```

The parsed result will be

```json
{
  "key1": "val1",
  "key2": null,
  "key3": 3,
  "key4": {"k": "v"},
  "key5": [1, 2, 3],
  "key7": {
    "key1": "val1",
    "key2": null
  },
  "key8": ["val1", 3],
  "key9": "val1 - \"3\" - 3 - val9"
}
```
