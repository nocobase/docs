# Extend Chart Types

## Overview

NocoBase uses [Ant Design Charts](https://g2plot.antv.antgroup.com/) as the default chart library, which includes commonly used chart types. Besides the built-in chart types, NocoBase also supports integrating other chart types or libraries, such as ECharts. This section primarily explains how to extend a new chart type.

## Defining a Chart

In the visualization plugin, each chart type is defined using a class that must implement the [ChartType](#charttype) interface. To simplify development, we provide a [Chart](#chart) base class, which partially implements the `ChartType` interface. In most cases, to extend a chart type, you only need to inherit from the `Chart` class and implement the required methods.

```ts
class CustomChart extends Chart {
  constructor({ name, title, Component, config }: ChartProps) {
    // ...
  }

  init(
    fields: FieldOption[],
    {
      measures,
      dimensions,
    }: { measures: MeasureProps[]; dimensions: DimensionProps[] },
  ) {
    // ...
  }

  getProps({ data, general, advanced, fieldProps }: RenderProps) {
    // ...
  }

  getReference() {
    // ...
  }
}
```

### Chart Information

The basic information for a chart type includes:

| Parameter   | Description           |
| ----------- | --------------------- |
| `name`      | Identifier            |
| `title`     | Display title         |
| `Component` | Component used to render the chart |
| `config`    | Basic visualization configuration form |

<img src="https://static-docs.nocobase.com/202404192352571.png"/>

Example:

```ts
new CustomChart({
  name: 'custom',
  title: 'Custom Chart',
  Component: CustomChart,
  config: ['xField', 'yField', 'seriesField'],
});
```

Refer to [Chart](#chart) for specific usage.

### Initializing Chart Configuration

When a user selects a chart, we may want to initialize the chart configuration based on the user’s data query settings to reduce manual configuration.  
Each time a chart is selected, the plugin internally calls the `init()` method of the chart class, passing all the field configurations from the current data table, as well as the current measures and dimensions configuration. The `init()` method can then initialize the chart configuration based on the parameters.  
The `Chart` class includes an `infer()` method, which can be used to easily infer the initial x-axis, y-axis, and category fields configuration.  
Example:

```ts
init(
  fields: FieldOption[],
  {
    measures,
    dimensions,
  }: { measures: MeasureProps[]; dimensions: DimensionProps[] },
) {
  const { xField, yField, seriesField } = this.infer(fields, { measures, dimensions });
  return {
    general: {
      xField: xField?.value,
      yField: yField?.value,
      seriesField: seriesField?.value,
    },
  };
}
```

### Retrieving Chart Component Properties

After obtaining the user’s chart configuration, we may need to further process the data before passing it as properties to the chart component. The `getProps()` method accepts chart data, chart configuration, and related field information as parameters, processes them, and returns the final properties passed to the chart component.

For example, in a “statistics” chart:

```ts
getProps({ data, fieldProps, general, advanced }: RenderProps) {
  const record = data[0] || {};
  const field = general?.field;
  const props = fieldProps[field];
  return {
    value: record[field],
    formatter: props?.transformer,
    ...general,
    ...advanced,
  };
}
```

### Retrieving Chart Component References

The `getReference()` method retrieves reference documentation for the current chart type.

```ts
getReference() {
  return {
    title: this.title,
    link: `https://ant.design/components/${this.name}`,
  };
}
```

## Adding a Chart

After defining the chart class, we need to add the class instance to the data visualization plugin. When selecting charts, they are grouped for display, with the default group being "Built-in".

<img src="https://static-docs.nocobase.com/202404201042045.png"/>

We can add a group of charts or add charts to an existing group.

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    // Add a group of charts
    plugin.charts.addGroup('custom', [...]);

    // Set a group of charts,
    // can be used for overriding an exist group
    plugin.charts.setGroup('custom', [...]);

    // Append a chart to an exist group
    // The name of the chart is required to be unique in a group
    plugin.charts.add('Built-in', new CustomChart({
      // ...
    }));
  }
}
```

Refer to [ChartGroup](#chartgroup) for more details

## Examples

- [src/client/chart/g2plot](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/g2plot)

- [src/client/chart/antd](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/antd)

- [ECharts Integration Example](../step-by-step/index.md)

## API

### ChartGroup

#### `addGroup()`

Add a group of charts.

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    // Add a group of charts
    plugin.charts.addGroup('custom', {
      title: 'Custom',
      charts: [...],
      sort: 1
    });
  }
}
```

**Signature**

- `addGroup(name: string, charts: ChartType[])`

**Types**

```ts
interface Group {
  title: string;
  charts: ChartType[];
  sort?: number;
}
```

**Details**

| Parameter | Type          | Description             |
| --------- | ------------- | ----------------------- |
| `name`    | `string`      | Grouped Chart Title     |
| `charts`  | `ChartType[]` | Array of charts         |
| `sort`    | `number`      | Optional, Grouped Chart Sorting|

#### `add()`

Add a chart to an existing group.

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization';

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    plugin.charts.add(
      'Built-in',
      new CustomChart({
        // ...
      }),
    );
  }
}
```

