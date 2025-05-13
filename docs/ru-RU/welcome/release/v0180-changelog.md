# v0.18：2023-12-21

## New Features

To enhance the robustness of NocoBase, we have been supplementing E2E (end-to-end) testing throughout the fourth quarter. Concurrently, we have also been refining the entire testing system.

### @nocobase/test

NocoBase test kit, include:

- `@nocobase/test/server` server-side testing
  - Integrated `supertest` for interface testing.
  - `mockDatabase` and `mockServer` are built in.
- `@nocobase/test/client` Client-side testing
  - `@testing-library/react` and `@testing-library/user-event` are integrated.
- `@nocobase/test/e2e` E2E testing
  - Integration of `@playwright/test`.
  - Built-in common mock methods

### Testing framework

- Server-side testing, using the Vitest framework
- Client-side testing, using the Vitest framework
- E2E testing, using the Playwright framework

### Writing tests

#### Server-side testing

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

#### Client-side testing

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

#### E2E testing

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
      page.getByTestId('user-center-button').getByText('Super Admin')
    ).toBeVisible();
});
```

### Run the Vitest test

```bash
# Run all tests with two parallel Vitest processes for both frontend and backend.
yarn test

# Run client test cases.
yarn test --client
# equal to
yarn cross-env TEST_ENV=client-side vitest

# Run server test cases.
yarn test --server
# equal to
yarn cross-env TEST_ENV=server-side vitest

# Specify a directory or file.
yarn test your/path/src/__tests__/test-file.test.ts
# Client-side files must include /client/ 
yarn test your/path/client/src/__tests__/test-file.test.ts
```

📢 Difference with running vitest directly

- When you specify the path, you can automatically recognize the front-end and back-end, the front-end must include `/client/`.
- Backend test is `-single-thread` by default, if you want to turn it off, you can add `-single-thread=false`.
- Default is `--run`, if you need to listen, add `--watch`.

### Run the Playwright test

```bash
# Install dependencies
yarn e2e install-deps

# Run tests
yarn e2e test

# UI mode
yarn e2e test --ui

# Specify the application's URL
yarn e2e test --url=http://localhost:20000

# Start an app. It reinstalls every time.
yarn e2e start-app
```

## Other changes

### Optimization of auth plugin

- Auth extension development guide [https://docs.nocobase.com/plugins/auth/dev/guide](https://docs.nocobase.com/plugins/auth/dev/guide)
- Breaking changes [https://docs.nocobase.com/breaking-changes/v0-18-0-alpha-1](https://docs.nocobase.com/breaking-changes/v0-18-0-alpha-1)

### Modular decomposition into plugins

In order to refine the kernel and make it more streamlined, certain functionalities have undergone a modularized separation. Recently, the plugins that have undergone this modularization include:

| Plugin name                    | Package name                                 |
| ------------------------------ | --------------------------------------------- |
| Action - Bulk edit             | @nocobase/plugin-action-bulk-edit             |
| Action - Bulk update           | @nocobase/plugin-action-bulk-update           |
| Action - Duplicate             | @nocobase/plugin-action-duplicate             |
| Kanban                         | @nocobase/plugin-kanban                       |
| Gantt                          | @nocobase/plugin-gantt                        |
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

See [complete list of plugins](https://docs.nocobase.com/plugins) for details. The document is currently under construction, with some content possibly missing or awaiting translation. You can follow [nocobase/docs](https://github.com/nocobase/docs) for updates.