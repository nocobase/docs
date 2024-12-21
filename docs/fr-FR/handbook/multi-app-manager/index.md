# Multi-App Manager

<PluginInfo name="multi-app-manager"></PluginInfo>

## Introduction

Dynamically manage multiple applications without the need for separate deployments, with each application being an independent instance.

:::warning
The multi-app management plugin does not provide the capability for user sharing. It can be integrated through the "[Authentication plugin](/handbook/auth)" or handled using the "[App Switching plugin](/handbook/app-switching)".
:::

## Installation

This is a preset plugin that needs to be activated before use.

![20240327144151](https://static-docs.nocobase.com/20240327144151.png)

## User Manual

![20240327144327](https://static-docs.nocobase.com/20240327144327.png)

### Adding Applications

![20240327150722](https://static-docs.nocobase.com/20240327150722.png)

### Starting Methods

Two starting methods are provided:

- Start on first visit: The sub-application starts only when a user visits the sub-application's URL for the first time;
- Start with the main application: When the main application starts, the sub-applications start as well, which increases the startup time of the main application.

![20240327170218](https://static-docs.nocobase.com/20240327170218.png)

### Custom Domain Name

Sub-applications can be accessed via subpaths `/apps/:appName/admin/`, for example:

```bash
http://localhost:13000/apps/a_7zkxoarusnx/admin/z45sjaukasd
```

Additionally, sub-applications can be configured with independent subdomains, which require domain resolution to the current IP. If nginx is used, the domain also needs to be added in the nginx configuration.

![20240327170301](https://static-docs.nocobase.com/20240327170301.png)

### Display in the Menu

:::warning
The list of sub-applications displayed in the current right drop-down menu is only a set of quick links. Users are not shared; sub-applications require login and can only be used by the main application's root account. Full application switching capabilities will be provided in the commercial plugin "[App Switching](//handbook/app-switching)".
:::

![20240327151239](https://static-docs.nocobase.com/20240327151239.png)