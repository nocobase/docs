import { Application, Plugin, SchemaInitializer, useSchemaInitializer } from '@nocobase/client';

class PluginHome extends Plugin {
  async load() {
    this.router.add('home', {
      path: '/',
      Component: 'HomePage',
    });
    const myInitializer = new SchemaInitializer({
      name: 'myInitializer',
      title: 'Add block',
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
                  'x-component': 'h1',
                  'x-content': 'Hello, world!',
                });
              },
            };
          },
        },
      ],
    });
    this.schemaInitializerManager.add(myInitializer);
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
    plugins: [PluginHome, ...plugins],
  });
}
