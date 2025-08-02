# Расширение целевых ресурсов синхронизации

## Обзор

NocoBase изначально поддерживает синхронизацию данных пользователей в таблицы «Пользователи» (User) и «Подразделения» (Department). Кроме того, платформа позволяет расширять целевые ресурсы синхронизации данных, чтобы записывать данные в другие таблицы или выполнять пользовательскую обработку по необходимости.

:::warning{title=Экспериментальная функция}
Полная документация находится в стадии разработки.
:::

## Интерфейс обработчика целевого ресурса

```ts
export abstract class UserDataResource {
  name: string;
  accepts: SyncAccept[];
  db: Database;
  logger: SystemLogger;

  constructor(db: Database, logger: SystemLogger) {
    this.db = db;
    this.logger = logger;
  }

  /**
   * Абстрактный метод обновления записи.
   * @param record — исходная запись данных.
   * @param resourcePks — первичные ключи целевого ресурса.
   * @param matchKey — необязательное поле, по которому выполняется сопоставление (например, email, username и т.д.).
   * @returns Массив изменённых ресурсов записи.
   */
  abstract update(
    record: OriginRecord,
    resourcePks: PrimaryKey[],
    matchKey?: string,
  ): Promise<RecordResourceChanged[]>;

  /**
   * Абстрактный метод создания новой записи.
   * @param record — исходная запись данных.
   * @param matchKey — поле, по которому выполняется сопоставление.
   * @returns Массив созданных или изменённых ресурсов записи.
   */
  abstract create(
    record: OriginRecord,
    matchKey: string,
  ): Promise<RecordResourceChanged[]>;

  /**
   * Репозиторий записей синхронизации пользовательских данных.
   */
  get syncRecordRepo() {
    return this.db.getRepository('userDataSyncRecords');
  }

  /**
   * Репозиторий связей между записями синхронизации и целевыми ресурсами.
   */
  get syncRecordResourceRepo() {
    return this.db.getRepository('userDataSyncRecordsResources');
  }
}
```

## Регистрация целевых ресурсов

Метод: `registerResource(resource: UserDataResource, options?: ToposortOptions)`

Пример регистрации пользовательского ресурса:

```ts
import { Plugin } from '@nocobase/server';
import PluginUserDataSyncServer from '@nocobase/plugin-user-data-sync';

class CustomUserResourcePluginServer extends Plugin {
  async load() {
    const userDataSyncPlugin = this.app.pm.get(PluginUserDataSyncServer);
    if (userDataSyncPlugin && userDataSyncPlugin.enabled) {
      userDataSyncPlugin.resourceManager.registerResource(new CustomDataSyncResource(this.db, this.app.logger));
    }
  }
}
```

Этот код регистрирует пользовательский обработчик синхронизации данных (`CustomDataSyncResource`), который будет участвовать в процессе синхронизации и может выполнять операции создания или обновления записей в кастомных таблицах на основе входящих данных.
