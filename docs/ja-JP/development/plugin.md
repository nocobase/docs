# プラグインの整理方法

NocoBaseはプラグインを整理するための3つの方法を提供しており、すべてのプラグインパッケージは最終的にプロジェクトのルートディレクトリにある `node_modules` に集約されます：

![20240424112928](https://static-docs.nocobase.com/20240424112928.png)

:::warning
3つの方法で整理されたプラグインは、最終的に `yarn install` を実行する必要があります。アプリのプラグイン管理ページに表示する必要がある場合は、`pm add` を通じてアプリに追加してください。
:::

## storages/plugins

このディレクトリは、コンパイル済みのプラグインを保存するためのもので、追加の依存関係をダウンロードする必要がないプラグイン、つまり即時に使用可能です。インターフェースから追加したプラグインはこのディレクトリに配置されます。例えば、@nocobase/plugin-data-source-external-mysqlプラグインをstorage/pluginsディレクトリに解凍する場合は、以下のようにします：

```bash
tar -xvzf /downloads/plugin-data-source-external-mysql-0.21.0-alpha.10.tgz -C /my-nocobase-app/storage/plugins/@nocobase/plugin-data-source-external-mysql --strip-components=1
```

ディレクトリ構造は以下の通りです：

```bash
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-data-source-external-mysql/
```

## packages/plugins

このディレクトリは、開発中のプラグインを管理するためのもので、Yarn workspaceを通じて管理されます。`yarn install` により、すべてのプラグインの依存関係がダウンロードされ、ソースコードが含まれているため、製品環境ではコンパイル後に使用可能です。プラグインパッケージとnpmパッケージの整理方法は一致しており、ディレクトリ構造は以下の通りです：

```bash
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

## package.json + dependencies

例えば、NocoBaseのpresetプラグインは、プラグインをdependenciesに記述しており、`yarn install` 時に宣言されたプラグインがすべてダウンロードされます。

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

