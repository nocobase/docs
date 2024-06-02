# 创建新的 SchemaSettings

## 场景说明

当我们新增一个区块、字段或者操作时，我们可能需要新增一些配置项，用于其展示、行为等，这时我们就需要新增一个 `SchemaSettings`。

## 示例说明

本示例会在 [简单区块](/plugin-samples/schema-initializer/block-simple) 例子的基础上完善，当时只是创建了一个只有 `remove` 的 SchemaSettings，本示例会增加如下配置项：

- `Edit block title`：编辑区块标题
- `Edit src`：编辑图片地址
- `Edit height`：编辑图片的高度
- `objectFit`：选择 img 的 `object-fit` 属性
- `Lazy`：是否懒加载

<br />

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240602112410_rec_.mp4" type="video/mp4" />
</video>

本实例主要为了演示 initializer 的使用，更多关于区块扩展可以查看 [区块扩展](/plugin-samples/block) 文档。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-schema-settings-new) 中查看。


## 初始化插件

我们按照 [编写第一个插件](/development/your-fisrt-plugin) 文档说明，如果没有一个项目，可以先创建一个项目，如果已经有了或者是 clone 的源码，则跳过这一步。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

然后初始化一个插件，并添加到系统中：

```bash
yarn pm create @nocobase-sample/plugin-schema-settings-new
yarn pm enable @nocobase-sample/plugin-schema-settings-new
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

### 1. 创建区块/字段/操作

前面已经说明本示例会在 [简单区块](/plugin-samples/schema-initializer/simple-block) 基础上继续实现，所以我们可以复制 `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client` 目录覆盖 `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client`。

然后修改 `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/index.tsx`：

```diff
import { Plugin } from '@nocobase/client';
import { InfoBlock, infoBlockSettings, infoBlockInitializerItem } from './InfoBlock';

- export class PluginInitializerBlockSimpleClient extends Plugin {
+ export class PluginSchemaSettingsNewClient extends Plugin {
  async load() {
    // ...
  }
}

- export default PluginInitializerBlockSimpleClient;
+ export default PluginSchemaSettingsNewClient;
```

为了避免和其他示例冲突，把所有 `ImageBlock` 改为了 `ImageBlock2`，但是本示例文档中仍然按照 `ImageBlock` 来说明。

### 2. 组件属性

#### 2.1 实现组件

我们需要先让组件支持需求中的属性。

我们修改 `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/ImageBlock.tsx` 文件：

```tsx | pure
import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client';

export interface ImageBlockProps {
  src?: { url: string; title?: string };
  /**
   * @default 500
   */
  height?: number;
  /**
   * @default 'cover'
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  /**
   * @default false
   */
  lazy?: boolean;
}

export const ImageBlock: FC<ImageBlockProps> = withDynamicSchemaProps((props) => {
  const { src, height = 500, objectFit = 'cover', lazy = false } = props;
  return <div style={{ height }}>
    {
      src ? <img
        loading={lazy ? 'lazy' : 'eager'}
        style={{ width: '100%', height: '100%', objectFit }}
        src={src.url}
        alt={src.title}
      /> : null
    }
  </div>
}, { displayName: 'ImageBlock' })
```

#### 2.2 验证组件

组件验证方式有 2 种：

- 临时页面验证：我们可以临时建一个页面，然后渲染 `ImageBlock` 组件，查看是否符合需求
- 文档示例验证：可以启动文档 `yarn doc packages/plugins/@@nocobase-sample/plugin-schema-settings-new`，通过写文档示例的方式验证是否符合需求（TODO）

我们以 `临时页面验证` 为例，我们新建一个页面，根据属性参数添加一个或者多个 `ImageBlock` 组件，查看是否符合需求。

```tsx | pure
// ...
export class PluginSchemaSettingsNewClient extends Plugin {
  async load() {
    // ...
    this.app.router.add('admin.image-block-component', {
      path: '/admin/image-block-component',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <ImageBlock />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <ImageBlock src={{ url: 'https://picsum.photos/1200/500' }} height={200} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <ImageBlock src={{ url: 'https://picsum.photos/1200/500' }} objectFit='contain' />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <ImageBlock src={{ url: 'https://picsum.photos/1200/500' }} lazy />
          </div>
        </>
      }
    })
  }
}
```

我们访问 [http://localhost:3000/admin/image-block-component](http://localhost:3000/admin/image-block-component)，查看是否符合需求。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240601171433_rec_.mp4" type="video/mp4" />
</video>

验证完毕后需要删除测试页面。

### 3. 实现 Schema

#### 3.1 定义 Schema

我们修改 `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/imageBlockSchema.ts`：

```diff
import { ISchema } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { imageBlockSettings } from "./imageBlockSettings";
+ import { ImageBlockProps } from "./ImageBlock";

