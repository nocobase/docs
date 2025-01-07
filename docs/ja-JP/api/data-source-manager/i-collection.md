# ICollection

`ICollection` はデータモデルのインターフェースであり、モデルの名前、フィールド、関連情報などが含まれています。

```typescript
export interface ICollection {
  repository: IRepository;

  updateOptions(options: any): void;

  setField(name: string, options: any): IField;

  removeField(name: string): void;

  getFields(): Array<IField>;

  getField(name: string): IField;

  [key: string]: any;
}
```

## メンバー

### repository

`ICollection` が属する `Repository` インスタンス

## API

### updateOptions()

`Collection` の属性を更新します

#### シグネチャ

- `updateOptions(options: any): void`

### setField()

`Collection` のフィールドを設定します

#### シグネチャ

- `setField(name: string, options: any): IField`

### removeField()

`Collection` のフィールドを削除します

#### シグネチャ

- `removeField(name: string): void`

### getFields()

`Collection` のすべてのフィールドを取得します

#### シグネチャ

- `getFields(): Array<IField>`

### getField()

名前で `Collection` のフィールドを取得します

#### シグネチャ

- `getField(name: string): IField`