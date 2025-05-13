# How NocoBase works

NocoBase supports all features through a microkernel and pluginized architectural design.

## Microkernel

NocoBase's kernel is similar to a development framework that defines the application lifecycle and standardizes the interface protocols of each layer. The basic structure of NocoBase is shown in the following diagram:

![how-micro-core](https://static-docs.nocobase.com/how-micro-core.png)

The data model is used as the underlying driver, the block-based interface is used as the user layer, and the business logic layer is used as the bridge connecting the two and carrying all kinds of business rules, so that the data can flow cyclically through the user's operations.

NocoBase defines standard protocols at the following three main levels:
1. data model: based on the upper layer of relational database ORM encapsulation, standardized data modeling description (refer to [Collections & Fields](/development/server/collections)).
2. HTTP routing: RESTful-like interface form based on resources and actions definitions (refer to [Resources and Actions](/development/server/resources-actions)).
3. client-side interface: Formily 2.0-based JSON Schema to describe customized page and block layouts (refer to [UI Schema](/development/client/ui-schema/quick-start)).

Based on these protocols, it also makes the development of other modules more standardized and easier.

### Pluginization

NocoBase opens up extensible interfaces in all aspects of the application lifecycle, including field types, collection types, third-party data sources in the data model, middleware insertion in the business logic layer, interface components, blocks, etc., and in all aspects of the entire application lifecycle (startup, stopping, and plug-in loading), and even many plug-ins provide secondary extensible interfaces. These designs fully provide a variety of extension possibilities for application development, and all the built-in features of NocoBase are also composed through this design:

![how-plugins-en](https://static-docs.nocobase.com/how-plugins-en.png)

Plugins can be used to extend the required functionality in any life cycle of the application, such as the Permissions plugin, which contains customized data tables, business processing for request middleware, and interfaces for front-end administration.
Through this design, NocoBase not only realizes rich no-code features, but also supports free extensions when the built-in functionality cannot meet the needs.

### Learn more

Please refer to the section on [Plugin development](/development) to start extending by developing plugins.