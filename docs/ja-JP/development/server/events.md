# イベント

NocoBase では、アプリケーション、プラグイン、データベースのライフサイクルにおいて多くのイベントリスナーを提供しており、これらのメソッドはイベントがトリガーされた後にのみ実行されます。

## イベントリスナーの追加方法

イベントの登録は一般的に `afterAdd` または `beforeLoad` 内に行います。

```ts
export class MyPlugin extends Plugin {
  // プラグインが追加されると、アクティブかどうかに関係なく afterAdd() が実行されます
  afterAdd() {
    this.app.on();
    this.db.on();
  }

  // プラグインがアクティブになった後にのみ beforeLoad() が実行されます
  beforeLoad() {
    this.app.on();
    this.db.on();
  }
}
```

### `db.on`

データベース関連のイベントは Collection 設定や Repository の CRUD 操作に関連しており、以下が含まれます：

- 'beforeSync' / 'afterSync'
- 'beforeValidate' / 'afterValidate'
- 'beforeCreate' / 'afterCreate'
- 'beforeUpdate' / 'afterUpdate'
- 'beforeSave' / 'afterSave'
- 'beforeDestroy' / 'afterDestroy'
- 'afterCreateWithAssociations'
- 'afterUpdateWithAssociations'
- 'afterSaveWithAssociations'
- 'beforeDefineCollection'
- 'afterDefineCollection'
- 'beforeRemoveCollection' / 'afterRemoveCollection'

詳細については [Database API](/api/database#内置事件) を参照してください。

### `app.on()`

アプリケーションのイベントはアプリケーションのライフサイクルに関連しており、関連するイベントは次の通りです：

- 'beforeLoad' / 'afterLoad'
- 'beforeInstall' / 'afterInstall'
- 'beforeUpgrade' / 'afterUpgrade'
- 'beforeStart' / 'afterStart'
- 'beforeStop' / 'afterStop'
- 'beforeDestroy' / 'afterDestroy'

詳細については [Application API](/api/server/application#事件) を参照してください。

## 例

簡単なオンラインストアを例に続けます。関連するデータテーブルのモデリングについては [データテーブルとフィールド](/development/) の例を参照してください。

### 注文作成後に商品在庫を減少

通常、商品と注文は異なるデータテーブルです。顧客が注文した後に商品在庫を減少させることで、オーバーセールの問題を解決できます。この際、注文作成というデータ操作に対応するイベントを定義し、在庫の変更を同時に処理します：

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

Sequelize のデフォルトイベントにはトランザクションなどの情報が含まれているため、transaction を直接使用して二つのデータ操作が同一のトランザクション内で行われることを保証できます。

同様に、出荷記録作成後に注文のステータスを「発送済み」に変更することもできます：

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

### アプリケーションと共に存在する定期タスク

ワークフロープラグインなどの複雑な使用を考慮しない場合でも、アプリケーションレベルのイベントを活用してシンプルな定期タスク機構を実現し、アプリケーションのプロセスにバインドして、終了後に停止することができます。例えば、すべての注文を定期的にスキャンし、受領時間を超えた場合に自動的に受領する機能を希望する場合：

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

    console.log('%d orders expired', updated);
  };

  load() {
    this.app.on('beforeStart', () => {
      // 毎分実行
      this.timer = setInterval(this.checkOrder, 1000 * 60);
    });

    this.app.on('beforeStop', () => {
      clearInterval(this.timer);
      this.timer = null;
    });
  }
}
```

## 小結

上記の例を通じて、イベントの役割と拡張に使用できる方法について基本的な理解を得ることができました：

- データベース関連のイベント
- アプリケーション関連のイベント

本章で取り上げた例のコードは、対応するパッケージ [packages/samples/shop-events](https://github.com/nocobase/nocobase/tree/main/packages/samples/shop-events) に統合されており、ローカルで直接実行してその効果を確認できます。

