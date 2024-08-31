# Configuration Panel

The chart configuration panel is organized into three primary sections: Data Configuration, Chart Configuration, and Chart Preview.

![](https://static-docs.nocobase.com/b397cf9ab751b1652ab7d2de81ec0f11.png)

## Data Configuration

![](https://static-docs.nocobase.com/801c019fc92c2fe756d622585b214d6e.png)

- The top dropdown menu indicates the data table (Collection) currently being configured. You can switch tables using this dropdown.
- After completing the configuration, click "Run query" to retrieve data according to your settings. The "Data" panel will display the resulting data.

## Measures

![](https://static-docs.nocobase.com/35caab4b0dea7c2378e2fe226439aa51.png)

Measure fields represent the core data that the chart will display. These fields can be aggregated using functions such as `Sum`, `Count`, `Avg`, `Max`, and `Min`. You can configure multiple measure fields and assign aliases to them.

## Dimensions

![](https://static-docs.nocobase.com/7d0568757e6d999d67c316c2ff28d8e7.png)

Dimension fields typically serve as the basis for grouping data in your chart. For date-type fields, you can apply formatting options shown in the figure, which are implemented through database functions (e.g., `date_format` in MySQL). For other data types, formatting options are discussed in the [Data Transformation](#数据转换) section.

:::info
**Dimension Formatting vs. Data Transformation**

- Dimension formatting is applied before retrieving the final data, with grouping based on the formatted dimension values. This is particularly useful when filtering data by specific time periods.
- Data transformation is used to further process the response data to improve readability and present the information accurately. This process is carried out on the front end.
  :::

## Filter

![](https://static-docs.nocobase.com/42e35ace7a63776f6ba82325975128b5.png)

Filter configurations allow you to apply filters to the data before it is grouped. Variables such as "Current User" and "Current Date" are available, enabling dynamic filtering in your chart settings.

## Sort and Limit

![](https://static-docs.nocobase.com/a49a841116b5c9a42fb79d3431257651.png)

By default, the dataset is limited to 2000 records.

## Caching

![](https://static-docs.nocobase.com/3d1e3f3282384d50bd7be3a580a07c4f.png)

When caching is enabled, the chart will display data from the cache.

## Chart Configuration

![](https://static-docs.nocobase.com/4b9b518258613b5a8c8d3e3cd7f6f9a8.png)

- Chart Type: The type of chart used for display. NocoBase uses [G2Plot](https://g2plot.antv.antgroup.com/) as its default chart library. To extend functionality to other chart libraries, refer to the [Developer Guide](../dev/index.md).
- Basic Configuration: After selecting the chart type, relevant basic visualization configurations will appear. Field configurations typically offer a dropdown menu that includes the Collection's basic fields and any field aliases.
- JSON Configuration: When the basic configuration options do not meet your needs, you can use JSON to configure additional chart properties. Refer to the [G2Plot Documentation](https://g2plot.antv.antgroup.com/api/plot-api) for guidance.

## Data Transformation

![](https://static-docs.nocobase.com/86511c44dd3825bdcc3954d4132cd7a0.png)

Data transformation allows you to further process the data returned by the interface. Supported data types for transformation include `number`, `date`, `time`, and `datetime`. If a field is not of a supported data type, you can manually set it to one of these types to enable the corresponding transformation methods.
