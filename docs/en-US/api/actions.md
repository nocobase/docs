# @nocobase/actions

## Overview

`@nocobase/actions` encapsulates commonly used CRUD-related methods. By simply registering with [ResourceManager](./resourcer/resource-manager), CRUD operation interfaces can be globally added to system resources.

### Basic Usage

```typescript
import * as actions from `@nocobase/actions`;

const resourceManager = new ResourceManager({
  // ...options
});

resourceManager.registerActionHandlers(actions);
```

## Action Methods

### create

Create a resource. `POST /api/<resource>:create`.

```shell
curl "http://localhost:13000/api/users:create" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin"}'
```

#### Request Body

| Parameter Name  | Type  | Description                        |
| --------------- | ----- | ---------------------------------- |
| `[key: string]` | `any` | Key-value pairs of resource fields |

### list

Get a list of resources. `GET /api/<resource>:list`.

```shell
curl -X GET http://localhost:13000/api/users:list
```

#### Parameters

| Parameter  | Type       | Description                                                        | Default |
| ---------- | ---------- | ------------------------------------------------------------------ | ------- |
| `filter`   | `Filter`   | Filtering parameters, see [Filter Operators](./database/operators) | -       |
| `fields`   | `string[]` | Fields to retrieve                                                 | -       |
| `except`   | `string[]` | Fields to exclude                                                  | -       |
| `appends`  | `string[]` | Related fields to append                                           | -       |
| `sort`     | `string[]` | Sorting parameters                                                 | -       |
| `paginate` | `boolean`  | Whether pagination                                                 | `true`  |
| `page`     | `number`   | Current page                                                       | `1`     |
| `pageSize` | `number`   | Number of data per page                                            | `20`    |

### get

Get a specific resource. `GET /api/<resource>:get`.

```shell
curl -X GET http://localhost:13000/api/users:get?filterByTk=1
```

#### Parameters

| Parameter    | Type               | Description                                                        | Default |
| ------------ | ------------------ | ------------------------------------------------------------------ | ------- |
| `filterByTk` | `number \| string` | Filter primary key value                                           | -       |
| `filter`     | `Filter`           | Filtering parameters, see [Filter Operators](./database/operators) | -       |
| `fields`     | `string[]`         | Fields to retrieve                                                 | -       |
| `except`     | `string[]`         | Fields to exclude                                                  | -       |
| `appends`    | `string[]`         | Related fields to append                                           | -       |

### update

Update one or more resources. `PUT /api/<resource>:update`.

```shell
curl "http://localhost:13000/api/users:update?filterByTk=1" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d '{"username": "admin"}'
```

#### Parameters

| Parameter    | Type               | Description                                                        |
| ------------ | ------------------ | ------------------------------------------------------------------ |
| `filter`     | `Filter`           | Filtering parameters, see [Filter Operators](./database/operators) |
| `filterByTk` | `number \| string` | Filter primary key value                                           |

Note: At least one of `filter` and `filterByTk` must be provided.

#### Request Body

| Parameter Name  | Type  | Description                        |
| --------------- | ----- | ---------------------------------- |
| `[key: string]` | `any` | Key-value pairs of resource fields |

### destroy

Delete one or more resources. `DELETE /api/<resource>:destroy`.

```shell
curl -X DELETE http://localhost:13000/api/users:destroy?filterByTk=1
```

#### Parameters

| Parameter    | Type               | Description                                                        |
| ------------ | ------------------ | ------------------------------------------------------------------ |
| `filter`     | `Filter`           | Filtering parameters, see [Filter Operators](./database/operators) |
| `filterByTk` | `number \| string` | Filter primary key value                                           |

Note: At least one of `filter` and `filterByTk` must be provided.

### firstOrCreate

Get or create a resource. `POST /api/<resource>:firstOrCreate`.

```shell
curl "http://localhost:13000/api/users:firstOrCreate?filterKeys[]=username" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "nickname": "Admin"}'
```

#### Parameters

| Parameter    | Type       | Description                                                |
| ------------ | ---------- | ---------------------------------------------------------- |
| `filterKeys` | `string[]` | Fields used in the request body to find existing resources |

#### Request Body

| Parameter Name  | Type  | Description                        |
| --------------- | ----- | ---------------------------------- |
| `[key: string]` | `any` | Key-value pairs of resource fields |

### updateOrCreate

Update or create a resource. `POST /api/<resource>:updateOrCreate`.

```shell
curl "http://localhost:13000/api/users:updateOrCreate?filterKeys[]=username" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "nickname": "Admin"}'
```

#### Parameters

| Parameter    | Type       | Description                                                |
| ------------ | ---------- | ---------------------------------------------------------- |
| `filterKeys` | `string[]` | Fields used in the request body to find existing resources |

#### Request Body

| Parameter Name  | Type  | Description                        |
| --------------- | ----- | ---------------------------------- |
| `[key: string]` | `any` | Key-value pairs of resource fields |

### move

Move resources, adjust sorting. Typically used for drag-and-drop sorting in pages. `POST /api/<resource>:move`.

```shell
curl -X POST "http://localhost:13000/api/users:move?sourceId=1&targetId=2"
```

#### Parameters

| Parameter     | Type                       | Description                                                 | Default |
| ------------- | -------------------------- | ----------------------------------------------------------- | ------- |
| `sourceId`    | `targetKey`                | ID of the element to move                                   | -       |
| `targetId`    | `targetKey`                | ID of the element to swap positions with                    | -       |
| `sortField`   | `string`                   | Name of the field where sorting is stored                   | `sort`  |
| `targetScope` | `string`                   | Sorting scope, a resource can be sorted by different scopes | -       |
| `sticky`      | `boolean`                  | Whether to stick the moved element                          | -       |
| `method`      | `insertAfter` \| `prepend` | Insertion type, whether to insert before                    |
