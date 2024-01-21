# 核心概念

在 RESTful API 设计中，"Resource"（资源）和 "Action"（动作）是两个关键概念，它们定义了 API 的核心结构和行为。

- **Resource（资源）：**
  - **定义：** 是 API 中的核心实体，它代表了应用程序中的某个数据或对象。每个资源都有一个唯一的标识符（URI），用于访问该资源。资源可以是具体的实体（如用户、文章）或抽象概念（如订单、评论）。
  - **例子：** 
    - `/users` 表示用户资源
    - `/articles` 表示文章资源

- **Action（操作）：**
  - **定义：** 是对资源执行的操作或行为，它定义了客户端可以对资源执行的操作类型。在 RESTful API 中，常用的 HTTP 方法（动词）如 GET、POST、PUT、DELETE 等被用于表示对资源的不同操作。
  - **例子：** 
    - `GET /users` 表示获取所有用户资源的操作
    - `POST /users` 表示创建新用户资源的操作
    - `PUT /users/{id}` 表示更新特定用户资源的操作
    - `DELETE /users/{id}` 表示删除特定用户资源的操作

综合来说，RESTful API 的设计理念是基于资源的，每个资源通过唯一的 URI 进行标识，并使用标准的 HTTP 方法来定义对资源的操作。资源和动作的结合使 API 更加直观和符合自然语言的表达方式，提高了可读性和可维护性。

## NocoBase 的 Resource & Action 与 RESTful API 的差异

### 资源

在 NocoBase 中，资源（resource）分为 collection 和 association

- collection 资源，如 `/users`，`/articles`
- association 资源，如 `/users/{uid}/articles`

在 NocoBase 中，资源最多只有两层结构，不支持更多层级，如 `/users/{uid}/articles/{aid}/comments`。因为在关系模型中，所有的数据关系都可以划分为一对一、一对多、多对一、多对多关系，这四种基本类型只需要两层结构即可，更复杂的情况，可以放在筛选里处理。

### 操作

在 NocoBase 中，操作（Action）不依赖于请求方法，而是需要显式定义

Collection 资源

| 资源操作 | NocoBase HTTP API | RESTful API |
| -- | -- | -- |
| 查看用户列表 | `GET /users:list` | `GET /users` |
| 新增用户 | `POST /users:create` | `POST /users` |
| 查看某用户详情 | `POST /users:get/{id}` | `GET /users/{id}` |
| 更新某用户 | `POST /users:update/{id}` | `PUT /users/{id}` |
| 删除某用户 | `POST /users:destroy/{id}` | `DELETE /users/{id}` |

Association 资源

| 资源操作 | NocoBase HTTP API | RESTful API |
| -- | -- | -- |
| 获取所有用户资源 | `GET /users/{uid}/articles:list` | `GET /users/{uid}/articles` |
| 创建新用户资源 | `POST /users/{uid}/articles:create` | `POST /users/{uid}/articles` |
| 获取特定用户资源 | `POST /users/{uid}/articles:get/{aid}` | `GET /users/{uid}/articles/{aid}` |
| 更新特定用户资源 | `POST /users/{uid}/articles:update/{aid}` | `PUT /users/{uid}/articles/{aid}` |
| 删除特定用户资源 | `POST /users/{uid}/articles:destroy/{aid}` | `DELETE /users/{uid}/articles/{aid}` |

以上 list、create、get、update、destroy 操作可以与标准的 RESTful API 映射。除此之外，也可以有更多自定义的操作，如：

| 资源操作 | NocoBase HTTP API |
| -- | -- |
| 登录用户 | `POST /users:signIn` |
| 注销用户 | `POST /users:signOut` |

### 请求格式

NocoBase 资源的请求格式为

```bash
<GET|POST>   /api/<collection>:<action>
<GET|POST>   /api/<collection>:<action>/<filterByTk>
<GET|POST>   /api/<collection>/<sourceId>/<association>:<action>
<GET|POST>   /api/<collection>/<sourceId>/<association>:<action>/<filterByTk>
```

所有资源都通过 filterByTk 定位

- collection 资源，filterByTk 必须是唯一的
- association 资源，filterByTk 可能并不是唯一的，需要同时结合 sourceId 来定位。

### 响应格式

响应的格式

```ts
type ResponseResult = {
  data?: any; // 主体数据
  meta?: any; // 附加数据
  errors?: ResponseError[]; // 报错
};

type ResponseError = {
  code?: string;
  message: string;
};
```

查看列表

```bash
GET /api/posts:list

Response 200 (application/json)

{
  data: [
    {
      id: 1
    }
  ],
  meta: {
    count: 1
    page: 1,
    pageSize: 1,
    totalPage: 1
  },
}
```

查看详情

```bash
GET /api/posts:get/1

Response 200 (application/json)

{
  data: {
    id: 1
  },
}
```

报错

```bash
POST /api/posts:create

Response 400 (application/json)

{
  errors: [
    {
      message: 'name must be required',
    },
  ],
}
```
