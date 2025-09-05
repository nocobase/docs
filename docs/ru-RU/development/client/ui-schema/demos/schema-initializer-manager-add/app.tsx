import { Application, Plugin } from '@nocobase/client';

class PluginHome extends Plugin {
  async load() {
    this.router.add('home', {
      path: '/',
      Component: 'HomePage',
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
    plugins: [PluginHome, ...plugins],
  });
}
