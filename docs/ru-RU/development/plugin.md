### **Способы организации плагинов**

NocoBase предлагает три различных метода организации плагинов, при этом все пакеты плагинов в конечном итоге объединяются в каталоге `node_modules` в корне проекта:

![Схема](https://static-docs.nocobase.com/20240428091419.png)

#### **storage/plugins**

Этот каталог предназначен для хранения предварительно собранных плагинов, которым не требуются дополнительные зависимости. Эти плагины готовы к немедленному использованию — просто подключай и используй. Плагины, добавленные через интерфейс, помещаются в этот каталог. Также вы можете добавить плагин с помощью команды `pm add`.

Пример команды:
```bash
tar -xvzf /downloads/plugin-data-source-external-mysql-0.21.0-alpha.10.tgz -C /my-nocobase-app/storage/plugins/@nocobase/plugin-data-source-external-mysql --strip-components=1
```

Структура каталога:
```
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-data-source-external-mysql/
```

#### **packages/plugins**

Для плагинов, находящихся в стадии разработки, управление осуществляется через Yarn workspaces. При выполнении команды `yarn install` все зависимости для этих плагинов будут загружены. Исходный код доступен, однако перед использованием в рабочей среде плагины необходимо собрать. Структура таких пакетов плагинов аналогична структуре пакетов npm:

```
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

#### **package.json + зависимости**

Примером этого метода является предустановленный пакет плагинов NocoBase, в котором плагины перечислены в разделе `dependencies` файла `package.json`. При выполнении команды `yarn install` все указанные плагины автоматически загружаются и готовы к использованию.

Пример:
```json
{
  "name": "@nocobase/preset-nocobase",
  "version": "0.21.0-alpha.15",
  "license": "AGPL-3.0",
  "main": "./lib/server/index.js",
  "dependencies": {
    "@nocobase/plugin-acl": "0.21.0-alpha.15",
    "@nocobase/plugin-action-bulk-edit": "0.21.0-alpha.15",
    "@nocobase/plugin-action-bulk-update": "0.21.0-alpha.15",
    "@nocobase/plugin-action-duplicate": "0.21.0-alpha.15",
    "@nocobase/plugin-action-print": "0.21.0-alpha.15",
    "@nocobase/plugin-api-doc": "0.21.0-alpha.15",
    "@nocobase/plugin-api-keys": "0.21.0-alpha.15",
    "@nocobase/plugin-audit-logs": "0.21.0-alpha.15",
    "@nocobase/plugin-auth": "0.21.0-alpha.15",
    "@nocobase/plugin-backup-restore": "0.21.0-alpha.15",
    "@nocobase/plugin-calendar": "0.21.0-alpha.15",
    "@nocobase/plugin-cas": "0.21.0-alpha.15",
    "@nocobase/plugin-charts": "0.21.0-alpha.15",
    "@nocobase/plugin-china-region": "0.21.0-alpha.15",
    "@nocobase/plugin-client": "0.21.0-alpha.15",
    "@nocobase/plugin-collection-manager": "0.21.0-alpha.15",
    "@nocobase/plugin-custom-request": "0.21.0-alpha.15",
    "@nocobase/plugin-data-source-manager": "0.21.0-alpha.15",
    "@nocobase/plugin-data-visualization": "0.21.0-alpha.15",
    "@nocobase/plugin-error-handler": "0.21.0-alpha.15",
    "@nocobase/plugin-export": "0.21.0-alpha.15",
    "@nocobase/plugin-file-manager": "0.21.0-alpha.15",
    "@nocobase/plugin-formula-field": "0.21.0-alpha.15",
    "@nocobase/plugin-gantt": "0.21.0-alpha.15",
    "@nocobase/plugin-graph-collection-manager": "0.21.0-alpha.15",
    "@nocobase/plugin-iframe-block": "0.21.0-alpha.15",
    "@nocobase/plugin-import": "0.21.0-alpha.15",
    "@nocobase/plugin-kanban": "0.21.0-alpha.15",
    "@nocobase/plugin-localization-management": "0.21.0-alpha.15",
    "@nocobase/plugin-logger": "0.21.0-alpha.15",
    "@nocobase/plugin-map": "0.21.0-alpha.15",
    "@nocobase/plugin-mobile-client": "0.21.0-alpha.15",
    "@nocobase/plugin-mock-collections": "0.21.0-alpha.15",
    "@nocobase/plugin-multi-app-manager": "0.21.0-alpha.15",
    "@nocobase/plugin-multi-app-share-collection": "0.21.0-alpha.15",
    "@nocobase/plugin-oidc": "0.21.0-alpha.15",
    "@nocobase/plugin-saml": "0.21.0-alpha.15",
    "@nocobase/plugin-sequence-field": "0.21.0-alpha.15",
    "@nocobase/plugin-sms-auth": "0.21.0-alpha.15",
    "@nocobase/plugin-snapshot-field": "0.21.0-alpha.15",
    "@nocobase/plugin-system-settings": "0.21.0-alpha.15",
    "@nocobase/plugin-theme-editor": "0.21.0-alpha.15",
    "@nocobase/plugin-ui-schema-storage": "0.21.0-alpha.15",
    "@nocobase/plugin-users": "0.21.0-alpha.15",
    "@nocobase/plugin-verification": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-action-trigger": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-aggregate": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-delay": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-dynamic-calculation": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-loop": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-manual": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-parallel": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-request": "0.21.0-alpha.15",
    "@nocobase/plugin-workflow-sql": "0.21.0-alpha.15"
  }
}
```
