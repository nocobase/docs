# @nocobase/actions

## Overview

The `@nocobase/actions` package encapsulates frequently used CRUD-related methods. By simply registering it with the [ResourceManager](./resourcer/resource-manager), CRUD operation interfaces can be globally added to system resources.

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

Creates a resource. `POST /api/<resource>:create`.

```shell
curl "http://localhost:13000/api/users:create" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin"}'
```

#### Request Body

| Parameter Name  | Type  | Description                                     |
| --------------- | ----- | ----------------------------------------------- |
| `[key: string]` | `any` | Key-value pairs representing resource fields    |

### list

Retrieves a list of resources. `GET /api/<resource>:list`.

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
| `paginate` | `boolean`  | Whether to use pagination                                          | `true`  |
| `page`     | `number`   | Current page number                                                | `1`     |
| `pageSize` | `number`   | Number of items per page                                           | `20`    |

### get

Retrieves a specific resource. `GET /api/<resource>:get`.

```shell
curl -X GET http://localhost:13000/api/users:get?filterByTk=1
```

#### Parameters

| Parameter    | Type               | Description                                                        | Default |
| ------------ | ------------------ | ------------------------------------------------------------------ | ------- |
| `filterByTk` | `number \| string` | Filter by primary key value                                        | -       |
| `filter`     | `Filter`           | Filtering parameters, see [Filter Operators](./database/operators) | -       |
| `fields`     | `string[]`         | Fields to retrieve                                                 | -       |
| `except`     | `string[]`         | Fields to exclude                                                  | -       |
| `appends`    | `string[]`         | Related fields to append                                           | -       |

### update

Updates one or more resources. `PUT /api/<resource>:update`.

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
| `filterByTk` | `number \| string` | Filter by primary key value                                        |

*Note: At least one of `filter` or `filterByTk` must be provided.*

#### Request Body

| Parameter Name  | Type  | Description                                     |
| --------------- | ----- | ----------------------------------------------- |
| `[key: string]` | `any` | Key-value pairs representing resource fields    |

### destroy

Deletes one or more resources. `DELETE /api/<resource>:destroy`.

```shell
curl -X DELETE http://localhost:13000/api/users:destroy?filterByTk=1
```

#### Parameters

| Parameter    | Type               | Description                                                        |
| ------------ | ------------------ | ------------------------------------------------------------------ |
| `filter`     | `Filter`           | Filtering parameters, see [Filter Operators](./database/operators) |
| `filterByTk` | `number \| string` | Filter by primary key value                                        |

*Note: At least one of `filter` or `filterByTk` must be provided.*

### firstOrCreate

Retrieves or creates a resource. `POST /api/<resource>:firstOrCreate`.

```shell
curl "http://localhost:13000/api/users:firstOrCreate?filterKeys[]=username" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "nickname": "Admin"}'
```

#### Parameters

| Parameter    | Type       | Description                                                |
| ------------ | ---------- | ---------------------------------------------------------- |
| `filterKeys` | `string[]` | Fields in the request body used to find existing resources |

#### Request Body

| Parameter Name  | Type  | Description                                     |
| --------------- | ----- | ----------------------------------------------- |
| `[key: string]` | `any` | Key-value pairs representing resource fields    |

### updateOrCreate

Updates or creates a resource. `POST /api/<resource>:updateOrCreate`.

```shell
curl "http://localhost:13000/api/users:updateOrCreate?filterKeys[]=username" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "nickname": "Admin"}'
```

#### Parameters

| Parameter    | Type       | Description                                                |
| ------------ | ---------- | ---------------------------------------------------------- |
| `filterKeys` | `string[]` | Fields in the request body used to find existing resources |

#### Request Body

| Parameter Name  | Type  | Description                                     |
| --------------- | ----- | ----------------------------------------------- |
| `[key: string]` | `any` | Key-value pairs representing resource fields    |

### move

Moves resources, adjusting the order. Typically used for drag-and-drop sorting in pages. `POST /api/<resource>:move`.

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
| `method`      | `insertAfter` \| `prepend` | Insertion method: whether to insert before                  |

### set

Sets associated objects for a resource. `POST /api/<resource>/<resourceKey>/<association>:set`.

```shell
curl "http://localhost:13000/api/users/1/roles:set" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin", "member"]'
```

#### Request Body

- `TargetKey | TargetKey[]` - Array of primary key values for associated objects.

### add

Adds associated objects to a resource. `POST /api/<resource>/<resourceKey>/<association>:add`.

```shell
curl "http://localhost:13000/api/users/1/roles:add" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin"]'
```

#### Request Body

- `TargetKey | TargetKey[]` - Array of primary key values for associated objects.

### remove

Removes associated objects from a resource. `POST /api/<resource>/<resourceKey>/<association>:remove`.

```shell
curl "http://localhost:13000/api/users/1/roles:remove" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin"]'
```

#### Request Body

- `TargetKey | TargetKey[]` - Array of primary key values for associated objects.

### toggle

Toggles associated objects for a resource, adding them if they don't exist, or removing them if they do. `POST /api/<resource>/<resourceKey>/<association>:toggle`.

```shell
curl "http://localhost:13000/api/users/1/roles:toggle" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin", "member"]'
```

#### Request Body

- `TargetKey | TargetKey[]` - Array of primary key values for associated objects.
