# Import Data

## Overview

## Installation

## Import Guidelines

### Numeric Fields

Numeric and percentage values are supported, while entries like `N/A` or `-` will be excluded.

| Number 1 | Percentage | Number 2 | Number 3 |
| -------- | ---------- | -------- | -------- |
| 123      | 25%        | N/A      | -        |

After conversion to JSON:

```ts
{
  "Number 1": 123,
  "Percentage": 0.25,
  "Number 2": null,
  "Number 3": null,
}
```

### Boolean Fields

The following text values are recognized (case-insensitive for English):

- `Yes`, `Y`, `True`, `1`, `是`
- `No`, `N`, `False`, `0`, `否`

| Field 1 | Field 2 | Field 3 | Field 4 | Field 5 |
| ------- | ------- | ------- | ------- | ------- |
| No      | Yes     | Y       | true    | 0       |

After conversion to JSON:

```ts
{
  "Field 1": false,
  "Field 2": true,
  "Field 3": true,
  "Field 4": true,
  "Field 5": false,
}
```

### Date Fields

| DateOnly            | Local (+08:00)      | GMT                 |
| ------------------- | ------------------- | ------------------- |
| 2023-01-18 22:22:22 | 2023-01-18 22:22:22 | 2023-01-18 22:22:22 |

After conversion to JSON:

```ts
{
  "DateOnly": "2023-01-18T00:00:00.000Z",
  "Local (+08:00)": "2023-01-18T14:22:22.000Z",
  "GMT": "2023-01-18T22:22:22.000Z",
}
```

### Select Fields

Option values and labels can be used interchangeably as input text. Multiple options can be separated by commas (`,` `，`) or by full-width commas ( `、`).

For instance, if the `Priority` field has the following options:

| Option Value | Option Label |
| ------------ | ------------ |
| low          | Low          |
| medium       | Medium       |
| high         | High         |

Both the value and label can be used as input.

| Priority |
| -------- |
| High     |
| low      |

After conversion to JSON:

```ts
[{ Priority: 'high' }, { Priority: 'low' }];
```

### Chinese Administrative Region Fields

| Region 1       | Region 2       |
| -------------- | -------------- |
| Beijing/City   | Tianjin/City   |

After conversion to JSON:

```ts
{
  "Region 1": ["11", "1101"],
  "Region 2": ["12", "1201"]
}
```

### Attachment Fields

| Attachment                                |
| ----------------------------------------- |
| https://www.nocobase.com/images/logo.png  |

After conversion to JSON:

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

### Relationship Fields

Multiple values can be separated by commas (`,` `，`) or full-width commas ( `、`).

| Department/Name | Category/Title   |
| --------------- | ---------------- |
| Development     | Category 1, Category 2 |

After conversion to JSON:

```ts
{
  "Department": [1], // 1 is the record ID for the department named "Development"
  "Category": [1, 2], // 1 and 2 are the record IDs for categories titled "Category 1" and "Category 2"
}
```

### JSON Fields

| JSON1              |
| ------------------ |
| {"key":"value"}    |

After conversion to JSON:

```ts
{
  "JSON": {"key":"value"}
}
```

### Map Geometry Fields

| Point  | Line         | Polygon           | Circle |
| ------ | ------------ | ----------------- | ------ |
| 1,2    | (1,2),(3,4)  | (1,2),(3,4),(1,2) | 1,2,3  |

After conversion to JSON:

```ts
{
  "Point": [1,2],
  "Line": [[1,2], [3,4]],
  "Polygon": [[1,2], [3,4], [1,2]],
  "Circle": [1,2,3]
}
```

## Custom Import Format

You can register custom `ValueParser` methods through the `db.registerFieldValueParsers()` method. For example:

```ts
import { BaseValueParser } from '@nocobase/database';

class PointValueParser extends BaseValueParser {
  async setValue(value) {
    if (Array isArray(value)) {
      this.value = value;
    } else if (typeof value was string) {
      this.value = value.split(',');
    } else {
      this.errors.push('Value invalid');
    }
  }
}

const db = new Database();

// For fields of type=point, the data will be parsed using PointValueParser during import
db.registerFieldValueParsers({
  point: PointValueParser,
});
```

### Example Import

| Point |
| ----- |
| 1,2   |

After conversion to JSON:

```ts
{
  "Point": [1,2]
}
```
