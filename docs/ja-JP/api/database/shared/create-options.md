**タイプ**

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

**詳細情報**

- `values`：作成するレコードのデータオブジェクト。
- `whitelist`：作成するレコードのデータオブジェクトにおいて、どのフィールドが**書き込み可能**かを指定します。このパラメータが渡されない場合、デフォルトですべてのフィールドが書き込み可能となります。
- `blacklist`：作成するレコードのデータオブジェクトにおいて、どのフィールドが**書き込み不可**かを指定します。このパラメータが渡されない場合、デフォルトですべてのフィールドが書き込み可能となります。
- `transaction`: トランザクションオブジェクト。トランザクションパラメータが渡されない場合、このメソッドは自動的に内部トランザクションを作成します。