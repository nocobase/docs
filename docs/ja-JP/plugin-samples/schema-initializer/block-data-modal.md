# データブロックモーダルの追加

## シーン説明

多くの場合、ブロックを作成する前に設定情報を選択する必要があります。例えば：
- `Kanban` ブロックをクリックすると、最初に `Grouping field` と `Sorting field` を選択する必要があります。
- `Calendar` ブロックでは、最初に `Title field`、`Start date field`、`End date field` を選択する必要があります。
- `Chart` ブロックでは、アイコンに関連する情報を最初に設定する必要があります。

<br />

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240529223753_rec_.mp4" type="video/mp4" />
</video>

## 実例

このサンプルは、ant-designの [Timeline コンポーネント](https://ant.design/components/timeline) を基に `Timeline` ブロックを作成し、ブロック作成前に `Time Field` と `Title Field` を選択します。

このサンプルは、initializerの使用を示すことを目的としています。ブロックの拡張に関する詳細は [ブロック拡張](/plugin-samples/block) ドキュメントを参照してください。

このドキュメントの完全なサンプルコードは、[plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-block-data-modal) で確認できます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240529223457_rec_.mp4" type="video/mp4" />
</video>

## プラグインの初期化

[最初のプラグインを作成する](/development/your-fisrt-plugin) ドキュメントの説明に従い、プロジェクトがない場合は新しいプロジェクトを作成します。すでにプロジェクトがある場合や、クローンしたソースコードがある場合は、このステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-initializer-block-data-modal
yarn pm enable @nocobase-sample/plugin-initializer-block-data-modal
```

プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) にアクセスすると、プラグインがインストールされ、有効になっていることが確認できます。

## 機能実装

このサンプルを実現する前に、いくつかの基本知識を理解する必要があります：

- ant-design [Timeline コンポーネント](https://ant.design/components/timeline)
- [SchemaInitializer チュートリアル](/development/client/ui-schema/initializer)：さまざまなブロック、フィールド、操作をインターフェースに追加するためのもの
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：さまざまなブロック、フィールド、操作をインターフェースに追加するためのもの
- [UI スキーマ](/development/client/ui-schema/what-is-ui-schema)：インターフェースの構造とスタイルを定義するためのもの
- [Designable デザイナー](/development/client/ui-schema/designable)：スキーマを変更するためのもの

```bash
.
├── client # クライアントプラグイン
│   ├── initializer # イニシャライザー
│   ├── component # ブロックコンポーネント
│   ├── index.tsx # クライアントプラグインのエントリ
│   ├── locale.ts # 多言語ツール関数
│   ├── constants.ts # 定数
│   ├── schema # スキーマ
│   └── settings # スキーマ設定
├── locale # 多言語ファイル
│   ├── en-US.json # 英語
│   └── zh-CN.json # 中国語
├── index.ts # サーバープラグインのエントリ
└── server # サーバープラグイン
```

### 1. 名前の定義

まず、ブロック名を定義する必要があります。これはさまざまな場所で使用されます。

`packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/constants.ts` を新規作成します：

```ts
export const BlockName = 'Timeline';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. ブロックコンポーネントの実装

#### 2.1 ブロックコンポーネントの定義

このサンプルで作成するのは `Timeline` ブロックコンポーネントです。具体的な要件は次の通りです：

まず、`packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/component/Timeline.tsx` ファイルを新規作成し、以下の内容を記入します：

```tsx | pure
import React, { FC } from 'react';
import { Timeline as AntdTimeline, TimelineProps as AntdTimelineProps, Spin } from 'antd';
import { withDynamicSchemaProps } from "@nocobase/client";
import { BlockName } from '../constants';

export interface TimelineProps {
  data?: AntdTimelineProps['items'];
  loading?: boolean;
}

export const Timeline: FC<TimelineProps> = withDynamicSchemaProps((props) => {
  const { data, loading } = props;
  if (loading) return <div style={{ height: 100, textAlign: 'center' }}><Spin /></div>
  return <AntdTimeline mode='left' items={data}></AntdTimeline>
}, { displayName: BlockName });
```

`Timeline` コンポーネントは全体として `withDynamicSchemaProps` でラップされており、次の2つのパラメータを受け取ります：

- `loading`：データの読み込み状態
- `data`：`Timeline` コンポーネントの `items` プロパティ

[withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-と-x-use-component-props) は、スキーマ内の動的属性を処理するための高階コンポーネントです。

#### 2.2 ブロックコンポーネントの登録

`Timeline` をプラグインを通じてシステムに登録する必要があります。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline });
  }
}

