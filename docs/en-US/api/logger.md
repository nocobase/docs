# @nocobase/logger

## Create logger

### createLogger()

Create custom logger.

#### Signature

- `createLogger(options: LoggerOptions)`

#### Type

```ts
interface LoggerOptions
  extends Omit<winston.LoggerOptions, 'transports' | 'format'> {
  dirname?: string;
  filename?: string;
  format?: 'logfmt' | 'json' | 'delimiter' | winston.Logform.Format;
  transports?: ('console' | 'file' | 'dailyRotateFile' | winston.transport)[];
}
```

#### Details

- `dirname` - Log directory
- `filename` - Log file name
- `format` - Log format
- `transports` - Log transports

### createSystemLogger()

Create system runtime logs printed in a specified method. Refer to [Logger plugin - System log](../plugins/logger/index.md#系统日志)

#### Signature

- `createSystemLogger(options: SystemLoggerOptions)`

#### Type

```ts
export interface SystemLoggerOptions extends LoggerOptions {
  seperateError?: boolean; // print error seperately, default true
}
```

#### Details

- `seperateError` - Whether to print `error` level logs seperately

### app.createLogger()

#### Definition

```ts
class Application {
  createLogger(options: LoggerOptions) {
    const { dirname } = options;
    return createLogger({
      ...options,
      dirname: getLoggerFilePath(this.name || 'main', dirname || ''),
    });
  }
}
```

When `dirname` is a relative path, the log files will be output to the directory named by the current application.

### plugin.createLogger()

Usage is the same as `app.createLogger()`

#### Definition

```ts
class Plugin {
  createLogger(options: LoggerOptions) {
    return this.app.createLogger(options);
  }
}
```

## Configuration

### getLoggerLevel()

`getLoggerLevel(): 'debug' | 'info' | 'warn' | 'error'`

获取当前系统配置的日志级别。

### getLoggerFilePath()

`getLoggerFilePath(...paths: string[]): string`

以当前系统配置的日志目录为基础，拼接目录路径。

### getLoggerTransports()

`getLoggerTransports(): ('console' | 'file' | 'dailyRotateFile')[]`

获取当前系统配置的日志输出方式。

### getLoggerFormat()

`getLoggerFormat(): 'logfmt' | 'json' | 'delimiter'`

获取当前系统配置的日志格式。

## Logger transports

### Transports

预置的输出方式。

- `Transports.console`
- `Transports.file`
- `Transports.dailyRotateFile`

```ts
import { Transports } from '@nocobase/logger';

const transport = Transports.console({
  //...
});
```

## References

- [Development - Logger](../development/server/logger.md)
- [Logger plugin](../plugins/logger/index.md)
