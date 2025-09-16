"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[88122],{288122:function(o,e,a){a.r(e),a.d(e,{texts:function(){return t}});const t=[{value:"Database is the database interaction tool provided by NocoBase, it provides very convenient database interaction features for no-code and low-code applications. The supported databases are:",paraId:0,tocIndex:1},{value:"SQLite 3.8.8+",paraId:1,tocIndex:1},{value:"MySQL 8.0.17+",paraId:1,tocIndex:1},{value:"PostgreSQL 10.0+",paraId:1,tocIndex:1},{value:"In ",paraId:2,tocIndex:2},{value:"Database",paraId:2,tocIndex:2},{value:" constructor, database connection can be configured by passing the ",paraId:2,tocIndex:2},{value:"options",paraId:2,tocIndex:2},{value:" parameter.",paraId:2,tocIndex:2},{value:`const { Database } = require('@nocobase/database');

// MySQL database configuration parameters
const database = new Database({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'nocobase',
  username: 'root',
  password: 'password'
})

// MySQL \\ PostgreSQL database configuration parameters
const database = new Database({
  dialect: /* 'postgres' or 'mysql' */,
  database: 'database',
  username: 'username',
  password: 'password',
  host: 'localhost',
  port: 'port'
})

`,paraId:3,tocIndex:2},{value:"Refer to ",paraId:4,tocIndex:2},{value:"Constructor",paraId:5,tocIndex:2},{value:" for detailed configurations.",paraId:4,tocIndex:2},{value:"Database",paraId:6,tocIndex:3},{value:" defines database structure through ",paraId:6,tocIndex:3},{value:"Collection",paraId:6,tocIndex:3},{value:", one ",paraId:6,tocIndex:3},{value:"Collection",paraId:6,tocIndex:3},{value:" object represents one table in the database.",paraId:6,tocIndex:3},{value:`// Define Collection
const UserCollection = database.collection({
  name: 'users',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'age',
      type: 'integer',
    },
  ],
});
`,paraId:7,tocIndex:3},{value:"After the database structure is defined, use ",paraId:8,tocIndex:3},{value:"sync()",paraId:8,tocIndex:3},{value:" method to synchronize the database structure.",paraId:8,tocIndex:3},{value:`await database.sync();
`,paraId:9,tocIndex:3},{value:"Refer to ",paraId:10,tocIndex:3},{value:"Collection",paraId:11,tocIndex:3},{value:" for detailed usage of ",paraId:10,tocIndex:3},{value:"Collection",paraId:10,tocIndex:3},{value:".",paraId:10,tocIndex:3},{value:"Database",paraId:12,tocIndex:4},{value:" operates data through ",paraId:12,tocIndex:4},{value:"Repository",paraId:12,tocIndex:4},{value:".",paraId:12,tocIndex:4},{value:`const UserRepository = UserCollection.repository();

// Create
await UserRepository.create({
  name: 'Mark',
  age: 18,
});

// Query
const user = await UserRepository.findOne({
  filter: {
    name: 'Mark',
  },
});

// Update
await UserRepository.update({
  values: {
    age: 20,
  },
});

