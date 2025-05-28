# Commands

In a plugin, custom commands must be located in the `src/server/commands/*.ts` directory of the plugin. The content should look like this:

```ts
import { Application } from '@nocobase/server';

export default function(app: Application) {
  app
    .command('echo')
    .option('-v, --version')
    .action(async ([options]) => {
      console.log('Hello World!');
      if (options.version) {
        console.log('Current version:', await app.version.get());
      }
    });
}
```

:::warning
Custom commands in the plugin are only effective after the plugin is installed and activated.
:::

Special Configurations for Commands:

- `ipc()` When the app is running, the command-line sends instructions through ipc to operate on the running app instance. Without the `ipc()` configuration, a new application instance will be created to execute the command (this will not interfere with the running app instance).
- `auth()` Performs database verification. If the database configuration is incorrect, the command will not be executed.
- `preload()` Determines whether to pre-load the application configuration, i.e., execute `app.load()`.

These configurations can be adjusted according to the actual use of the command, as shown in the examples below:

```ts
app.command('a').ipc().action()
app.command('a').auth().action()
app.command('a').preload().action()
```
