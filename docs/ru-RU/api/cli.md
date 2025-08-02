# @nocobase/cli

CLI NocoBase предназначен для помощи в разработке, сборке и развертывании приложений NocoBase.

<Alert>

CLI NocoBase поддерживает два режима работы: <i>ts-node</i> и <i>node</i>.

- Режим ts-node (по умолчанию): используется в среде разработки, поддерживает компиляцию в реальном времени, но с относительно медленным откликом.
- Режим node: используется в производственной среде, обеспечивает быстрый отклик, но требует предварительной компиляции всего исходного кода с помощью команды `yarn nocobase build`.

</Alert>

## Инструкция по использованию

```bash
$ yarn nocobase -h

Использование: nocobase [команда] [опции]

Опции:
  -h, --help

Команды:
  console
  db:auth               Проверка успешности подключения к базе данных
  db:sync               Создание таблиц и полей в базе данных на основе конфигурации коллекций
  install               Установка приложения
  start                 Запуск приложения в производственной среде
  build                 Компиляция и упаковка приложения
  clean                 Удаление скомпилированных файлов
  dev                   Запуск приложения в режиме разработки с компиляцией в реальном времени
  doc                   Разработка документации
  test                  Тестирование
  umi
  upgrade               Обновление
  migrator              Миграция данных
  pm                    Менеджер плагинов
  help
```

## Использование в шаблоне приложения

Секция `scripts` в файле `package.json` шаблона приложения выглядит следующим образом:

```json
{
  "scripts": {
    "dev": "nocobase dev",
    "start": "nocobase start",
    "clean": "nocobase clean",
    "build": "nocobase build",
    "test": "nocobase test",
    "pm": "nocobase pm",
    "postinstall": "nocobase postinstall"
  }
}
```

## Расширение командной строки

CLI NocoBase построен на основе [commander](https://github.com/tj/commander.js). Вы можете свободно добавлять расширенные команды в файл `app/server/index.ts`:

```ts
const app = new Application(config);

app.command('hello').action(() => {});
```

или в плагине:

```ts
class MyPlugin extends Plugin {
  beforeLoad() {
    this.app.command('hello').action(() => {});
  }
}
```

Вызов в терминале:

```bash
$ yarn nocobase hello
```

## Встроенные команды

Отсортированы по частоте использования.

### `dev`

Запускает приложение и компилирует код в реальном времени в режиме разработки.

<Alert>
Если NocoBase ещё не установлен, он будет автоматически установлен (см. команду `install`).
</Alert>

```bash
Использование: nocobase dev [опции]

Опции:
  -p, --port [порт]
  --client
  --server
  -h, --help
```

Примеры:

```bash
# Запуск приложения в режиме разработки с компиляцией в реальном времени
yarn nocobase dev
# Запуск только серверной части
yarn nocobase dev --server
# Запуск только клиентской части
yarn nocobase dev --client
```

### `start`

Запускает приложение в производственной среде. Требует предварительной сборки кода командой <i>yarn build</i>.

<Alert>

- Если NocoBase ещё не установлен, он будет автоматически установлен (см. команду `install`).
- Если были внесены изменения в исходный код, его необходимо пересобрать (см. команду `build`).

</Alert>

```bash
$ yarn nocobase start -h

Использование: nocobase start [опции]

Опции:
  -p, --port
  -s, --silent
  -h, --help
```

Пример:

```bash
# Запуск приложения в производственной среде
yarn nocobase start
```
# Команды CLI NocoBase

## `install`

Установка системы.

```bash
$ yarn nocobase install -h

Использование: nocobase install [опции]

Опции:
  -f, --force            Принудительная переустановка
  -c, --clean            Полная очистка базы данных
  -s, --silent           Тихий режим
  -l, --lang [язык]      Язык интерфейса
  -e, --root-email <email> Email администратора
  -p, --root-password <пароль> Пароль администратора
  -n, --root-nickname [никнейм] Никнейм администратора
  -h, --help             Справка
```

Примеры:

```bash
# Первоначальная установка
yarn nocobase install -l ru-RU -e admin@nocobase.com -p admin123

# Переустановка с удалением таблиц NocoBase
yarn nocobase install -f -l ru-RU -e admin@nocobase.com -p admin123

# Полная очистка базы и переустановка
yarn nocobase install -c -l ru-RU -e admin@nocobase.com -p admin123
```

<Alert>

Разница между `-f/--force` и `-c/--clean`:

- `-f` удаляет только таблицы NocoBase
- `-c` полностью очищает всю базу данных

</Alert>

## `upgrade`

Обновление системы.

```bash
yarn nocobase upgrade
```

## `test`

Запуск тестов (на базе Jest) с поддержкой всех [опций jest-cli](https://jestjs.io/docs/cli).

```bash
$ yarn nocobase test -h

Использование: nocobase test [опции]

Опции:
  -c, --db-clean        Очистка базы перед запуском тестов
  -h, --help            Справка
```

Примеры:

```bash
# Все тесты
yarn nocobase test

# Тесты в указанной директории
yarn nocobase test packages/core/server

# Конкретный тестовый файл
yarn nocobase test packages/core/database/src/__tests__/database.test.ts

# С очисткой базы
yarn nocobase test -c
```

## `build`

Сборка проекта для production.

```bash
# Все пакеты
yarn nocobase build

# Указанные пакеты
yarn nocobase build app/server app/client
```

## `clean`

Удаление скомпилированных файлов.

```bash
yarn clean
# Эквивалентно:
yarn rimraf -rf packages/*/*/{lib,esm,es,dist}
```

## `doc`

Работа с документацией.

```bash
# Запуск сервера документации
yarn doc --lang=ru-RU

# Сборка документации
yarn doc build

# Просмотр собранной документации
yarn doc serve --lang=ru-RU
```

## `db:auth`

Проверка подключения к базе данных.

```bash
$ yarn nocobase db:auth -h

Использование: nocobase db:auth [опции]

Опции:
  -r, --retry [попытки] Количество попыток подключения
  -h, --help            Справка
```

## `db:sync`

Синхронизация структуры базы данных с конфигурацией коллекций.

```bash
$ yarn nocobase db:sync -h

Использование: nocobase db:sync [опции]

Опции:
  -f, --force          Принудительная синхронизация
  -h, --help           Справка
```
### `migrator`

Миграция данных.

```bash
$ yarn nocobase migrator

Позиционные аргументы:
  <command>
    up        Применяет ожидающие миграции
    down      Откатывает миграции
    pending   Выводит список ожидающих миграций
    executed  Выводит список выполненных миграций
    create    Создаёт файл миграции
```

### `pm`

Менеджер плагинов.

```bash
# Создать плагин
yarn pm create hello
# Зарегистрировать плагин
yarn pm add hello
# Включить плагин
yarn pm enable hello
# Отключить плагин
yarn pm disable hello
# Удалить плагин
yarn pm remove hello
```

Ещё не реализовано:

```bash
# Обновить плагин
yarn pm upgrade hello
# Опубликовать плагин
yarn pm publish hello
```

### `umi`

`app/client` построен на основе [umi](https://umijs.org/), вы можете запускать другие связанные команды через `nocobase umi`.

```bash
# Сгенерировать кэш .umi, необходимый для среды разработки
yarn nocobase umi generate tmp
```

### `help`

Команда справки. Также можно использовать параметры `-h` или `--help`.

```bash
# Просмотр всех команд CLI
yarn nocobase help
# Использовать -h
yarn nocobase -h
# Или --help
yarn nocobase --help
# Просмотр опций команды db:sync
yarn nocobase db:sync -h
```
