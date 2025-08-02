# Клиент (Client)

## Обзор

NocoBase использует [Vitest](https://vitest.dev/) для тестирования на стороне клиента. Пакет `@nocobase/test/client` предоставляет удобные методы для написания тестов на стороне клиента.

## API

### `defineConfig()`

Получает конфигурацию Vitest.

```ts
import { defineConfig } from '@nocobase/test/vitest.mjs';

const config = defineConfig();
```

### `sleep()`

Приостанавливает выполнение на указанное время.

```ts
sleep(5000);
```

#### Сигнатура

- `sleep: (timeout?: number) => Promise<unknown>`

#### Параметры

| Параметр  | Тип      | Описание               |
|-----------|----------|------------------------|
| `timeout` | `number` | Время задержки в миллисекундах |

### @testing-library/react

Используется для тестирования React-компонентов. См. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

### @testing-library/user-event

Используется для имитации действий пользователя. См. [User Interactions](https://testing-library.com/docs/user-event/intro/).

```ts
import { userEvent } from '@nocobase/test/client';

await userEvent.click();
```
