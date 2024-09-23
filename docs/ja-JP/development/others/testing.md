# 単体テスト

## 概要

NocoBaseのテストは、[Jest](https://jestjs.io/)テストフレームワークに基づいています。また、テストを簡単に作成するために、正常なデータベースとアプリケーションサーバーを模擬する2つのツールクラスを提供しています。

### MockDatabase

モックデータベースクラスは[`Database`](/api/database)クラスを継承しており、大部分の内容は同じですが、コンストラクタにはランダムなテーブルプレフィックスがデフォルトで内蔵されています。各テストケースの初期化時に、関連するデータテーブルはプレフィックス名を使用して他のケースと隔離され、テストケースの実行時に相互に影響しないようになっています。

```ts
import { MockDatabase } from '@nocobase/test';

describe('私のスイート', () => {
  let db;

  beforeEach(async () => {
    db = new MockDatabase();

    db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });

    await db.sync();
  });

  test('私のケース', async () => {
    const postRepository = db.getRepository('posts');
    const p1 = await postRepository.create({
      values: {
        title: 'こんにちは',
      },
    });

    expect(p1.get('title')).toEqual('こんにちは');
  });
});
```

### MockServer

モックサーバーも[Application](/api/server/application)クラスを継承しており、内蔵のデータベースインスタンスはモックデータベースクラスによって生成され、[superagent](https://www.npmjs.com/package/superagent)に基づくリクエストプロキシ機能を簡単に生成できます。リクエストの送信からレスポンスの取得までの書き方も`.resource('posts').create()`を統合しており、より簡素化されています。

```ts
import { mockServer } from '@nocobase/test';

describe('私のスイート', () => {
  let app;
  let agent;
  let db;

  beforeEach(async () => {
    app = mockServer();
    agent = app.agent();

    db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });

    await db.sync();
    await app.load();
  });

  test('私のケース', async () => {
    const { body } = await agent.resource('posts').create({
      values: {
        title: 'こんにちは',
      },
    });

    expect(body.data.title).toEqual('こんにちは');
  });
});
```

## 例

以前の[リソースと操作](development/guide/resources-actions)章の機能を例に、プラグインのテストを作成します：

```ts
import { mockServer } from '@nocobase/test';
import Plugin from '../../src/server';

describe('ショップアクション', () => {
  let app;
  let agent;
  let db;

  beforeEach(async () => {
    app = mockServer();
    app.plugin(Plugin);
    agent = app.agent();
    db = app.db;

    await app.load();
    await db.sync();
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('商品注文ケース', async () => {
    const { body: product } = await agent.resource('products').create({
      values: {
        title: 'iPhone 14 Pro',
        price: 7999,
        enabled: true,
        inventory: 1,
      },
    });
    expect(product.data.price).toEqual(7999);

    const { body: order } = await agent.resource('orders').create({
      values: {
        productId: product.data.id,
      },
    });
    expect(order.data.totalPrice).toEqual(7999);
    expect(order.data.status).toEqual(0);

    const { body: deliveredOrder } = await agent.resource('orders').deliver({
      filterByTk: order.data.id,
      values: {
        provider: 'SF',
        trackingNumber: '123456789',
      },
    });
    expect(deliveredOrder.data.status).toBe(2);
    expect(deliveredOrder.data.delivery.trackingNumber).toBe('123456789');
  });
});
```

作成が完了したら、コマンドラインでテストコマンドを実行します：

```bash
yarn test packages/samples/shop-actions
```

このテストでは、以下の項目を検証します：

1. 商品が正常に作成できること；
2. 注文が正常に作成できること；
3. 注文が正常に発送できること；

もちろん、これは最も基本的な例であり、ビジネス上は不完全ですが、全体のテストプロセスを示すための参考となります。

## 小結

本章に関連するサンプルコードは、対応するパッケージ [packages/samples/shop-actions](https://github.com/nocobase/nocobase/tree/main/packages/samples/shop-actions) に統合されており、ローカルで直接実行して結果を確認できます。

