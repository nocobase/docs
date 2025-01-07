# ストレージ

## 概要

`Storage` クラスはクライアント側の情報を保存するために使用され、デフォルトで `localStorage` を使用します。

### 基本的な使用法

```ts
export abstract class Storage {
  abstract clear(): void;
  abstract getItem(key: string): string | null;
  abstract removeItem(key: string): void;
  abstract setItem(key: string, value: string): void;
}

export class CustomStorage extends Storage {
  // ...
}
```

## クラスメソッド

### `setItem()`

内容を保存します。

#### シグネチャ

- `setItem(key: string, value: string): void`

### `getItem()`

内容を取得します。

#### シグネチャ

- `getItem(key: string): string | null`

### `removeItem()`

内容を削除します。

#### シグネチャ

- `removeItem(key: string): void`

### `clear()`

全ての内容をクリアします。

#### シグネチャ

- `clear(): void`
