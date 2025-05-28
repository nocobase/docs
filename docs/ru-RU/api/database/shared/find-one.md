**Type**

```typescript
type FindOneOptions = Omit<FindOptions, 'limit'>;
```

**Parameters**

Most parameters are the same as those in `find()`. The difference is that `findOne()` returns only a single piece of data, so the `limit` parameter is not needed, and the query is always set to `1`.
