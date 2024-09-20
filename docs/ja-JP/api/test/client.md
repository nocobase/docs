# Client

## 概览

NocoBase 基于 <a href="https://vitest.dev/" target="_blank">Vitest</a> 进行客户端测试。`@nocobase/test/client` 为编写客户端测试用例提供了一些便捷的方法。

## API

### `defineConfig()`

获取 vitest 配置。

```ts
import { defineConfig } from '@nocobase/test/vitest.mjs';

const config = defineConfig();
```

### `sleep()`

延迟一段时间执行。

```ts
sleep(5000);
```

#### 签名

- `sleep: (timeout?: number) => Promise<unknown>`

#### 详细信息

| 参数名    | 类型     | 描述            |
| --------- | -------- | --------------- |
| `timeout` | `number` | `延迟时间 (ms)` |

### @testing-library/react

用于 React 组件测试。参考 <a href="https://testing-library.com/docs/react-testing-library/intro" target="_blank">React Testing Library</a>.

### @testing-library/user-event

用于模拟用户行为。参考 <a href="https://testing-library.com/docs/user-event/intro/" target="_blank">User Interactions</a>.

```ts
import { userEvent } from '@nocobase/test/client';

await userEvent.click();
```
