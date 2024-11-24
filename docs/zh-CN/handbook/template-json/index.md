# JSON 模板

## 介绍

在 JSON 模板中，变量是字符串格式的，因此需要像字符串一样用双引号包裹 {{xxxx}}。在变量解析时，变量的值会根据其实际内容转换为相应的类型。换句话说，虽然变量本身是字符串格式，但其解析后的值不一定是字符串类型。

## 示例

JSON 模板为

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

current 的变量为

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

解析的结果为

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
