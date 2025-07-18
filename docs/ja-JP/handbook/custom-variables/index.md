# 自定义变量<Badge>v1.8.0+</Badge>

<PluginInfo commercial="true" name="custom-variables"></PluginInfo>

## 介绍

自定义变量插件是 NocoBase 的一个商业插件，它为应用提供了**自定义变量管理系统**。在当前版本中，主要支持**聚合变量**功能，允许您创建数据统计变量，如计数、求和、平均值等。这些变量可以用在菜单徽章、页面标签等地方，让您的应用界面更加直观和信息丰富。

**注意**：未来版本将支持更多类型的自定义变量。

## 主要功能

- 🏗️ **自定义变量系统**：提供变量添加、管理和使用的完整框架
- 📊 **聚合变量**：支持计数（COUNT）、求和（SUM）、平均值（AVG）、最小值（MIN）、最大值（MAX）
- 🏷️ **徽章显示**：在菜单项和页面标签上显示动态数据
- 🎯 **作用域管理**：变量只在特定的界面区域生效
- 🔧 **灵活配置**：支持自定义过滤条件和显示格式
- 🚀 **可扩展性**：预留接口支持未来添加其他类型的变量

## 安装和激活

### 前提条件
- NocoBase 版本 v1.8.0+

### 安装步骤
1. [购买](https://www.nocobase.com/cn/commercial) NocoBase 商业授权
2. [安装](https://docs-cn.nocobase.com/welcome/getting-started/plugin)插件
3. 在插件管理器中找到"自定义变量"插件
4. 点击"启用"按钮
5. 等待页面刷新

## 基础使用教程

### 1. 创建您的第一个变量

#### 场景示例
假设您有一个"订单"数据表，想要在菜单上显示今天的订单数量。

#### 操作步骤
![20250525141703_rec_](https://static-docs.nocobase.com/20250525141703_rec_.gif)
1. **进入变量创建界面**
   - 在需要显示统计信息的菜单项
   - 打开配置项列表
   - 选择"编辑徽章"选项

2. **添加新变量**
   - 在徽章编辑对话框中，点击"添加变量"按钮
   - **选择"聚合变量"类型**（当前版本支持的变量类型）

3. **配置聚合变量设置**
   - **变量名称**：输入一个描述性的名称，如"今日订单数"
   - **数据表**：选择"订单"数据表
   - **聚合方式**：选择"计数（COUNT）"
   - **聚合字段**：选择要统计的字段（最好选择具有唯一性的字段，比如 ID）

4. **设置过滤条件**（可选）
   - 点击"过滤条件"区域
   - 添加时间范围过滤：创建时间 = 今天
   - 或其他需要的条件

5. **保存变量**
   - 点击"确定"保存变量设置

6. **配置徽章显示**
   - 在"徽章"输入框中输入：`{{$customVariables.今日订单数}}`
   - 可以设置徽章的颜色和样式
   - 点击"提交"完成配置

### 2. 变量类型说明

#### 聚合变量
这是当前版本支持的主要变量类型，用于对数据表进行统计计算。

**注意**：未来版本将支持更多类型的自定义变量，如日期变量、计算变量等。

**支持的聚合方式：**

- **计数 (COUNT)**：统计记录数量
  - 用途：统计订单数量、用户数量等
  - 示例：今日新增用户数

- **求和 (SUM)**：计算数值字段的总和
  - 用途：统计销售总额、库存总量等
  - 示例：本月销售总额

- **平均值 (AVG)**：计算数值字段的平均值
  - 用途：统计平均评分、平均价格等
  - 示例：产品平均评分

- **最小值 (MIN)**：找出数值字段的最小值
  - 用途：最低价格、最早时间等
  - 示例：商品最低价格

- **最大值 (MAX)**：找出数值字段的最大值
  - 用途：最高价格、最晚时间等
  - 示例：最高销售额

### 3. 过滤条件设置

过滤条件允许您只统计符合特定条件的数据。

#### 常用过滤条件示例

**时间范围过滤：**
- 今天：`创建时间 = 今天`
- 本周：`创建时间 = 本周`
- 本月：`创建时间 = 本月`
- 最近7天：`创建时间 >= 7天前`

**状态过滤：**
- 已完成的订单：`状态 = "已完成"`
- 待处理的任务：`状态 = "待处理"`

**用户相关过滤：**
- 当前用户的数据：`创建者 = {{$user.id}}`
- 特定部门的数据：`部门 = "销售部"`

#### 组合条件
您可以设置多个过滤条件，它们之间是"且"的关系：
```
创建时间 = 本月
且 状态 = "已完成"
且 金额 > 1000
```

### 4. 徽章样式配置

#### 基本设置
- **背景颜色**：设置徽章的背景色
- **文字颜色**：设置徽章内文字的颜色
- **大小**：选择默认大小或小尺寸
- **最大数字**：当数字超过此值时显示"99+"的形式
- **显示零值**：是否在数值为 0 时也显示徽章

#### 样式建议
- **重要数据**：使用红色或橙色背景，吸引注意
- **正常数据**：使用蓝色或绿色背景
- **次要数据**：使用灰色背景，降低视觉重量

### 5. 实际应用场景

#### 场景一：客户管理系统
- **新客户数量**：显示本月新增客户数
- **待跟进客户**：显示状态为"待跟进"的客户数量
- **成交客户**：显示本月成交的客户数量

#### 场景二：订单管理系统
- **待处理订单**：显示状态为"待处理"的订单数
- **今日销售额**：显示今天的订单金额总和
- **平均订单金额**：显示订单的平均金额

#### 场景三：项目管理系统
- **进行中项目**：显示状态为"进行中"的项目数
- **逾期任务**：显示截止时间已过且未完成的任务数
- **团队工作量**：显示团队成员的平均任务数

#### 场景四：库存管理系统
- **库存不足商品**：显示库存数量低于安全库存的商品数
- **总库存价值**：显示所有商品的库存价值总和
- **最高价值商品**：显示单价最高的商品价格

## 高级功能

### 1. 表达式计算

您可以在徽章中使用表达式来处理聚合变量的值：

**显示百分比**
![20250525143249](https://static-docs.nocobase.com/20250525143249.png)

**保留小数位**
![20250525143411](https://static-docs.nocobase.com/20250525143411.png)

**条件显示**
![20250525143637](https://static-docs.nocobase.com/20250525143637.png)


### 2. 多变量组合

可以在一个徽章中使用多个聚合变量：

**显示比例**
![20250525143949](https://static-docs.nocobase.com/20250525143949.png)

**显示差值**
![20250525144118](https://static-docs.nocobase.com/20250525144118.png)

### 3. 精度控制

对于聚合变量的数值计算，您可以设置小数位数：
- 精度设置为 0：显示整数
- 精度设置为 2：显示两位小数

## 最佳实践

### 1. 变量命名规范
- 使用有意义的中文名称
- 避免使用特殊符号
- 保持名称简洁明了
- 例如：`今日订单数`、`本月销售额`、`待处理任务`

### 2. 性能优化建议
- 避免在大数据表上使用复杂的过滤条件
- 合理设置过滤条件，减少查询范围
- 定期清理不再使用的聚合变量

### 3. 用户体验优化
- 选择合适的徽章颜色，确保易读性
- 设置合理的最大显示数字
- 对于可能为 0 的统计，考虑是否显示零值

### 4. 数据准确性
- 定期检查过滤条件是否符合业务需求
- 确保统计的字段数据类型正确
- 测试聚合变量在不同数据情况下的表现

## 故障排除

### 常见问题

**问题1：聚合变量显示为空白或错误**
- 检查数据表名称是否正确
- 确认选择的字段存在且有数据
- 检查过滤条件是否过于严格

**问题2：徽章不显示**
- 确认表达式语法是否正确，参考 [Formula.js](https://docs.nocobase.com/handbook/calculation-engines/formula)
- 检查聚合变量是否已创建成功
- 确认"显示零值"设置是否符合预期

**问题3：数据不实时更新**
- 数据会在相关记录发生变化时自动更新
- 如果数据未更新，可以尝试刷新页面，或在[社区](https://forum.nocobase.com)进行反馈

**问题4：权限相关问题**
- 确认当前用户有权限访问相关数据表
- 检查字段级别的权限设置

### 获取帮助

如果遇到问题，可以：
1. 查看 NocoBase [官方文档](https://docs.nocobase.com/welcome/introduction)
2. 联系技术支持团队
3. 在[社区](https://forum.nocobase.com)论坛寻求帮助

## 总结

自定义变量插件为您的 NocoBase 应用提供了强大的变量管理系统。在当前版本中，通过聚合变量功能，您可以轻松创建数据统计并在界面上展示，让应用更加直观和实用。

记住以下要点：
- **当前版本主要支持聚合变量**，未来将扩展更多变量类型
- 从简单的计数变量开始学习
- 逐步掌握过滤条件的使用
- 注意变量命名的规范性
- 定期维护和优化变量配置
