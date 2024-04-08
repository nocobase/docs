# 折叠面板

## 使用手册

### 添加区块

- **以 Collection 为数据源使用，在页面里添加**

![20240408212222](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408212222.png)

可以配置关系字段和选项字段为筛选字段，以折叠面板效果展示

![20240408212301](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408212301.png)

如下图,配置订单折叠面板区块与订单表格区块实现筛选联动

  <video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408212817.mp4" type="video/mp4">
    </video>

- **以 Assocation 为数据源使用，在弹窗里添加**

订单表中有多对多关系字段「商品」和一对多关系字段「运单」,仅支持对多的关系数据表

![20240408213540](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408213540.png)

可以连接弹窗内同数据表区块实现筛选联动


  <video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408214743.mp4" type="video/mp4">
    </video>

### 区块设置项

- [编辑区块标题](/handbook/ui/blocks/block-settings/block-title)
- [连接数据区块](/handbook/ui/blocks/block-settings/connect-block)
- [保存为区块模板](/handbook/ui/blocks/block-settings/block-template)

### 配置字段

