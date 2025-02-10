# Explanation

NocoBase's frontend pages currently include the following [page routes](/development/client/router#existing-page-routes):

| Name           | Path               | Component           | Description |
| -------------- | ------------------ | ------------------- |-------------|
| admin          | /admin/\*          | AdminLayout         | Backend management page |
| admin.page     | /admin/:name       | AdminDynamicPage    | Dynamically created page |
| admin.settings | /admin/settings/\* | AdminSettingsLayout | Plugin configuration page |
| admin.pm.list  | /admin/pm/list/\* | PluginManager       | Plugin management page |

However, these pages may not meet all requirements, for example:

**add**

- Add a new page for frontend display only, such as `/about`, to show information about the website.
- Extend a new page under `/admin/*`, which requires login to access.
- Add a configuration page for a newly added plugin.

**change**

- Completely replace an existing page, for example, customize the login page instead of using the default one.
- Modify the layout of an existing page, for example, modify the layout of `/admin/*` without the top menu bar.

**delete**

- For example, if we no longer need a registered page, we can delete it.

To address the above scenarios, we can use NocoBase's frontend router extension feature. We provide the following examples:

- [Add Page](/plugin-samples/router/add-page) (Add a new page)
- [Replace Page](/plugin-samples/router/replace-page) (Modify a page)
- [Add Plugin Setting Page (Single Route)](/plugin-samples/router/add-setting-page-single-route) (Plugin configuration page - single route)
- [Add Plugin Setting Page (Tabs Routes)](/plugin-samples/router/add-setting-page-tabs-routes) (Plugin configuration page - tabs routes)
- [Add Plugin Setting Page (different Routes)](/plugin-samples/router/add-setting-page-layout-routes) (Plugin configuration page - different layouts)
