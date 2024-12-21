# Quick start

## 1. Create Schema Component

Render registered components by configuring `x-component`.

Key Concepts:

- [UI Schema Protocol](/development/client/ui-schema/what-is-ui-schema)
- [Schema Rendering](/development/client/ui-schema/rendering)
- [Extending Schema Components](/development/client/ui-schema/extending)

<code src="./demos/demo1.tsx"></code>

## 2. Add Schema Component to the Page

Insert new components adjacent to existing Schemas by configuring `x-initializer`.

Key Concepts:

- [Designable Designer](/development/client/ui-schema/designable)
- [UI Schema Protocol - x-initializer Parameter](/development/client/ui-schema/what-is-ui-schema#x-initializer)
- [SchemaInitializer](/development/client/ui-schema/initializer)

<code src="./demos/demo2.tsx"></code>

## 3. Add Designer Toolbar to Schema

Provide a parameter configurator for Schema components by configuring `x-settings`. The designer toolbar has drag-and-drop functionality enabled by default.

Key Concepts:

- [UI Schema Protocol - x-settings Parameter](/development/client/ui-schema/what-is-ui-schema#x-settings)
- [SchemaSettings](/development/client/ui-schema/settings)
- [Dragging and Moving Existing Schema Nodes](/development/client/ui-schema/designable#move-between-nodes)

<code src="./demos/demo3.tsx"></code>