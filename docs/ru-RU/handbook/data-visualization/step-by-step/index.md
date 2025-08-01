# Расширенное руководство

> В качестве примера рассмотрим добавление диаграмм ECharts. Полный код доступен в плагине `@nocobase/plugin-sample-add-custom-charts`.

## Создание нового плагина

Следуйте инструкциям из [Руководства по разработке плагинов](https://docs.nocobase.com/development/your-first-plugin) для создания нового плагина. Убедитесь, что добавили зависимости `echarts`, `echarts-for-react` и `@nocobase/plugin-data-visualization` в раздел `devDependencies` файла `package.json`.

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

## React-компонент ECharts

В отличие от G2Plot, где каждый тип диаграммы - отдельный компонент, ECharts использует единый компонент, который может отображать различные диаграммы с разными параметрами. Поскольку компонент из `echarts-for-react` является `PureComponent`, нам нужно обернуть его в `FunctionComponent`.

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

Компонент `echarts-for-react` не выполняет операцию `resize` при первом рендере. Так как плагин визуализации NocoBase может определять необходимость отображения компонента на основе текущей конфигурации, это может привести к некорректному отображению. Поэтому мы вручную выполняем `resize` при каждом обновлении.

## Расширение класса `Chart`

> Перед продолжением ознакомьтесь с [Руководством разработчика](../dev/index.md) для изучения соответствующих API.

### Шаг 1

Так как ECharts - это комплексная библиотека, нам может потребоваться добавить несколько типов диаграмм одновременно. Для этого мы расширяем базовый класс `Chart`, создавая класс `ECharts` с реализацией основных методов.

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

ECharts настраивает различные типы диаграмм через параметр `series`. При создании базового класса мы добавляем этот параметр и передаем ранее определенный компонент `ReactECharts`. Параметр `config` предустановлен значениями по умолчанию для `xField`, `yField` и `seriesField`.

### Шаг 2

Большинство распространенных типов диаграмм требуют конфигурации осей X, Y и полей классификации. Реализуем общий интерфейс `init` для инициализации конфигурации по умолчанию, используя метод `infer` из класса `Chart`.

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

### Шаг 3

Реализуем метод `getProps` для преобразования конфигураций в свойства компонента ECharts. Этот метод также может устанавливать свойства по умолчанию.

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

Эта логика обрабатывает сырые данные, конфигурации диаграмм и метаданные полей, преобразуя их в формат, необходимый для рендеринга компонента. В ECharts обработка данных может управляться через функции `transform`.

### Шаг 4

Наконец, реализуем метод для получения справочной документации через `getReference`. ECharts объединяет все параметры диаграмм на одной странице, поэтому мы определим этот метод простым образом:

```typescript
getReference() {
    return {
      title: 'ECharts',
      link: 'https://echarts.apache.org/en/option.html',
    };
  }
```

## Определение диаграмм

После создания класса `ECharts` определение диаграмм становится простой задачей. Для большинства распространённых 2D-диаграмм общая логика уже инкапсулирована в классе `ECharts`, что исключает необходимость в дополнительных расширениях.

```typescript
new ECharts({
  name: 'line',
  title: 'Линейная диаграмма',
  series: { type: 'line' },
});

new ECharts({
  name: 'column',
  title: 'Столбчатая диаграмма',
  series: { type: 'bar' },
});

new ECharts({
  name: 'area',
  title: 'Диаграмма с областями',
  series: { type: 'line', areaStyle: {} },
});
```

Вы также можете расширить некоторые параметры визуализации по необходимости.

```typescript
new ECharts({
  name: 'line',
  title: 'Линейная диаграмма',
  series: { type: 'line' },
  config: [
    {
      property: 'booleanField',
      name: 'smooth',
      title: 'Сглаживание',
    },
  ],
});
```

Для некоторых диаграмм общих методов может быть недостаточно, и потребуется дополнительная настройка.

### Столбчатая диаграмма (Bar Chart):

```typescript
export class Bar extends ECharts {
  constructor() {
    super({
      name: 'bar',
      title: 'Гистограмма',
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

### Круговая диаграмма (Pie Chart):

```typescript
export class Pie extends ECharts {
  constructor() {
    super({
      name: 'pie',
      title: 'Круговая диаграмма',
      series: { type: 'pie' },
    });
    this.config = [
      {
        property: 'field',
        name: 'angleField',
        title: 'Поле значений',
        required: true,
      },
      {
        property: 'field',
        name: 'colorField',
        title: 'Поле цвета',
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

## Добавление диаграмм

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

  // Здесь можно получить и изменить экземпляр приложения
  async load() {}
}
```
