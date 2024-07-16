# REST API 数据源

<PluginInfo commercial="true" name="data-source-rest-api"></PluginInfo>

## 介绍

用于接入 REST API 来源的数据。

## 安装

该插件为商业插件，需要通过插件管理器上传并激活插件

![20240323162741](https://static-docs.nocobase.com/20240323162741.png)

## 添加 REST API 源

激活插件之后，在数据源管理的 Add new 下拉菜单中选择 REST API。

![20240716205411](https://static-docs.nocobase.com/20240716205411.png)

配置 REST API 源

![20240716205903](https://static-docs.nocobase.com/20240716205903.png)

重要参数说明

- Base URL：
- 请求头：
- 自定义变量：

## 添加 Collection

RESTful 的资源就是 NocoBase 的 Collection，例如 Users 资源

```bash
GET /users
POST /users
GET /users/1
PUT /users/1
DELETE /users/1
```

映射到 NocoBase API 里的配置为

```bash
GET /users:list
POST /users:create
POST /users:get?filterByTk=1
POST /users:update?filterByTk=1
POST /users:destroy?filterByTk=1
```

完整的 NocoBase API 设计规范参考 API 文档

![20240716213344](https://static-docs.nocobase.com/20240716213344.png)

查看「NocoBase API - Core」章节

![20240716213258](https://static-docs.nocobase.com/20240716213258.png)

REST API 数据源的 Collection 配置如下

### List

配置查看资源列表的接口映射

![20240716211351](https://static-docs.nocobase.com/20240716211351.png)

### Get

配置查看资源详情的接口映射

![20240716211532](https://static-docs.nocobase.com/20240716211532.png)

### Create

配置创建资源的接口映射

![20240716211634](https://static-docs.nocobase.com/20240716211634.png)

### Update

配置更新资源的接口映射

![20240716211733](https://static-docs.nocobase.com/20240716211733.png)

### Destroy

配置删除资源的接口映射

![20240716211808](https://static-docs.nocobase.com/20240716211808.png)

## 调试 API

可以点击 Try it out 进行调试

![20240716212722](https://static-docs.nocobase.com/20240716212722.png)

调试流程说明

![20240716221214](https://static-docs.nocobase.com/20240716221214.png)

## 变量

REST API 数据源提供了三类变量用于接口的对接

- 数据源自定义变量
- NocoBase 请求
- 第三方响应

### 数据源自定义变量

![20240716221937](https://static-docs.nocobase.com/20240716221937.png)

![20240716221858](https://static-docs.nocobase.com/20240716221858.png)

### NocoBase 请求

- Params：URL 查询参数（Search Params），各个接口的 Params 有所不同；
- Headers：请求体，主要提供了一些 NocoBase 自定义的 X- 信息；
- Body：请求的 Body；
- Token：当前 NocoBase 请求的 API token。

![20240716222042](https://static-docs.nocobase.com/20240716222042.png)

### 第三方响应

目前提供的只有响应的 Body

![20240716222303](https://static-docs.nocobase.com/20240716222303.png)

各个接口对接时可用变量如下：

### List

| 参数 | 说明 |
| -- | -- |
| request.params.page | 分页参数 |
| request.params.pageSize | 每页显示数量 |
| request.params.filter | 条件过滤 |
| request.params.sort | 排序 |
| request.params.appends | 按需加载的字段，一般用于关系字段的按需加载 |
| request.params.fields | 接口只输出哪些字段（白名单） |
| request.params.except | 排除哪些字段（黑名单） |

### Get

| 参数 | 说明 |
| -- | -- |
| request.params.filterByTk | 每页显示数量 |
| request.params.filter | 条件过滤 |
| request.params.appends | 按需加载的字段，一般用于关系字段的按需加载 |
| request.params.fields | 接口只输出哪些字段（白名单） |
| request.params.except | 排除哪些字段（黑名单） |

### Create

| 参数 | 说明 |
| -- | -- |
| request.params.whiteList | 白名单 |
| request.params.blacklist | 黑名单 |
| request.body | 创建的初始化数据 |

### Update

| 参数 | 说明 |
| -- | -- |
| request.params.filterByTk | 每页显示数量 |
| request.params.filter | 条件过滤 |
| request.params.whiteList | 白名单 |
| request.params.blacklist | 黑名单 |
| request.body | 更新的数据 |

### Destroy

| 参数 | 说明 |
| -- | -- |
| request.params.filterByTk | 每页显示数量 |
| request.params.filter | 条件过滤 |

## 配置字段

从适配的资源的 CRUD 接口的数据中，提取字段的元数据（Fields）作为 collection 的字段

![20240716223636](https://static-docs.nocobase.com/20240716223636.png)

提取字段元数据

![20240716224010](https://static-docs.nocobase.com/20240716224010.png)

字段及预览

![20240716224403](https://static-docs.nocobase.com/20240716224403.png)

编辑字段（和其他数据源的方式类似）

![20240716224704](https://static-docs.nocobase.com/20240716224704.png)

## 添加 REST API 数据源区块

Collection 配置好了之后，就可以去界面添加区块了

![20240716225120](https://static-docs.nocobase.com/20240716225120.png)
