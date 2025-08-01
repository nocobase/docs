# Расширение источников синхронизированных данных

## Обзор

NocoBase позволяет расширять типы источников данных для синхронизации пользовательской информации по мере необходимости.

## Серверная часть

### Интерфейс источника данных

Встроенный плагин синхронизации предоставляет базовые функции регистрации и управления. Для создания нового типа источника необходимо унаследовать абстрактный класс `SyncSource` и реализовать стандартные интерфейсы.

```ts
import { SyncSource, UserData } from '@nocobase/plugin-user-data-sync';

class CustomSyncSource extends SyncSource {
  async pull(): Promise<UserData[]> {
    return [];
  }
}
```

Класс `SyncSource` содержит свойство `options` для доступа к конфигурациям.

```ts
import { SyncSource, UserData } from '@nocobase/plugin-user-data-sync';

class CustomSyncSource extends SyncSource {
  async pull(): Promise<UserData[]> {
    //...
    const { appid, secret } = this.options;
    //...
    return [];
  }
}
```

### Описание полей `UserData`

| Поле         | Описание                                |
|--------------|-----------------------------------------|
| `dataType`   | Тип данных: `user` или `department`     |
| `uniqueKey`  | Уникальный идентификатор               |
| `records`    | Записи данных                          |
| `sourceName` | Название источника                     |

Для `dataType = 'user'`:

| Поле          | Описание               |
|---------------|------------------------|
| `id`          | ID пользователя        |
| `nickname`    | Никнейм                |
| `avatar`      | Аватар                 |
| `email`       | Email                  |
| `phone`       | Телефон                |
| `departments` | ID отделов             |

Для `dataType = 'department'`:

| Поле       | Описание            |
|------------|---------------------|
| `id`       | ID отдела           |
| `name`     | Название отдела     |
| `parentId` | ID родительского отдела |

### Пример реализации

```ts
import { SyncSource, UserData } from '@nocobase/plugin-user-data-sync';

class CustomSyncSource extends SyncSource {
  async pull(): Promise<UserData[]> {
    const ThirdClientApi = new ThirdClientApi(
      this.options.appid,
      this.options.secret,
    );
    const departments = await this.clientapi.getDepartments();
    const users = await this.clientapi.getUsers();
    
    return [
      {
        dataType: 'department',
        uniqueKey: 'id',
        records: departments,
        sourceName: this.instance.name,
      },
      {
        dataType: 'user',
        uniqueKey: 'id',
        records: users,
        sourceName: this.instance.name,
      },
    ];
  }
}
```

### Регистрация типа источника

```ts
import UserDataSyncPlugin from '@nocobase/plugin-user-data-sync';

class CustomSourcePlugin extends Plugin {
  async load() {
    const syncPlugin = this.app.pm.get(UserDataSyncPlugin) as UserDataSyncPlugin;
    if (syncPlugin) {
      syncPlugin.sourceManager.registerType('custom-source-type', {
        syncSource: CustomSyncSource,
        title: 'Кастомный источник',
      });
    }
  }
}
```

## Клиентская часть

Интерфейс регистрирует тип источника через метод `registerType`:

```ts
import SyncPlugin from '@nocobase/plugin-user-data-sync/client';

class CustomSourcePlugin extends Plugin {
  async load() {
    const sync = this.app.pm.get(SyncPlugin);
    sync.registerType(authType, {
      components: {
        AdminSettingsForm, // Форма администрирования
      },
    });
  }
}
```

### Форма администрирования

![Форма настроек](https://static-docs.nocobase.com/202412041429835.png)

Верхняя часть содержит общие настройки, нижняя - кастомные конфигурации.
