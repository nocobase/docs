# After Successful Submission

## Introduction

The After successful submission configuration allows users to customize the response behavior upon completion. Users can define custom success messages, select automatic or manual dismissal of success notifications, and choose whether to remain on the current page, return to the previous popup or page, or redirect to a specified route, depending on the requirements.

![20240413213519](https://static-docs.nocobase.com/20240413213519.png)

![20241012125623](https://static-docs.nocobase.com/20241012125623.png)

- Stay on the current popup or page: After the operation is successful, the popup window or route is not closed
- Return to the previous popup or page (default): Close the popup window after the operation is successful
- Redirect to: After the operation succeeds, the route is switched to the specified route

## Refresh Data Blocks<Badge>v1.7.0+</Badge>

Supports refreshing data blocks after a successful operation. Users can select the data blocks to refresh through a dropdown menu, with available options including data blocks on the current page and in popups. The refresh data blocks operation is executed immediately after the operation succeeds, ensuring users see the latest data state.

### Operation Process
1. Open the "After Successful Submission" configuration popup.
2. In the "Refresh Data Blocks" option, select the data blocks that need to be refreshed.
3. Click the "OK" button to complete the configuration.

![428388359-4c20f495-619e-4392-95e3-eea2b6085a50](https://static-docs.nocobase.com/428388359-4c20f495-619e-4392-95e3-eea2b6085a50.gif)

### Redirect to a Specific Route

The `Submit` button in the form supports dynamically passing variables from the response data after a successful submission, to be used in a route redirection.

![20250405162542](https://static-docs.nocobase.com/20250405162542.png)

You can pass the response record data as variables into the path.
For example: After successfully creating a record, you can redirect to the details page of that record.
![20250405162732](https://static-docs.nocobase.com/20250405162732.png)
