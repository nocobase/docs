# Submit

## Introduction

The submission function is designed to save form data (unique to form blocks) and can be integrated with workflows to streamline data automation.

![20240413093210](https://static-docs.nocobase.com/20240413093210.png)

## Operation Configuration Items

![20240413095124](https://static-docs.nocobase.com/20240413095124.png)

### Save Mode

The submission operation for form blocks that only add new data supports configuring the save method.

![20240413101209](https://static-docs.nocobase.com/20240413101209.png)

![20240413100531](https://static-docs.nocobase.com/20240413100531.png)

1. Insert and create new records directly;
2. Insert only if the record doesn't exist (requires fields to determine the record’s existence);
3. Insert if the record doesn't exist, otherwise update (requires fields to check for existing records).

### Bind Workflows

The bound workflow will only be triggered once the data has been successfully submitted.

![20240417120149](https://static-docs.nocobase.com/20240417120149.png)

For further details, see [Bind Workflows](/handbook/ui/actions/action-settings/bind-workflow).

- [Edit Button](/handbook/ui/actions/action-settings/edit-button)
- [Secondary Confirmation](/handbook/ui/actions/action-settings/double-check)
