# 折叠面板

## 介绍

Collapse 筛选区块需要与数据区块连接使用,为数据区块提供筛选功能，它支持选择关系字段和选项字段作为筛选条件，并以折叠面板效果展示。
## 使用手册

### 添加区块

![20240408212222](https://static-docs.nocobase.com/20240408212222.png)

示例：配置订单折叠面板区块与订单表格区块实现筛选联动。

  <video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408212817.mp4" type="video/mp4">
    </video>

## 区块设置项

![20240421173427](https://static-docs.nocobase.com/20240421173427.png)

### 连接数据区块

示例：订单表中有多对多关系字段「商品」和一对多关系字段「运单」。

![20240408213540](https://static-docs.nocobase.com/20240408213540.png)

连接弹窗内同数据表区块实现筛选联动。

  <video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408214743.mp4" type="video/mp4">
    </video>

更多内容参考 [连接数据区块](/handbook/ui/blocks/block-settings/connect-block)

- [编辑区块标题](/handbook/ui/blocks/block-settings/block-title)
- [保存为区块模板](/handbook/ui/blocks/block-settings/block-template)

## 配置字段

仅支持关系字段和选项字段为筛选字段。

![20240408212301](https://static-docs.nocobase.com/20240408212301.png)