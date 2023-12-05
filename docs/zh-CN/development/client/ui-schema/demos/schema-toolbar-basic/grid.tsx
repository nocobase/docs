import { useFieldSchema } from '@formily/react';
import {
  CardItem,
  Grid,
  Plugin,
  SchemaComponent,
  SchemaInitializer,
  SchemaSettings,
  SchemaToolbar,
  useSchemaInitializer
} from '@nocobase/client';
import React from 'react';
import { createApp } from './app';

const MyToolbar = (props) => {
  const fieldSchema = useFieldSchema();
  return (
    <SchemaToolbar title="这是标题" settings={fieldSchema['x-settings']} {...props}/>
  );
};

const HomePage = () => {
  return (
    <SchemaComponent
      schema={{
        name: 'root',
        type: 'void',
        'x-initializer': 'myInitializer',
        'x-component': 'Grid',
        properties: {
          hello1: Grid.wrap({
            type: 'void',
            'x-decorator': 'CardItem',
            'x-decorator-props': {
              title: '内置 SchemaToolbar',
            },
            'x-settings': 'mySettings',
            'x-component': 'div',
            'x-content': 'Hello, World!',
          }),
          hello2: Grid.wrap({
            type: 'void',
            'x-decorator': 'CardItem',
            'x-decorator-props': {
              title: '自定义 MyToolbar',
            },
            'x-toolbar': 'MyToolbar',
            'x-settings': 'mySettings',
            'x-component': 'div',
            'x-content': 'Hello, World!',
          }),
        },
      }}
    />
  );
};

class PluginDemoToolbar extends Plugin {
  async load() {
    this.app.addComponents({ HomePage, CardItem, MyToolbar, Grid });
    const myInitializer = new SchemaInitializer({
      name: 'myInitializer',
      title: 'AddBlock',
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
                  'x-settings': 'mySettings',
                  'x-component': 'h1',
                  'x-content': 'Hello, world!',
                });
              },
            };
          },
        },
      ],
    });
    const mySettings = new SchemaSettings({
      name: 'mySettings',
      items: [],
    });
    this.schemaInitializerManager.add(myInitializer);
    this.schemaSettingsManager.add(mySettings);
  }
}

const app = createApp({ plugins: [PluginDemoToolbar] });

export default app.getRootComponent();
