# Overview

## Introduction

The Workflow plugin is a powerful tool commonly known as a Business Process Management (BPM) tool in the industry. It is used for designing and orchestration of business processes based on data models. By organizing the trigger conditions and flow nodes, it makes the business process running automatically.

In NocoBase applications, the Workflow plugin is designed for no-code scenarios, allowing users to orchestrate and process common business tasks through the UI. Therefore they can change the business processes in the system runtime dynamically.

Each workflow consists of a trigger and several nodes. Through the specific functionality of each node, the workflow describes the business logic that needs to be processed when the corresponding event occurs in the system. A typical workflow is illustrated in the following diagram:

![Example of workflow](https://static-docs.nocobase.com/4511011beac54779cb68e66555ebf8a8.png)

The functionality of the above workflow is as follows: When a user submits an order form, the system automatically checks the inventory of the products in the order. If there is sufficient stock, the inventory will be deducted; otherwise, the order will be updated as invalid.

As a more general perspective, workflows in NocoBase applications can address the following scenarios:

- **Data automation processing**: For example, automatically process data in a collection according to predefined workflows, such as calculating and updating associated data after a triggered event.
- **Human-involved business processes**: When a business process cannot be fully automated, partial decision-making can be assigned to user through manual nodes, such as approval and review. After the results of processing are submitted by user, the subsequent processes continue.
- **Integration with external systems**: API interfaces of external systems can be called through request nodes (or nodes that extend various types of third-party function calls) to achieve data interaction with external systems.

## Installation

Workflow is a built-in plugin in NocoBase and does not require additional installation.

## Learn More

- [Quick start](./quick-start.md)
- Advanced understanding
  - [Executions](./advanced/executions.md)
  - [Advanced Options](./advanced/options.md)
  - [Variables](./advanced/variables.md)
  - [Revisions](./advanced/revisions.md)
- [Triggers](./triggers/index.md)
- [Nodes](./nodes/index.md)
- [Development Guide](./development/index.md)
