# <版本号>：<日期>

版本号：

- Release Version：x.y.z
- Pre-release Version：1.x.y-alpha.z

相关说明：

- 兼容性变更：x + 1
- 新插件、新功能发布：y + 1
- 缺陷修复：z + 1
- alpha -> beta -> rc

更新日志每周一篇，文件名格式：

```bash
- docs/zh-CN/welcome/changelog/<YYYYMMDD>.md
- docs/eh-US/welcome/changelog/<YYYYMMDD>.md
```

标题格式为：

```md
# <版本号>：<日期>
<!-- 例如 -->
# v1.0.0-alpha.15：2024-05-19
```

分为新增、改进、修复三块内容，内容格式：

```md
## <scope>：<title> (<a href="pr-url" target="_blank">#<pr-number></a>)
<!-- title 必填，scope 没有可以不写，pr 没有也可以不写 -->

<description> <!-- 没有描述可以不写 -->

![](<img-url>) <!-- 如果没有截图，放「其他」里，尺寸为 1440x900 -->

<!-- 只有一个文档时 -->
参考文档（Reference Document）：[文档1](#) 

<!-- 多个文档时 -->
参考文档（Reference Documents）：
- [文档1](#)  
- [文档2](#)
```

未配图的放到各个板块的「其他」里，如

```md
## 新特性
### 其他
- 特性1
## 优化
### 其他
- 优化1
## 缺陷修复
### 其他
- 修复1
```

## 新特性 - New features

### 新增功能 XXX ([#4260](https://github.com/nocobase/nocobase/pull/4260))

一句话概括，然后后面放一张截图、动图或视频说明，在这里内容不要写太多了，更多内容应该放到使用手册里介绍。

![](https://static-docs.nocobase.com/202405191513995.png)

### 插件：LDAP 认证 ([#4260](https://github.com/nocobase/nocobase/pull/4260))

支持用户使用 LDAP 服务器账号密码登录 NocoBase，详情参考 [认证：LDAP](/handbook/auth-ldap) 文档。

![](https://static-docs.nocobase.com/202405191513995.png)

## 优化 - Optimization

### 改进或优化了某个功能 ([#4260](https://github.com/nocobase/nocobase/pull/4260))

一句话概括，然后后面放一张截图、动图或视频说明，在这里内容不要写太多了，如果内容较多可以概括性总结，例如：

- 事项1
- 事项2

![](https://static-docs.nocobase.com/202405191513995.png)

### 改进「配置操作」交互 ([#4260](https://github.com/nocobase/nocobase/pull/4260))

下拉菜单里所有操作统一显示在一个列表中，不再区分“启用操作”和“自定义”。

- 只能添加一次的操作：这些操作保留 Switch 效果，用户只能启用或禁用。
- 可以重复添加的操作：这些操作不再使用 Switch 交互，可以多次添加。
- 合并功能相似的操作
  - “Add new” 和 “Add record”
  - “Submit” 和 “Save record”

![20240520153033](https://static-docs.nocobase.com/20240520153033.png)

## 缺陷修复 - Bug fixes

### 修复某个缺陷 XXX ([#4260](https://github.com/nocobase/nocobase/pull/4260))

一句话概括，然后后面放一张截图、动图或视频说明。

![](https://static-docs.nocobase.com/202405191513995.png)

### 其他

- 修复问题 1
- 修复问题 2
