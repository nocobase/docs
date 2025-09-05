# Хранилище (Storage)

## Обзор

Класс `Storage` используется для хранения данных на стороне клиента. По умолчанию применяется `localStorage`.

### Базовое использование

```ts
export abstract class Storage {
  abstract clear(): void;
  abstract getItem(key: string): string | null;
  abstract removeItem(key: string): void;
  abstract setItem(key: string, value: string): void;
}

export class CustomStorage extends Storage {
  // ...
}
```

## Методы класса

### `setItem()`

Сохраняет данные в хранилище.

#### Сигнатура

- `setItem(key: string, value: string): void`

### `getItem()`

Извлекает данные из хранилища по ключу.

#### Сигнатура

- `getItem(key: string): string | null`

### `removeItem()`

Удаляет данные из хранилища по указанному ключу.

#### Сигнатура

- `removeItem(key: string): void`

### `clear()`

Очищает всё содержимое хранилища.

#### Сигнатура

- `clear(): void`
