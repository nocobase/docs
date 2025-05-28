**Type**

```typescript
type WhiteList = string[];
type BlackList = string[];
type AssociationKeysToBeUpdate = string[];

interface CreateOptions extends SequelizeCreateOptions {
  values?: Values;
  whitelist?: WhiteList;
  blacklist?: BlackList;
  updateAssociationValues?: AssociationKeysToBeUpdate;
  context?: any;
}
```

**Details**

- `values`: The data object of the record to be created.
- `whitelist`: Specifies which fields in the data object of the record to be created **can be written**. If this parameter is not passed, all fields are allowed to be written by default.
- `blacklist`: Specifies which fields in the data object of the record to be created **are not allowed to be written**. If this parameter is not passed, all fields are allowed to be written by default.
- `transaction`: The transaction object. If no transaction parameter is passed, the method will automatically create an internal transaction.
