import { useFieldSchema } from '@formily/react';
import {
  Plugin,
  SchemaComponent,
  SchemaSettings,
  SchemaToolbar,
  Space,
  useSchemaToolbarRender,
} from '@nocobase/client';
import { Space as AntdSpace, Button } from 'antd';
import React from 'react';
import { createApp } from './app';

const MyToolbar = (props) => {
  return <SchemaToolbar showBorder={false} showBackground {...props} />;
};

const SchemaToolbarRenderer = (props) => {
  const fieldSchema = useFieldSchema();
  const { render } = useSchemaToolbarRender(fieldSchema);
  return render({ draggable: false });
};

const CustomButton = (props) => {
  return (
    <Button>
      <AntdSpace>
        {props.children}
        <SchemaToolbarRenderer />
      </AntdSpace>
    </Button>
  );
};

const HomePage = () => {
  return (
    <SchemaComponent
      schema={{
        type: 'void',
        name: 'root',
        'x-component': 'Space',
        properties: {
          hello1: {
            type: 'void',
            // 'x-toolbar': 'MyToolbar',
            'x-settings': 'mySettings',
            'x-component': 'CustomButton',
            'x-content': 'Hello1',
          },
          hello2: {
            type: 'void',
            'x-toolbar': 'MyToolbar',
            'x-settings': 'mySettings',
            'x-component': 'CustomButton',
            'x-content': 'Hello2',
          },
        },
      }}
    />
  );
};

class PluginDemoToolbar extends Plugin {
  async load() {
    this.app.addComponents({ HomePage, CustomButton, MyToolbar, Space });
    const mySettings = new SchemaSettings({
      name: 'mySettings',
      items: [],
    });
    this.schemaSettingsManager.add(mySettings);
  }
}

const app = createApp({ plugins: [PluginDemoToolbar] });

export default app.getRootComponent();
