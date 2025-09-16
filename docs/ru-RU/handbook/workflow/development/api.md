# Справочник по API

## Серверная часть

API, доступное в серверном пакете, показано в следующем коде:

```ts
import PluginWorkflowServer, {
  Trigger,
  Instruction,
  EXECUTION_STATUS,
  JOB_STATUS,
} from '@nocobase/plugin-workflow';
```

### `PluginWorkflowServer`

Класс плагина Workflow.

Обычно во время работы приложения экземпляр плагина Workflow можно получить, вызвав `app.pm.get<PluginWorkflowServer>(PluginWorkflowServer)` из любого места, где доступен экземпляр приложения `app` (далее именуемый `plugin`).

### `registerTrigger()`

Регистрирует новый тип триггера.

**Сигнатура**

`registerTrigger(type: string, trigger: typeof Trigger | Trigger)`

**Параметры**

| Параметр   | Тип                        | Описание               |
| -----------| -------------------------- | ---------------------- |
| `type`     | `string`                   | Идентификатор типа триггера |
| `trigger`  | `typeof Trigger \| Trigger`| Тип или экземпляр триггера |

**Пример**

```ts
import PluginWorkflowServer, { Trigger } from '@nocobase/plugin-workflow';

function handler(this: MyTrigger, workflow: WorkflowModel, message: string) {
  // активировать workflow
  this.workflow.trigger(workflow, { data: message.data });
}

class MyTrigger extends Trigger {
  messageHandlers: Map<number, WorkflowModel> = new Map();
  on(workflow: WorkflowModel) {
    const messageHandler = handler.bind(this, workflow);
    // слушать событие для активации workflow
    process.on(
      'message',
      this.messageHandlers.set(workflow.id, messageHandler),
    );
  }

  off(workflow: WorkflowModel) {
    const messageHandler = this.messageHandlers.get(workflow.id);
    // удалить слушатель
    process.off('message', messageHandler);
  }
}

export default class MyPlugin extends Plugin {
  load() {
    // получить экземпляр плагина workflow
    const workflowPlugin =
      this.app.pm.get<PluginWorkflowServer>(PluginWorkflowServer);

    // зарегистрировать триггер
    workflowPlugin.registerTrigger('myTrigger', MyTrigger);
  }
}
```

### `registerInstruction()`

Регистрирует новый тип узла.

**Сигнатура**

`registerInstruction(type: string, instruction: typeof Instruction | Instruction)`

**Параметры**

| Параметр      | Тип                                | Описание                |
| ------------- | ---------------------------------- | ----------------------- |
| `type`        | `string`                           | Идентификатор типа узла |
| `instruction` | `typeof Instruction \| Instruction`| Тип или экземпляр узла  |

**Пример**

```ts
import PluginWorkflowServer, { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

class LogInstruction extends Instruction {
  run(node, input, processor) {
    console.log('моя команда выполняется!');
    return {
      status: JOB_STATUS.RESOLVED,
    };
  }
};

export default class MyPlugin extends Plugin {
  load() {
    // получить экземпляр плагина workflow
    const workflowPlugin = this.app.pm.get<PluginWorkflowServer>(PluginWorkflowServer);

    // зарегистрировать команду
    workflowPlugin.registerInstruction('log', LogInstruction);
  }
}
```

### `trigger()`

Активирует определенный workflow. В основном используется в пользовательских триггерах для запуска соответствующего workflow при обнаружении определенного пользовательского события.

**Сигнатура**

`trigger(workflow: Workflow, context: any)`

**Параметры**

| Параметр  | Тип            | Описание                          |
| --------- | -------------- | --------------------------------- |
| `workflow`| `WorkflowModel`| Объект workflow для активации     |
| `context` | `object`       | Контекстные данные при активации  |

:::info{title=Совет}
`context` в настоящее время является обязательным параметром; workflow не активируется без него.
:::

**Пример**

```ts
import { Trigger } from '@nocobase/plugin-workflow';

class MyTrigger extends Trigger {
  timer: NodeJS.Timeout;

  on(workflow) {
    // зарегистрировать событие
    this.timer = setInterval(() => {
      // активировать workflow
      this.plugin.trigger(workflow, { date: new Date() });
    }, workflow.config.interval ?? 60000);
  }
}
```

### `resume()`

Возобновляет выполнение приостановленного рабочего процесса на определённой задаче узла.

- Возобновить можно только рабочие процессы, находящиеся в состоянии `EXECUTION_STATUS.STARTED`.
- Возобновить можно только задачи узлов, находящиеся в состоянии `JOB_STATUS.PENDING`.

**Сигнатура**

`resume(job: JobModel)`

**Параметры**

| Параметр | Тип       | Описание                     |
|---------|----------|------------------------------|
| `job`   | `JobModel` | Обновлённый объект задачи     |

