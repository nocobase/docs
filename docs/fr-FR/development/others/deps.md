# Dependencies

The plugin's dependencies are categorized into local dependencies and global dependencies. Global dependencies are provided by `@nocobase/server` and `@nocobase/client`, and they are not included in the plugin's final bundle. However, local dependencies will be bundled with the plugin.

Since the local dependencies will be bundled (including npm packages required by the server, which will also be included in `dist/node_modules`), when developing a plugin, all dependencies should be added to `devDependencies`.

<Alert type="warning">
When installing the following dependencies for the plugin, ensure that their **versions** are consistent with those of `@nocobase/server` and `@nocobase/client`.
</Alert>

## Global Dependencies

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
