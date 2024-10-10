# 依存関係管理

プラグインの依存関係は、自身の依存関係とグローバル依存関係に分けられます。グローバル依存関係は `@nocobase/server` および `@nocobase/client` によって提供され、プラグインの成果物には含まれません。自身の依存関係は成果物に含まれます。

自身の依存関係は成果物に含まれるため（サーバーが依存する npm パッケージも `dist/node_modules` に含まれます）、プラグインを開発する際には、すべての依存関係を `devDependencies` に配置するだけで十分です。

<Alert type="warning">
プラグインが以下の依存関係をインストールする際には、**バージョン**と `@nocobase/server` および `@nocobase/client` の整合性に注意してください。
</Alert>

### グローバル依存関係

```js
// nocobase
'@nocobase/acl',
'@nocobase/actions',
'@nocobase/auth',
'@nocobase/cache',
'@nocobase/client',
'@nocobase/database',
'@nocobase/evaluators',
'@nocobase/logger',
'@nocobase/resourcer',
'@nocobase/sdk',
'@nocobase/server',
'@nocobase/test',
'@nocobase/utils',
// @nocobase/auth
'jsonwebtoken',
// @nocobase/cache
'cache-manager',
'cache-manager-fs-hash',
// @nocobase/database
'sequelize',
'umzug',
'async-mutex',
// @nocobase/evaluators
'@formulajs/formulajs',
'mathjs',
// @nocobase/logger
'winston',
'winston-daily-rotate-file',
// koa
'koa',
'@koa/cors',
'@koa/router',
'multer',
'@koa/multer',
'koa-bodyparser',
'koa-static',
'koa-send',
// react
'react',
'react-dom',
'react/jsx-runtime',
// react-router
'react-router',
'react-router-dom',
// antd
'antd',
'antd-style',
'@ant-design/icons',
'@ant-design/cssinjs',
// i18next
'i18next',
'react-i18next',
// dnd-kit
'@dnd-kit/accessibility',
'@dnd-kit/core',
'@dnd-kit/modifiers',
'@dnd-kit/sortable',
'@dnd-kit/utilities',
// formily
'@formily/antd-v5',
'@formily/core',
'@formily/react',
'@formily/json-schema',
'@formily/path',
'@formily/validator',
'@formily/shared',
'@formily/reactive',
'@formily/reactive-react',
// utils
'dayjs',
'mysql2',
'pg',
'pg-hstore',
'sqlite3',
'supertest',
'axios',
'@emotion/css',
'ahooks',
'lodash';
```

