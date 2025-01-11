# FAQ

## How should JSON configuration be used?

Refer to the documentation or use a demo to understand the properties supported by different components through the chart component reference link. Configuration is done using JSON key-value pairs.

<img src="https://static-docs.nocobase.com/202404212046877.png"/><br />

<img src="https://static-docs.nocobase.com/202404212047075.png"/>

### Example: Changing the Order of Table Columns

The table component used is Antd's table component. Open the reference link <a href="https://ant.design/components/table/" target="_blank">Table</a>. The API section corresponds to all the configurable properties supported by the component.

<img src="https://static-docs.nocobase.com/202404212052108.png"/>

To adjust the order of table columns, modify the `columns` configuration. Example:

```ts
{
  "columns": [
    { "key": "fieldName1", "dataIndex": "fieldName1", "title": "fieldTitle1" },
    { "key": "fieldName2", "dataIndex": "fieldName2", "title": "fieldTitle2" }
  ]
}
```

## Can JSON configuration support the use of functions?

JavaScript expressions can be wrapped in `{{}}`. Example:

```json
{
  "label": {
    "type": "inner",
    "content": "{{ ({ percent }) => `${(percent * 100).toFixed(0)}%` }}"
  }
}
```

## What is the primary use case for custom fields in chart filter blocks?

When there are charts from different data tables within a chart block and the same filter field is needed to filter these charts, [custom fields](./user/filter.md#custom-fields) can be used. For example, you might want to filter data within a specific time period.
