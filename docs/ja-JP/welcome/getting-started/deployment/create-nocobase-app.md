# create-nocobase-app デプロイ

他のプロセスは [create-nocobase-app のインストール](/welcome/getting-started/installation/create-nocobase-app) と同様です。

<embed src="./env-note.md"></embed>
- 本番環境でデプロイする際は、サイズを削減するために、必要な依存関係のみを `yarn install --production` でインストールしてください。

<br />

[>>> 詳細については、完全な「環境変数」リストをご覧ください <<<](/welcome/getting-started/env)

## アプリケーションプロセスの管理

NocoBase は [PM2](https://pm2.keymetrics.io/) を内蔵しており、アプリケーションプロセスを管理します。本番環境では、`yarn start` を直接使用できます。バックグラウンドで実行する必要がある場合は、`-d` パラメータを追加してください。例えば：

```bash
# バックグラウンドで実行
yarn start -d
```

再起動するには

```bash
yarn nocobase pm2-restart
```

停止するには

```bash
yarn nocobase pm2-stop
```

PM2 コマンドの詳細は

```bash
yarn nocobase pm2 -h
```

## Nginx の設定

本番環境では、静的ファイルを Nginx にプロキシさせることを考慮できます。NocoBase は Nginx 設定ファイルを生成するための `create-nginx-conf` コマンドを提供しています。

```bash
yarn nocobase create-nginx-conf
```

生成されたファイルへのパスは `./storage/nocobase.conf` で、実際の状況に応じて調整し、最後に `/etc/nginx/sites-enabled` に追加します。例えば：

```bash
ln -s /app/nocobase/storage/nocobase.conf /etc/nginx/sites-enabled/nocobase.conf
```

**備考**

- サブパスにデプロイする場合、`APP_PUBLIC_PATH` 環境変数を設定する必要があります。設定後、`create-nginx-conf` コマンドを再実行してください；
- 生成された `nocobase.conf` は実際の状況に応じて修正し、ドメイン名の設定などを行ってください；
- `/app/nocobase/` はサンプルアプリケーションが存在するディレクトリであるため、実際の状況に応じて調整が必要です；
- `/etc/nginx/sites-enabled` はデフォルトの Nginx 設定パスですが、実際には異なる場合があります。`nginx -V` コマンドで確認できます；
- Nginx を使用しない場合は、Nginx の設定を参考にして調整を行ってください。