export default PluginInitializerBlockDataModalClient;
```

#### 2.3 ブロックコンポーネントの検証

コンポーネントの検証方法は2種類あります：

- 一時ページ検証：一時的にページを作成し、`Timeline` コンポーネントをレンダリングして要件を満たしているか確認します。
- ドキュメントサンプル検証：ドキュメントを起動し、`yarn doc plugins/@nocobase-sample/plugin-initializer-block-data-modal` を通じてドキュメントサンプルの方法で要件を満たしているか確認します（TODO）。

ここでは `一時ページ検証` の例を挙げ、新しいページを作成し、プロパティパラメータに基づいて1つまたは複数の `Timeline` コンポーネントを追加して要件を満たしているか確認します。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import React from 'react';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline });

    this.app.router.add('admin.timeline-block-component', {
      path: '/admin/timeline-block-component',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Timeline
              data={[
                {
                  label: '2015-09-01',
                  children: 'user1',
                },
                {
                  label: '2015-09-02',
                  children: 'user2',
                },
                {
                  label: '2015-09-03',
                  children: 'user3',
                },
              ]} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Timeline loading={true} />
          </div>
        </>
      }
    });
  }
}

export default PluginInitializerBlockDataModalClient;
```

次に `http://localhost:13000/admin/timeline-block-component` にアクセスすると、対応するテストページの内容が表示されます。

