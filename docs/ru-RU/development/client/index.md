# Обзор

## Структура директорий

Инициализированный пустой плагин имеет следующую структуру директорий на стороне клиента:

```bash
|- /plugin-sample-hello
  |- /src
    |- /client
      |- index.tsx
  |- client.d.ts
  |- client.js
```

## Класс плагина

Класс плагина предоставляет различные методы для жизненного цикла плагина.

```ts
import { Plugin } from '@nocobase/client';

export class PluginSampleHelloClient extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {}
}

export default PluginSampleHelloClient;
```

## Жизненный цикл плагина

<img alt="Жизненный цикл плагина" src="./image.png" style="width: 600px;" />

- После инициализации плагина вызывается `afterAdd`. Важно отметить, что добавление плагинов происходит в неопределённом порядке, поэтому не пытайтесь получить экземпляры других плагинов в `afterAdd`. Если нужно получить экземпляры других плагинов, это можно сделать в `beforeLoad` или `load`.
- В `beforeLoad` все активированные плагины уже созданы, и на этом этапе экземпляры можно получить через [app.pluginManager.get()](https://client.docs.nocobase.com/core/application/plugin-settings-manager).
- В `load` метод `beforeLoad` всех плагинов уже выполнен.

## Общие свойства и методы класса плагина

| API                          | Руководство                                                              |
| ---------------------------- | ------------------------------------------------------------------------ |
| app.i18n                     | [Интернационализация](/development/client/i18n)                          |
| app.apiClient                | [API-клиент](/development/client/api-client)                            |
| app.pluginManager            | [Менеджер плагинов](https://client.docs.nocobase.com/core/application/plugin-manager) |
| app.router                   | [Управление маршрутизацией](/development/client/router)                  |
| app.pluginSettingsManager    | [Страница настроек плагина](/development/client/router#plugin-settings-page-extension) |
| app.schemaInitializerManager | [Конфигурация инициализатора схемы](/development/client/ui-schema/initializer) |
| app.schemaSettingsManager    | [Конфигурация настроек схемы](/development/client/ui-schema/settings)    |
| app.addProviders             | [Компоненты Provider](/development/client/providers)                     |
| app.addComponents            | [Рендеринг схемы](/development/client/ui-schema/rendering)               |
| app.addScopes                | [Рендеринг схемы](/development/client/ui-schema/rendering)               |

## Часто используемые React **хуки** в компонентах

| API            | Руководство                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------ |
| useApp()       | [API useApp()](https://client.docs.nocobase.com/core/application/application#useapp)             |
| usePlugin()    | [API usePlugin()](https://client.docs.nocobase.com/core/application/plugin-manager#useplugin)    |
| useAPIClient() | [API-клиент](/development/client/api-client)                                                    |
| useRequest()   | [API-клиент](/development/client/api-client)                                                    |
