# v0.16：2023-11-20

## 新機能

以前のバージョンではキャッシュの可用性が低く（メモリキャッシュのみサポート）、v0.16バージョンでは再構築され、メモリとRedisの2種類のストレージ（キャッシュ保存方法）が内蔵され、カスタムストレージもサポートされます。具体的な使用方法については[APIドキュメント](https://docs.nocobase.com/api/cache/cache-manager)を参照してください。

## 非互換の変更

### Nodeの最低バージョンが18に変更

Node v16はメンテナンスが終了したため、最低バージョンをv18に変更しました。

```json
{
  "engines": {
    "node": ">=18"
  }
}
```

### キャッシュ作成方法の変更

以前は`createCache`メソッドを使用してキャッシュを作成していましたが、このメソッドは廃止されました。

```ts
import { createCache } from '@nocobase/cache';

const cache = createCache();
```

新しいキャッシュは`CacheManager`によって一元管理され、`app.cacheManager`を通じて作成されます。

```ts
const cache = await app.cacheManager.createCache({
  name: 'memory', // キャッシュのユニーク識別子
  store: 'memory', // キャッシュ方式
  // その他のキャッシュ設定
  max: 2000,
  ttl: 60 * 1000,
});
```

### 環境変数の変更

以前のキャッシュ環境変数設定では、設定パラメータとしてJSON文字列を指定する必要がありました。

```bash
CACHE_CONFIG={"storePackage":"cache-manager-fs-hash","ttl":86400,"max":1000}
```

新しい環境変数：

```bash
# デフォルトのキャッシュ方式、値はキャッシュ方式のユニーク識別子
CACHE_DEFAULT_STORE=memory
# メモリキャッシュ項目の最大数
CACHE_MEMORY_MAX=2000
# Redis（オプション）
CACHE_REDIS_URL=redis://localhost:6379
```

## 完全な更新記録

- リファクタリング（キャッシュ）：キャッシュの改善 [`#3004`](https://github.com/nocobase/nocobase/pull/3004)
- 修正：ローカルストレージのベースURLの修正 [`#3063`](https://github.com/nocobase/nocobase/pull/3063)
- 機能追加：テーブル定義の表示機能 [`#3061`](https://github.com/nocobase/nocobase/pull/3061)
- 機能追加：MariaDBのサポート [`#3052`](https://github.com/nocobase/nocobase/pull/3052)
- 修正（プラグインワークフロー）：クライアントのマイナー修正 [`#3062`](https://github.com/nocobase/nocobase/pull/3062)
- 変更：ビュー推論の改善 [`#3060`](https://github.com/nocobase/nocobase/pull/3060)
- 修正：関連コレクションによるソートの修正 [`#3058`](https://github.com/nocobase/nocobase/pull/3058)
- 機能追加：Node.js バージョン >= 18 のサポート [`#3066`](https://github.com/nocobase/nocobase/pull/3066)

