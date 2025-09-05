# Глобальный контекст

Во многих случаях требуется хранить данные в глобальном контексте, чтобы к ним можно было получить доступ из любого места, например, для управления темами, правами доступа и другими функциями.

## Обзор примера

Необходимо реализовать плагин для управления переключением функций (feature toggle), чтобы включать или отключать определённые возможности.

Полный пример кода для этой документации доступен в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-provider-context).

## Инициализация плагина

Следуя инструкциям из раздела [Создание первого плагина](/development/your-first-plugin), создайте новый проект, если у вас его ещё нет. Если проект уже создан или вы клонировали исходный код, этот шаг можно пропустить.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Далее инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-provider-context
yarn pm enable @nocobase-sample/plugin-provider-context
```

Запустите проект:

```bash
yarn dev
```

После входа в систему вы можете перейти по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функционала

Для реализации глобального контекста используется API контекста React (`Context`).

### 1. Создание контекста

```tsx | pure
import { useRequest } from '@nocobase/client';
import { Spin } from 'antd';
import React, { FC, createContext, ReactNode } from 'react';

const FeaturesContext = createContext<Record<string, boolean>>({});

const mockRequest = () => new Promise((resolve) => {
  resolve({ data: { feature1: true, feature2: false } })
})

export const FeaturesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { loading, data } = useRequest<{ data: Record<string, boolean> }>(mockRequest);

  if (loading) return <Spin />;

  return <FeaturesContext.Provider value={data.data}>{children}</FeaturesContext.Provider>;
};

export const useFeatures = () => React.useContext(FeaturesContext);

export const useFeature = (feature: string) => {
  const features = useFeatures();
  return features[feature];
}
```

Не забудьте отобразить компонент `children`.

Для конфигурации и данных, связанных с `features`, обратитесь к примеру использования на странице [Конфигурация формы плагина](/plugin-samples/plugin-settings/form). В данном случае используются моковые (тестовые) данные.

### 2. Регистрация плагина в системе

Измените файл `packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts`, чтобы зарегистрировать компонент `FeaturesProvider` в системе.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { FeaturesProvider } from './FeaturesProvider';

export class PluginProviderContextClient extends Plugin {
  async load() {
    this.app.addProvider(FeaturesProvider)
  }
}

export default PluginProviderContextClient;
```

### 3. Доступ к данным контекста

Для доступа к данным контекста используйте методы `useFeatures` и `useFeature`.

Существует два сценария: использование внутри текущего плагина и в других плагинах.

#### 3.1 Использование внутри текущего плагина

Измените файл `packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts`, чтобы добавить тестовую страницу для проверки данных контекста.

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';

import { FeaturesProvider, useFeature } from './FeaturesProvider';

const TestPage = () => {
  const feature1 = useFeature('feature1');
  const feature2 = useFeature('feature2');

  return (
    <div>
      <h1>Функция 1: {feature1 ? 'Включена' : 'Отключена'}</h1>
      <h1>Функция 2: {feature2 ? 'Включена' : 'Отключена'}</h1>
    </div>
  );
};

export class PluginProviderContextClient extends Plugin {
  async load() {
    this.app.addProvider(FeaturesProvider)

    this.app.router.add(`admin.features-test`, {
      path: '/admin/features-test',
      Component: TestPage,
    })
  }
}

export default PluginProviderContextClient;
```

Теперь перейдите по адресу [http://localhost:13000/admin/features-test](http://localhost:13000/admin/features-test), чтобы увидеть данные контекста.

![img_v3_02av_51b7cb08-1b42-42f4-b553-49b4e3f217bg](https://static-docs.nocobase.com/img_v3_02av_51b7cb08-1b42-42f4-b553-49b4e3f217bg.jpg)

#### 3.2 Использование в других плагинах

Если контекст нужно использовать в других плагинах, экспортируйте методы `useFeatures` и `useFeature`.

Измените файл `packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts`:

```tsx | pure
export { useFeatures, useFeature } from './FeaturesProvider';
```

Затем вы можете использовать методы `useFeatures` и `useFeature` следующим образом:

```tsx | pure
import { useFeature } from '@nocobase-sample/plugin-provider-context/client';
```

Обратите внимание, что путь импорта должен быть `'@nocobase-sample/plugin-provider-context/client'`, а не `'@nocobase-sample/plugin-provider-context'`.

## Сборка и развертывание в продакшен

Следуя руководству [Сборка и упаковка плагина](/development/your-first-plugin#build-and-package-plugin), вы можете упаковать плагин и загрузить его в продакшен.

Если вы клонировали исходный код, потребуется выполнить полную сборку, чтобы включить зависимости плагина.

```bash
yarn build
```

Если проект был создан с помощью `create-nocobase-app`, просто выполните:

```bash
yarn build @nocobase-sample/plugin-provider-context --tar
```

Это создаст файл `storage/tar/@nocobase-sample/plugin-provider-context.tar.gz`, который затем можно установить, следуя процессу [загрузки плагина](/welcome/getting-started/plugin).
