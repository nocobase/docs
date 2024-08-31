# API Reference

NocoBase currently utilizes [G2Plot](https://g2plot.antv.antgroup.com/) as its default chart library, offering a selection of commonly used chart components. Beyond the default options, NocoBase allows for the extension of additional chart components, including the integration of other chart libraries such as ECharts. This section focuses on how to extend and incorporate new chart components.

## Adding Charts

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    // Add a group of charts
    plugin.charts.addGroup('custom', [...]);

    // Set a group of charts,
    // can be used for overriding an existing group
    plugin.charts.setGroup('custom', [...]);

    // Append a chart to an existing group
    // The name of the chart must be unique within the group
    plugin.charts.add('Built-in', CustomChart);
  }
}
```

## Methods

**`addGroup`**

Adds a group of charts.

- name `string` - The group key, which must be unique.
- charts `ChartType[]` - An array of charts.

**`setGroup`**

Defines or overrides a group of charts.

- name `string` - The group key.
- charts `ChartType[]` - An array of charts.

**`add`**

Adds a chart to an existing group; the chart name must be unique within that group.

- group `string` - The group key.
- chart `ChartType` - The chart.

## ChartType

Located at `/src/client/chart/chart.ts`

`ChartType` outlines the essential properties and interfaces required for a chart class.

**Properties**

- name `string` - A unique identifier (key) for the chart type.
- title `string` - The title displayed for the chart type.
- component `React.FC<any>` - The React component used to render the chart.
- schema `ISchema` - The UI Schema utilized for the chart’s basic visualization configuration.

![](https://static-docs.nocobase.com/0a884208a26048cf58d4027626df7078.png)

**Interfaces**

**`init`**

```typescript
init?: (
    fields: FieldOption[],
    query: {
      measures?: QueryProps['measures'];
      dimensions?: QueryProps['dimensions'];
    },
  ) => {
    general?: any;
    advanced?: any;
  };
```

Optional. Initializes the default chart configuration.

Parameters:

1. Metadata fields from the current Collection.
2. The current configuration of measures and dimensions.

Returns:

- general - The basic configuration of the chart.
- advanced - The JSON configuration of the chart.

(Note: Extensive type definitions exist here; please refer to the source code for more details.)

**`render`**

```typescript
export type RenderProps = {
  data: Record<string, any>[];
  general: any;
  advanced: any;
  fieldProps: {
    [field: string]: {
      label: string;
      transformer: (val: any) => string;
    };
  };
};

render: (props: RenderProps) => React.FC<any>;
```

Accepts the chart’s metadata configuration, including data, chart settings, and field configurations (metadata + data transformation), and returns a chart component for rendering.

**`getReference`**

```typescript
getReference?: () => {
    title: string;
    link: string;
  };
```

Optional. Retrieves reference documentation for the current chart component.

## Chart

The `Chart` class offers a foundational implementation of `ChartType`, typically requiring only a `new Chart` or `extends Chart` to integrate a new chart.

**Properties**

- name `string` - A unique identifier (key) for the chart type.
- title `string` - The title displayed for the chart type.
- component `React.FC<any>` - The React component used to render the chart.
- config `Config[]` - The UI Schema configuration of the chart, accessible via `config`.

**`config`**

Located at `/src/client/chart/configs.ts`

`config` accepts an array of configurations, and the `schema getter` in the `Chart` class converts these configurations into a UI Schema for the chart’s basic setup.

Configurations can be mixed and matched in the following ways:

1. Raw UI Schema: If fields configured in the "data configuration" section are to be used in the UI Schema, you can apply `x-reactions': '{{ useChartFields }}'`.
2. Predefined UI Schema.

Example: `config: ['field']`

Generates:

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

3. Predefined UI Schema with parameter replacement, where `property` is the key of the predefined UI Schema.

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

Generates:

```typescript
{
  angleField: {
    title: 'angleField',
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-reactions': '{{ useChartFields }}',
    required,
    defaultValue: 'default'
  }
}
```

You can add new predefined UI Schema using the `addConfigs` method.

For additional usage examples, refer to `/src/client/chart/g2plot/index.ts`.

**Methods**

**`infer`**

```typescript
infer: (
    fields: FieldOption[],
    { measures, dimensions }: {
      measures?: QueryProps['measures'];
      dimensions?: QueryProps['dimensions'];
    },
  ) => {
    xField: FieldOption;
    yField: FieldOption;
    seriesField: FieldOption;
    yFields: FieldOption[];
  };
```

The `infer` method is used to infer the values of various fields in the chart configuration based on the measure and dimension settings, reducing redundant configurations.

The `infer` method accepts two parameters:

1. Metadata fields from the current Collection, which serve as the basis for inference.
2. The current configuration of measures and dimensions.

The inference result returns:

- `xField` - x-axis field.
- `yField` - y-axis field.
- `seriesField` - Category field, which can also be used as a `colorField`.
- `yFields` - Multiple y-axis fields, typically for dual-axis charts.

After obtaining the inference result, it can be combined with the definition of the [`init` method](#init) to set default values in the chart configuration.

**`getProps`**

```typescript
getProps: (props: RenderProps) => any;
```

Transforms the metadata configuration related to the chart, including data, chart settings, field properties, data transformation, etc., into properties for the chart rendering component. It can also return default properties that are not exposed in the configuration. The default `render` method uses `getProps` to acquire chart component properties and pass them to the chart component. This method typically requires implementation based on the specific chart component in use.

## Examples

- [src/client/chart/g2plot](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/g2plot)

- [src/client/chart/antd](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/antd)

- [Chart Extension Tutorial](../step-by-step/index.md)
