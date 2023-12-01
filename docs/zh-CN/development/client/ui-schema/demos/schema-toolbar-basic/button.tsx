import { ISchema, useFieldSchema } from '@formily/react';
import {
  Plugin,
  SchemaComponent,
  SchemaSettings,
  SchemaToolbar,
  Space,
  useComponent,
  useDesignable,
} from '@nocobase/client';
import { Space as AntdSpace, Button } from 'antd';
import React, { useMemo } from 'react';
import { createApp } from './app';

const MyToolbar = (props) => {
  return <SchemaToolbar title="a" {...props} />;
};

const useSchemaToolbarRenderer = (fieldSchema: ISchema) => {
  const { designable } = useDesignable();
  const toolbar = useMemo(() => {
    if (fieldSchema['x-toolbar']) {
      return fieldSchema['x-toolbar'];
    }
    if (fieldSchema['x-settings']) {
      return SchemaToolbar;
    }
  }, [fieldSchema['x-toolbar']]);
  const Toolbar = useComponent(toolbar, SchemaToolbar);
  return {
    render(props?: any) {
      if (!designable) {
        return null;
      }
      return <Toolbar {...fieldSchema['x-toolbar-props']} {...props} />;
    },
  };
};

const SchemaToolbarRenderer = (props) => {
  const fieldSchema = useFieldSchema();
  const { render } = useSchemaToolbarRenderer(fieldSchema);
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
