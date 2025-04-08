# Block Gantt

<PluginInfo name="block-gantt"></PluginInfo>

## Introduction

The Gantt chart block displays data in the form of a timeline, making it ideal for project management, event planning, engineering schedules, and task scheduling.

## Installation

It's a built-in plugin, no installation is required.

## Adding a Block

![](https://static-docs.nocobase.com/f064f8fadf52947c990f5dad97736f98.png)

![](https://static-docs.nocobase.com/858112f44bc543973b6e5b03856a6360.png)

- **Title Field**: Displays the information directly on the Gantt chart bars
- **Time Scale**: Sets the time scale, with the default level being days
- **Start Date Field**: Defines the start date for each task (required)
- **End Date Field**: Defines the end date for each task (required)
- **Progress Field**: Indicates the progress of a task (optional percentage field)
## Usage Instructions

![](https://static-docs.nocobase.com/fff6fe1e1fe0a88d20f80b3bb7233608.gif)

- Hover over a task to see a floating card that displays task duration and progress.
- Drag the task to adjust the start and end dates.
- Drag the progress bar to adjust task progress.

## Block Configuration Options

![20240419211301](https://static-docs.nocobase.com/20240419211301.png)

### Set Data Range

![20240419211033](https://static-docs.nocobase.com/20240419211033.png)

For more details, refer to [Setting Data Range](/handbook/ui/blocks/block-settings/data-scope).

- [Save as Block Template](/handbook/block-template)
- [Set Data Loading Mode](/handbook/ui/blocks/block-settings/loading-mode)

## Action Configuration

### Global Actions

![20240419213653](https://static-docs.nocobase.com/20240419213653.png)

- [Filter](/handbook/ui/actions/types/filter)
- [Add New](/handbook/ui/actions/types/add-new)
- [Delete](/handbook/ui/actions/types/delete)
- [Refresh](/handbook/ui/actions/types/refresh)
- [Import](/handbook/action-import)
- [Export](/handbook/action-export)
- [Add Record](/handbook/action-add-record)
- [Bulk Update](/handbook/action-bulk-update)
- [Bulk Edit](/handbook/action-bulk-edit)

### Row Actions

![20240419213823](https://static-docs.nocobase.com/20240419213823.png)

- [View](/handbook/ui/actions/types/view)
- [Edit](/handbook/ui/actions/types/edit)
- [Duplicate](/handbook/action-duplicate)
- [Delete](/handbook/ui/actions/types/delete)
- [Pop-Up](/handbook/ui/actions/types/pop-up)
- [Update Record](/handbook/ui/actions/types/update-record)
- [Custom Request](/handbook/action-custom-request)
- [Trigger Workflow](/handbook/workflow/manual/triggers/custom-action)
