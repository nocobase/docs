# Ресурсы и действия

В мире веб-разработки вы могли слышать о концепции RESTful. NocoBase заимствует эту концепцию ресурсов для отображения различных сущностей в системе, таких как данные в базе, файлы в файловой системе или сервисы. Однако NocoBase не полностью следует RESTful-конвенциям, а расширяет спецификации из [Google Cloud API Design Guide](https://cloud.google.com/apis/design) для большего охвата сценариев.

## Основные понятия

Ресурсы - это объекты системы, доступные для манипуляций извне, такие как таблицы данных, файлы и другие пользовательские объекты.

Действия - операции чтения/записи над ресурсами, обычно для доступа к данным, их создания, обновления, удаления и т.д. В NocoBase доступ к ресурсам реализован через определение действий, ядром которых является совместимая с Koa middleware-функция для обработки запросов.

### Автоматическое отображение коллекций на ресурсы

NocoBase автоматически отображает коллекции на ресурсы и предоставляет серверный интерфейс для работы с данными. По умолчанию, при определении коллекции через `db.collection()`, становятся доступны HTTP API для работы с её данными. Имя ресурса совпадает с именем коллекции.

Для простых ресурсов доступны стандартные CRUD-действия:
- [`list`](/api/actions#list): Получить список данных
- [`get`](/api/actions#get): Получить одну запись  
- [`create`](/api/actions#create): Создать запись
- [`update`](/api/actions#update): Обновить запись
- [`destroy`](/api/actions#destroy): Удалить запись

Для реляционных ресурсов также доступны действия для работы со связями:
- [`add`](/api/actions#add): Добавить связь
- [`remove`](/api/actions#remove): Удалить связь  
- [`set`](/api/actions#set): Установить связь
- [`toggle`](/api/actions#toggle): Переключить связь

Пример определения коллекции статей:
```ts
app.db.collection({
  name: 'posts',
  fields: [{ type: 'string', name: 'title' }],
});
await app.db.sync();
```

Работа через HTTP API:
```bash
# Создание
curl -X POST -H "Content-Type: application/json" -d '{"title": "first"}' http://localhost:13000/api/posts:create
# Получение списка
curl http://localhost:13000/api/posts:list
# Обновление
curl -X PUT -H "Content-Type: application/json" -d '{"title": "second"}' http://localhost:13000/api/posts:update
# Удаление
curl -X DELETE http://localhost:13000/api/posts:destroy?filterByTk=1
```

### Пользовательские действия

Когда стандартных CRUD-действий недостаточно, можно расширить ресурсы дополнительными действиями. Например, переопределить действие создания для коллекции статей:

```ts
app.actions({
  async ['posts:create'](ctx, next) {
    const postRepo = ctx.db.getRepository('posts');
    await postRepo.create({
      values: {
        ...ctx.action.params.values,
        // Ограничение: текущий пользователь - автор статьи
        userId: ctx.state.currentUserId
      }
    });
    await next();
  }
});
```

Или добавить глобальное действие экспорта для всех коллекций:

```ts
app.actions({
  async export(ctx, next) {
    const repo = ctx.db.getRepository(ctx.action.resource);
    const results = await repo.find({
      filter: ctx.action.params.filter
    });
    ctx.type = 'text/csv';
    ctx.body = results.map(...).join('\n');
    next();
  }
});
```

### Параметры действий

Параметры действий формируются из трёх источников:
1. Параметры по умолчанию при определении действия
2. Параметры из клиентского запроса  
3. Препроцессинг других middleware

Пример ограничения параметров:
```ts
app.resource({
  name: 'posts',
  actions: {
    create: {
      whitelist: ['title', 'content'], // Разрешённые поля
      blacklist: ['createdAt', 'createdById'], // Запрещённые поля
    },
  },
});
```

# Пользовательские ресурсы

Ресурсы данных делятся на:
- Основные ресурсы: `<коллекция>`
- Ресурсы связей: `<коллекция>.<связь>`

```ts
// Определение ресурса статей
app.resource({
  name: 'posts'
});

// Ресурс автора статьи  
app.resource({
  name: 'posts.user'
});

// Ресурс комментариев статьи
app.resource({
  name: 'posts.comments'
});
```

Кастомизация нужна для:
1. Ресурсов, не связанных с БД (например, данные в памяти)
2. Прокси-интерфейсов других сервисов
3. Специфичных действий для существующих ресурсов

Пример ресурса для отправки уведомлений:
```ts
app.resource({
  name: 'notifications',
  actions: {
    async send(ctx) {
      await someProvider.send(ctx.request.body);
    }
  }
});
```

Вызов через API:
```bash
POST /api/notifications:send {title:"Hello", to:"hello@nocobase.com"}
```

## Пример магазина

Продолжая пример магазина из [раздела про коллекции](/development/server/collections-fields#Пример), рассмотрим кастомизацию действий.

### Переопределение стандартных действий

При создании заказа автоматически указываем текущего пользователя как владельца:

```ts
app.resource({
  name: 'orders',
  actions: {
    async create(ctx) {
      ctx.action.mergeParams({
        values: {
          userId: ctx.state.user.id // Автоматическое назначение владельца
        }
      });
      return actions.create(ctx); // Вызов стандартной логики
    }
  }
});
```

### Пользовательские действия

Для сложных операций (например, изменение статуса заказа) создаем отдельные действия.

1. Добавляем коллекцию для данных доставки (`collections/deliveries.ts`):

```ts
export default {
  name: 'deliveries',
  fields: [
    { type: 'belongsTo', name: 'order' },
    { type: 'string', name: 'provider' }, // Поставщик
    { type: 'string', name: 'trackingNumber' }, // Трек-номер
    { type: 'integer', name: 'status' }
  ]
};
```

2. Расширяем коллекцию заказов связью с доставкой (`collections/orders.ts`):

```ts
export default {
  name: 'orders',
  fields: [
    // ... другие поля
    { type: 'hasOne', name: 'delivery' }
  ]
};
```

3. Создаем действие "доставка" в основном классе плагина:

```ts
app.resource({
  name: 'orders',
  actions: {
    async deliver(ctx) {
      const { filterByTk } = ctx.action.params;
      const orderRepo = ctx.db.getRepository('orders');
      
      const [order] = await orderRepo.update({
        filterByTk,
        values: {
          status: 2, // Статус "Отправлен"
          delivery: {
            ...ctx.action.params.values,
            status: 0 // Статус доставки
          }
        }
      });

      ctx.body = order;
    }
  }
});
```

Вызов действия:
```bash
POST /api/orders:deliver/<id> {
  "provider": "Почта России",
  "trackingNumber": "RU123456789"
}
```

Аналогично можно создать действия для оплаты, подписания и других операций с заказом.

### Слияние параметров

Для ограничения доступа пользователей только к своим заказам и исключения отменённых заказов, можно задать параметры по умолчанию:

```ts
app.resource({
  name: 'orders',
  actions: {
    list: {
      filter: {
        $isCurrentUser: true, // Только текущий пользователь
        status: { $ne: -1 }   // Исключить отменённые
      },
      fields: ['id', 'status', 'createdAt'] // Поля по умолчанию
    }
  }
});
```

При запросе клиента параметры объединяются:
```bash
GET /api/orders:list?productId=1&fields=id,quantity&appends=product
```

Итоговые параметры запроса:
```json
{
  "filter": {
    "$and": [
      {"$isCurrentUser": true},
      {"status": {"$ne": -1}},
      {"productId": 1}
    ]
  },
  "fields": ["id", "status", "quantity", "createdAt"],
  "appends": ["product"]
}
```

### Ограничение создания заказов

Запретим клиенту передавать служебные поля:

```ts
app.resource({
  name: 'orders',
  actions: {
    create: {
      blacklist: ['id', 'totalPrice', 'status'], // Запрещённые поля
      values: {
        status: 0 // Статус по умолчанию
      }
    }
  }
});
```

### Сложные проверки через middleware

Проверка наличия товара перед заказом:

```ts
app.resource({
  name: 'orders',
  actions: {
    create: {
      middlewares: [
        async (ctx, next) => {
          const product = await ctx.db.getRepository('products').findOne({
            filterByTk: ctx.action.params.values.productId,
            filter: {
              enabled: true, // Товар доступен
              inventory: { $gt: 0 } // Есть в наличии
            }
          });
          if (!product) ctx.throw(404);
          await next();
        }
      ]
    }
  }
});
```

## Итог

Ключевые моменты:
- Автоматическое создание ресурсов из коллекций
- Стандартные CRUD-действия
- Возможность кастомизации действий
- Стратегии слияния параметров запросов

Код, описанный в этой главе, включен в полный пакет примеров [packages/samples/shop-actions](https://github.com/nocobase/nocobase/tree/main/packages/samples/shop-actions), который можно запустить непосредственно локально, чтобы увидеть результаты. 
