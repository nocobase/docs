# Расширение типов диаграмм

## Обзор

NocoBase использует [Ant Design Charts](https://g2plot.antv.antgroup.com/) в качестве стандартной библиотеки диаграмм, которая включает наиболее распространенные типы визуализаций. Помимо встроенных типов, система поддерживает интеграцию других библиотек, таких как ECharts. В этом разделе объясняется, как расширить функционал новыми типами диаграмм.

## Определение диаграммы

Каждый тип диаграммы определяется классом, реализующим интерфейс [ChartType](#charttype). Для упрощения разработки предоставляется базовый класс [Chart](#chart), который частично реализует этот интерфейс.

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

### Информация о диаграмме

Основные параметры:

| Параметр    | Описание                |
|------------|-------------------------|
| `name`     | Уникальный идентификатор |
| `title`    | Отображаемое название   |
| `Component`| Компонент для рендеринга |
| `config`   | Базовая форма конфигурации |

<img src="https://static-docs.nocobase.com/202404192352571.png"/>

Пример:

```ts
new CustomChart({
  name: 'custom',
  title: 'Пользовательская диаграмма',
  Component: CustomChart,
  config: ['xField', 'yField', 'seriesField'],
});
```

### Инициализация конфигурации

При выборе диаграммы система автоматически инициализирует настройки на основе данных:

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

### Получение свойств компонента

Метод `getProps()` обрабатывает данные перед передачей в компонент:

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

### Справочная информация

```ts
getReference() {
  return {
    title: this.title,
    link: `https://ant.design/components/${this.name}`,
  };
}
```

## Добавление диаграммы

После создания класса диаграммы его нужно зарегистрировать в плагине визуализации данных. Диаграммы группируются для удобства навигации.

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    // Добавление группы
    plugin.charts.addGroup('custom', [...]);

    // Переопределение группы
    plugin.charts.setGroup('custom', [...]);

    // Добавление в существующую группу
    plugin.charts.add('Built-in', new CustomChart({
      // ...
    }));
  }
}
```
## API

### ChartGroup

#### `addGroup()`

Добавляет группу диаграмм.

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    // Добавить группу диаграмм
    plugin.charts.addGroup('custom', {
      title: 'Пользовательская',
      charts: [...],
      sort: 1
    });
  }
}
```

**Сигнатура**

- `addGroup(name: string, charts: ChartType[])`

**Типы**

```ts
interface Group {
  title: string;
  charts: ChartType[];
  sort?: number;
}
```

**Описание параметров**

| Параметр   | Тип           | Описание                                |
|-----------|---------------|------------------------------------------|
| `name`    | `string`      | Уникальное имя группы диаграмм           |
| `charts`  | `ChartType[]` | Массив диаграмм                          |
| `sort`    | `number`      | Необязательно. Порядок сортировки группы |

#### `add()`

Добавляет диаграмму в существующую группу.

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization';

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    plugin.charts.add(
      'Встроенные',
      new CustomChart({
        // ...
      }),
    );
  }
}
```

**Сигнатура**

- `add(group: string, chart: ChartType)`

**Описание параметров**

| Параметр   | Тип           | Описание                                |
|-----------|---------------|------------------------------------------|
| `group`   | `string`      | Уникальный идентификатор группы диаграмм |
| `chart`   | `ChartType`   | Добавляемая диаграмма                    |

### Диаграмма (Chart)

#### `constructor()`

Конструктор для создания нового экземпляра `Chart`.

**Сигнатура**

- `constructor({ name, title, Component, config }: ChartProps)`

**Типы**

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

**Описание свойств**

