# 测试

## 单元测试

基于 [Vitest](https://vitest.dev/) 测试框架。

```ts
describe('my suite', () => {
  beforeEach(async () => {});

  afterEach(async () => {});

  test('my case', async () => {});
});
```

## E2E 测试

基于 [Playwright](https://playwright.dev/) 测试框架。

```ts
import { expect, test } from '@nocobase/test/e2e';

test.describe('my suite', () => {
  test('my case', async ({ page, mockPage }) => {});
});
```
