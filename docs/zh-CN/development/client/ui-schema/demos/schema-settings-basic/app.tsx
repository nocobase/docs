import {
  Application,
  CardItem,
  FormItem,
  Input,
  Plugin,
  SchemaComponent,
  SchemaSettings,
} from '@nocobase/client';
import React from 'react';

const HelloPage = () => {
  return (
    <div>
      <SchemaComponent
        schema={{
          name: 'hello',
          type: 'void',
          'x-decorator': 'CardItem',
          'x-decorator-props': {
            title: '卡片',
            bordered: true,
          },
          'x-settings': 'mySettings',
          'x-component': 'h1',
          'x-content': 'Hello, World!',
        }}
      />
    </div>
  );
};

class PluginHello extends Plugin {
  async load() {
    const mySettings = new SchemaSettings({
      name: 'mySettings',
      items: [],
    });
    this.schemaSettingsManager.add(mySettings);
    this.app.addComponents({ CardItem, Input, FormItem });
    this.router.add('hello', {
      path: '/',
      Component: HelloPage,
    });
  }
}

export function createApp(options: any = {}) {
  const { plugins = [] } = options;
  return new Application({
    router: {
      type: 'memory',
      initialEntries: ['/'],
    },
    designable: true,
    plugins: [PluginHello, ...plugins],
  });
}
