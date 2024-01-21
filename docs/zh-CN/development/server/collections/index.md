---
tocDepth: 5
---

# Collection 配置

Collection 是所有种类数据的集合，中文翻译为「数据表」，如订单、商品、用户、评论等都是 Collection。Collection 也是一种用于描述数据结构的协议。

## CollectionOptions

```ts
interface CollectionOptions {
  name: string;
  title?: string;
  // 父子继承
  inherits?: string | string[];
  fields?: FieldOptions[];
  timestamps?: boolean;
  paranoid?: boolean;
  sortable?: CollectionSortable;
  model?: string;
  repository?: string;
  [key: string]: any;
}
```

### `name`

数据表标识

```ts
interface CollectionOptions {
  name: string;
}
```

不同 Collection 通过 name 区分，如：

```ts
// 订单
{
  name: 'orders',
}
// 商品
{
  name: 'products',
}
// 用户
{
  name: 'users',
}
// 评论
{
  name: 'comments',
}
```

### `title`

数据表标题，用于优化显示的文案。

```ts
interface CollectionOptions {
  title?: string;
}
```

示例

```ts
{
  name: 'orders',
  title: '订单',
}
```

### `inherits`

用于表示继承关系，如 b 继承 a

```ts
{
  name: 'a'
}
// b 继承 a
{
  name: 'b',
  inherits: 'a',
}
```

多继承

```ts
{
  name: 'a'
}
{
  name: 'b',
}
{
  name: 'c'
  inherits: ['a', 'b'],
}
```

### `repository`

数据操作类

```ts
// 定义一个 Repository
class UserRepository {}

// collection 配置
{
  name: 'users',
  repository: UserRepository,
}

// 用法
const repository: UserRepository = dataSource.getRepository('users');
const instance: UserModel = await repository.create();
```

### `model`

数据模型类

```ts
// 定义一个 Model
class UserModel {}

// collection 配置
{
  name: 'users',
  model: UserModel,
}

// 用法
const repository = dataSource.getRepository('users');
const instance: UserModel = await repository.create();
```

### `fields`

```ts
interface CollectionOptions {
  fields?: CollectionFieldOptions[];
}
```

## CollectionFieldOptions

```ts
interface CollectionFieldOptions {
  name: string;
  type?: string;
  interface?: string;
  uiSchema?: ISchema;
  defaultValue?: any;
  [key: string]: any;
}
```

### `name`

### `type`

### `interface`

### `uiSchema`