+ export function useImageBlockProps(): ImageBlockProps {
+  const fieldSchema = useFieldSchema();
+  return fieldSchema.parent?.['x-decorator-props']?.['image'];
+ }

export const imageBlockSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
+  'x-decorator-props': {
+   image: {}
+ },
  properties: {
    image: {
      'x-component': 'ImageBlock',
+     'x-use-component-props': 'useImageBlockProps'
    }
  },
  'x-settings': imageBlockSettings.name
};
```

我们将 `ImageBlock` 的属性存储在 `x-decorator-props` 的 `image`  属性中，然后通过 `x-use-component-props` 来获取。

`useImageBlockProps()`：返回 `ImageBlock` 组件对应的属性

- `useFieldSchema()`：获取当前字段的 schema，并通过 `parent` 获取父级 schema。如果是数据区块则可以通过 [useDataBlockProps](https://client.docs.nocobase.com/core/data-block/data-block-provider#usedatablockprops) 获取属性。

#### 3.2 验证 Schema

```tsx | pure
// ...
export class PluginSchemaSettingsNewClient extends Plugin {
  async load() {
    // ...
    this.app.router.add('admin.image-block-schema', {
      path: '/admin/image-block-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test1: {
                  ...imageBlockSchema,
                  'x-decorator-props': { image: {} }
                }
              }
            }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test1: {
                  ...imageBlockSchema,
                  'x-decorator-props': { image: { src: { url: 'https://picsum.photos/1200/500' }, height: 200 } }
                }
              }
            }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test1: {
                  ...imageBlockSchema,
                  'x-decorator-props': { image: { src: { url: 'https://picsum.photos/1200/500' }, objectFit: 'contain' } }
                }
              }
            }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test1: {
                  ...imageBlockSchema,
                  'x-decorator-props': { image: { src: { url: 'https://picsum.photos/1200/500' }, lazy: true } }
                }
              }
            }} />
          </div>
        </>
      }
    })
  }
}
```

我们访问 [http://localhost:3000/admin/image-block-component](http://localhost:3000/admin/image-block-component)，查看是否符合需求。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240601171433_rec_.mp4" type="video/mp4" />
</video>

验证完毕后需要删除测试页面。

### 4. 实现 SchemaSettings

[简单区块文档](/plugin-samples/schema-initializer/block-simple#4-实现-schema-settings) 中已经说明了如何实现 `SchemaSettings`。

### 5. 实现 SchemaSettings items

#### 5.1 实现 Edit block title

因为编辑区块标题是一个通用的逻辑，所以 NocoBase 提供了 SchemaSettingsBlockTitleItem（文档 TODO） 组件，我们可以直接使用。

我们修改 `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/InfoBlock.tsx`：

```diff
- import { SchemaSettingsBlockTitleItem } from "@nocobase/client";
+ import { SchemaSettings, SchemaSettingsBlockTitleItem } from "@nocobase/client";

export const imageBlockSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
+   {
+     name: 'editBlockTitle',
+     Component: SchemaSettingsBlockTitleItem,
+   },
    {
      type: 'remove',
      name: 'remove',
    }
  ]
});
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240602105024_rec_.mp4" type="video/mp4" />
</video>

更多可以复用的 SchemaSettings items 可以查看 TODO。

#### 5.2 实现 Edit Src

##### 5.2.1 实现 SchemaSettings Item

我们新建 `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/SchemaSettingsItems/src.ts` 文件：

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

