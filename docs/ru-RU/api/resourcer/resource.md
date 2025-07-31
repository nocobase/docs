# Ресурс

Ресурс используется для определения экземпляра ресурса. Экземпляры ресурсов, управляемые `resourcer`, могут быть доступны через HTTP-запросы.

## Конструктор

Создаёт экземпляр ресурса. Обычно используется не напрямую, а через вызов метода `define()` у `resourcer`.

### Сигнатура

```js
constructor(options: ResourceOptions, resourcer: Resourcer)
```

### Параметры

| Имя | Тип | По умолчанию | Описание |
|-----|-----|--------------|----------|
| `options.name` | `string` | — | Название ресурса, соответствует адресу ресурса в маршруте URL |
| `options.type` | `string` | `'single'` | Тип ресурса. Допустимые значения: `'single'`, `'hasOne'`, `'hasMany'`, `'belongsTo'`, `'belongsToMany'` |
| `options.actions` | `Object` | — | Список действий, которые можно выполнять с ресурсом. Подробности в примере |
| `options.middlewares` | `MiddlewareType \| MiddlewareType[]` | — | Список мидлваров, применяемых ко всем операциям данного ресурса. Подробности в примере |
| `options.only` | `ActionName[]` | `[]` | Белый список глобальных действий. Если массив не пуст, доступны только действия, указанные в нём |
| `options.except` | `ActionName[]` | `[]` | Чёрный список глобальных действий. Если массив не пуст, все действия, кроме указанных, будут доступны |
| `resourcer` | `Resourcer` | — | Экземпляр `resourcer` |

### Пример

```js
app.resourcer.define({
  name: 'books',
  actions: {
    // Расширенное действие
    publish(ctx, next) {
      ctx.body = 'ok';
    },
  },
  middleware: [
    // Расширенный мидлвар
    async (ctx, next) => {
      await next();
    },
  ],
});
```

## Элементы экземпляра

### `options`

Настройки текущего ресурса.

### `resourcer`

Экземпляр `resourcer`, которому принадлежит данный ресурс.

### `middlewares`

Зарегистрированные мидлвары.

### `actions`

Таблица зарегистрированных действий.

### `except`

Действия, исключённые из доступа.

## Методы экземпляра

### `getName()`

Возвращает имя текущего ресурса.

#### Сигнатура

```js
getName(): string
```

#### Пример

```js
const resource = app.resourcer.define({
  name: 'books',
});

resource.getName(); // 'books'
```

### `getAction()`

Возвращает действие с указанным именем.

#### Сигнатура

```js
getAction(name: string): Action
```

#### Параметры

| Имя | Тип | По умолчанию | Описание |
|-----|-----|--------------|----------|
| `name` | `string` | — | Название действия |

#### Пример

```js
const resource = app.resourcer.define({
  name: 'books',
  actions: {
    publish(ctx, next) {
      ctx.body = 'ok';
    },
  },
});

resource.getAction('publish'); // [Function: publish]
```
