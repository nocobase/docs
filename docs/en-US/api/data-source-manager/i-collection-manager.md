# ICollectionManager

```ts
export interface ICollectionManager {
  registerFieldTypes(types: Record<string, any>): void;
  registerFieldInterfaces(interfaces: Record<string, any>): void;
  registerCollectionTemplates(templates: Record<string, any>): void;
  registerModels(models: Record<string, any>): void;
  registerRepositories(repositories: Record<string, any>): void;

  getRegisteredRepository(key: string): IRepository;

  defineCollection(options: CollectionOptions): ICollection;

  extendCollection(collectionOptions: CollectionOptions, mergeOptions?: MergeOptions): ICollection;

  hasCollection(name: string): boolean;
  getCollection(name: string): ICollection;

  getCollections(): Array<ICollection>;
  getRepository(name: string, sourceId?: string | number): IRepository;
  sync(): Promise<void>;
}
```