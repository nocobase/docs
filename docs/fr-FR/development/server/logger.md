# Logger

NocoBase's logging is based on <a href="https://github.com/winstonjs/winston" target="_blank">Winston</a>. By default, NocoBase divides logs into API request logs, system operation logs, and SQL execution logs, where API request logs and SQL execution logs are printed internally by the application, and plugin developers typically only need to print plugin-related system operation logs.

This document mainly introduces how to create and print logs when developing plugins. For more information about logs, refer to: [Logger Plugin](../../handbook/logger/index.md).

## Default Print Method

NocoBase provides a printing method for system operation logs, which are printed according to specified fields and output to a designated file. Refer to: [Logger Plugin - System Logs](../../handbook/logger/index.md#system-logs).

```ts
// Default print method
app.log.info("message");

// Use in middleware
async function (ctx, next) {
  ctx.log.info("message");
}

// Use in a plugin
class CustomPlugin extends Plugin {
  async load() {
    this.log.info("message");
  }
}
```

All the above methods follow the usage below:

The first parameter is the log message, the second parameter is an optional metadata object, which can be any key-value pair, where `module`, `submodule`, `method` will be extracted as separate fields, and other fields will be placed in the `meta` field.

```ts
app.log.info('message', {
  module: 'module',
  submodule: 'submodule',
  method: 'method',
  key1: 'value1',
  key2: 'value2',
});
// => level=info timestamp=2023-12-27 10:30:23 message=message module=module submodule=submodule method=method meta={"key1": "value1", "key2": "value2"}

app.log.debug();
app.log.warn();
app.log.error();
```

## Output to Other Files

If you want to use the system's default printing method but do not want to output to the default file, you can use `createSystemLogger` to create a custom system log instance.

```ts
import { createSystemLogger } from '@nocobase/logger';

const logger = createSystemLogger({
  dirname: '/pathto/',
  filename: 'xxx',
  separateError: true, // Whether to output error-level logs separately to 'xxx_error.log'
});
```

## Custom Logs

If you do not want to use the system-provided printing method and want to use Winston's native methods, you can create logs through the following method.

### `createLogger`

```ts
import { createLogger } from '@nocobase/logger';

const logger = createLogger({
  // options
});
```

`options` has been extended based on the original `winston.LoggerOptions`.

- `transports` - You can use `'console' | 'file' | 'dailyRotateFile'` to apply preset output methods.
- `format` - You can use `'logfmt' | 'json' | 'delimiter'` to apply preset printing formats.

### `app.createLogger`

In scenarios with multiple applications, sometimes we hope to customize the output directory and file, which can be output to the directory under the current application name. Refer to: [Logger Plugin - Log Directory](../../handbook/logger/index.md#log-directory).

```ts
app.createLogger({
  dirname: '',
  filename: 'custom', // Output to /storage/logs/main/custom.log
});
```

### `plugin.createLogger`

The usage scenario and method are the same as `app.createLogger`.

```ts
class CustomPlugin extends Plugin {
  async load() {
    const logger = this.createLogger({
      // Output to /storage/logs/main/custom-plugin/YYYY-MM-DD.log
      dirname: 'custom-plugin',
      filename: '%DATE%.log',
      transports: ['dailyRotateFile'],
    });
  }
}
```

## Related Documents

- [Logger Plugin](../../handbook/logger/index.md)
- [API Reference](../../api/logger.md)
