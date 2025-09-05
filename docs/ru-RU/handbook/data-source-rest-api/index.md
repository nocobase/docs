# Источник данных REST API

<PluginInfo commercial="true" name="data-source-rest-api"></PluginInfo>

## Введение

Этот плагин позволяет вам легко интегрировать данные из источников REST API.

## Установка

Как коммерческий плагин, он требует загрузки и активации через менеджер плагинов.

![20240323162741](https://static-docs.nocobase.com/20240323162741.png)

## Добавление источника REST API

После активации плагина вы можете добавить источник REST API, выбрав его в раскрывающемся меню Добавить новый в разделе управления источником данных.

![20240721171420](https://static-docs.nocobase.com/20240721171420.png)

### Настройка источника REST API

![20240721171507](https://static-docs.nocobase.com/20240721171507.png)

## Добавление коллекции

В NocoBase ресурс RESTful сопоставляется с коллекцией, например ресурсом Users.

```bash
GET /users
POST /users
GET /users/1
PUT /users/1
DELETE /users/1
```

Эти конечные точки API отображаются в NocoBase следующим образом:

```bash
GET /users:list
POST /users:create
POST /users:get?filterByTk=1
POST /users:update?filterByTk=1
POST /users:destroy?filterByTk=1
```

Полное руководство по спецификациям проектирования API NocoBase см. в документации API.

![20240716213344](https://static-docs.nocobase.com/20240716213344.png)

Подробную информацию см. в главе «NocoBase API - Core».

![20240716213258](https://static-docs.nocobase.com/20240716213258.png)

Конфигурация коллекции для источника данных REST API включает следующее:

### Список

Сопоставьте интерфейс для просмотра списка ресурсов.

![20240716211351](https://static-docs.nocobase.com/20240716211351.png)

### Получить

Сопоставьте интерфейс для просмотра сведений о ресурсах.

![20240716211532](https://static-docs.nocobase.com/20240716211532.png)

### Создать

Сопоставить интерфейс для создания ресурса.

![20240716211634](https://static-docs.nocobase.com/20240716211634.png)

### Обновить

Сопоставить интерфейс для обновления ресурса.

![20240716211733](https://static-docs.nocobase.com/20240716211733.png)

### Уничтожить

Сопоставить интерфейс для удаления ресурса.

![20240716211808](https://static-docs.nocobase.com/20240716211808.png)

Необходимо настроить интерфейсы List и Get.
## Отладка API

### Интеграция параметров запроса

Пример: настройка параметров пагинации для API List.

Если сторонний API не поддерживает пагинацию изначально, реализация пагинации будет основана на извлеченных данных списка.

![20241121205229](https://static-docs.nocobase.com/20241121205229.png)

Примечание: будут работать только переменные, добавленные в API.

| Third-party API params name | NocoBase params             |
| --------------------------- | --------------------------- |
| page                        | {{request.params.page}}     |
| limit                       | {{request.params.pageSize}} |

Вы можете легко отладить API, нажав «Попробовать».

![20241121210320](https://static-docs.nocobase.com/20241121210320.png)

<video width="100%" height="440" controls>
<source src="https://static-docs.nocobase.com/20241121211034.mp4" type="video/mp4">
</video>

### Преобразование формата ответа

Формат ответа стороннего API может не соответствовать стандарту NocoBase, и его необходимо преобразовать, прежде чем он сможет корректно отображаться на внешнем интерфейсе.

![20241121214638](https://static-docs.nocobase.com/20241121214638.png)

Настройте правила преобразования на основе формата ответа стороннего API, чтобы гарантировать соответствие вывода стандарту NocoBase.

![20241121215100](https://static-docs.nocobase.com/20241121215100.png)

### Обзор процесса отладки

![20250418085020](https://static-docs.nocobase.com/20250418085020.png)

## Переменные

Источник данных API REST поддерживает три типа переменных для интеграции API:

- Пользовательские переменные источника данных
- Переменные запроса NocoBase
- Сторонние переменные ответа

### Пользовательский источник данных Переменные

![20240716221937](https://static-docs.nocobase.com/20240716221937.png)

![20240716221858](https://static-docs.nocobase.com/20240716221858.png)

### Запрос NocoBase

- Параметры: параметры запроса URL (параметры поиска), которые различаются в зависимости от интерфейса.
- Заголовки: пользовательские заголовки запроса, в первую очередь предоставляющие определенную информацию X-от NocoBase.
- Тело: тело запроса.
- Токен: токен API для текущего запроса NocoBase.

![20240716222042](https://static-docs.nocobase.com/20240716222042.png)

### Ответы третьих лиц

В настоящее время доступно только тело ответа.

![20240716222303](https://static-docs.nocobase.com/20240716222303.png)

Ниже приведены переменные, доступные для каждого интерфейса:

### List (Список)

| Parameter               | Description                                                |
| ----------------------- | ---------------------------------------------------------- |
| request.params.page     | Current page                                               |
| request.params.pageSize | Number of items per page                                   |
| request.params.filter   | Filter criteria (must meet NocoBase Filter format)         |
| request.params.sort     | Sorting criteria (must meet NocoBase Sort format)          |
| request.params.appends  | Fields to load on demand, typically for association fields |
| request.params.fields   | Fields to include (whitelist)                              |
| request.params.except   | Fields to exclude (blacklist)                              |

### Get (Получить)

| Parameter                 | Description                                                |
| ------------------------- | ---------------------------------------------------------- |
| request.params.filterByTk | Required, typically the current record ID                  |
| request.params.filter     | Filter criteria (must meet NocoBase Filter format)         |
| request.params.appends    | Fields to load on demand, typically for association fields |
| request.params.fields     | Fields to include (whitelist)                              |
| request.params.except     | Fields to exclude (blacklist)                              |

### Create (Создать)

| Parameter                | Description               |
| ------------------------ | ------------------------- |
| request.params.whiteList | Whitelist                 |
| request.params.blacklist | Blacklist                 |
| request.body             | Initial data for creation |

### Update (Обновить)

| Parameter                 | Description                                        |
| ------------------------- | -------------------------------------------------- |
| request.params.filterByTk | Required, typically the current record ID          |
| request.params.filter     | Filter criteria (must meet NocoBase Filter format) |
| request.params.whiteList  | Whitelist                                          |
| request.params.blacklist  | Blacklist                                          |
| request.body              | Data for update                                    |

### Destroy (Удалить)

| Parameter                 | Description                               |
| ------------------------- | ----------------------------------------- |
| request.params.filterByTk | Required, typically the current record ID |
| request.params.filter     | Filtering conditions                      |

## Конфигурация поля

Метаданные поля (Поля) извлекаются из данных интерфейса CRUD адаптированного ресурса для использования в качестве полей коллекции.

![20250418085048](https://static-docs.nocobase.com/20250418085048.png)

Извлечение метаданных поля.

![20241121230436](https://static-docs.nocobase.com/20241121230436.png)

Поле и предварительный просмотр.

![20240716224403](https://static-docs.nocobase.com/20240716224403.png)

Изменение полей (аналогично другим источникам данных).

![20240716224704](https://static-docs.nocobase.com/20240716224704.png)

## Добавление блоков источника данных REST API

После настройки коллекции вы можете добавлять блоки в интерфейс.

![20240716225120](https://static-docs.nocobase.com/20240716225120.png)