export const schemaSettingsSrcItem: SchemaSettingsItemType = {
  name: 'src',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();

    return {
      title: 'Edit src',
      schema: {
        type: 'object',
        title: 'Edit src',
        properties: {
          src: {
            title: 'Image',
            type: 'string',
            default: filedSchema['x-decorator-props']?.image?.src,
            'x-decorator': 'FormItem',
            'x-component': 'Upload.Attachment',
            'x-component-props': {
              action: 'attachments:create',
            },
          },
        },
      },
      onSubmit(image) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            image: {
              ...filedSchema['x-decorator-props']?.['image'],
              src: image.src,
            },
          },
        })
      }
    };
  },
};
```

关于 SchemaSettings Item 的定义可以查看 [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)。

- `type`：内置类型。[actionModal](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsactionmodalitem) 为弹窗类型
- `name`：唯一标识，用于增删改查
- `useComponentProps`：返回 `actionModal` 对应组件 `SchemaSettingsActionModalItem` 的属性

`useComponentProps`：

- Hooks
  - `useFieldSchema`：获取当前节点 schema
  - `useDesignable`：获取当前 Designable 实例，deepMerge 用于合并 schema
    - `x-uid`：当前节点的唯一标识
    - `x-decorator-props`：当前节点的属性，存储了 `image` 的属性


- Props
  - `title`：弹窗标题
  - `schema`：弹窗表单 schema
    - [Upload.Attachment](https://client.docs.nocobase.com/components/upload)：上传组件
    - [FormItem](https://client.docs.nocobase.com/components/form-item)：表单项
  - `onSubmit`：表单提交事件

##### 5.2.2 使用 SchemaSettings Item

我们修改 `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/imageBlockSettings.ts`：

```diff
// ...
+ import { schemaSettingsSrcItem } from "./SchemaSettingsItems/src";

export const imageBlockSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   schemaSettingsSrcItem,
    {
      type: 'remove',
      name: 'remove',
    }
  ]
});
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240602110529_rec_.mp4" type="video/mp4" />
</video>

#### 5.3 实现 Edit Height

##### 5.3.1 实现 SchemaSettings Item

我们新建 `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/SchemaSettingsItems/height.ts` 文件：

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

export const schemaSettingsHeightItem: SchemaSettingsItemType = {
  name: 'height',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();

    return {
      title: 'Edit height',
      schema: {
        type: 'object',
        title: 'Edit Height',
        properties: {
          height: {
            title: 'Image Height',
            type: 'number',
            default: filedSchema['x-decorator-props']?.image?.height,
            'x-decorator': 'FormItem',
            'x-component': 'InputNumber',
          },
        },
      },
      onSubmit({ height }: any) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            image: {
              ...filedSchema['x-decorator-props']?.['image'],
              height,
            },
          },
        })
      }
    };
  },
};
```

关于 SchemaSettings Item 的定义可以查看 [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)。

- `type`：内置类型。[actionModal](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsactionmodalitem) 为弹窗类型
- `name`：唯一标识，用于增删改查
- `useComponentProps`：返回 `actionModal` 对应组件 `SchemaSettingsActionModalItem` 的属性

`useComponentProps`：

- Hooks
  - `useFieldSchema`：获取当前节点 schema
  - `useDesignable`：获取当前 Designable 实例，deepMerge 用于合并 schema
    - `x-uid`：当前节点的唯一标识
    - `x-decorator-props`：当前节点的属性，存储了 `image` 的属性


- Props
  - `title`：弹窗标题
  - `schema`：弹窗表单 schema
    - [InputNumber](https://client.docs.nocobase.com/components/input-number)：数字输入框
    - [FormItem](https://client.docs.nocobase.com/components/form-item)：表单项
  - `onSubmit`：表单提交事件

##### 5.3.2 使用 SchemaSettings Item

我们修改 `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/imageBlockSettings.ts`：

```diff
// ...
+ import { schemaSettingsHeightItem } from "./SchemaSettingsItems/height";

export const imageBlockSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    schemaSettingsSrcItem,
+   schemaSettingsHeightItem,
    {
      type: 'remove',
      name: 'remove',
    }
  ]
});
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240602110936_rec_.mp4" type="video/mp4" />
</video>


#### 5.4 实现 ObjectFit

##### 5.4.1 实现 SchemaSettings Item

我们新建 `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/SchemaSettingsItems/objectFit.ts` 文件：

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

