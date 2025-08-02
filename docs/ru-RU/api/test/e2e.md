# End-to-End тестирование

## Обзор

NocoBase использует [Playwright](https://playwright.dev/) для сквозного (E2E) тестирования предоставляет набор методов для упрощения написания тестов.

### mockPage

Создает страницу NocoBase на основе конфигурации.

**Сигнатура**

- `mockPage(pageConfig?: PageConfig): NocoPage`

**Параметры**

| Параметр                | Тип                          | По умолчанию | Описание                              |
|-------------------------|------------------------------|--------------|---------------------------------------|
| `pageConfig.type`       | `'group' \| 'page' \| 'link'` | 'page'       | Тип страницы                          |
| `pageConfig.name`       | `string`                     | -            | Название страницы для пользователей   |
| `pageConfig.url`        | `string`                     | -            | URL для навигации при `type='link'`   |
| `pageConfig.basePath`   | `string`                     | '/admin/'    | Базовый путь страницы                 |
| `pageConfig.collections`| `CollectionSetting[]`        | -            | Настройки коллекций на странице       |
| `pageConfig.pageSchema` | -                            | -            | Схема всей страницы                   |

**Пример**

Создание пустой страницы, которая автоматически удалится после завершения теста:

```ts
import { test } from '@nocobase/test/e2e';

test('пример использования mockPage', async ({ mockPage }) => {
  const nocoPage = await mockPage();
  await nocoPage.goto();
});
```

### mockManualDestroyPage

Создает страницу, требующую ручного удаления.

**Сигнатура**

- `mockManualDestroyPage(pageConfig?: PageConfig): NocoPage`

**Параметры**  
Аналогичны `mockPage`.

**Пример**  
Создание страницы для нескольких тестов:

```ts
import { test } from '@nocobase/test/e2e';

let nocoPage;

test.beforeAll(async ({ mockManualDestroyPage }) => {
  nocoPage = await mockManualDestroyPage();
});

test.afterAll(async () => {
  await nocoPage.destroy();
});

test('пример использования mockManualDestroyPage', async ({ page }) => {
  await page.goto(nocoPage.getUrl());
});
```

### mockCollections

Создает несколько коллекций по конфигурации.

**Сигнатура**

- `mockCollections(collectionSettings: CollectionSetting[]): Promise<void>`

**Параметры**  
См. определение типа [CollectionSetting](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L11-L90).

**Пример**  
Создание коллекции `posts`:

```ts
import { test } from '@nocobase/test/e2e';

test('пример использования mockCollections', async ({ mockCollections }) => {
  await mockCollections([{
    name: 'posts',
  }]);
});
```

### mockCollection

Создает одну коллекцию по конфигурации.

**Сигнатура**

- `mockCollection(collectionSetting: CollectionSetting): Promise<void>`

**Пример**  
Создание коллекции `posts`:

```ts
import { test } from '@nocobase/test/e2e';

test('пример использования mockCollection', async ({ mockCollection }) => {
  await mockCollection({
    name: 'posts',
  });
});
```

### mockRecords

Генерирует тестовые данные для коллекций.

**Сигнатура**

- `mockRecords<T>(collectionName: string, count?: number): Promise<T>`
- `mockRecords<T>(collectionName: string, records?: T[]): Promise<T[]>`

**Примеры**  
Создание 10 записей:

```ts
await mockRecords('posts', 10);
```

Кастомная запись:

```ts
await mockRecords('posts', [{
  title: 'Привет мир',
}]);
```

### mockRecord

Создает одну запись в коллекции.

**Сигнатура**

- `mockRecord<T>(collectionName: string, data?: T): Promise<T>`

**Пример**  
Создание записи:

```ts
import { test } from '@nocobase/test/e2e';

test('пример использования mockRecord', async ({ mockRecord }) => {
  await mockRecord('posts');
});
```

