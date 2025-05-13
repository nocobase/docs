# ICollection

`ICollection` is an interface for data models, which includes information such as the model's name, fields, associations, etc.

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

## Members

### repository

The `Repository` instance to which `ICollection` belongs.

## API

### updateOptions()

Updates the properties of the `Collection`.

#### Signature

- `updateOptions(options: any): void`

### setField()

Sets a field of the `Collection`.

#### Signature

- `setField(name: string, options: any): IField`

### removeField()

Removes a field from the `Collection`.

#### Signature

- `removeField(name: string): void`

### getFields()

Retrieves all fields of the `Collection`.

#### Signature

- `getFields(): Array<IField>`

### getField()

Retrieves a field of the `Collection` by name.

#### Signature

- `getField(name: string): IField`