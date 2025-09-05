# Версия 0.18: 2023-12-21

## Новые возможности

Чтобы повысить надежность NocoBase, в течение четвертого квартала мы проводили комплексное тестирование E2E. Одновременно мы также совершенствовали всю систему тестирования.

### @nocobase/test

Набор для тестирования NocoBase, включающий:

- тестирование на стороне сервера `@nocobase/test/server`
  - Встроенный `супертест` для тестирования интерфейса.
  - Встроены `mockDatabase` и `MockServer`.
- `@nocobase/test/client` Тестирование на стороне клиента
  - интегрированы `@testing-library/react` и `@testing-library/user-event`.
- Тестирование `@nocobase/test/e2e` E2E
  - Интеграция `@playground/test`.
  - Встроенные общие макетные методы.

### Фреймворк тестирования

- Тестирование на стороне сервера с использованием Vitest framework
- Тестирование на стороне клиента с использованием Vitest framework
- Тестирование E2E с использованием Playstation framework

### Написание тестов

#### Серверное тестирование

```typescript
import { mockDatabase } from `@nocobase/test/server`;

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

#### Тестирование на стороне клиента

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

#### Тестирование E2E

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

### Проведите самый важный тест

```bash
# Запустите все тесты с помощью двух параллельных процессов Vitest как для внешнего интерфейса, так и для серверной части.
yarn test

# Запустите клиентские тестовые примеры.
yarn test --client
# равно
yarn cross-env TEST_ENV=client-side vitest

# Запустите серверные тестовые примеры.
yarn test --server
# равно
yarn cross-env TEST_ENV=server-side vitest

# Укажите каталог или файл.
yarn test your/path/src/__tests__/test-file.test.ts
# Файлы на стороне клиента должны содержать /client/
yarn test your/path/client/src/__tests__/test-file.test.ts
```

📢 Отличие от прямого запуска vitest

- Когда вы указываете путь, вы можете автоматически распознавать интерфейс и серверную часть, во внешнем интерфейсе должен быть указан `/клиент/`.
- По умолчанию серверный тест выполняется в режиме `-single-thread`, если вы хотите отключить его, вы можете добавить `-single-thread=false`.
- По умолчанию используется `--run`, если вам нужно прослушать, добавьте `--watch`.

### Проведите тест на драматурга

```bash
# Установить зависимости
yarn e2e install-deps

# Запуск тестов
yarn e2e test

# Режим пользовательского интерфейса
yarn e2e test --ui

# Укажите URL-адрес приложения
yarn e2e test --url=http://localhost:20000

# Запустите приложение. Оно каждый раз переустанавливается.
yarn e2e start-app
```

## Другие изменения

### Оптимизация плагина auth

- Руководство по разработке расширения Auth [https://docs.nocobase.com/plugins/auth/dev/guide](https://docs.nocobase.com/plugins/auth/dev/guide)
- Основные изменения [https://docs.nocobase.com/breaking-changes/v0-18-0-alpha-1](https://docs.nocobase.com/breaking-changes/v0-18-0-alpha-1)

### Модульная декомпозиция на плагины

Чтобы усовершенствовать ядро и сделать его более оптимизированным, некоторые функциональные возможности были разделены на модули. Недавно в число плагинов, которые подверглись такой модуляции, вошли:

| Название плагина               | Название пакета                               |
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

Смотрите [полный список плагинов](https://docs.nocobase.com/plugins) для получения подробной информации. В настоящее время документ находится в стадии разработки, возможно, часть содержимого отсутствует или ожидает перевода. Следите за обновлениями в [nocobase/docs](https://github.com/nocobase/docs).
