# v0.21：2024-03-29

## 新特性

### 图表支持多数据源

![20240407222304](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222304.png)

<br />

[更多内容查看 [数据可视化] 文档](/handbook/data-visualization)

### 工作流支持多数据源

![20240407222523](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222523.png)

<br />

[更多内容查看 [工作流] 文档](/handbook/workflow)

### 工作流触发事件优化

触发器名称的变更

| 原名               | 更改为     |
| ------------------ | ---------- |
| 表单事件、操作事件 | 操作后事件 |
| 定时任务           | 定时事件   |
| 请求拦截器         | 操作前事件 |
| 审批               | 审批事件   |

完善以下事件的触发模式配置

#### 操作后事件

![20240407222652](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222652.png)

<br />

[更多内容查看 [工作流 - 操作后事件] 文档](/handbook/workflow-action-trigger)

#### 操作前事件

![20240407222834](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222834.png)

<br />

[更多内容查看 [工作流 - 操作前事件] 文档](/handbook/workflow-request-interceptor)

### 自定义品牌插件

![20240407222949](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222949.png)

<br />

[更多内容查看 [自定义品牌] 文档](/handbook/custom-brand)

### 支持 nanoid 字段

![20240407223221](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223221.png)

<br />

[更多内容查看 [nanoid 字段] 文档](/handbook/data-modeling/collection-fields/advanced/nanoid)

### 支持 uuid 字段

![20240407223431](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223431.png)

<br />

[更多内容查看 [uuid 字段] 文档](/handbook/data-modeling/collection-fields/advanced/uuid)

### 支持 Unix 时间戳字段

![20240407223512](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223512.png)

<br />

[更多内容查看 [Unix 时间戳字段] 文档](/handbook/data-modeling/collection-fields/datetime/unix-timestamp)

### 数字类型字段支持格式化配置

![20240407223736_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223736_rec_.gif)

<br />

[更多内容查看 [配置字段 / 特有属性设置 / 数字组件] 文档](/handbook/ui/fields/field-settings/input-number)

### 支持子路径部署

新增 `APP_PUBLIC_PATH` 环境变量，用于支持子路径部署。例如：

```bash
APP_PUBLIC_PATH=/nocobase/
```

本地访问 URL http://localhost:13000/nocobase/

nginx 代理的示例：

```bash
server {
    listen 80;
    server_name your_domain.com;  # 将 your_domain.com 替换为您的域名

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

最后，就可以通过 http://your_domain.com/nocobase/ 访问了。

### 区块性能优化

#### 支持骨架屏效果

区块卡片

![20240407224956](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224956.png)

看板卡片

![20240407224811](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224811.png)

表格单元格

![20240407230028](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407230028.png)

#### 区块配置的分布式处理

以前，整个页面的所有 Schema 的变更都会导致整个页面重新渲染，现在每个区块的 Schema 都独立了

```tsx | pure
<SchemaComponent distributed schema={} />
```

Grid 组件也支持分布式处理

```tsx | pure
{
  'x-component': 'Grid',
  'x-component-props': {
    distributed: true,
  },
}
```

## 不兼容变更

### UI Schema 的各种 useProps 使用 x-use-decorator-props 和 x-use-component-props 代替

x-use-decorator-props 和 x-use-component-props 无入侵，所有组件都支持

## 预告

![20240407222006](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222006.png)