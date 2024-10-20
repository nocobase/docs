# Building

## Custom Build Configuration

If you want to customize the build configuration, you can create a `build.config.ts` file in the root directory of the plugin with the following content:

```js
import { defineConfig } from '@nocobase/build';

export default defineConfig({
  modifyViteConfig: (config) => {
    // Vite is used for packaging the `src/client` side code

    // Modify the Vite configuration. For details, refer to: https://vitejs.dev/guide/
    return config;
  },
  modifyTsupConfig: (config) => {
    // Tsup is used for packaging the `src/server` side code

    // Modify the Tsup configuration. For details, refer to: https://tsup.egoist.dev/#using-custom-configuration
    return config;
  },
  beforeBuild: (log) => {
    // Callback function before the build starts. You can perform some actions before the build.
  },
  afterBuild: (log: PkgLog) => {
    // Callback function after the build is completed. You can perform some actions after the build.
  };
});
```

## Plugin Example

- [@nocobase/plugin-sample-custom-build](#)
