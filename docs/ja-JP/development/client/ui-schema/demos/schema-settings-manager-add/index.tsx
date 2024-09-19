import {
  CardItem,
  Plugin,
  SchemaComponent,
  SchemaSettings,
} from '@nocobase/client';
import React from 'react';
import { createApp } from './app';

const HomePage = () => {
  return (
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
  );
};

class PluginDemoAddSchemaSettings extends Plugin {
  async load() {
    // 注册全局组件
    this.app.addComponents({ CardItem, HomePage });
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
  }
}

// 快捷模拟一个 App
const app = createApp({ plugins: [PluginDemoAddSchemaSettings] });

export default app.getRootComponent();
