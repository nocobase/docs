# Версия 0.15: 2023-11-13

## Особенности

![Plugin settings manager](https://static-docs.nocobase.com/20240115140600.png)

## Кардинальные изменения

### API регистрации страницы настройки плагина

Раньше я использовал Настройку `scenterprovider` для регистрации страницы конфигурации подключаемого модуля, но теперь мне нужно зарегистрироваться через подключаемый модуль.

Ранее страница настройки плагина была зарегистрирована с помощью `SettingsCenterProvider`, а теперь ее необходимо зарегистрировать через плагин.

- Пример 1: На исходной странице есть только одна вкладка

Если на странице есть только одна вкладка, новая версия вкладки будет удалена, оставив только заголовок и значок страницы.

```tsx | pure
const HelloProvider = React.memo(props => {
  return (
    <SettingsCenterProvider
      settings={{
        hello: {
          title: "Hello",
          icon: "ApiOutlined",
          tabs: {
            tab1: {
              title: "Hello tab",
              component: HelloPluginSettingPage,
            },
          },
        },
      }}
    >
      {props.children}
    </SettingsCenterProvider>
  );
});
```

Теперь его нужно изменить на:

```tsx | pure
class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello",
      icon: "ApiOutlined",
      Component: HelloPluginSettingPage,
      // It is not necessary to pass this parameter if it is a new plugin
      aclSnippet: "pm.hello.tab1",
    });
  }
}
```

`Приветственная вкладка` из `tab1` удалена.

Параметр `aclSnippet` `pm.hello.tab1" соответствует ключу исходного объекта `настройки`.:

```tsx
<SettingsCenterProvider
  settings={{
    hello: {
      // This `hello` corresponds to `hello` in `pm.hello.tab1`
      tabs: {
        tab1: {
          // Here, `tab1` corresponds to `tab1` in `pm.hello.tab1`
        },
      },
    },
  }}
></SettingsCenterProvider>
```

- Пример 2: На исходной странице есть несколько вкладок

```tsx
const HelloProvider = React.memo(props => {
  return (
    <SettingsCenterProvider
      settings={{
        hello: {
          title: "Hello",
          icon: "ApiOutlined",
          tabs: {
            tab1: {
              title: "Hello tab1",
              component: HelloPluginSettingPage1,
            },
            tab2: {
              title: "Hello tab2",
              component: HelloPluginSettingPage2,
            },
          },
        },
      }}
    >
      {props.children}
    </SettingsCenterProvider>
  );
});
```

Теперь его нужно изменить на:

```tsx
import { Outlet } from "react-router-dom";

class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello",
      icon: "ApiOutlined",
      Component: Outlet,
    });

    this.app.pluginSettingsManager.add("hello.tab1", {
      title: "Hello tab1",
      Component: HelloPluginSettingPage1,
    });

    this.app.pluginSettingsManager.add("hello.tab2", {
      title: "Hello tab2",
      Component: HelloPluginSettingPage1,
    });
  }
}
```

Получите информацию о маршруте, соответствующую `pluginSettingsManager`

```tsx
const baseName = app.pluginSettingsManager.getRouteName("hello");
// admin.settings.hello
const basePath = app.pluginSettingsManager.getRoutePath("hello"); // /admin/settings.
// /admin/settings/hello
```

Если на странице конфигурации плагина есть переход по ссылке, вам необходимо соответствующим образом изменить ее, например:

```tsx | pure
navigate("/admin/settings/hello/1").navigate("/admin/settings/hello/2");

// This can be changed to
const basePath = app.pluginSettingsManager.getRoutePath("hello");
navigate(`${basePath}/1`);
navigate(`${basePath}/2`);
```

Для получения дополнительной информации обратитесь к [менеджеру настроек плагина](https://docs.nocobase.com/development/client/plugin-settings).

## Список изменений

Полный список изменений приведен в разделе [Список изменений](https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md).
