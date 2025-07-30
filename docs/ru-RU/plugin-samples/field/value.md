# Компоненты с полем значения

Компоненты с полем значения — это компоненты, которые имеют атрибут `value` и используются для отображения значений полей. Например, компоненты `Input`, `Select`, `Checkbox`, `Radio`, `Switch` и т.д. являются компонентами с полем значения.

## Описание примера

В данном примере мы добавим компонент `QRCode`, предназначенный для отображения значения поля URL с поддержкой настройки `размера`, `цвета` и `границы`.

Полный код примера можно найти в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-field-value).

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721790389902.mov" type="video/mp4" />
</video>

## Инициализация плагина

Следуя инструкциям из документа [Создание первого плагина](/development/your-fisrt-plugin), если у вас нет проекта, создайте его. Если проект уже существует или вы клонировали исходный код, пропустите этот шаг.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-field-value
yarn pm enable @nocobase-sample/plugin-field-value
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/locale/](http://localhost:13000/admin/pm/list/locale/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функционала

Перед реализацией примера необходимо ознакомиться с основными понятиями:

- [QRCode от Ant Design](https://ant.design/components/qr-code)
- [Руководство по SchemaInitializer](/development/client/ui-schema/initializer): для добавления блоков, полей и операций в интерфейс.
- [API SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer): для добавления элементов в интерфейс.
- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema): подробное описание структуры Schema и роли каждого атрибута.
- [Designable дизайнер](/development/client/ui-schema/designable): для изменения Schema.

Структура проекта:

```bash
.
├── client # Клиентская часть плагина
│   ├── QRCode.tsx # Компонент
│   ├── settings.tsx # Настройки Schema
│   ├── locale.ts # Утилиты для мультиязычности
│   └── index.ts # Точка входа на клиентской стороне
├── locale # Файлы мультиязычности
│   ├── en-US.json # Английский
│   └── zh-CN.json # Китайский
├── index.ts # Точка входа серверной части плагина
└── server # Серверная часть плагина
```

### 1. Компонент

![20240723211323](https://static-docs.nocobase.com/20240723211323.png)

Компонент должен поддерживать три режима:

- **Editable**: Режим редактирования.
- **ReadOnly**: Режим только для чтения (редактирование запрещено).
- **Easy-reading**: Режим просмотра.

Режим `ReadOnly` реализуется через атрибут `disabled` в режиме редактирования, поэтому достаточно адаптировать `Editable` и `Easy-reading`.

#### 1.1 Компонент в режиме редактирования

В режиме редактирования компоненту автоматически передаются свойства `onChange`, `value`, `disabled` и свойства из [x-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props) в Schema.

Создайте файл `packages/plugins/@nocobase-sample/plugin-field-value/src/client/QRCode.tsx`:

```tsx | pure
import React, { FC } from 'react';
import { Input } from '@nocobase/client';
import { QRCode as AntdQRCode, Space, QRCodeProps as AntdQRCodeProps } from 'antd';

interface QRCodeProps extends AntdQRCodeProps {
  onChange: (value: string) => void;
  disabled?: boolean;
}

const QRCodeEditable: FC<QRCodeProps> = ({ value, disabled, onChange, ...otherProps }) => {
  return (
    <Space direction="vertical" align="center">
      <AntdQRCode value={value || '-'} {...otherProps} />
      <Input.URL
        maxLength={60}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    </Space>
  );
};
```

В режиме редактирования мы используем компонент `Space` для размещения `QRCode` и `Input.URL`. `QRCode` отображает значение URL, а `Input.URL` позволяет его редактировать.

Свойства `value`, `disabled`, `onChange` автоматически передаются в режиме `Editable`.

#### 1.2 Компонент в режиме просмотра

В режиме просмотра компоненту передаются `value` и свойства из [x-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props).

Добавьте в `packages/plugins/@nocobase-sample/plugin-field-value/src/client/QRCode.tsx`:

```tsx | pure
const QRCodeReadPretty: FC<QRCodeProps> = ({ value, ...otherProps }) => {
  if (!value) return null;
  return <AntdQRCode value={value} {...otherProps} />;
};
```

#### 1.3 Соединение компонентов

Необходимо соединить `QRCodeEditable` и `QRCodeReadPretty`, чтобы в Schema можно было автоматически переключать компоненты через [x-pattern](https://docs.nocobase.com/development/client/ui-schema/what-is-ui-schema#x-pattern).

Добавьте в `packages/plugins/@nocobase-sample/plugin-field-value/src/client/QRCode.tsx`:

```tsx | pure
import { connect, mapReadPretty } from '@formily/react';

export const QRCode: FC<QRCodeProps> = connect(QRCodeEditable, mapReadPretty(QRCodeReadPretty));

QRCode.displayName = 'QRCode';
```

Функция [connect](https://react.formilyjs.org/api/shared/connect) объединяет компоненты `QRCodeEditable` и `QRCodeReadPretty`.

#### 1.4 Регистрация компонента

Зарегистрируйте компонент `QRCode` в системе через плагин.

```ts
import { Plugin } from '@nocobase/client';
import { QRCode } from './QRCode';

export class PluginFieldComponentValueClient extends Plugin {
  async load() {
    this.app.addComponents({ QRCode });
  }
}

export default PluginFieldComponentValueClient;
```

Теперь компонент `QRCode` можно использовать в Schema как строку:

```json
{
  "type": "string",
  "x-component": "QRCode"
}
```

#### 1.5 Добавление в `componentOptions` интерфейса поля

Добавьте `QRCode` в `componentOptions` интерфейса поля `url`, чтобы пользователи могли переключать компоненты через интерфейс.

```ts
import { Plugin } from '@nocobase/client';
import { QRCode } from './QRCode';
import { qrCodeComponentFieldSettings } from './settings';
import { tStr } from './locale';

export class PluginFieldComponentValueClient extends Plugin {
  async load() {
    this.app.addComponents({ QRCode });
    this.schemaSettingsManager.add(qrCodeComponentFieldSettings);
    this.app.addFieldInterfaceComponentOption('url', {
      label: tStr('QRCode'),
      value: 'QRCode',
    });
  }
}

export default PluginFieldComponentValueClient;
```

Подробности об использовании `app.addFieldInterfaceComponentOption` см. в [документации](https://client.docs.nocobase.com/core/data-source/collection-field-interface-manager#addfieldinterfacecomponentoption).

![Режим редактирования](https://static-docs.nocobase.com/20240724111012.png)

![Режим ReadOnly](https://static-docs.nocobase.com/20240724111116.png)

![Режим просмотра](https://static-docs.nocobase.com/20240724111231.png)

### 2. Реализация настроек Schema

Для настройки свойств компонента `QRCode` используем Schema Settings.

#### 2.1 Определение настроек Schema

Создайте файл `packages/plugins/@nocobase-sample/plugin-field-value/src/client/settings.tsx`:

```ts
import { createModalSettingsItem, createSelectSchemaSettingsItem, createSwitchSettingsItem, SchemaSettings } from '@nocobase/client';
import { tStr, useT } from './locale';

export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    // TODO
  ],
});
```

Имя `name` следует правилу `fieldSettings:component:${componentName}`, где `componentName` — имя компонента.

#### 2.2 Регистрация настроек Schema

Зарегистрируйте `qrCodeComponentFieldSettings` в системе.

Обновите `packages/plugins/@nocobase-sample/plugin-field-component-value/src/client/index.tsx`:

```ts
import { Plugin } from '@nocobase/client';
import { QRCode } from './QRCode';
import { qrCodeComponentFieldSettings } from './settings';
import { tStr } from './locale';

export class PluginFieldComponentValueClient extends Plugin {
  async load() {
    this.app.addComponents({ QRCode });
    this.schemaSettingsManager.add(qrCodeComponentFieldSettings);
    this.app.addFieldInterfaceComponentOption('url', {
      label: tStr('QRCode'),
      value: 'QRCode',
    });
  }
}

export default PluginFieldComponentValueClient;
```

### 3. Реализация элементов настроек Schema

#### 3.1 Реализация настройки `Size`

Для настройки размера используем выпадающий список `select` с вариантами `small`, `middle`, `large`.

Обновите `packages/plugins/@nocobase-sample/plugin-field-component-value/src/client/settings.ts`:

```ts
export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    createSelectSchemaSettingsItem({
      name: 'size',
      title: tStr('Size'),
      schemaKey: 'x-component-props.size',
      defaultValue: 160,
      useOptions() {
        const t = useT();
        return [
          {
            label: t('Small'),
            value: 100,
          },
          {
            label: t('Middle'),
            value: 160,
          },
          {
            label: t('Large'),
            value: 200,
          },
        ];
      },
    }),
  ],
});
```

- `name`: Уникальный идентификатор.
- `title`: Заголовок.
- `schemaKey`: Ключ Schema, в данном случае `x-component-props.size`.
- `defaultValue`: Значение по умолчанию.
- `useOptions`: Опции для выпадающего списка.

![20240724111505](https://static-docs.nocobase.com/20240724111505.png)

#### 3.2 Реализация настройки `Bordered`

Для настройки границы используем переключатель `switch`.

```ts
export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    createSelectSchemaSettingsItem({
      name: 'size',
      title: tStr('Size'),
      schemaKey: 'x-component-props.size',
      defaultValue: 160,
      useOptions() {
        const t = useT();
        return [
          {
            label: t('Small'),
            value: 100,
          },
          {
            label: t('Middle'),
            value: 160,
          },
          {
            label: t('Large'),
            value: 200,
          },
        ];
      },
    }),
    createSwitchSettingsItem({
      name: 'bordered',
      schemaKey: 'x-component-props.bordered',
      title: tStr('Bordered'),
      defaultValue: true,
    }),
  ],
});
```

- `name`: Уникальный идентификатор.
- `schemaKey`: Ключ Schema, в данном случае `x-component-props.bordered`.
- `defaultValue`: Значение по умолчанию.

![20240724111935](https://static-docs.nocobase.com/20240724111935.png)

#### 3.3 Реализация настройки `Color`

Для настройки цвета используем модальное окно с выбором цвета.

```ts
export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    createSelectSchemaSettingsItem({
      name: 'size',
      title: tStr('Size'),
      schemaKey: 'x-component-props.size',
      defaultValue: 160,
      useOptions() {
        const t = useT();
        return [
          {
            label: t('Small'),
            value: 100,
          },
          {
            label: t('Middle'),
            value: 160,
          },
          {
            label: t('Large'),
            value: 200,
          },
        ];
      },
    }),
    createSwitchSettingsItem({
      name: 'bordered',
      schemaKey: 'x-component-props.bordered',
      title: tStr('Bordered'),
      defaultValue: true,
    }),
    createModalSettingsItem({
      name: 'color',
      title: tStr('Color'),
      parentSchemaKey: 'x-component-props',
      schema({ color }) {
        return {
          type: 'object',
          title: tStr('Color'),
          properties: {
            color: {
              type: 'string',
              title: tStr('Color'),
              default: color,
              'x-component': 'ColorPicker',
            },
          },
        };
      },
    }),
  ],
});
```

![20240724112041](https://static-docs.nocobase.com/20240724112041.png)

### 4. Мультиязычность

Можно добавить несколько языков через [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) и переключать их в правом верхнем углу.

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

#### 4.1 Английский язык

Отредактируйте `packages/plugins/@nocobase-sample/plugin-field-value/src/locale/en-US.json`:

```json
{
  "QRCode": "QRCode",
  "Size": "Size",
  "Bordered": "Bordered",
  "Color": "Color",
  "Small": "Small",
  "Middle": "Middle",
  "Large": "Large"
}
```

#### 4.2 Китайский язык

Отредактируйте `packages/plugins/@nocobase-sample/plugin-field-value/src/locale/zh-CN.json`:

```json
{
  "QRCode": "二维码",
  "Size": "尺寸",
  "Bordered": "边框",
  "Color": "颜色",
  "Small": "小",
  "Middle": "中",
  "Large": "大"
}
```

![TODO: Скриншот](https://static-docs.nocobase.com/TODO：截图.png)

## Сборка и загрузка в продакшен

Следуя инструкциям [Сборка и упаковка плагина](/development/your-fisrt-plugin#构建并打包插件), упакуйте плагин и загрузите его в продакшен.

Если вы используете клонированный исходный код, сначала выполните полную сборку, чтобы собрать зависимости плагина:

```bash
yarn build
```

Если вы используете проект, созданный через `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-field-value --tar
```

В результате в папке `storage/tar/@nocobase-sample/plugin-field-value.tar.gz` появится архив плагина. Установите его через интерфейс загрузки, описанный в [документации](/welcome/getting-started/plugin).
