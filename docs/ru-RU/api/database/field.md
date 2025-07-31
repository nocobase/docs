# Поле (Field)

## Обзор

Абстрактный класс для управления полями таблицы данных. Является базовым классом для всех типов полей. 

См. [Расширение типов полей](/development/server/collections-fields#extended-field-types) для создания пользовательских полей.

## Конструктор

Обычно не вызывается напрямую, а используется через `db.collection({ fields: [] })`.

**Сигнатура**
```typescript
constructor(options: FieldOptions, context: FieldContext)
```

**Параметры**

| Параметр           | Тип            | Описание                          |
|--------------------|----------------|-----------------------------------|
| `options.name`     | `string`       | Название поля                    |
| `options.type`     | `string`       | Тип поля (должен быть зарегистрирован) |
| `context.database` | `Database`     | Экземпляр базы данных            |
| `context.collection` | `Collection` | Экземпляр коллекции              |

## Свойства экземпляра

- `name` - Название поля
- `type` - Тип поля  
- `dataType` - Тип данных поля
- `options` - Параметры конфигурации
- `context` - Контекст поля

## Методы конфигурации

### `on()`
Подписка на события таблицы.

```typescript
on(eventName: string, listener: (...args: any[]) => void)
```

### `off()`
Отписка от событий.

```typescript 
off(eventName: string, listener: (...args: any[]) => void)
```

### `bind()`
Вызывается при добавлении поля в таблицу.

```typescript
bind()
```

### `unbind()`
Вызывается при удалении поля.

```typescript
unbind() 
```

### `get()`
Получить значение параметра.

```typescript
get(key: string): any
```

### `merge()`
Объединить параметры.

```typescript
merge(options: { [key: string]: any }): void
```

### `remove()`
Удалить поле (только из памяти).

```typescript
remove()
```

## Методы работы с БД

### `removeFromDb()`
Удалить поле из БД.

```typescript
removeFromDb(options?: Transactionable): Promise<void>
```

### `existsInDb()`
Проверить наличие поля в БД.

```typescript
existsInDb(options?: Transactionable): Promise<boolean>
```

## Встроенные типы полей

### Базовые типы
- `'boolean'` - Логический тип
- `'integer'` - Целое число (32 бита)
- `'bigInt'` - Длинное целое (64 бита)  
- `'double'` - Число с плавающей точкой
- `'string'` - Строка
- `'text'` - Текст
- `'date'` - Дата
- `'json'` - JSON

### Специальные типы NocoBase
- `'password'` - Пароль (шифрование scrypt)
- `'formula'` - Формула (mathjs)
- `'radio'` - Радиокнопка (только одно true)
- `'sort'` - Сортировка  
- `'uid'` - Короткий случайный ID

### Типы связей
- `'belongsTo'` - Принадлежность (многие к одному)
- `'hasOne'` - Имеет один (один к одному)
- `'hasMany'` - Имеет много (один ко многим)  
- `'belongsToMany'` - Многие ко многим

**Пример связи:**
```typescript
// Пост принадлежит автору
{
  type: 'belongsTo',
  name: 'author',
  target: 'users'
}

// Пост имеет много тегов
{
  type: 'belongsToMany', 
  name: 'tags',
  through: 'postsTags'
}
```