![20240529210122](https://static-docs.nocobase.com/20240529210122.png)

検証が完了したら、テストページを削除する必要があります。

### 3. 設定フォームの定義

要件に応じて、データテーブルを選択した後に `Time Field` と `Title Field` を設定する必要があるため、`TimelineInitializerConfigForm` という名前の設定フォームを定義する必要があります。

#### 3.1 設定フォームコンポーネントの定義

以下の知識を理解する必要があります：

- [Action](https://client.docs.nocobase.com/components/action)
- [Action.Modal](https://client.docs.nocobase.com/components/action#actionmodal)：モーダルウィンドウ
- [ActionContextProvider](https://client.docs.nocobase.com/components/action#actioncontext)：`Action` コンテキスト
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)：スキーマのレンダリングに使用

新しく `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/initializer/ConfigForm.tsx` ファイルを作成しました。内容は以下の通りです：

```tsx | pure
import React, { FC, useMemo } from "react";
import { ISchema } from '@formily/react';
import { ActionContextProvider, SchemaComponent, useApp, CollectionFieldOptions } from '@nocobase/client';
import { useT } from "../locale";

const createSchema = (fields: CollectionFieldOptions, t: ReturnType<typeof useT>): ISchema => {
  // TODO
}

interface TimelineConfigFormValues {
  timeField: string;
  titleField: string;
}

export interface TimelineConfigFormProps {
  collection: string;
  dataSource?: string;
  onSubmit: (values: TimelineConfigFormValues) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const TimelineInitializerConfigForm: FC<TimelineConfigFormProps> = ({ visible, setVisible, collection, dataSource, onSubmit }) => {
  const app = useApp();
  const fields = useMemo(() => app.getCollectionManager(dataSource).getCollection(collection).getFields(), [collection, dataSource]);
  const t = useT();
  const schema = useMemo(() => createSchema(fields, t), [fields]);

  return (
    <ActionContextProvider value={{ visible, setVisible }}>
      <SchemaComponent schema={schema} />
    </ActionContextProvider>
  );
}
```

`TimelineInitializerConfigForm` コンポーネントは 4 つのパラメータを受け取ります：

- `visible`：表示されるかどうか
- `setVisible`：表示の設定
- `collection`：データテーブル名
- `dataSource`：データソース名
- `onSubmit`：フォーム提出のコールバック

`collection` と `dataSource` はデータテーブルをクリックすることで取得されるため、ここでは動的です。

- [app](https://client.docs.nocobase.com/core/application/application)：[useApp()](https://client.docs.nocobase.com/core/application/application#useapp) を通じてアプリインスタンスを取得
- [app.getCollectionManager](https://client.docs.nocobase.com/core/application/application##appgetcollectionmanager)：[CollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager) インスタンスを取得
- [getCollection](https://client.docs.nocobase.com/core/data-source/collection-manager#getcollectionpath)：データテーブルを取得
- [getFields](https://client.docs.nocobase.com/core/data-source/collection#collectiongetfieldspredicate)：データテーブルのフィールドを取得

[ActionContextProvider](https://client.docs.nocobase.com/components/action#actioncontext) は `visible` と `setVisible` を子ノードに渡すために使用され、`SchemaComponent` はスキーマをレンダリングするために使用されます。

#### 3.2 設定フォームスキーマの実装

以下の知識を理解する必要があります：

- [FormV2](https://client.docs.nocobase.com/components/form-v2)：フォームコンポーネント
- [Select](https://client.docs.nocobase.com/components/action#select)：セレクター

```tsx | pure
const useCloseActionProps = () => {
  const { setVisible } = useActionContext();
  return {
    type: 'default',
    onClick() {
      setVisible(false);
    },
  };
};

const useSubmitActionProps = (onSubmit: (values: TimelineConfigFormValues) => void) => {
  const { setVisible } = useActionContext();
  const form = useForm<TimelineConfigFormValues>();

  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
      onSubmit(values);
      setVisible(false);
    },
  };
};

const createSchema = (fields: CollectionFieldOptions[]): ISchema => {
  return {
    type: 'void',
    name: uid(),
    'x-component': 'Action.Modal',
    'x-component-props': {
      width: 600,
    },
    'x-decorator': 'FormV2',
    properties: {
      titleField: {
        type: 'string',
        title: 'タイトルフィールド',
        required: true,
        enum: fields.map(item => ({ label: item.uiSchema?.title || item.name, value: item.name })),
        'x-decorator': 'FormItem',
        'x-component': 'Select',
      },
      timeField: {
        type: 'string',
        title: '時間フィールド',
        required: true,
        enum: fields.filter(item => item.type === 'date').map(item => ({ label: item.uiSchema?.title || item.name, value: item.name })),
        'x-decorator': 'FormItem',
        'x-component': 'Select',
      },
      footer: {
        type: 'void',
        'x-component': 'Action.Modal.Footer',
        properties: {
          close: {
            title: '閉じる',
            'x-component': 'Action',
            'x-component-props': {
              type: 'default',
            },
            'x-use-component-props': 'useCloseActionProps',
          },
          submit: {
            title: '送信',
            'x-component': 'Action',
            'x-use-component-props': 'useSubmitActionProps',
          },
        },
      },
    }
  };
}
```

上記の結果として、ポップアップ内にフォームがあり、その中には `タイトルフィールド` と `時間フィールド` の2つのセレクタがあり、`閉じる` と `送信` ボタンもあります。

- `閉じる` と `送信` ボタンはフックを使用するため、`x-use-component-props` を使用しました。
- `タイトルフィールド`：すべてのフィールドが選択可能です。
- `時間フィールド`：`date` タイプのフィールドのみが選択可能です。

次に、`TimelineInitializerConfigForm` を修正し、`useSubmitActionProps` と `useCloseActionProps` を `scope` に登録する必要があります。

```diff
-   <SchemaComponent schema={schema}/>
+   <SchemaComponent schema={schema} scope={{ useSubmitActionProps: useSubmitActionProps.bind(null, onSubmit), useCloseActionProps }} />
```

#### 3.3 設定フォームの検証

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import React, { useState } from 'react';
import { TimelineInitializerConfigForm } from './initializer/ConfigForm';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline });

    this.app.router.add('admin.timeline-config-form', {
      path: '/admin/timeline-config-form',
      Component: () => {
        const [visible, setVisible] = useState(true);
        function onSubmit(values) {
          console.log(values);
        }
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <TimelineInitializerConfigForm visible={visible} onSubmit={onSubmit} setVisible={setVisible} collection='users' />
          </div>
        </>
      }
    });
  }
}

export default PluginInitializerBlockDataModalClient;
```

次に `http://localhost:13000/admin/timeline-config-form` にアクセスすると、対応するテストページの内容が表示されます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240529215127_rec_.mp4" type="video/mp4" />
</video>

検証が完了したら、テストページを削除する必要があります。

### 4. ブロックのスキーマを定義する

#### 4.1 ブロックのスキーマを定義する

NocoBase の動的ページはすべてスキーマを通じてレンダリングされるため、スキーマを定義する必要があります。これにより、インターフェースに `Timeline` ブロックを追加できるようになります。この小節を実装する前に、いくつかの基本的な知識を理解しておく必要があります：

- [UI スキーマプロトコル](/development/client/ui-schema/what-is-ui-schema)：スキーマの構造と各プロパティの役割について詳しく説明しています。
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)：データブロック

`packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/schema/index.tsx` ファイルを新しく作成します：

```ts
import { useDataBlockProps, useDataBlockRequest } from "@nocobase/client";
import { TimelineProps } from '../component';
import { BlockName, BlockNameLowercase } from "../constants";

interface GetTimelineSchemaOptions {
  dataSource?: string;
  collection: string;
  titleField: string;
  timeField: string;
}

export function getTimelineSchema(options: GetTimelineSchemaOptions) {
  const { dataSource, collection, titleField, timeField } = options;
  return {
    type: 'void',
    "x-toolbar": "BlockSchemaToolbar",
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
      params: {
        sort: `-${timeField}`
      },
      [BlockNameLowercase]: {
        titleField,
        timeField,
      }
    },
    'x-component': 'CardItem',
    properties: {
      [BlockNameLowercase]: {
        type: 'void',
        'x-component': BlockName,
        'x-use-component-props': 'useTimelineProps',
      }
    }
  }
}

export function useTimelineProps(): TimelineProps {
  const dataProps = useDataBlockProps();
  const props = dataProps[BlockNameLowercase];
  const { loading, data } = useDataBlockRequest<any[]>();
  return {
    loading,
    data: data?.data?.map((item) => ({
      label: item[props.timeField],
      children: item[props.titleField],
    }))
  }
}
```

ここで 2 つのポイントについて説明します：

`getTimelineSchema()` は `dataSource`、`collection`、`titleField`、`timeField` を受け取り、`Timeline` ブロックをレンダリングするためのスキーマを返します：
  - `type: 'void'`：データがないことを示します。
  - `x-decorator: 'DataBlockProvider'`：データブロックプロバイダーで、データを提供します。DataBlockProvider の詳細については [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) を参照してください。
  - `x-decorator-props`：DataBlockProvider のプロパティです。
  - `dataSource`：データソースです。
  - `collection`：データテーブルです。
  - `action: 'list'`：操作タイプで、ここではデータリストを取得するための `list` です。
  - `params: { sort }`：リクエストパラメータで、ここでは `timeField` を降順にします。リクエストパラメータの詳細については [useRequest](https://client.docs.nocobase.com/core/request#userequest) を参照してください。
  - `x-component: 'CardItem'`：[CardItem コンポーネント](https://client.docs.nocobase.com/components/card-item)で、現在のブロックはすべてカード内にラップされており、スタイル、レイアウト、ドラッグ＆ドロップなどの機能を提供します。
  - `'x-component': 'Timeline'`：ブロックコンポーネントで、これが私たちが定義した `Timeline` コンポーネントです。
  - `'x-use-component-props': 'useTimelineProps'`：`Timeline` コンポーネントの動的プロパティを処理するために使用され、データベースに保存するため、ここでの値の型は文字列型です。

```markdown
`useTimelineProps()`：Timeline コンポーネントの動的プロパティ
- [useDataBlockProps](https://client.docs.nocobase.com/core/data-block/data-block-provider#usedatablockprops)：[DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) の props 属性、すなわち `x-decorator-props` の値を取得します。
- [useDataBlockRequest](https://client.docs.nocobase.com/core/data-block/data-block-request-provider#usedatablockrequest)：データブロックリクエストを取得します。これは [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) によって提供されます。

上記のスキーマを React コンポーネントに変換すると、次のようになります：

```tsx | pure
<DataBlockProvider collection={collection} dataSource={dataSource} action='list' params={{ sort: `-${timeField}` }} timeline={{ titleField, timeField }}>
  <CardItem>
    <Timeline {...useTimelineProps()} />
  </CardItem>
</DataBlockProvider>
```

#### 4.2 スコープの登録

`packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/index.tsx` ファイルを修正し、`useTimelineProps` をシステムに登録します。これにより、`x-use-component-props` が対応するスコープを見つけることができます。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import { useTimelineProps } from './schema';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline });
    this.app.addScopes({ useTimelineProps });
  }
}

export default PluginInitializerBlockDataModalClient;
```

スコープに関する詳細は、[グローバル登録 Component と Scope](/plugin-samples/component-and-scope/global) を参照してください。

#### 4.3 ブロックスキーマの検証

コンポーネントの検証と同様に、一時ページ検証またはドキュメントサンプル検証の方法でスキーマが要件を満たしているか確認できます。ここでは一時ページ検証の例を示します：

```tsx | pure
import { Plugin, SchemaComponent } from '@nocobase/client';
import { Timeline, getTimelineSchema, useTimelineProps } from './component';
import React from 'react';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    // ...

    this.app.router.add('admin.timeline-schema', {
      path: '/admin/timeline-schema',
      Component: () => {
        return (
          <>
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <SchemaComponent schema={{ properties: { test1: getTimelineSchema({ collection: 'users' })({ timeField: 'createdAt', titleField: 'nickname' }) } }} />
            </div>
          </>
        );
      }
    });
  }
}

export default PluginInitializerBlockDataModalClient;
```

- [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions)：スキーマ内で必要な `components` と `scope` を渡すために使用されます。詳細は [局所登録 Component と Scope](/plugin-samples/component-and-scope/local) を参照してください。
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)：スキーマをレンダリングするために使用されます。

`http://localhost:13000/admin/timeline-schema` にアクセスすると、対応するテストページの内容が表示されます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240529220626_rec_.mp4" type="video/mp4" />
</video>

検証が完了したら、テストページを削除する必要があります。

### 5. スキーマ初期化アイテムの定義

新しく `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/initializer/index.tsx` ファイルを作成し、Schema Initializer Item を定義します：

```tsx | pure
import React, { useCallback, useState } from 'react';
import { FieldTimeOutlined } from '@ant-design/icons';
import { DataBlockInitializer, SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";

import { getTimelineSchema } from '../schema';
import { useT } from '../locale';
import { TimelineConfigFormProps, TimelineInitializerConfigForm } from './ConfigForm';
import { BlockName, BlockNameLowercase } from '../constants';

export const TimelineInitializerComponent = () => {
  const { insert } = useSchemaInitializer();
  const [collection, setCollection] = useState<string>();
  const [dataSource, setDataSource] = useState<string>();
  const [showConfigForm, setShowConfigForm] = useState(false);
  const t = useT();

  const onSubmit: TimelineConfigFormProps['onSubmit'] = useCallback((values) => {
    const schema = getTimelineSchema({ collection, dataSource, timeField: values.timeField, titleField: values.titleField });
    insert(schema);
  }, [collection, dataSource]);

  return (
    <>
      {showConfigForm && (
        <TimelineInitializerConfigForm
          visible={showConfigForm}
          setVisible={setShowConfigForm}
          onSubmit={onSubmit}
          collection={collection}
          dataSource={dataSource}
        />
      )}
      <DataBlockInitializer
        name={BlockNameLowercase}
        title={t(BlockName)}
        icon={<FieldTimeOutlined />}
        componentType={BlockName}
        onCreateBlockSchema={({ item }) => {
          const { name: collection, dataSource } = item;
          setCollection(collection);
          setDataSource(dataSource);
          setShowConfigForm(true);
        }}
      />
    </>
  );
}

export const timelineInitializerItem: SchemaInitializerItemType = {
  name: 'Timeline',
  Component: TimelineInitializerComponent,
}
```

操作フローは、まずデータテーブルをクリックして `collection` と `dataSource` の値を取得し、その後、設定フォーム `TimelineInitializerConfigForm` を通じて `timeField` と `titleField` フィールドを取得します。フォームが送信されると、データに基づいてスキーマを作成し、ページに挿入します。

データブロックの効果を実現するための核心は DataBlockInitializer（文書 TODO）です。

`timelineInitializerItem`：
- `name`：ユニークな識別子で、CRUD 操作に使用されます。
- `Component`： [シンプルブロックの追加](/plugin-samples/schema-initializer/block-simple) で使用されている `type` ではなく、ここでは `Component` を使用します。[2つの定義方法](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#two-ways-to-define-component-and-type) どちらも可能です。

`TimelineInitializerComponent`：
- `DataBlockInitializer`
  - `title`：タイトル
  - `icon`：アイコン、詳細なアイコンは [Ant Design Icons](https://ant.design/components/icon/) で確認できます。
  - `componentType`：コンポーネントタイプ、ここでは `Timeline` です。
  - `onCreateBlockSchema`：データテーブルをクリックした後のコールバック
    - `item`：クリックされたデータテーブルの情報
      - `item.name`：データテーブルの名称
      - `item.dataSource`：データテーブルに関連するデータソース
  - [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：スキーマを挿入するためのメソッドを提供します。

Schema Initializerの定義については、[Schema Initializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)のドキュメントを参照してください。

### 6. Schema Settingsの実装

#### 6.1 Schema Settingsの定義

完全なBlockにはSchema Settingsが必要で、いくつかの属性や操作を設定するために使用されますが、Schema Settingsは本例の焦点ではないため、ここでは`remove`操作のみを示します。

新しく`packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/settings/index.ts`ファイルを作成し、内容は以下の通りです：

```ts
import { SchemaSettings } from "@nocobase/client";

export const timelineSettings = new SchemaSettings({
  name: 'blockSettings:info',
  items: [
    {
      type: 'remove',
      name: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    }
  ]
})
```

- componentProps
  - `removeParentsIfNoChildren`：子ノードがない場合、親ノードを削除するかどうか
  - `breakRemoveOn`：削除時の中断条件。`Add Block`は自動的に子項目を`Grid`でラップするため、ここでは`breakRemoveOn: { 'x-component': 'Grid' }`を設定し、`Grid`を削除する際には、上方向への削除を行わないようにします。

#### 6.2 Schema Settingsの登録

```ts
import { Plugin } from '@nocobase/client';
import { timelineSettings } from './settings';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(timelineSettings);
  }
}

export default PluginInitializerBlockDataModalClient;
```

#### 6.3 Schema Settingsの使用

`packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/schema/index.tsx`の`getTimelineSchema()`を以下のように修正します：

```diff
+ import { timelineSettings } from '../settings';

export function getTimelineSchema(options: GetTimelineSchemaOptions) {
  const { dataSource, collection, titleField, timeField } = options;
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
+   'x-settings': timelineSettings.name,
    // ...
  }
}
```

### 7. Add blockへの追加

システムには複数の`Add block`ボタンがありますが、それぞれの**nameは異なります**。

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

#### 7.1 ページレベルのAdd blockへの追加

ページレベルの`Add block`に追加する必要がある場合、対応する`name`を知る必要があります。TODO方式で対応する`name`を確認できます。

TODO

上図から、ページレベルの`Add block`に対応するnameは`page:addBlock`、`Data Blocks`に対応するnameは`dataBlocks`です。

次に、`packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/index.tsx`ファイルを修正します：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import { useTimelineProps } from './schema';
import { timelineSettings } from './settings';
import { timelineInitializerItem } from './timelineInitializerItem';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline });
    this.app.addScopes({ useTimelineProps });
    this.app.schemaSettingsManager.add(timelineSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem);
  }
}

export default PluginInitializerBlockDataModalClient;
```

<video controls width='100%' src="https://static-docs.nocobase.com/20240529222118_rec_.mp4"></video>

#### 7.2 ポップアップに追加 - Add block

ページレベルの `Add block` に追加するだけでなく、`Table` ブロックの `Add new` ポップアップの `Add block` にも追加する必要があります。

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

ページレベルで `name` を取得する方法に従い、`Table` ブロックの `Add block` の `name` を `popup:addNew:addBlock` とし、`Data Blocks` に対応する `name` は `dataBlocks` です。

次に `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/index.tsx` ファイルを修正します：

```diff
import { Plugin } from '@nocobase/client';
import { Timeline } from './component';
import { useTimelineProps } from './schema';
import { timelineSettings } from './settings';
import { timelineInitializerItem } from './timelineInitializerItem';

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    this.app.addComponents({ Timeline });
    this.app.addScopes({ useTimelineProps });
    this.app.schemaSettingsManager.add(timelineSettings);
    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem);
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem);
  }
}

export default PluginInitializerBlockDataModalClient;
```

![20240529223046](https://static-docs.nocobase.com/20240529223046.png)

#### 7.3 モバイル - Add block に追加

> まずモバイルプラグインをアクティブにする必要があります。詳細は [プラグインのアクティブ化](/welcome/getting-started/plugin#3-activate-the-plugin) を参照してください。

モバイルの `Add block` に追加できます。ここでの `name` の取得方法は省略します。

次に `packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/client/index.tsx` ファイルを修正します：

```ts
// ...

export class PluginInitializerBlockDataModalClient extends Plugin {
  async load() {
    // ...
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem);
  }
}

