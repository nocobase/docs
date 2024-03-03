# 数据源

## 概述

NocoBase 提供了许多用于管理各种数据源的数据表和字段的插件，例如：

- `@nocobase/plugin-collection-manager` 数据表管理，用于管理用户自定义的数据表和字段
- `@nocobase/plugin-graph-collection-manager` 可视化数据表管理，类 ER 工具的方式查看管理用户自定义的数据表和字段
- `@nocobase/plugin-db-connection-manager` 连接第三方数据库，支持 MySQL 和 PostgreSQL
- `@nocobase/plugin-api-collection-manager` API 数据源管理

其中

- `@nocobase/plugin-collection-manager` 和 `@nocobase/plugin-graph-collection-manager` 用于管理用户自定义的数据表和字段
- `@nocobase/plugin-db-connection-manager` 可以直接连接现有的数据库，目前已经支持 MySQL 和 PostgreSQL 数据库
- `@nocobase/plugin-api-collection-manager` API 数据源管理

每个数据源都有自己的 Collections 和 Resources

- Collection 是一种用于描述数据结构的协议
- Resource 是一种用于描述资源和操作的协议

更多内容详见「数据表和字段」和「资源和操作」章节。

## 相关 API 总纲

- DataSourceManager
  - add()
  - middleware()
- DataSource
  - collectionManager
    - collectionManager.registerModels()
    - collectionManager.registerRepositories()
    - collectionManager.registerFieldTypes()
    - collectionManager.registerCollectionTemplates()
    - collectionManager.registerFieldInterfaces()
    - collectionManager.defineCollection()
    - collectionManager.extendCollection()
    - collectionManager.getCollections()
  - resourceManager
    - resourceManager.registerActionHandlers()
    - resourceManager.define()
    - resourceManager.isDefined()
    - resourceManager.use()
  - middleware()

## 如何扩展其他数据源

```ts
interface IDataSource {
  addCollection: (collection) => void;
  addCollections: (collections) => void;
  getCollections: () => Collection[];
  middleware: () => KoaMiddleware;
}

class GitHubDataSource {

}

class PluginCustomDataSourceServer extends Plugin {
  async load() {
    const dataSource1 = new GitHubDataSource({
      name: 'ds1',
      ...
    });
    dataSource1.addCollections({});
    this.dataSourceManager.add(dataSource1);
  }
}
```

## 示例插件

- 待补充