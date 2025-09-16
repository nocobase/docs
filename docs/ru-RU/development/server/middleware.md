### **Промежуточное ПО (Middleware)**

#### **Как зарегистрировать промежуточное ПО?**

Метод регистрации промежуточного ПО обычно записывается в методе `load`:

```ts
export class MyPlugin extends Plugin {
  load() {
    this.app.acl.use();
    this.app.resourcer.use();
    this.app.use();
  }
}
```

#### **Примечания**

- `app.acl.use()` — добавляет промежуточное ПО на уровне ресурса и разрешений, которое выполняется до проверки прав доступа.
- `app.resourcer.use()` — добавляет промежуточное ПО на уровне ресурса, которое выполняется только при запросе определённого ресурса.
- `app.use()` — добавляет промежуточное ПО на уровне приложения, которое выполняется при каждом запросе.

#### **Модель «луковицы» (Onion Circle Model)**

```ts
app.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(1);
  await next();
  ctx.body.push(2);
});

app.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(3);
  await next();
  ctx.body.push(4);
});
```

При переходе по адресу `http://localhost:13000/api/hello` браузер вернёт следующие данные:

```json
{"data": [1,3,4,2]}
```

#### **Встроенное промежуточное ПО и порядок выполнения**

1. `cors`
2. `bodyParser`
3. `i18n`
4. `dataWrapping`
5. `db2resource`
6. `restApi`
7. `parseToken`
8. `checkRole`
9. `acl`
10. `acl.use()` — дополнительное промежуточное ПО
11. `resourcer.use()` — дополнительное промежуточное ПО
12. `action handler`
13. `app.use()` — дополнительное промежуточное ПО

Вы можете также использовать `before` или `after`, чтобы вставить промежуточное ПО в определённое место по тегу:

```ts
app.use(m1, { tag: 'restApi' });
app.resourcer.use(m2, { tag: 'parseToken' });
app.resourcer.use(m3, { tag: 'checkRole' });

// m4 будет выполнено до m1
app.use(m4, { before: 'restApi' });

// m5 будет вставлено между m2 и m3
app.resourcer.use(m5, { after: 'parseToken', before: 'checkRole' });
```

Если местоположение не указано, порядок выполнения добавленного промежуточного ПО следующий:

1. Промежуточное ПО, добавленное через `acl.use`, выполняется первым.
2. Затем — через `resourcer.use`, включая обработчик middleware и action handler.
3. И, наконец, промежуточное ПО, добавленное через `app.use`.

**Пример:**

```ts
app.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(1);
  await next();
  ctx.body.push(2);
});

app.resourcer.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(3);
  await next();
  ctx.body.push(4);
});

app.acl.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(5);
  await next();
  ctx.body.push(6);
});

app.resourcer.define({
  name: 'test',
  actions: {
    async list(ctx, next) {
      ctx.body = ctx.body || [];
      ctx.body.push(7);
      await next();
      ctx.body.push(8);
    },
  },
});
```

- При переходе по `http://localhost:13000/api/hello` браузер вернёт:
  ```json
  {"data": [1,2]}
  ```

- При переходе по `http://localhost:13000/api/test:list` браузер вернёт:
  ```json
  {"data": [5,3,7,1,2,8,4,6]}
  ```

#### **Ресурс не определён**

Промежуточное ПО, добавленное через `resourcer.use()`, не будет выполнено, если ресурс не определён.

**Пример:**

```ts
app.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(1);
  await next();
  ctx.body.push(2);
});

app.resourcer.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(3);
  await next();
  ctx.body.push(4);
});
```

При переходе по `http://localhost:13000/api/hello` браузер вернёт:

```json
{"data": [1,2]}
```

В этом примере ресурс `hello` не определён, поэтому выполнение не попадает в `resourcer`, и промежуточное ПО внутри него не выполняется.

#### **Использование промежуточного ПО**

TODO

#### **Пример**

[samples/ratelimit](https://github.com/nocobase/nocobase/blob/main/packages/samples/ratelimit/) — ограничение частоты запросов по IP-адресу
