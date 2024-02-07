# Develop the first plugin

Before start, you need to install NocoBase:.

- [create-nocobase-app installation](/welcome/getting-started/installation/create-nocobase-app)
- [Git source installation](/welcome/getting-started/installation/git-clone)

Once NocoBase is installed, we can start our plugin development journey.

## Create a plugin

First, you can quickly create an empty plugin via the CLI with the following command.

```bash
yarn pm create @my-project/plugin-hello
```

The directory where the plugin located is `packages/plugins/@my-project/plugin-hello` and the plugin directory structure is

```bash
|- /packages/plugins/@my-project/plugin-hello
  |- /src
    |- /client # plugin client code
    |- /server # plugin server code
  |- client.d.ts
  |- client.js
  |- package.json # plugin package information
  |- server.d.ts
  |- server.js
```

Visit the Plugin Manager to view the plugin you just added, the default address is http://localhost:13000/admin/pm/list/local/

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/b04d16851fc1bbc2796ecf8f9bc0c3f4.png" />

If the plugin is not shown in the plugin manager, you can add it manually with the `pm add` command.

```bash
yarn pm add @my-project/plugin-hello
```

## Code the plugin

Create a new collection file in the plugin, e.g. `. /src/server/collections/hello.ts` with the following contents:

```ts
import { defineCollection } '@nocobase/database';

export default defineCollection({
  name: 'hello',
  fields: [{ type: 'string', name: 'name' }],
});
```

Modify the `. /src/server/plugin.ts` file as follows

```ts
import { Plugin } from '@nocobase/server';

export class PluginHelloServer extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    // This is just an example. Expose all actions of the hello collection to the public
    this.app.acl.allow('hello', '*', 'public');
  }

  async install() {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default PluginHelloServer;
```

## Activate the plugin

**Operated by command**

```bash
yarn pm enable @my-project/plugin-hello
```

**Operated by UI**

Visit the Plugin Manager to view the plugin you just added and click enable.
The Plugin Manager page defaults to http://localhost:13000/admin/pm/list/local/

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/7b7df26a8ecc32bb1ebc3f99767ff9f9.png" />

:::info{title="INFO"}
The collection configured in the plugin is automatically synchronized with the database when the plugin is activated, generating the corresponding data tables and fields. If the plugin is already active, you need to handle the synchronization of the data tables with the upgrade command `yarn nocobase upgrade`.
:::

## Debug the Plugin

If the app is not started, you need to start the app first

```bash
# for development
yarn dev

# for production
yarn build
yarn start
```

Insert data into the hello collection of the plugin

```bash
curl --location --request POST 'http://localhost:13000/api/hello:create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Hello world"
}'
```

View the data

```bash
curl --location --request GET 'http://localhost:13000/api/hello:list'
```

## Build the plugin

```bash
yarn build @my-project/plugin-hello --tar

# step by step
yarn build @my-project/plugin-hello
yarn nocobase tar @my-project/plugin-hello
```

The default saved path for the plugin tar is `storage/tar/@my-project/plugin-hello.tar.gz`

## Upload to other NocoBase applications

Only supported in v0.14 and above

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/8aa8a511aa8c1e87a8f7ee82cf8a1359.gif" />
