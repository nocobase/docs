# Менеджер коллекций (CollectionManager)

## Компоненты

### CollectionManagerProvider

Основной провайдер для управления коллекциями:

```jsx
<CollectionManagerProvider
  interfaces={{}}
  collections={[]}
/>
```

### CollectionProvider

Провайдер отдельной коллекции:

```jsx
const collection = {
  name: 'tests',
  fields: [
    {
      type: 'string',
      name: 'title',
      interface: 'input',
      uiSchema: {
        type: 'string',
        'x-component': 'Input',
      },
    },
  ],
};
<CollectionProvider collection={collection} />
```

Если параметр `collection` не передан, коллекция будет получена из CollectionManagerProvider по имени:

```jsx
const collections = [
  {
    name: 'tests',
    fields: [
      {
        type: 'string',
        name: 'title',
        interface: 'input',
        uiSchema: {
          type: 'string',
          'x-component': 'Input',
        },
      },
    ],
  },
];
<CollectionManagerProvider collections={collections}>
  <CollectionProvider name="tests" />
</CollectionManagerProvider>
```

### CollectionFieldProvider

Провайдер поля коллекции:

```jsx
const field = {
  type: 'string',
  name: 'title',
  interface: 'input',
  uiSchema: {
    type: 'string',
    'x-component': 'Input',
  },
};
<CollectionFieldProvider field={field} />
```

Если параметр `field` не передан, поле будет получено из CollectionProvider по имени:

```jsx
<CollectionProvider collection={collection}>
  <CollectionFieldProvider name="title" />
</CollectionProvider>
```

### CollectionField

Универсальный компонент поля, который должен использоваться с `<CollectionProvider/>` только в схемах. Получает схему поля из CollectionProvider по имени и расширяет конфигурацию через схему, где расположен CollectionField.

```ts
{
  name: 'title',
  'x-decorator': 'FormItem',
  'x-decorator-props': {},
  'x-component': 'CollectionField',
  'x-component-props': {},
  properties: {},
}
```

## Хуки

### useCollectionManager()

Используется с `<CollectionManagerProvider/>`:

```jsx
const { collections, get } = useCollectionManager();
```

### useCollection()

Используется с `<CollectionProvider/>`:

```jsx
const { name, fields, getField, findField, resource } = useCollection();
```

### useCollectionField()

Используется с `<CollectionFieldProvider/>`:

```jsx
const { name, uiSchema, resource } = useCollectionField();
```

Для работы с `resource` необходимо использовать `<RecordProvider/>` для предоставления контекста записи текущей строки таблицы данных.