| Свойство     | Тип                    | Описание                                                |
|-------------|------------------------|----------------------------------------------------------|
| `name`      | `string`               | Уникальный идентификатор диаграммы                       |
| `title`     | `string`               | Отображаемое название диаграммы                          |
| `Component` | `React.FC<any>`        | Компонент, используемый для отображения диаграммы        |
| `config`    | [`Config[]`](#config)  | Необязательно. Форма конфигурации визуализации           |

##### Config

Поле `config` поддерживает несколько форматов, которые можно комбинировать:

1. Конфигурация поля по UI Schema. Если вы хотите использовать поля, уже настроенные в разделе «Настройка данных», внутри UI Schema, используйте `'x-reactions': '{{ useChartFields }}'`.

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

2. Использование предопределённой конфигурации UI Schema.

Например, `config: ['field']` соответствует:

```typescript
{
  field: {
    title: 'Поле',
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-reactions': '{{ useChartFields }}',
    required,
  }
}
```

3. Использование предопределённой конфигурации UI Schema с заменой некоторых свойств, где `property` — это идентификатор предопределённой схемы.

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

Это соответствует:

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

#### `addConfigTypes()`

Добавляет предопределённые UI-схемы для формы визуальной настройки диаграммы.

```ts
// Добавление
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

// Использование
new Chart({
  config: [
    'boolean',
    {
      configType: 'boolean',
      name: 'customBooleanField',
      title: 'Пользовательское булево поле',
      defaultValue: true,
    },
  ],
});
```

**Сигнатура**

- `addConfigTypes(configs: { [key: string]: ConfigType })`

**Типы**

```ts
export type ConfigType =
  | (FieldConfigProps & { configType?: string })
  | ((props?: FieldConfigProps) => AnySchemaProperties)
  | AnySchemaProperties;
```

**Описание**

Метод `addConfigTypes()` принимает объект, где `ключ` — это уникальный идентификатор конфигурации, а значение — функция, возвращающая предопределённую UI-схему. Эта функция принимает параметры (например, название, значение по умолчанию), которые можно переопределить, и возвращает соответствующую конфигурацию поля UI-схемы.

---

#### `init()`

Эта функция инициализирует конфигурацию диаграммы при её выборе. Она определяет начальные настройки свойств диаграммы.

**Сигнатура**

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

**Типы**

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

**Описание параметров**

| Параметр             | Тип               | Описание                                                  |
|----------------------|-------------------|-----------------------------------------------------------|
| `fields`             | `FieldOption[]`   | Содержит ключевые атрибуты полей текущей таблицы данных.   |
| `query.measures`     | `MeasureProps[]`  | Конфигурация полей-показателей.                           |
| `query.dimensions`   | `DimensionProps[]`| Конфигурация полей-измерений.                             |

---

#### `infer()`

Автоматическое определение начальной конфигурации диаграммы на основе доступных полей.

```ts
// Пример для круговой диаграммы
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

**Сигнатура**

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

**Описание свойств**

| Свойство        | Тип               | Описание                                                   |
|-----------------|-------------------|------------------------------------------------------------|
| `xField`        | `FieldOption`     | Поле, используемое по оси X.                               |
| `yField`        | `FieldOption`     | Поле, используемое по оси Y.                               |
| `seriesField`   | `FieldOption`     | Поле, представляющее категории или серии данных.          |
| `colorField`    | `FieldOption`     | Поле, определяющее цветовую гамму диаграммы.               |
| `yFields`       | `FieldOption[]`   | Несколько полей по оси Y (используется в сложных диаграммах). |

---

#### `getProps()`

Эта функция обрабатывает исходные данные диаграммы и метаданные конфигурации и преобразует их в свойства, необходимые для компонента отрисовки.

**Сигнатура**

- `getProps({ data, general, advanced, fieldProps }: RenderProps)`

**Типы**

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

| Свойство         | Тип                                   | Описание                                                  |
|------------------|---------------------------------------|-----------------------------------------------------------|
| `data`           | `Record<string, any>[]`               | Исходные данные, отображаемые на диаграмме.               |
| `general`        | `any`                                 | Общие параметры конфигурации из формы визуализации.        |
| `advanced`       | `any`                                 | Расширенная JSON-конфигурация диаграммы.                  |
| `fieldProps`     | `{ [field: string]: FieldProps }`     | Метаданные полей таблицы, используемые для отображения.   |

##### FieldProps

| Свойство         | Тип             | Описание                                                  |
|------------------|-----------------|-----------------------------------------------------------|
| `label`          | `string`        | Отображаемое название поля.                               |
| `transformer`    | `Transformer`   | Функция преобразования значений поля.                     |
| `interface`      | `string`        | Тип интерфейса поля (например, текст, дата, число и т.д.). |
_____________________________________________________________________

#### `getReference()`

Получает справочную документацию для компонента диаграммы, включая название и прямую ссылку на документацию.

```ts
getReference() {
  return {
    title: this.title,
    link: `https://ant.design/components/${this.name}`,
  };
}
```

**Сигнатура**

```ts
getReference?: () => {
  title: string;
  link: string;
};
```

### ChartType (Тип диаграммы)

#### `name`

- `string`. Уникальный идентификатор типа диаграммы.

#### `title`

- `string`. Отображаемое название диаграммы.

#### `Component`

- `React.FC<any>`. React-компонент, используемый для отображения диаграммы.

#### `schema`

- `ISchema`. UI-схема для конфигурации визуализации диаграммы.

#### `init()`

Функция инициализации конфигурации диаграммы.

**Сигнатура**

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

Обрабатывает и возвращает свойства для компонента диаграммы.

**Сигнатура**

- `getProps(props: RenderProps): any`

#### `getReference()`

Получает справочную документацию для компонента диаграммы.

**Сигнатура**

```ts
getReference?: () => {
  title: string;
  link: string;
};
```
