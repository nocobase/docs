# Plugin

## 概览

```ts
import { Plugin } from '@nocobase/server';

export class PluginDemoServer extends Plugin {
  
}

export default PluginDemoServer;
```

## 实例属性

### options
### name
### enabled
### installed
### log
### app
### pm
### db

## 生命周期方法

### afterAdd
### beforeLoad
### load
### install
### beforeEnable
### afterEnable
### beforeDisable
### afterDisable
### beforeRemove
### afterRemove

## 其他方法

### t()
### createLogger()
### toJSON()
