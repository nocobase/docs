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
| `channelId` | 已配置好的渠道标识   |
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
