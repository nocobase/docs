# AuditManager

## Обзор

`AuditManager` — это модуль управления аудитом ресурсов в NocoBase, используемый для регистрации интерфейсов ресурсов, участвующих в аудите.

### Базовое использование

```ts
import { Plugin } from '@nocobase/server';

class PluginCustomAuditResourceServer extends Plugin {
  async load() {
    this.app.auditManager.registerAction('resource:action');
  }
}
```

## Методы класса

### `setLogger()`

Устанавливает способ вывода аудит-логов.

```ts
const auditManager = new AuditManager();
auditManager.setLogger({
  log: async (auditLog: AuditLog) => console.log(auditLog);
})
```

#### Сигнатура

- `setLogger(logger: AuditLogger)`

#### Типы

```ts
export interface AuditLog {
  uuid: string;
  dataSource: string;
  resource: string;
  action: string;
  sourceCollection?: string;
  sourceRecordUK?: string;
  targetCollection?: string;
  targetRecordUK?: string;
  userId: string;
  roleName: string;
  ip: string;
  ua: string;
  status: number;
  metadata?: Record<string, any>;
}

export interface AuditLogger {
  log(auditLog: AuditLog): Promise<void>;
}
```

### `registerAction()`

Регистрирует операцию с ресурсом, участвующую в аудите.

#### Сигнатура

- `registerAction(action: Action)`

#### Типы

```ts
export interface UserInfo {
  userId?: string;
  roleName?: string;
}

export interface SourceAndTarget {
  sourceCollection?: string;
  sourceRecordUK?: string;
  targetCollection?: string;
  targetRecordUK?: string;
}

type Action =
  | string
  | {
      name: string;
      getMetaData?: (ctx: Context) => Promise<Record<string, any>>;
      getUserInfo?: (ctx: Context) => Promise<UserInfo>;
      getSourceAndTarget?: (ctx: Context) => Promise<SourceAndTarget>;
    };
```

#### Подробности

Поддерживается несколько способов записи:

1. Действует для всех ресурсов

```ts
registerActions(['create']);
```

2. Действует для всех операций определённого ресурса — `resource:*`

```ts
registerActions(['app:*']);
```

3. Действует для определённой операции определённого ресурса — `resource:action`

```ts
registerAction(['pm:update']);
```

4. Поддерживается передача кастомных функций `getMetaData`, `getUserInfo`, `getSourceAndTarget` для конкретной операции

```ts
registerActions([
  'create',
  { name: 'auth:signIn', getMetaData, getUserInfo, getSourceAndTarget },
]);
```

При пересечении зарегистрированных интерфейсов приоритет имеет более детальная (точная) регистрация. Например:

1. `registerActions('create')`

2. `registerAction({ name: 'user:*', getMetaData })`

3. `registerAction({ name: 'user:create', getMetaData })`

Для интерфейса `user:create` будет применяться вариант `3`.

### `registerActions()`

Регистрирует несколько операций с ресурсами, участвующих в аудите.

#### Сигнатура

- `registerActions(actions: Action[])`
