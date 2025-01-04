# JSON テンプレート

## 紹介

JSONテンプレートでは、変数は文字列形式であるため、文字列のように二重引用符で囲む必要があります {{xxxx}}。変数が解析されるとき、変数の値はその実際の内容に応じて適切な型に変換されます。言い換えれば、変数自体は文字列形式ですが、解析後の値は必ずしも文字列型ではありません。

## 例

JSONテンプレートは以下の通りです。

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
    "key2": "{{current.key2}}",
  },
  "key8": ["{{current.key1}}", "{{current.key3}}"],
  "key9": "{{current.key1}} - \"{{current.key3}}\" - {{current.key3}} - val9",
}
```

currentの変数は以下の通りです。

```json
{
  "key1": "val1",
  "key2": null,
  "key3": 3,
  "key4": {"k": "v"},
  "key5": [1,2,3],
  "key6": undefined
}
```

解析結果は以下の通りです。

```json
{
  "key1": "val1",
  "key2": null,
  "key3": 3,
  "key4": {"k": "v"},
  "key5": [1,2,3],
  "key7": {
    "key1": "val1",
    "key2": null,
  },
  "key8": ["val1", 3],
  "key9": "val1 - \"3\" - 3 - val9",
}
```
