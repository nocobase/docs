# API参考

NocoBase 当前使用 [G2Plot](https://g2plot.antv.antgroup.com/) 作为默认的图表库，提供了常用的图表组件。除了默认的图表组件，NocoBase 还支持扩展其他图表组件，也可以接入其他图表库组件，比如: ECharts. 这一部分主要介绍如何扩展接入新的图表组件。

## 添加图表

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
    plugin.charts.add('Built-in', CustomChart);
  }
}
```

### 方法

#### `addGroup`

添加一组图表

- name `string` - 分组 key, 不能和已有的重复
- charts `ChartType[]` - 图表数组

#### `setGroup`

设置一组图表，可以用于覆盖已有分组

- name `string` - 分组 key
- charts `ChartType[]` - 图表数组

#### `add`

向已有分组中追加一个图表，图表的名字

- group `string` - 分组 key
- chart `ChartType` - 图表

## ChartType

`/src/client/chart/chart.ts`

`ChartType` 定义了一个图表类需要包含的属性和接口。

### 属性

- name `string` - 图表类型的唯一标识 (key)
- title `string` - 图表类型展示时使用的标题
- component `React.FC<any>` - 渲染图表使用的 React 组件
- schema `ISchema` - 图表基础可视化配置使用的 UI Schema

![](https://static-docs.nocobase.com/0a884208a26048cf58d4027626df7078.png)

### 接口

#### init

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

可选。初始化默认图表配置。

参数：

1. 当前 Collection 的 fields 元数据
2. 当前度量和维度配置

返回：

- general - 图表基础配置部分
- advanced - 图表 JSON 配置部分

（此处类型定义较多，不一一列出，请参考源码。）

#### render

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

接收图表的配置元数据，包括数据、图表配置和字段配置（元数据 + 数据转换配置），返回一个图表组件用于渲染。

#### getReference

```typescript
getReference?: () => {
    title: string;
    link: string;
  };
```

可选。获取当前图表组件的参考文档。

## Chart

`Chart` 类对 `ChartType` 做了基础的实现，通常接入一个新的图表，只需要 `new Chart` 或者 `extends Chart` 即可。

### 属性

- name `string` - 图表类型的唯一标识 (key)
- title `string` - 图表类型展示时使用的标题
- component `React.FC<any>` - 渲染图表使用的 React 组件
- config `Config[]` - 图表配置的 UI Schema 通过 `config` 获取

#### config

`/src/client/chart/configs.ts`

`config` 接收一个配置数组，`Chart` 类中的 `schema getter` 会将配置转换为 UI Schema, 用于图表的基础配置。

配置支持以下几种写法，可以混合使用：

1. 原始的 UI Schema, 在 UI Schema 如果想使用在“数据配置”部分已经配置好的字段，可以使用 `x-reactions': '{{ useChartFields }}'`.
2. 使用预定义好的 UI Schema

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

1. 使用预定义的 UI Schema, 但是替换部分参数，其中 `property` 为预定义 UI Schema 的 key

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

可以通过 `addConfigs` 方法增加新的预定义 UI Schema.

其他用法可以参考 `/src/client/chart/g2plot/index.ts`

### 方法

#### infer

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

`infer` 方法用于根据数据配置中的度量和维度，初步推断出推断出图表配置中的各字段值，减少重复配置。

`infer` 方法接收两个参数：

1. 当前 Collection 的 fields 元数据，作为推断基础
2. 当前度量和维度配置

推断结果返回

- `xFields` - x 轴字段
- `yFields` - y 轴字段
- `seriesFields` - 分类字段，可用作 `colorFields`
- `yFields` - 多个 y 轴字段，通常用于双轴图

拿到推断结果以后，可以结合定义 [`init`方法](#init)，给图表配置做默认初始化。

#### getProps

```typescript
getProps: (props: RenderProps) => any;
```

将数据、图表配置、字段属性、数据转换等图表相关的配置元数据，转换成渲染图表的对应组件的属性，也可以返回一些不暴露配置的默认属性。默认的 `render` 方法会通过 `getProps` 拿到图表组件属性，传递给图表组件。这个方法通常需要根据使用的图表组件自己实现。

## 示例

- [src/client/chart/g2plot](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/g2plot)

- [src/client/chart/antd](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/antd)

- [图表扩展教程](../step-by-step/index.md)
