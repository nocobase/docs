# Configuration Panel

The chart configuration panel is organized into three primary sections: Data Configuration, Chart Configuration, and Chart Preview.

![Configuration Panel Image](https://static-docs.nocobase.com/202404192019222.png)

## Data Configuration

![Data Configuration Image](https://static-docs.nocobase.com/202404192020544.png)

- The drop-down at the top represents the current Collection being configured, which can be switched using the drop-down menu.
- Once the configuration is complete, clicking "Run Query" will retrieve the data according to the settings. The "Data" panel will display the resulting data.

### Measures

![Measures Image](https://static-docs.nocobase.com/202404192023854.png)

Measure fields contain the key data that the chart will display. These fields can be aggregated using functions such as `Sum`, `Count`, `Avg`, `Max`, and `Min`. You can add multiple measure fields, and assign aliases to them as needed.

### Dimensions

![Dimensions Image](https://static-docs.nocobase.com/202404192025717.png)

Dimension fields determine how the data is grouped within the chart. For date-type fields, various formatting options are available, as shown in the image. Formatting is handled by database functions (e.g., `date_format` in MySQL). For other data types, refer to the [Data Transformation](#Data Transformation) section.

:::info
**Dimension Formatting VS Data Transformation**

- Dimension formatting occurs before the final data is fetched, grouping data according to the formatted dimension values. This is commonly needed when filtering data by time periods.
- Data transformation further refines the data after it is retrieved, enhancing readability and presentation. This transformation is applied on the frontend.
  :::

### Filter

![Filter Image](https://static-docs.nocobase.com/202404192029597.png)

Filters are applied to the data before grouping. You can use variables for dynamic filtering:

- Current User: Information related to the currently logged-in user.
- Date Variables: Date ranges dynamically calculated based on the current date.
  - Current Filter: Custom filter fields set within the current chart block. Refer to [Filter Block](./filter.md).

### Sort and Limit

![Sort and Limit Image](https://static-docs.nocobase.com/202404192034106.png)

The default DataSet is limited to a maximum of 2000 entries.

### Cache

![Cache Image](https://static-docs.nocobase.com/202404192035918.png)

When enabled cache, the chart will display data from the cache. You can configure the cache duration as needed.

## Chart Configuration

### Container Configuration

This section allows you to configure the properties of the container component that displays the chart.

- Chart Title
- Show Chart Border

![Container Configuration Image](https://static-docs.nocobase.com/202404192037644.png)

The display effect of the chart title:

![Chart Title Display Image](https://static-docs.nocobase.com/202404192048473.png)

The display effect when showing the chart border:

![Chart Border Display Image](https://static-docs.nocobase.com/202404192048223.png)

### Chart Configuration

![Chart Configuration Image](https://static-docs.nocobase.com/202404192050696.png)

- **Chart Type**: This is where you select the type of chart to display. NocoBase uses <a href="https://g2plot.antv.antgroup.com/" target="_blank">Ant Design Charts</a> 2.x as the default chart library. To extend and use other chart libraries or components, see the [Development Guide](../dev/index.md).
- **Basic Configuration**: After selecting a chart type, basic visual configuration options appear, such as fields for the x-axis, y-axis, and classification. These field configurations are provided via dropdown menus, which list the basic fields and field aliases from the Collection.
- **JSON Configuration**: If the basic configuration doesn’t meet your requirements, you can configure additional chart component properties using JSON. Refer to the chart component documentation for details. To include JavaScript expressions in the JSON configuration, wrap them in `{{}}`. For example:

```json
{
  "label": {
    "type": "inner",
    "content": "{{ ({ percent }) => `${(percent * 100).toFixed(0)}%` }}"
  }
}
```

## Data Transformation

![Data Transformation Image](https://static-docs.nocobase.com/202404192109597.png)

Data transformation enables further processing of response data. The supported data types for transformation are `number`, `date`, `time`, and `datetime`. For fields not belonging to these types, you can manually assign one of these types to apply the corresponding transformation methods.

Multiple transformation methods can be applied to the same field. The transformations are executed in sequence, with each step passing its result to the next. You can reorder the transformation steps by dragging them.

:::warning
Be mindful that some transformation methods may alter the original data type. When applying multiple transformations, ensure that you choose the correct method based on the data type after each step. For instance, when formatting a number as currency by adjusting precision and adding a prefix, you should first apply the precision adjustment and then the prefix. This is because after adding the prefix, the number is converted to a string, and further precision adjustments will no longer apply.
:::

Supported transformation methods:

| Type                                  | Method         | Description                                                                                                                   | Converted Type     |
| ------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Number (`number`)                     | Prefix         |                                                                                                                               | `string`           |
|                                       | Suffix         |                                                                                                                               | `string`           |
|                                       | Precision      |`1`, `1.0`, `1.00`, `1.000`.                                                                                                   | `number`           |
|                                       | Separator      |`100,000.00` (English), `100.000,00` (German), etc.                                                                            | `string`           |
|                                       | Percentage     |                                                                                                                               | `string`           |
|                                       | Scientific Notation |                                                                                                                          | `number`           |
|                                       | Abbreviation   | `1K`, `1M`, `1T`, `1B`, etc.                                                                                                 | `string`           |
| DateTime (`datetime`, `date`, `time`) | Formatting     | Uses preset or custom formats like `YYYY-MM-DD`. Refer to the [dayjs](https://day.js.org/docs/en/display/format) documentation. | `string`           |
|                                       | Prefix         |                                                                                                                               | `string`           |
|                                       | Suffix         |                                                                                                                               | `string`           |
| String (`string`)                     | Type Conversion| Converts the string into another type, such as date/time or number.                                                           | `Date` \| `number` |
|                                       | Prefix         |                                                                                                                               | `string`           |
|                                       | Suffix         |                                                                                                                               | `string`           |

