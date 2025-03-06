# Link

## Introduction

The link operation, which functions via route navigation, supports the passing of variables. The target page can dynamically adjust its content based on the provided data, making it configurable for use within data blocks.

![20240603150755](https://static-docs.nocobase.com/20240603150755.png)

## Operation Configuration

![20240603150823](https://static-docs.nocobase.com/20240603150823.png)

### Edit Link

![20240603150944](https://static-docs.nocobase.com/20240603150944.png)

![20240603224322](https://static-docs.nocobase.com/20240603224322.png)

### Usage Scenarios

Example: The author and article tables have a one-to-many relationship. In the author table, you can configure the "View posts" link operation. By clicking this link, the author's ID is passed as a parameter to the article table, allowing the target page to filter the articles based on the specified author's ID.

![20240603151934](https://static-docs.nocobase.com/20240603151934.png)

### Open in New Window

When the "Open in new window" option is selected, the link will open in a new window.

![20240718160541](https://static-docs.nocobase.com/20240718160541.png)

Here is a complete configuration example:

<video width="100%" height="440" controls>

<source src="https://static-docs.nocobase.com/20240603224044.mp4" type="video/mp4">

</video>

- [Edit Button](/handbook/ui/actions/action-settings/edit-button): Customize the button's title, color, and icon.
- [Linkage Rule](/handbook/ui/actions/action-settings/linkage-rule): Dynamically control the button's state.
