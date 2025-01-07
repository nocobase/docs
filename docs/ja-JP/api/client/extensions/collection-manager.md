# CollectionManager

## コンポーネント

### CollectionManagerProvider

```jsx | pure
<CollectionManagerProvider
  interfaces={{}}
  collections={[]}
></CollectionManagerProvider>
```

### CollectionProvider

```jsx | pure
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
<CollectionProvider collection={collection}></CollectionProvider>;
```

collection パラメータが渡されない場合、CollectionManagerProvider から対応する name の collection を取得します。

```jsx | pure
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
  <CollectionProvider name={'tests'}></CollectionProvider>
</CollectionManagerProvider>;
```

### CollectionFieldProvider

```jsx | pure
const field = {
  type: 'string',
  name: 'title',
  interface: 'input',
  uiSchema: {
    type: 'string',
    'x-component': 'Input',
  },
};
<CollectionFieldProvider field={field}></CollectionFieldProvider>;
```

field パラメータが渡されない場合、CollectionProvider から対応する name の field を取得します。

```jsx | pure
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
<CollectionProvider collection={collection}>
  <CollectionFieldProvider name={'title'}></CollectionFieldProvider>
</CollectionProvider>;
```

### CollectionField

万能フィールドコンポーネントで、`<CollectionProvider/>` と組み合わせて使用する必要があります。Schema シナリオでのみ使用可能です。CollectionProvider から対応する name の field schema を取得します。CollectionField が存在する schema の拡張設定を通じて設定可能です。

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

## Hooks

### useCollectionManager()

`<CollectionManagerProvider/>` と組み合わせて使用します。

```jsx | pure
const { collections, get } = useCollectionManager();
```

### useCollection()

`<CollectionProvider/>` と組み合わせて使用します。

```jsx | pure
const { name, fields, getField, findField, resource } = useCollection();
```

### useCollectionField()

`<CollectionFieldProvider/>` と組み合わせて使用します。

```jsx | pure
const { name, uiSchema, resource } = useCollectionField();
```

resource は `<RecordProvider/>` と組み合わせて使用し、現在のデータシート行レコードのコンテキストを提供します。