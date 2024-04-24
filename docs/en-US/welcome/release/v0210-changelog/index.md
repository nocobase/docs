# v0.21: 2024-03-29

## Announcement

![v1.0](https://static-docs.nocobase.com/img_v3_029o_3dd91ba0-bb96-4315-a273-208f06d432fg.png)

## New features

### Multi-DataSource support for Charts

![20240407222304](https://static-docs.nocobase.com/20240407222304.png)

<br />

[For more information, see the [Data Visualization] documentation](/handbook/data-visualization)

### Multi-DataSource support for workflow

![20240407222523](https://static-docs.nocobase.com/20240407222523.png)

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

![20240407222652](https://static-docs.nocobase.com/20240407222652.png)

<br />

[For more information, see the [Workflow - Post-action events] documentation](/handbook/workflow-action-trigger)

#### Pre-action events

![20240407222834](https://static-docs.nocobase.com/20240407222834.png)

<br />

[For more information, see the [Workflow - Pre-action events] documentation](/handbook/workflow-request-interceptor)

### Custom brand Plugin

![20240407222949](https://static-docs.nocobase.com/20240407222949.png)

<br />

[For more information, see the [Custom Branding] documentation](/handbook/custom-brand)

### Support for nanoid field

![20240407223221](https://static-docs.nocobase.com/20240407223221.png)

<br />

[For more information, see the [nanoid field] documentation](/handbook/data-modeling/collection-fields/advanced/nanoid)

### Support for uuid field

![20240407223431](https://static-docs.nocobase.com/20240407223431.png)

<br />

[For more information, see the [uuid field] documentation](/handbook/data-modeling/collection-fields/advanced/uuid)

### Support for unix timestamp field

![20240407223512](https://static-docs.nocobase.com/20240407223512.png)

<br />

[For more information, see the [Unix timestamp field] documentation](/handbook/data-modeling/collection-fields/datetime/unix-timestamp)

### Number type field supports formatting configuration

![20240407223736_rec_](https://static-docs.nocobase.com/20240407223736_rec_.gif)

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

![20240407224956](https://static-docs.nocobase.com/20240407224956.png)

Kanban Cards

![20240407224811](https://static-docs.nocobase.com/20240407224811.png)

Table Cells

![20240407230028](https://static-docs.nocobase.com/20240407230028.png)

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

For useProps, instead of using x-component-props with the useProps key, you now use x-use-component-props. Here's the diff:

```diff
{
  "x-component": "Input",
+  "x-use-component-props": "useInputProps",
-  "x-component-props": {
-    useProps: "{{ useInputProps }}"
-  }
}
```

For useParams and useSourceId, instead of using x-decorator-props with the keys for useParams and useSourceId, you now use x-use-decorator-props with a single key. Here's the diff:

```diff
{
  "x-decorator": "TableBlockProvider",
+  "x-use-decorator-props": "useDecoratorProps",
-  "x-decorator-props": {
-    useParams: "{{ useParams }}",
-    useSourceId: "{{ useSourceId }}"
-  }
}
```

More information about x-use-decorator-props and the distinction between static and dynamic properties can be found here: [Static and Dynamic Properties](https://client.docs.nocobase.com/core/data-block/data-block-provider#%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7%E5%92%8C%E5%8A%A8%E6%80%81%E5%B1%9E%E6%80%A7).