# create-nocobase-app デプロイ

他のプロセスは [create-nocobase-app インストール](/welcome/getting-started/installation/create-nocobase-app) と同様です。

<embed src="./env-note.md"></embed>
- 本番環境にデプロイする際は、サイズを減らすために必要な依存関係のみをインストールします。`yarn install --production`

<br />

[>>> 詳細については、「環境変数」の完全なリストを参照してください <<<](/welcome/getting-started/env)

## アプリケーションプロセスの管理

NocoBase は [PM2](https://pm2.keymetrics.io/) を内蔵しており、アプリケーションプロセスを管理します。本番環境では、直接 `yarn start` を実行できます。バックグラウンドで実行させたい場合は、 `-d` 引数を追加すればよい。例えば：

```bash
# バックグラウンドで実行
yarn start -d
```

再起動するには：

```bash
yarn nocobase pm2-restart
```

停止するには：

```bash
yarn nocobase pm2-stop
```

その他の PM2 コマンドは以下の通りです：

```bash
yarn nocobase pm2 -h
```

## Nginx の設定

本番環境では、静的ファイルを Nginx に代理させることを検討できます。NocoBase は Nginx 設定ファイルを生成するための `create-nginx-conf` コマンドを提供しています。

```bash
yarn nocobase create-nginx-conf
```

生成されたファイルへのパスは `./storage/nocobase.conf` で、実際の状況に応じて調整し、最後に `/etc/nginx/sites-enabled` に追加します。例えば：

```bash
ln -s /app/nocobase/storage/nocobase.conf /etc/nginx/sites-enabled/nocobase.conf
```

**備考**

- サブパスにデプロイする場合は、`APP_PUBLIC_PATH` 環境変数を設定する必要があります。設定後、`create-nginx-conf` コマンドを再実行してください。
- 実際の状況に応じて生成された `nocobase.conf` を修正してください。例えば、ドメイン名の設定などが含まれます。
- `/app/nocobase/` はサンプル・アプリケーションが置かれているディレクトリであり、実際の状況に応じて調整が必要です。
- `/etc/nginx/sites-enabled` はデフォルトの Nginx 設定パスであり、実際の状況によって異なる場合があります。`nginx -V` コマンドで確認できます。
- Nginx を使用していない場合は、Nginx の設定を参考にして調整を行ってください。

