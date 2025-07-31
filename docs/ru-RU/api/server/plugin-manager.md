# Менеджер плагинов (PluginManager)

`PluginManager` - это менеджер плагинов для NocoBase.

## Свойства экземпляра

### `repository`

Экземпляр `Repository` для таблицы данных плагинов. См. [DataBase - Repository](../database/repository.md).

## Методы экземпляра

### `addPreset()`

Добавляет встроенный системный плагин. Встроенные плагины включены по умолчанию и не отображаются в списке клиентского менеджера плагинов.

#### Сигнатура

- `addPreset(plugin: string | typeof Plugin, options: any = {})`

#### Детали

| Параметр | Тип                        | Описание              |
| -------- | -------------------------- | --------------------- |
| `plugin` | `string` \| `typeof Plugin`| Имя или экземпляр плагина |
| `options`| `any`                      | Настройки плагина     |

### `getPlugins()`

Получает все экземпляры плагинов текущего приложения.

#### Сигнатура

- `getPlugins(): Map<typeof Plugin, Plugin<any>>`

### `getAliases()`

Получает все имена плагинов.

#### Сигнатура

- `getAliases(): IterableIterator<string>`

### `get()`

Получает конкретный плагин.

#### Сигнатура

- `get(name: string | typeof Plugin): Plugin<any>`

### `has()`

Проверяет существование плагина.

#### Сигнатура

- `has(name: string | typeof Plugin): boolean`

### `create()`

Создает плагин и генерирует директорию плагина.

#### Сигнатура

- `create(pluginName: string, options?: { forceRecreate?: boolean }): Promise<void>`

#### Детали

| Параметр               | Тип      | Описание                                                     | По умолчанию |
| ---------------------- | -------- | ----------------------------------------------------------- | ------------ |
| `pluginName`           | `string` | Имя плагина                                                 | -            |
| `options.forceRecreate`| `boolean`| Удалять ли существующую директорию плагина и создавать заново | `false`      |

### `add()`

Добавляет или обновляет плагин.

#### Сигнатура

- `add(plugin?: any, options: any = {}, insert = false, isUpgrade = false): Promise<void>`

#### Детали

| Параметр   | Тип                        | Описание                         | По умолчанию |
| ---------- | -------------------------- | ------------------------------- | ------------ |
| `plugin`   | `string` \| `typeof Plugin`| Имя или экземпляр плагина        | -            |
| `options`  | `any`                      | Конфигурация плагина             | -            |
| `insert`   | `boolean`                  | Добавлять ли записи в таблицу плагинов | `false`      |
| `isUpgrade`| `boolean`                  | Является ли обновлением плагина  | `false`      |

### `load()`

Загружает все включенные плагины.

#### Сигнатура

- `load(): Promise<void>`

### `install()`

Устанавливает все включенные плагины, которые еще не установлены.

#### Сигнатура

- `install(): Promise<void>`

### `enable()`

Включает один или несколько отключенных плагинов.

#### Сигнатура

- `enable(name: string | string[]): Promise<void>`

### `disable()`

Отключает один или несколько включенных плагинов.

#### Сигнатура

- `disable(name: string | string[]): Promise<void>`

### `remove()`

Удаляет один или несколько плагинов.

#### Сигнатура

- `remove(name: string | string[], options?: { removeDir?: boolean; force?: boolean })`

#### Детали

| Параметр           | Тип                   | Описание                                                                                | По умолчанию |
| ------------------- | ---------------------- | ------------------------------------------------------------------------------------------ | ------- |
| `name`              | `string` \| `string[]` | Plugin name(s)                                                                             | -       |
| `options.removeDir` | `boolean`              | Whether to remove the plugin directory                                                     | `false` |
| `options.force`     | `boolean`              | Whether to delete database records directly, skipping `beforeRemove` / `afterRemove` hooks | `false` |