:::info{title=Совет}
Передаваемый объект задачи обычно является обновлённым и, как правило, имеет поле `status`, изменённое на значение, отличное от `JOB_STATUS.PENDING`; в противном случае выполнение останется приостановленным.
:::

**Пример**

См. [исходный код](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-manual/src/server/actions.ts#L99).

## `Trigger`

Базовый класс для триггеров, используется для расширения пользовательских типов триггеров.

| Параметр         | Тип                                                        | Описание                                 |
|------------------|------------------------------------------------------------|------------------------------------------|
| `constructor`    | `(public readonly workflow: PluginWorkflowServer): Trigger` | Конструктор                              |
| `on?`            | `(workflow: WorkflowModel): void`                          | Обработчик события при запуске рабочего процесса |
| `off?`           | `(workflow: WorkflowModel): void`                          | Обработчик события при остановке рабочего процесса |

`on`/`off` используются для регистрации/отмены регистрации слушателей событий при включении/выключении рабочего процесса. Передаваемый параметр — это экземпляр рабочего процесса, соответствующий триггеру, который можно обрабатывать в зависимости от конфигурации. Для некоторых типов триггеров, которые уже глобально слушают события, реализация этих методов может не потребоваться. Например, в триггере по расписанию можно зарегистрировать таймер в `on` и отменить его в `off`.

## `Instruction`

Базовый класс для типов инструкций, используется для расширения пользовательских типов узлов.

| Параметр         | Тип                                                            | Описание                                 |
|------------------|----------------------------------------------------------------|------------------------------------------|
| `constructor`    | `(public readonly workflow: PluginWorkflowServer): Instruction` | Конструктор                              |
| `run`            | `Runner`                                                       | Логика выполнения при первом входе в узел |
| `resume?`        | `Runner`                                                       | Логика выполнения при возобновлении после приостановки |
| `getScope?`      | `(node: FlowNodeModel, data: any, processor: Processor): any`  | Предоставляет локальные переменные, генерируемые узлом ветвления |

**Связанные типы**

```ts
export type Job =
  | {
      status: JOB_STATUS[keyof JOB_STATUS];
      result?: unknown;
      [key: string]: unknown;
    }
  | JobModel
  | null;

export type InstructionResult = Job | Promise<Job>;

export type Runner = (
  node: FlowNodeModel,
  input: JobModel,
  processor: Processor,
) => InstructionResult;

export class Instruction {
  run: Runner;
  resume?: Runner;
}
```

`getScope` можно посмотреть в [реализации узла цикла](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-loop/src/server/LoopInstruction.ts#L83), где он используется для предоставления локальных переменных внутри ветви.

# Справочник по API

## `JOB_STATUS`

Таблица констант, представляющих статус задач узлов workflow. Используется для указания текущего состояния задачи узла. Статус, генерируемый узлом, также влияет на статус всего плана выполнения.

| Название константы          | Значение                                   |
| --------------------------- | ----------------------------------------- |
| `JOB_STATUS.PENDING`        | В ожидании: узел достигнут, но выполнение приостановлено |
| `JOB_STATUS.RESOLVED`       | Успешно завершено                         |
| `JOB_STATUS.FAILED`         | Неудача: выполнение узла не соответствует условиям |
| `JOB_STATUS.ERROR`          | Ошибка: во время выполнения узла возникла неперехваченная ошибка |
| `JOB_STATUS.ABORTED`        | Прервано: узел был остановлен другой логикой после приостановки |
| `JOB_STATUS.CANCELED`       | Отменено: узел был отменен вручную после приостановки |
| `JOB_STATUS.REJECTED`       | Отклонено: узел был отклонен вручную после приостановки |
| `JOB_STATUS.RETRY_NEEDED`   | Требуется повторная попытка                |

## Клиентская часть

API, доступное в клиентском пакете, показано в следующем коде:

```ts
import PluginWorkflowClient, {
  Trigger,
  Instruction,
} from '@nocobase/plugin-workflow/client';
```

### `PluginWorkflowClient`

### `registerTrigger()`

Регистрирует панель конфигурации, соответствующую типу триггера.

**Сигнатура**

`registerTrigger(type: string, trigger: typeof Trigger | Trigger): void`

**Параметры**

| Параметр   | Тип                        | Описание                              |
| ---------- | -------------------------- | ------------------------------------ |
| `type`     | `string`                   | Идентификатор типа триггера, должен совпадать с идентификатором при регистрации |
| `trigger`  | `typeof Trigger \| Trigger` | Тип или экземпляр триггера            |

### `registerInstruction()`

Регистрирует панель конфигурации, соответствующую типу узла.

**Сигнатура**

`registerInstruction(type: string, instruction: typeof Instruction | Instruction): void`

**Параметры**

| Параметр      | Тип                                | Описание                              |
| ------------- | ---------------------------------- | ------------------------------------ |
| `type`        | `string`                           | Идентификатор типа узла, должен совпадать с идентификатором при регистрации |
| `instruction` | `typeof Instruction \| Instruction` | Тип или экземпляр узла               |

#### `registerInstructionGroup()`

Регистрирует группу типов узлов. NocoBase по умолчанию предоставляет 4 группы типов узлов:

* `'control'`: Управляющие
* `'collection'`: Операции с таблицами данных
* `'manual'`: Ручная обработка
* `'extended'`: Другие расширенные типы

Для расширения другими группами можно использовать этот метод.

**Сигнатура**

`registerInstructionGroup(type: string, group: { label: string }): void`

**Параметры**

| Параметр | Тип                | Описание                           |
| -------- | ------------------ | --------------------------------- |
| `type`   | `string`          | Идентификатор группы узлов         |
| `group`  | `{ label: string }` | Информация о группе (сейчас только заголовок) |

**Пример**

```js
export default class YourPluginClient extends Plugin {
  load() {
    const pluginWorkflow = this.app.pm.get(PluginWorkflowClient);

    pluginWorkflow.registerInstructionGroup('ai', { label: `{{t("AI", { ns: "${NAMESPACE}" })}}` });
  }
}
```

## `Trigger`

Базовый класс для триггеров, используется для расширения пользовательских типов триггеров.

| Параметр         | Тип                                      | Описание                              |
| ---------------- | ---------------------------------------- | ------------------------------------ |
| `title`          | `string`                                 | Название типа триггера                |
| `fieldset`       | `{ [key: string]: ISchema }`             | Набор опций конфигурации триггера      |
| `scope?`         | `{ [key: string]: any }`                 | Набор объектов, используемых в схеме конфигурации |
| `components?`    | `{ [key: string]: React.FC }`            | Набор компонентов, используемых в схеме конфигурации |
| `useVariables?`  | `(config: any, options: UseVariableOptions) => VariableOptions` | Метод получения данных контекста триггера |

- Если `useVariables` не задан, это означает, что данный тип триггера не предоставляет функцию получения значений, и данные контекста триггера нельзя выбрать в узлах потока.

## `Instruction`

Базовый класс для узлов, используется для расширения пользовательских типов узлов.

| Параметр                | Тип                                      | Описание                                                                 |
| ----------------------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| `group`                 | `string`                                 | Идентификатор группы типов узлов (опционально: `'control'`/`'collection'`/`'manual'`/`'extended'`) |
| `fieldset`              | `Record<string, ISchema>`                | Набор опций конфигурации узла                                           |
| `scope?`                | `Record<string, Function>`               | Набор объектов, используемых в схеме конфигурации                       |
| `components?`           | `Record<string, React.FC>`               | Набор компонентов, используемых в схеме конфигурации                    |
| `Component?`            | `React.FC`                               | Пользовательский компонент отрисовки узла                               |
| `useVariables?`         | `(node, options: UseVariableOptions) => VariableOption` | Метод предоставления опций переменных узла                              |
| `useScopeVariables?`    | `(node, options?) => VariableOptions`    | Метод предоставления локальных переменных для ветки                     |
| `useInitializers?`      | `(node) => SchemaInitializerItemType`    | Метод предоставления опций инициализатора для узла                      |
| `isAvailable?`          | `(ctx: NodeAvailableContext) => boolean` | Метод определения доступности узла в текущей среде                      |

**Связанные типы**

```ts
export type NodeAvailableContext = {
  workflow: object;
  upstream: object;
  branchIndex: number;
};
```

- Если `useVariables` не задан, это означает, что данный тип узла не предоставляет функцию получения значений, и результаты этого типа узла нельзя выбрать в потоке. Если результат является единичным значением (не выбирается), можно вернуть статическое содержимое (см. [исходный код узла вычислений](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/calculation.tsx#L68)). Если требуется выбор (например, свойство объекта), можно предоставить пользовательский компонент вывода (см. [исходный код узла создания данных](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/create.tsx#L41)).
- `Component`: Пользовательский компонент отрисовки узла, используется, когда стандартная отрисовка недостаточна. Например, для предоставления дополнительных кнопок операций или других интерактивных элементов для начального узла ветки (см. [исходный код параллельной ветки](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow-parallel/src/client/ParallelInstruction.tsx)).
- `useInitializers`: Используется для предоставления методов инициализации блоков. Например, в ручном узле можно инициализировать соответствующие пользовательские блоки на основе вышестоящего узла (см. [исходный код узла создания данных](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/create.tsx#L71)).
- `isAvailable`: В основном используется для определения, может ли узел быть использован (добавлен) в текущей среде. Текущая среда включает текущий workflow, вышестоящие узлы и текущий индекс ветки.
