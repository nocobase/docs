# Интерфейс поля

Ранее мы рассмотрели, как заменять компоненты полей на основе существующего `Field interface`. Однако в некоторых случаях новые компоненты не относятся к уже существующим интерфейсам полей. В таких ситуациях необходимо создать пользовательский `Field interface`.

## Описание примера

В этом документе мы добавим новый тип интерфейса поля — `Encryption`, предназначенный для шифрования и дешифрования данных. Требования следующие:

- Использование симметричного алгоритма шифрования для шифрования и дешифрования поля.
- Зашифрованные данные хранятся в базе данных в виде шифрованного текста, а при просмотре данных отображаются в расшифрованном виде.
- Зашифрованные поля не поддерживают нечеткий поиск, только операции "равно", "не равно", "существует" и "не существует".

Для реализации этой функциональности требуется совместная работа клиентской и серверной частей. На стороне клиента необходимо реализовать интерфейс поля для шифрования и дешифрования, а на серверной стороне — логику шифрования и дешифрования.

Полный код примера доступен в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-field-interface).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721993076851.mov" type="video/mp4" />
</video>

## Инициализация плагина

Следуя инструкциям из документа [Создание первого плагина](/development/your-fisrt-plugin), если у вас нет проекта, создайте его. Если проект уже существует или вы клонировали исходный код, пропустите этот шаг.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-field-interface
yarn pm enable @nocobase-sample/plugin-field-interface
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/locale/](http://localhost:13000/admin/pm/list/locale/), чтобы убедиться, что плагин установлен и активирован.

## Документация и структура каталогов

Перед реализацией примера необходимо ознакомиться с основными понятиями:

- [Модуль crypto в Node.js](https://nodejs.org/api/crypto.html)
- [Database](/api/database): Для управления данными, полями, моделями и операциями.
- [CollectionFieldInterface](https://client.docs.nocobase.com/core/data-source/collection-field-interface): Класс для полей данных на клиентской стороне.
- [CollectionFieldInterfaceManager](https://client.docs.nocobase.com/core/data-source/collection-field-interface-manager): Класс для управления `CollectionFieldInterface` на клиентской стороне.

Структура проекта:

```bash
.
├── client # Клиентская часть плагина
│   ├── EncryptionFieldInterface.tsx # Интерфейс поля на клиентской стороне
│   ├── locale.ts # Утилиты для мультиязычности
│   └── index.ts # Точка входа на клиентской стороне
├── locale
│   ├── en-US.json # Английский
│   └── zh-CN.json # Китайский
├── index.ts # Точка входа серверной части плагина
└── server
      ├── encryption-field.ts # Поле для шифрования
      ├── index.ts # Точка входа серверной части
      ├── operators # Операторы запросов
      │   ├── eq.ts # Равно
      │   ├── ne.ts # Не равно
      │   └── utils.ts # Утилиты
      ├── plugin.ts # Серверный плагин
      └── utils.ts # Утилиты
```

## Реализация на клиентской стороне

### 1. Компонент

Поскольку шифрование и дешифрование работают со строками, мы можем использовать стандартный компонент `Input`, и нет необходимости создавать пользовательский компонент.

Если требуется пользовательский компонент, обратитесь к документации [Компоненты с полем значения](/plugin-samples/field/value).

### 2. Интерфейс поля

#### 2.1 Определение

Создайте файл `packages/plugins/@nocobase-sample/plugin-field-interface/src/client/EncryptionFieldInterface.tsx`:

```tsx | pure
import { CollectionFieldInterface, defaultProps } from '@nocobase/client';
import { uid } from '@nocobase/utils/client';
import { tStr } from './locale';

export class EncryptionFieldInterface extends CollectionFieldInterface {
  name = 'encryption';
  type = 'object';
  group = 'advanced';
  order = 10;
  title = tStr('Encryption');
  default = {
    type: 'encryption',
    iv: uid(16),
    uiSchema: {
      type: 'string',
      'x-component': 'Input',
    },
  };
  availableTypes = ['string'];
  hasDefaultValue = true;
  properties = {
    ...defaultProps,
  };
  filterable = {
    operators: [
      { label: '{{t("is")}}', value: '$encryptionEq', selected: true },
      { label: '{{t("is not")}}', value: '$encryptionNe' },
      { label: '{{t("exists")}}', value: '$exists', noValue: true },
      { label: '{{t("not exists")}}', value: '$notExists', noValue: true },
    ],
  };
}
```

Все интерфейсы полей должны наследовать класс `CollectionFieldInterface` и реализовывать свойства `name`, `type`, `group`, `order`, `title`, `default`, `availableTypes`, `hasDefaultValue`, `properties` и `filterable`. Описание каждого свойства:

- `tStr`: Генерация строковых шаблонов для мультиязычности.
- `name`: Уникальный идентификатор интерфейса поля.
- `type`: Тип интерфейса (в данном случае `object`).
- `group`: Группа для отображения в настройках полей (здесь `advanced`).
- `order`: Порядок сортировки в настройках полей.
- `title`: Заголовок, отображаемый в настройках.
- `default`: Конфигурация поля по умолчанию, сохраняемая в базе данных.
  - `iv`: Инициализационный вектор, случайная строка для шифрования.
  - `uiSchema`: Конфигурация UI поля, здесь используется компонент `Input`.
- `availableTypes`: Доступные типы данных для поля.
- `hasDefaultValue`: Указывает, есть ли у поля значение по умолчанию.
- `properties`: Конфигурация свойств, включает `defaultProps`:
  - `name`: Имя поля.
  - `displayName`: Отображаемое имя поля.
- `filterable`: Операторы для фильтрации.

Особенности `filterable`:

- Поскольку данные хранятся в зашифрованном виде, поддерживаются только операторы "равно", "не равно", "существует" и "не существует".
- Для поиска строки её нужно сначала расшифровать, поэтому вместо стандартных операторов `$eq` и `$ne` используются пользовательские `$encryptionEq` и `$encryptionNe`.

Подробности о `CollectionFieldInterface` см. в [документации](https://client.docs.nocobase.com/core/data-source/collection-field-interface).

#### 2.2 Регистрация

Обновите файл `packages/plugins/@nocobase-sample/plugin-field-interface/src/client/index.ts`:

```ts
import { Plugin } from '@nocobase/client';
import { EncryptionFieldInterface } from './EncryptionFieldInterface';

export class PluginFieldInterfaceClient extends Plugin {
  async load() {
    this.app.dataSourceManager.collectionFieldInterfaceManager.addFieldInterfaces([EncryptionFieldInterface]);
  }
}

export default PluginFieldInterfaceClient;
```

Регистрация `EncryptionFieldInterface` выполняется через метод `collectionFieldInterfaceManager.addFieldInterfaces()`.

Подробности о `CollectionFieldInterfaceManager` см. в [документации](https://client.docs.nocobase.com/core/data-source/collection-field-interface-manager).

![20240726193638](https://static-docs.nocobase.com/20240726193638.png)

Теперь в интерфейсе отображается поле `Encryption`, но серверная часть для шифрования ещё не реализована, поэтому поле **нельзя создать**.

## Реализация на серверной стороне

### 1. Реализация шифрования и дешифрования

Создайте файл `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/utils.ts`:

```ts
import crypto from 'crypto';
const algorithm = 'aes-256-cbc';

const keyString = process.env.ENCRYPTION_KEY || '12345678901234567890123456789012';

const key = Buffer.from(keyString, 'utf8');

export function encryptSync(text: string, ivString: string) {
  const iv = Buffer.from(ivString, 'utf8');
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export function decryptSync(encrypted: string, ivString: string) {
  const iv = Buffer.from(ivString, 'utf8');
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
```

Мы используем модуль `crypto` для реализации шифрования и дешифрования. Метод `encryptSync` шифрует данные, а `decryptSync` — расшифровывает. Используется алгоритм `aes-256-cbc`, ключ берётся из переменной окружения `ENCRYPTION_KEY` или используется значение по умолчанию `12345678901234567890123456789012`.

Подробности о модуле `crypto` см. в [документации Node.js](https://nodejs.org/api/crypto.html).

### 2. Реализация поля

#### 2.1 Определение

Создайте файл `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/encryption-field.ts`:

```ts
import { BaseColumnFieldOptions, Field, FieldContext } from '@nocobase/database';
import { DataTypes } from 'sequelize';
import { decryptSync, encryptSync } from './utils';

export interface EncryptionFieldOptions extends BaseColumnFieldOptions {
  type: 'encryption';
}

export class EncryptionField extends Field {
  get dataType() {
    return DataTypes.STRING;
  }

  constructor(options?: any, context?: FieldContext) {
    const { name, iv } = options;
    super(
      {
        get() {
          const value = this.getDataValue(name);
          if (!value) return null;
          return decryptSync(value, iv);
        },
        set(value) {
          if (!value?.length) value = null;
          else {
            value = encryptSync(value, iv);
          }
          this.setDataValue(name, value);
        },
        ...options,
      },
      context,
    );
  }
}
```

- `dataType`: В базе данных зашифрованные данные хранятся как строки, поэтому используется `DataTypes.STRING`.
- `get`: При получении значения поле расшифровывается.
- `set`: При установке значения поле шифруется.

#### 2.2 Регистрация

Создайте файл `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/plugin.ts`:

```ts
import { Plugin } from '@nocobase/server';
import { EncryptionField } from './encryption-field';
import { $encryptionEq } from './operators/eq';
import { $encryptionNe } from './operators/ne';

export class PluginFieldInterfaceServer extends Plugin {
  async load() {
    this.db.registerFieldTypes({
      encryption: EncryptionField,
    });
  }
}

export default PluginFieldInterfaceServer;
```

Регистрация `EncryptionField` выполняется через метод `db.registerFieldTypes()`. Подробности см. в [документации](/api/database#registerfieldtypes).

![20240726192559](https://static-docs.nocobase.com/20240726192559.png)

Теперь реализация клиентской и серверной частей завершена, и поле можно создать, но необходимо ещё реализовать операторы запросов.

### 3. Реализация операторов

#### 3.1 Определение

Операторы должны шифровать строку перед выполнением запроса.

##### 3.1.1 Общие методы

Поскольку операторы `$encryptionEq` и `$encryptionNe` требуют шифрования перед запросом, мы выносим общую логику в утилиты. Создайте файл `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/operators/utils.ts`:

```ts
import { encryptSync } from '../utils';

export function getFieldOptions(ctx: any) {
  const fieldPathArr = ctx.fieldPath.split('.');
  const collectionName = fieldPathArr[fieldPathArr.length - 2];
  const fieldName = ctx.fieldName;

  return ctx.db.collections.get(collectionName).fields.get(fieldName).options;
}

export function encryptSearchValueSync(str: any, ctx: any) {
  const { iv } = getFieldOptions(ctx);
  let encrypted;
  if (Array.isArray(str)) {
    encrypted = str.map((item) => encryptSync(item, iv));
  } else {
    encrypted = encryptSync(str, iv);
  }
  return encrypted;
}
```

Определены два метода:

- `getFieldOptions`: Получение конфигурации поля.
- `encryptSearchValueSync`: Шифрование значения для поиска.

##### 3.1.2 Реализация `$encryptionEq`

Создайте файл `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/operators/eq.ts`:

```ts
import { encryptSearchValueSync } from './utils';

export const $encryptionEq = (str, ctx) => {
  const eq = ctx.db.operators.get('$eq');
  if (!str) return eq(str, ctx);
  const encrypted = encryptSearchValueSync(str, ctx);
  return eq(encrypted, ctx);
};
```

Оператор `$encryptionEq` шифрует значение перед выполнением запроса.

##### 3.1.3 Реализация `$encryptionNe`

Создайте файл `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/operators/ne.ts`:

```ts
import { encryptSearchValueSync } from './utils';

export const $encryptionNe = (str, ctx) => {
  const eq = ctx.db.operators.get('$ne');
  if (!str) return eq(str, ctx);
  const encrypted = encryptSearchValueSync(str, ctx);
  return eq(encrypted, ctx);
};
```

Оператор `$encryptionNe` также шифрует значение перед выполнением запроса.

#### 3.2 Регистрация операторов

Обновите файл `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/plugin.ts`:

```ts
import { Plugin } from '@nocobase/server';
import { EncryptionField } from './encryption-field';
import { $encryptionEq } from './operators/eq';
import { $encryptionNe } from './operators/ne';

export class PluginFieldInterfaceServer extends Plugin {
  async load() {
    this.db.registerFieldTypes({
      encryption: EncryptionField,
    });
    this.db.registerOperators({
      $encryptionEq,
      $encryptionNe,
    });
  }
}

export default PluginFieldInterfaceServer;
```

![20240726192832](https://static-docs.nocobase.com/20240726192832.png)

## Мультиязычность

Можно добавить несколько языков через [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) и переключать их в правом верхнем углу.

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

### Английский язык

Отредактируйте файл `packages/plugins/@nocobase-sample/plugin-field-interface/src/locale/en-US.json`:

```json
{
  "Encryption": "Encryption"
}
```

### Китайский язык

Отредактируйте файл `packages/plugins/@nocobase-sample/plugin-field-interface/src/locale/zh-CN.json`:

```json
{
  "Encryption": "加密"
}
```

![20240726193259](https://static-docs.nocobase.com/20240726193259.png)

## Сборка и загрузка в продакшен

Следуя инструкциям [Сборка и упаковка плагина](/development/your-fisrt-plugin#构建并打包插件), упакуйте плагин и загрузите его в продакшен.

Если вы используете клонированный исходный код, сначала выполните полную сборку, чтобы собрать зависимости плагина:

```bash
yarn build
```

Если вы используете проект, созданный через `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-field-interface --tar
```

В результате в папке `storage/tar/@nocobase-sample/plugin-field-interface.tar.gz` появится архив плагина. Установите его через интерфейс загрузки, описанный в [документации](/welcome/getting-started/plugin).
