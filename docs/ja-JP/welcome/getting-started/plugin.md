# 独立プラグインのインストールとアップグレード

## インターフェースを通じてプラグインをインストールおよび更新する

この方法は非常に簡単ですが、一つずつ追加、アクティブ化、更新する必要があります。

:::warning{title="注意"}
インターフェースを通じたインストールとアップグレードの方法は、共有コードの多アプリケーションシーンには適していません。
:::

### 1. プラグインパッケージを取得する

- NocoBaseが提供する商業プラグインの場合は、商業ユーザーサービスプラットフォームからダウンロードしてください。
- 自作プラグインの場合は、[最初のプラグインを書く](/development/your-first-plugin)の手順を参考にして、プラグインを構築しパッケージ化します。

### 2. プラグインを追加する

プラグインパッケージをアップロードして追加します。

![20240424221258_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424221258_rec_.gif)

### 3. プラグインをアクティブ化する

アップロードしたプラグインをアクティブ化します。

![20240424220854](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424220854.png)

### 4. プラグインを更新する

更新するプラグインパッケージをアップロードして更新を提出します。

:::warning
- プリセットのプラグインは、メインアプリケーションとともにアップグレードされ、「更新」の操作はありません。
- プラグインをアップグレードするには、プラグインの「更新」アクションをクリックします。プラグインを削除してから追加してアップグレードしないでください。
:::

![20240424221119_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424221119_rec_.gif)

## コマンドラインを通じてプラグインをインストールおよび更新する

バッチ処理をサポートしており、アプリケーションの更新によってプラグインが互換性がなくなり起動できない場合でも、コマンドラインの方法で処理できます。

### 0. Dockerバージョンは、まずコンテナに入る必要があります。

```bash
docker-compose exec app bash
```

### 1. プラグインがあるnpmレジストリにログインする

コマンドラインでnpmレジストリを使用してプラグインを追加・更新することをお勧めします。例えば、NocoBase商業プラグインのnpmレジストリは https://pkg.nocobase.com/ です。

```bash
npm login --registry=https://pkg.nocobase.com/
```

### 2. プラグインを追加する

```bash
yarn pm add @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed --registry=https://pkg.nocobase.com/
```

より多くの使用法については [`pm add`](#) を参照してください。

### 3. プラグインを有効化する

```bash
yarn pm enable @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed
```

### 4. プラグインを更新する

:::warning
アプリケーションとプラグインを同時にアップグレードする必要がある場合は、[NocoBase アップグレード概要](/welcome/getting-started/upgrading) を参照し、まず NocoBase を最新バージョンにアップグレードしてから `pm update` コマンドを実行してください。
:::

```bash
yarn pm update @nocobase/plugin-data-source-external-mysql @nocobase/plugin-embed --registry=https://pkg.nocobase.com/
```

より多くの使用法については [`pm update`](#) を参照してください。

