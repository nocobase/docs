# v1.0.0-alpha.15: 2024.05.19

## New Features

### Fixed Table Columns

Refer to [Fixed Table Columns](https://docs-cn.nocobase.com/handbook/ui/fields/generic/table-column#%E5%9B%BA%E5%AE%9A%E5%88%97)

<img src="https://static-docs.nocobase.com/202405191512587.png"/>

### Support for Adding Gantt, Kanban Blocks in Modals/Drawers

Refer to [Adding Blocks in Modals](https://docs-cn.nocobase.com/handbook/ui/pop-up)

<img src="https://static-docs.nocobase.com/202405191512280.png"/>

### Support for Adding Linkage Rules in Detail Blocks

The linkage rules in detail blocks now support dynamically setting fields to show/hide. Refer to [Linkage Rules in Detail Blocks](https://docs-cn.nocobase.com/handbook/ui/blocks/data-blocks/details#%E8%81%94%E5%8A%A8%E8%A7%84%E5%88%99)

<img src="https://static-docs.nocobase.com/202405191513781.png"/>

### Auth: LDAP

Added the "Auth: LDAP" plugin (commercial plugin), which allows users to sign in to NocoBase using LDAP server account credentials. Refer to the [User Manual](https://docs-cn.nocobase.com/handbook/auth-ldap)

<img src="https://static-docs.nocobase.com/202405191513995.png"/>

### Workflow HTTP Request Node

#### Support for `application/www-x-form-urlencoded` Data Format

Previously, request node only supported JSON format (`application/json`) for the body part of the Content-Type. After the upgrade, it also support configuring form format data in key-value pairs.

<img src="https://static-docs.nocobase.com/202405191514472.png"/>

#### String Template Support for Value Input Fields

Previously, the value input fields in the "Headers" and "Parameters" sections of request node only supported pure input or variable selection. After the upgrade, you can directly enter a string with embedded variables. It will be automatically parsed as the final string value before sending the request.

<img src="https://static-docs.nocobase.com/202405191514748.png"/>

### Workflow Custom Action Event

The "Submit to Workflow" action button, originally bound to directly trigger type of the "Post-action Events", has been split and independently created as the "Trigger Workflow" action button for "Custom Action Events" (a commercial plugin). The previously added action buttons in the open-source version can still be used, but no longer supported for new additions. Please use the new "Custom Action Event" instead. See the [Usage Manual](https://docs-cn.nocobase.com/handbook/workflow-custom-action-trigger) for more information.

<img src="https://static-docs.nocobase.com/202405191515770.png"/>

## Improvements

### Configure Actions Adjustments

#### UI Adjustments

1. Flattened menu hierarchy and removed some toggle operations, supporting repeated additions.

Before:

<img src="https://static-docs.nocobase.com/202405191516585.png"/>

After:

<img src="https://static-docs.nocobase.com/202405191516026.png"/>

2. Merged similar actions

2.1. Merged "Add New" and "Add Record" options

Before:

<img src="https://static-docs.nocobase.com/202405191516874.png"/>

After:

<img src="https://static-docs.nocobase.com/202405191516737.png"/>

2.2 Merged "Submit" and "Save Record" options

Before:

<img src="https://static-docs.nocobase.com/202405191517966.png"/>

After:

<img src="https://static-docs.nocobase.com/202405191517078.png"/>

#### Impact on Developers

See PR：<a href="https://github.com/nocobase/nocobase/pull/4336" target="_blank">refactor: flatten and merge Actions #4336</a>

### Logs

#### Log Plugin File List

Before: In a multi-application environment, the log plugin displays all application log file lists.

After: In a multi-application environment, the log plugin only displays the current application log file list.

#### Workflow and Custom Request Folder Paths

Before: The folder path for workflow and custom request log files is at the same level as the application log folder.

After: The folder path for workflow and custom request log files belongs to the corresponding application log folder.

### Workflow

#### HTTP Request Node Result Data

Previously, the result data structure after successful or failed HTTP request node was inconsistent.

```js
// Only the response data part is returned when successful
{
  // Any JSON content
}

// The failure returns the result of Axios's error.toJSON() function.
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
}
```

Now, the response for both success and failure will be stored consistently in the node result.

```js
// Success
{
  config: {},
  headers: {},
  status: 200,
  statusText: 'ok',
  data: {}
}

// Fail
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```

Other exceptions such as no response from the server (`status` is `null`), or failed initialization, can be observed in the server logs for error handling. See more details in <a href="https://github.com/nocobase/nocobase/issues/4373" target="_blank">[Workflow: HTTP request Node] Node result type not fixed #4373</a>

## Bug Fixes

- Date fields in charts were not converted according to the client's time zone when aggregating data with a date field dimension. <a href="https://github.com/nocobase/nocobase/pull/4366" target="_blank">fix(data-vi): should use local timezone when formatting date #4366</a>

- Poor view refreshing; database views must be exited and re-entered to refresh. <a href="https://github.com/nocobase/nocobase/pull/4224" target="_blank">fix: collection fields should refreshed after editing sync from database #4224</a>

- Tree table blocks did not collapse all nodes when adding a child node. <a href="https://github.com/nocobase/nocobase/pull/4289" target="_blank">fix: do not collapse all nodes when adding a child node in the tree table block #4289</a>

- Collection title field setting was invalid. <a href="https://github.com/nocobase/nocobase/pull/4358" target="_blank">fix: collection title field setting is invalid #4358</a>

- bigint field lost precision in read pretty mode. <a href="https://github.com/nocobase/nocobase/pull/4360" target="_blank">fix: bigint field loses precision in read pretty mode #4360</a>

- Log files remained open after stopping sub-applications. <a href="https://github.com/nocobase/nocobase/pull/4380" target="_blank">fix(logger): should close log stream after destroying app #4380</a>

- Workflow aggregate node association field selection bug. <a href="https://github.com/nocobase/nocobase/pull/4315" target="_blank">fix(plugin-workflow-aggregate): fix association field select #4315</a>

- Ignore error option was invalid in HTTP request node sync mode. <a href="https://github.com/nocobase/nocobase/pull/4334" target="_blank">fix(plugin-workflow-request): fix ignoreFail in sync mode #4334</a>

- Value input fields in workflow HTTP request node overflowed. <ahref="https://github.com/nocobase/nocobase/pull/4353" target="_blank">fix(plugin-workflow-request): fix value fields overflowing #4354</a>

- Special characters caused workflow HTTP request node to hang. <ahref="https://github.com/nocobase/nocobase/pull/4376" target="_blank">fix(plugin-workflow-request): fix request hanging when invalid header value #4376</a>

- Setting marginBlock in the theme editor affected the spacing between form fields. <a href="https://github.com/nocobase/nocobase/pull/4374" target="_blank">fix(theme-editor): form field spacing should not be affected by token.marginBlock #4374</a>

- Fixed an issue where clicking on the "License" option in the top right corner of the page would result in incorrect redirection. [PR #4415](https://github.com/nocobase/nocobase/pull/4415)

- Fixed the issue where the operator of the field becomes invalid after saving the filter form as a block template. [PR #4390](https://github.com/nocobase/nocobase/pull/4390)

## Documentation

- Added plugin sample documentation: https://docs-cn.nocobase.com/plugin-samples

- Updated documentation structure for workflow usage manual: https://docs-cn.nocobase.com/handbook/workflow
