# Коллекции и поля

## Основные понятия

Моделирование данных - это фундаментальный уровень приложения. В NocoBase мы моделируем данные через таблицы (Collection) и поля (Field), которые сохраняются в базе данных.

### Коллекция (Collection)

Коллекция - это набор однотипных данных, соответствующий понятию таблицы в базе данных. Например: заказы, товары, пользователи, комментарии могут быть определены как коллекции. Разные коллекции различаются по имени и содержат поля:

```ts
db.collection({
  name: 'posts',
  fields: [
    { name: 'title', type: 'string' }
    { name: 'content', type: 'text' },
    // ...
  ]
});
```

После определения коллекция существует только в памяти, для синхронизации с БД нужно вызвать метод [`db.sync()`](/api/database#sync).

### Поле (Field)

Соответствует понятию "столбец" в таблице БД. Каждая коллекция может содержать несколько полей:

```ts
db.collection({
  name: 'users',
  fields: [
    { type: 'string', name: 'name' }
    { type: 'integer', name: 'age' }
    // Другие поля
  ],
});
```

Обязательные параметры поля - имя (`name`) и тип (`type`). Все типы полей описаны в разделе [Список встроенных типов полей](/api/database/field#Список-встроенных-типов-полей).

## Пример

Рассмотрим пример плагина интернет-магазина для демонстрации моделирования данных.

### Определение коллекций в плагине

Создадим коллекцию товаров `products` в файле `collections/products.ts`:

```ts
export default {
  name: 'products',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'integer',
      name: 'price',
    },
    {
      type: 'boolean',
      name: 'enabled',
    },
    {
      type: 'integer',
      name: 'inventory',
    },
  ],
};
```

Загружаем коллекцию в основном классе плагина:

```ts
import path from 'path';
import { Plugin } from '@nocobase/server';

export default class ShopPlugin extends Plugin {
  async load() {
    await this.db.import({
      directory: path.resolve(__dirname, 'collections'),
    });

    this.app.acl.allow('products', '*');
    this.app.acl.allow('categories', '*');
    this.app.acl.allow('orders', '*');
  }
}
```

Для тестирования временно разрешаем полный доступ к данным. Автоматически генерируются CRUD API:

- `GET /api/products:list` - список товаров
- `GET /api/products:get?filterByTk=<id>` - товар по ID
- `POST /api/products` - создать товар
- `PUT /api/products:update?filterByTk=<id>` - обновить товар
- `DELETE /api/products:destroy?filterByTk=<id>` - удалить товар

### Связи между коллекциями

Добавим коллекцию категорий `collections/categories.ts`:

```ts
export default {
  name: 'categories',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'hasMany',
      name: 'products',
    },
  ],
};
```

Добавим связь в коллекции товаров:

```ts
{
  name: 'products',
  fields: [
    // ...
    {
      type: 'belongsTo',
      name: 'category',
      target: 'categories',
    }
  ]
}
```

Это определяет отношение "многие-к-одному" между товарами и категориями. Доступные API:

- `GET /api/products:list?appends=category` - товары с категориями
- `GET /api/categories/<categoryId>/products:list` - товары категории

NocoBase поддерживает 4 типа связей:
- [`belongsTo`](/api/database/field#belongsto)
- [`belongsToMany`](/api/database/field#belongstomany) 
- [`hasMany`](/api/database/field#hasmany)
- [`hasOne`](/api/database/field#hasone)

# Расширение существующих коллекций

В дополнение к коллекциям товаров и категорий, нам нужна коллекция заказов. Создадим файл `collections/orders.ts`:

```ts
export default {
  name: 'orders',
  fields: [
    {
      type: 'uuid',
      name: 'id',
      primaryKey: true,
    },
    {
      type: 'belongsTo',
      name: 'product',
    },
    {
      type: 'integer',
      name: 'quantity',
    },
    {
      type: 'integer',
      name: 'totalPrice',
    },
    {
      type: 'integer',
      name: 'status',
    },
    {
      type: 'string',
      name: 'address',
    },
    {
      type: 'belongsTo',
      name: 'user',
    },
  ],
};
```

Для простоты связь между заказами и товарами определена как "многие-к-одному". Также добавлена связь с пользователями (встроенная коллекция NocoBase).

Чтобы расширить коллекцию пользователей, создадим `collections/users.ts`:

```ts
import { extend } from '@nocobase/database';

export extend({
  name: 'users',
  fields: [
    {
      type: 'hasMany',
      name: 'orders'
    }
  ]
});
```

Теперь можно получать заказы пользователя через `GET /api/users/<userId>/orders:list`.

## Расширение типов полей

Для поля `id` в заказах используем тип `uuid`. Чтобы создать собственный тип (например, Snowflake ID), создадим файл `fields/snowflake.ts`:

```ts
import { Snowflake } from 'nodejs-snowflake';
import { DataTypes, Field, BaseColumnFieldOptions } from '@nocobase/database';

export interface SnowflakeFieldOptions extends BaseColumnFieldOptions {
  type: 'snowflake';
  epoch: number;
  instanceId: number;
}

export class SnowflakeField extends Field {
  get dataType() {
    return DataTypes.BIGINT;
  }

  constructor(options: SnowflakeFieldOptions, context) {
    super(options, context);
    const { epoch, instanceId } = options;
    this.generator = new Snowflake({ epoch, instanceId });
  }

  setValue = (instance) => {
    const { name } = this.options;
    instance.set(name, this.generator.getUniqueID());
  };

  bind() {
    super.bind();
    this.on('beforeCreate', this.setValue);
  }

  unbind() {
    super.unbind();
    this.off('beforeCreate', this.setValue);
  }
}

export default SnowflakeField;
```

Регистрируем тип в основном файле плагина:

```ts
import SnowflakeField from './fields/snowflake';

export default class ShopPlugin extends Plugin {
  initialize() {
    this.db.registerFieldTypes({
      snowflake: SnowflakeField,
    });
  }
}
```

Теперь можно использовать тип `snowflake`:

```ts
{
  name: 'orders',
  fields: [
    {
      type: 'snowflake',
      name: 'id',
      primaryKey: true
    }
  ]
}
```

## Итог

Мы рассмотрели:
1. Создание коллекций и полей
2. Определение связей между коллекциями
3. Расширение существующих коллекций
4. Создание новых типов полей

Пример кода доступен в [packages/samples/shop-modeling](https://github.com/nocobase/nocobase/tree/main/packages/samples/shop-modeling).
