# Сборка

## Пользовательская конфигурация сборки

Для кастомизации конфигурации сборки создайте файл `build.config.ts` в корневой директории плагина со следующим содержимым:

```js
import { defineConfig } from '@nocobase/build';

export default defineConfig({
  modifyViteConfig: (config) => {
    // Vite используется для сборки клиентского кода из `src/client`

    // Модифицируйте конфигурацию Vite. Подробности: https://vitejs.dev/guide/
    return config;
  },
  modifyTsupConfig: (config) => {
    // Tsup используется для сборки серверного кода из `src/server`

    // Модифицируйте конфигурацию Tsup. Подробности: https://tsup.egoist.dev/#using-custom-configuration
    return config;
  },
  beforeBuild: (log) => {
    // Функция обратного вызова перед началом сборки
  },
  afterBuild: (log: PkgLog) => {
    // Функция обратного вызова после завершения сборки
  }
});
```

## Пример плагина

- [@nocobase/plugin-sample-custom-build](#)
