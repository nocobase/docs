# Журнал аудита

<PluginInfo licenseBundled="true" name="audit-logger"></PluginInfo>

## Введение

Журнал аудита используется для записи и отслеживания действий пользователя и истории работы ресурсов в системе.

![](https://static-docs.nocobase.com/202501031627719.png)

![](https://static-docs.nocobase.com/202501031627922.png)

## Описание параметра

| Parameter               | Description                                                             |
| ----------------------- | ------------------------------------------------------------------------ |
| **Resource**            | The target resource type of the operation                               |
| **Action**              | The type of operation performed                                         |
| **User**                | The user performing the operation                                       |
| **Role**                | The role of the user during the operation                               |
| **Data source**         | The data source                                                         |
| **Target collection**   | The target collection                                                   |
| **Target record UK**    | The unique identifier of the target collection                          |
| **Source collection**   | The source collection of the relation field                             |
| **Source record UK**    | The unique identifier of the source collection                          |
| **Status**              | The HTTP status code of the operation request response                 |
| **Created at**          | The time of the operation                                               |
| **UUID**                | The unique identifier of the operation, consistent with the Request ID of the operation request, can be used to retrieve application logs |
| **IP**                  | The IP address of the user                                              |
| **UA**                  | The UA information of the user                                          |
| **Metadata**            | Metadata such as parameters, request body, and response content of the operation request |

## Описание ресурса аудита

В настоящее время в журнале аудита будут регистрироваться следующие операции с ресурсами:

### Основное приложение

| Operation             | Description         |
| --------------------- | ------------------- |
| `app:resart`          | Application restart |
| `app:clearCache`      | Clear application cache |

### Менеджер плагинов

| Operation             | Description         |
| --------------------- | ------------------- |
| `pm:add`              | Add plugin          |
| `pm:update`           | Update plugin       |
| `pm:enable`           | Enable plugin       |
| `pm:disable`          | Disable plugin      |
| `pm:remove`           | Remove plugin       |

### Аутентификация пользователя

| Operation                  | Description         |
| -------------------------- | ------------------- |
| `auth:signIn`              | Sign in             |
| `auth:signUp`              | Sign up             |
| `auth:signOut`             | Sign out            |
| `auth:changePassword`      | Change password     |

### Пользователь

| Operation                  | Description         |
| -------------------------- | ------------------- |
| `users:updateProfile`      | Update profile      |

### Конфигурация UI

| Operation                       | Description           |
| ------------------------------ | --------------------- |
| `uiSchemas:insertAdjacent`      | Insert UI Schema      |
| `uiSchemas:patch`               | Modify UI Schema      |
| `uiSchemas:remove`              | Remove UI Schema      |

### Операции по взысканию

| Operation             | Description             |
| --------------------- | ----------------------- |
| `create`              | Create record           |
| `update`              | Update record           |
| `destroy`             | Delete record           |
| `updateOrCreate`      | Update or create record |
| `firstOrCreate`       | Query or create record  |
| `move`                | Move record             |
| `set`                 | Set relation field record |
| `add`                 | Add relation field record |
| `remove`              | Remove relation field record |
| `export`              | Export record           |
| `import`              | Import record           |

## Добавление других ресурсов аудита

Если вы расширили другие операции с ресурсами с помощью плагинов и хотите 
записать поведение этих операций с ресурсами в журнал аудита, обратитесь к [API](../../api/server/audit-manager.md).
