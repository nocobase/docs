# JSON 解析节点

用于将一些节点产生的复杂 JSON 数据进行解析，以便后续节点使用。例如 SQL 操作和 HTTP 请求节点的结果，都可能是 JSON 格式的数据，可以通过该节点将其解析为需要的值和变量格式，以便后续节点使用。

## 安装

:::info{title=提示}
该插件为商业插件，请查看 [NocoBase 商业版本](https://www.nocobase.com/commercial-cn)了解详情。
:::

## 使用手册

### 创建节点

在工作流配置界面中，点击流程中的加号（“+”）按钮，添加“JSON 解析”节点：

![创建节点](./create-node.png)

:::info{title=提示}
通常会将 JSON 解析节点创建在其他数据节点的下方，以便对其进行解析。
:::

### 节点配置

#### 解析引擎

JSON 解析节点通过不同的解析引擎来支持不同的解析语法，可以根据自己的偏好和各个引擎的特色来进行选择。目前支持三种解析引擎：

- [JMESPath](https://jmespath.org/)
- [JSONPath Plus](https://jsonpath-plus.github.io/JSONPath/docs/ts/)
- [JSONata](https://jsonata.org/)

![解析引擎选择](./query-engine.png)

#### 数据源

数据源可以是上游节点的结果，也可以是流程上下文中的数据对象，通常是一个没有内置结构化的数据对象，例如 SQL 节点的结果，或者 HTTP 请求节点的结果。

![数据源](./datasource.png)

:::info{title=提示}
通常数据表相关节点的数据对象都是通过数据表配置信息结构化过的，一般不需要通过 JSON 解析节点进行解析。
:::

#### 解析表达式

基于解析需求和解析引擎的不同，自定义的解析表达式。

![解析表达式](./query-expression.png)

:::info{title=提示}
不同解析引擎提供不同的解析语法，具体可以查阅链接中的文档。
:::

#### 属性映射

当解析的结果是一个对象（或对象数组）时，可以通过属性映射进一步将所需要的属性映射为子级变量，以供后续节点使用。

![属性映射](./properties-mapping.png)

:::info{title=提示}
对于对象（或对象数组）结果，如果不进行属性映射，则会将整个对象（或对象数组）作为一个变量保存在节点的结果中，无法以变量的方式直接使用对象的属性值。
:::

### 示例

假设需要解析的数据是前序的 SQL 节点用于查询数据，其结果为一组订单数据：

```json
[
  [
    {
      "id": 1,
      "products": [
        {
          "id": 1,
          "title": "Product 1",
          "price": 100,
          "quantity": 1
        },
        {
          "id": 2,
          "title": "Product 2",
          "price": 120,
          "quantity": 2
        }
      ]
    },
    {
      "id": 2,
      "products": [
        {
          "id": 3,
          "title": "Product 3",
          "price": 130,
          "quantity": 1
        },
        {
          "id": 4,
          "title": "Product 4",
          "price": 140,
          "quantity": 2
        }
      ]
    }
  ]
]
```

:::info{title=提示}
以上代码中外层的数组并非错误，而是 SQL 节点返回的正常结果，因为 SQL 节点的结果是一个二元数组，第一个元素是查询的结果行，第二个元素是查询的元信息。
:::

如果我们需要解析并计算出数据中两个订单分别的总价，并和对应的订单 ID 组装成对象，用于更新订单总价，可以按下面的配置：

![示例-解析 SQL 配置](./example-sql-configuration.png)

1. 选择 JSONata 解析引擎；
2. 选择 SQL 节点的结果作为数据源；
3. 使用 JSONata 表达式 `$[0].{"id": id, "total": products.(price * quantity)}` 解析；
4. 选择属性映射，将 `id` 和 `total` 映射为子级变量；

最终的解析结果如下：

```json
[
  {
    "id": 1,
    "total": 340
  },
  {
    "id": 2,
    "total": 410
  }
]
```

之后再循环取值完成的订单数组，更新订单的总价即可。

![更新对应订单的总价](./example-sql-update-order-price.png)
