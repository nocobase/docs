import { Plugin, useSchemaInitializer } from '@nocobase/client';
import { createApp } from './app';

class PluginDemoAddSchemaInitializerItem extends Plugin {
  async load() {
    const customItem = {
      name: 'custom',
      type: 'item',
      useComponentProps() {
        const { insert } = useSchemaInitializer();
        return {
          title: 'Custom',
          onClick: () => {
            insert({
              type: 'void',
              'x-decorator': 'CardItem',
              'x-component': 'h1',
              'x-content': 'Custom block',
            });
          },
        };
      },
    };

    this.schemaInitializerManager.addItem(
      'myInitializer', // 示例，已存在的 schema initializer
      'otherBlocks.custom', // 向 otherBlocks 分组内添加 custom
      customItem,
    );
  }
}

// 快捷模拟一个 App
const app = createApp({ plugins: [PluginDemoAddSchemaInitializerItem] });

export default app.getRootComponent();