export const schemaSettingsObjectFitItem: SchemaSettingsItemType = {
  name: 'objectFit',
  type: 'select',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();

    return {
      title: 'Object Fit',
      options: [
        { label: 'Cover', value: 'cover' },
        { label: 'Contain', value: 'contain' },
        { label: 'Fill', value: 'fill' },
        { label: 'None', value: 'none' },
        { label: 'Scale Down', value: 'scale-down' },
      ],
      value: filedSchema['x-decorator-props']?.image?.objectFit || 'cover',
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            image: {
              ...filedSchema['x-decorator-props']?.['image'],
              objectFit: v,
            },
          },
        })
      },
    };
  },
};
```

关于 SchemaSettings Item 的定义可以查看 [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)。

- `type`：内置类型。[select](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsselectitem) 为选择类型
- `name`：唯一标识，用于增删改查
- `useComponentProps`：返回 `select` 对应组件 `SchemaSettingsSelectItem` 的属性

`useComponentProps`：

- Hooks
  - `useFieldSchema`：获取当前节点 schema
  - `useDesignable`：获取当前 Designable 实例，deepMerge 用于合并 schema
    - `x-uid`：当前节点的唯一标识
    - `x-decorator-props`：当前节点的属性，存储了 `image` 的属性

- Props
  - `title`：弹窗标题
  - `options`：选择项
  - `value`：默认值
  - `onChange`：选择事件


##### 5.4.2 使用 SchemaSettings Item

我们修改 `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/imageBlockSettings.ts`：

```diff
// ...
+ import { schemaSettingsObjectFitItem } from "./SchemaSettingsItems/objectFit";

export const imageBlockSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    schemaSettingsSrcItem,
    schemaSettingsHeightItem,
+   schemaSettingsObjectFitItem,
    {
      type: 'remove',
      name: 'remove',
    }
  ]
});
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240602111256_rec_.mp4" type="video/mp4" />
</video>

#### 5.5 实现 Lazy

##### 5.5.1 实现 SchemaSettings Item

我们新建 `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/SchemaSettingsItems/lazy.ts` 文件：

```ts
import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

export const schemaSettingsLazyItem: SchemaSettingsItemType = {
  name: 'lazy',
  type: 'switch',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();

    return {
      title: 'Lazy',
      checked: !!filedSchema['x-decorator-props']?.image?.lazy,
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            image: {
              ...filedSchema['x-decorator-props']?.['image'],
              lazy: v,
            },
          },
        })
      },
    };
  },
};
```

关于 SchemaSettings Item 的定义可以查看 [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)。

- `type`：内置类型。[switch](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsswitchitem) 为开关类型
- `name`：唯一标识，用于增删改查
- `useComponentProps`：返回 `switch` 对应组件 `SchemaSettingsSwitchItem` 的属性

`useComponentProps`：

- Hooks
  - `useFieldSchema`：获取当前节点 schema
  - `useDesignable`：获取当前 Designable 实例，deepMerge 用于合并 schema
    - `x-uid`：当前节点的唯一标识
    - `x-decorator-props`：当前节点的属性，存储了 `image` 的属性

- Props
  - `title`：弹窗标题
  - `checked`：默认值
  - `onChange`：开关事件


##### 5.5.2 使用 SchemaSettings Item

我们修改 `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/imageBlockSettings.ts`：

```diff
// ...
+ import { schemaSettingsLazyItem } from "./SchemaSettingsItems/lazy";

export const imageBlockSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    schemaSettingsSrcItem,
    schemaSettingsHeightItem,
    schemaSettingsObjectFitItem,
+   schemaSettingsLazyItem,
    {
      type: 'remove',
      name: 'remove',
    }
  ]
});
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240602111748_rec_.mp4" type="video/mp4" />
</video>

#### 5.6 增加 divider

`editBlockTitle` 和 `remove` 是一个通用的逻辑，而 `src`、`height`、`objectFit`、`lazy` 是针对 `ImageBlock` 的配置，我们可以通过 `divider` 来区分。

我们修改 `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/imageBlockSettings.ts`：

```diff
// ...
export const imageBlockSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   {
+     name: 'divider1',
+     type: 'divider'
+   },
    schemaSettingsSrcItem,
    schemaSettingsHeightItem,
    schemaSettingsObjectFitItem,
    schemaSettingsLazyItem,
+   {
+     name: 'divider2',
+     type: 'divider'
+   },
    {
      type: 'remove',
      name: 'remove',
    }
  ]
});
```

![20240602112229](https://static-docs.nocobase.com/20240602112229.png)

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-schema-settings-new --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-schema-settings-new.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
