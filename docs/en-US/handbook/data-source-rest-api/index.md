# REST API data source

<PluginInfo commercial="true" name="data-source-rest-api"></PluginInfo>

## Introduction

To access data from REST API sources.

## Installation

This plugin is a commercial plugin, which needs to be uploaded and activated through the plugin manager.

![20240323162741](https://static-docs.nocobase.com/20240323162741.png)

## Add REST API source

After activating the plugin, select 'REST API' in the 'Add new' drop-down menu in Data Source Manager.

![20240721171420](https://static-docs.nocobase.com/20240721171420.png)

Configure REST API source

![20240721171507](https://static-docs.nocobase.com/20240721171507.png)

## Add Collection

RESTful resources are NocoBase Collections, for example, the 'Users' resource/collection.

```bash
GET /users
POST /users
GET /users/1
PUT /users/1
DELETE /users/1
```

Mapped to the configuration in NocoBase API as:

```bash
GET /users:list
POST /users:create
POST /users:get?filterByTk=1
POST /users:update?filterByTk=1
POST /users:destroy?filterByTk=1
```

For complete NocoBase API design specifications, refer to the API documentation.

![20240716213344](https://static-docs.nocobase.com/20240716213344.png)

View the [NocoBase API - Core] section:

![20240716213258](https://static-docs.nocobase.com/20240716213258.png)

The Collection configuration for the REST API data source is as shown.

### List

Configuration for mapping the interface to view the list of resources:

![20240716211351](https://static-docs.nocobase.com/20240716211351.png)

### Get

Configuration for mapping the interface to view the details of a resource:

![20240716211532](https://static-docs.nocobase.com/20240716211532.png)

### Create

Configuration for mapping the interface to create a resource:

![20240716211634](https://static-docs.nocobase.com/20240716211634.png)

### Update

Configuration for mapping the interface to update a resource:

![20240716211733](https://static-docs.nocobase.com/20240716211733.png)

### Delete

Configuration for mapping the interface to delete a resource:

![20240716211808](https://static-docs.nocobase.com/20240716211808.png)

## Debug API

You can debug by clicking 'Try it out'.

![20240716212722](https://static-docs.nocobase.com/20240716212722.png)

Debugging Process Description:

![20240717110051](https://static-docs.nocobase.com/20240717110051.png)

## Variables

REST API data sources provide three types of variables for interface integration:

- Custom variables of the data source
- NocoBase requests
- Third-party responses

### Custom variables of the data source

![20240716221937](https://static-docs.nocobase.com/20240716221937.png)

![20240716221858](https://static-docs.nocobase.com/20240716221858.png)

### NocoBase requests

- Params：URL query parameters (Search Params), with each interface having different Params.
- Headers：Request body, mainly providing some NocoBase custom X- information.
- Body：Request body
- Token：The current NocoBase request's API token.

![20240716222042](https://static-docs.nocobase.com/20240716222042.png)

### Third-party Responses

Currently, only the response body is provided.

![20240716222303](https://static-docs.nocobase.com/20240716222303.png)

The available variables for each interface integration are as follows:

### List

| Parameter | Description |
| -- | -- |
| request.params.page | Pagination parameter |
| request.params.pageSize | Number of items per page |
| request.params.filter | Conditional filtering |
| request.params.sort | Sorting |
| request.params.appends | Fields to be loaded on demand, generally used for relation fields |
| request.params.fields | Fields only which the interface outputs (whitelist) |
| request.params.except | Fields to exclude (blacklist) |

### Get

| Parameter | Description |
| -- | -- |
| request.params.filterByTk | Number of items per page |
| request.params.filter | Conditional filtering |
| request.params.appends | Fields to be loaded on demand, generally used for relation fields |
| request.params.fields | Fields only which the interface outputs (whitelist) |
| request.params.except | Fields to exclude (blacklist) |

### Create

| Parameter | Description |
| -- | -- |
| request.params.whiteList | Whitelist |
| request.params.blacklist | Blacklist |
| request.body | Initial data for creation |

### Update

| Parameter | Description |
| -- | -- |
| request.params.filterByTk | Number of items per page |
| request.params.filter | Conditional filtering |
| request.params.whiteList | Whitelist |
| request.params.blacklist | Blacklist |
| request.body | Data to be updated |

### Delete

| Parameter | Description |
| -- | -- |
| request.params.filterByTk | Number of items per page |
| request.params.filter | Conditional filtering |

## Configure Fields

Extract field metadata (Fields) from the data of the adapted resource's CRUD interface as fields for the collection.

![20240716223636](https://static-docs.nocobase.com/20240716223636.png)

Extract field metadata:

![20240716224010](https://static-docs.nocobase.com/20240716224010.png)

Fields and Preview:

![20240716224403](https://static-docs.nocobase.com/20240716224403.png)

Edit Fields (similar to other data source methods):

![20240716224704](https://static-docs.nocobase.com/20240716224704.png)

## Add a REST API Data Source Block:

After the Collection is configured, you can go to the interface to add blocks.

![20240716225120](https://static-docs.nocobase.com/20240716225120.png)
