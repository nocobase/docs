# 设置验证规则

## 介绍

设置验证规则是为了确保用户输入或操作的数据符合预期的格式、范围和逻辑，包括数据格式验证、范围验证、逻辑验证、以及自定义规则验证。从而提高数据的准确性、完整性和安全性。

支持为字段设置多重验证规则。

![20240411112215](https://static-docs.nocobase.com/20240411112215.png)

内置了多种常用格式校验（如数值、身份证号码、邮箱、手机号等）

![20240411112413](https://static-docs.nocobase.com/20240411112413.png)

### 长度/大小校验

校验数值最小值（目前仅支持常量）。

<video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240417111233.mp4" type="video/mp4">
</video>

### 自定义正则校验

示例：自定义正则校验电话号码为新加坡电话号码，以及配置错误信息。

![20240417222427](https://static-docs.nocobase.com/20240417222427.png)

![20240417222548](https://static-docs.nocobase.com/20240417222548.png)