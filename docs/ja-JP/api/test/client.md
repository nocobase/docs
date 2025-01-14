# Client

## 概要

NocoBaseは、<a href="https://vitest.dev/" target="_blank">Vitest</a>を使用してクライアントテストを行います。`@nocobase/test/client`は、クライアントテストケースを作成するための便利なメソッドを提供します。

## API

### `defineConfig()`

Vitestの設定を取得します。

```ts
import { defineConfig } from '@nocobase/test/vitest.mjs';

const config = defineConfig();
```

### `sleep()`

一定時間待機します。

```ts
sleep(5000);
```

#### シグネチャ

- `sleep: (timeout?: number) => Promise<unknown>`

#### 詳細

| パラメータ名 | タイプ   | 説明            |
| ------------ | -------- | --------------- |
| `timeout`    | `number` | `待機時間 (ms)` |

### @testing-library/react

Reactコンポーネントのテストに使用します。詳細は<a href="https://testing-library.com/docs/react-testing-library/intro" target="_blank">React Testing Library</a>を参照してください。

### @testing-library/user-event

ユーザーの行動をシミュレートするために使用します。詳細は<a href="https://testing-library.com/docs/user-event/intro/" target="_blank">User Interactions</a>を参照してください。

```ts
import { userEvent } from '@nocobase/test/client';

await userEvent.click();
```