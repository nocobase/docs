import { useFieldSchema } from '@formily/react';
import {
  Plugin,
  SchemaComponent,
  useSchemaInitializerRender
} from '@nocobase/client';
import React from 'react';
import { createApp } from './app';

// 自定义 Hello 组件
const Hello = (props) => {
  return (
    <div>
      {props.children}
      <HelloInitializer />
    </div>
  )
}

// 通过 useSchemaInitializerRender 来支持 x-initializer 的渲染
const HelloInitializer = () => {
  const fieldSchema = useFieldSchema();
  const { render } = useSchemaInitializerRender(fieldSchema['x-initializer']);
  return render();
}

const HomePage = () => {
  return (
    <SchemaComponent
      schema={{
        name: 'root',
        type: 'void',
        'x-component': 'Hello',
        'x-initializer': 'myInitializer', // 自定义的 Hello 组件支持 x-initializer 了
      }}
    />
  );
};

class PluginDemoUseSchemaInitializerRender extends Plugin {
  async load() {
    // 注册全局组件
    this.app.addComponents({ Hello, HomePage });
  }
}

// 快捷模拟一个 App
const app = createApp({ plugins: [PluginDemoUseSchemaInitializerRender] });

export default app.getRootComponent();
