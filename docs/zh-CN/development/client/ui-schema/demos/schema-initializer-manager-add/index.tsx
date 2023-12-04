import {
  Grid,
  Plugin,
  SchemaComponent,
  SchemaInitializer,
  useSchemaInitializer,
} from '@nocobase/client';
import React from 'react';
import { createApp } from './app';

const HomePage = () => {
  return (
    <SchemaComponent
      schema={{
        name: 'root',
        type: 'void',
        'x-component': 'Grid',
        'x-initializer': 'myInitializer',
      }}
    />
  );
};

class PluginDemoAddSchemaInitializer extends Plugin {
  async load() {
    // 注册全局组件
    this.app.addComponents({ Grid, HomePage });
    const myInitializer = new SchemaInitializer({
      name: 'myInitializer',
      title: 'Add block',
      wrap: Grid.wrap,
      items: [
        {
          name: 'helloBlock',
          type: 'item',
          useComponentProps() {
            const { insert } = useSchemaInitializer();
            return {
              title: 'Hello',
              onClick: () => {
                insert({
                  type: 'void',
                  'x-decorator': 'CardItem',
                  'x-component': 'h1',
                  'x-content': 'Hello, world!',
                });
              },
            };
          },
        },
      ],
    });
    this.schemaInitializerManager.add(myInitializer);
  }
}

// 快捷模拟一个 App
const app = createApp({ plugins: [PluginDemoAddSchemaInitializer] });

export default app.getRootComponent();
