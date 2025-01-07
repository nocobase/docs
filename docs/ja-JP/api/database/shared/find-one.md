**タイプ**

```typescript
type FindOneOptions = Omit<FindOptions, 'limit'>;
```

**パラメータ**

大部分のパラメータは `find()` と同じですが、`findOne()` は単一のデータのみを返すため、`limit` パラメータは不要で、クエリ時には常に `1` となります。