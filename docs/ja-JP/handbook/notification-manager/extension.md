# 通知チャンネルの拡張

NocoBaseは、必要に応じて通知チャンネルの種類を柔軟に拡張することが可能です。デフォルトでは、通知管理のコアプラグインが内蔵されており、さまざまな通知チャンネルタイプの登録と管理が提供されています。

## 拡張API

### `PluginNotificationManagerServer`

通知管理のサーバークラス

#### `PluginNotificationManagerServer.send()`

このメソッドは通知を送信するための中核的な機能です。このメソッドを呼び出すことで、通知を下すことができます。

##### シグネチャ

`({channelName, message, triggerFrom}) => Promise<Result>`

##### 詳細

| 属性         | タイプ         |  説明      |
| ------------ | ------------- | ---------- |
| `channelName`    | `string` | チャンネル識別子 |
| `message`   | `object`   | メッセージオブジェクト |
| `triggerFrom`     | `string`     | トリガー元 |
| `transports` | ログ出力形式 | ログ出力先 |

#### `PluginNotificationManagerServer.registerChannelType()`

このメソッドを使って、新しいサーバーチャンネルタイプを登録することができます。

##### シグネチャ

`({type, Channel}) => void`

##### 詳細

| 属性         | タイプ         |  説明      |
| ------------ | ------------- | ---------- |
| `name`    | `string` | チャンネル識別子 |
| `server`   | `BaseNotificationChannel`   | サーバー側の拡張クラス |

## クライアントサイド

クライアント側の拡張プラグインでは、チャンネル設定フォームとメッセージ設定フォームを実装する必要があります。

### `PluginNotificationManagerClient`

通知管理のクライアントコアクラス

#### `PluginNotificationManagerClient.registerChannelType()`

クライアント側で新しいチャンネルタイプを登録します。

##### シグネチャ

```ts
type ChannelType = {
  title: string; // チャンネル表示タイトル
  type: string;  // チャンネル識別子
  components: {
    ChannelConfigForm: ComponentType // チャンネル設定フォーム;
    MessageConfigForm?: ComponentType<{ variableOptions: any }> // メッセージ設定フォーム;
  };
  meta?: { // チャンネル設定メタ情報
    createable?: boolean // 新しいチャンネルを追加できるか;
    eidtable?: boolean  // チャンネル設定が編集可能かどうか;
    deletable?: boolean // チャンネル設定が削除可能かどうか;
  };
};

type RegisterChannelType = (params: ChannelType) => void
```

#### `PluginNotificationManagerClient.channelTypes`

登録済みのチャンネルタイプライブラリ

##### シグネチャ

```ts
import { Registry } from '@nocobase/utils/client';

type ChannelTypes = Registry<ChannelType>
```

## 実際の例

次に、通知拡張プラグインのサンプルとして、どのように拡張プラグインを開発するかの具体例を説明します。ここでは、NocoBaseにSMS通知機能を追加するために、特定のプラットフォームのSMSゲートウェイを使用する場合を考えます。

### プラグインの作成

1. `yarn pm add @nocobase/plugin-notification-example`コマンドを実行してプラグインを作成します。

### クライアント開発

クライアント側では、`ChannelConfigForm`（チャンネル設定フォーム）と`MessageConfigForm`（メッセージ設定フォーム）の2つのフォームコンポーネントを作成する必要があります。

#### ChannelConfigForm

特定のプラットフォームでSMSを送信するにはAPIキーとシークレットが必要となるため、チャンネル設定フォームにはこれら2つの項目が含まれます。`src/client`ディレクトリ内に`ChannelConfigForm.tsx`というファイルを作成し、次のように記述します。

```ts
import React from 'react';
import { SchemaComponent } from '@nocobase/client';
import useLocalTranslation from './useLocalTranslation';

const ChannelConfigForm = () => {
  const t = useLocalTranslation();
  return (
    <SchemaComponent
      scope={{ t }}
      schema={{
        type: 'object',
        properties: {
          apiKey: {
            'x-decorator': 'FormItem',
            type: 'string',
            title: '{{t("Transport")}}',
            'x-component': 'Input',
          },
          secret: {
            'x-decorator': 'FormItem',
            type: 'string',
            title: '{{t("Transport")}}',
            'x-component': 'Input',
          },
        },
      }}
    />
  );
};

export default ChannelConfigForm;
```

#### MessageConfigForm

メッセージ設定フォームには、受信者（`receivers`）とメッセージ内容（`content`）の設定が含まれます。`src/client`ディレクトリに`MessageConfigForm.tsx`というファイルを作成し、変数パラメータ`variableOptions`を受け取る形で次のように記述します。

