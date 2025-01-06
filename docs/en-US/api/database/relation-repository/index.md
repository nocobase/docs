# RelationRepository

`RelationRepository` is a `Repository` object for relation types, which allows operations on associated data without loading the associations. Based on `RelationRepository`, each association type derives its corresponding implementation, which are:

- [`HasOneRepository`](#has-one-repository)
- `HasManyRepository`
- `BelongsToRepository`
- `BelongsToManyRepository`

## Constructor

**Signature**

- `constructor(sourceCollection: Collection, association: string, sourceKeyValue: string | number)`

**Parameters**

| Parameter Name     | Type               | Default Value | Description                                               |
| ------------------ | ------------------ | ------------- | --------------------------------------------------------- |
| `sourceCollection` | `Collection`       | -             | The Collection corresponding to the referencing relation in the association |
| `association`      | `string`           | -             | The name of the association                               |
| `sourceKeyValue`   | `string \| number` | -             | The key value corresponding to the referencing relation   |

## Base Class Properties

### `db: Database`

Database object

### `sourceCollection`

The Collection corresponding to the referencing relation in the association

### `targetCollection`

The Collection corresponding to the referenced relation in the association

### `association`

The association object in Sequelize corresponding to the current association

### `associationField`

The field in the Collection corresponding to the current association

### `sourceKeyValue`

The key value corresponding to the referencing relation