// Delete
await UserRepository.destroy(user.id);
`,paraId:13,tocIndex:4},{value:"Refer to ",paraId:14,tocIndex:4},{value:"Repository",paraId:15,tocIndex:4},{value:" for details of data CRUD.",paraId:14,tocIndex:4},{value:"Signature",paraId:16,tocIndex:5},{value:"constructor(options: DatabaseOptions)",paraId:17,tocIndex:5},{value:"Create a database instance.",paraId:18,tocIndex:5},{value:"Parameter",paraId:19,tocIndex:5},{value:"Name",paraId:20,tocIndex:5},{value:"Type",paraId:20,tocIndex:5},{value:"Default",paraId:20,tocIndex:5},{value:"Description",paraId:20,tocIndex:5},{value:"options.host",paraId:20,tocIndex:5},{value:"string",paraId:20,tocIndex:5},{value:"'localhost'",paraId:20,tocIndex:5},{value:"Database host",paraId:20,tocIndex:5},{value:"options.port",paraId:20,tocIndex:5},{value:"number",paraId:20,tocIndex:5},{value:"-",paraId:20,tocIndex:5},{value:"Database service port, default port depends on the type of database used",paraId:20,tocIndex:5},{value:"options.username",paraId:20,tocIndex:5},{value:"string",paraId:20,tocIndex:5},{value:"-",paraId:20,tocIndex:5},{value:"Database username",paraId:20,tocIndex:5},{value:"options.password",paraId:20,tocIndex:5},{value:"string",paraId:20,tocIndex:5},{value:"-",paraId:20,tocIndex:5},{value:"Database password",paraId:20,tocIndex:5},{value:"options.database",paraId:20,tocIndex:5},{value:"string",paraId:20,tocIndex:5},{value:"-",paraId:20,tocIndex:5},{value:"Database name",paraId:20,tocIndex:5},{value:"options.dialect",paraId:20,tocIndex:5},{value:"string",paraId:20,tocIndex:5},{value:"'mysql'",paraId:20,tocIndex:5},{value:"Database type",paraId:20,tocIndex:5},{value:"options.storage?",paraId:20,tocIndex:5},{value:"string",paraId:20,tocIndex:5},{value:"':memory:'",paraId:20,tocIndex:5},{value:"Storage mode for SQLite",paraId:20,tocIndex:5},{value:"options.logging?",paraId:20,tocIndex:5},{value:"boolean",paraId:20,tocIndex:5},{value:"false",paraId:20,tocIndex:5},{value:"Whether to enable logging",paraId:20,tocIndex:5},{value:"options.define?",paraId:20,tocIndex:5},{value:"Object",paraId:20,tocIndex:5},{value:"{}",paraId:20,tocIndex:5},{value:"Default table definition parameters",paraId:20,tocIndex:5},{value:"options.tablePrefix?",paraId:20,tocIndex:5},{value:"string",paraId:20,tocIndex:5},{value:"''",paraId:20,tocIndex:5},{value:"NocoBase extension, table prefix",paraId:20,tocIndex:5},{value:"options.migrator?",paraId:20,tocIndex:5},{value:"UmzugOptions",paraId:20,tocIndex:5},{value:"{}",paraId:20,tocIndex:5},{value:"NocoBase extension, parameters for migrator, refer to ",paraId:20,tocIndex:5},{value:"Umzug",paraId:20,tocIndex:5},{value:" for the implementation",paraId:20,tocIndex:5},{value:"addMigration()",paraId:21},{value:"Add single migration file.",paraId:22,tocIndex:7},{value:"Signature",paraId:23,tocIndex:7},{value:"addMigration(options: MigrationItem)",paraId:24,tocIndex:7},{value:"Parameter",paraId:25,tocIndex:7},{value:"Name",paraId:26,tocIndex:7},{value:"Type",paraId:26,tocIndex:7},{value:"Default",paraId:26,tocIndex:7},{value:"Description",paraId:26,tocIndex:7},{value:"options.name",paraId:26,tocIndex:7},{value:"string",paraId:26,tocIndex:7},{value:"-",paraId:26,tocIndex:7},{value:"Name of the migration file",paraId:26,tocIndex:7},{value:"options.context?",paraId:26,tocIndex:7},{value:"string",paraId:26,tocIndex:7},{value:"-",paraId:26,tocIndex:7},{value:"Context of the migration file",paraId:26,tocIndex:7},{value:"options.migration?",paraId:26,tocIndex:7},{value:"typeof Migration",paraId:26,tocIndex:7},{value:"-",paraId:26,tocIndex:7},{value:"Custom type of the migration file",paraId:26,tocIndex:7},{value:"options.up",paraId:26,tocIndex:7},{value:"Function",paraId:26,tocIndex:7},{value:"-",paraId:26,tocIndex:7},{value:"up",paraId:26,tocIndex:7},{value:" method of the migration file",paraId:26,tocIndex:7},{value:"options.down",paraId:26,tocIndex:7},{value:"Function",paraId:26,tocIndex:7},{value:"-",paraId:26,tocIndex:7},{value:"down",paraId:26,tocIndex:7},{value:" method of the migration file",paraId:26,tocIndex:7},{value:"Example",paraId:27,tocIndex:7},{value:`db.addMigration({
  name: '20220916120411-test-1',
  async up() {
    const queryInterface = this.context.db.sequelize.getQueryInterface();
    await queryInterface.query(/* your migration sqls */);
  },
});
`,paraId:28,tocIndex:7},{value:"addMigrations()",paraId:21},{value:"Add the migration files in the specified directory.",paraId:29,tocIndex:8},{value:"Signature",paraId:30,tocIndex:8},{value:"addMigrations(options: AddMigrationsOptions): void",paraId:31,tocIndex:8},{value:"Parameter",paraId:32,tocIndex:8},{value:"Name",paraId:33,tocIndex:8},{value:"Type",paraId:33,tocIndex:8},{value:"Default",paraId:33,tocIndex:8},{value:"Description",paraId:33,tocIndex:8},{value:"options.directory",paraId:33,tocIndex:8},{value:"string",paraId:33,tocIndex:8},{value:"''",paraId:33,tocIndex:8},{value:"Directory where the migration files are located",paraId:33,tocIndex:8},{value:"options.extensions",paraId:33,tocIndex:8},{value:"string[]",paraId:33,tocIndex:8},{value:"['js', 'ts']",paraId:33,tocIndex:8},{value:"File extensions",paraId:33,tocIndex:8},{value:"options.namespace?",paraId:33,tocIndex:8},{value:"string",paraId:33,tocIndex:8},{value:"''",paraId:33,tocIndex:8},{value:"Namespace",paraId:33,tocIndex:8},{value:"options.context?",paraId:33,tocIndex:8},{value:"Object",paraId:33,tocIndex:8},{value:"{ db }",paraId:33,tocIndex:8},{value:"Context of the migration files",paraId:33,tocIndex:8},{value:"Example",paraId:34,tocIndex:8},{value:`db.addMigrations({
  directory: path.resolve(__dirname, './migrations'),
  namespace: 'test',
});
`,paraId:35,tocIndex:8},{value:"inDialect()",paraId:21},{value:"Check whether the current database type is the specified type.",paraId:36,tocIndex:10},{value:"Signature",paraId:37,tocIndex:10},{value:"inDialect(dialect: string[]): boolean",paraId:38,tocIndex:10},{value:"Parameter",paraId:39,tocIndex:10},{value:"Name",paraId:40,tocIndex:10},{value:"Type",paraId:40,tocIndex:10},{value:"Default",paraId:40,tocIndex:10},{value:"Description",paraId:40,tocIndex:10},{value:"dialect",paraId:40,tocIndex:10},{value:"string[]",paraId:40,tocIndex:10},{value:"-",paraId:40,tocIndex:10},{value:"Database type, options are ",paraId:40,tocIndex:10},{value:"mysql",paraId:40,tocIndex:10},{value:", ",paraId:40,tocIndex:10},{value:"postgres",paraId:40,tocIndex:10},{value:" and ",paraId:40,tocIndex:10},{value:"mariadb",paraId:40,tocIndex:10},{value:"getTablePrefix()",paraId:21},{value:"Get the table name prefix in the configuration.",paraId:41,tocIndex:11},{value:"Signature",paraId:42,tocIndex:11},{value:"getTablePrefix(): string",paraId:43,tocIndex:11},{value:"collection()",paraId:21},{value:"Define a data table. This is like the ",paraId:44,tocIndex:13},{value:"define",paraId:44,tocIndex:13},{value:" method of Sequelize, which only creates table structure in memory. Call the ",paraId:44,tocIndex:13},{value:"sync",paraId:44,tocIndex:13},{value:" method if needs to be persisted to the database.",paraId:44,tocIndex:13},{value:"Signature",paraId:45,tocIndex:13},{value:"collection(options: CollectionOptions): Collection",paraId:46,tocIndex:13},{value:"Parameter",paraId:47,tocIndex:13},{value:"All configuration parameters of ",paraId:48,tocIndex:13},{value:"options",paraId:48,tocIndex:13},{value:" is consistent with the constructor of the ",paraId:48,tocIndex:13},{value:"Collection",paraId:48,tocIndex:13},{value:" class, refer to ",paraId:48,tocIndex:13},{value:"Collection",paraId:49,tocIndex:13},{value:".",paraId:48,tocIndex:13},{value:"Event",paraId:50,tocIndex:13},{value:"'beforeDefineCollection'",paraId:51,tocIndex:13},{value:": Trigger before defining the table.",paraId:51,tocIndex:13},{value:"'afterDefineCollection'",paraId:51,tocIndex:13},{value:": Trigger after defining the table.",paraId:51,tocIndex:13},{value:"Example",paraId:52,tocIndex:13},{value:`db.collection({
  name: 'books',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'float',
      name: 'price',
    },
  ],
});

