# グローバルコンテンツの表示

`Provider` を使用してグローバルコンテンツを表示できます。

## 例の説明

お知らせ機能を実装します。バックエンドからお知らせ情報が返された場合、ページの上部にそのお知らせを表示します。

この文書の完全な例のコードは [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-provider-content) で確認できます。

![img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg](https://static-docs.nocobase.com/img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg.jpg)

## プラグインの初期化

[最初のプラグインを書く](/development/your-fisrt-plugin) の文書に従い、プロジェクトがない場合は新しいプロジェクトを作成します。すでにプロジェクトがある場合やソースコードをクローンしている場合は、このステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-provider-content
yarn pm enable @nocobase-sample/plugin-provider-content
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) にアクセスすると、プラグインがインストールされ、有効になっていることを確認できます。

## 機能の実装

### 1. `Provider` コンポーネントの追加

`Provider` コンポーネントは通常の React コンポーネントですが、`children` をレンダリングすることに注意が必要です。

`packages/plugins/@nocobase-sample/plugin-provider-content/src/client/TopAnnouncement.tsx` を新規作成します。

```tsx | pure
import React, { FC, ReactNode } from 'react';
import { Alert, Affix, AlertProps } from 'antd';
import { useRequest } from '@nocobase/client';

const mockRequest = () => new Promise((resolve) => {
  Math.random() > 0.5 ?
    resolve({ data: { message: 'これは重要なお知らせです。', type: 'info' } }) :
    resolve({ data: undefined })
})

export const TopAnnouncement: FC<{ children: ReactNode }> = ({ children }) => {
  const { data, loading } = useRequest<{ data: { message: string; type: AlertProps['type'] } }>(mockRequest)

  const onClose = () => {
    console.log('onClose')
  }

  return (
    <>
      {
        !loading && !!data.data && <Affix offsetTop={0} style={{ zIndex: 1010 }}>
          <Alert
            message={data.data.message}
            type={data.data.type}
            style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none' }}
            closable
            onClose={onClose}
          />
        </Affix>
      }
      {children}
    </>
  );
};
```

お知らせの設定とデータについては [プラグインフォーム設定ページ](/plugin-samples/plugin-settings/form) の例を参考にしてください。ここではモックデータのみを使用します。

`children` をレンダリングすることをお忘れなく。

### 2. システムへの登録

`packages/plugins/@nocobase-sample/plugin-provider-content/src/index.ts` ファイルを修正し、`TopAnnouncement` コンポーネントをシステムに登録します。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { TopAnnouncement } from './TopAnnouncement';

export class PluginProviderContentClient extends Plugin {
  async load() {
    this.app.addProvider(TopAnnouncement)
  }
}

export default PluginProviderContentClient;
```

その後、[http://localhost:13000](http://localhost:13000) にアクセスすると、ページの上部にお知らせが表示されます。

![img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg](https://static-docs.nocobase.com/img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg.jpg)

## パッケージ化と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-fisrt-plugin#プラグインのビルドとパッケージ化) の文書に従って、プラグインをパッケージ化し、本番環境にアップロードします。

クローンしたソースコードの場合は、最初にフルビルドを実行し、プラグインの依存関係もビルドします。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合、次のコマンドを直接実行できます：

```bash
yarn build @nocobase-sample/plugin-provider-content --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-provider-content.tar.gz` ファイルが生成されます。その後、[アップロードの方法](/welcome/getting-started/plugin)に従ってインストールしてください。

