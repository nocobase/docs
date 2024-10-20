# Extend User Data Source Type

## Overview

NocoBase supports extending user data source types as needed.

## Server

### Interface

NocoBase provides registration and management for extending synchronization data source types. To extend the core logic processing, it is necessary to inherit the `SyncSource` abstract class provided by the plugin and implement the corresponding standard interfaces.  

```ts
import { SyncSource, UserData } from '@nocobase/plugin-user-data-sync';

class CustomSyncSource extends SyncSource {
  async pull(): Promise<UserData[]> {
    return [];
  }
}
```

The `SyncSource` provides an `options` property that is used to retrieve custom configurations for the data source.

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

### Explanation of the UserData Field

| Field     | Description                   |
| -------- | ---------------------- |
| `dataType`     | Data type, with optional values of `user` and `department`                |
| `uniqueKey`   | Unique identifier field                 |
| `records`   | Data record                 |
| `sourceName`   | Source name                 |

If dataType is `user`, then records contain the following fields:

| Field     | Description                   |
| -------- | ---------------------- |
| `id`     | User ID                |
| `nickname`   | User nickname                 |
| `avatar`   | User avatar                 |
| `email`   | Email                   |
| `phone`   | Phone number                  |
| `departments`   | Array of Department IDs                   |

If dataType is `department`, then records contain the following fields:

| Field     | Description                   |
| -------- | ---------------------- |
| `id`     | Department ID                |
| `name`   | Department name                 |
| `parentId`   | Parent department ID                 |

### Complete Example of Implementing the Interface

```ts
import { SyncSource, UserData } from '@nocobase/plugin-user-data-sync';

class CustomSyncSource extends SyncSource {
  async pull(): Promise<UserData[]> {
    // ...
    const ThirdClientApi = new ThirdClientApi(this.options.appid, this.options.secret);
    const departments = await this.clientapi.getDepartments();
    const users = await this.clientapi.getUsers();
    // ...
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

### Registration of Data Source Types

Extended data sources need to be registered with the data management module.

```ts
import UserDataSyncPlugin from '@nocobase/plugin-user-data-sync';

class CustomSourcePlugin extends Plugin {
  async load() {
    const syncPlugin = this.app.pm.get(UserDataSyncPlugin) as UserDataSyncPlugin;
    if (syncPlugin) {
      syncPlugin.sourceManager.reigsterType('custom-source-type', {
        syncSource: CustomSyncSource,
        title: 'Custom Source',
      });
    }
  }
}
```

## Client

The client user interface is registered through the `registerType` interface provided by the user data synchronization plugin client.

```ts
import SyncPlugin from '@nocobase/plugin-user-data-sync/client';

class CustomSourcePlugin extends Plugin {
  async load() {
    const sync = this.app.pm.get(SyncPlugin);
    sync.registerType(authType, {
      components: {
        AdminSettingsForm, // Backend management form
      },
    });
  }
}
```

### Backend Management Form

![](./static/20240813135430.png)

The upper part is the general data source configuration, and the lower part is the customizable configuration form section that can be registered.

## Data Push From Third-party Systems

Third-party systems can also push data to Nocobase through the Nocobase HTTP API to achieve user data synchronization.

For detailed API documentation, please visit the API documentation page: http://localhost:13000/admin/settings/api-doc/documentation