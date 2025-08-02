# ctx.action

## Обзор

После обработки запроса на операцию с ресурсом middleware [`resourceManager.middleware()`](./resource-manager#middleware), важные параметры запроса сохраняются в `ctx.action` для использования последующими middleware.

## API

### resourceName

`ctx.action.resourceName`

Имя ресурса. Может иметь две формы:

- `a` - Операция с ресурсом `a`
- `a.b` - Операция с ассоциированным объектом `b` ресурса `a`

### actionName

`ctx.action.actionName`

Название действия.

### sourceId

`ctx.action.sourceId`

Когда объект операции является ассоциированным объектом ресурса, представляет значение первичного ключа соответствующего ресурса. Например: при `resourceName` равном `a.b`, `sourceId` представляет значение первичного ключа `a`.

### params

Параметры запроса.

- Параметры URL можно получить напрямую из `ctx.action.params`

```ts
const { filterByTk } = ctx.action.params;
```

- Параметры тела запроса можно получить через `ctx.action.params.values`

### mergeParams()

Объединяет содержимое параметров с параметрами запроса.

```ts
ctx.action.mergeParams(
  {
    filter: {
      name: 'foo',
    },
    fields: ['id', 'name'],
    except: ['name'],
    sort: ['id'],
    page: 1,
    pageSize: 10,
    values: {
      name: 'foo',
    },
  },
  {
    filter: 'and',
    fields: 'union',
    except: 'union',
    sort: 'overwrite',
    page: 'overwrite',
    pageSize: 'overwrite',
    values: 'deepMerge',
  },
);

ctx.action.mergeParams(
  {
    filter: {},
  },
  {
    filter: (x, y) => {
      // ...
    },
  },
);
```

#### Сигнатура

- `mergeParams(params: ActionParams, strategies: MergeStrategies = {})`

#### Типы

```ts
export interface ActionParams {
  filterByTk?: any;
  fields?: string[];
  appends?: string[];
  except?: string[];
  whitelist?: string[];
  blacklist?: string[];
  filter?: FilterOptions;
  sort?: string[];
  page?: number;
  pageSize?: number;
  values?: any;
  [key: string]: any;
}

type MergeStrategyType =
  | 'merge'
  | 'deepMerge'
  | 'overwrite'
  | 'andMerge'
  | 'orMerge'
  | 'intersect'
  | 'union';
type MergeStrategyFunc = (x: any, y: any) => any;
export type MergeStrategy = MergeStrategyType | MergeStrategyFunc;
export interface MergeStrategies {
  [key: string]: MergeStrategy;
}
```

#### Подробности

| Свойство    | Тип                                                     | Описание                                                   |
| ----------- | ------------------------------------------------------- | --------------------------------------------------------- |
| `params`    | [`ActionParams`](#actionparams)                         | Параметры запроса                                        |
| `strategies`| [`{ [key: string]: MergeStrategies }`](#mergestrategies)| Стратегии слияния для различных полей параметров запроса |

Стандартные `strategies`:

```ts
{
  filter: 'andMerge',
  fields: 'intersect',
  appends: 'union',
  except: 'union',
  whitelist: 'intersect',
  blacklist: 'intersect',
  sort: 'overwrite',
};
```

##### ActionParams

| Свойство       | Тип         | Описание                                                                 |
| -------------- | ----------- | ----------------------------------------------------------------------- |
| `filterByTk`   | `any`       | Значение первичного ключа операционного ресурса                         |
| `filter`       | `Filter`    | Параметры фильтрации (см. [Filter Operators](./database/operators))     |
| `fields`       | `string[]`  | Получаемые поля                                                        |
| `except`       | `string[]`  | Исключаемые поля                                                       |
| `appends`      | `string[]`  | Добавляемые связанные поля                                             |
| `whitelist`    | `string[]`  | Белый список полей                                                     |
| `blacklist`    | `string[]`  | Черный список полей                                                    |
| `sort`         | `string[]`  | Параметры сортировки                                                   |
| `page`         | `number`    | Текущая страница                                                       |
| `pageSize`     | `number`    | Количество элементов данных на странице                                |
| `values`       | `any`       | Тело запроса                                                           |
| `[key: string]`| `any`       | Другие расширенные конфигурации                                        |

##### MergeStrategies

Предопределенные стратегии слияния или пользовательские функции слияния.

Предопределенные стратегии:

| Название стратегии | Описание                                       |
| ------------------ | --------------------------------------------- |
| `merge`           | `Object.assign`                               |
| `deepMerge`       | Глубокое рекурсивное слияние                  |
| `overwrite`       | Перезапись                                    |
| `andMerge`        | Слияние параметров фильтра с оператором `$and`|
| `orMerge`         | Слияние параметров фильтра с оператором `$or` |
| `intersect`       | Пересечение                                   |
| `union`           | Объединение                                   |
