# Отображение глобального контента

Мы можем отображать глобальный контент с помощью компонента `Provider`.

## Описание примера

Требуется реализовать функцию отображения объявлений. Если сервер возвращает информацию об объявлении, оно будет отображаться в верхней части страницы.

Полный код примера доступен в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-provider-content).

![img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg](https://static-docs.nocobase.com/img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg.jpg)

## Инициализация плагина

Следуйте инструкциям из руководства [Создание первого плагина](/development/your-fisrt-plugin). Если у вас ещё нет проекта, создайте его. Если проект уже создан или вы клонировали исходный код, этот шаг можно пропустить.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Далее инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-provider-content
yarn pm enable @nocobase-sample/plugin-provider-content
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функционала

### 1. Добавление компонента `Provider`

Компонент `Provider` — это обычный React-компонент, но важно не забыть отобразить `children` внутри него.

Создайте новый файл по пути `packages/plugins/@nocobase-sample/plugin-provider-content/src/client/TopAnnouncement.tsx`:

```tsx | pure
import React, { FC, ReactNode } from 'react';
import { Alert, Affix, AlertProps } from 'antd';
import { useRequest } from '@nocobase/client';

const mockRequest = () => new Promise((resolve) => {
  Math.random() > 0.5 ?
    resolve({ data: { message: 'Это важное сообщение.', type: 'info' } }) :
    resolve({ data: undefined })
})

export const TopAnnouncement: FC<{ children: ReactNode }> = ({ children }) => {
  const { data, loading } = useRequest<{ data: { message: string; type: AlertProps['type'] } }>(mockRequest)

  const onClose = () => {
    console.log('onClose')
  }

  return (
    <>
      {
        !loading && !!data.data && <Affix offsetTop={0} style={{ zIndex: 1010 }}>
          <Alert
            message={data.data.message}
            type={data.data.type}
            style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none' }}
            closable
            onClose={onClose}
          />
        </Affix>
      }
      {children}
    </>
  );
};
```

Для конфигурации и данных объявлений обратитесь к странице [Конфигурация формы плагина](/plugin-samples/plugin-settings/form). В данном примере используются моковые (тестовые) данные.

Не забудьте отобразить `children` внутри компонента.

### 2. Регистрация в системе

Измените файл `packages/plugins/@nocobase-sample/plugin-provider-content/src/index.ts`, чтобы зарегистрировать компонент `TopAnnouncement` в системе.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { TopAnnouncement } from './TopAnnouncement';

export class PluginProviderContentClient extends Plugin {
  async load() {
    this.app.addProvider(TopAnnouncement)
  }
}

export default PluginProviderContentClient;
```

Теперь перейдите по адресу [http://localhost:13000](http://localhost:13000), и вы увидите объявление, отображаемое в верхней части страницы.

![img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg](https://static-docs.nocobase.com/img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg.jpg)

## Сборка и развертывание в продакшен

Следуйте инструкциям из документа [Сборка и упаковка плагина](/development/your-fisrt-plugin#构建并打包插件), чтобы упаковать плагин и загрузить его в продакшен.

Если вы клонировали исходный код, сначала выполните полную сборку, чтобы упаковать зависимости плагина:

```bash
yarn build
```

Если вы создали проект с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-provider-content --tar
```

После этого появится файл `storage/tar/@nocobase-sample/plugin-provider-content.tar.gz`, который можно установить, следуя процессу [загрузки плагина](/welcome/getting-started/plugin).
