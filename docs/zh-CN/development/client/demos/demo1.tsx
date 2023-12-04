import { Application, Plugin } from '@nocobase/client';
import React from 'react';

class PluginHello extends Plugin {
  async load() {
    this.router.add('hello', {
      path: '/',
      Component: () => <div>Hello NocoBase</div>,
    });
  }
}

const app = new Application({
  router: {
    type: 'hash',
  },
  plugins: [PluginHello],
});

export default app.getRootComponent();