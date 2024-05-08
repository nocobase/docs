# 扩展图表类型

## 概述

NocoBase 使用 <a href="https://g2plot.antv.antgroup.com/" target="_blank">Ant Design Charts</a> 作为默认的图表库，内置了常用的图表类型。除了内置的图表类型，NocoBase 还支持自己扩展接入其他图表类型，也可以接入其他图表库，比如: ECharts. 这一部分主要介绍如何扩展一个新的图表类型。

## 定义图表

在可视化插件中，每个图表类型都用一个类来定义，这个类需要按照 [ChartType](#charttype) 接口的定义进行实现。为了方便理解和开发，我们提供了 [Chart](#chart) 基类，对 `ChartType` 做了部分实现。大多数情况下，扩展的图表类型只需要继承 `Chart` 类，并补充相应的方法即可。

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

### 图表信息

一个图表类型的基本信息包括：

| 参数        | 说明               |
| ----------- | ------------------ |
| `name`      | 标识               |
| `title`     | 展示标题           |
| `Component` | 渲染图表使用的组件 |
| `config`    | 基础可视化配置表单 |

<img src="https://static-docs.nocobase.com/202404192352571.png"/>

示例：

```ts
new CustomChart({
  name: 'custom',
  title: 'Custom Chart',
  Component: CustomChart,
  config: ['xField', 'yField', 'seriesField'],
});
```

具体的用法参考 [Chart](#chart)

### 图表配置初始化

当用户选择了一个图表时，我们可能希望根据用户的数据查询配置，对图表的配置项做初始化处理，减少用户的手动配置操作。  
每次用户选择一个图表后，插件内部会尝试调用图表类的 `init()` 的方法，并传递当前数据表的所有字段配置和当前的度量和纬度配置，`init()` 方法可以根据参数执行初始化图表配置的逻辑。
`Chart` 类内部实现了 `infer()` 方法，可以用于简单推导 x 轴字段、y 轴字段和分类字段的初始配置。  
示例：

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

### 获取图表组件属性

在得到用户配置的图表配置信息以后，我们可能还需要进一步处理，才能作为相应的属性传递给渲染图表的组件。`getProps()` 方法接收图表数据、图表配置和有关的字段信息作为参数，我们可以将这些参数进一步处理，并返回最终传递给图表组件的属性。

以「统计」图表为例：

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

### 获取图表组件参考信息

`getReference()` 方法主要是获取当前图表类型的参考文档信息。

```ts
getReference() {
  return {
    title: this.title,
    link: `https://ant.design/components/${this.name}`,
  };
}
```

## 添加图表

定义好图表类以后，我们还需要将类实例添加到数据可视化插件中。在选择图表的时候，图表分组展示，默认图表分组为「内置」(Built-in).

<img src="https://static-docs.nocobase.com/202404201042045.png"/>

我们可以添加一组图表，也可以像已有分组添加图表。

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

参考 [ChartGroup](#chartgroup)

## 示例

- [src/client/chart/g2plot](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/g2plot)

- [src/client/chart/antd](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/antd)

- [ECharts 集成示例](../step-by-step/index.md)

## API

### ChartGroup

#### `addGroup()`

添加一组图表。

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    // Add a group of charts
    plugin.charts.addGroup('custom', [...]);
  }
}
```

**签名**

- `addGroup(name: string, charts: ChartType[])`

**详细信息**

| 参数     | 类型          | 说明             |
| -------- | ------------- | ---------------- |
| `name`   | `string`      | 图表分组唯一标识 |
| `charts` | `ChartType[]` | 图表数组         |

#### `add()`

向已有分组添加图表。

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

**签名**

- `add(group: string, chart: ChartType)`

**详细信息**

| 参数    | 类型        | 说明             |
| ------- | ----------- | ---------------- |
| `group` | `string`    | 图表分组唯一标识 |
| `chart` | `ChartType` | 图表             |

#### `setGroup()`

设置一组图表，覆盖原有图表。

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);
    // Set a group of charts,
    // can be used for overriding an exist group
    plugin.charts.setGroup('custom', [...]);
  }
}
```

**签名**

- `setGroup(name: string, charts: ChartType[])`

**详细信息**

| 参数     | 类型          | 说明             |
| -------- | ------------- | ---------------- |
| `name`   | `string`      | 图表分组唯一标识 |
| `charts` | `ChartType[]` | 图表数组         |

### Chart

#### `constructor()`

构造函数，新建一个 `Chart` 实例。

**签名**

- `constructor({ name, title, Component, config }: ChartProps)`

**类型**

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
}>;
export type ConfigProps =
  | FieldConfigProps
  | AnySchemaProperties
  | (() => AnySchemaProperties);
export type Config =
  | (ConfigProps & {
      property?: string;
    })
  | string;
```

**详细信息**

