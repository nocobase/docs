# @nocobase/actions

## Обзор

Пакет `@nocobase/actions` инкапсулирует часто используемые CRUD-методы. При регистрации в [ResourceManager](./resourcer/resource-manager) автоматически добавляет CRUD-интерфейсы к системным ресурсам.

### Базовое использование

```typescript
import * as actions from `@nocobase/actions`;

const resourceManager = new ResourceManager({
  // ...опции
});

resourceManager.registerActionHandlers(actions);
```

## Методы действий

### create

Создает ресурс. `POST /api/<ресурс>:create`.

```shell
curl "http://localhost:13000/api/users:create" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin"}'
```

#### Тело запроса

| Параметр       | Тип  | Описание                                   |
|----------------|------|--------------------------------------------|
| `[key: string]`| `any`| Пары ключ-значение полей ресурса           |

### list

Получает список ресурсов. `GET /api/<ресурс>:list`.

```shell
curl -X GET http://localhost:13000/api/users:list
```

#### Параметры

| Параметр  | Тип       | Описание                                                       | По умолчанию |
|-----------|-----------|----------------------------------------------------------------|--------------|
| `filter`  | `Filter`  | Параметры фильтрации, см. [Операторы фильтрации](./database/operators) | -            |
| `fields`  | `string[]`| Получаемые поля                                                | -            |
| `except`  | `string[]`| Исключаемые поля                                               | -            |
| `appends` | `string[]`| Добавляемые связанные поля                                     | -            |
| `sort`    | `string[]`| Параметры сортировки                                           | -            |
| `paginate`| `boolean` | Использовать ли пагинацию                                      | `true`       |
| `page`    | `number`  | Номер текущей страницы                                         | `1`          |
| `pageSize`| `number`  | Количество элементов на странице                               | `20`         |

### get

Получает конкретный ресурс. `GET /api/<ресурс>:get`.

```shell
curl -X GET http://localhost:13000/api/users:get?filterByTk=1
```

#### Параметры

| Параметр    | Тип               | Описание                                                       |
|-------------|-------------------|----------------------------------------------------------------|
| `filterByTk`| `number \| string`| Фильтрация по первичному ключу                                 |
| `filter`    | `Filter`          | Параметры фильтрации, см. [Операторы фильтрации](./database/operators) |
| `fields`    | `string[]`        | Получаемые поля                                                |
| `except`    | `string[]`        | Исключаемые поля                                               |
| `appends`   | `string[]`        | Добавляемые связанные поля                                     |

### update

Обновляет один или несколько ресурсов. `PUT /api/<ресурс>:update`.

```shell
curl "http://localhost:13000/api/users:update?filterByTk=1" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d '{"username": "admin"}'
```

#### Параметры

| Параметр    | Тип               | Описание                                                       |
|-------------|-------------------|----------------------------------------------------------------|
| `filter`    | `Filter`          | Параметры фильтрации, см. [Операторы фильтрации](./database/operators) |
| `filterByTk`| `number \| string`| Фильтрация по первичному ключу                                 |

*Примечание: Должен быть указан хотя бы один из параметров `filter` или `filterByTk`.*

#### Тело запроса

| Параметр       | Тип  | Описание                                   |
|----------------|------|--------------------------------------------|
| `[key: string]`| `any`| Пары ключ-значение полей ресурса           |

### destroy

Удаляет один или несколько ресурсов. `DELETE /api/<ресурс>:destroy`.

```shell
curl -X DELETE http://localhost:13000/api/users:destroy?filterByTk=1
```

#### Параметры

| Параметр    | Тип               | Описание                                                       |
|-------------|-------------------|----------------------------------------------------------------|
| `filter`    | `Filter`          | Параметры фильтрации, см. [Операторы фильтрации](./database/operators) |
| `filterByTk`| `number \| string`| Фильтрация по первичному ключу                                 |

*Примечание: Должен быть указан хотя бы один из параметров `filter` или `filterByTk`.*

### firstOrCreate

Получает или создает ресурс. `POST /api/<ресурс>:firstOrCreate`.

```shell
curl "http://localhost:13000/api/users:firstOrCreate?filterKeys[]=username" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "nickname": "Admin"}'
```

#### Параметры

| Параметр    | Тип       | Описание                                                |
|-------------|-----------|---------------------------------------------------------|
| `filterKeys`| `string[]`| Поля в теле запроса для поиска существующих ресурсов    |

#### Тело запроса

| Параметр       | Тип  | Описание                                   |
|----------------|------|--------------------------------------------|
| `[key: string]`| `any`| Пары ключ-значение полей ресурса           |

### updateOrCreate

Обновляет или создает ресурс. `POST /api/<ресурс>:updateOrCreate`.

```shell
curl "http://localhost:13000/api/users:updateOrCreate?filterKeys[]=username" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "nickname": "Admin"}'
```

#### Параметры

| Параметр    | Тип       | Описание                                                |
|-------------|-----------|---------------------------------------------------------|
| `filterKeys`| `string[]`| Поля в теле запроса для поиска существующих ресурсов    |

#### Тело запроса

| Параметр       | Тип  | Описание                                   |
|----------------|------|--------------------------------------------|
| `[key: string]`| `any`| Пары ключ-значение полей ресурса           |

### move

Перемещает ресурсы, изменяя порядок. Обычно используется для сортировки перетаскиванием на страницах. `POST /api/<ресурс>:move`.

```shell
curl -X POST "http://localhost:13000/api/users:move?sourceId=1&targetId=2"
```

#### Параметры

| Параметр     | Тип                       | Описание                                                 | По умолчанию |
|--------------|---------------------------|----------------------------------------------------------|--------------|
| `sourceId`   | `targetKey`               | ID элемента для перемещения                              | -            |
| `targetId`   | `targetKey`               | ID элемента для обмена позициями                         | -            |
| `sortField`  | `string`                  | Название поля, где хранится сортировка                   | `sort`       |
| `targetScope`| `string`                  | Область сортировки (ресурс может сортироваться по разным областям) | -            |
| `sticky`     | `boolean`                 | Закреплять ли перемещаемый элемент                       | -            |
| `method`     | `insertAfter` \| `prepend`| Метод вставки: вставить после или перед                  | -            |

### set

Устанавливает ассоциированные объекты для ресурса. `POST /api/<ресурс>/<ключ_ресурса>/<ассоциация>:set`.

```shell
curl "http://localhost:13000/api/users/1/roles:set" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin", "member"]'
```

#### Тело запроса

- `TargetKey | TargetKey[]` - Массив первичных ключей ассоциированных объектов.

### add

Добавляет ассоциированные объекты к ресурсу. `POST /api/<ресурс>/<ключ_ресурса>/<ассоциация>:add`.

```shell
curl "http://localhost:13000/api/users/1/roles:add" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin"]'
```

#### Тело запроса

- `TargetKey | TargetKey[]` - Массив первичных ключей ассоциированных объектов.

### remove

Удаляет ассоциированные объекты из ресурса. `POST /api/<ресурс>/<ключ_ресурса>/<ассоциация>:remove`.

```shell
curl "http://localhost:13000/api/users/1/roles:remove" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin"]'
```

#### Тело запроса

- `TargetKey | TargetKey[]` - Массив первичных ключей ассоциированных объектов.

### toggle

Переключает ассоциированные объекты для ресурса - добавляет, если их нет, или удаляет, если они есть. `POST /api/<ресурс>/<ключ_ресурса>/<ассоциация>:toggle`.

```shell
curl "http://localhost:13000/api/users/1/roles:toggle" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin", "member"]'
```
