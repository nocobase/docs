# 使用手册

## 角色并集
角色并集是一种权限管理模式，根据系统设置，用户可以选择使用独立角色、允许角色并集，或者仅使用角色并集，以满足不同的权限需求。

![20250311162443](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250311162443.png)

### 独立角色
系统默认为独立角色：不使用角色并集，用户需要逐个切换自己拥有的角色

![20250311162942](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250311162942.png)
![20250311163038](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250311163038.png)

### 允许角色并集
允许用户使用角色并集，即可以同时使用自己拥有的所有角色的权限，同时也允许用户逐个切换自己的角色。

![20250311163449](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250311163449.png)

### 仅角色并集
强制用户仅能使用角色并集，不能逐个切换角色。

![20250311163706](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250311163706.png)

### 角色并集规则
所有规则目的是让其拥有所有角色的最大权限。以下说明，当角色设置同一项冲突时，应该如何判定角色权限。

#### 操作权限合并：
示例：角色1（role1）配置允许界面，角色2（role2）配置允许安装、激活、禁用插件

![20250311174558](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250311174558.png)

![20250311174802](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250311174802.png)

使用**全部权限**的角色登录，会同时拥有这两种权限

![20250311175821](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250311175821.png)

#### 数据范围合并：

场景1: 当 role1 配置允许查看姓李的员工，role2 配置允许查看年龄大于20的员工，那么最终得到的可见范围为**允许查看姓李或年龄大于20**的员工

![20250311182311](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250311182311.png)

![20250311182637](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250311182637.png)

#### 字段合并
场景2: 当 role1 配置允许仅查看用户名字段，role2 配置允许仅查看昵称字段，那么最终得到的可见的字段为用户名和昵称
![20250311185341](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250311185341.png)
![20250311185240](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250311185240.png)


#### 总览
|        | L1 操作权限                     | L2 数据范围  | L3 字段范围    |
|--------|--------------------------------|------------------|--------------|
| **角色1** | 允许配置界面                     | 仅查看姓李员工       | 仅查看用户名  |
| **角色2** | 允许安装、激活、禁用插件       | 仅查看35岁以上员工     | 仅查看昵称    |
| **合并后** | 允许界面 + 安装 + 激活 + 禁用插件 | 可查看姓李员工或35岁员工 | 用户名 + 昵称  |