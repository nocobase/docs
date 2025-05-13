# After Successful Submission

## Introduction

The After successful submission enables customization of the response behavior upon completion. It supports defining custom success messages, selecting automatic or manual dismissal of success notifications, and choosing whether to remain on the current page, return to the previous popup or page, or redirect to a specified route, depending on the requirements.

![20240413213519](https://static-docs.nocobase.com/20240413213519.png)

![20241012125623](https://static-docs.nocobase.com/20241012125623.png)

- Stay on the current popup or page: After the operation is successful, the pop-up window or route is not closed
- Return to the previous popup or page(default): Close the popup window after the operation is successful
- Redirect to: After the operation succeeds, the route is switched to the specified route

### Redirect to a Specific Route

The `Submit` button in the form supports dynamically passing variables from the response data after a successful submission, to be used in a route redirection.

![20250405162542](https://static-docs.nocobase.com/20250405162542.png)

You can pass the response record data as variables into the path.
For example: After successfully creating a record, you can redirect to the details page of that record.
![20250405162732](https://static-docs.nocobase.com/20250405162732.png)
