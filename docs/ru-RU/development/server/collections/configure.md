# How to configure collections?

NocoBase has three ways to configure collections.

<img src="./cm.svg" style="max-width: 800px;" />

## Configuring collections through the interface

Business data is generally recommended to be configured using the interface, and the NocoBase platform provides two interfaces to configure collections.

### Regular table interface

<img src="./table.jpg" style="max-width: 800px;" />

### Graphical configuration interface

<img src="./graph.jpg" style="max-width: 800px;" />

## Defined in the plugin code

In the plugin, custom collection must be placed in the `src/server/collections/*.ts` directory of the plugin, with the following content:

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

Extend the options of an existing collection using `extendCollection()`.

```ts
import { extendCollection } from '@nocobase/database';

export default extendCollection({
  name: 'examples',
});
```

Related API Reference

- [defineCollection()](/api/database#definecollection)
- [extendCollection()](/api/database#extendcollection)

The collection configured in the plugin is automatically synchronized with the database when the plugin is activated, giving birth to the corresponding data tables and fields.

:::info{title="INFO"}
The collection configured in the plugin is automatically synchronized with the database when the plugin is activated, generating the corresponding data tables and fields. If the plugin is already active, you need to handle the synchronization of the data tables with the upgrade command `yarn nocobase upgrade`.
:::

## Managing data tables via REST API

Third parties can also manage data tables via the HTTP interface (permissions required)

### Collections

```bash
GET /api/collections
POST /api/collections
GET /api/collections/<collectionName>
PUT /api/collections/<collectionName>
DELETE /api/collections/<collectionName>
```

### Collection fields

```bash
GET /api/collections/<collectionName>/fields
POST /api/collections/<collectionName>/fields
GET /api/collections/<collectionName>/fields/<fieldName>
PUT /api/collections/<collectionName>/fields/<fieldName>
DELETE /api/collections/<collectionName>/fields/<fieldName>
```
