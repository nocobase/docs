# 拡張チャートタイプ

## 概要

NocoBaseは、<a href="https://g2plot.antv.antgroup.com/" target="_blank">Ant Design Charts</a>をデフォルトのチャートライブラリとして使用し、一般的なチャートタイプを内蔵しています。内蔵のチャートタイプに加え、NocoBaseでは独自に他のチャートタイプを拡張したり、EChartsなどの他のチャートライブラリと接続したりすることもサポートしています。このセクションでは、新しいチャートタイプを拡張する方法について説明します。

## チャートの定義

可視化プラグインでは、各チャートタイプはクラスで定義されており、このクラスは[ChartType](#charttype)インターフェースの定義に従って実装する必要があります。理解と開発を容易にするために、[Chart](#chart)基底クラスが提供されており、`ChartType`の一部を実装しています。ほとんどの場合、拡張されたチャートタイプは`Chart`クラスを継承し、必要なメソッドを追加するだけで済みます。

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

### チャート情報

チャートタイプの基本情報には、以下が含まれます：

| パラメータ   | 説明                            |
| ------------ | ------------------------------- |
| `name`       | アイデンティファイ             |
| `title`      | 表示タイトル                    |
| `Component`  | グラフ描画に使用するコンポーネント |
| `config`     | 基本的な可視化設定フォーム     |

<img src="https://static-docs.nocobase.com/202404192352571.png"/>

例：

```ts
new CustomChart({
  name: 'custom',
  title: 'カスタムチャート',
  Component: CustomChart,
  config: ['xField', 'yField', 'seriesField'],
});
```

具体的な使い方は [Chart](#chart) を参照してください。

### チャート設定の初期化

ユーザーがチャートを選択した際、ユーザーのデータクエリ設定に基づいてチャートの設定項目を初期化し、手動での設定操作を減らすことを目指します。  
チャートを選択するたびに、プラグイン内部でチャートクラスの `init()` メソッドが呼び出され、現在のデータテーブルにおけるすべてのフィールド設定と、現在のメジャーおよびディメンション設定が渡されます。`init()` メソッドは、引数に基づいてチャート設定の初期化ロジックを実行します。  
`Chart` クラス内部には `infer()` メソッドが実装されており、x軸フィールド、y軸フィールド、カテゴリフィールドの初期設定を簡単に推測するために使用します。  
例：

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

### グラフコンポーネントの属性を取得

ユーザーが設定したグラフの構成情報を取得した後、適切な属性としてレンダリンググラフコンポーネントに渡すために、さらに処理を行う必要があります。`getProps()` メソッドは、グラフデータ、グラフ構成、および関連するフィールド情報をパラメータとして受け取り、これらのパラメータをさらに処理して、最終的にグラフコンポーネントに渡す属性を返します。

「統計」グラフの例：

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

### グラフコンポーネントの参考情報を取得

`getReference()` メソッドは、現在のグラフタイプに関する参考文書情報を取得するためのものです。

```ts
getReference() {
  return {
    title: this.title,
    link: `https://ant.design/components/${this.name}`,
  };
}
```

## グラフの追加

グラフクラスを定義した後、クラスのインスタンスをデータ可視化プラグインに追加する必要があります。グラフを選択する際、グラフはグループ表示され、デフォルトのグラフグループは「内蔵」（Built-in）です。

<img src="https://static-docs.nocobase.com/202404201042045.png"/>

一組のグラフを追加することも、既存のグループにグラフを追加することもできます。

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    // 一組のグラフを追加
    plugin.charts.addGroup('custom', [...]);

    // グラフのグループを設定。 
    // 既存のグループを上書きするために使用可能
    plugin.charts.setGroup('custom', [...]);

    // 既存のグループにグラフを追加
    // グラフの名前はグループ内で一意である必要があります
    plugin.charts.add('Built-in', new CustomChart({
      // ...
    }));
  }
}
```

参考 [ChartGroup](#chartgroup)

## 例

- [src/client/chart/g2plot](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/g2plot)

- [src/client/chart/antd](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/antd)

- [ECharts 統合例](../step-by-step/index.md)

## API

### ChartGroup

#### `addGroup()`

グラフのグループを追加します。

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    // グラフのグループを追加する
    plugin.charts.addGroup('custom', [...]);
  }
}
```

**シグネチャ**

- `addGroup(name: string, charts: ChartType[])`

**詳細情報**

| パラメータ | 型            | 説明                       |
| ---------- | ------------- | -------------------------- |
| `name`     | `string`      | グラフグループのユニーク識別子 |
| `charts`   | `ChartType[]` | グラフの配列               |

#### `add()`

既存のグループにグラフを追加します。

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization';

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    plugin.charts.add(
      '組み込み',
      new CustomChart({
        // ...
      }),
    );
  }
}
```

**シグネチャ**

- `add(group: string, chart: ChartType)`

**詳細情報**

| パラメータ | タイプ      | 説明                     |
| ---------- | ----------- | ------------------------ |
| `group`    | `string`    | チャートグループの一意識別子 |
| `chart`    | `ChartType` | チャート                 |

#### `setGroup()`

