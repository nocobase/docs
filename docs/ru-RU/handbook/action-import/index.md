# Импорт данных

## Обзор

## Установка

## Рекомендации по импорту

### Числовые поля

Поддерживаются числовые и процентные значения. Значения вроде `N/A` или `-` будут исключены.

| Число 1 | Процент | Число 2 | Число 3 |
|---------|---------|---------|---------|
| 123     | 25%     | N/A     | -       |

После преобразования в JSON:

```ts
{
  "Number 1": 123,
  "Percentage": 0.25,
  "Number 2": null,
  "Number 3": null,
}
```

### Булевы поля

Распознаются следующие значения (регистр в английском не учитывается):

- `Yes`, `Y`, `True`, `1`, `是`
- `No`, `N`, `False`, `0`, `否`

| Field 1 | Field 2 | Field 3 | Field 4 | Field 5 |
| ------- | ------- | ------- | ------- | ------- |
| No      | Yes     | Y       | true    | 0       |

После преобразования в JSON:

```ts
{
  "Field 1": false,
  "Field 2": true,
  "Field 3": true,
  "Field 4": true,
  "Field 5": false,
}
```

### Поля даты

| DateOnly            | Local (+08:00)      | GMT                 |
| ------------------- | ------------------- | ------------------- |
| 2023-01-18 22:22:22 | 2023-01-18 22:22:22 | 2023-01-18 22:22:22 |

После преобразования в JSON:

```ts
{
  "DateOnly": "2023-01-18T00:00:00.000Z",
  "Local (+08:00)": "2023-01-18T14:22:22.000Z",
  "GMT": "2023-01-18T22:22:22.000Z",
}
```

### Поля выбора (Select Fields)

Значения и метки опций можно использовать взаимозаменяемо. Несколько опций можно разделять запятыми (`\,`, `，`) или полноширинными запятыми (`、`).

Например, если поле `Priority` имеет следующие опции:

| Option Value | Option Label |
| ------------ | ------------ |
| low          | Low          |
| medium       | Medium       |
| high         | High         |

Оба варианта — и значение, и метка — могут использоваться в качестве входных данных.

| Priority |
| -------- |
| High     |
| low      |

После преобразования в JSON:

```ts
[{ Priority: 'high' }, { Priority: 'low' }];
```

### Поля китайских административных регионов

| Region 1       | Region 2       |
| -------------- | -------------- |
| Beijing/City   | Tianjin/City   |

После преобразования в JSON:

```ts
{
  "Region 1": ["11", "1101"],
  "Region 2": ["12", "1201"]
}
```

### Поля вложений (Attachment Fields)

| Attachment                                |
| ----------------------------------------- |
| https://www.nocobase.com/images/logo.png  |

После преобразования в JSON:

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

### Поля связей (Relationship Fields)

Несколько значений могут быть разделены запятой (`,` `，`) или полной запятой (`、`).

| Department/Name | Category/Title   |
| --------------- | ---------------- |
| Development     | Category 1, Category 2 |

После преобразования в JSON:

```ts
{
  "Department": [1], // 1 is the record ID for the department named "Development"
  "Category": [1, 2], // 1 and 2 are the record IDs for categories titled "Category 1" and "Category 2"
}
```

### Поля JSON (JSON Fields)

| JSON1              |
| ------------------ |
| {"key":"value"}    |

После преобразования в JSON:

```ts
{
  "JSON": {"key":"value"}
}
```

### Поля геометрии карты (Map Geometry Fields)

| Point  | Line         | Polygon           | Circle |
| ------ | ------------ | ----------------- | ------ |
| 1,2    | (1,2),(3,4)  | (1,2),(3,4),(1,2) | 1,2,3  |

После преобразования в JSON:

```ts
{
  "Point": [1,2],
  "Line": [[1,2], [3,4]],
  "Polygon": [[1,2], [3,4], [1,2]],
  "Circle": [1,2,3]
}
```

## Пользовательский формат импорта

Вы можете зарегистрировать пользовательские методы `ValueParser` с помощью метода `db.registerFieldValueParsers()`. Например:

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

### Пример импорта

| Point |
| ----- |
| 1,2   |

После преобразования в JSON:

```ts
{
  "Point": [1,2]
}
```
