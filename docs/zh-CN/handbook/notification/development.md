# 开发指南

## 调用通知发信API: send

```ts
import { Plugin } from '@nocobase/server';
import NotificationsServerPlugin from '@nocobase/plugin-notification-manager';

export default class extends Plugin {
  async load() {
    
    //获取通知插件实例
    const notificationServer = this.app.pm.get(NotificationsServerPlugin);

    //调用发信API
    notificationServer.send({channelId, message})

  }
}
```

`send`函数入参说明

| 参数        | 说明              |
| ----------- | -----------------|
| `channelName` | 已配置好的渠道标识   |
| `message`     | 消息体，具体格式 |

`send`函数返回值是`Promise<Data>`，其中Data的格式是


| 参数        | 说明              |
| ----------- | -----------------|
| `status` | `failure`-表示发送失败，   `success`-表示发送成功|
|`reason`| 如果消息发送失败此值为失败原因，否则为空|
| `message`     | 消发送的消息体数据 |

## 通知插件扩展

扩展通知插件主要分两部分：客户端渠道配置表单和消息配置表单，以及服务端的send函数扩展

### 客户端扩展

调用通知客户端内核的`registerChannelType`方法,方法入参

| 参数        | 说明              |
| ----------- | ----------------- |  
| `title`     | 扩展渠道类型显示名称     |
| `name`      | 扩展渠道类型标识    |
| `components.ChannelConfigForm`      | 渠道配置表单组件    |
| `components.ContentConfigForm`      | 消息配置表单组件，接收`variableOptions`(当前环境变量) 作为组件属性    |


以下是smtp邮件扩展客户端注册的示例代码：

```ts
import { Plugin } from '@nocobase/client';
import NotificationManager from '@nocobase/plugin-notification-manager/client';
import { tval } from '@nocobase/utils/client';
import { ChannelConfigForm } from './ConfigForm';
import { ContentConfigForm } from './MessageConfigForm';
export class PluginNotificationsMailClient extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}
  async load() {
    const notification = this.pm.get(NotificationManager);
    notification.manager.registerChannelType({
      title: tval('SMTP mail', { ns: NAMESPACE }),
      name: channelType,
      components: {
        ChannelConfigForm: ChannelConfigForm,
        ContentConfigForm: ContentConfigForm,
      },
    });
  }
}

export default PluginNotificationsMailClient;
```

### 服务端扩展

服务端插件扩展类需要实现send方法

`send`函数入参说明

| 参数        | 说明              |
| ----------- | -----------------|
| `channel.name` | 渠道标识   |
| `channel.title` | 渠道名称   |
| `channel.options`     | 客户端注册的`ChannelConfigForm`组件返回的配置项 |
| `message`     | 客户端注册的`ContentConfigForm`组件返回的配置项 |

`send`函数返回值是`Promise<Data>`，其中Data的格式是

| 属性        | 说明              |
| ----------- | -----------------|
| `status` | `failure`-表示发送失败，   `success`-表示发送成功|
|`reason`| 如果消息发送失败此值为失败原因，否则为空|

以下为`send`方法实现类实例：

```ts
export class MailServer extends NotificationServerBase {
  transpoter: Transporter;
  constructor() {
    super();
  }
  send: SendFnType<Message> = async function (args) {
    const { message, channel } = args;
    const { host, port, secure, account, password, from } = channel.options;
   
  };
}
```

以下扩展插件注册示例：

```ts
export class PluginNotificationsMailServer extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    const notificationServer = this.pm.get(NotificationsServerPlugin) as NotificationsServerPlugin;
    notificationServer.notificationManager.registerTypes(channelType, {
      server: new MailServer(),
    });
  }

  async install() {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}
```

