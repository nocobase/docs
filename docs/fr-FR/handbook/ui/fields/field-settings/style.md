# Style Configuration

## Introduction

Users can adjust the style of fields in the style menu (currently supporting color and background color settings). Additionally, styles can be dynamically adjusted based on field values or system variables.

## How to Use

Suppose we have a bank transaction detail table with a column for transaction amounts. We want to set positive amounts (income) to green and negative amounts (expenses) to red. Here are the specific steps:

1. First, open the settings menu for the transaction amount field and click on the style option.
![Screenshot_2024-08-08_14-56-12-2024-08-08-22-57-37](https://static-docs.nocobase.com/Screenshot_2024-08-08_14-56-12-2024-08-08-22-57-37.png)

2. Click "Add Dynamic Rule" and set the first rule: when the transaction amount is greater than 0, set the field color to green.
![Screenshot_2024-08-08_14-58-17-2024-08-08-22-58-36](https://static-docs.nocobase.com/Screenshot_2024-08-08_14-58-17-2024-08-08-22-58-36.png)

3. Click "Add Dynamic Rule" again to set the second rule: when the transaction amount is less than 0, set the field color to red.

![Screenshot_2024-08-08_14-59-03-2024-08-08-22-59-14](https://static-docs.nocobase.com/Screenshot_2024-08-08_14-59-03-2024-08-08-22-59-14.png)

The final result will look like this:
![Screenshot_2024-08-08_14-59-20-2024-08-08-22-59-28](https://static-docs.nocobase.com/Screenshot_2024-08-08_14-59-20-2024-08-08-22-59-28.png)
