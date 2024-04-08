# 区块模板

<PluginInfo name="ui-schema-storage"></PluginInfo>

可以将一个数据类型区块保存为模板，以后添加区块时可以直接复制或引用这个模板。比如，一个数据表的表单，既用于新增数据，又用于编辑数据，那就可以将这个表单保存为模板，在新增数据和编辑数据的界面里引用它。

### 如何添加和使用模板？

1. 将数据区块保存为区块模板（只有数据类型的区块才有这个配置项）

![](./static/JNiLb7rksoY07ox092ycaarenGd.png)

1. 添加区块时，选择复制或引用模板

![](./static/ImutbF0YDoWldOxrPilcwQFHnSe.png)

### 复制和引用的区别

复制是基于区块模板创建的全新区块，区块有调整不影响模块；引用是直接使用区块模板，区块调整会改变模板，所有引用了当前模板的区块都会产生变化。