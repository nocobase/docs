# Client

## 概览

`@nocobase/test` 为编写客户端测试用例提供了一些便捷的方法。

## API

### defineConfig

### sleep

延迟一段时间执行。

```ts
sleep(5000);
```

#### 签名

- `sleep: (timeout?: number) => Promise<unknown>`

### @testing-library/react

用于 React 组件测试。参考 <a href="https://testing-library.com/docs/react-testing-library/intro" target="_blank">React Testing Library</a>.

### @testing-library/user-event

用于模拟用户行为。参考 <a href="https://testing-library.com/docs/user-event/intro/" target="_blank">User Interactions</a>.

```ts
import { userEvent } from '@nocobase/test/client';

await userEvent.click();
```
