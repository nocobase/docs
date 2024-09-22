# Notifications core

## Client

### registerChannelType

注册渠道类型

#### 签名 

```typescript
const registerChannelType = (options: ChannelOptions) => void

type ChannelType = {
  title: string;
  name: string;
  components: {
    ChannelConfigForm: ComponentType;
    ContentConfigForm?: ComponentType<{ variableOptions: any }>;
  };
};
```

| ``                | 参数名     | 类型 | 默认值           | 描述 |
| ----------------- | ---------- | ---- | ---------------- |
| `options.title`   | `string`   | -    | 渠道标题         |
| `options.name`    | `string`   | -    | 中间件配置项     |
| `options.only`    | `string[]` | -    | 仅允许指定的操作 |
| `options.except`  | `string[]` | -    | 排除指定的操作   |
| `options.handler` | `Function` | -    | 处理函数         |

## Server

### registerChanelType

注册服务端渠道类型

```typescript
const registerChannelType = (options: ServerChannelOptions) => void

type ServerChannelOptions = {
  name: string;
  Server: new () => NotificationServer;
};
```

服务端需要实现`NotifiactionSever`，主要包括服务端发送方法

#### 签名

```ts
export type SendFnType = (args: {
  message: SendOptions;
  channel: {
    id: string;
    options: Record<string, any>;
    notificationType: string;
  };
}) => Promise<
  Array<{
    receiver: string;
    content: any;
    status: 'success' | 'fail';
    reason?: string;
  }>
>;
```
