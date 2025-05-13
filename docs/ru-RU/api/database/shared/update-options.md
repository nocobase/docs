**Type**

```typescript
interface UpdateOptions extends Omit<SequelizeUpdateOptions, 'where'> {
  values: Values;
  filter?: Filter;
  filterByTk?: TargetKey;
  whitelist?: WhiteList;
  blacklist?: BlackList;
  updateAssociationValues?: AssociationKeysToBeUpdate;
  context?: any;
}
```

**Details**

- `values`: The data object of the records to be updated.
- `filter`: Specifies the filter conditions for the records to be updated. For detailed usage of Filter, refer to the [`find()`](#find) method.
- `filterByTk`: Specifies the filter conditions for the records to be updated by TargetKey.
- `whitelist`: A whitelist for the `values` fields. Only fields listed will be written.
- `blacklist`: A blacklist for the `values` fields. Fields listed will not be written.
- `transaction`: The transaction object. If no transaction parameter is passed, the method will automatically create an internal transaction.

At least one of `filterByTk` or `filter` must be provided.