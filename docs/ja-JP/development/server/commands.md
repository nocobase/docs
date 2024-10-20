# コマンドライン

プラグイン内でカスタムコマンドは、プラグインの `src/server/commands/*.ts` ディレクトリに配置する必要があります。内容は以下の通りです：

```ts
import { Application } from '@nocobase/server';

export default function(app: Application) {
  app
    .command('echo')
    .option('-v, --version')
    .action(async ([options]) => {
      console.log('Hello World!');
      if (options.version) {
        console.log('Current version:', await app.version.get());
      }
    });
}
```

:::warning
プラグインのカスタムコマンドは、プラグインがインストールされ、有効化された後でなければ機能しません。
:::

## コマンドの特別な設定

- `ipc()` アプリが実行中のとき、コマンドラインはIPCを通じて指示を送信し、実行中のアプリインスタンスを操作します。`ipc()`が設定されていない場合、新しいアプリインスタンスが作成され、操作が実行されます（実行中のアプリインスタンスには干渉しません）。
- `auth()` データベースの検証を行います。データベースの設定が正しくない場合、そのコマンドは実行されません。
- `preload()` アプリの設定を事前に読み込むかどうか、つまり `app.load()` を実行するかどうかを指定します。

これらの設定は、コマンドの実際の用途に応じて調整できます。例は以下の通りです：

```ts
app.command('a').ipc().action()
app.command('a').auth().action()
app.command('a').preload().action()
```

