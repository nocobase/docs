# v0.18：2023-12-21

## 新特性

为了让 NocoBase 变得更加稳健，第四季度我们一直在补充 E2E 测试，与此同时，也完善了整个测试体系

### @nocobase/test

NocoBase 测试包，包括：

- `@nocobase/test/server` 服务端测试

  - 集成了 `supertest` 用于接口测试
  - 内置了 `mockDatabase` 和 `mockServer`

- `@nocobase/test/client` 客户端测试

  - 集成了 `@testing-library/react` 和 `@testing-library/user-event`

- `@nocobase/test/e2e` E2E 测试

  - 集成了 `@playwright/test`
  - 内置了常用的 mock 方法

### 测试框架

- 后端测试，使用 Vitest 框架
- 前端测试，使用 Vitest 框架
- E2E 测试，使用 Playwright 框架

### 编写测试

#### 后端测试

```typescript
import { mockDatabase } from '@nocobase/test/server';

describe('my db suite', () => {
  let db;

  beforeEach(async () => {
    db = mockDatabase();
    db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });
    await db.sync();
  });

  afterEach(async () => {
    await db.close();
  });

  test('my case', async () => {
    const repository = db.getRepository('posts');
    const post = await repository.create({
      values: {
        title: 'hello',
      },
    });

    expect(post.get('title')).toEqual('hello');
  });
});
```

#### 前端测试

```typescript
import { render, screen, userEvent, waitFor } from '@nocobase/test/client';

it('should display the value of user input', async () => {
  const { container } = render(<App1 />);
  const input = container.querySelector('input');
  await userEvent.type(input, 'Hello World');
  await waitFor(() => {
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
```

#### E2E 测试

```typescript
import { test } from '@nocobase/test/e2e';

test('sign in', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username/Email').click();
  await page.getByPlaceholder('Username/Email').fill('admin@nocobase.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(
    page.getByTestId('user-center-button').getByText('Super Admin'),
  ).toBeVisible();
});
```

### 运行 Vitest 测试

```bash
# 运行全部测试，前后端并行两个 vitest 进程
yarn test

# 运行 client 相关测试用例
yarn test --client
# 等价于
yarn cross-env TEST_ENV=client-side vitest

# 运行 server 相关测试用例
yarn test --server
# 等价于
yarn cross-env TEST_ENV=server-side vitest

# 指定目录或文件
yarn test your/path/src/__tests__/test-file.test.ts
# 前端文件必须包含 /client/
yarn test your/path/client/src/__tests__/test-file.test.ts
```

📢 和直接运行 vitest 的区别

- 指定路径时，可以自动识别前后端，前端的必须包含 `/client/`
- 后端测试默认为 `--single-thread`，如果要关掉可以加上 `--single-thread=false`
- 默认为 `--run` 测试运行完退出进程，如果需要监听，加上 `--watch`

### 运行 Playwright 测试

```bash
# 安装依赖
yarn e2e install-deps

# 运行测试
yarn e2e test

# UI 模式
yarn e2e test --ui

# 已运行的应用 URL
yarn e2e test --url=http://localhost:20000

# Start an app. It reinstalls every time.
yarn e2e start-app
```

## 其他变化

### 用户认证扩展的优化

- 用户认证扩展开发指南 [https://docs-cn.nocobase.com/plugins/auth/dev/guide](https://docs-cn.nocobase.com/plugins/auth/dev/guide)
- 用户认证扩展相关不兼容变化 [https://docs-cn.nocobase.com/breaking-changes/v0-18-0-alpha-1](https://docs-cn.nocobase.com/breaking-changes/v0-18-0-alpha-1)

### 插件化拆分

为了让内核变得更加精炼，某些功能做了插件化的拆分，近期已完成拆分的插件有：

| 插件名                         | 包名                                          |
| ------------------------------ | --------------------------------------------- |
| 操作 - 批量编辑                | @nocobase/plugin-action-bulk-edit             |
| 操作 - 批量更新                | @nocobase/plugin-action-bulk-update           |
| 操作 - 复制                    | @nocobase/plugin-action-duplicate             |
| 看板区块                       | @nocobase/plugin-kanban                       |
| 甘特图区块                     | @nocobase/plugin-gantt                        |
| Workflow - Aggregate           | @nocobase/plugin-workflow-aggregate           |
| Workflow - Approval            | @nocobase/plugin-workflow-approval            |
| Workflow - Delay               | @nocobase/plugin-workflow-delay               |
| Workflow - Dynamic calculation | @nocobase/plugin-workflow-dynamic-calculation |
| Workflow - Form trigger        | @nocobase/plugin-workflow-form-trigger        |
| Workflow - JSON query          | @nocobase/plugin-workflow-json-query          |
| Workflow - Loop                | @nocobase/plugin-workflow-loop                |
| Workflow - Manual              | @nocobase/plugin-workflow-manual              |
| Workflow - Parallel            | @nocobase/plugin-workflow-parallel            |
| Workflow - Request             | @nocobase/plugin-workflow-request             |
| Workflow - SQL                 | @nocobase/plugin-workflow-sql                 |

详情查看 [完整的插件列表](https://docs-cn.nocobase.com/plugins)，需要注意的是，文档正在建设中，部分内容可能缺失或缺少翻译，你可以关注 [nocobase/docs](https://github.com/nocobase/docs) 了解最新动态。
