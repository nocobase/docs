# v0.14：2023-09-12

v0.14では、製品環境でのプラグインの即挿即用を実現し、インターフェースを通じて直接プラグインを追加できるようになりました。npmレジストリ（プライベートも可能）からのダウンロード、ローカルアップロード、URLからのダウンロードがサポートされています。

## 新機能

### 新しいプラグイン管理画面

<img src="./6de7c906518b6c6643570292523b06c8.png" />

### アップロードされたプラグインは storage/plugins ディレクトリに配置

即挿即用のプラグインをアップロードするための storage/plugins ディレクトリが提供され、このディレクトリは npm パッケージ形式で整理されています。

```bash
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

### プラグインの更新

現在、更新操作は storage/plugins 内のプラグインにのみ適用されます。以下のようになります。

<img src="./703809b8cd74cc95e1ab2ab766980817.gif" />

備考：メンテナンスとアップグレードを容易にするため、アップグレードによって storage プラグインが使用不可になるのを避けるために、新しいプラグインを storage/plugins ディレクトリに直接配置した後、アップグレード操作を実行することも可能です。

## 非互換な変更

### プラグインディレクトリの変更

開発中のプラグインはすべて packages/plugins ディレクトリに統一して配置され、npm パッケージ形式で整理されています。

```diff
|- /packages/
- |- /plugins/acl/
+ |- /plugins/@nocobase/plugin-acl/
- |- /samples/hello/
+ |- /plugins/@nocobase/plugin-sample-hello/
```

新しいディレクトリ構造は次の通りです。

```bash
# 開発中のプラグイン
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/

# インターフェースから追加されたプラグイン
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

### プラグイン名の変更

- PLUGIN_PACKAGE_PREFIX 環境変数は提供されなくなります。
- プラグイン名とパッケージ名が統一され、古いプラグイン名はエイリアスとして残ります。

### pm add の改善

変更内容

```diff
- pm add sample-hello
+ pm add @nocobase/plugin-sample-hello
```

pm add パラメータ説明

```bash
# pluginName の代わりに packageName を使用し、ローカルで検索します。見つからない場合はエラーになります。
pm add packageName

# registry を指定した場合のみ、リモートからダウンロードします。バージョンも指定可能です。
pm add packageName --registry=xx --auth-token=yy --version=zz

# ローカルの圧縮ファイルを提供することもでき、複数回 add した場合は最後のものが置き換えられます。
pm add /a/plugin.zip

# リモートの圧縮ファイルは、同名の場合は直接置き換えられます。
pm add http://url/plugin.zip
```

### Nginx 設定の変更

新しい `/static/plugins/` ロケーションが追加されました。

```conf
server {
    location ^~ /static/plugins/ {
        proxy_pass http://127.0.0.1:13000/static/plugins/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_connect_timeout 600;
        proxy_send_timeout 600;
        proxy_read_timeout 600;
        send_timeout 600;
    }
}
```

さらに完全版の [nocobase.conf](https://github.com/nocobase/nocobase/blob/main/docker/nocobase/nocobase.conf) をご覧ください。

## プラグイン開発ガイド

[最初のプラグインを作成する](/development/your-first-plugin)

