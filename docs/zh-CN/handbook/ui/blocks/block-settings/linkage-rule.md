# 联动规则

表单区块的联动规则允许根据用户行为动态调整表单内容，简化输入过程，提升数据准确性，从而优化用户体验和实现复杂的业务逻辑，无需编码即可设定

![20240408100711](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408100711.png)

![20240408100757](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408100757.png)

- 当条件满足时（非必填），执行下方的属性修改
- 支持为一个表单配置多个联动规则，当同时命中多个规则条件时，按先后顺序从前往后执行结果
- 每一条规则支持自定义命名，排序，删除，复制
- 新建的规则默认启用，禁用规则则该条规则失效

## 应用场景

1. 条件控制赋值

如下：客户表根据预计年采购额自动评估并设置客户的初始级别（例如：A+ 级、A 级、 A- 级)

- 大于 20000 为 A+

![20240408102241](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408102241.png)

- 大于 10000 小于等于20000为 A

![20240408102303](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408102303.png)

- 小于 10000 为 A-

![20240408102324](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408102324.png)
