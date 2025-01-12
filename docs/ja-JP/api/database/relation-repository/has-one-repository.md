# HasOneRepository

## 概要

`HasOneRepository` は `HasOne` タイプの関連 Repository です。

```typescript
const User = db.collection({
  name: 'users',
  fields: [
    { type: 'hasOne', name: 'profile' },
    { type: 'string', name: 'name' },
  ],
});

const Profile = db.collection({
  name: 'profiles',
  fields: [{ type: 'string', name: 'avatar' }],
});

const user = await User.repository.create({
  values: { name: 'u1' },
});

// 関連 Repository を取得
const userProfileRepository = User.repository
  .relation('profile')
  .of(user.get('id'));

// 直接初期化も可能
new HasOneRepository(User, 'profile', user.get('id'));
```

## クラスメソッド

### `find()`

関連オブジェクトを検索します。

**シグネチャ**

- `async find(options?: SingleRelationFindOption): Promise<Model<any> | null>`

**タイプ**

```typescript
interface SingleRelationFindOption extends Transactionable {
  fields?: Fields;
  except?: Except;
  appends?: Appends;
  filter?: Filter;
}
```

**詳細**

クエリパラメータは [`Repository.find()`](../repository.md#find) と一致します。

**例**

```typescript
const profile = await UserProfileRepository.find();
// 関連オブジェクトが存在しない場合、null を返します
```

### `create()`

関連オブジェクトを作成します。

**シグネチャ**

- `async create(options?: CreateOptions): Promise<Model>`

<embed src="../shared/create-options.md"></embed>

**例**

```typescript
const profile = await UserProfileRepository.create({
  values: { avatar: 'avatar1' },
});

console.log(profile.toJSON());
/*
{
  id: 1,
  avatar: 'avatar1',
  userId: 1,
  updatedAt: 2022-09-24T13:59:40.025Z,
  createdAt: 2022-09-24T13:59:40.025Z
}
*/
```

### `update()`

関連オブジェクトを更新します。

**シグネチャ**

- `async update(options: UpdateOptions): Promise<Model>`

<embed src="../shared/update-options.md"></embed>

**例**

```typescript
const profile = await UserProfileRepository.update({
  values: { avatar: 'avatar2' },
});

profile.get('avatar'); // 'avatar2'
```

### `remove()`

関連オブジェクトを削除せずに関連関係を解除します。

**シグネチャ**

- `async remove(options?: Transactionable): Promise<void>`

**詳細**

- `transaction`: トランザクションオブジェクト。トランザクションパラメータが渡されない場合、このメソッドは内部でトランザクションを作成します。

**例**

```typescript
await UserProfileRepository.remove();
(await UserProfileRepository.find()) == null; // true

(await Profile.repository.count()) === 1; // true
```

### `destroy()`

関連オブジェクトを削除します。

**シグネチャ**

- `async destroy(options?: Transactionable): Promise<Boolean>`

**詳細**

- `transaction`: トランザクションオブジェクト。トランザクションパラメータが渡されない場合、このメソッドは内部でトランザクションを作成します。

**例**

```typescript
await UserProfileRepository.destroy();
(await UserProfileRepository.find()) == null; // true
(await Profile.repository.count()) === 0; // true
```

### `set()`

関連オブジェクトを設定します。

**シグネチャ**

- `async set(options: TargetKey | SetOption): Promise<void>`

**タイプ**

```typescript
interface SetOption extends Transactionable {
  tk?: TargetKey;
}
```

**詳細**

- tk: 関連オブジェクトの targetKey を設定します
- transaction: トランザクションオブジェクト。トランザクションパラメータが渡されない場合、このメソッドは内部でトランザクションを作成します。

**例**

```typescript
const newProfile = await Profile.repository.create({
  values: { avatar: 'avatar2' },
});

await UserProfileRepository.set(newProfile.get('id'));

(await UserProfileRepository.find()).get('id') === newProfile.get('id'); // true
```