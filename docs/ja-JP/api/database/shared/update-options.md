**タイプ**

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

**詳細情報**

- `values`：更新するレコードのデータオブジェクト。
- `filter`：更新するレコードのフィルタ条件を指定します。Filterの詳細な使用方法は[`find()`](#find)メソッドを参照してください。
- `filterByTk`：TargetKeyを使用して更新するレコードのフィルタ条件を指定します。
- `whitelist`: `values`フィールドのホワイトリスト。リスト内のフィールドのみが書き込まれます。
- `blacklist`: `values`フィールドのブラックリスト。リスト内のフィールドは書き込まれません。
- `transaction`: トランザクションオブジェクト。トランザクションパラメータが渡されない場合、このメソッドは内部でトランザクションを自動的に作成します。

`filterByTk`と`filter`の少なくともどちらか一方を指定する必要があります。