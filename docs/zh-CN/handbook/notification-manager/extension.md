# 通知渠道扩展

NocoBase支持按需要扩展通知渠道类型，默认内置一个通知管理内核插件，负责提供了扩展通知类型的注册和管理。

## 服务端

服务端扩展插件需要继承抽象类`NotificationServerBase`并实现`send`方法。

```ts
import { NotificationServerBase } from '@nocobase/plugin-notification-manager';

export class ExtendedServer extends NotificationServerBase {
  send({ channel, message }) {}
}
```

## 扩展 API

### `PluginNotificationManagerServer`

通知管理服务端类

#### `PluginNotificationManagerServer.send()`

发送通知的核心方法，通过调用此方法，可以下发通知

##### 签名

`({channelName, message, triggerFrom}) => Promise<Result>`

##### 详细信息

| 属性         | 类型         |  描述      |
| ------------ | ------------ | ------------ |
| `channelName`    | `string` | 渠道标识 |
| `message`   | `object`   | 消息对象 |
| `triggerFrom`     | `string`     | 触发来源 |
| `transports` | 日志输出方式 |日志输出目录 |

#### `PluginNotificationManagerServer.registerChannelType()`

本方法可以注册一个新的服务端渠道类型

##### 签名

`({name, server}) => void`

##### 详细信息

| 属性         | 类型         |  描述      |
| ------------ | ------------ | ------------ |
| `name`    | `string` | 渠道标识 |
| `server`   | `NotificationServerBase`   | 服务端扩展类 |

## 客户端

客户端扩展插件需要实现渠道配置表单和消息配置表单

### `PluginNotificationManagerClient`

通知管理内核服务端类

#### `PluginNotificationManagerClient.registerChannelType()`

客户端注册渠道类型

##### 签名

```ts
type ChannelType = {
  title: string; // 渠道显示标题
  name: string;  // 渠道标识
  components: {
    ChannelConfigForm: ComponentType // 渠道配置表单;
    MessageConfigForm?: ComponentType<{ variableOptions: any }> // 消息配置表单;
  };
  meta?: { // 渠道配置元信息
    createable?: boolean //是否支持新增渠道;
    eidtable?: boolean  //渠道配置信息是否可编辑;
    deletable?: boolean //渠道配置信息是否可删除;
  };
};

type RegisterChannelType = (params: ChannelType) => void
```

#### `PluginNotificationManagerClient.channelTypes`

已注册渠道类型库

##### 签名

```ts
import { Registry } from '@nocobase/utils/client';

type ChannelTypes = Registry<ChannelType>
```

## 完整示例

