# Extended Tutorial

> Using the addition of ECharts charts as an example, the complete code is available in the `@nocobase/plugin-sample-add-custom-charts` plugin.

## Creating a New Plugin

Follow the steps in the [Plugin Development Guide](https://docs.nocobase.com/development/your-first-plugin) to create a new plugin. Be sure to include the dependencies `echarts`, `echarts-for-react`, and `@nocobase/plugin-data-visualization`, placing these external dependencies in the `devDependencies` section of the `package.json` file.

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

## ECharts React Component

Unlike G2Plot, where each chart type is a distinct component, ECharts utilizes a single component that can render various charts by passing different parameters. Since the component provided by `echarts-for-react` is a `PureComponent`, we need to wrap it into a `FunctionComponent`.

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

The `echarts-for-react` component does not execute a `resize` operation on its initial render. As the NocoBase visualization plugin might need to determine whether to display the component based on the current configuration while setting up charts, this could result in the component not displaying correctly. Therefore, we manually execute `resize` each time to ensure proper rendering.

## Extending the `Chart` Class

> Before proceeding, please refer to the [Development Guide](../dev/index.md) to familiarize yourself with the relevant APIs.

### Step 1

Since ECharts serves as a comprehensive charting library, we may need to add multiple chart types simultaneously. To facilitate this, we start by extending the basic `Chart` class to create an `ECharts` class that implements some foundational methods.

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

ECharts primarily configures different types of charts via the `series` parameter. Therefore, when constructing the base class, we add a `series` parameter and pass in the previously defined `ReactECharts` component. The `config` parameter is preset with default values for `xField`, `yField`, and `seriesField`, enabling our default visualization configuration to produce results similar to those shown in the example.

![](https://static-docs.nocobase.com/9a1ff5ff7c9f409978292f0d771b4358.png)

### Step 2

Since most commonly used chart types require configurations for the x-axis, y-axis, and classification fields, we first implement a general `init` interface to initialize the chart’s default configuration. If a chart requires additional configuration items upon initialization, this method can be overridden in derived classes. In the implementation, we can leverage the `infer` method from the `Chart` class to determine default field configurations based on the provided measures and dimensions.

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

### Step 3

Next, we implement the `getProps` method, which primarily retrieves chart-related configurations and converts them into properties corresponding to the ECharts component. This method can also set default properties that we prefer not to expose in the configuration options. The following code implementation serves as a general guide.

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

This logic primarily involves processing raw data, chart configurations, field metadata, and data transformation settings into the format required for component rendering. In ECharts, data processing can be managed by registering `transform` functions, as detailed in the ECharts documentation.

### Step 4

Finally, we implement a method to retrieve reference documentation via `getReference`. ECharts consolidates all chart parameters on a single page, so we define this method straightforwardly.

```typescript
getReference() {
    return {
      title: 'ECharts',
      link: 'https://echarts.apache.org/en/option.html',
    };
  }
```

## Defining Charts

With the `ECharts` class established, defining charts becomes a straightforward process. For most common 2D charts, the general logic is already encapsulated within the `ECharts` class, eliminating the need for additional extensions.

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

You can also extend some visualization configurations as needed.

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

For certain charts, the general methods may not suffice, requiring further customization.

Bar Chart：

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

Pie Chart：

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

## Adding Charts

```typescript
// client/index.ts
import DataVisualizationPlugin from '@nocobase/plugin-data-visualization/client';

export class PluginSampleAddCustomChartClient extends Plugin {
  async afterAdd() {
    // await this.app.pm.add()
  }

  async beforeLoad() {
    const plugin = this.app.pm.get(DataVisualizationPlugin);
    plugin.charts.addGroup('echarts', {
      title: 'ECharts',
      charts: [
        new ECharts(),
        // ...
        // ...
      ],
    });
  }

  // You can get and modify the app instance here
  async load() {}
}
```
