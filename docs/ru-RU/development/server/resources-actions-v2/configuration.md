### **Конфигурация ресурсов и действий**

#### **Самые простые действия (Actions) ресурса**

#### **Действие с параметрами по умолчанию**

#### **Использование глобальных действий**

#### **Объединение параметров действия из нескольких источников**

#### **Использование встроенных действий**

В NocoBase ресурсы предназначены для работы с коллекциями. Настроенные коллекции (включая связи) автоматически преобразуются в соответствующие ресурсы.

#### **Автоматическое преобразование**

```ts
export class PluginSampleToResourcesServer extends Plugin {
  async load() {
    this.db.collection({
      name: 'posts',
      fields: [
        {
          type: 'hasMany',
          name: 'comments',
          target: 'comments',
        },
      ],
    });
    this.db.collection({
      name: 'comments',
    });
  }
}
```

Интерфейсы для `posts` и `posts.comments` в приведённом выше примере будут следующими:

**Ресурс posts**

```
POST  /api/posts:create
GET   /api/posts:list
GET   /api/posts:get/1
POST  /api/posts:update/1
POST  /api/posts:destroy/1
```

**Ресурс posts.comments**

```
POST  /api/posts/1/comments:create
GET   /api/posts/1/comments:list
GET   /api/posts/1/comments:get/1
POST  /api/posts/1/comments:update/1
POST  /api/posts/1/comments:destroy/1
```

HTTP API в NocoBase является надмножеством REST API, стандартные CRUD-операции поддерживают RESTful-стиль.

#### **Встроенные действия**

После преобразования коллекции в ресурс становится возможным выполнение CRUD-операций, поскольку уже определены некоторые стандартные действия.

**Встроенные глобальные действия, доступные для коллекций и связей:**

- `create`
- `get`
- `list`
- `update`
- `destroy`
- `move`

**Встроенные действия для связей (только для связей):**

- `set`
- `add`
- `remove`
- `toggle`

Справочник по использованию встроенных действий доступен в документации API.

#### **Пользовательские действия**

**Глобальные действия**

```ts
export class PluginSampleResourcerServer extends Plugin {
  async load() {
    this.resourcer.registerActions({
      import: async (ctx, next) => {},
      export: async (ctx, next) => {},
    });
  }
}
```

**Действия для конкретного ресурса**

```ts
export class PluginSampleResourcerServer extends Plugin {
  async load() {
    this.resourcer.registerActions({
      'posts:listPublished': async (ctx, next) => {},
    });
  }
}
```

#### **Пользовательские ресурсы**

При наличии специфических требований можно явно определить ресурс и соответствующие действия:

```ts
app.resourcer.define({
  name: 'posts',
  actions: {
    create: {},
    get: {},
    list: {},
    update: {},
    destroy: {},
  },
});
```
