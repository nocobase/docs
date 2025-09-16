# UI Schema

Протокол для описания компонентов фронтенда, основанный на Formily Schema 2.0, в стиле JSON Schema.

```ts
interface ISchema {
  type: 'void' | 'string' | 'number' | 'object' | 'array';
  name?: string;
  title?: any;
  // Компонент-обёртка
  ['x-decorator']?: string;
  // Свойства компонента-обёртки
  ['x-decorator-props']?: any;
  // Динамические свойства компонента-обёртки
  ['x-use-decorator-props']?: any;
  // Компонент
  ['x-component']?: string;
  // Свойства компонента
  ['x-component-props']?: any;
  // Динамические свойства компонента
  ['x-use-component-props']?: any;
  // Состояние отображения, по умолчанию 'visible'
  ['x-display']?: 'none' | 'hidden' | 'visible';
  // Дочерние узлы компонента, простое использование
  ['x-content']?: any;
  // Schema дочерних узлов
  properties?: Record<string, ISchema>;

  // Ниже используются только для компонентов полей

  // Реакции поля
  ['x-reactions']?: SchemaReactions;
  // Режим взаимодействия UI поля, по умолчанию 'editable'
  ['x-pattern']?: 'editable' | 'disabled' | 'readPretty';
  // Валидация поля
  ['x-validator']?: Validator;
  // Данные по умолчанию
  default?: any;

  // Для дизайнера

  // Инициализатор, определяет, что можно вставить рядом с текущей schema
  ['x-initializer']?: string;
  ['x-initializer-props']?: any;

  // Настройки блока, определяют, какие параметры можно настроить для текущей schema
  ['x-settings']?: string;
  ['x-settings-props']?: any;

  // Компонент панели инструментов
  ['x-toolbar']?: string;
  ['x-toolbar-props']?: any;
}
```

## Примеры

### Простейший компонент

Все нативные HTML-теги можно записать в виде schema. Например:

```ts
{
  type: 'void',
  'x-component': 'h1',
  'x-content': 'Привет, мир!',
}
```

Пример JSX

```tsx | pure
<h1>Привет, мир!</h1>
```

### Дочерние компоненты

Дочерние компоненты записываются в properties

```tsx | pure
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
    },
  },
}
```

Эквивалентный JSX

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} />
</div>
```

## Описание параметров

### `type`

Тип узла

```ts
type SchemaTypes =
  | 'string'
  | 'object'
  | 'array'
  | 'number'
  | 'boolean'
  | 'void';
interface ISchema {
  type?: SchemaTypes;
}
```

### `name`

Имя schema

```ts
type SchemaName = string;
interface ISchema {
  name?: SchemaName; // Корневой узел
  properties?: {
    [name: SchemaName]?: ISchema; // Дочерний узел
  }
};
```

Все schema имеют имя, а имена дочерних узлов также являются ключами properties

```ts
{
 

System: name: 'root',
  properties: {
    child1: {
      // Здесь не нужно указывать имя
    },
  },
}
```

### `title`

Заголовок узла

```ts
type SchemaTitle = string;
interface ISchema {
  title?: SchemaTitle;
}
```

### `properties`

Дочерние компоненты можно записать в properties

```ts
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
    },
  },
}
```

Эквивалентный JSX

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} />
</div>
```

### `x-component`

Компонент

```ts
type Component = any;
interface ISchema {
  ['x-component']?: Component;
}
```

Все нативные HTML-теги можно записать в виде schema. Например:

```ts
{
  type: 'void',
  'x-component': 'h1',
  'x-content': 'Привет, мир!',
}
```

Пример JSX

```tsx | pure
<h1>Привет, мир!</h1>
```

### `x-component-props` и `x-use-component-props`

`x-component-props` — это свойства компонента.

```ts
{
  type: 'void',
  'x-component': 'Table',
  'x-component-props': {
    loading: true,
  },
}
```

В некоторых случаях свойства компонента динамические, поэтому можно использовать `x-use-component-props`.

```ts
{
  type: 'void',
  'x-component': 'MyTable',
  'x-use-component-props': 'useTableProps',
}
```

Компонент `MyTable` должен быть обёрнут функцией высшего порядка `withDynamicSchemaProps`. Например:

```ts
const MyTable = withDynamicSchemaProps(Table, { displayName: 'MyTable' });
```

`useTableProps` — это пользовательский хук для динамической генерации свойств компонента.

```ts
const useTableProps = () => {
  const service = useRequest({xx});
  return {
    loading: service.loading,
  };
};
```

Также необходимо зарегистрировать его в scope, см. документацию [Рендеринг schema](/development/client/ui-schema/rendering).

```tsx | pure
<SchemaComponent
  scope={{ useTableProps }}
  components={{ MyTable }}
  schema={{
    type: 'void',
    'x-component': 'MyTable',
    'x-use-component-props': 'useTableProps',
  }}
>
```

### `x-decorator`

Компонент-обёртка

```ts
type Decorator = any;
interface ISchema {
  ['x-decorator']?: Decorator;
}
```

Комбинация `x-decorator` и `x-component` позволяет размещать два компонента в одном узле schema, уменьшая сложность структуры schema и повышая повторное использование компонентов.

