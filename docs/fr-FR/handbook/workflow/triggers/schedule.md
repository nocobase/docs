# Schedule event

Scheduled tasks are events triggered based on time conditions, including two modes:

- Custom Time: Regularly scheduled triggers similar to cron based on system time.
- Time field of collection: Triggered according to the value of the time field in the collection.

When the system reaches the time (accurate to seconds) that meets the configured trigger conditions, the corresponding workflow will be triggered.

## Basic Usage

### Creating Schedule event

Select the "Schedule event" type when creating a workflow in the workflow list:

![Create Scheduled event](https://static-docs.nocobase.com/e09b6c9065167875b2ca7de5f5a799a7.png)

### Custom Time Mode

For the regular mode, start by configuring the start time to any point in time (accurate to seconds). The start time can be set to a future time or a past time. When set to a past time, it will check whether it is time based on the configured repeat condition. If no repeat condition is configured, the workflow will not be triggered if the start time is in the past.

There are two ways to configure repeat rules:

- Interval Time: Trigger every fixed interval after the start time, such as every hour, every 30 minutes, etc.
- Advanced Mode: Using cron rules, it can be configured to occur at fixed rule of dates and times.

After configuring the repeat rule, you can also configure the end condition, which can end at a fixed point in time or by the number of times executed.

### Time Field of Collection Mode

Using the time field of the collection to determine the start time is a trigger mode that combines ordinary scheduled tasks with the collection time field. Using this mode can simplify some nodes in specific processes and make the configuration more intuitive. For example, to change the status of orders that have not been paid for more than 30 minutes to canceled, you can simply configure a scheduled task in the collection time field mode, select the start time as 30 minutes after the order created time field.

## Related Tips

### Scheduled Tasks in Application Not Started

If the configured time conditions are met but the entire NocoBase application service is in a stopped or shutdown state, the scheduled tasks that should be triggered at the corresponding time point will be missed, and after the service restarts, missed tasks will not be triggered again. So, it may be necessary to consider handling corresponding situations or backup measures when using it.

### Repeat Count

When the repeat count is configured in the end condition, it calculates the total number of executions of the same workflow including all versions. For example, if a scheduled task has been executed 10 times in version 1, and the repeat count is also set to 10 times, the workflow will no longer be triggered. Even if it is copied to a new version, it will not be triggered unless the repeat count is modified to a number greater than 10. However, if it is duplicated to a new workflow, the number of executions will be recalculated from 0. Without modifying the relevant configuration, the new workflow can be triggered 10 more times.

### Difference Between Interval Time and Advanced Mode in Repeat Rules

The interval time in the repeat rule is relative to the time point of the previous trigger (start time), while the advanced mode triggers at fixed time points. For example, if it is configured to trigger every 30 minutes, and the last trigger is at 2021-09-01 12:01:23, the next trigger time will be 2021-09-01 12:31:23. The advanced mode, same as cron, configures rules to trigger at fixed time points, for example, it can be configured to trigger at 01 and 31 minutes past every hour.

## Example

Suppose we want to check orders that have not been paid for more than 30 minutes every minute and automatically change their status to canceled. We'll implement it using both modes.

### Custom Time Mode

Create a workflow based on a scheduled task, select the "Custom Time" mode in the trigger configuration, choose any time point not later than the current time as the start time, select "Every Minute" for the repeat rule, and leave the end condition blank:

![Scheduled Task_Trigger Configuration_Custom Time Mode](https://static-docs.nocobase.com/71131e3f2034263f883062389b356cbd.png)

Then, configure other nodes according to the logic of the workflow, calculating a time 30 minutes before current system time, and updating the status to canceled if unpaid which created before then:

![Scheduled Task_Trigger Configuration_Custom Time Mode](https://static-docs.nocobase.com/188bc5287ffa1fb24a4e7baa1de6eb29.png)

After enabling the workflow, it will trigger every minute from the start time, calculate 30 minutes before now, and update the status of orders created before that time to canceled.

### Time Field of Collection Mode

Create a workflow based on a scheduled task, select the "Collection Time Field" mode in the trigger configuration, choose the "Orders" collection, select 30 minutes after the order created time as the start time, and choose "No Repeat" for the repeat rule:

![Scheduled Task_Trigger Configuration_Collection Time Field Mode_Trigger](https://static-docs.nocobase.com/d40d5aef57f42799d31cc5882dd94246.png)

Then, configure other nodes according to the logic of the workflow, update orders with the ID of the triggered data and the status "Unpaid" to canceled:

![Scheduled Task_Trigger Configuration_Collection Time Field Mode_Update Node](https://static-docs.nocobase.com/491dde9df8f773f5b14a4fd8ceac9d3e.png)

Unlike the custom time mode, there is no need to calculate 30 minutes before, because the triggered data context in the workflow contains the corresponding data record that meet the time conditions, so you can directly update the status of the corresponding orders.
