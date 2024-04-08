# Cache

## Basic Methods

You can refer to the documentation of [node-cache-manager](https://github.com/node-cache-manager/node-cache-manager).

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

## Other Methods

### `wrapWithCondition()`

Similar to `wrap()`, but can decide whether to use caching based on conditions.

```ts
async wrapWithCondition<T>(
  key: string,
  fn: () => T | Promise<T>,
  options?: {
    // External parameter to control whether to use cache results
    useCache?: boolean;
    // Determine whether to cache based on data results
    isCacheable?: (val: unknown) => boolean | Promise<boolean>;
    ttl?: Milliseconds;
  },
): Promise<T> {
```

### `setValueInObject()`

When the cached content is an object, changes the value of a specific key.

```ts
async setValueInObject(key: string, objectKey: string, value: unknown)
```

### `getValueInObject()`

When the cached content is an object, retrieves the value of a specific key.

```ts
async getValueInObject(key: string, objectKey: string)
```

### `delValueInObject()`

When the cached content is an object, deletes a specific key.

```ts
async delValueInObject(key: string, objectKey: string)
```