// sync collection as table to db
await db.sync();
`,paraId:53,tocIndex:13},{value:"getCollection()",paraId:21},{value:"Get a defined data table.",paraId:54,tocIndex:14},{value:"Signature",paraId:55,tocIndex:14},{value:"getCollection(name: string): Collection",paraId:56,tocIndex:14},{value:"Parameter",paraId:57,tocIndex:14},{value:"Name",paraId:58,tocIndex:14},{value:"Type",paraId:58,tocIndex:14},{value:"Default",paraId:58,tocIndex:14},{value:"Description",paraId:58,tocIndex:14},{value:"name",paraId:58,tocIndex:14},{value:"string",paraId:58,tocIndex:14},{value:"-",paraId:58,tocIndex:14},{value:"Table name",paraId:58,tocIndex:14},{value:"Example",paraId:59,tocIndex:14},{value:`const collection = db.getCollection('books');
`,paraId:60,tocIndex:14},{value:"hasCollection()",paraId:21},{value:"Check whether a specified data table is defined.",paraId:61,tocIndex:15},{value:"Signature",paraId:62,tocIndex:15},{value:"hasCollection(name: string): boolean",paraId:63,tocIndex:15},{value:"Parameter",paraId:64,tocIndex:15},{value:"Name",paraId:65,tocIndex:15},{value:"Type",paraId:65,tocIndex:15},{value:"Default",paraId:65,tocIndex:15},{value:"Description",paraId:65,tocIndex:15},{value:"name",paraId:65,tocIndex:15},{value:"string",paraId:65,tocIndex:15},{value:"-",paraId:65,tocIndex:15},{value:"Table name",paraId:65,tocIndex:15},{value:"Example",paraId:66,tocIndex:15},{value:`db.collection({ name: 'books' });

db.hasCollection('books'); // true

db.hasCollection('authors'); // false
`,paraId:67,tocIndex:15},{value:"removeCollection()",paraId:21},{value:"Remove a defined data table. It is to remove from memory only, call the ",paraId:68,tocIndex:16},{value:"sync",paraId:68,tocIndex:16},{value:" method if needs to be persisted to the database.",paraId:68,tocIndex:16},{value:"Signature",paraId:69,tocIndex:16},{value:"removeCollection(name: string): void",paraId:70,tocIndex:16},{value:"Parameter",paraId:71,tocIndex:16},{value:"Name",paraId:72,tocIndex:16},{value:"Type",paraId:72,tocIndex:16},{value:"Default",paraId:72,tocIndex:16},{value:"Description",paraId:72,tocIndex:16},{value:"name",paraId:72,tocIndex:16},{value:"string",paraId:72,tocIndex:16},{value:"-",paraId:72,tocIndex:16},{value:"Table name",paraId:72,tocIndex:16},{value:"Event",paraId:73,tocIndex:16},{value:"'beforeRemoveCollection'",paraId:74,tocIndex:16},{value:": Trigger before removing the table.",paraId:74,tocIndex:16},{value:"'afterRemoveCollection'",paraId:74,tocIndex:16},{value:": Trigger after removing the table",paraId:74,tocIndex:16},{value:"Example",paraId:75,tocIndex:16},{value:`db.collection({ name: 'books' });

db.removeCollection('books');
`,paraId:76,tocIndex:16},{value:"import()",paraId:21},{value:"Load all files in the import file directory into memory as the configuration of collection.",paraId:77,tocIndex:17},{value:"Signature",paraId:78,tocIndex:17},{value:"async import(options: { directory: string; extensions?: ImportFileExtension[] }): Promise<Map<string, Collection>>",paraId:79,tocIndex:17},{value:"Parameter",paraId:80,tocIndex:17},{value:"Name",paraId:81,tocIndex:17},{value:"Type",paraId:81,tocIndex:17},{value:"Default",paraId:81,tocIndex:17},{value:"Description",paraId:81,tocIndex:17},{value:"options.directory",paraId:81,tocIndex:17},{value:"string",paraId:81,tocIndex:17},{value:"-",paraId:81,tocIndex:17},{value:"Path of directory to be imported",paraId:81,tocIndex:17},{value:"options.extensions",paraId:81,tocIndex:17},{value:"string[]",paraId:81,tocIndex:17},{value:"['ts', 'js']",paraId:81,tocIndex:17},{value:"Scan for specific suffixes",paraId:81,tocIndex:17},{value:"Example",paraId:82,tocIndex:17},{value:"The collection defined by file ",paraId:83,tocIndex:17},{value:"./collections/books.ts",paraId:83,tocIndex:17},{value:" is as below:",paraId:83,tocIndex:17},{value:`export default {
  name: 'books',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
};
`,paraId:84,tocIndex:17},{value:"Import the relevant configurations when loading the plugin:",paraId:85,tocIndex:17},{value:`class Plugin {
  async load() {
    await this.app.db.import({
      directory: path.resolve(__dirname, './collections'),
    });
  }
}
`,paraId:86,tocIndex:17},{value:"registerFieldTypes()",paraId:21},{value:"Register custom field type.",paraId:87,tocIndex:19},{value:"Signature",paraId:88,tocIndex:19},{value:"registerFieldTypes(fieldTypes: MapOf<typeof Field>): void",paraId:89,tocIndex:19},{value:"Parameter",paraId:90,tocIndex:19},{value:"fieldTypes",paraId:91,tocIndex:19},{value:" is a key-value pair, where key is the field type name, and value is the field type class.",paraId:91,tocIndex:19},{value:"Example",paraId:92,tocIndex:19},{value:`import { Field } from '@nocobase/database';

class MyField extends Field {
  // ...
}

db.registerFieldTypes({
  myField: MyField,
});
`,paraId:93,tocIndex:19},{value:"registerModels()",paraId:21},{value:"Register custom data model class.",paraId:94,tocIndex:20},{value:"Signature",paraId:95,tocIndex:20},{value:"registerModels(models: MapOf<ModelStatic<any>>): void",paraId:96,tocIndex:20},{value:"Parameter",paraId:97,tocIndex:20},{value:"models",paraId:98,tocIndex:20},{value:" is a key-value pair, where key is the data model name, and value is the data model class.",paraId:98,tocIndex:20},{value:"Example",paraId:99,tocIndex:20},{value:`import { Model } from '@nocobase/database';

