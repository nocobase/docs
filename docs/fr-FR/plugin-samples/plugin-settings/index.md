# Plugin Configuration Page Overview

## Scenario Introduction

When developing plugins, it is often necessary to provide a configuration page where users can set various parameters for the plugin.

There are four common types of plugin configuration pages:

### Form Configuration Page

Users can fill in certain parameters in a form and save them. These parameters will be stored in a database and retrieved by the plugin during its operation. For example, see the [Custom Brand Plugin](/handbook/custom-brand#user-guide).

![img_v3_02av_cc1d4351-3a24-4cd9-b5a6-98fb3b8dae6g](https://static-docs.nocobase.com/img_v3_02av_cc1d4351-3a24-4cd9-b5a6-98fb3b8dae6g.jpg)

As shown above, this configuration page is a form where users can input parameters such as `Brand` and `About`, and then click the `Submit` button to save them.

### Table Configuration Page

The plugin's configuration consists of a dataset that users can add, delete, or modify within a table. For example, see the [Users & Permissions Plugin](/handbook/users).

![img_v3_02av_11e5f726-f716-4c0f-a244-2b6543b1b5dg](https://static-docs.nocobase.com/img_v3_02av_11e5f726-f716-4c0f-a244-2b6543b1b5dg.jpg)

As seen above, this configuration page is a table where users can add, delete, and modify user information.

### Table Configuration Page (Multiple New Entry Forms)

The plugin's configuration consists of a dataset, but multiple forms are available for adding new entries. For example, see the [File Manager Plugin](/handbook/file-manager).

![img_v3_02av_1d023074-402a-4586-848a-b4abd0ee5d4g](https://static-docs.nocobase.com/img_v3_02av_1d023074-402a-4586-848a-b4abd0ee5d4g.jpg)

As shown above, there are multiple forms for adding new entries, allowing users to choose different forms for data input.

### Other Cases

There are also other special cases, such as the [Theme Editor Plugin](/handbook/theme-editor#navigate-to-theme-configuration-page).

![img_v3_02av_ec2fa97f-2d1a-415c-8106-e3d979740fcg](https://static-docs.nocobase.com/img_v3_02av_ec2fa97f-2d1a-415c-8106-e3d979740fcg.jpg)

As seen above, this image displays the corresponding theme editor interface.

## Examples

For the above scenarios, we provide the following examples:

- [Form Configuration Page](/plugin-samples/plugin-settings/form)
- [Table Configuration Page](/plugin-samples/plugin-settings/table)
- [Table Configuration Page (Multiple New Entry Forms)](/plugin-samples/plugin-settings/table-multiple-forms.md)

For special cases, you can develop according to your specific needs.

## Configuration Page Routes

For plugin routing, refer to:

- [Plugin Configuration Page (Single Route)](/plugin-samples/router/add-setting-page-single-route)
- [Plugin Configuration Page (Tabs Route)](/plugin-samples/router/add-setting-page-tabs-routes)
- [Plugin Configuration Page (Different Layouts)](/plugin-samples/router/add-setting-page-layout-routes)

This set of plugin examples does not go into detail on routing. Those interested can consult the relevant documentation.
