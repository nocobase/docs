# 下拉选择器

除了目标表为文件表的关系字段，关系字段编辑状态下的默认组件均为下拉选择器，支持选择目标表的已有数据关联或为目标表添加数据后关联。

![20240409230638](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240409230638.png)

- 字段组件：切换为其他关系组件
- 快速创建：先添加数据后选中该数据

1.  下拉菜单添加：创建成功后自动选中创建的数据，需要配置标题字段，适用于数据简单的场景，如标签

  订单表有多对一关系字段「标签」

   <video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240410113002.mp4" type="video/mp4">
    </video>

2.  弹窗添加：在弹窗中配置新建表单，适用于较复杂的场景，如商品录入

   订单表有一读多关系字段「商品」

   <video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240410113351.mp4" type="video/mp4">
    </video>

- 设置数据范围：控制下拉选择器的数据范围 （默认的筛选条件）
- 设置排序规则：控制下拉选择器数据的排序
- 允许添加/关联多条：限制对多的关系数据仅允许关联一条数据
- 标题字段：选项的 label 值
