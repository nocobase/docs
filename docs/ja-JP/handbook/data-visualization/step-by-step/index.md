# 拡張チュートリアル

> ECharts グラフの追加を例に、完全なコードは `@nocobase/plugin-sample-add-custom-charts` プラグインを参照してください。

## 新しいプラグインの作成

[プラグイン開発ガイド](https://docs.nocobase.com/development/your-first-plugin)の手順に従って、新しいプラグインを作成してください。依存関係として `echarts`、`echarts-for-react`、`@nocobase/plugin-data-visualization` を追加し、外部依存関係は `package.json` の `devDependencies` に配置します。

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

## ECharts React コンポーネント

G2Plotの各グラフは個別のコンポーネントであるのに対し、EChartsは同じコンポーネントを使用し、異なるパラメータを渡すことで異なるグラフを描画します。「echarts-for-react」が提供するコンポーネントは「PureComponent」であるため、簡単にラップして「FunctionComponent」に変換する必要があります。

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

「echarts-for-react」が提供するコンポーネントは、初回のレンダリング時に「resize」を実行しません。一方、NocoBaseの可視化プラグインでは、グラフを設定する際に現在の設定に基づいてコンポーネントの表示を決定する必要があるため、コンポーネントが正しく表示されない可能性があります。そのため、ここでは毎回手動で「resize」を実行しています。参考: [https://github.com/apache/echarts/issues/8855](https://github.com/apache/echarts/issues/8855)

## `Chart` クラスの拡張

> このセクションを始める前に、[開発ガイド](../dev/index.md)を読んで関連APIを理解してください。

### ステップ1

EChartsはグラフライブラリであるため、複数のグラフを同時に追加することがあります。まず、基本の`Chart`クラスを拡張して`ECharts`クラスを作成し、いくつかの共通の基本メソッドを実装します。

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

EChartsは主に`series`を設定することで異なるグラフを構成します。そのため、基底クラスのコンストラクタに基づいて`series`パラメータを追加し、前に定義された`ReactECharts`コンポーネントを渡します。`config`パラメータにはデフォルトで`xField`、`yField`、`seriesField`が設定されており、これによりデフォルトの可視化設定は図のような効果を得られます。

![](https://static-docs.nocobase.com/9a1ff5ff7c9f409978292f0d771b4358.png)

### ステップ2

ほとんどの一般的なグラフでは、x軸フィールド、y軸フィールド、分類フィールドの設定が必要です。まず、グラフのデフォルト設定を初期化するための汎用`init`インターフェースを実装します。グラフが他の設定項目を初期化する必要がある場合は、継承時に`init`メソッドをオーバーライドしてください。実装においては、`Chart`クラスが実装した`infer`メソッドを利用し、メトリックとディメンションの設定に基づいてデフォルトのフィールド設定を推論します。

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

### ステップ3

次に、`getProps` メソッドを実装します。このメソッドの主な目的は、グラフに関連する設定を取得し、ECharts グラフコンポーネントに対応する属性に変換することです。表示したくないデフォルト属性をここに追加することも可能です。主なコード実装は以下の通りですので、参考にしてください。

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

ここでのコードロジックは、元のデータ、グラフの設定、フィールドメタデータ、およびデータ変換設定を取得した後、コンポーネントのレンダリングのニーズに応じて、対応するフォーマットに処理することを主な目的としています。EChartsでは、データの処理は`transform`を登録することで実現できます。具体的な方法については、EChartsのドキュメントを参照してください。

### ステップ4

統一された参照文書を取得するメソッド`getReference`を実装します。EChartsのグラフィックパラメータはすべて同じページにあるため、このように簡単に定義できます。

```typescript
getReference() {
    return {
      title: 'ECharts',
      link: 'https://echarts.apache.org/en/option.html',
    };
}
```

## グラフの定義

`ECharts`クラスがあれば、グラフの定義は比較的簡単です。一般的な2次元グラフについては、ほとんどの共通ロジックが`ECharts`クラスに実装されているため、さらに拡張する必要はなく、そのまま使用できます。

```typescript
new ECharts({
  name: 'line',
  title: '折れ線グラフ',
  series: { type: 'line' },
});

new ECharts({
  name: 'column',
  title: '縦棒グラフ',
  series: { type: 'bar' },
});

new ECharts({
  name: 'area',
  title: '面グラフ',
  series: { type: 'line', areaStyle: {} },
});
```

いくつかの視覚化設定を拡張することも可能です。

```typescript
new ECharts({
  name: 'line',
  title: '折れ線グラフ',
  series: { type: 'line' },
  config: [
    {
      property: 'booleanField',
      name: 'smooth',
      title: 'スムーズ',
    },
  ],
});
```

一部のグラフについては、一般的な方法が適用できない場合があるため、さらに拡張が可能です。

棒グラフ：

```typescript
export class Bar extends ECharts {
  constructor() {
    super({
      name: 'bar',
      title: '棒グラフ',
      series: { type: 'bar' },
    });
    this.config = [
      {
        property: 'yField',
        title: 'X軸フィールド',
      },
      {
        property: 'xField',
        title: 'Y軸フィールド',
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

円グラフ：

```typescript
export class Pie extends ECharts {
  constructor() {
    super({
      name: 'pie',
      title: '円グラフ',
      series: { type: 'pie' },
    });
    this.config = [
      {
        property: 'field',
        name: 'angleField',
        title: '角度フィールド',
        required: true,
      },
      {
        property: 'field',
        name: 'colorField',
        title: '色フィールド',
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

## チャートを追加

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

  // ここでアプリインスタンスを取得し、修正を行うことができます
  async load() {}
}
```

