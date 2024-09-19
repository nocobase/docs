import { useFieldSchema } from '@formily/react';
import {
  Plugin,
  SchemaComponent,
  useSchemaSettingsRender
} from '@nocobase/client';
import { Space } from 'antd';
import React from 'react';
import { createApp } from './app';

// 自定义 Hello 组件
const Hello = (props) => {
  return (
    <Space>
      {props.children}
      <HelloSettings />
    </Space>
  );
};

// 通过 useSchemaSettingsRender 来支持 x-settings 的渲染
const HelloSettings = () => {
  const fieldSchema = useFieldSchema();
  const { render } = useSchemaSettingsRender(fieldSchema['x-settings']);
  return render();
};

const HomePage = () => {
  return (
    <SchemaComponent
      schema={{
        name: 'hello',
        type: 'void',
        'x-decorator': 'Hello',
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

class PluginDemoUseSchemaInitializerRender extends Plugin {
  async load() {
    // 注册全局组件
    this.app.addComponents({ Hello, HomePage });
  }
}

// 快捷模拟一个 App
const app = createApp({ plugins: [PluginDemoUseSchemaInitializerRender] });

export default app.getRootComponent();
