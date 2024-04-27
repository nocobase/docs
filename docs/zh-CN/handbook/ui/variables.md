# 变量

## 介绍
在设置区块数据范围、字段默认值、联动规则、工作流时，可以使用变量。

变量的类型包括：
- 当前用户
- 当前角色
- 当前表单
- 当前对象
- 当前记录
- 当前弹窗记录
- 表格选中记录
- 日期变量

## 当前用户

当前登录的用户。

![20240416154950](https://static-docs.nocobase.com/20240416154950.png)

## 当前角色（标识）

当前用户的角色标识（role name）。

![20240416155100](https://static-docs.nocobase.com/20240416155100.png)

## 当前表单

当前表单的实时值（form.values），仅用于表单区块。使用场景有：

- 当前表单的联动规则
- 表单字段默认值（仅新增数据时有效）
- 关系字段的数据范围设置
- 提交操作的字段赋值配置

### 当前表单的联动规则

![20240416170732_rec_](https://static-docs.nocobase.com/20240416170732_rec_.gif)

### 表单字段默认值（仅新增数据时有效）

![20240416171129_rec_](https://static-docs.nocobase.com/20240416171129_rec_.gif)

### 关系字段的数据范围设置

用于处理关系之间的联动，例如：

![20240416171743_rec_](https://static-docs.nocobase.com/20240416171743_rec_.gif)

### 提交操作的字段赋值配置

![20240416171215_rec_](https://static-docs.nocobase.com/20240416171215_rec_.gif)

## 当前对象

表示内嵌的关系字段的值。

示例：对一关系，只有一个对象（object）

```js
// 当前表单
{
  username: 'user1',
  profile: {
    // 对 profile 里的字段来说，profile 这个 object 就是当前对象
    age: 30,
  }
}
```

示例：对多关系，有多个对象（object）

```js
// 当前表单
{
  title: 'title1',
  tags: [
    {
      // 对 tag 里的字段来说，tag1 为当前对象
      name: 'tag1',
    },
    {
      // 对 tag 里的字段来说，tag2 为当前对象
      name: 'tag2',
    },
  ]
}
```

仅用于表单区块的子表单和子表格的字段配置：

- 子字段的默认值
- 子关系字段的数据范围

### 子字段的默认值

![20240416172933_rec_](https://static-docs.nocobase.com/20240416172933_rec_.gif)

### 子关系字段的数据范围

![20240416173043_rec_](https://static-docs.nocobase.com/20240416173043_rec_.gif)

## 当前记录

记录是指数据表中的行，每一行代表着一条记录。在展示类的区块的**行操作的联动规则**里都有「当前记录」变量。

:::warning
为了不困扰用户，在表单区块中，没有「当前记录」变量，请使用「当前表单」代替。
:::

### 行操作的联动规则

![20240416174813_rec_](https://static-docs.nocobase.com/20240416174813_rec_.gif)

## 当前弹窗记录

弹窗操作在 NocoBase 界面配置中扮演着非常重要的角色。

- 行操作的弹窗：每个弹窗都会有个「当前弹窗记录」变量，表示当前行记录。
- 关系字段的弹窗：每个弹窗都会有个「当前弹窗记录」变量，表示当前点击的关系记录。

弹窗里的区块都可以使用「当前弹窗记录」这个变量，相关使用场景有：

- 配置区块的数据范围
- 配置关系字段的数据范围
- 配置字段的默认值（新增数据的表单）
- 配置操作的联动规则
- 表单提交操作的字段赋值配置

### 配置区块的数据范围

![20240416224307_rec_](https://static-docs.nocobase.com/20240416224307_rec_.gif)

### 配置关系字段的数据范围

![20240416224641_rec_](https://static-docs.nocobase.com/20240416224641_rec_.gif)

### 配置字段的默认值（新增数据的表单）

![20240416223846_rec_](https://static-docs.nocobase.com/20240416223846_rec_.gif)

### 配置操作的联动规则

![20240416223101_rec_](https://static-docs.nocobase.com/20240416223101_rec_.gif)

### 表单提交操作的字段赋值配置

![20240416224014_rec_](https://static-docs.nocobase.com/20240416224014_rec_.gif)

## 表格选中记录

目前仅用于表格区块的 Add record 操作的表单字段默认值

### Add record 操作的表单字段默认值

## 父级记录（已弃用）

仅限于关系区块里使用，表示关系数据的源记录。

:::warning
「父级记录」已弃用，建议使用等价的「当前弹窗记录」代替。
:::

## 日期变量

相关变量有：

- Current time
- Yesterday
- Today
- Tomorrow
- Last week
- This week
- Next week
- Last month
- This month
- Next month
- Last quarter
- This quarter
- Next quarter
- Last year
- This year
- Next year
- Last 7 days
- Next 7 days
- Last 30 days
- Next 30 days
- Last 90 days
- Next 90 days

<br />

:::warning
除了当前时间（Current time）为时刻，其他的日期变量都是时段。
:::

相关使用场景有：

- 区块数据范围的日期字段条件设置
- 关系字段的数据范围的日期字段条件设置
- 操作联动规则的日期字段条件设置
- 日期字段默认值设置

### 区块数据范围的日期字段条件设置

### 关系字段的数据范围的日期字段条件设置

### 操作联动规则的日期字段条件设置

### 日期字段默认值设置