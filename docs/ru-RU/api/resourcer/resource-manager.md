# ResourceManager

## Обзор

`ResourceManager` - это модуль управления ресурсами в NocoBase, используемый для определения ресурсов и регистрации методов операций с ними.

## Методы класса

### `define()`

Определяет ресурс.

```ts
app.resourceManager.define({
  name: 'auth',
  actions: {
    check: async (ctx, next) => {
      // ...
      await next();
    },
  },
});
```

#### Сигнатура

- `define(options: ResourceOptions): Resource`

#### Типы

```ts
export interface ResourceOptions {
  name: string;
  type?: ResourceType;
  actions?: {
    [key: string]: ActionType;
  };
  only?: Array<ActionName>;
  except?: Array<ActionName>;
  middleware?: MiddlewareType;
  middlewares?: MiddlewareType;
}

export type ResourceType =
  | 'single'
  | 'hasOne'
  | 'hasMany'
  | 'belongsTo'
  | 'belongsToMany';

export type ActionType = HandlerType | ActionOptions;
export type HandlerType = (
  ctx: ResourcerContext,
  next: () => Promise<any>,
) => any;
export interface ActionOptions {
  values?: any;
  fields?: string[];
  appends?: string[];
  except?: string[];
  whitelist?: string[];
  blacklist?: string[];
  filter?: FilterOptions;
  sort?: string[];
  page?: number;
  pageSize?: number;
  maxPageSize?: number;
  middleware?: MiddlewareType;
  middlewares?: MiddlewareType;
  handler?: HandlerType;
  [key: string]: any;
}
```

#### Подробности

##### ResourceOptions

| Свойство      | Тип                                           | Описание            | По умолчанию |
| ------------- | --------------------------------------------- | ------------------- | ------------ |
| `name`        | `string`                                      | Имя ресурса         | -            |
| `type`        | `ResourceType`                                | Тип ресурса         | `single`     |
| `actions`     | [`{ [key: string]: ActionType }`](#actiontype)| Действия            | -            |
| `only`        | `ActionName[]`                                | Белый список действий | -            |
| `except`      | `ActionName[]`                                | Черный список действий | -            |
| `middleware`  | `MiddlewareType`                              | Middleware          | -            |
| `middlewares` | `MiddlewareType`                              | Middlewares         | -            |

##### ActionType

Существует два типа методов действий:

- `HandlerType`

Определяет метод операции напрямую через middleware. Пример:

```ts
app.resourceManager.define({
  name: 'users',
  actions: {
    updateProfile: async (ctx, next) => {
      // ...
      await next();
    },
  },
});
```

- `ActionOptions`

Используется для переопределения параметров запроса существующей операции. Пример:

```ts
app.resourceManager.define({
  name: 'users',
  actions: {
    list: {
      fields: [],
      filter: {},
      // ...
    },
  },
});
```

| Свойство       | Тип             | Описание                                                                 |
| -------------- | --------------- | ----------------------------------------------------------------------- |
| `values`       | `any`           | Значения по умолчанию для запроса действия                              |
| `filter`       | `Filter`        | Параметры фильтрации (см. [Filter Operators](../database/operators.md)) |
| `fields`       | `string[]`      | Получаемые поля                                                        |
| `except`       | `string[]`      | Исключаемые поля                                                       |
| `appends`      | `string[]`      | Добавляемые связанные поля                                             |
| `whitelist`    | `string[]`      | Белый список полей                                                     |
| `blacklist`    | `string[]`      | Черный список полей                                                    |
| `sort`         | `string[]`      | Параметры сортировки                                                   |
| `page`         | `number`        | Текущая страница                                                       |
| `pageSize`     | `number`        | Количество элементов на странице                                       |
| `maxPageSize`  | `number`        | Максимальное количество элементов на странице                          |
| `middleware`   | `MiddlewareType`| Middleware                                                             |
| `middlewares`  | `MiddlewareType`| Middlewares                                                            |
| `handler`      | `HandlerType`   | Метод выполнения действия                                              |
| `[key: string]`| `any`           | Другие расширенные конфигурации                                        |

### `registerActionHandlers()`

Регистрирует методы действий.

#### Сигнатура

- `registerActionHandler(name: ActionName, handler: HandlerType)`

#### Типы

```ts
export type DefaultActionType =
  | 'list'
  | 'create'
  | 'get'
  | 'update'
  | 'destroy'
  | 'set'
  | 'add'
  | 'remove';
export type ActionName = DefaultActionType | Omit<string, DefaultActionType>;

export type HandlerType = (
  ctx: ResourcerContext,
  next: () => Promise<any>,
) => any;
```

#### Подробности

| Свойство  | Тип          | Описание                                                                                                                       |
| --------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `name`    | `ActionName` | Имя действия:<br />1. Как обычная строка - регистрирует действия для всех ресурсов<br />2. В форме `<ресурс>:<действие>` - регистрирует действия для конкретных ресурсов |
| `handler` | `HandlerType`| Middleware для действия                                                                                                       |

### `isDefined()`

Проверяет, определен ли ресурс.

#### Сигнатура

- `isDefined(name: string)`

#### Подробности

| Свойство | Тип     | Описание   |
| -------- | ------- | ---------- |
| `name`   | `string`| Имя ресурса |

### `import()`

Загружает конфигурации ресурсов из указанной директории.

```ts
// ./resources/demo.ts
export default {
  name: 'demo',
  actions: {
    async list(ctx, next) {
      // ...
      await next();
    },
  },
};

const resourceManager = new ResourceManager();
await resourceManager.import({
  directory: path.resolve(__dirname, 'resources'),
});
```

#### Сигнатура

- `import(options: ImportOptions): Promise<Map<string, Resource>>`

#### Типы

```ts
export interface ImportOptions {
  directory: string;
  extensions?: string[];
}
```

#### Подробности

| Свойство     | Тип       | Описание               | Значение по умолчанию   |
| ------------ | --------- | ---------------------- | ----------------------- |
| `directory`  | `string`  | Путь к директории      | -                       |
| `extensions` | `string[]`| Опционально, расширения файлов | `['js', 'ts', 'json']` |

### `use()`

Добавляет middleware для `ResourceManager`.

```ts
resourceManager.use(async () => {
  return async function (ctx, next) {
    // ...
    await next();
  };
});
```

#### Сигнатура

- `use(middlewares: HandlerType | HandlerType[], options: ToposortOptions = {})`

#### Подробности

См. [Middleware](../../development/server/middleware.md).

### `middleware()`

Middleware для `ResourceManager`, обрабатывает параметры запроса (см. [ctx.action](./action.md)) и выполняет методы операций.
