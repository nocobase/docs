### データソース - 金仓（KingbaseES）

<PluginInfo licenseBundled="true" name="data-source-kingbase"></PluginInfo>

## 紹介

金仓（KingbaseES）データベースをデータソースとして使用することができます。これにより、主データベースとして、または外部データベースとしての利用が可能です。

:::warning
現在、pgモードで動作する金仓（KingbaseES）データベースのみサポートされています。
:::

## インストール

### 主データベースとして使用する場合

インストールの手順は [インストール概要](/welcome/getting-started/installation) を参照してください。主な違いは環境変数の設定です。

#### 環境変数

`.env` ファイルを編集し、以下の関連する環境変数を追加または変更します。

```bash
# 商用プラグイン取得用
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=your-username   # サービスプラットフォームのユーザー名
NOCOBASE_PKG_PASSWORD=your-password   # サービスプラットフォームのパスワード

# 実際の環境に合わせてDB関連パラメータを調整
DB_DIALECT=kingbase
DB_HOST=localhost
DB_PORT=54321
DB_DATABASE=kingbase
DB_USER=nocobase
DB_PASSWORD=nocobase
```

#### Docker版の設定

```yml
version: "3"

networks:
  nocobase:
    driver: bridge

  app:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    restart: always
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # 商用プラグイン取得用
      - NOCOBASE_PKG_URL=https://pkg.nocobase.com/
      - NOCOBASE_PKG_USERNAME=your-username   # サービスプラットフォームのユーザー名
      - NOCOBASE_PKG_PASSWORD=your-password   # サービスプラットフォームのパスワード
      # アプリケーションキー（ユーザーのトークン生成等に使用）
      # APP_KEYを変更すると、旧トークンは無効になります。
      - APP_KEY=your-secret-key
      # データベースの種類
      - DB_DIALECT=kingbase
      # データベースホスト（既存のデータベースサーバーのIPに置き換え可能）
      - DB_HOST=kingbase
      # データベース名
      - DB_DATABASE=kingbase
      # データベースユーザー
      - DB_USER=nocobase
      # データベースパスワード
      - DB_PASSWORD=nocobase
      # タイムゾーン
      - TZ=Asia/Tokyo
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"

  # テスト用のkingbaseサービス
  kingbase:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/kingbase:v009r001c001b0030_single_x86
    platform: linux/amd64
    restart: always
    privileged: true
    networks:
      - nocobase
    volumes:
      - ./storage/db/kingbase:/home/kingbase/userdata
    environment:
      ENABLE_CI: no # 必ずnoに設定
      DB_USER: nocobase
      DB_PASSWORD: nocobase
      DB_MODE: pg  # pgモードのみ対応
      NEED_START: yes
    command: ["/usr/sbin/init"]
```

#### `create-nocobase-app` を使用したインストール

```bash
yarn create nocobase-app my-nocobase-app -d kingbase \
   -e DB_HOST=localhost \
   -e DB_PORT=54321 \
   -e DB_DATABASE=kingbase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Tokyo
```

### 外部データベースとして使用する場合

`.env` ファイルを編集し、商用プラグイン取得用の環境変数を追加します。

```bash
# 商用プラグイン取得用
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=your-username   # サービスプラットフォームのユーザー名
NOCOBASE_PKG_PASSWORD=your-password   # サービスプラットフォームのパスワード
```

インストールまたはアップグレードコマンドを実行します。

```bash
yarn nocobase install
# または
yarn nocobase upgrade
```

プラグインを有効化します。

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

## 使用マニュアル

- 主データベースの場合：[使用マニュアル](/handbook) を参照
- 外部データベースの場合：[データソース / 外部データベース](/handbook/data-source-manager/external-database) を参照