Например, в сценарии формы можно комбинировать компонент FormItem с любым компонентом поля, где FormItem выступает как Decorator.

```ts
{
  type: 'void',
  ['x-component']: 'div',
  properties: {
    title: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    content: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input.TextArea',
    },
  },
}
```

Эквивалентный JSX

```tsx | pure
<div>
  <FormItem>
    <Input name={'title'} />
  </FormItem>
  <FormItem>
    <Input.TextArea name={'content'} />
  </FormItem>
</div>
```

Также можно использовать компонент CardItem для обёртывания всех блоков, чтобы все блоки были обёрнуты в Card.

```ts
{
  type: 'void',
  ['x-component']: 'div',
  properties: {
    table: {
      type: 'array',
      'x-decorator': 'CardItem',
      'x-component': 'Table',
    },
    kanban: {
      type: 'array',
      'x-decorator': 'CardItem',
      'x-component': 'Kanban',
    },
  },
}
```

Эквивалентный JSX

```tsx | pure
<div>
  <CardItem>
    <Table />
  </CardItem>
  <CardItem>
    <Kanban />
  </CardItem>
</div>
```

### `x-decorator-props` и `x-use-decorator-props`

Используются аналогично `x-component-props` и `x-use-component-props`. Для компонентов-обёрток необходимо использовать функцию высшего порядка `withDynamicSchemaProps()`.

### `x-display`

Состояние отображения компонента

- `'x-display': 'visible'`: Показать компонент
- `'x-display': 'hidden'`: Скрыть компонент, данные не скрыты
- `'x-display': 'none'`: Скрыть компонент, данные также скрыты

#### `'x-display': 'visible'`

```ts
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
      'x-display': 'visible'
    },
  },
}
```

Эквивалентный JSX

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} />
</div>
```

#### `'x-display': 'hidden'`

```ts
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
      'x-display': 'hidden'
    },
  },
}
```

Эквивалентный JSX

```tsx | pure
<div className={'form-item'}>
  {/* Здесь не выводится компонент input, но модель поля с name=title всё ещё существует */}
</div>
```

#### `'x-display': 'none'`

```ts
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
      'x-display': 'none'
    },
  },
}
```

Эквивалентный JSX

```tsx | pure
<div className={'form-item'}>
  {/* Здесь не выводится компонент input, и модель поля с name=title не существует */}
</div>
```

### `x-pattern`

Режим отображения компонента

Используется для компонентов полей, существует три режима отображения:

- `'x-pattern': 'editable'`: Редактируемый
- `'x-pattern': 'disabled'`: Нередактируемый
- `'x-pattern': 'readPretty'`: Только для чтения

Например, для компонента однострочного текста `<SingleText />` редактируемый и нередактируемый режимы — это `<input />`, а режим только для чтения — `<div />`.

#### `'x-pattern': 'editable'`

```ts
const schema = {
  name: 'test',
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      default: 'Привет',
      'x-component': 'SingleText',
      'x-pattern': 'editable',
    },
  },
};
```

Эквивалентный JSX

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} value={'Привет'} />
</div>
```

#### `'x-pattern': 'disabled'`

```ts
const schema = {
  name: 'test',
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      default: 'Привет',
      'x-component': 'SingleText',
      'x-pattern': 'disabled',
    },
  },
};
```

Эквивалентный JSX

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} value={'Привет'} disabled />
</div>
```

#### `'x-pattern': 'readPretty'`

```ts
const schema = {
  name: 'test',
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      default: 'Привет',
      'x-component': 'SingleText',
      'x-pattern': 'readPretty',
    },
  },
};
```

Эквивалентный JSX

```tsx | pure
<div className={'form-item'}>
  <div>Привет</div>
</div>
```

### `x-initializer`

Не все компоненты поддерживают `x-initializer`. Среди существующих общих компонентов schema только Grid, ActionBar и Tabs поддерживают параметр `x-initializer`.

```ts
{
  type: 'void',
  'x-component': 'Grid',
  'x-initializer': 'myInitializer',
}
```

Пользовательские компоненты также могут использовать `useSchemaInitializerRender()` для обработки рендеринга `x-initializer`. Подробности использования см. в разделе [SchemaInitializer Initializer](/development/client/ui-schema/initializer).

### `x-settings`

Не все компоненты поддерживают `x-settings`. Обычно требуется комбинация с обёрточными компонентами, такими как BlockItem, FormItem, CardItem.

```ts
{
  type: 'void',
  'x-settings': 'mySettings',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

Пользовательские компоненты также могут использовать `useSchemaSettingsRender()` для обработки рендеринга `x-settings`. Подробности использования см. в разделе [SchemaSettings Configurator](/development/client/ui-schema/settings).

### `x-toolbar`

Не все компоненты поддерживают `x-toolbar`. Обычно требуется комбинация с обёрточными компонентами, такими как BlockItem, FormItem, CardItem.

```ts
{
  type: 'void',
  'x-toolbar': 'HelloToolbar',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

Пользовательские компоненты также могут использовать `useToolbarRender()` для обработки рендеринга `x-toolbar`. Подробности использования см. в разделе [SchemaToolbar Toolbar](/development/client/ui-schema/toolbar).

