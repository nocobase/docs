# 扩展教程

> 以添加 ECharts 图表为例，完整代码可参考 `@nocobase/plugin-sample-add-custom-charts` 插件

## 新建插件

按照[插件开发指南](https://docs.nocobase.com/development/your-fisrt-plugin)的步骤，创建一个新的插件。添加好依赖 `echarts`, `echarts-for-react`, `@nocobase/plugin-data-visualization`，外部依赖放到 `package.json` 的 `devDependencies` 中。

```bash
yarn pm create @nocobase/plugin-sample-add-custom-charts
npx lerna add echarts --scope=@nocobase/plugin-sample-add-custom-charts --dev
npx lerna add echarts-for-react --scope=@nocobase/plugin-sample-add-custom-charts --dev
```

```typescript
// package.json

{
  "name": "@nocobase/plugin-sample-add-custom-charts",
  "version": "0.14.0-alpha.7",
  "main": "dist/server/index.js",
  "devDependencies": {
    "echarts": "^5.4.3",
    "echarts-for-react": "^3.0.2"
  },
  "peerDependencies": {
    "@nocobase/client": "0.x",
    "@nocobase/server": "0.x",
    "@nocobase/test": "0.x",
    "@nocobase/plugin-data-visualization": "0.x"
  }
}
```

## ECharts React 组件

和 G2Plot 每种图表是一个组件不同，ECharts 是使用同一个组件，通过传递不同参数来渲染不同图表。由于 `echarts-for-react` 提供的组件是 `PureComponent`, 我们需要简单包装一下，变成 `FunctionComponent`.

```typescript
// client/echarts/react-echarts.tsx

import React, { useEffect } from 'react';
import ReactEChartsComponent, { EChartsInstance, EChartsReactProps } from 'echarts-for-react';

export const ReactECharts = (props: EChartsReactProps['option']) => {
  const echartRef = React.useRef<EChartsInstance>();
  useEffect(() => {
    echartRef.current?.resize();
  });
  return <ReactEChartsComponent option={props} ref={(e) => (echartRef.current = e)} />;
};
```

`echarts-for-react` 提供的组件，第一次渲染时不会执行 `resize`. 而 NocoBase 可视化插件在配置图表的时候可能需要根据当前配置来决定要不要显示组件，可能会导致组件不能正常显示，所以这里每次都手动执行一次 `resize`. 参考: [https://github.com/apache/echarts/issues/8855](https://github.com/apache/echarts/issues/8855)

## 扩展 `Chart` 类

> 开始这部分之前，请先阅读[开发指南](../dev/index.md) 了解相关的 API

### 步骤一

由于 ECharts 是一个图表库，我们可能同时添加多个图表，我们先在基础的 `Chart` 类上扩展一个 `ECharts` 类，来实现一些通用的基础方法。

```typescript
// client/echarts/echarts.ts

import { Chart } from '@nocobase/plugin-data-visualization/client';

export class ECharts extends Chart {
  constructor({
    name,
    title,
    series,
    config,
  }: {
    name: string;
    title: string;
    series: any;
    config?: ChartProps['config'];
  }) {
    super({
      name,
      title,
      component: ReactECharts,
      config: ['xField', 'yField', 'seriesField', ...(config || [])],
    });
    this.series = series;
  }
}
```

ECharts 主要是通过配置 `series` 来配置不同的图形，所以在基类的构造函数基础上，我们可以增加一个 `series` 参数，同时将前面定义好的 `ReactECharts` 组件传入。`config` 参数默认设置了 `xField`, `yField`, `seriesField`, 这样我们默认的可视化配置就是如图的效果。

![](https://static-docs.nocobase.com/9a1ff5ff7c9f409978292f0d771b4358.png)

### 步骤二

由于大多数常用图形在使用上都需要配置 x 轴字段，y 轴字段和分类字段，我们首先实现通用的 `init` 接口，用来初始化图表的默认配置。如果图表需要初始化其他的配置项，继承的时候重写 `init` 方法即可。在实现上我们可以利用 `Chart` 类实现的 `infer` 方法，根据度量和维度的配置，来推断默认的字段配置。

```typescript
init: ChartType['init'] = (fields, { measures, dimensions }) => {
  const { xField, yField, seriesField } = this.infer(fields, {
    measures,
    dimensions,
  });
  return {
    general: {
      xField: xField?.value,
      yField: yField?.value,
      seriesField: seriesField?.value,
    },
  };
};
```

### 步骤三

接下来实现 `getProps` 方法, 主要是拿到图表相关的配置，转换成 ECharts 图表组件对应的属性。包括一些不想暴露出来配置的默认属性，也可以在这里添加。主要代码实现如下，仅供参考。

```typescript
getProps({ data, general, advanced, fieldProps }: RenderProps) {
    const { xField, yField, seriesField } = general;
    const xLabel = fieldProps[xField]?.label;
    const yLabel = fieldProps[yField]?.label;
    let seriesName = [yLabel];
    if (seriesField) {
      seriesName = Array.from(new Set(data.map((row: any) => row[seriesField]))).map((value) => value || 'null');
    }
    return deepmerge(
      {
        legend: {
          data: seriesName,
        },
        tooltip: {
          data: seriesName,
        },
        dataset: [
          {
            dimensions: [xField, ...(seriesField ? seriesName : [yField])],
            source: data,
          },
          {
            transform: [
              {
                type: 'data-visualization:transform',
                config: { fieldProps },
              },
              {
                type: 'data-visualization:toSeries',
                config: { xField, yField, seriesField },
              },
            ],
          },
        ],
        series: seriesName.map((name) => ({
          name,
          datasetIndex: 1,
          ...this.series,
        })),
        xAxis: {
          name: xLabel,
          type: 'category',
        },
        yAxis: {
          name: yLabel,
        },
        animation: false,
      },
      advanced,
    );
  }
```

这里的代码逻辑主要是拿到原始的数据、图表的配置、字段元数据和数据转换配置以后，根据组件渲染的需要，处理成对应的格式。在 ECharts 中, 处理数据可以通过注册 `transform` 的方式实现，具体方法可以参考 ECharts 的文档。

### 步骤四

再实现一下统一的获取参考文档的方法 `getReference`. ECharts 的图形参数都在同一个页面上，所以简单这么定义。

```typescript
getReference() {
    return {
      title: 'ECharts',
      link: 'https://echarts.apache.org/en/option.html',
    };
  }
```

## 定义图表

有了 `ECharts` 类，来定义图表就比较简单了。对于常用的二维图形，大多数通用的逻辑已经在 `ECharts` 类上实现了，不需要再进一步扩展，直接使用即可。

```typescript
new ECharts({
  name: 'line',
  title: 'Line Chart',
  series: { type: 'line' },
});

new ECharts({
  name: 'column',
  title: 'Column Chart',
  series: { type: 'bar' },
});

new ECharts({
  name: 'area',
  title: 'Area Chart',
  series: { type: 'line', areaStyle: {} },
});
```

也可以扩展一些可视化配置

```typescript
new ECharts({
  name: 'line',
  title: 'Line Chart',
  series: { type: 'line' },
  config: [
    {
      property: 'booleanField',
      name: 'smooth',
      title: 'isSmooth',
    },
  ],
});
```

对于一些图表，通用的方法可能不适用，我们可以进一步扩展。

条形图：

```typescript
export class Bar extends ECharts {
  constructor() {
    super({
      name: 'bar',
      title: 'Bar Chart',
      series: { type: 'bar' },
    });
    this.config = [
      {
        property: 'yField',
        title: 'xField',
      },
      {
        property: 'xField',
        title: 'yField',
      },
      'seriesField',
    ];
  }

  getProps({ data, general, advanced, fieldProps }: RenderProps) {
    const props = super.getProps({ data, general, advanced, fieldProps });
    const xLabel = fieldProps[general.xField]?.label;
    const yLabel = fieldProps[general.yField]?.label;
    props.xAxis = {
      ...props.xAxis,
      type: 'value',
      name: yLabel,
    };
    props.yAxis = {
      ...props.yAxis,
      type: 'category',
      name: xLabel,
    };
    return props;
  }
}

new Bar();
```

饼图：

```typescript
export class Pie extends ECharts {
  constructor() {
    super({
      name: 'pie',
      title: 'Pie Chart',
      series: { type: 'pie' },
    });
    this.config = [
      {
        property: 'field',
        name: 'angleField',
        title: 'angleField',
        required: true,
      },
      {
        property: 'field',
        name: 'colorField',
        title: 'colorField',
        required: true,
      },
    ];
  }

  init: ChartType['init'] = (fields, { measures, dimensions }) => {
    const { xField, yField } = this.infer(fields, { measures, dimensions });
    return {
      general: {
        colorField: xField?.value,
        angleField: yField?.value,
      },
    };
  };

  getProps({ data, general, advanced, fieldProps }: RenderProps) {
    return deepmerge(
      {
        legend: {},
        tooltip: {},
        dataset: [
          {
            dimensions: [general.colorField, general.angleField],
            source: data,
          },
          {
            transform: {
              type: 'data-visualization:transform',
              config: { fieldProps },
            },
          },
        ],
        series: {
          name: fieldProps[general.angleField]?.label,
          datasetIndex: 1,
          ...this.series,
        },
      },
      advanced,
    );
  }
}

new Pie();
```

## 添加图表

```typescript
// client/index.ts
import DataVisualizationPlugin from '@nocobase/plugin-data-visualization/client';

export class PluginSampleAddCustomChartClient extends Plugin {
  async afterAdd() {
    // await this.app.pm.add()
  }

  async beforeLoad() {
    const plugin = this.app.pm.get(DataVisualizationPlugin);
    plugin.charts.addGroup('ECharts', [
      new ECharts(),
      // ...
      // ...
    ]);
  }

  // You can get and modify the app instance here
  async load() {}
}
```