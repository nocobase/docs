# Overview

NocoBase provides a unique DSL to describe the structure of data, known as Collection, which unifies the data structure from various sources, providing a reliable foundation for data management, analysis, and application.

![20240512161522](https://static-docs.nocobase.com/20240512161522.png)

To conveniently use various data models, it supports various types of collections:

- [General collection](/handbook/data-source-main/general-collection): Built-in common system fields;
- [Inheritance collection](/handbook/data-source-main/inheritance-collection): You can create a parent collection and then derive a child collection from the parent collection. The child collection will inherit the structure of the parent collection and can also define its own columns.
- [Tree collection](/handbook/collection-tree): Tree structure collection, currently only supports adjacency collection design;
- [Calendar Tabcollectionle](/handbook/calendar/calendar-collection): Used to create calendar-related event collections;
- [File collection](/handbook/file-manager/file-collection): Used for file storage management;
- [Expression collection](/handbook/workflow-dynamic-calculation/expression): Used for dynamic expression scenarios in workflows;
- [SQL collection](/handbook/collection-sql): Not an actual database collection, but quickly presents SQL queries in a structured manner;
- [Connect to database view](/handbook/collection-view): Connects to existing database views;
- [Connect to foreign data](/handbook/collection-fdw): Allows the database system to directly access and query data in external data sources, based on FDW technology.