# SchemaInitializer 初始化器

<img src="./image-5.png" style="width: 960px;">

当激活 UI 配置之后，界面上直观可见的各种橙色按钮就是 SchemaInitializer 初始化器，用于向界面内添加各种区块、字段、操作等。

## 常用的初始化器

<table>
  <tbody>
    <tr>
      <td>菜单</td>
      <td>添加菜单项</td>
      <td>MenuItemInitializers</td>
    </tr>
    <tr>
      <td rowspan="2">页面</td>
      <td>添加标签页</td>
      <td>-</td>
    </tr>
    <tr>
      <td>添加区块</td>
      <td>BlockInitializers</td>
    </tr>
    <tr>
      <td rowspan="3">表格</td>
      <td>配置操作</td>
      <td>TableActionInitializers</td>
    </tr>
    <tr>
      <td>配置字段</td>
      <td>TableColumnInitializers</td>
    </tr>
    <tr>
      <td>配置操作列</td>
      <td>TableActionColumnInitializers</td>
    </tr>
    <tr>
      <td rowspan="2">表单</td>
      <td>配置字段</td>
      <td>FormItemInitializers</td>
    </tr>
    <tr>
      <td>配置操作</td>
      <td>FormActionInitializers</td>
    </tr>
    <tr>
      <td rowspan="2">详情（带分页）</td>
      <td>配置操作</td>
      <td>DetailsActionInitializers</td>
    </tr>
    <tr>
      <td>配置字段</td>
      <td>ReadPrettyFormItemInitializers</td>
    </tr>
    <tr>
      <td rowspan="3">列表</td>
      <td>全局配置操作</td>
      <td>ListActionInitializers</td>
    </tr>
    <tr>
      <td>配置字段</td>
      <td>ReadPrettyFormItemInitializers</td>
    </tr>
    <tr>
      <td>每项的配置操作</td>
      <td>ListItemActionInitializers</td>
    </tr>
    <tr>
      <td rowspan="3">栅格卡片</td>
      <td>全局配置操作</td>
      <td>GridCardActionInitializers</td>
    </tr>
    <tr>
      <td>配置字段</td>
      <td>ReadPrettyFormItemInitializers</td>
    </tr>
    <tr>
      <td>每项的配置操作</td>
      <td>GridCardItemActionInitializers</td>
    </tr>
    <tr>
      <td rowspan="2">过滤表单</td>
      <td>配置字段</td>
      <td>FilterFormItemInitializers</td>
    </tr>
    <tr>
      <td>配置操作</td>
      <td>FilterFormActionInitializers</td>
    </tr>
    <tr>
      <td>折叠面板</td>
      <td>配置字段</td>
      <td>AssociationFilter.FilterBlockInitializer</td>
    </tr>
    <tr>
      <td rowspan="9">弹窗</td>
      <td>添加标签页</td>
      <td>-</td>
    </tr>
    <tr>
      <td rowspan="8">添加区块</td>
      <td>CreateFormBlockInitializers 添加</td>
    </tr>
    <tr>
      <td>RecordBlockInitializers 查看</td>
    </tr>
    <tr>
      <td>RecordBlockInitializers 编辑</td>
    </tr>
    <tr>
      <td>RecordBlockInitializers 点击关系数据</td>
    </tr>
    <tr>
      <td>TableSelectorInitializers 数据选择器弹窗</td>
    </tr>
    <tr>
      <td>RecordBlockInitializers 打开弹窗</td>
    </tr>
    <tr>
      <td>CusomeizeCreateFormBlockInitializers 添加数据（任意数据表）</td>
    </tr>
    <tr>
      <td>RecordBlockInitializers 批量编辑</td>
    </tr>
    <tr>
      <td rowspan="2">详情（单条数据）</td>
      <td>配置操作</td>
      <td>ReadPrettyFormActionInitializers</td>
    </tr>
    <tr>
      <td>配置字段</td>
      <td>ReadPrettyFormItemInitializers</td>
    </tr>
    <tr>
      <td rowspan="2">编辑表单</td>
      <td>配置字段</td>
      <td>FormItemInitializers</td>
    </tr>
    <tr>
      <td>配置操作</td>
      <td>UpdateFormActionInitializers</td>
    </tr>
  </tbody>
</table>

## 向已有的初始化器里添加项

使用 `schemaInitializerManager.addItem()` 方法添加

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
    this.schemaInitializerManager.addItem(
      'BlockInitializers',
      'otherBlocks.test1',
      customItem,
    );
  }
}
```

## 新注册一个初始化器

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

SchemaInitializer 用于 Schema 的 `x-initializer` 参数中，通用的 Schema 组件中，Grid、ActionBar、Tabs 支持 x-initializer 参数。例如：

```ts
{
  type: 'void',
  'x-component': 'Grid',
  'x-initializer': 'myInitializer',
}
```

### 自主渲染初始化器按钮

自定义的组件中，可以使用 [useSchemaInitializerRender()](#) 自主处理 x-initializer 的渲染，详细用法参考 [SchemaInitializer API](#)。
