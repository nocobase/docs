# 常见问题

## JSON 配置应该如何使用？

通过图表组件参考链接，查阅文档或通过 Demo 了解不同组件支持的属性配置，通过 JSON 键值对的形式进行配置。

<img src="https://static-docs.nocobase.com/202404212046877.png"/><br />

<img src="https://static-docs.nocobase.com/202404212047075.png"/>

### 以调换表格列顺序为例

表格使用的组件是 Antd 的表格组件，打开参考链接 <a href="https://ant.design/components/table/" target="_blank">Table</a>, API 部分即对应组件所有支持的可配置属性。

<img src="https://static-docs.nocobase.com/202404212052108.png"/>

要调整表格列顺序，需要调整 `columns` 配置，示例：

```ts
{
  "columns": [
    { "key": "fieldName1", "dataIndex": "fieldName1", "title": "fieldTitle1" },
    { "key": "fieldName2", "dataIndex": "fieldName2", "title": "fieldTitle2" }
  ]
}
```

## JSON 配置能否支持使用函数？

JavaScript 表达式可以使用 `{{}}` 包裹。示例：

```json
{
  "label": {
    "type": "inner",
    "content": "{{ ({ percent }) => `${(percent * 100).toFixed(0)}%` }}"
  }
}
```

## 图表筛选区块的自定义字段的主要使用场景？

当一个图表区块内有不同数据表的图表，并且需要用同一个筛选字段对这些图表过滤时，可以使用[自定义字段](./user/filter.md#自定义字段)。比如需要过滤一个时间周期内的数据。
