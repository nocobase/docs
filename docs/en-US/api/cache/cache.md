# Cache

## Basic methods

Refer to the documentation of <a href="https://github.com/node-cache-manager/node-cache-manager" target="_blank">node-cache-manager</a>.

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

## Advanced methods

### `wrapWithCondition()`

Similar to the wrap() function, but allows conditional control over whether to use caching.

```ts
async wrapWithCondition<T>(
  key: string,
  fn: () => T | Promise<T>,
  options?: {
    // Decide whether to use the cached result according to the parameter
    useCache?: boolean;
    // Decide wheter to use the cached result accoding to the response value
    isCacheable?: (val: unknown) => boolean | Promise<boolean>;
    ttl?: Milliseconds;
  },
): Promise<T> {
```

### `setValueInObject()`

Modify the value of a specific key, when the cached content is an object.

```ts
async setValueInObject(key: string, objectKey: string, value: unknown)
```

### `getValueInObject()`

Retrive the value of a specific key, when the cached content is an object.

```ts
async getValueInObject(key: string, objectKey: string)
```
