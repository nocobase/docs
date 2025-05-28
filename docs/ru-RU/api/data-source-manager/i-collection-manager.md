# ICollectionManager

The `ICollectionManager` interface is used to manage `Collection` instances of data sources.

## API

### registerFieldTypes()

Registers the field types in a `Collection`.

#### Signature

- `registerFieldTypes(types: Record<string, any>): void`

### registerFieldInterfaces()

Registers the `Interface` for a `Collection`.

#### Signature

- `registerFieldInterfaces(interfaces: Record<string, any>): void`

### registerCollectionTemplates()

Registers `Collection Templates`.

#### Signature

- `registerCollectionTemplates(templates: Record<string, any>): void`

### registerModels()

Registers `Models`.

#### Signature

- `registerModels(models: Record<string, any>): void`

### registerRepositories()

Registers `Repositories`.

#### Signature

- `registerRepositories(repositories: Record<string, any>): void`

### getRegisteredRepository()

Retrieves an instance of a registered repository.

#### Signature

- `getRegisteredRepository(key: string): IRepository`

### defineCollection()

Defines a `Collection`.

#### Signature

- `defineCollection(options: CollectionOptions): ICollection`

### extendCollection()

Modifies an existing `Collection` property.

#### Signature

- `extendCollection(collectionOptions: CollectionOptions, mergeOptions?: MergeOptions): ICollection`

### hasCollection()

Determines if a `Collection` exists.

#### Signature

- `hasCollection(name: string): boolean`

### getCollection()

Retrieves an instance of a `Collection`.

#### Signature

- `getCollection(name: string): ICollection`

### getCollections()

Retrieves all instances of `Collection`.

#### Signature

- `getCollections(): Array<ICollection>`

### getRepository()

Retrieves an instance of a `Repository`.

#### Signature

- `getRepository(name: string, sourceId?: string | number): IRepository`

### sync()

Synchronizes the data source, with the logic implemented by subclasses.

#### Signature

- `sync(): Promise<void>`
