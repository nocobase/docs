import {
  Application,
  CardItem,
  Grid,
  Plugin,
  SchemaComponent,
  SchemaInitializer,
  SchemaInitializerItem,
  useSchemaInitializer,
  useSchemaInitializerItem,
} from '@nocobase/client';
import React from 'react';

const Hello = () => <h1>Hello NocoBase</h1>;

const myInitializer = new SchemaInitializer({
  name: 'myInitializer',
  //  按钮标题标题
  title: 'Add block',
  wrap: Grid.wrap,
  items: [
    {
      name: 'demo1',
      title: 'Hello block',
      Component: () => {
        const itemConfig = useSchemaInitializerItem();
        // 调用插入功能
        const { insert } = useSchemaInitializer();
        const handleClick = () => {
          insert({
            type: 'void',
            'x-component': 'Hello',
          });
        };
        return <SchemaInitializerItem title={itemConfig.title} onClick={handleClick}></SchemaInitializerItem>;
      },
    },
  ],
});

const HelloPage = () => {
  return (
    <div>
      <SchemaComponent
        schema={{
          name: 'hello',
          type: 'void',
          'x-component': 'Grid',
          'x-initializer': 'myInitializer',
        }}
      />
    </div>
  );
};

class PluginHello extends Plugin {
  async load() {
    this.app.addComponents({ Grid, CardItem, Hello });
    this.router.add('hello', {
      path: '/',
      Component: HelloPage,
    });
    this.app.schemaInitializerManager.add(myInitializer);
  }
}

const app = new Application({
  router: {
    type: 'memory',
  },
  // 为了更好的展示 demo，直接将 designable 设置为 true
  designable: true,
  plugins: [PluginHello],
});

export default app.getRootComponent();