```ts
import React from 'react';
import { SchemaComponent } from '@nocobase/client';
import useLocalTranslation from './useLocalTranslation';

const MessageConfigForm = ({ variableOptions }) => {
  const { t } = useLocalTranslation();
  return (
    <SchemaComponent
      scope={{ t }}
      schema={{
        type: 'object',
        properties: {
          to: {
            type: 'array',
            required: true,
            title: `{{t("Receivers")}}`,
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems',
            items: {
              type: 'void',
              'x-component': 'Space',
              properties: {
                sort: {
                  type: 'void',
                  'x-decorator': 'FormItem',
                  'x-component': 'ArrayItems.SortHandle',
                },
                input: {
                  type: 'string',
                  'x-decorator': 'FormItem',
                  'x-component': 'Variable.Input',
                  'x-component-props': {
                    scope: variableOptions,
                    useTypedConstant: ['string'],
                    placeholder: `{{t("Phone number")}}`,
                  },
                },
                remove: {
                  type: 'void',
                  'x-decorator': 'FormItem',
                  'x-component': 'ArrayItems.Remove',
                },
              },
            },
            properties: {
              add: {
                type: 'void',
                title: `{{t("Add phone number")}}`,
                'x-component': 'ArrayItems.Addition',
              },
            },
          },
          content: {
            type: 'string',
            required: true,
            title: `{{t("Content")}}`,
            'x-decorator': 'FormItem',
            'x-component': 'Variable.RawTextArea',
            'x-component-props': {
              scope: variableOptions,
              placeholder: 'Hi,',
              autoSize: {
                minRows: 10,
              },
            },
          },
        },
      }}
    />
  );
};

export default MessageConfigForm;
```

#### クライアントコンポーネントの登録

これらのフォームコンポーネントを開発したら、通知管理のコアに登録する必要があります。プラットフォーム名を`Example`と仮定すると、編集された`src/client/index.tsx`ファイルは次のようになります。

```ts
import { Plugin } from '@nocobase/client';
import PluginNotificationManagerClient from '@nocobase/plugin-notification-manager/client';
import { tval } from '@nocobase/utils/client';
import ChannelConfigForm from './ChannelConfigForm';
import MessageConfigForm from './MessageConfigForm';

class PluginNotificationExampleClient extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    const notification = this.pm.get(PluginNotificationManagerClient);
    notification.registerChannelType({
      title: tval('Example SMS', { ns: '@nocobase/plugin-notification-example' }),
      type: 'example-sms',
      components: {
        ChannelConfigForm,
        MessageConfigForm,
      },
    });
  }
}

export default PluginNotificationExampleClient;
```

これで、クライアント側の開発は完了です。

### サーバー開発

サーバー側では、`BaseNotificationChannel`を継承し、`send`メソッドを実装することが必要です。このメソッド内で、実際の通知送信のビジネスロジックを定義します。例として、送信されたパラメータを単にコンソールに出力する形にします。`src/server`ディレクトリに`example-server.ts`ファイルを作成し、次のように記述します。

```ts
import { BaseNotificationChannel } from '@nocobase/plugin-notification-manager';

export class ExampleSever extends BaseNotificationChannel {
  async send(args): Promise<any> {
    console.log('ExampleSever send', args);
    return { status: 'success', message: args.message };
  }
}
```

その後、サーバー側の拡張プラグインを登録するために、`registerChannelType`メソッドを呼び出します。編集された`src/client/plugin.ts`ファイルは次のようになります。

```ts
import PluginNotificationManagerServer from '@nocobase/plugin-notification-manager';
import { Plugin } from '@nocobase/server';
import { ExampleSever } from './example-server';

export class PluginNotificationExampleServer extends Plugin {
  async load() {
    const notificationServer = this.pm.get(PluginNotificationManagerServer) as PluginNotificationManagerServer;
    notificationServer.registerChannelType({ type: 'example-sms', Channel: ExampleSever });
  }
}

export default PluginNotificationExampleServer;
```


### プラグインの登録と起動

1. プラグイン登録コマンド`yarn pm add @nocobase/plugin-notification-example`を実行します。
2. プラグインを有効化するコマンド`yarn pm enable @nocobase/plugin-notification-example`を実行します。

### チャンネル設定

この時点で、通知管理のチャンネルページにアクセスすると、`Example SMS`が有効になっていることが確認できます。
![20241009164207-2024-10-09-16-42-08](https://static-docs.nocobase.com/20241009164207-2024-10-09-16-42-08.png)

新しいチャンネルを追加する際は、下記のような手順で進めます。
![20241009164519-2024-10-09-16-45-20](https://static-docs.nocobase.com/20241009164519-2024-10-09-16-45-20.png)

次に、新しいワークフローを作成し、通知ノードを構成します。
![20241009172737-2024-10-09-17-27-38](https://static-docs.nocobase.com/20241009172737-2024-10-09-17-27-38.png)

ワークフローをトリガーして実行すると、以下のような情報がコンソールに表示されます。
![20241009181617-2024-10-09-18-16-18](https://static-docs.nocobase.com/20241009181617-2024-10-09-18-16-18.png)