class MyModel extends Model {
  // ...
}

db.registerModels({
  myModel: MyModel,
});

db.collection({
  name: 'myCollection',
  model: 'myModel',
});
`,paraId:100,tocIndex:20},{value:"registerRepositories()",paraId:21},{value:"Register custom data repository class.",paraId:101,tocIndex:21},{value:"Signature",paraId:102,tocIndex:21},{value:"registerRepositories(repositories: MapOf<RepositoryType>): void",paraId:103,tocIndex:21},{value:"Parameter",paraId:104,tocIndex:21},{value:"repositories",paraId:105,tocIndex:21},{value:" is a key-value pair, where key is the data repository name, and value is the data repository class.",paraId:105,tocIndex:21},{value:"Example",paraId:106,tocIndex:21},{value:`import { Repository } from '@nocobase/database';

class MyRepository extends Repository {
  // ...
}

db.registerRepositories({
  myRepository: MyRepository,
});

db.collection({
  name: 'myCollection',
  repository: 'myRepository',
});
`,paraId:107,tocIndex:21},{value:"registerOperators()",paraId:21},{value:"Register custom data query operator.",paraId:108,tocIndex:22},{value:"Signature",paraId:109,tocIndex:22},{value:"registerOperators(operators: MapOf<OperatorFunc>)",paraId:110,tocIndex:22},{value:"Parameter",paraId:111,tocIndex:22},{value:"operators",paraId:112,tocIndex:22},{value:" is a key-value pair, where key is the operator name, and value is the generating function of the comparison operator statement.",paraId:112,tocIndex:22},{value:"Example",paraId:113,tocIndex:22},{value:`db.registerOperators({
  $dateOn(value) {
    return {
      [Op.and]: [
        { [Op.gte]: stringToDate(value) },
        { [Op.lt]: getNextDay(value) },
      ],
    };
  },
});

db.getRepository('books').count({
  filter: {
    createdAt: {
      // registered operator
      $dateOn: '2020-01-01',
    },
  },
});
`,paraId:114,tocIndex:22},{value:"getModel()",paraId:21},{value:"Get the defined data model class. If no custom model class has been registered before, the default model class of Sequelize will be returned. The default name is the same as the name defined by collection.",paraId:115,tocIndex:23},{value:"Signature",paraId:116,tocIndex:23},{value:"getModel(name: string): Model",paraId:117,tocIndex:23},{value:"Parameter",paraId:118,tocIndex:23},{value:"Name",paraId:119,tocIndex:23},{value:"Type",paraId:119,tocIndex:23},{value:"Default",paraId:119,tocIndex:23},{value:"Description",paraId:119,tocIndex:23},{value:"name",paraId:119,tocIndex:23},{value:"string",paraId:119,tocIndex:23},{value:"-",paraId:119,tocIndex:23},{value:"Registered model name",paraId:119,tocIndex:23},{value:"Example",paraId:120,tocIndex:23},{value:`db.registerModels({
  books: class MyModel extends Model {},
});

const ModelClass = db.getModel('books');

console.log(ModelClass.prototype instanceof MyModel); // true
`,paraId:121,tocIndex:23},{value:"Note: The model class retrieved from collection is not strictly equivalent to the model class at registration, but is inherited from the model class at registration. Since the properties of Sequelize's model class are modified during initialization, NocoBase automatically handles this inheritance relationship. All the definitions work fine except that the classes are not equal.",paraId:122,tocIndex:23},{value:"getRepository()",paraId:21},{value:"Get the defined data repository class. If no custom data repository class has been registered before, the default data repository class of NocoBase will be returned. The default name is the same as the name defined by collection.",paraId:123,tocIndex:24},{value:"Data repository class is mainly used for the CRUD operations based on data model, refer to ",paraId:124,tocIndex:24},{value:"Repository",paraId:125,tocIndex:24},{value:".",paraId:124,tocIndex:24},{value:"Signature",paraId:126,tocIndex:24},{value:"getRepository(name: string): Repository",paraId:127,tocIndex:24},{value:"getRepository(name: string, relationId?: string | number): Repository",paraId:127,tocIndex:24},{value:"Parameter",paraId:128,tocIndex:24},{value:"Name",paraId:129,tocIndex:24},{value:"Type",paraId:129,tocIndex:24},{value:"Default",paraId:129,tocIndex:24},{value:"Description",paraId:129,tocIndex:24},{value:"name",paraId:129,tocIndex:24},{value:"string",paraId:129,tocIndex:24},{value:"-",paraId:129,tocIndex:24},{value:"Registered data repository name",paraId:129,tocIndex:24},{value:"relationId",paraId:129,tocIndex:24},{value:"string",paraId:129,tocIndex:24},{value:" | ",paraId:129,tocIndex:24},{value:"number",paraId:129,tocIndex:24},{value:"-",paraId:129,tocIndex:24},{value:"Foreign key value for relational data",paraId:129,tocIndex:24},{value:"When the name contains relationship in the form of ",paraId:130,tocIndex:24},{value:"'tables.relactions'",paraId:130,tocIndex:24},{value:", the related data repository class is returned. If the second parameter is provided, the data repository will be used (query, modify, etc.) based on the foreign key values of the relational data.",paraId:130,tocIndex:24},{value:"Example",paraId:131,tocIndex:24},{value:"Suppose there are two data tables ",paraId:132,tocIndex:24},{value:"posts",paraId:132,tocIndex:24},{value:" and ",paraId:132,tocIndex:24},{value:"authors",paraId:132,tocIndex:24},{value:", and there is a foreign key in the ",paraId:132,tocIndex:24},{value:"posts",paraId:132,tocIndex:24},{value:" table points to the ",paraId:132,tocIndex:24},{value:"authors",paraId:132,tocIndex:24},{value:" table:",paraId:132,tocIndex:24},{value:`const AuthorsRepo = db.getRepository('authors');
const author1 = AuthorsRepo.create({ name: 'author1' });

