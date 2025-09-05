### **Журналы (Логи)**

#### **Введение**
Журналы — важный инструмент для поиска и устранения проблем в системе. Серверные логи NocoBase в основном включают журналы запросов к интерфейсам и системные операционные логи. Поддерживаются настройки уровня логирования, стратегии ротации, размера, формата вывода и другие параметры. В этом документе описаны основные сведения о серверных логах NocoBase, а также способы использования плагина логирования для архивации и скачивания логов.

---

### **Настройка логов**
Параметры, связанные с логами (например, уровень логирования, способ вывода, формат отображения), можно настроить с помощью [переменных окружения](../../welcome/getting-started/env.md#logger_transport).

---

### **Форматы логов**
NocoBase поддерживает четыре различных формата логов.

#### `console`
Формат по умолчанию в режиме разработки. Сообщения отображаются с цветовой подсветкой.

```
2023-12-30 22:40:06 [info ] response                                     method=GET path=/api/uiSchemas:getJsonSchema/nocobase-admin-menu res={ "status ":200} action={ "actionName ": "getJsonSchema ", "resourceName ": "uiSchemas ", "params ":{ "filterByTk ": "nocobase-admin-menu ", "resourceName ": "uiSchemas ", "resourceIndex ": "nocobase-admin-menu ", "actionName ": "getJsonSchema "}} userId=1 status=200 cost=5 app=main reqId=ccf4e3bd-beb0-4350-af6e-b1fc1d9b6c3f
2023-12-30 22:43:12 [debug] Database dialect: mysql                      module=application metho d=install app=main reqId=31ffa8b5-f377-456b-a295-0c8a28938228
2023-12-30 22:43:12 [warn ] app is installed                             module=application method=install app=main re qId=31ffa8b5-f377-456b-a295-0c8a28938228
```

#### `json`
Формат по умолчанию в производственной среде.

```json
{
   "level ":  "info ",
   "timestamp ":  "2023-12-26 22:04:56 ",
   "reqId ":  "7612ef42-58e8-4c35-bac2-2e6c9d8ec96e ",
   "message ":  "response ",
   "method ":  "POST ",
   "path ":  "/api/authenticators:publicList ",
   "res ": {  "status ": 200 },
   "action ": {
     "actionName ":  "publicList ",
     "resourceName ":  "authenticators ",
     "params ": {  "resourceName ":  "authenticators ",  "actionName ":  "publicList " }
  },
   "status ": 200,
   "cost ": 16
}
```

#### `logfmt`
Дополнительную информацию можно найти по адресу: https://brandur.org/logfmt

```
level=info timestamp=2023-12-21 14:18:02 reqId=8b59a40d-68ee-4c97-8001-71a47a92805a
message=response method=POST path=/api/authenticators:publicList res={ "status ":200}
action={ "actionName ": "publicList ", "resourceName ": "authenticators ", "params ":{ "resourceName ": "authenticators ", "actionName ": "publicList "}}
userId=undefined status=200 cost=14
```

#### `delimiter`
Разделитель — символ `|`.

```
info|2023-12-26 22:07:09|13cd16f0-1568-418d-ac37-6771ee650e14|response|POST|/api/authenticators:publicList|{ "status ":200}|{ "actionName ": "publicList ", "resourceName ": "authenticators ", "params ":{ "resourceName ": "authenticators ", "actionName ": "publicList "}}||200|25
```

---

### **Каталог логов**
Основная структура каталога с файлами логов NocoBase:

- `storage/logs` — каталог для вывода логов
  - `main` — основное приложение
    - `request_YYYY-MM-DD.log` — лог запросов
    - `system_YYYY-MM-DD.log` — системный лог
    - `system_error_YYYY-MM-DD.log` — лог системных ошибок
    - `sql_YYYY-MM-DD.log` — лог выполнения SQL-запросов
    - ...
  - `sub-app` — имя подприложения
    - `request_YYYY-MM-DD.log`
    - ...

---

### **Файлы логов**

#### **Лог запросов**
`request_YYYY-MM-DD.log` — журналы запросов и ответов к интерфейсам.

| Поле       | Описание |
|------------|---------|
| level      | Уровень логирования |
| timestamp  | Время записи лога в формате `YYYY-MM-DD hh:mm:ss` |
| message    | `request` или `response` |
| userId     | Присутствует только в `response` |
| method     | Метод запроса |
| path       | Путь запроса |
| req / res  | Содержимое запроса / ответа |
| action     | Запрашиваемые ресурсы и параметры |
| status     | Код статуса ответа |
| cost       | Время выполнения запроса (в миллисекундах) |
| app        | Имя текущего приложения |
| reqId      | Идентификатор запроса |

:::info{title=Примечание}
`reqId` передаётся на фронтенд через заголовок ответа `X-Request-Id`.
:::

---

#### **Системный лог**
`system_YYYY-MM-DD.log` — логи работы приложения, промежуточного ПО (middleware), плагинов и других системных операций. Логи уровня `error` дополнительно записываются в отдельный файл `system_error_YYYY-MM-DD.log`.

| Поле        | Описание |
|-------------|---------|
| level       | Уровень логирования |
| timestamp   | Время записи лога в формате `YYYY-MM-DD hh:mm:ss` |
| message     | Сообщение лога |
| module      | Модуль |
| submodule   | Подмодуль |
| method      | Вызываемый метод |
| meta        | Дополнительная информация (в формате JSON) |
| app         | Имя текущего приложения |
| reqId       | Идентификатор запроса |

---

#### **Лог выполнения SQL**
`sql_YYYY-MM-DD.log` — лог выполнения SQL-запросов к базе данных. Для операций `INSERT INTO` сохраняются только первые 2000 символов.

| Поле        | Описание |
|-------------|---------|
| level       | Уровень логирования |
| timestamp   | Время записи лога в формате `YYYY-MM-DD hh:mm:ss` |
| sql         | SQL-запрос |
| app         | Имя текущего приложения |
| reqId       | Идентификатор запроса |

---

### **Архивация и скачивание логов**
1. Перейдите на страницу управления логами.
2. Выберите нужные файлы логов для скачивания.
3. Нажмите кнопку загрузки.

![Пример интерфейса](https://static-docs.nocobase.com/2024-04-10_10-50-50.png)
