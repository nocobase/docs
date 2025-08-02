### **События**

NocoBase предоставляет большое количество слушателей событий в жизненном цикле приложения, плагинов и базы данных. Эти методы выполняются только при возникновении соответствующего события.

#### **Как добавить слушатели событий?**

Регистрация событий обычно размещается в `afterAdd` или `beforeLoad`:

```ts
export class MyPlugin extends Plugin {
  // afterAdd() выполняется после добавления плагина, активирован он или нет
  afterAdd() {
    this.app.on();
    this.db.on();
  }

  // beforeLoad() выполняется только после активации плагина
  beforeLoad() {
    this.app.on();
    this.db.on();
  }
}
```

#### **`db.on`**

События, связанные с базой данных, относятся к настройке коллекций, операциям CRUD репозитория и включают:

- `'beforeSync' / 'afterSync'`
- `'beforeValidate' / 'afterValidate'`
- `'beforeCreate' / 'afterCreate'`
- `'beforeUpdate' / 'afterUpdate'`
- `'beforeSave' / 'afterSave'`
- `'beforeDestroy' / 'afterDestroy'`
- `'afterCreateWithAssociations'`
- `'afterUpdateWithAssociations'`
- `'afterSaveWithAssociations'`
- `'beforeDefineCollection'`
- `'afterDefineCollection'`
- `'beforeRemoveCollection' / 'afterRemoveCollection'`

Более подробно см. в разделе [API базы данных](/api/database).

#### **`app.on()`**

События приложения связаны с его жизненным циклом и включают:

- `'beforeLoad' / 'afterLoad'`
- `'beforeInstall' / 'afterInstall'`
- `'beforeUpgrade' / 'afterUpgrade'`
- `'beforeStart' / 'afterStart'`
- `'beforeStop' / 'afterStop'`
- `'beforeDestroy' / 'afterDestroy'`

Подробнее см. в разделе [API приложения](/api/server/application#Events).

#### **Примеры**

Рассмотрим простой интернет-магазин. Моделирование связанных коллекций можно посмотреть в разделе [Коллекции и поля](/development/).

##### **Списание товара из остатков после создания заказа**

Обычно у нас есть отдельные коллекции для товаров и заказов. Проблему перепродажи можно решить, вычитая количество товара из остатков после оформления заказа. В этом случае можно определить соответствующее событие для действия «Создание заказа»:

```ts
class ShopPlugin extends Plugin {
  beforeLoad() {
    this.db.on('orders.afterCreate', async (order, options) => {
      const product = await order.getProduct({
        transaction: options.transaction,
      });

      await product.update(
        {
          inventory: product.inventory - order.quantity,
        },
        {
          transaction: options.transaction,
        },
      );
    });
  }
}
```

Так как события Sequelize по умолчанию содержат информацию о транзакции, мы можем использовать её напрямую, чтобы гарантировать выполнение обоих действий в одной транзакции.

Аналогично можно изменить статус заказа на «Отправлен» после создания записи доставки:

```ts
class ShopPlugin extends Plugin {
  load() {
    this.db.on('deliveries.afterCreate', async (delivery, options) => {
      const orderRepo = this.db.getRepository('orders');
      await orderRepo.update({
        filterByTk: delivery.orderId,
        value: {
          status: 2
        },
        transaction: options.transaction
      });
    });
  }
}
```

##### **Планировщик задач, работающий параллельно с приложением**

Не рассматривая сложные случаи, такие как использование плагина рабочих процессов, можно реализовать простой механизм задач по расписанию через события уровня приложения. Задача будет привязана к процессу приложения и остановится при его завершении. Например, можно регулярно проверять все заказы и автоматически помечать их как полученные по истечении срока.

```ts
class ShopPlugin extends Plugin {
  timer = null;
  orderReceiveExpires = 86400 * 7;

  checkOrder = async () => {
    const expiredDate = new Date(Date.now() - this.orderReceiveExpires);
    const deliveryRepo = this.db.getRepository('deliveries');
    const expiredDeliveries = await deliveryRepo.find({
      fields: ['id', 'orderId'],
      filter: {
        status: 0,
        createdAt: {
          $lt: expiredDate,
        },
      },
    });
    await deliveryRepo.update({
      filter: {
        id: expiredDeliveries.map((item) => item.get('id')),
      },
      values: {
        status: 1,
      },
    });
    const orderRepo = this.db.getRepository('orders');
    const [updated] = await orderRepo.update({
      filter: {
        status: 2,
        id: expiredDeliveries.map((item) => item.get('orderId')),
      },
      values: {
        status: 3,
      },
    });

    console.log('%d заказов просрочено', updated);
  };

  load() {
    this.app.on('beforeStart', () => {
      // выполнять каждую минуту
      this.timer = setInterval(this.checkOrder, 1000 * 60);
    });

    this.app.on('beforeStop', () => {
      clearInterval(this.timer);
      this.timer = null;
    });
  }
}
```

#### **Заключение**

Приведённые примеры дают базовое понимание того, как работают события и как их можно использовать для расширения функциональности.

- События, связанные с базой данных
- События, связанные с приложением

Примеры кода из этой главы интегрированы в пакет [packages/samples/shop-events](https://github.com/nocobase/nocobase/tree/main/packages/samples/shop-events) и могут быть запущены локально для проверки результата.
