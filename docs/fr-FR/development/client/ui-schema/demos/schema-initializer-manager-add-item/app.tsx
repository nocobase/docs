import {
  Application,
  CardItem,
  Grid,
  Plugin,
  SchemaComponent,
  SchemaInitializer,
  useSchemaInitializer,
} from '@nocobase/client';
import React from 'react';

const HelloPage = () => {
  return (
    <div>
      <SchemaComponent
        schema={{
          name: 'root',
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
    const myInitializer = new SchemaInitializer({
      name: 'myInitializer',
      title: 'Add block',
      wrap: Grid.wrap,
      items: [
        {
          name: 'otherBlocks',
          title: 'Other blocks',
          type: 'itemGroup',
          children: [
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
        },
      ],
    });
    this.schemaInitializerManager.add(myInitializer);
    this.app.addComponents({ Grid, CardItem });
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
