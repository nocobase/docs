# 联动规则

表单区块的联动规则允许根据用户行为动态调整表单内容，简化输入过程，提升数据准确性，从而优化用户体验和实现复杂的业务逻辑，无需编码即可设定

![20240408100711](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408100711.png)

![20240408100757](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408100757.png)

**使用说明**
- 凡是规则中用到的表单字段需配置出来
- 当条件满足时（非必填），执行下方的属性修改
- 支持为一个表单配置多个联动规则，当同时命中多个规则条件时，按先后顺序从前往后执行结果
- 规则支持自定义命名，排序，删除，复制
- 新建的规则默认启用，禁用规则则该条规则失效
- 支持常量/变量

## 应用场景

1. 条件控制赋值

如下：客户表根据预计年采购额自动评估并设置客户的级别（例如：A+ 级、A 级、 A- 级)

- 年采购额 大于 20000 客户级别为 A+

![20240408102241](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408102241.png)

- 年采购额 大于 10000 客户级别小于等于20000为 A

![20240408102303](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408102303.png)

- 年采购额 小于 10000 客户级别为 A-

![20240408102324](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408102324.png)

2. 条件控制必填

如下: 商品表根据是否促销控制促销价格是否必填

- 是否促销为 true,促销价格必填

![20240408105031](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408105031.png)

- 是否促销为 false,促销价格非必填

![20240408105115](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408105115.png)

3. 条件控制显示/隐藏

如下: 商品表根据是否促销控制促销价格输入框是否显示

- 是否促销为 true,促销价格显示且必填

![20240408115240](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408115240.png)

- 是否促销为 false,促销价格隐藏且非必填

![20240408115338](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408115338.png)