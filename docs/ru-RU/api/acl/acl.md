# ACL (Управление доступом)

## Обзор

`ACL` - это модуль управления правами доступа в NocoBase, отвечающий за:

- Управление ролями пользователей
- Регистрацию и назначение разрешений
- Оценку политик доступа и контроль

### Основные понятия

- **Ресурс (Resource)**: Коллекции или кастомные ресурсы. См. [`@nocobase/resourcer`](../resourcer/resource-manager.md)
- **Действие (Action)**: Операции с ресурсом (создание, чтение, обновление, удаление и др.)
- **Стратегия (Strategy)**: Глобальные настройки прав для ролей
- **Сниппет (Snippet)**: Набор операций для централизованного управления правами

## Методы класса

### `define()` - Определение роли

```typescript
define(options: DefineOptions): ACLRole
```

**Параметры:**
```typescript
interface DefineOptions {
  role: string;               // Уникальный идентификатор роли
  strategy?: string | AvailableStrategyOptions; // Глобальная стратегия
  actions?: ResourceActionsOptions; // Настройки прав для действий
  snippets?: string[];        // Сниппеты доступа
}
```

### `can()` - Проверка прав

```typescript
can(options: CanArgs): CanResult | null
```

**Пример:**
```typescript
const result = acl.can({
  role: 'admin',
  resource: 'users',
  action: 'delete'
});
```

### `registerSnippet()` - Регистрация сниппета

```typescript
registerSnippet(snippet: SnippetOptions)
```

**Пример:**
```typescript
acl.registerSnippet({
  name: 'content.*',
  actions: ['posts:create', 'posts:update']
});
```

### `setAvailableAction()` - Настройка допустимых действий

```typescript
setAvailableAction(name: string, options: AvailableActionOptions)
```

### `setAvailableStrategy()` - Настройка стратегий

```typescript
setAvailableStrategy(name: string, options: AvailableStrategyOptions)
```

### `allow()` - Разрешение операций

```typescript
allow(resourceName: string, actionNames: string[] | string, condition?: string | ConditionFunc)
```

**Примеры:**
```typescript
// Публичный доступ
acl.allow('posts', 'read', 'public');

// Только для авторизованных
acl.allow('users', 'update', 'loggedIn');
```

### `addFixedParams()` - Добавление параметров

```typescript
addFixedParams(resource: string, action: string, merger: Merger)
```

### Middleware

```typescript
// Добавление middleware
acl.use(async (ctx, next) => {
  // Логика проверки прав
  await next();
});

// Стандартное middleware ACL
acl.middleware();
```

## Практическое применение

1. **Создание роли администратора:**
```typescript
acl.define({
  role: 'admin',
  strategy: {
    allowConfigure: true,
    resource: '*'
  }
});
```

2. **Ограничение доступа:**
```typescript
acl.define({
  role: 'author',
  actions: {
    'posts:create': { own: true },
    'posts:update': { 
      own: true,
      fields: ['title', 'content']
    }
  }
});
```

3. **Кастомная проверка:**
```typescript
acl.allow('orders', 'cancel', async (ctx) => {
  return ctx.state.currentUser.isManager;
});
```

Система ACL в NocoBase предоставляет гибкий механизм для реализации сложных сценариев контроля доступа с возможностью тонкой настройки под конкретные бизнес-требования.
