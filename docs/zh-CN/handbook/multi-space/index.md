# 多空间

<PluginInfo name="multi-space" commercial="true"></PluginInfo>

## 介绍

在单一应用实例内部，通过逻辑隔离实现多个独立数据空间。

## 安装

![](https://static-docs.nocobase.com/multi-space/Plugin-manager-NocoBase-10-15-2025_09_57_AM.png)

## 使用手册

#### 多空间管理

在插件开启够，进入到 用户与权限 设置页面，切到换到空间面板，就可以管理空间（初始状态下存在内置的 未分配空间标识的条目，在老数据订正时会使用）

![](https://static-docs.nocobase.com/multi-space/Users-Permissions-NocoBase-10-15-2025_09_58_AM.png)

点击添加空间按钮，进行空间创建
![](https://static-docs.nocobase.com/multi-space/Users-Permissions-NocoBase-10-15-2025_09_58_AM%20(1).png)

选中新建的空间后，可以设置该空间的用户
![](https://static-docs.nocobase.com/multi-space/Users-Permissions-NocoBase-10-15-2025_09_59_AM.png)

#### 多空间切换查看
右上角可以切换有权限的空间，右侧眼睛图标高亮时，可以同时查看多个空间
![](https://static-docs.nocobase.com/multi-space/Goods-NocoBase-10-15-2025_10_26_AM.png)

#### 多空间数据管理

在开启插件后，进入 collection 创建时，会预置空间字段，包含该字段的表才会被空间管理
![](https://static-docs.nocobase.com/multi-space/data-source-manager-main-NocoBase-10-15-2025_10_01_AM.png)

对于已经存在的数据表，可以手动添加空间字段
![](https://static-docs.nocobase.com/multi-space/data-source-manager-main-NocoBase-10-15-2025_10_03_AM.png)

对于包含了空间字段的数据表，会包含以下默认逻辑
1. 创建数据时，会自动关联当前空间
2. 筛选数据时，会自动关联当前空间


#### 老数据多空间分类
对于在未开启多空间插件前的数据支持多空间，可以按一下步骤将老数据分类

1. 对老的表添加空间字段
![](https://static-docs.nocobase.com/multi-space/data-source-manager-main-NocoBase-10-15-2025_10_18_AM.png)

2. 给管理数据的用户，关联到 (Unassigned Space) 空间
![](https://static-docs.nocobase.com/multi-space/Users-Permissions-NocoBase-10-15-2025_10_14_AM.png)

3. 切换顶部为所有空间数据查看
![](https://static-docs.nocobase.com/multi-space/Goods-NocoBase-10-15-2025_10_20_AM.png)

4. 配置一个新的页面，用户老数据分配，在列表和编辑页面的将空间字段显示出来，用于手动调整空间
![](https://static-docs.nocobase.com/multi-space/Goods-10-15-2025_10_21_AM.png)
![](https://static-docs.nocobase.com/multi-space/Goods-10-15-2025_10_22_AM.png)

5. 手动对数据分配空间