**Signature**

- `add(group: string, chart: ChartType)`

**Details**

| Parameter  | Type        | Description             |
| ---------- | ----------- | ----------------------- |
| `group`    | `string`    | Unique identifier for the chart group |
| `chart`    | `ChartType` | Chart to add            |

### Chart

#### `constructor()`

Constructor to create a new `Chart` instance.

**Signature**

- `constructor({ name, title, Component, config }: ChartProps)`

**Types**

```ts
export type ChartProps = {
  name: string;
  title: string;
  Component: React.FC<any>;
  config?: Config[];
};

export type FieldConfigProps = Partial<{
  name: string;
  title: string;
  required: boolean;
  defaultValue: any;
  description: string;
  options: { label: string; value: any }[];
  componentProps: Record<string, any>;
}>;
export type ConfigType =
  | (FieldConfigProps & { configType?: string })
  | ((props?: FieldConfigProps) => AnySchemaProperties)
  | AnySchemaProperties;
export type Config = string | ConfigType;
```

**Details**

| Property    | Type                  | Description                       |
| ----------- | --------------------- | --------------------------------- |
| `name`      | `string`              | Unique identifier for the chart   |
| `title`     | `string`              | Display title of the chart        |
| `Component` | `React.FC<any>`       | Component used to render the chart |
| `config`    | [`Config[]`](#config) | Optional. Visualization configuration form |

##### Config

The `config` supports multiple formats, which can be used in combination:

1. UI Schema field configuration. If you want to use fields already configured in the "Data Configuration" section within the UI Schema, you can use `x-reactions': '{{ useChartFields }}'`.

```ts
{
  xField: {
    title: 'xField',
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-reactions': '{{ useChartFields }}',
    required,
  }
}
```

2. Using predefined UI Schema.

For example, `config: ['field']` corresponds to:

```typescript
{
  field: {
    title: 'Field',
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-reactions': '{{ useChartFields }}',
    required,
  }
}
```

3. Using predefined UI Schema with some properties replaced, where `property` refers to the predefined UI Schema identifier.

```typescript
config: [
  {
    property: 'field',
    name: 'angleField',
    title: 'angleField',
    defaultValue: 'default',
  },
];
```

This corresponds to:

```typescript
{
  angleField: {
    title: 'angleField',
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-reactions': '{{ useChartFields }}',
    required,
    defaultValue: 'default',
  }
}
```

You can find all predefined UI Schema options in the <a href="https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/configs.ts" target="_blank">`/src/client/chart/config.ts`</a> file.  
Additionally, you can add new predefined UI Schema options using the [`addConfigs()`](#addconfigs) method.

#### `addConfigTypes()`

Adds predefined UI Schema for the chart's visualization configuration form.

```ts
// Add
const boolean = ({ name, title, defaultValue = false }: FieldConfigProps) => {
  return {
    [name]: {
      'x-content': lang(title),
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Checkbox',
      default: defaultValue,
    },
  };
};
chart.addConfigTypes({ booleanField });

// Usage
new Chart({
  config: [
    'boolean',
    {
      configType: 'boolean',
      name: 'customBooleanField',
      title: 'Custom Boolean Field',
      defaultValue: true,
    },
  ],
});
```

**Signature**

- `addConfigTypes(configs: { [key: string]: ConfigType })`

**Types**

```ts
export type ConfigType =
  | (FieldConfigProps & { configType?: string })
  | ((props?: FieldConfigProps) => AnySchemaProperties)
  | AnySchemaProperties;
```

**Details**

`addConfigTypes()` accepts an object, where the `key` is the unique identifier of the configuration, and the value is a method that retrieves a predefined UI Schema. This method takes parameters that can be replaced and returns the corresponding UI Schema field configuration.

#### `init()`

This function initializes the chart configuration when a chart is selected. It defines the initial settings for the chart’s properties.

**Signature**

```ts
init?: (
  fields: FieldOption[],
  query: {
    measures?: MeasureProps[];
    dimensions?: DimensionProps[];
  },
) => {
  general?: any;
  advanced?: any;
};
```

**Types**

```ts
export type FieldOption = {
  value: string;
  label: string;
  key: string;
  alias?: string;
  name?: string;
  type?: string;
  interface?: string;
  uiSchema?: ISchema;
  target?: string;
  targetFields?: FieldOption[];
};

export type MeasureProps = {
  field: string | string[];
  aggregation?: string;
  alias?: string;
};

export type DimensionProps = {
  field: string | string[];
  alias?: string;
  format?: string;
};
```

**Details**

| Parameter            | Type              | Description                                      |
| -------------------- | ----------------- | ------------------------------------------------ |
| `fields`             | `FieldOption[]`   | Contains key attributes of the fields in the current data table. |
| `query.measures`     | `MeasureProps[]`  | Configuration details for the measure fields.    |
| `query.dimensions`   | `DimensionProps[]`| Configuration details for the dimension fields.  |

#### `infer()`

Deriving the Initial Configuration of Charts.

```ts
// Example for a pie chart
init(fields, { measures, dimensions }) {
  const { xField, yField } = this.infer(fields, { measures, dimensions });
  return {
    general: {
      colorField: xField?.value,
      angleField: yField?.value,
    },
  };
};
```

**Signature**

```ts
infer: (fields: FieldOption[], query: {
  measures?: MeasureProps[];
  dimensions?: DimensionProps[];
}) => {
  xField: FieldOption;
  yField: FieldOption;
  seriesField: FieldOption;
  colorField: FieldOption;
  yFields: FieldOption[];
}
```

**Details**

| Property       | Type            | Description       |
| -------------- | --------------- | ----------------- |
| `xField`       | `FieldOption`   | The field to be used on the x-axis. |
| `yField`       | `FieldOption`   | The field to be used on the y-axis. |
| `seriesField`  | `FieldOption`   | The field representing categories or series. |
| `colorField`   | `FieldOption`   | The field used to define the color in the chart. |
| `yFields`      | `FieldOption[]` | Multiple fields for the y-axis (used in complex charts). |

#### `getProps()`

This function processes the raw chart data and chart configuration metadata and transforms them into properties required by the rendering component.

**signature**

- `getProps({ data, general, advanced, fieldProps }: RenderProps)`

**Types**

```ts
export type RenderProps = {
  data: Record<string, any>[];
  general: any;
  advanced: any;
  fieldProps: {
    [field: string]: {
      label: string;
      transformer: Transformer;
      interface: string;
    };
  };
};
```

| Property       | Type                              | Description                             |
| -------------- | --------------------------------- | --------------------------------------- |
| `data`         | `Record<string, any>[]`           | The raw data to be displayed in the chart. |
| `general`      | `any`                             | The configuration options from the chart’s visualization form. |
| `advanced`     | `any`                             | The advanced JSON-based configuration for the chart. |
| `fieldProps`   | `{ [field: string]: FieldProps }` | Metadata about the fields from the data table, used for display purposes. |

##### FieldProps

| Property       | Type          | Description             |
| -------------- | ------------- | ----------------------- |
| `label`        | `string`      | The label displayed for the field. |
| `transformer`  | `Transformer` | A function for transforming field values. |
| `interface`    | `string`      | The interface type of the field. |

#### `getReference()`

Retrieves reference documentation for the chart component, including the title and a direct link to the documentation.

```ts
getReference() {
  return {
    title: this.title,
    link: `https://ant.design/components/${this.name}`,
  };
}
```

**Signature**

```ts
getReference?: () => {
  title: string;
  link: string;
};
```

### ChartType

#### `name`

- `string`. Identifier for the chart type.

#### `title`

- `string`. The display title of the chart.

#### `Component`

- `React.FC<any>`. The React component used to render the chart.

#### `schema`

- `ISchema`. The UI Schema for the chart’s visualization configuration.

#### `init()`

This function initializes the chart configuration.

**Signature**

```ts
init?: (
  fields: FieldOption[],
  query: {
    measures?: MeasureProps[];
    dimensions?: DimensionProps[];
  },
) => {
  general?: any;
  advanced?: any;
};
```

#### `getProps()`

Handles the processing and retrieval of properties for the chart component.

**Signature**

- `getProps(props: RenderProps): any`

#### `getReference()`

Retrieves reference documentation for the chart component.

**Signature**

```ts
getReference?: () => {
  title: string;
  link: string;
};
```
