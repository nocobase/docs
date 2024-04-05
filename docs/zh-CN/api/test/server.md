# Server

## 概览

`@nocobase/test` 为服务端测试提供了一些便捷的方法用于 Mock 服务和数据库。

### 基本使用

```ts
describe('actions', () => {
  let app: MockServer;
  let db: Database;
  let agent: any;

  beforeAll(async () => {
    app = await createMockServer({
      plugins: ['acl', 'users', 'data-source-manager'],
    });
    db = app.db;
    agent = app.agent();
  });

  afterAll(async () => {
    await app.destroy();
  });
});
```

## API

### mockDatabase

### mockServer

### createMockServer

### MockServer

### sleep
