# Master vs External Data Sources

The differences between master data sources and external data sources in NocoBase are primarily reflected in four aspects: data source type support, collection type support, field type support, and backup and migration capabilities.

## 1. Data Source Type Support

For more details, see: [Data Source Manager](https://docs.nocobase.com/handbook/data-source-manager)

### Data Source Types

| Data Source Type | Master Data Source Support | External Data Source Support |
|------------------|---------------------------|------------------------------|
| PostgreSQL | ✅ | ✅ |
| MySQL | ✅ | ✅ |
| MariaDB | ✅ | ✅ |
| KingbaseES | ✅ | ✅ |
| MSSQL | ❌ | ✅ |
| Oracle | ❌ | ✅ |

### Collection Management

| Collection Management | Master Data Source Support | External Data Source Support |
|----------------------|-----------------------------|------------------------------|
| Basic Management | ✅ | ✅ |
| Visual Management | ✅ | ❌ |

## 2. Collection Type Support

For more details, see: [Collections](https://docs.nocobase.com/handbook/data-modeling/collection)

| Collection Type | Master Data Source | External Data Source | Description |
|----------------|-------------------|---------------------|-------------|
| General | ✅ | ✅ | Basic collection |
| View | ✅ | ✅ | Data source view |
| Inheritance | ✅ | ❌ | Supports data model inheritance, master data source only |
| File | ✅ | ❌ | Supports file uploads, master data source only |
| Comment | ✅ | ❌ | Built-in comment system, master data source only |
| Calendar | ✅ | ❌ | Collection for calendar views |
| Expression | ✅ | ❌ | Supports formula calculations |
| Tree | ✅ | ❌ | For tree structure data modeling |
| SQL | ✅ | ❌ | Collection defined through SQL |
| External Connection | ✅ | ❌ | Connection collection for external data sources, limited functionality |

## 3. Field Type Support

For more details, see: [Collection Fields](https://docs.nocobase.com/handbook/data-modeling/collection-fields)

### Basic Types

| Field Type | Master Data Source | External Data Source |
|-----------|----------------|-------------------|
| Single text | ✅ | ✅ |
| Long text | ✅ | ✅ |
| Phone | ✅ | ✅ |
| Email | ✅ | ✅ |
| URL | ✅ | ✅ |
| Integer | ✅ | ✅ |
| Number | ✅ | ✅ |
| Percent | ✅ | ✅ |
| Password | ✅ | ✅ |
| Color | ✅ | ✅ |
| Icon | ✅ | ✅ |

### Choice Types

| Field Type | Master Data Source | External Data Source |
|-----------|----------------|-------------------|
| Checkbox | ✅ | ✅ |
| Single select | ✅ | ✅ |
| Multiple select | ✅ | ✅ |
| Radio group | ✅ | ✅ |
| Checkbox group | ✅ | ✅ |
| China region | ✅ | ❌ |

### Media Types

| Field Type | Master Data Source | External Data Source |
|-----------|----------------|-------------------|
| Media | ✅ | ✅ |
| Markdown | ✅ | ✅ |
| Markdown(Vditor) | ✅ | ❌ |
| Rich text | ✅ | ✅ |
| Attachment(Association) | ✅ | ❌ |
| Attachment(URL) | ✅ | ✅ |

### Date & Time Types

| Field Type | Master Data Source | External Data Source |
|-----------|----------------|-------------------|
| Datetime(with time zone) | ✅ | ✅ |
| Datetime(without time zone) | ✅ | ✅ |
| Unix timestamp | ✅ | ✅ |
| Date(without time) | ✅ | ✅ |
| Time | ✅ | ✅ |

### Geometric Types

| Field Type | Master Data Source | External Data Source |
|-----------|----------------|-------------------|
| Point | ✅ | ✅ |
| Line | ✅ | ✅ |
| Circle | ✅ | ✅ |
| Polygon | ✅ | ✅ |

### Advanced Types

| Field Type | Master Data Source | External Data Source |
|-----------|----------------|-------------------|
| UUID | ✅ | ✅ |
| Nano ID | ✅ | ✅ |
| Sort | ✅ | ✅ |
| Formula | ✅ | ✅ |
| Sequence | ✅ | ✅ |
| JSON | ✅ | ✅ |
| Collection select | ✅ | ❌ |
| Encryption | ✅ | ✅ |

### System Info Fields

| Field Type | Master Data Source | External Data Source |
|-----------|----------------|-------------------|
| Created at | ✅ | ✅ |
| Last updated at | ✅ | ✅ |
| Created by | ✅ | ❌ |
| Last updated by | ✅ | ❌ |
| Table OID | ✅ | ❌ |

### Association Types

| Field Type | Master Data Source | External Data Source |
|-----------|----------------|-------------------|
| One-to-one | ✅ | ✅ |
| One-to-many | ✅ | ✅ |
| Many-to-one | ✅ | ✅ |
| Many-to-many | ✅ | ✅ |
| Many-to-many (array) | ✅ | ❌ |

:::info
Attachment fields depend on file collections, which are only supported by master data sources. Therefore, external data sources do not currently support attachment fields.
:::

## 4. Backup and Migration Support Comparison

| Feature | Master Data Source | External Data Source |
|---------|-------------------|---------------------|
| Backup & Restore | ✅ | ❌ (User managed) |
| Migration Management | ✅ | ❌ (User managed) |

:::info
NocoBase provides backup, restore, and structure migration capabilities for master data sources. For external data sources, these operations need to be completed independently by users according to their own data source environments. NocoBase does not provide built-in support.
:::

## Summary Comparison

| Comparison Item | Master Data Source | External Data Source |
|----------------|-------------------|---------------------|
| Data Source Types | PostgreSQL, MySQL, MariaDB, KingbaseES | PostgreSQL, MySQL, MariaDB, MSSQL, Oracle, KingbaseES |
| Collection Type Support | All collection types | Only general and view collections |
| Field Type Support | All field types | All field types except attachment fields |
| Backup & Migration | Built-in support | User managed |

## Recommendations

- **If you need to use NocoBase's advanced features** (such as comments, inheritance, file uploads, etc.), please use the **master data source**.
- **If you only need to read or connect to existing external data source data**, you can use **external data sources**.