**Type**

```typescript
interface DestroyOptions extends SequelizeDestroyOptions {
  filter?: Filter;
  filterByTk?: TargetKey | TargetKey[];
  truncate?: boolean;
  context?: any;
}
```

**Details**

- `filter`: Specifies the filtering conditions for the records to be deleted. For detailed usage of Filter, refer to the [`find()`](#find) method.
- `filterByTk`: Specifies the filtering conditions for the records to be deleted by TargetKey.
- `truncate`: Whether to truncate the table data, effective when no `filter` or `filterByTk` parameters are passed.
- `transaction`: Transaction object. If no transaction parameter is passed, the method will automatically create an internal transaction.
