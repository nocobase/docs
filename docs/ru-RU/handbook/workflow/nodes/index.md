# Узлы рабочих процессов

## Обзор

Узлы представляют собой базовые элементы логической организации рабочего процесса. Каждый workflow может содержать любое количество узлов, где каждый тип узла соответствует определенной инструкции, определяющей его поведение. Конфигурация узла задает параметры этой инструкции, включая объекты данных для операций и другие аспекты его функционирования.

Триггеры рабочих процессов не считаются узлами, хотя и отображаются на диаграмме как входные точки. Это концептуально разные элементы. Подробнее см. раздел [Триггеры](../triggers/index.md).

## Классификация узлов

По функциональному назначению реализованные на данный момент узлы делятся на 5 категорий (всего 24 типа):

### 1. Управление потоком
- [Условие](./condition.md)
- [Задержка](./delay.md) (плагин @nocobase/plugin-workflow-deley)
- [Завершение процесса](./end.md)
- [JSON-маппинг переменных](./json-variable-mapping.md) (плагин @nocobase/plugin-workflow-json-variable-mapping)
- [Цикл](./loop.md) (плагин @nocobase/plugin-workflow-loop)
- [Параллельное ветвление](./parallel.md) (плагин @nocobase/plugin-workflow-parallel)
- [Пользовательская переменная](./variable.md) (плагин @nocobase/plugin-workflow-variable)
- [Вызов подпроцесса](./subflow.md) (плагин @nocobase/plugin-workflow-subflow)
- [Вывод данных](./output.md) (плагин @nocobase/plugin-workflow-subflow)

### 2. Вычисления
- [Вычисления](./calculation.md)
- [Дата и время](./date-calculation.md) (плагин @nocobase/plugin-workflow-date-calculation)
- [Динамические выражения](./dynamic-calculation.md) (плагин @nocobase/plugin-workflow-dynamic-calculation)
- [JSON-запросы](./json-query.md) (плагин @nocobase/plugin-workflow-json-query)

### 3. Операции с таблицами данных
- [Создание записи](./create.md)
- [Обновление записи](./update.md)
- [Удаление записи](./destroy.md)
- [Запрос записи](./query.md)
- [Агрегатные запросы](./aggregate.md) (плагин @nocobase/plugin-workflow-aggregate)
- [SQL-операции](./sql.md) (плагин @nocobase/plugin-workflow-sql)

### 4. Ручная обработка
- [Ручная обработка](./manual.md) (плагин @nocobase/plugin-workflow-manual)
- [Согласование](./approval.md) (плагин @nocobase/plugin-workflow-approval)

### 5. Другие расширения
- [HTTP-запрос](./request.md) (плагин @nocobase/plugin-workflow-request)
- [Ответное сообщение](./response-message.md) (плагин @nocobase/plugin-workflow-response-message)
- [JavaScript](./javascript.md) (плагин @nocobase/plugin-workflow-javascript)

