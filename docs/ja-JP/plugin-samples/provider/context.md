# グローバルコンテキスト

多くの場合、テーマや権限など、どこからでもアクセスできるデータをグローバルコンテキストに保存する必要があります。

## 実例

特定の機能を制御するための機能スイッチプラグインを実装する必要があります。

この文書の完全なサンプルコードは [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-provider-context) で確認できます。

## プラグインの初期化

[最初のプラグインを書く](/development/your-first-plugin) ドキュメントに従って、プロジェクトがない場合は新しいプロジェクトを作成し、既にプロジェクトがある場合やクローンしたソースがある場合はこのステップをスキップします。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化してシステムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-provider-context
yarn pm enable @nocobase-sample/plugin-provider-context
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後に [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) にアクセスすると、プラグインがインストールされ、有効になっていることが確認できます。

## 機能実装

コンテキストの実装には React の `Context` 機能を使用します。

### 1. コンテキストの作成

```tsx | pure
import { useRequest } from '@nocobase/client';
import { Spin } from 'antd';
import React, { FC, createContext, ReactNode } from 'react';

const FeaturesContext = createContext<Record<string, boolean>>({});

const mockRequest = () => new Promise((resolve) => {
  resolve({ data: { feature1: true, feature2: false } });
});

export const FeaturesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { loading, data } = useRequest<{ data: Record<string, boolean> }>(mockRequest);

  if (loading) return <Spin />;

  return <FeaturesContext.Provider value={data.data}>{children}</FeaturesContext.Provider>;
};

export const useFeatures = () => React.useContext(FeaturesContext);

export const useFeature = (feature: string) => {
  const features = useFeatures();
  return features[feature];
};
```

`children` を忘れずにレンダリングしてください。

`features` の設定やデータについては [プラグインフォーム設定ページ](/plugin-samples/plugin-settings/form) のサンプル説明を参照してください。ここではモックデータを使用します。

### 2. システムへの登録

`packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts` ファイルを修正して、`FeaturesProvider` コンポーネントをシステムに登録します。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { FeaturesProvider } from './FeaturesProvider';

export class PluginProviderContextClient extends Plugin {
  async load() {
    this.app.addProvider(FeaturesProvider);
  }
}

export default PluginProviderContextClient;
```

### 3. コンテキストデータのアクセス

コンテキストにアクセスする必要がある場所では、`useFeatures` と `useFeature` メソッドを使用できます。

ここには2つの状況があります。一つはこのプラグイン内で使用する場合、もう一つは他のプラグイン内で使用する場合です。

#### 3.1 このプラグイン内で使用

`packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts` ファイルを修正して、コンテキストデータをテストするためのテストページを追加します。

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';

import { FeaturesProvider, useFeature } from './FeaturesProvider';

const TestPage = () => {
  const feature1 = useFeature('feature1');
  const feature2 = useFeature('feature2');

  return (
    <div>
      <h1>Feature1: {feature1 ? '有効' : '無効'}</h1>
      <h1>Feature2: {feature2 ? '有効' : '無効'}</h1>
    </div>
  );
};

export class PluginProviderContextClient extends Plugin {
  async load() {
    this.app.addProvider(FeaturesProvider);
    this.app.router.add(`admin.features-test`, {
      path: '/admin/features-test',
      Component: TestPage,
    });
  }
}

export default PluginProviderContextClient;
```

次に、[http://localhost:13000/admin/features-test](http://localhost:13000/admin/features-test) にアクセスすると、コンテキストデータが表示されます。

![img_v3_02av_51b7cb08-1b42-42f4-b553-49b4e3f217bg](https://static-docs.nocobase.com/img_v3_02av_51b7cb08-1b42-42f4-b553-49b4e3f217bg.jpg)

#### 3.2 他のプラグインでの使用

他のプラグインで使用する必要がある場合、`useFeatures` と `useFeature` メソッドをエクスポートする必要があります。

`packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts` ファイルを次のように修正してください：

```tsx | pure
export { useFeatures, useFeature } from './FeaturesProvider';
```

その後、`useFeatures` と `useFeature` メソッドを使用できるようになります。

```tsx | pure
import { useFeature } from '@nocobase-sample/plugin-provider-context/client';
```

ここでは `'@nocobase-sample/plugin-provider-context/client'` とし、 `'@nocobase-sample/plugin-provider-context'` ではないことに注意してください。

## パッケージ化と本番環境へのアップロード

[プラグインの構築とパッケージ化](/development/your-first-plugin#build-and-package-plugin) ドキュメントに従って、プラグインをパッケージ化し、本番環境にアップロードできます。

クローンしたソースコードの場合、最初にフルビルドを一度実行し、プラグインの依存関係を構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合、次のように直接実行できます：

```bash
yarn build @nocobase-sample/plugin-provider-context --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-provider-context.tar.gz` ファイルが生成されますので、[アップロードの方法](/welcome/getting-started/plugin)に従ってインストールを行ってください。

