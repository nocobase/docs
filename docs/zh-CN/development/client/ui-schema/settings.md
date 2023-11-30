# SchemaSettings 设置器

激活 UI 配置之后，鼠标放到指定区块、表单、操作上方时，会显示对应的 Schema 工具栏，工具栏的设置图标就是当前 Schema 的设置器。

## 常用的设置器

<img src="./SchemaSettings.png" />

## 向已有的设置器里添加设置项

使用 `schemaSettingsManager.addItem()` 方法添加

```ts
class PluginSampleSchemaInitializer extends Plugin {
  async load() {
    const customItem = {
      type: 'item',
      useComponentProps() {
        const { insert } = useSchemaInitializer();
        const handleClick = () => {
          insert({
            type: 'void',
            'x-decorator': 'CardItem',
            'x-component': 'Hello',
          });
        };
        return {
          title: '测试项',
          onClick: handleClick,
        };
      },
    };
    this.schemaSettingsManager.addItem(
      'BlockInitializers',
      'otherBlocks.test1',
      customItem,
    );
  }
}
```

## 注册一个全新的设置器

### 在插件的 load 方法中添加

```ts
class PluginSampleSchemaInitializer extends Plugin {
  async load() {
    const myInitializer = new SchemaInitializer({
      name: 'myInitializer',
      title: 'Add block',
      items: [
        {
          name: 'demo',
          type: 'item',
          title: 'Demo',
        },
      ],
    });
    this.schemaInitializerManager.add(myInitializer);
  }
}
```

### 在特定 Schema 中使用

SchemaSettings 用于 Schema 的 `x-settings` 参数中，并不是所有的组件都支持 `x-settings`，通常需要和 BlockItem、FormItem、CardItem 这类包装器组件结合使用。例如：

```ts
{
  type: 'void',
  'x-settings': 'mySettings',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

### 自主渲染设置器按钮

自定义的组件中，也可以使用 `useSchemaSettingsRender()` 自主处理 `x-settings` 的渲染，详细用法参考 [SchemaSettings 设置器](#) 章节。

## API 参考

- [SchemaSettingsManager](/)
- [SchemaSettings](/)
