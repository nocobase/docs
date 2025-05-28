# Directory Structure

Whether it is a NocoBase application created via [Git source](/welcome/getting-started/installation/git-clone) or [create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app), the directory structure is the same, as follows:

```bash
├── my-nocobase-app
  ├── packages        # Packages under development
    ├── plugins       # Plugins under development
  ├── storage         # Used to store database files, attachments, cache, etc.
    ├── backups       # Backup files directory
    ├── plugins       # Plug-and-play plugins (already compiled)
    ├── tar           # Location for storing output of yarn build --tar
    ├── uploads       # Local storage directory
  ├── .env            # Environment variables
  ├── .env.e2e        # Environment variables for e2e tests yarn e2e test
  ├── .env.test       # Environment variables for unit tests yarn test
  ├── lerna.json
  ├── package.json
  ├── playwright.config.ts
  ├── tsconfig.json
  ├── tsconfig.server.json
  ├── vitest.config.mts
```

## Plugins Directory

Plugins under development are stored in the `packages/plugins` directory, organized as npm packages, example as below:

```bash
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

Plugins added via the interface are stored in the `storage/plugins` directory, organized as npm packages, example as below:

```bash
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

Built-in plugins or plugins declared in the `dependencies` of `package.json` will all be in `node_modules`, example as below:

```bash
|- /node_modules/
  |- /@nocobase/
    |- /plugin-acl/
    |- /plugin-auth/
```

## Plugin Directory Structure

You can quickly create an empty plugin with `yarn pm create @my-project/plugin-hello`. The directory structure is as follows:

```bash
|- /packages/plugins/@my-project/plugin-hello
  |- /dist          # The produсt of build
  |- /src
    |- /client      # Plugin client code
    |- /server      # Plugin server code
  |- .npmignore     # Which files or directories should be ignored when publishing the plugin package
  |- client.d.ts
  |- client.js
  |- package.json   # Plugin package information
  |- server.d.ts
  |- server.js
```