チャートのグループを設定し、既存のチャートを上書きします。

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);
    // チャートのグループを設定します。
    // 既存のグループを上書きするために使用できます。
    plugin.charts.setGroup('custom', [...]);
  }
}
```

**シグネチャ**

- `setGroup(name: string, charts: ChartType[])`

**詳細情報**

| パラメータ | タイプ          | 説明                     |
| ---------- | --------------- | ------------------------ |
| `name`     | `string`        | チャートグループの一意識別子 |
| `charts`   | `ChartType[]`   | チャートの配列           |

### チャート

#### `constructor()`

コンストラクタで、新しい `Chart` インスタンスを作成します。

**シグネチャ**

- `constructor({ name, title, Component, config }: ChartProps)`

**型**

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

**詳細情報**

| 属性        | 型                  | 説明                     |
| ----------- | ------------------- | ------------------------ |
| `name`      | `string`            | グラフタイプの識別子      |
| `title`     | `string`            | グラフ表示タイトル        |
| `Component` | `React.FC<any>`     | グラフ描画コンポーネント   |
| `config`    | [`Config[]`](#config) | 任意。グラフ可視化設定フォーム |

##### Config

`config` は以下のいくつかの記法をサポートしており、混在して使用できます：

1. UI スキーマフィールド配置では、UI スキーマ内の「データ設定」部分ですでに設定されたフィールドを使用したい場合、`'x-reactions': '{{ useChartFields }}'`を使用できます。

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

2. 予め定義された UI スキーマを使用します。

例えば: `config: ['field']`

対応する生成物は

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

3. 予め定義された UI スキーマを使用しますが、一部の属性値を置き換えます。このとき、`property`は予め定義された UI スキーマの識別子です。

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

対応する生成物は

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

すべての予定義UIスキーマは、<a href="https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/configs.ts" target="_blank">`/src/client/chart/config.ts`</a>を参照できます。  
新しい予定義UIスキーマは、[`addConfigs()`](#addconfigs)メソッドを使用して追加することも可能です。

#### `addConfigs()`

予定義のグラフ可視化設定フォームのUIスキーマを追加します。

```ts
// 追加
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

// 使用例
new Chart({
  config: [
    'booleanField',
    {
      property: 'booleanField',
      name: 'customBooleanField',
      title: 'カスタムブールフィールド',
      defaultValue: true,
    },
  ],
});
```

**署名**

- `addConfigs(configs: { [key: string]: (props: FieldConfigProps) => AnySchemaProperties })`

**タイプ**

```ts
export type FieldConfigProps = Partial<{
  name: string;
  title: string;
  required: boolean;
  defaultValue: any;
}>;
```

**詳細情報**

`addConfigs()` はオブジェクトを受け取り、`key` は設定の一意の識別子であり、値は事前に定義された UI スキーマを取得するメソッドです。このメソッドは置き換え可能なパラメータを受け取り、対応する UI スキーマフィールド設定を返します。

##### FieldProps

| 属性           | 型      | 説明     |
| -------------- | ------- | -------- |
| `name`         | `string`| フィールド名   |
| `title`        | `string`| フィールドタイトル |
| `required`     | `boolean`| 必須かどうか |
| `defaultValue` | `any`   | デフォルト値   |

#### `init()`

グラフを選択する際にグラフ設定を初期化します。

**シグネチャ**

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

**型**

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

**詳細情報**

| パラメータ          | 型               | 説明                     |
| ------------------ | ---------------- | ------------------------ |
| `fields`           | `FieldOption[]`  | 現在のデータテーブルフィールドの関連属性 |
| `query.measures`   | `MeasureProps[]` | メジャーフィールドの構成     |
| `query.dimensions` | `DimensionProps` | ディメンションフィールドの構成 |

#### `infer()`

グラフの初期設定を推論します。

```ts
// 円グラフ
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

**シグネチャ**

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

**詳細情報**

| 属性          | タイプ            | 説明          |
| ------------- | --------------- | ------------- |
| `xField`      | `FieldOption`   | x 軸フィールド |
| `yField`      | `FieldOption`   | y 軸フィールド |
| `seriesField` | `FieldOption`   | カテゴリフィールド |
| `colorField`  | `FieldOption`   | 色フィールド   |
| `yFields`     | `FieldOption[]` | 複数の y 軸フィールド |

#### `getProps()`

チャートデータとチャート設定メタデータを処理し、チャートレンダリングコンポーネントに必要な属性に変換します。

**サイン**

- `getProps({ data, general, advanced, fieldProps }: RenderProps)`

**タイプ**

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

| 属性         | 型                                | 説明                                 |
| ------------ | --------------------------------- | ------------------------------------ |
| `data`       | `Record<string, any>[]`           | グラフの生データ                     |
| `general`    | `any`                             | グラフの可視化フォーム設定            |
| `advanced`   | `any`                             | グラフのJSON設定                      |
| `fieldProps` | `{ [field: string]: FieldProps }` | データテーブルのフィールド情報、グラフ表示の処理に使用可能 |

##### FieldProps

| 属性          | 型             | 説明               |
| ------------- | -------------- | ------------------ |
| `label`       | `string`       | フィールド名表示ラベル     |
| `transformer` | `Transformer`  | フィールド値データ変換関数 |
| `interface`   | `string`       | フィールドインターフェース     |

#### `getReference()`

グラフコンポーネントの参考資料情報を取得します。

```ts
getReference() {
  return {
    title: this.title,
    link: `https://ant.design/components/${this.name}`,
  };
}
```

**サイン**

```ts
getReference?: () => {
  title: string;
  link: string;
};
```

### ChartType

#### `name`

- `string`. グラフタイプの識別子です。

#### `title`

- `string`. グラフの表示タイトルです。

#### `Component`

- `React.FC<any>`. グラフ描画に使用するコンポーネントです。

#### `schema`

- `ISchema`. グラフ視覚化設定のUIスキーマです。

#### `init()`

グラフ設定の初期化メソッドです。

**署名**

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

グラフコンポーネントのプロパティを処理し、取得します。

**署名**

- `getProps(props: RenderProps): any`

#### `getReference()`

グラフコンポーネントの参考文献情報を取得します。

**署名**

```ts
getReference?: () => {
  title: string;
  link: string;
};
```

