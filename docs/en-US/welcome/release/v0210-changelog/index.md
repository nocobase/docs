# v0.21: 2024-03-29

## New features

### Multi-DataSource support for Charts

![20240407222304](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222304.png)

<br />

[For more information, see the [Data Visualization] documentation](/handbook/data-visualization)

### Multi-DataSource support for workflow

![20240407222523](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222523.png)

<br />

[For more information, see the [Workflow] documentation](/handbook/workflow)

### Optimization of workflow Trigger Events

Changes to trigger names:

| Original Name      | Changed to   |
| ------------------ | ------------ |
| Form Events, Operation Events | Post-operation Events |
| Scheduled Tasks    | Scheduled Events |
| Request Interceptors | Pre-operation Events |
| Approval           | Approval Events |

Enhancements to trigger mode configuration for the following events:

#### Post-action events

![20240407222652](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222652.png)

<br />

[For more information, see the [Workflow - Post-action events] documentation](/handbook/workflow-action-trigger)

#### Pre-action events

![20240407222834](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222834.png)

<br />

[For more information, see the [Workflow - Pre-action events] documentation](/handbook/workflow-request-interceptor)

### Custom brand Plugin

![20240407222949](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222949.png)

<br />

[For more information, see the [Custom Branding] documentation](/handbook/custom-brand)

### Support for nanoid field

![20240407223221](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223221.png)

<br />

[For more information, see the [nanoid field] documentation](/handbook/data-modeling/collection-fields/advanced/nanoid)

### Support for uuid field

![20240407223431](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223431.png)

<br />

[For more information, see the [uuid field] documentation](/handbook/data-modeling/collection-fields/advanced/uuid)

### Support for unix timestamp field

![20240407223512](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223512.png)

<br />

[For more information, see the [Unix timestamp field] documentation](/handbook/data-modeling/collection-fields/datetime/unix-timestamp)

### Number type field supports formatting configuration

![20240407223736_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223736_rec_.gif)

<br />

[For more information, see the [Field configure / Specific property settings / Number component] documentation](/handbook/ui/fields/field-settings/input-number)

### Support for subpath deployment

Added `APP_PUBLIC_PATH` environment variable to support subpath deployment. For example:

```bash
APP_PUBLIC_PATH=/nocobase/
```

Access locally via URL http://localhost:13000/nocobase/

Example nginx proxy:

```bash
server {
    listen 80;
    server_name your_domain.com;  # Replace your_domain.com with your domain

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

Now, you can access via http://your_domain.com/nocobase/.

### Block performance optimization

#### Support for skeleton screen effect

Block Cards

![20240407224956](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224956.png)

Kanban Cards

![20240407224811](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224811.png)

Table Cells

![20240407230028](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407230028.png)

#### Distributed processing of block configuration

Previously, changes to any Schema on the entire page would cause the entire page to re-render. Now, each block's Schema is independent.

```tsx | pure
<SchemaComponent distributed schema={} />
```

Grid component also supports distributed processing.

```tsx | pure
{
  'x-component': 'Grid',
  'x-component-props': {
    distributed: true,
  },
}
```

## Incompatible changes

### Various useProps of UI Schema replaced with x-use-decorator-props and x-use-component-props

x-use-decorator-props and x-use-component-props are non-intrusive and supported by all components.
