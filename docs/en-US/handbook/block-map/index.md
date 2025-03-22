# Block Map

<PluginInfo name="block-map"></PluginInfo>

## Overview

The Block Map is an essential tool for displaying and managing map-related data, offering support for four types of map fields: points, lines, circles, and polygons.

## Installation

This plugin comes pre-installed but must be activated before use.

![20240421120958](https://static-docs.nocobase.com/20240421120958.png)

After activation, map authentication details need to be configured.

![20240421121032](https://static-docs.nocobase.com/20240421121032.png)

Once configured, map fields can be integrated into your data tables.

![20240426171356](https://static-docs.nocobase.com/20240426171356.png)

## Adding Map Blocks

Map blocks can only be added if the associated data table includes map fields.

![20240408194209](https://static-docs.nocobase.com/20240408194209.png)

![20240408194420](https://static-docs.nocobase.com/20240408194420.png)

1. **Map Field:** Defines the type of map element (point, line, polygon).
2. **Marker Field:** Specifies map markers (applicable only for point types).

## Points

**Use Case:** Ideal for visualizing the distribution of retail store locations.

![20240408195630](https://static-docs.nocobase.com/20240408195630.png)

## Lines

Lines are constructed from a sequence of map points, commonly used to illustrate paths, such as delivery routes.

![20240408201608](https://static-docs.nocobase.com/20240408201608.png)

## Circles

![20240408201939](https://static-docs.nocobase.com/20240408201939.png)

## Polygons

**Use Case:** Perfect for area planning and zoning applications.

![Polygon](https://static-docs.nocobase.com/20240408200546.png)

## Block Settings

![20240421121949](https://static-docs.nocobase.com/20240421121949.png)

## Sequential Field Connections

Connect points according to the order defined by sequential fields.

![20240408202645](https://static-docs.nocobase.com/20240408202645.png)

![20240421121917](https://static-docs.nocobase.com/20240421121917.png)

![20240422101027](https://static-docs.nocobase.com/20240422101027.png)

## Default Map Zoom Level

The zoom level defaults to 13 but can be adjusted as needed.

![20240408202854](https://static-docs.nocobase.com/20240408202854.png)

## Defining Data Scope

**Example:** Filter for waybills marked as "shipped" (using relational fields). Only waybills within the specified data scope will be displayed.

![20240422101250](https://static-docs.nocobase.com/20240422101250.png)

For further details, refer to [Setting Data Scope](/handbook/ui/blocks/block-settings/data-scope).

## Adjusting Block Height

**Example:** Modify the height of the map block to suit your layout.

![20240605221111](https://static-docs.nocobase.com/20240605221111.gif)

For more information, see [Block Height](/handbook/ui/blocks/block-settings/block-height).

- [Edit Block Title](/handbook/ui/blocks/block-settings/block-title)
- [Connect Data Block](/handbook/ui/blocks/block-settings/connect-block)
- [Save as Block Template](/handbook/block-template)

## Configuration Operations

![20240421122020](https://static-docs.nocobase.com/20240421122020.png)

## Batch Point Selection

![20240422102334](https://static-docs.nocobase.com/20240422102334.gif)

- [Filter](/handbook/ui/actions/types/filter)
- [Add](/handbook/ui/actions/types/add-new)
- [Refresh](/handbook/ui/actions/types/refresh)
- [Bulk Update](/handbook/action-bulk-update)
- [Bulk Edit](/handbook/action-bulk-edit)