const PostsRepo = db.getRepository('authors.posts', author1.id);
const post1 = AuthorsRepo.create({ title: 'post1' });
asset(post1.authorId === author1.id); // true
`,paraId:133,tocIndex:24},{value:"on()",paraId:21},{value:"Listen for database events.",paraId:134,tocIndex:26},{value:"Signature",paraId:135,tocIndex:26},{value:"on(event: string, listener: (...args: any[]) => void | Promise<void>): void",paraId:136,tocIndex:26},{value:"Parameter",paraId:137,tocIndex:26},{value:"Name",paraId:138,tocIndex:26},{value:"Type",paraId:138,tocIndex:26},{value:"Default",paraId:138,tocIndex:26},{value:"Description",paraId:138,tocIndex:26},{value:"event",paraId:138,tocIndex:26},{value:"string",paraId:138,tocIndex:26},{value:"-",paraId:138,tocIndex:26},{value:"Event name",paraId:138,tocIndex:26},{value:"listener",paraId:138,tocIndex:26},{value:"Function",paraId:138,tocIndex:26},{value:"-",paraId:138,tocIndex:26},{value:"Event listener",paraId:138,tocIndex:26},{value:"Event name supports Model event of Sequelize by default. Global event is listened to by the name ",paraId:139,tocIndex:26},{value:"<sequelize_model_global_event>",paraId:139,tocIndex:26},{value:", single Model event is listened to by the name ",paraId:139,tocIndex:26},{value:"<model_name>. <sequelize_model_event>",paraId:139,tocIndex:26},{value:".",paraId:139,tocIndex:26},{value:"Refer to the ",paraId:140,tocIndex:26},{value:"Built-in Events",paraId:141,tocIndex:26},{value:" section for parameter descriptions and detailed examples of all built-in event types.",paraId:140,tocIndex:26},{value:"off()",paraId:21},{value:"Remove the event listener function.",paraId:142,tocIndex:27},{value:"Signature",paraId:143,tocIndex:27},{value:"off(name: string, listener: Function)",paraId:144,tocIndex:27},{value:"Parameter",paraId:145,tocIndex:27},{value:"Name",paraId:146,tocIndex:27},{value:"Type",paraId:146,tocIndex:27},{value:"Default",paraId:146,tocIndex:27},{value:"Description",paraId:146,tocIndex:27},{value:"name",paraId:146,tocIndex:27},{value:"string",paraId:146,tocIndex:27},{value:"-",paraId:146,tocIndex:27},{value:"Event name",paraId:146,tocIndex:27},{value:"listener",paraId:146,tocIndex:27},{value:"Function",paraId:146,tocIndex:27},{value:"-",paraId:146,tocIndex:27},{value:"Event listener",paraId:146,tocIndex:27},{value:"Example",paraId:147,tocIndex:27},{value:`const listener = async (model, options) => {
  console.log(model);
};

db.on('afterCreate', listener);

