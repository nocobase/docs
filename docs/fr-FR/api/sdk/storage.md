# Storage

## Overview

The `Storage` class is used for client-side information storage, defaulting to `localStorage`.

### Basic Usage

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

## Class Methods

### `setItem()`

Store content.

#### Signature

- `setItem(key: string, value: string): void`

### `getItem()`

Retrieve content.

#### Signature

- `getItem(key: string): string | null`

### `removeItem()`

Delete content.

#### Signature

- `removeItem(key: string): void`

### `clear()`

Clear all content.

#### Signature

- `clear(): void`
