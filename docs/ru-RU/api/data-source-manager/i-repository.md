# IRepository

The `Repository` interface defines a series of model operation methods for adapting CRUD (Create, Read, Update, Delete) operations on data sources.

## API

### find()

Returns a list of models that match the query parameters.

#### Signature

- `find(options?: any): Promise<IModel[]>`

### findOne()

Returns the first model that matches the query parameters. If multiple models match, only the first one is returned.

#### Signature

- `findOne(options?: any): Promise<IModel>`

### count()

Returns the number of models that match the query parameters.

#### Signature

- `count(options?: any): Promise<Number>`

### findAndCount()

Returns both the list of models and the count of models that match the query parameters.

#### Signature

- `findAndCount(options?: any): Promise<[IModel[], Number]>`

### create()

Creates a model data object.

#### Signature

- `create(options: any): void`

### update()

Updates the model data object based on the query conditions.

#### Signature

- `update(options: any): void`

### destroy()

Deletes the model data object based on the query conditions.

#### Signature

- `destroy(options: any): void`
