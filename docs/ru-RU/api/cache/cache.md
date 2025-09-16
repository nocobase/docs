# Кэш (Cache)

## Основные методы

Вы можете ознакомиться с документацией [node-cache-manager](https://github.com/node-cache-manager/node-cache-manager).

- `get()` — получить значение по ключу
- `set()` — установить значение по ключу
- `del()` — удалить значение по ключу
- `reset()` — очистить весь кэш
- `wrap()` — получить значение из кэша или выполнить функцию и закэшировать результат
- `mset()` — массовая установка значений (множественная запись)
- `mget()` — массовое получение значений (множественное чтение)
- `mdel()` — массовое удаление значений по ключам
- `keys()` — получить список всех ключей в кэше
- `ttl()` — получить оставшееся время жизни (в миллисекундах) для ключа

## Другие методы

### `wrapWithCondition()`

Аналогичен методу `wrap()`, но позволяет решить, использовать ли кэширование, на основе заданных условий.

```ts
async wrapWithCondition<T>(
  key: string,
  fn: () => T | Promise<T>,
  options?: {
    // Внешний параметр, управляющий использованием кэша
    useCache?: boolean;
    // Определяет, следует ли кэшировать результат, на основе возвращаемых данных
    isCacheable?: (val: unknown) => boolean | Promise<boolean>;
    ttl?: Milliseconds;
  },
): Promise<T>
```

### `setValueInObject()`

Изменяет значение определённого поля в объекте, хранящемся в кэше.

```ts
async setValueInObject(key: string, objectKey: string, value: unknown)
```

### `getValueInObject()`

Получает значение определённого поля из объекта, хранящегося в кэше.

```ts
async getValueInObject(key: string, objectKey: string)
```

### `delValueInObject()`

Удаляет определённое поле из объекта, хранящегося в кэше.

```ts
async delValueInObject(key: string, objectKey: string)
```
