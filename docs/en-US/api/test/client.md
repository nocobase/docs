# Client

## Overview

NocoBase utilizes [Vitest](https://vitest.dev/) for client-side testing. `@nocobase/test/client` provides convenient methods for writing client-side test cases.

## API

### `defineConfig()`

Retrieve the Vitest configuration.

```ts
import { defineConfig } from '@nocobase/test/vitest.mjs';

const config = defineConfig();
```

### `sleep()`

Delay execution for a specified period of time.

```ts
sleep(5000);
```

#### Signature

- `sleep: (timeout?: number) => Promise<unknown>`

#### Details

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| `timeout` | `number` | Delay time (in ms) |

### @testing-library/react

Used for testing React components. Refer to [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

### @testing-library/user-event

Used for simulating user interactions. Refer to [User Interactions](https://testing-library.com/docs/user-event/intro/).

```ts
import { userEvent } from '@nocobase/test/client';

await userEvent.click();
```