export default PluginInitializerBlockDataModalClient;
```

![20240529223307](https://static-docs.nocobase.com/20240529223307.png)

さらに `Add block` が必要な場合は、対応する `name` を知っていれば続けて追加できます。

### 8. 多言語

#### 8.1 英語

`packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/locale/en-US.json` ファイルを編集します：

```diff
{
  "Timeline": "Timeline",
  "Title Field": "Title Field",
  "Time Field": "Time Field"
}
```

#### 8.2 中国語

`packages/plugins/@nocobase-sample/plugin-initializer-block-data-modal/src/locale/zh-CN.json` ファイルを編集します：

```diff
{
  "Timeline": "时间线",
  "Title Field": "标题字段",
  "Time Field": "时间字段"
}
```

[http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) を通じて多言語を追加でき、右上で言語を切り替えることができます。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

## パッケージ化と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-fisrt-plugin#构建并打包插件) に従って、プラグインをパッケージ化し、本番環境にアップロードできます。

クローンしたソースコードの場合、最初にフルビルドを実行し、プラグインの依存関係を構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合、次のコマンドを直接実行できます：

```bash
yarn build @nocobase-sample/plugin-initializer-block-data-modal --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-initializer-block-data-modal.tar.gz` ファイルが生成され、その後[アップロードの方法](/welcome/getting-started/plugin)に従ってインストールできます。