db.off('afterCreate', listener);
`,paraId:148,tocIndex:27},{value:"auth()",paraId:21},{value:"Database connection verification. It can be used to ensure that the application has established connection to the data.",paraId:149,tocIndex:29},{value:"Signature",paraId:150,tocIndex:29},{value:"auth(options: QueryOptions & { retry?: number } = {}): Promise<boolean>",paraId:151,tocIndex:29},{value:"Parameter",paraId:152,tocIndex:29},{value:"Name",paraId:153,tocIndex:29},{value:"Type",paraId:153,tocIndex:29},{value:"Default",paraId:153,tocIndex:29},{value:"Description",paraId:153,tocIndex:29},{value:"options?",paraId:153,tocIndex:29},{value:"Object",paraId:153,tocIndex:29},{value:"-",paraId:153,tocIndex:29},{value:"Verification option",paraId:153,tocIndex:29},{value:"options.retry?",paraId:153,tocIndex:29},{value:"number",paraId:153,tocIndex:29},{value:"10",paraId:153,tocIndex:29},{value:"Number of retries in case of verification failure",paraId:153,tocIndex:29},{value:"options.transaction?",paraId:153,tocIndex:29},{value:"Transaction",paraId:153,tocIndex:29},{value:"-",paraId:153,tocIndex:29},{value:"Transaction object",paraId:153,tocIndex:29},{value:"options.logging?",paraId:153,tocIndex:29},{value:"boolean | Function",paraId:153,tocIndex:29},{value:"false",paraId:153,tocIndex:29},{value:"Whether to print the log",paraId:153,tocIndex:29},{value:"Example",paraId:154,tocIndex:29},{value:`await db.auth();
`,paraId:155,tocIndex:29},{value:"reconnect()",paraId:21},{value:"Reconnect to the database.",paraId:156,tocIndex:30},{value:"Example",paraId:157,tocIndex:30},{value:`await db.reconnect();
`,paraId:158,tocIndex:30},{value:"closed()",paraId:21},{value:"Check whether database has closed the connection.",paraId:159,tocIndex:31},{value:"Signature",paraId:160,tocIndex:31},{value:"closed(): boolean",paraId:161,tocIndex:31},{value:"close()",paraId:21},{value:"Closes database connection. Equivalent to ",paraId:162,tocIndex:32},{value:"sequelize.close()",paraId:162,tocIndex:32},{value:".",paraId:162,tocIndex:32},{value:"sync()",paraId:21},{value:"Synchronizes database table structure. Equivalent to ",paraId:163,tocIndex:33},{value:"sequelize.sync()",paraId:163,tocIndex:33},{value:", refer to ",paraId:163,tocIndex:33},{value:"Sequelize documentation",paraId:163,tocIndex:33},{value:" for parameters.",paraId:163,tocIndex:33},{value:"clean()",paraId:21},{value:"Empty the database, it will delete all data tables.",paraId:164,tocIndex:34},{value:"Signature",paraId:165,tocIndex:34},{value:"clean(options: CleanOptions): Promise<void>",paraId:166,tocIndex:34},{value:"Parameter",paraId:167,tocIndex:34},{value:"Name",paraId:168,tocIndex:34},{value:"Type",paraId:168,tocIndex:34},{value:"Default",paraId:168,tocIndex:34},{value:"Description",paraId:168,tocIndex:34},{value:"options.drop",paraId:168,tocIndex:34},{value:"boolean",paraId:168,tocIndex:34},{value:"false",paraId:168,tocIndex:34},{value:"Whether to remove all data tables",paraId:168,tocIndex:34},{value:"options.skip",paraId:168,tocIndex:34},{value:"string[]",paraId:168,tocIndex:34},{value:"-",paraId:168,tocIndex:34},{value:"Names of tables to skip",paraId:168,tocIndex:34},{value:"options.transaction",paraId:168,tocIndex:34},{value:"Transaction",paraId:168,tocIndex:34},{value:"-",paraId:168,tocIndex:34},{value:"Transaction object",paraId:168,tocIndex:34},{value:"Example",paraId:169,tocIndex:34},{value:"Remove all tables except for the ",paraId:170,tocIndex:34},{value:"users",paraId:170,tocIndex:34},{value:" table.",paraId:170,tocIndex:34},{value:`await db.clean({
  drop: true,
  skip: ['users'],
});
`,paraId:171,tocIndex:34},{value:"defineCollection()",paraId:21},{value:"Create the configuration content of a data table.",paraId:172,tocIndex:36},{value:"Signature",paraId:173,tocIndex:36},{value:"defineCollection(name: string, config: CollectionOptions): CollectionOptions",paraId:174,tocIndex:36},{value:"Parameter",paraId:175,tocIndex:36},{value:"Name",paraId:176,tocIndex:36},{value:"Type",paraId:176,tocIndex:36},{value:"Default",paraId:176,tocIndex:36},{value:"Description",paraId:176,tocIndex:36},{value:"collectionOptions",paraId:176,tocIndex:36},{value:"CollectionOptions",paraId:176,tocIndex:36},{value:"-",paraId:176,tocIndex:36},{value:"All parameters are the same with ",paraId:176,tocIndex:36},{value:"db.collection()",paraId:176,tocIndex:36},{value:"Example",paraId:177,tocIndex:36},{value:"For the data table configuration file to be imported by ",paraId:178,tocIndex:36},{value:"db.import()",paraId:178,tocIndex:36},{value:":",paraId:178,tocIndex:36},{value:`import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'users',
  fields: [
    {
      type: 'string',
      name: 'name',
    },
  ],
});
`,paraId:179,tocIndex:36},{value:"extendCollection()",paraId:21},{value:"Extent the configuration content of a data table that is already in memory, mainly for the content of files imported by the ",paraId:180,tocIndex:37},{value:"import()",paraId:180,tocIndex:37},{value:" method. This is the top-level package export method of ",paraId:180,tocIndex:37},{value:"@nocobase/database",paraId:180,tocIndex:37},{value:", and is not called through db instance. The ",paraId:180,tocIndex:37},{value:"extend",paraId:180,tocIndex:37},{value:" alias can also be used.",paraId:180,tocIndex:37},{value:"Signature",paraId:181,tocIndex:37},{value:"extendCollection(collectionOptions: CollectionOptions, mergeOptions?: MergeOptions): ExtendedCollectionOptions",paraId:182,tocIndex:37},{value:"Parameter",paraId:183,tocIndex:37},{value:"Name",paraId:184,tocIndex:37},{value:"Type",paraId:184,tocIndex:37},{value:"Default",paraId:184,tocIndex:37},{value:"Description",paraId:184,tocIndex:37},{value:"collectionOptions",paraId:184,tocIndex:37},{value:"CollectionOptions",paraId:184,tocIndex:37},{value:"-",paraId:184,tocIndex:37},{value:"All the same with ",paraId:184,tocIndex:37},{value:"db.collection()",paraId:184,tocIndex:37},{value:"mergeOptions?",paraId:184,tocIndex:37},{value:"MergeOptions",paraId:184,tocIndex:37},{value:"-",paraId:184,tocIndex:37},{value:"deepmerge",paraId:184,tocIndex:37},{value:" options of npm package",paraId:184,tocIndex:37},{value:"Example",paraId:185,tocIndex:37},{value:"Original definition of the table ",paraId:186,tocIndex:37},{value:"books",paraId:186,tocIndex:37},{value:" (books.ts):",paraId:186,tocIndex:37},{value:`export default {
  name: 'books',
  fields: [{ name: 'title', type: 'string' }],
};
`,paraId:187,tocIndex:37},{value:"Extend the definition of the table ",paraId:188,tocIndex:37},{value:"books",paraId:188,tocIndex:37},{value:" (books.extend.ts):",paraId:188,tocIndex:37},{value:`import { extend } from '@nocobase/database';

// Extend again
export default extend({
  name: 'books',
  fields: [{ name: 'price', type: 'number' }],
});
`,paraId:189,tocIndex:37},{value:"If the above two files are imported when calling ",paraId:190,tocIndex:37},{value:"import()",paraId:190,tocIndex:37},{value:", after being extended again by ",paraId:190,tocIndex:37},{value:"extend()",paraId:190,tocIndex:37},{value:", the table ",paraId:190,tocIndex:37},{value:"books",paraId:190,tocIndex:37},{value:" will have ",paraId:190,tocIndex:37},{value:"title",paraId:190,tocIndex:37},{value:" and ",paraId:190,tocIndex:37},{value:"price",paraId:190,tocIndex:37},{value:" two fields.",paraId:190,tocIndex:37},{value:"This method is especially useful when extending the table structure that is already defined by existing plugin.",paraId:191,tocIndex:37},{value:"The following events will be triggered in the corresponding lifecycle of database, subscribe by the ",paraId:192,tocIndex:38},{value:"on()",paraId:192,tocIndex:38},{value:" method and perform specific processing to meet some business needs.",paraId:192,tocIndex:38},{value:"'beforeSync'",paraId:21},{value:"'afterSync'",paraId:21},{value:"Events triggered before or after a new table structure configuration (fields, indexes, etc.) is synchronized to the database. This is usually triggered when executing ",paraId:193,tocIndex:39},{value:"collection.sync()",paraId:193,tocIndex:39},{value:" (internal call) for the logical processing of the extension of some special fields.",paraId:193,tocIndex:39},{value:"Signature",paraId:194,tocIndex:39},{value:"on(eventName: `${string}.beforeSync` | 'beforeSync' | `${string}.afterSync` | 'afterSync', listener: SyncListener): this\n",paraId:195,tocIndex:39},{value:"Type",paraId:196,tocIndex:39},{value:`import type { SyncOptions, HookReturn } from 'sequelize/types';

type SyncListener = (options?: SyncOptions) => HookReturn;
`,paraId:197,tocIndex:39},{value:"Example",paraId:198,tocIndex:39},{value:`const users = db.collection({
  name: 'users',
  fields: [{ type: 'string', name: 'username' }],
});

