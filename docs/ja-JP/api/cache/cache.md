# キャッシュ

## 基本メソッド

<a href="https://github.com/node-cache-manager/node-cache-manager" target="_blank">node-cache-manager</a> のドキュメントを参照してください。

- `get()`
- `set()`
- `del()`
- `reset()`
- `wrap()`
- `mset()`
- `mget()`
- `mdel()`
- `keys()`
- `ttl()`

## その他のメソッド

### `wrapWithCondition()`

`wrap()` と同様の機能ですが、条件に基づいてキャッシュを使用するかどうかを決定できます。

```ts
async wrapWithCondition<T>(
  key: string,
  fn: () => T | Promise<T>,
  options?: {
    // 外部パラメータでキャッシュ結果を使用するかどうかを制御
    useCache?: boolean;
    // データ結果に基づいてキャッシュするかどうかを決定
    isCacheable?: (val: unknown) => boolean | Promise<boolean>;
    ttl?: Milliseconds;
  },
): Promise<T> {
```

### `setValueInObject()`

キャッシュ内容がオブジェクトの場合、特定のキーの値を変更します。

```ts
async setValueInObject(key: string, objectKey: string, value: unknown)
```

### `getValueInObject()`

キャッシュ内容がオブジェクトの場合、特定のキーの値を取得します。

```ts
async getValueInObject(key: string, objectKey: string)
```

### `delValueInObject()`

キャッシュ内容がオブジェクトの場合、特定のキーを削除します。

```ts
async delValueInObject(key: string, objectKey: string)
```