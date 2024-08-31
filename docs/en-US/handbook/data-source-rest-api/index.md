# REST API Data Source

<PluginInfo commercial="true" name="data-source-rest-api"></PluginInfo>

## Introduction

This plugin allows you to integrate data from REST API sources seamlessly.

## Installation

As a commercial plugin, it requires uploading and activation through the plugin manager.

![20240323162741](https://static-docs.nocobase.com/20240323162741.png)

## Adding a REST API Source

After activating the plugin, you can add a REST API source by selecting it from the Add new dropdown menu in the data source management section.

![20240721171420](https://static-docs.nocobase.com/20240721171420.png)

### Configuring the REST API Source

![20240721171507](https://static-docs.nocobase.com/20240721171507.png)

## Adding a Collection

In NocoBase, a RESTful resource is mapped to a Collection, such as a Users resource.

```bash
GET /users
POST /users
GET /users/1
PUT /users/1
DELETE /users/1
```

These API endpoints are mapped in NocoBase as follows:

```bash
GET /users:list
POST /users:create
POST /users:get?filterByTk=1
POST /users:update?filterByTk=1
POST /users:destroy?filterByTk=1
```

For a comprehensive guide on NocoBase API design specifications, refer to the API documentation.

![20240716213344](https://static-docs.nocobase.com/20240716213344.png)

Check the "NocoBase API - Core" chapter for detailed information.

![20240716213258](https://static-docs.nocobase.com/20240716213258.png)

The Collection configuration for a REST API data source includes the following:

### List

Map the interface for viewing a list of resources.

![20240716211351](https://static-docs.nocobase.com/20240716211351.png)

### Get

Map the interface for viewing resource details.

![20240716211532](https://static-docs.nocobase.com/20240716211532.png)

### Create

Map the interface for creating a resource.

![20240716211634](https://static-docs.nocobase.com/20240716211634.png)

### Update

Map the interface for updating a resource.

![20240716211733](https://static-docs.nocobase.com/20240716211733.png)

### Destroy

Map the interface for deleting a resource.

![20240716211808](https://static-docs.nocobase.com/20240716211808.png)

## Debugging the API

You can easily debug the API by clicking **Try it out**.

![20240716212722](https://static-docs.nocobase.com/20240716212722.png)

### Debugging Process Overview

![20240717110051](https://static-docs.nocobase.com/20240717110051.png)

## Variables

The REST API data source supports three types of variables for API integration:

- Custom data source variables
- NocoBase request variables
- Third-party response variables

### Custom Data Source Variables

![20240716221937](https://static-docs.nocobase.com/20240716221937.png)

![20240716221858](https://static-docs.nocobase.com/20240716221858.png)

### NocoBase Request

- **Params:** URL query parameters (Search Params), which vary depending on the interface.
- **Headers:** Custom request headers, primarily providing specific X- information from NocoBase.
- **Body:** The request body.
- **Token:** The API token for the current NocoBase request.

![20240716222042](https://static-docs.nocobase.com/20240716222042.png)

### Third-Party Responses

Currently, only the response body is available.

![20240716222303](https://static-docs.nocobase.com/20240716222303.png)

Below are the variables available for each interface:

### List

| Parameter               | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| request.params.page      | Pagination parameter                                  |
| request.params.pageSize  | Number of items per page                              |
| request.params.filter    | Filtering conditions                                  |
| request.params.sort      | Sorting options                                       |
| request.params.appends   | Additional fields to load as needed, typically for on-demand loading of relational fields |
| request.params.fields    | Specifies which fields to output (whitelist)          |
| request.params.except    | Specifies which fields to exclude (blacklist)         |

### Get

| Parameter               | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| request.params.filterByTk | Key for filtering                                    |
| request.params.filter    | Filtering conditions                                  |
| request.params.appends   | Additional fields to load as needed, typically for on-demand loading of relational fields |
| request.params.fields    | Specifies which fields to output (whitelist)          |
| request.params.except    | Specifies which fields to exclude (blacklist)         |

### Create

| Parameter               | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| request.params.whiteList | Whitelist                                             |
| request.params.blacklist | Blacklist                                             |
| request.body             | Initial data for creation                             |

### Update

| Parameter               | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| request.params.filterByTk | Key for filtering                                    |
| request.params.filter    | Filtering conditions                                  |
| request.params.whiteList | Whitelist                                             |
| request.params.blacklist | Blacklist                                             |
| request.body             | Data for update                                       |

### Destroy

| Parameter               | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| request.params.filterByTk | Key for filtering                                    |
| request.params.filter    | Filtering conditions                                  |

## Field Configuration

Field metadata (Fields) is extracted from the CRUD interface data of the adapted resource to serve as the fields of the collection.

![20240716223636](https://static-docs.nocobase.com/20240716223636.png)

Field metadata extraction.

![20240716224010](https://static-docs.nocobase.com/20240716224010.png)

Field and preview.

![20240716224403](https://static-docs.nocobase.com/20240716224403.png)

Field editing is similar to other data sources.

![20240716224704](https://static-docs.nocobase.com/20240716224704.png)

## Adding REST API Data Source Blocks

Once the collection is configured, you can add blocks to the interface.

![20240716225120](https://static-docs.nocobase.com/20240716225120.png)