db.on('beforeSync', async (options) => {
  // do something
});

db.on('users.afterSync', async (options) => {
  // do something
});

await users.sync();
`,paraId:199,tocIndex:39},{value:"'beforeValidate'",paraId:21},{value:"'afterValidate'",paraId:21},{value:"Before creating or updating data, there is a validation against the data based on the rules defined by the collection, and the corresponding events are triggered before and after the validation. This is triggered when ",paraId:200,tocIndex:40},{value:"repository.create()",paraId:200,tocIndex:40},{value:" or ",paraId:200,tocIndex:40},{value:"repository.update()",paraId:200,tocIndex:40},{value:" is called.",paraId:200,tocIndex:40},{value:"Signature",paraId:201,tocIndex:40},{value:"on(eventName: `${string}.beforeValidate` | 'beforeValidate' | `${string}.afterValidate` | 'afterValidate', listener: ValidateListener): this\n",paraId:202,tocIndex:40},{value:"Type",paraId:203,tocIndex:40},{value:`import type { ValidationOptions } from 'sequelize/types/lib/instance-validator';
import type { HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

type ValidateListener = (
  model: Model,
  options?: ValidationOptions,
) => HookReturn;
`,paraId:204,tocIndex:40},{value:"Example",paraId:205,tocIndex:40},{value:`db.collection({
  name: 'tests',
  fields: [
    {
      type: 'string',
      name: 'email',
      validate: {
        isEmail: true,
      },
    },
  ],
});

// all models
db.on('beforeValidate', async (model, options) => {
  // do something
});
// tests model
db.on('tests.beforeValidate', async (model, options) => {
  // do something
});

// all models
db.on('afterValidate', async (model, options) => {
  // do something
});
// tests model
db.on('tests.afterValidate', async (model, options) => {
  // do something
});

const repository = db.getRepository('tests');
await repository.create({
  values: {
    email: 'abc', // checks for email format
  },
});
// or
await repository.update({
  filterByTk: 1,
  values: {
    email: 'abc', // checks for email format
  },
});
`,paraId:206,tocIndex:40},{value:"'beforeCreate'",paraId:21},{value:"'afterCreate'",paraId:21},{value:"Events triggered before or after creating one piece of data. This is triggered when ",paraId:207,tocIndex:41},{value:"repository.create()",paraId:207,tocIndex:41},{value:" is called.",paraId:207,tocIndex:41},{value:"Signature",paraId:208,tocIndex:41},{value:"on(eventName: `${string}.beforeCreate` | 'beforeCreate' | `${string}.afterCreate` | 'afterCreate', listener: CreateListener): this\n",paraId:209,tocIndex:41},{value:"Type",paraId:210,tocIndex:41},{value:`import type { CreateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type CreateListener = (
  model: Model,
  options?: CreateOptions,
) => HookReturn;
`,paraId:211,tocIndex:41},{value:"Example",paraId:212,tocIndex:41},{value:`db.on('beforeCreate', async (model, options) => {
  // do something
});

db.on('books.afterCreate', async (model, options) => {
  const { transaction } = options;
  const result = await model.constructor.findByPk(model.id, {
    transaction,
  });
  console.log(result);
});
`,paraId:213,tocIndex:41},{value:"'beforeUpdate'",paraId:21},{value:"'afterUpdate'",paraId:21},{value:"Events triggered before or after updating one piece of data. This is triggered when ",paraId:214,tocIndex:42},{value:"repository.update()",paraId:214,tocIndex:42},{value:" is called.",paraId:214,tocIndex:42},{value:"Signature",paraId:215,tocIndex:42},{value:"on(eventName: `${string}.beforeUpdate` | 'beforeUpdate' | `${string}.afterUpdate` | 'afterUpdate', listener: UpdateListener): this\n",paraId:216,tocIndex:42},{value:"Type",paraId:217,tocIndex:42},{value:`import type { UpdateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type UpdateListener = (
  model: Model,
  options?: UpdateOptions,
) => HookReturn;
`,paraId:218,tocIndex:42},{value:"Example",paraId:219,tocIndex:42},{value:`db.on('beforeUpdate', async (model, options) => {
  // do something
});

db.on('books.afterUpdate', async (model, options) => {
  // do something
});
`,paraId:220,tocIndex:42},{value:"'beforeSave'",paraId:21},{value:"'afterSave'",paraId:21},{value:"Events triggered before or after creating or updating one piece of data. This is triggered when ",paraId:221,tocIndex:43},{value:"repository.create()",paraId:221,tocIndex:43},{value:" or ",paraId:221,tocIndex:43},{value:"repository.update()",paraId:221,tocIndex:43},{value:" is called.",paraId:221,tocIndex:43},{value:"Signature",paraId:222,tocIndex:43},{value:"on(eventName: `${string}.beforeSave` | 'beforeSave' | `${string}.afterSave` | 'afterSave', listener: SaveListener): this\n",paraId:223,tocIndex:43},{value:"Type",paraId:224,tocIndex:43},{value:`import type { SaveOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type SaveListener = (model: Model, options?: SaveOptions) => HookReturn;
`,paraId:225,tocIndex:43},{value:"Example",paraId:226,tocIndex:43},{value:`db.on('beforeSave', async (model, options) => {
  // do something
});

db.on('books.afterSave', async (model, options) => {
  // do something
});
`,paraId:227,tocIndex:43},{value:"'beforeDestroy'",paraId:21},{value:"'afterDestroy'",paraId:21},{value:"Events triggered before or after deleting one piece of data. This is triggered when ",paraId:228,tocIndex:44},{value:"repository.destroy()",paraId:228,tocIndex:44},{value:" is called.",paraId:228,tocIndex:44},{value:"Signature",paraId:229,tocIndex:44},{value:"on(eventName: `${string}.beforeDestroy` | 'beforeDestroy' | `${string}.afterDestroy` | 'afterDestroy', listener: DestroyListener): this\n",paraId:230,tocIndex:44},{value:"Type",paraId:231,tocIndex:44},{value:`import type { DestroyOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type DestroyListener = (
  model: Model,
  options?: DestroyOptions,
) => HookReturn;
`,paraId:232,tocIndex:44},{value:"Example",paraId:233,tocIndex:44},{value:`db.on('beforeDestroy', async (model, options) => {
  // do something
});

db.on('books.afterDestroy', async (model, options) => {
  // do something
});
`,paraId:234,tocIndex:44},{value:"'afterCreateWithAssociations'",paraId:21},{value:"Events triggered after creating one piece of data that carries hierarchical data. This is triggered when ",paraId:235,tocIndex:45},{value:"repository.create()",paraId:235,tocIndex:45},{value:" is called.",paraId:235,tocIndex:45},{value:"Signature",paraId:236,tocIndex:45},{value:"on(eventName: `${string}.afterCreateWithAssociations` | 'afterCreateWithAssociations', listener: CreateWithAssociationsListener): this\n",paraId:237,tocIndex:45},{value:"Type",paraId:238,tocIndex:45},{value:`import type { CreateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type CreateWithAssociationsListener = (
  model: Model,
  options?: CreateOptions,
) => HookReturn;
`,paraId:239,tocIndex:45},{value:"Example",paraId:240,tocIndex:45},{value:`db.on('afterCreateWithAssociations', async (model, options) => {
  // do something
});

db.on('books.afterCreateWithAssociations', async (model, options) => {
  // do something
});
`,paraId:241,tocIndex:45},{value:"'afterUpdateWithAssociations'",paraId:21},{value:"Events triggered after updating one piece of data that carries hierarchical data. This is triggered when ",paraId:242,tocIndex:46},{value:"repository.update()",paraId:242,tocIndex:46},{value:" is called.",paraId:242,tocIndex:46},{value:"Signature",paraId:243,tocIndex:46},{value:"on(eventName: `${string}.afterUpdateWithAssociations` | 'afterUpdateWithAssociations', listener: CreateWithAssociationsListener): this\n",paraId:244,tocIndex:46},{value:"Type",paraId:245,tocIndex:46},{value:`import type { UpdateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type UpdateWithAssociationsListener = (
  model: Model,
  options?: UpdateOptions,
) => HookReturn;
`,paraId:246,tocIndex:46},{value:"Example",paraId:247,tocIndex:46},{value:`db.on('afterUpdateWithAssociations', async (model, options) => {
  // do something
});

db.on('books.afterUpdateWithAssociations', async (model, options) => {
  // do something
});
`,paraId:248,tocIndex:46},{value:"'afterSaveWithAssociations'",paraId:21},{value:"Events triggered after creating or updating one piece of data that carries hierarchical data. This is triggered when ",paraId:249,tocIndex:47},{value:"repository.create()",paraId:249,tocIndex:47},{value:" or ",paraId:249,tocIndex:47},{value:"repository.update()",paraId:249,tocIndex:47},{value:" is called.",paraId:249,tocIndex:47},{value:"Signature",paraId:250,tocIndex:47},{value:"on(eventName: `${string}.afterSaveWithAssociations` | 'afterSaveWithAssociations', listener: SaveWithAssociationsListener): this\n",paraId:251,tocIndex:47},{value:"Type",paraId:252,tocIndex:47},{value:`import type { SaveOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type SaveWithAssociationsListener = (
  model: Model,
  options?: SaveOptions,
) => HookReturn;
`,paraId:253,tocIndex:47},{value:"Example",paraId:254,tocIndex:47},{value:`db.on('afterSaveWithAssociations', async (model, options) => {
  // do something
});

db.on('books.afterSaveWithAssociations', async (model, options) => {
  // do something
});
`,paraId:255,tocIndex:47},{value:"'beforeDefineCollection'",paraId:21},{value:"Events triggered before defining a data table, such as when ",paraId:256,tocIndex:48},{value:"db.collection()",paraId:256,tocIndex:48},{value:" is called.",paraId:256,tocIndex:48},{value:"Note: This is a synchronous event.",paraId:257,tocIndex:48},{value:"Signature",paraId:258,tocIndex:48},{value:`on(eventName: 'beforeDefineCollection', listener: BeforeDefineCollectionListener): this
`,paraId:259,tocIndex:48},{value:"Type",paraId:260,tocIndex:48},{value:`import type { CollectionOptions } from '@nocobase/database';

export type BeforeDefineCollectionListener = (
  options: CollectionOptions,
) => void;
`,paraId:261,tocIndex:48},{value:"Example",paraId:262,tocIndex:48},{value:`db.on('beforeDefineCollection', (options) => {
  // do something
});
`,paraId:263,tocIndex:48},{value:"'afterDefineCollection'",paraId:21},{value:"Events triggered after defining a data table, such as when ",paraId:264,tocIndex:49},{value:"db.collection()",paraId:264,tocIndex:49},{value:" is called.",paraId:264,tocIndex:49},{value:"Note: This is a synchronous event.",paraId:265,tocIndex:49},{value:"Signature",paraId:266,tocIndex:49},{value:`on(eventName: 'afterDefineCollection', listener: AfterDefineCollectionListener): this
`,paraId:267,tocIndex:49},{value:"Type",paraId:268,tocIndex:49},{value:`import type { Collection } from '@nocobase/database';

export type AfterDefineCollectionListener = (options: Collection) => void;
`,paraId:269,tocIndex:49},{value:"Example",paraId:270,tocIndex:49},{value:`db.on('afterDefineCollection', (collection) => {
  // do something
});
`,paraId:271,tocIndex:49},{value:"'beforeRemoveCollection'",paraId:21},{value:"'afterRemoveCollection'",paraId:21},{value:"Events triggered before or after removing a data table from memory, such as when ",paraId:272,tocIndex:50},{value:"db.removeCollection()",paraId:272,tocIndex:50},{value:" is called.",paraId:272,tocIndex:50},{value:"Note: This is a synchronous event.",paraId:273,tocIndex:50},{value:"Signature",paraId:274,tocIndex:50},{value:`on(eventName: 'beforeRemoveCollection' | 'afterRemoveCollection', listener: RemoveCollectionListener): this
`,paraId:275,tocIndex:50},{value:"Type",paraId:276,tocIndex:50},{value:`import type { Collection } from '@nocobase/database';

export type RemoveCollectionListener = (options: Collection) => void;
`,paraId:277,tocIndex:50},{value:"Example",paraId:278,tocIndex:50},{value:`db.on('beforeRemoveCollection', (collection) => {
  // do something
});

db.on('afterRemoveCollection', (collection) => {
  // do something
});
`,paraId:279,tocIndex:50}]}}]);
