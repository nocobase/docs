import { useFieldSchema } from '@formily/react';
import {
  CardItem,
  Plugin,
  SchemaComponent,
  SchemaSettings,
  SchemaToolbar
} from '@nocobase/client';
import React from 'react';
import { createApp } from './app';

const MyToolbar = (props) => {
  const fieldSchema = useFieldSchema();
  return (
    <SchemaToolbar title="Title here" settings={fieldSchema['x-settings']} {...props}/>
  );
};

const HomePage = () => {
  return (
    <SchemaComponent
      schema={{
        name: 'hello',
        type: 'void',
        'x-decorator': 'CardItem',
        'x-toolbar': 'MyToolbar',
        'x-settings': 'mySettings',
        'x-component': 'div',
        'x-content': 'This is a BlockItem',
      }}
    />
  );
};

class PluginDemoToolbar extends Plugin {
  async load() {
    this.app.addComponents({ HomePage, CardItem, MyToolbar });
    const mySettings = new SchemaSettings({
      name: 'mySettings',
      items: [],
    });
    this.schemaSettingsManager.add(mySettings);
  }
}

const app = createApp({ plugins: [PluginDemoToolbar] });

export default app.getRootComponent();
