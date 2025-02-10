# Modèle JSON

## Introduction

Dans un modèle JSON, les variables sont représentées sous forme de chaîne de caractères et doivent être entourées de guillemets doubles, comme {{xxxx}}. Lors du processus de parsing, la valeur de chaque variable est convertie en son type approprié en fonction de son contenu réel. Ainsi, bien que la variable elle-même soit une chaîne, la valeur résultante après le parsing ne sera pas nécessairement une chaîne.

## Exemple

Le modèle JSON est le suivant :

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

Les variables actuelles sont les suivantes :

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

Le résultat après parsing sera :

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
