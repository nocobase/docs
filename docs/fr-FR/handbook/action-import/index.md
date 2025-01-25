# Importation de données

## Vue d'ensemble

## Installation

## Directives d'importation

### Champs numériques

Les valeurs numériques et en pourcentage sont prises en charge, tandis que des entrées telles que `N/A` ou `-` seront exclues.

| Nombre 1 | Pourcentage | Nombre 2 | Nombre 3 |
| -------- | ----------- | -------- | -------- |
| 123      | 25%         | N/A      | -        |

Après conversion en JSON :

```ts
{
  "Nombre 1": 123,
  "Pourcentage": 0.25,
  "Nombre 2": null,
  "Nombre 3": null,
}
```

### Champs booléens

Les valeurs textuelles suivantes sont reconnues (insensible à la casse pour l'anglais) :

- `Yes`, `Y`, `True`, `1`, `是`
- `No`, `N`, `False`, `0`, `否`

| Champ 1 | Champ 2 | Champ 3 | Champ 4 | Champ 5 |
| ------- | ------- | ------- | ------- | ------- |
| No      | Yes     | Y       | true    | 0       |

Après conversion en JSON :

```ts
{
  "Champ 1": false,
  "Champ 2": true,
  "Champ 3": true,
  "Champ 4": true,
  "Champ 5": false,
}
```

### Champs de date

| DateOnly            | Local (+08:00)      | GMT                 |
| ------------------- | ------------------- | ------------------- |
| 2023-01-18 22:22:22 | 2023-01-18 22:22:22 | 2023-01-18 22:22:22 |

Après conversion en JSON :

```ts
{
  "DateOnly": "2023-01-18T00:00:00.000Z",
  "Local (+08:00)": "2023-01-18T14:22:22.000Z",
  "GMT": "2023-01-18T22:22:22.000Z",
}
```

### Champs de sélection

Les valeurs et les étiquettes des options peuvent être utilisées de manière interchangeable comme texte d'entrée. Plusieurs options peuvent être séparées par des virgules (`,` `，`) ou des virgules en pleine largeur ( `、`).

Par exemple, si le champ `Priority` a les options suivantes :

| Valeur de l'option | Libellé de l'option |
| ------------------ | ------------------- |
| low                | Low                 |
| medium             | Medium              |
| high               | High                |

Les valeurs et libellés peuvent être utilisés comme entrée.

| Priority |
| -------- |
| High     |
| low      |

Après conversion en JSON :

```ts
[{ Priority: 'high' }, { Priority: 'low' }];
```

### Champs de région administrative chinoise

| Région 1         | Région 2         |
| ---------------- | ---------------- |
| Beijing/City     | Tianjin/City     |

Après conversion en JSON :

```ts
{
  "Région 1": ["11", "1101"],
  "Région 2": ["12", "1201"]
}
```

### Champs de pièce jointe

| Attachment                                 |
| ------------------------------------------ |
| https://www.nocobase.com/images/logo.png   |

Après conversion en JSON :

```ts
{
  "Attachment": [
    {
      "filename": "logo.png",
      "title": "logo.png",
      "extname": ".png",
      "url": "https://www.nocobase.com/images/logo.png"
    }
  ]
}
```

### Champs de relation

Plusieurs valeurs peuvent être séparées par des virgules (`,` `，`) ou des virgules en pleine largeur ( `、`).

| Département/Nom  | Catégorie/Titre          |
| ---------------- | ------------------------ |
| Development      | Catégorie 1, Catégorie 2 |

Après conversion en JSON :

```ts
{
  "Département": [1], // 1 est l'ID de l'enregistrement pour le département nommé "Development"
  "Catégorie": [1, 2], // 1 et 2 sont les IDs des enregistrements pour les catégories intitulées "Catégorie 1" et "Catégorie 2"
}
```

### Champs JSON

| JSON1              |
| ------------------ |
| {"key":"value"}    |

Après conversion en JSON :

```ts
{
  "JSON": {"key":"value"}
}
```

### Champs de géométrie de carte

| Point  | Ligne        | Polygon           | Circle |
| ------ | ------------ | ----------------- | ------ |
| 1,2    | (1,2),(3,4)  | (1,2),(3,4),(1,2) | 1,2,3  |

Après conversion en JSON :

```ts
{
  "Point": [1,2],
  "Line": [[1,2], [3,4]],
  "Polygon": [[1,2], [3,4], [1,2]],
  "Circle": [1,2,3]
}
```

## Format d'importation personnalisé

Vous pouvez enregistrer des méthodes `ValueParser` personnalisées via la méthode `db.registerFieldValueParsers()`. Par exemple :

```ts
import { BaseValueParser } from '@nocobase/database';

class PointValueParser extends BaseValueParser {
  async setValue(value) {
    if (Array.isArray(value)) {
      this.value = value;
    } else if (typeof value === 'string') {
      this.value = value.split(',');
    } else {
      this.errors.push('Valeur invalide');
    }
  }
}

const db = new Database();

// Pour les champs de type=point, les données seront analysées en utilisant PointValueParser lors de l'importation
db.registerFieldValueParsers({
  point: PointValueParser,
});
```

### Exemple d'importation

| Point |
| ----- |
| 1,2   |

Après conversion en JSON :

```ts
{
  "Point": [1,2]
}
```
