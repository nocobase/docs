### **Структура каталога плагина**

Создать пустой плагин можно с помощью команды `yarn pm create my-plugin`. Структура каталога будет следующей:

```bash
|- /my-plugin
  |- /src
    |- /client      # Клиентская часть плагина
    |- /server      # Серверная часть плагина
  |- client.d.ts
  |- client.js
  |- package.json   # Информация о пакете плагина
  |- server.d.ts
  |- server.js
  |- build.config.ts # Или `build.config.js` — используется для изменения конфигурации сборки и реализации пользовательской логики
```

Руководство по `/src/server` см. в разделе [Серверная часть](./server), по `/src/client` — в разделе [Клиентская часть](./client).

Если вы хотите настроить конфигурацию сборки, создайте в корневом каталоге файл `build.config.ts` (или `build.config.js`) со следующим содержимым:

```js
import { defineConfig } from '@nocobase/build';

export default defineConfig({
  modifyViteConfig: (config) => {
    // Vite используется для сборки кода из `src/client`

    // Изменение конфигурации Vite, подробнее: https://vitejs.dev/guide/
    return config
  },
  modifyTsupConfig: (config) => {
    // Tsup используется для сборки кода из `src/server`

    // Изменение конфигурации Tsup, подробнее: https://tsup.egoist.dev/#using-custom-configuration
    return config
  },
  beforeBuild: (log) => {
    // Функция обратного вызова перед началом сборки — можно выполнить операции до начала сборки
  },
  afterBuild: (log: PkgLog) => {
    // Функция обратного вызова после завершения сборки — можно выполнить операции после завершения сборки
  }
});
```
