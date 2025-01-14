**タイプ**

```typescript
interface DestroyOptions extends SequelizeDestroyOptions {
  filter?: Filter;
  filterByTk?: TargetKey | TargetKey[];
  truncate?: boolean;
  context?: any;
}
```

**詳細情報**

- `filter`：削除するレコードのフィルタ条件を指定します。Filter の詳細な使用方法は [`find()`](#find) メソッドを参照してください。
- `filterByTk`：TargetKey に基づいて削除するレコードのフィルタ条件を指定します。
- `truncate`: テーブルデータをクリアするかどうかを指定します。`filter` または `filterByTk` パラメータが渡されていない場合に有効です。
- `transaction`: トランザクションオブジェクト。トランザクションパラメータが渡されていない場合、このメソッドは自動的に内部トランザクションを作成します。