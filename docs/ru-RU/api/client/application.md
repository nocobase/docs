# Класс Application

## Конструктор

### `constructor()`

Создает экземпляр приложения.

**Сигнатура**
- `constructor(options: ApplicationOptions)`

**Пример использования**
```ts
const app = new Application({
  apiClient: {
    baseURL: process.env.API_BASE_URL, // Базовый URL API
  },
  dynamicImport: (name: string) => {
    // Динамическая загрузка плагинов
    return import(`../plugins/${name}`);
  },
});
```

## Основные методы

### use()

Добавляет провайдеры в приложение. Встроенные провайдеры включают:

- `APIClientProvider` - для работы с API
- `I18nextProvider` - для интернационализации
- `AntdConfigProvider` - для конфигурации Ant Design
- `SystemSettingsProvider` - для системных настроек
- `PluginManagerProvider` - для управления плагинами
- `SchemaComponentProvider` - для работы с компонентами схем
- `SchemaInitializerProvider` - для инициализации схем
- `BlockSchemaComponentProvider` - для блоковых компонентов схем
- `AntdSchemaComponentProvider` - для Ant Design компонентов схем
- `ACLProvider` - для управления доступом
- `RemoteDocumentTitleProvider` - для удаленного управления заголовком документа

### render()

Основной метод для рендеринга приложения.

**Пример использования**
```ts
import { Application } from '@nocobase/client';

// Создание экземпляра приложения
export const app = new Application({
  apiClient: {
    baseURL: process.env.API_BASE_URL,
  },
  dynamicImport: (name: string) => {
    return import(`../plugins/${name}`);
  },
});

// Экспорт компонента для рендеринга
export default app.render();
```

Этот класс представляет собой ядро клиентской части приложения NocoBase, предоставляя все необходимые провайдеры и методы для работы с интерфейсом, плагинами и API.
