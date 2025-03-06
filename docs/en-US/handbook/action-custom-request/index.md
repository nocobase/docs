# Custom Request
<PluginInfo name="action-custom-request"></PluginInfo>

## Overview

## Installation

This plugin is built-in, so no separate installation is required.

## Instructions for Use

![20240426120014](https://static-docs.nocobase.com/20240426120014.png)

### Configuring Permissions

When the "Allows to configuration interface" option is selected, you can set up custom requests.

![20240426114957](https://static-docs.nocobase.com/20240426114957.png)

The customRequests table is system-level, and permissions are controlled via the acl.registerSnippet method.

```typescript
this.app.acl.registerSnippet({
  name: 'ui.customRequests', // Permission for configuring interface related to ui.*
  actions: ['customRequests:*'],
});
```
### Variables

You can configure variables within both the URL and request body.

- Current record
- Current user
- Current time
- API token (supported by v1.3.22-beta and above)

![20240426120953](https://static-docs.nocobase.com/20240426120953.png)

![20240426121051](https://static-docs.nocobase.com/20240426121051.png)

## Operation Configuration Items

### Request Settings

![20240426120131](https://static-docs.nocobase.com/20240426120131.png)

### Access Control

Each custom request can have custom role-based permissions, with default permissions granted to all users.

![20240426120451](https://static-docs.nocobase.com/20240426120451.png)
