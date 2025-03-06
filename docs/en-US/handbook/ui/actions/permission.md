# Operation Permissions

## Introduction

In NocoBase, operation permissions are mainly divided into two categories:

- **Collection Resource Permissions**: Used to uniformly control the basic operation permissions such as Create, View, Update, and Delete for different roles. These permissions apply to the entire collection under the data source, ensuring that the corresponding operations for the collection are consistent across different pages or pop-ups.
- **Independent Operation Permissions**: Used to fine-tune the control over specific operations for different roles, such as triggering workflows, custom requests, external links, etc. These permissions are for operation-level control, allowing different roles to perform specific operations without affecting the overall collection permission settings.

### Collection Resource Permissions

In NocoBase’s permission system, collection operation permissions are generally classified based on CRUD (Create, Read, Update, Delete) operations to ensure consistency and standardization of permission management. For example:

- **Create Permission**: Controls all actions related to creating data in the collection, such as adding or duplicating data. If a role has the create permission for the collection, the create and duplicate operations will be visible and available in all pages or pop-ups.
- **Delete Permission**: Controls the deletion operation for the collection, including bulk deletion in collection blocks or single record deletion in detail blocks. Permissions remain consistent for all types of deletion actions.

- **Update Permission**: Controls update-related operations, such as editing or modifying records.
- **View Permission**: Controls the visibility of the data in the collection. The relevant data blocks (list, detail, etc.) will only be visible if the role has the view permission for the collection.

This generalized permission management method is suitable for standardized data permission control, ensuring that the same operations on the same collection across different pages, pop-ups, and blocks follow consistent permission rules, making it unified and maintainable.

#### Global Permissions

Global permissions apply to all collections under the data source and are categorized by resource type as shown below:

![20250306204756](https://static-docs.nocobase.com/20250306204756.png)

#### Specific Collection Permissions

Specific collection permissions override global permissions and allow more granular control over resource access for individual collections. These permissions are divided into two aspects:

1. **Operation Permissions**: These include add, view, edit, delete, export, and import operations. Permissions are configured according to data range dimensions:

   - **All Data**: Allows the user to perform operations on all records in the collection.
   - **Own Data**: Limits the user to performing operations only on the data they created.

2. **Field Permissions**: Field permissions allow configuration of access rights for each field in different operations. For example, some fields may be set to view-only mode and cannot be edited.

![20250306205042](https://static-docs.nocobase.com/20250306205042.png)

### Independent Operation Permissions

Unlike unified operation permissions, independent operation permissions are applied specifically to individual operations. This allows the same operation to have different permission settings at different locations.

This permission model is ideal for personalized operations, such as:

- **Triggering Workflows**: Workflow triggers might need to be called differently on different pages, and thus require independent permission configuration.
- **Custom Operations**: Specific business logic operations that should be managed independently.
- **Pop-ups, Links, etc.**: These operations can be individually configured for visibility and permissions.

Currently, the following operations support independent permission configuration:

- Pop-ups (control visibility and operation permissions of pop-up operations)
- Links (restrict whether roles can access external or internal links)
- Triggering workflows (allow different workflows to be triggered on different pages)
- Operations in the action panel (e.g., scan, pop-up operations, trigger workflows, external links)
- Custom Requests (send requests to third-party services)

By configuring independent operation permissions, fine-grained control over the permissions of different roles is possible, making permission management more flexible.

![20250306215749](https://static-docs.nocobase.com/20250306215749.png)

If no roles are set, all roles are visible by default.

![20250306215854](https://static-docs.nocobase.com/20250306215854.png)
