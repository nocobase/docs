import { Application, Plugin, SchemaSettings } from '@nocobase/client';

class PluginHome extends Plugin {
  async load() {
    this.router.add('home', {
      path: '/',
      Component: 'HomePage',
    });
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
