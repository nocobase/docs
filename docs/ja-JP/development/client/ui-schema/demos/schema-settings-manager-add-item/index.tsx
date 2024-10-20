import { Plugin } from '@nocobase/client';
import { createApp } from './app';

class PluginDemoAddSchemaSettingsItem extends Plugin {
  async load() {
    const customItem = {
      name: 'custom',
      type: 'item',
      useComponentProps() {
        return {
          title: 'Custom',
          onClick: () => {},
        };
      },
    };

    this.schemaSettingsManager.addItem(
      'mySettings', // 示例，已存在的 schema settings name
      'customItem', // 新增的 item name
      customItem,
    );
  }
}

// 快捷模拟一个 App
const app = createApp({ 
  plugins: [PluginDemoAddSchemaSettingsItem],
});

export default app.getRootComponent();
