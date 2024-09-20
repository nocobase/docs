import {
  Application,
  CardItem,
  Plugin,
  SchemaComponent,
  SchemaSettings
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
      items: [
        {
          type: 'item',
          name: 'edit',
          useComponentProps() {
            // TODO: 补充相关设置逻辑
            return {
              title: 'Edit',
              onClick() {
                // todo
              },
            };
          },
        },
      ],
    });
    this.schemaSettingsManager.add(mySettings);
    this.app.addComponents({ CardItem });
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
