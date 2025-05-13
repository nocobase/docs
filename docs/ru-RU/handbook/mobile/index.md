# Mobile

<PluginInfo name="mobile"></PluginInfo>

## Introduction

This plugin facilitates the configuration of mobile pages, leveraging a core framework built on Ant Design Mobile. It offers a variety of extension points and supports the integration of specific desktop blocks.

:::warning
The older `plugin-mobile-client` has been deprecated. Starting from version v1.3, it is recommended to transition to `plugin-mobile`. These two plugins are incompatible, so the new version will necessitate a complete reconfiguration of mobile settings.
:::

## Installation

This plugin comes pre-installed but requires activation to function.

![20240712113500](https://static-docs.nocobase.com/20240712113500.png)

## User Manual

### UI Configuration Interface

NocoBase provides a specialized UI configuration interface tailored for mobile use.

![20240828220321](https://static-docs.nocobase.com/20240828220321.png)

### Tab Bar

Supports the addition of two types: links and pages.

![20240828223244](https://static-docs.nocobase.com/20240828223244.png)

### Adding Blocks

The following desktop blocks can currently be added:

![20240828223454](https://static-docs.nocobase.com/20240828223454.png)

### Page Configuration

![20240828221452](https://static-docs.nocobase.com/20240828221452.png)

### Page Tabs

![20240828222225](https://static-docs.nocobase.com/20240828222225.png)

### Sub-Pages

On mobile devices, pop-up actions open as sub-pages with swipe-back functionality.

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240828222736_rec_.mp4" type="video/mp4">
</video>

### Filtering

Filtering utilizes a [Popup](https://mobile.ant.design/components/popup) interaction method.

![20240828230549](https://static-docs.nocobase.com/20240828230549.png)

### Configure menu access permissions

You can configure menu access permissions just like on the desktop side, as shown below (the mobile plugin must be enabled first):

![20240903221327_rec_](https://static-docs.nocobase.com/20240903221327_rec_.gif)

## Development Guide

Currently supported extension points include:

![20240712115610](https://static-docs.nocobase.com/20240712115610.png)