| 属性        | 类型                  | 说明                     |
| ----------- | --------------------- | ------------------------ |
| `name`      | `string`              | 图表类型标识             |
| `title`     | `string`              | 图表展示标题             |
| `Component` | `React.FC<any>`       | 图表渲染组件             |
| `config`    | [`Config[]`](#config) | 可选。图表可视化配置表单 |

##### Config

`config` 支持以下几种写法，可以混合使用：

1. UI Schema 字段配置, 在 UI Schema 中如果想使用在「数据配置」部分已经配置好的字段，可以使用 `x-reactions': '{{ useChartFields }}'`.

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

2. 使用预定义好的 UI Schema.

例如: `config: ['field']`

对应生成

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

3. 使用预定义的 UI Schema, 但是替换部分属性值，其中 `property` 为预定义 UI Schema 的标识.

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

对应生成

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

所有预定义的 UI Schema 可以参考 <a href="https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/configs.ts" target="_blank">`/src/client/chart/config.ts`</a>.  
也可以通过 [`addConfigs()`](#addconfigs) 方法增加新的预定义 UI Schema.

#### `addConfigs()`

添加预定义的图表可视化配置表单的 UI Schema.

```ts
// Add
const booleanField = ({
  name,
  title,
  defaultValue = false,
}: FieldConfigProps) => {
  return {
    [name || 'field']: {
      'x-content': lang(title || 'Field'),
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Checkbox',
      default: defaultValue,
    },
  };
};
chart.addConfigs({ booleanField });

// Usage
new Chart({
  config: [
    'booleanField',
    {
      property: 'booleanField',
      name: 'customBooleanField',
      title: 'Custom Boolean Field',
      defaultValue: true,
    },
  ],
});
```

**签名**

- `addConfigs(configs: { [key: string]: (props: FieldConfigProps) => AnySchemaProperties })`

**类型**

```ts
export type FieldConfigProps = Partial<{
  name: string;
  title: string;
  required: boolean;
  defaultValue: any;
}>;
```

**详细信息**

`addConfigs()` 接收一个对象，`key` 为配置的唯一标识，值为获取预定义 UI Schema 的方法。该方法接收可被替换的参数，并返回相应的 UI Schema 字段配置.

##### FieldProps

| 属性           | 类型      | 说明     |
| -------------- | --------- | -------- |
| `name`         | `string`  | 字段名   |
| `title`        | `string`  | 字段标题 |
| `required`     | `boolean` | 是否必填 |
| `defaultValue` | `any`     | 默认值   |

#### `init()`

选择图表时初始化图表配置。

**签名**

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

**类型**

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

**详细信息**

| 参数               | 类型             | 说明                     |
| ------------------ | ---------------- | ------------------------ |
| `fields`           | `FieldOption[]`  | 当前数据表字段的相关属性 |
| `query.measures`   | `MeasureProps[]` | 度量字段配置             |
| `query.dimensions` | `DimensionProps` | 维度字段配置             |

#### `infer()`

图表初始配置推导。

```ts
// pie chart
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

**签名**

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

**详细信息**

| 属性          | 类型            | 说明          |
| ------------- | --------------- | ------------- |
| `xField`      | `FieldOption`   | x 轴字段      |
| `yField`      | `FieldOption`   | y 轴字段      |
| `seriesField` | `FieldOption`   | 分类字段      |
| `colorField`  | `FieldOption`   | 颜色字段      |
| `yFields`     | `FieldOption[]` | 多个 y 轴字段 |

#### `getProps()`

将图表数据、图表配置元数据处理转换成图表渲染组件需要的属性。

**签名**

- `getProps({ data, general, advanced, fieldProps }: RenderProps)`

**类型**

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

| 属性         | 类型                              | 说明                                 |
| ------------ | --------------------------------- | ------------------------------------ |
| `data`       | `Record<string, any>[]`           | 图表原始数据                         |
| `general`    | `any`                             | 图表可视化表单配置                   |
| `advanced`   | `any`                             | 图表 JSON 配置                       |
| `fieldProps` | `{ [field: string]: FieldProps }` | 数据表字段的信息，可用于处理图形显示 |

##### FieldProps

| 属性          | 类型          | 说明               |
| ------------- | ------------- | ------------------ |
| `label`       | `string`      | 字段名展示标签     |
| `transformer` | `Transformer` | 字段值数据转换函数 |
| `interface`   | `string`      | 字段 interface     |

#### `getReference()`

获取图表组件的参考文档信息。

```ts
getReference() {
  return {
    title: this.title,
    link: `https://ant.design/components/${this.name}`,
  };
}
```

**签名**

```ts
getReference?: () => {
  title: string;
  link: string;
};
```

### ChartType

#### `name`

- `string`. 图表类型标识。

#### `title`

- `string`. 图表展示标题。

#### `Component`

- `React.FC<any>`. 图表渲染组件。

#### `schema`

- `ISchema`. 图表可视化配置 UI Schema.

#### `init()`

图表配置初始化方法。

**签名**

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

图表组件属性处理和获取。

**签名**

- `getProps(props: RenderProps): any`

#### `getReference()`

获取图表组件参考文档信息。

**签名**

```ts
getReference?: () => {
  title: string;
  link: string;
};
```
