"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[54078],{954078:function(n,e,a){a.r(e),a.d(e,{texts:function(){return t}});const t=[{value:"On a given ",paraId:0,tocIndex:1},{value:"Collection",paraId:0,tocIndex:1},{value:" object, you can get its ",paraId:0,tocIndex:1},{value:"Repository",paraId:0,tocIndex:1},{value:" object to perform read and write operations on the data table.",paraId:0,tocIndex:1},{value:`const { UserCollection } = require('./collections');

const UserRepository = UserCollection.repository;

const user = await UserRepository.findOne({
  filter: {
    id: 1,
  },
});

user.name = 'new name';
await user.save();
`,paraId:1,tocIndex:1},{value:"On the ",paraId:2,tocIndex:3},{value:"Repository",paraId:2,tocIndex:3},{value:" object, call the ",paraId:2,tocIndex:3},{value:"find*",paraId:2,tocIndex:3},{value:" methods to perform query. The ",paraId:2,tocIndex:3},{value:"filter",paraId:2,tocIndex:3},{value:" parameter is supported by all query methods to filter the data.",paraId:2,tocIndex:3},{value:`// SELECT * FROM users WHERE id = 1
userRepository.find({
  filter: {
    id: 1,
  },
});
`,paraId:3,tocIndex:3},{value:"The ",paraId:4,tocIndex:4},{value:"filter",paraId:4,tocIndex:4},{value:" parameter in the ",paraId:4,tocIndex:4},{value:"Repository",paraId:4,tocIndex:4},{value:" also provides a variety of operators to perform more diverse queries.",paraId:4,tocIndex:4},{value:`// SELECT * FROM users WHERE age > 18
userRepository.find({
  filter: {
    age: {
      $gt: 18,
    },
  },
});

// SELECT * FROM users WHERE age > 18 OR name LIKE '%\u5F20%'
userRepository.find({
  filter: {
    $or: [{ age: { $gt: 18 } }, { name: { $like: '%\u5F20%' } }],
  },
});
`,paraId:5,tocIndex:4},{value:"Refer to ",paraId:6,tocIndex:4},{value:"Filter Operators",paraId:7,tocIndex:4},{value:" for more details on operators.",paraId:6,tocIndex:4},{value:"Control the output fields by the ",paraId:8,tocIndex:5},{value:"fields",paraId:8,tocIndex:5},{value:", ",paraId:8,tocIndex:5},{value:"except",paraId:8,tocIndex:5},{value:", and ",paraId:8,tocIndex:5},{value:"appends",paraId:8,tocIndex:5},{value:" parameters when performing query.",paraId:8,tocIndex:5},{value:"fields",paraId:9,tocIndex:5},{value:": Specify output fields",paraId:9,tocIndex:5},{value:"except",paraId:9,tocIndex:5},{value:": Exclude output fields",paraId:9,tocIndex:5},{value:"appends",paraId:9,tocIndex:5},{value:": Append output associated fields",paraId:9,tocIndex:5},{value:`// The result contains only the id and name fields
userRepository.find({
  fields: ['id', 'name'],
});

// The result does not contain only the password field
userRepository.find({
  except: ['password'],
});

// The result contains data associated with the posts object
userRepository.find({
  appends: ['posts'],
});
`,paraId:10,tocIndex:5},{value:"The ",paraId:11,tocIndex:6},{value:"filter",paraId:11,tocIndex:6},{value:" parameter supports filtering by associated fields, for example:",paraId:11,tocIndex:6},{value:`// Find the user objects whose associated posts have title of "post title"
userRepository.find({
  filter: {
    'posts.title': 'post title',
  },
});
`,paraId:12,tocIndex:6},{value:"Associated fields can also be nested:",paraId:13,tocIndex:6},{value:`// Find the user objects whose associated posts have comments containing "keywords"
await userRepository.find({
  filter: {
    'posts.comments.content': {
      $like: '%keywords%',
    },
  },
});
`,paraId:14,tocIndex:6},{value:"Sort query results by the ",paraId:15,tocIndex:7},{value:"sort",paraId:15,tocIndex:7},{value:" parameter.",paraId:15,tocIndex:7},{value:`// SELECT * FROM users ORDER BY age
await userRepository.find({
  sort: 'age',
});

// SELECT * FROM users ORDER BY age DESC
await userRepository.find({
  sort: '-age',
});

// SELECT * FROM users ORDER BY age DESC, name ASC
await userRepository.find({
  sort: ['-age', 'name'],
});
`,paraId:16,tocIndex:7},{value:"Sort by the field of the associated object is also supported:",paraId:17,tocIndex:7},{value:`await userRepository.find({
  sort: 'profile.createdAt',
});
`,paraId:18,tocIndex:7},{value:"Create new data objects via ",paraId:19,tocIndex:9},{value:"Repository",paraId:19,tocIndex:9},{value:".",paraId:19,tocIndex:9},{value:`await userRepository.create({
  name: 'Mark',
  age: 18,
});
// INSERT INTO users (name, age) VALUES ('Mark', 18)

// Bulk creation
await userRepository.create([
  {
    name: 'Mark',
    age: 18,
  },
  {
    name: 'Alex',
    age: 20,
  },
]);
`,paraId:20,tocIndex:9},{value:"Create associated objects at the same time of creating data. Like query, nested use of associated objects is also supported. For example:",paraId:21,tocIndex:10},{value:`await userRepository.create({
  name: 'Mark',
  age: 18,
  posts: [
    {
      title: 'post title',
      content: 'post content',
      tags: [
        {
          name: 'tag1',
        },
        {
          name: 'tag2',
        },
      ],
    },
  ],
});
// When creating a user, create a post to associate with the user, and create tags to associate with the post
`,paraId:22,tocIndex:10},{value:"If the associated object is already in the database, you can pass its ID to create an association with it.",paraId:23,tocIndex:10},{value:`const tag1 = await tagRepository.findOne({
  filter: {
    name: 'tag1',
  },
});

await userRepository.create({
  name: 'Mark',
  age: 18,
  posts: [
    {
      title: 'post title',
      content: 'post content',
      tags: [
        {
          id: tag1.id, // Create an association with an existing associated object
        },
        {
          name: 'tag2',
        },
      ],
    },
  ],
});
`,paraId:24,tocIndex:10},{value:"After getting the data object, you can modify the properties directly on the data object (",paraId:25,tocIndex:12},{value:"Model",paraId:25,tocIndex:12},{value:"), and then call the ",paraId:25,tocIndex:12},{value:"save",paraId:25,tocIndex:12},{value:" method to save the changes.",paraId:25,tocIndex:12},{value:`const user = await userRepository.findOne({
  filter: {
    name: 'Mark',
  },
});

user.age = 20;
await user.save();
`,paraId:26,tocIndex:12},{value:"The data object ",paraId:27,tocIndex:12},{value:"Model",paraId:27,tocIndex:12},{value:" is inherited from Sequelize Model, refer to ",paraId:27,tocIndex:12},{value:"Sequelize Model",paraId:27,tocIndex:12},{value:" for the operations on ",paraId:27,tocIndex:12},{value:"Model",paraId:27,tocIndex:12},{value:".",paraId:27,tocIndex:12},{value:"Or update data via ",paraId:28,tocIndex:12},{value:"Repository",paraId:28,tocIndex:12},{value:":",paraId:28,tocIndex:12},{value:`// Update the records that meet the filtering condition
await userRepository.update({
  filter: {
    name: 'Mark',
  },
  values: {
    age: 20,
  },
});
`,paraId:29,tocIndex:12},{value:"Control which fields to update by the ",paraId:30,tocIndex:12},{value:"whitelist",paraId:30,tocIndex:12},{value:" and ",paraId:30,tocIndex:12},{value:"blacklist",paraId:30,tocIndex:12},{value:" parameters, for example:",paraId:30,tocIndex:12},{value:`await userRepository.update({
  filter: {
    name: 'Mark',
  },
  values: {
    age: 20,
    name: 'Alex',
  },
  whitelist: ['age'], // Only update the age field
});
`,paraId:31,tocIndex:12},{value:"Associated objects can be set while updating, for example:",paraId:32,tocIndex:13},{value:`const tag1 = tagRepository.findOne({
  filter: {
    id: 1,
  },
});

await postRepository.update({
  filter: {
    id: 1,
  },
  values: {
    title: 'new post title',
    tags: [
      {
        id: tag1.id, // Associate with tag1
      },
      {
        name: 'tag2', // Create new tag and associate with it
      },
    ],
  },
});

await postRepository.update({
  filter: {
    id: 1,
  },
  values: {
    tags: null, // Disassociate post from tags
  },
});
`,paraId:33,tocIndex:13},{value:"Call the ",paraId:34,tocIndex:14},{value:"destroy()",paraId:34,tocIndex:14},{value:" method in ",paraId:34,tocIndex:14},{value:"Repository",paraId:34,tocIndex:14},{value:" to perform the deletion operation. Filtering condition has to be specified to delete.",paraId:34,tocIndex:14},{value:`await userRepository.destroy({
  filter: {
    status: 'blocked',
  },
});
`,paraId:35,tocIndex:14},{value:"It is usually not called directly by the developer, the instantiation is done mainly by specifying a corresponding repository type that is already registered in the parameter of ",paraId:36,tocIndex:15},{value:"db.colletion()",paraId:36,tocIndex:15},{value:". Repository type is registered through ",paraId:36,tocIndex:15},{value:"db.registerRepositories()",paraId:36,tocIndex:15},{value:".",paraId:36,tocIndex:15},{value:"Signature",paraId:37,tocIndex:15},{value:"constructor(collection: Collection)",paraId:38,tocIndex:15},{value:"Example",paraId:39,tocIndex:15},{value:`import { Repository } from '@nocobase/database';

class MyRepository extends Repository {
  async myQuery(sql) {
    return this.database.sequelize.query(sql);
  }
}

db.registerRepositories({
  books: MyRepository,
});

db.collection({
  name: 'books',
  // here link to the registered repository
  repository: 'books',
});

await db.sync();

const books = db.getRepository('books') as MyRepository;
await books.myQuery('SELECT * FROM books;');
`,paraId:40,tocIndex:15},{value:"database",paraId:41},{value:"The database management instance where the context is located.",paraId:42,tocIndex:17},{value:"collection",paraId:41},{value:"The corresponding data table management instance.",paraId:43,tocIndex:18},{value:"model",paraId:41},{value:"The corresponding data model class.",paraId:44,tocIndex:19},{value:"find()",paraId:41},{value:"Find datasets from the database with the specified filtering conditions and sorting, etc.",paraId:45,tocIndex:21},{value:"Signature",paraId:46,tocIndex:21},{value:"async find(options?: FindOptions): Promise<Model[]>",paraId:47,tocIndex:21},{value:"Type",paraId:48,tocIndex:21},{value:`type Filter = FilterWithOperator | FilterWithValue | FilterAnd | FilterOr;
type Appends = string[];
type Except = string[];
type Fields = string[];
type Sort = string[] | string;

interface SequelizeFindOptions {
  limit?: number;
  offset?: number;
}

interface FilterByTk {
  filterByTk?: TargetKey;
}

interface CommonFindOptions extends Transactionable {
  filter?: Filter;
  fields?: Fields;
  appends?: Appends;
  except?: Except;
  sort?: Sort;
}

type FindOptions = SequelizeFindOptions & CommonFindOptions & FilterByTk;
`,paraId:49,tocIndex:21},{value:"Detailed Information",paraId:50,tocIndex:21},{value:"filter: Filter",paraId:41},{value:"Query conditions for filtering data results. In the query parameters that passed in, ",paraId:51,tocIndex:22},{value:"key",paraId:51,tocIndex:22},{value:" is the name of the field, ",paraId:51,tocIndex:22},{value:"value",paraId:51,tocIndex:22},{value:" is the corresponding value. Operators can be used in conjunction with other filtering conditions.",paraId:51,tocIndex:22},{value:`// Find records with name "foo" and age above 18
repository.find({
  filter: {
    name: 'foo',
    age: {
      $gt: 18,
    },
  },
});
`,paraId:52,tocIndex:22},{value:"Refer to ",paraId:53,tocIndex:22},{value:"Operators",paraId:54,tocIndex:22},{value:" for more information.",paraId:53,tocIndex:22},{value:"filterByTk: TargetKey",paraId:41},{value:"Query data by ",paraId:55,tocIndex:23},{value:"TargetKey",paraId:55,tocIndex:23},{value:", this is shortcut for the ",paraId:55,tocIndex:23},{value:"filter",paraId:55,tocIndex:23},{value:" parameter. The field of ",paraId:55,tocIndex:23},{value:"TargetKey",paraId:55,tocIndex:23},{value:" can be ",paraId:55,tocIndex:23},{value:"configured",paraId:56,tocIndex:23},{value:" in ",paraId:55,tocIndex:23},{value:"Collection",paraId:55,tocIndex:23},{value:", the default is ",paraId:55,tocIndex:23},{value:"primaryKey",paraId:55,tocIndex:23},{value:".",paraId:55,tocIndex:23},{value:`// By default, find records with id 1
repository.find({
  filterByTk: 1,
});
`,paraId:57,tocIndex:23},{value:"fields: string[]",paraId:41},{value:"Query columns. It is used to control which data fields to output. With this parameter, only the specified fields will be returned.",paraId:58,tocIndex:24},{value:"except: string[]",paraId:41},{value:"Exclude columns. It is used to control which data fields to output. With this parameter, the specified fields will not be returned.",paraId:59,tocIndex:25},{value:"appends: string[]",paraId:41},{value:"Append columns. It is used to load associated data. With this parameter, the specified associated fields will be returned together.",paraId:60,tocIndex:26},{value:"sort: string[] | string",paraId:41},{value:"Specify the sorting method of the query results. The input parameter is the name of the field, by default is to sort in the ascending order (",paraId:61,tocIndex:27},{value:"asc",paraId:61,tocIndex:27},{value:"); a ",paraId:61,tocIndex:27},{value:"-",paraId:61,tocIndex:27},{value:" symbol needs to be added before the field name to sort in the descending order (",paraId:61,tocIndex:27},{value:"desc",paraId:61,tocIndex:27},{value:"). For example, ",paraId:61,tocIndex:27},{value:"['-id', 'name']",paraId:61,tocIndex:27},{value:" means to sort by ",paraId:61,tocIndex:27},{value:"id desc, name asc",paraId:61,tocIndex:27},{value:".",paraId:61,tocIndex:27},{value:"limit: number",paraId:41},{value:"Limit the number of results, same as ",paraId:62,tocIndex:28},{value:"limit",paraId:62,tocIndex:28},{value:" in ",paraId:62,tocIndex:28},{value:"SQL",paraId:62,tocIndex:28},{value:".",paraId:62,tocIndex:28},{value:"offset: number",paraId:41},{value:"The offset of the query, same as ",paraId:63,tocIndex:29},{value:"offset",paraId:63,tocIndex:29},{value:" in ",paraId:63,tocIndex:29},{value:"SQL",paraId:63,tocIndex:29},{value:".",paraId:63,tocIndex:29},{value:"Example",paraId:64,tocIndex:29},{value:`const posts = db.getRepository('posts');

const results = await posts.find({
  filter: {
    createdAt: {
      $gt: '2022-01-01T00:00:00.000Z',
    },
  },
  fields: ['title'],
  appends: ['user'],
});
`,paraId:65,tocIndex:29},{value:"findOne()",paraId:41},{value:"Find a single piece of data from the database for specific conditions. Equivalent to ",paraId:66,tocIndex:30},{value:"Model.findOne()",paraId:66,tocIndex:30},{value:" in Sequelize.",paraId:66,tocIndex:30},{value:"Signature",paraId:67,tocIndex:30},{value:"async findOne(options?: FindOneOptions): Promise<Model | null>",paraId:68,tocIndex:30},{value:"Type",paraId:69,tocIndex:30},{value:`type FindOneOptions = Omit<FindOptions, 'limit'>;
`,paraId:70,tocIndex:30},{value:"Parameters",paraId:71,tocIndex:30},{value:"Most parameters are the same as those in ",paraId:72,tocIndex:30},{value:"find()",paraId:72,tocIndex:30},{value:". The difference is that ",paraId:72,tocIndex:30},{value:"findOne()",paraId:72,tocIndex:30},{value:" returns only a single piece of data, so the ",paraId:72,tocIndex:30},{value:"limit",paraId:72,tocIndex:30},{value:" parameter is not needed, and the query is always set to ",paraId:72,tocIndex:30},{value:"1",paraId:72,tocIndex:30},{value:".",paraId:72,tocIndex:30},{value:"Example",paraId:73,tocIndex:30},{value:`const posts = db.getRepository('posts');

const result = await posts.findOne({
  filterByTk: 1,
});
`,paraId:74,tocIndex:30},{value:"count()",paraId:41},{value:"Query a certain amount of data from the database for specific conditions. Equivalent to ",paraId:75,tocIndex:31},{value:"Model.count()",paraId:75,tocIndex:31},{value:" in Sequelize.",paraId:75,tocIndex:31},{value:"Signature",paraId:76,tocIndex:31},{value:"count(options?: CountOptions): Promise<number>",paraId:77,tocIndex:31},{value:"Type",paraId:78,tocIndex:31},{value:`interface CountOptions
  extends Omit<SequelizeCountOptions, 'distinct' | 'where' | 'include'>,
    Transactionable {
  filter?: Filter;
}
`,paraId:79,tocIndex:31},{value:"Example",paraId:80,tocIndex:31},{value:`const books = db.getRepository('books');

const count = await books.count({
  filter: {
    title: 'Three character classic',
  },
});
`,paraId:81,tocIndex:31},{value:"findAndCount()",paraId:41},{value:"Find datasets from the database with the specified filtering conditions and return the number of results. Equivalent to ",paraId:82,tocIndex:32},{value:"Model.findAndCountAll()",paraId:82,tocIndex:32},{value:" in Sequelize.",paraId:82,tocIndex:32},{value:"Signature",paraId:83,tocIndex:32},{value:"async findAndCount(options?: FindAndCountOptions): Promise<[Model[], number]>",paraId:84,tocIndex:32},{value:"Type",paraId:85,tocIndex:32},{value:`type FindAndCountOptions = Omit<
  SequelizeAndCountOptions,
  'where' | 'include' | 'order'
> &
  CommonFindOptions;
`,paraId:86,tocIndex:32},{value:"Detailed Information",paraId:87,tocIndex:32},{value:"The query parameters are the same as ",paraId:88,tocIndex:32},{value:"find()",paraId:88,tocIndex:32},{value:". An array is returned with the first element of the query results, and the second element of the total number of results.",paraId:88,tocIndex:32},{value:"create()",paraId:41},{value:"Inserts a newly created data into the data table. Equivalent to ",paraId:89,tocIndex:33},{value:"Model.create()",paraId:89,tocIndex:33},{value:" in Sequelize. When the data object to be created carries any associated field, the corresponding associated data record is created or updated along with it.",paraId:89,tocIndex:33},{value:"Signature",paraId:90,tocIndex:33},{value:"async create<M extends Model>(options: CreateOptions): Promise<M>",paraId:91,tocIndex:33},{value:"Type",paraId:92,tocIndex:33},{value:`type WhiteList = string[];
type BlackList = string[];
type AssociationKeysToBeUpdate = string[];

interface CreateOptions extends SequelizeCreateOptions {
  values?: Values;
  whitelist?: WhiteList;
  blacklist?: BlackList;
  updateAssociationValues?: AssociationKeysToBeUpdate;
  context?: any;
}
`,paraId:93,tocIndex:33},{value:"Details",paraId:94,tocIndex:33},{value:"values",paraId:95,tocIndex:33},{value:": The data object of the record to be created.",paraId:95,tocIndex:33},{value:"whitelist",paraId:95,tocIndex:33},{value:": Specifies which fields in the data object of the record to be created ",paraId:95,tocIndex:33},{value:"can be written",paraId:95,tocIndex:33},{value:". If this parameter is not passed, all fields are allowed to be written by default.",paraId:95,tocIndex:33},{value:"blacklist",paraId:95,tocIndex:33},{value:": Specifies which fields in the data object of the record to be created ",paraId:95,tocIndex:33},{value:"are not allowed to be written",paraId:95,tocIndex:33},{value:". If this parameter is not passed, all fields are allowed to be written by default.",paraId:95,tocIndex:33},{value:"transaction",paraId:95,tocIndex:33},{value:": The transaction object. If no transaction parameter is passed, the method will automatically create an internal transaction.",paraId:95,tocIndex:33},{value:"Example",paraId:96,tocIndex:33},{value:`const posts = db.getRepository('posts');

const result = await posts.create({
  values: {
    title: 'NocoBase 1.0 Release Notes',
    tags: [
      // Update data when there is a primary key and value of the associated table
      { id: 1 },
      // Create data when there is no primary key and value
      { name: 'NocoBase' },
    ],
  },
});
`,paraId:97,tocIndex:33},{value:"createMany()",paraId:41},{value:"Inserts multiple newly created data into the data table. This is equivalent to calling the ",paraId:98,tocIndex:34},{value:"create()",paraId:98,tocIndex:34},{value:" method multiple times.",paraId:98,tocIndex:34},{value:"Signature",paraId:99,tocIndex:34},{value:"createMany(options: CreateManyOptions): Promise<Model[]>",paraId:100,tocIndex:34},{value:"Type",paraId:101,tocIndex:34},{value:`interface CreateManyOptions extends BulkCreateOptions {
  records: Values[];
}
`,paraId:102,tocIndex:34},{value:"Detailed Information",paraId:103,tocIndex:34},{value:"records",paraId:104,tocIndex:34},{value:": An array of data objects to be created.",paraId:104,tocIndex:34},{value:"transaction",paraId:104,tocIndex:34},{value:": Transaction object. If no transaction parameter is passed, the method will automatically create an internal transaction.",paraId:104,tocIndex:34},{value:"Example",paraId:105,tocIndex:34},{value:`const posts = db.getRepository('posts');

const results = await posts.createMany({
  records: [
    {
      title: 'NocoBase 1.0 Release Notes',
      tags: [
        // Update data when there is a primary key and value of the associated table
        { id: 1 },
        // Create data when there is no primary key and value
        { name: 'NocoBase' },
      ],
    },
    {
      title: 'NocoBase 1.1 Release Notes',
      tags: [{ id: 1 }],
    },
  ],
});
`,paraId:106,tocIndex:34},{value:"update()",paraId:41},{value:"Update data in the data table. Equivalent to ",paraId:107,tocIndex:35},{value:"Model.update()",paraId:107,tocIndex:35},{value:" in Sequelize. When the data object to be updated carries any associated field, the corresponding associated data record is created or updated along with it.",paraId:107,tocIndex:35},{value:"Signature",paraId:108,tocIndex:35},{value:"async update<M extends Model>(options: UpdateOptions): Promise<M>",paraId:109,tocIndex:35},{value:"Type",paraId:110,tocIndex:35},{value:`interface UpdateOptions extends Omit<SequelizeUpdateOptions, 'where'> {
  values: Values;
  filter?: Filter;
  filterByTk?: TargetKey;
  whitelist?: WhiteList;
  blacklist?: BlackList;
  updateAssociationValues?: AssociationKeysToBeUpdate;
  context?: any;
}
`,paraId:111,tocIndex:35},{value:"Details",paraId:112,tocIndex:35},{value:"values",paraId:113,tocIndex:35},{value:": The data object of the records to be updated.",paraId:113,tocIndex:35},{value:"filter",paraId:113,tocIndex:35},{value:": Specifies the filter conditions for the records to be updated. For detailed usage of Filter, refer to the ",paraId:113,tocIndex:35},{value:"find()",paraId:114,tocIndex:35},{value:" method.",paraId:113,tocIndex:35},{value:"filterByTk",paraId:113,tocIndex:35},{value:": Specifies the filter conditions for the records to be updated by TargetKey.",paraId:113,tocIndex:35},{value:"whitelist",paraId:113,tocIndex:35},{value:": A whitelist for the ",paraId:113,tocIndex:35},{value:"values",paraId:113,tocIndex:35},{value:" fields. Only fields listed will be written.",paraId:113,tocIndex:35},{value:"blacklist",paraId:113,tocIndex:35},{value:": A blacklist for the ",paraId:113,tocIndex:35},{value:"values",paraId:113,tocIndex:35},{value:" fields. Fields listed will not be written.",paraId:113,tocIndex:35},{value:"transaction",paraId:113,tocIndex:35},{value:": The transaction object. If no transaction parameter is passed, the method will automatically create an internal transaction.",paraId:113,tocIndex:35},{value:"At least one of ",paraId:115,tocIndex:35},{value:"filterByTk",paraId:115,tocIndex:35},{value:" or ",paraId:115,tocIndex:35},{value:"filter",paraId:115,tocIndex:35},{value:" must be provided.",paraId:115,tocIndex:35},{value:"Example",paraId:116,tocIndex:35},{value:`const posts = db.getRepository('posts');

const result = await posts.update({
  filterByTk: 1,
  values: {
    title: 'NocoBase 1.0 Release Notes',
    tags: [
      // Update data when there is a primary key and value of the associated table
      { id: 1 },
      // Create data when there is no primary key and value
      { name: 'NocoBase' },
    ],
  },
});
`,paraId:117,tocIndex:35},{value:"destroy()",paraId:41},{value:"Delete data from the data table. Equivalent to ",paraId:118,tocIndex:36},{value:"Model.destroy()",paraId:118,tocIndex:36},{value:" in Sequelize.",paraId:118,tocIndex:36},{value:"Signature",paraId:119,tocIndex:36},{value:"async destroy(options?: TargetKey | TargetKey[] | DestoryOptions): Promise<number>",paraId:120,tocIndex:36},{value:"Type",paraId:121,tocIndex:36},{value:`interface DestroyOptions extends SequelizeDestroyOptions {
  filter?: Filter;
  filterByTk?: TargetKey | TargetKey[];
  truncate?: boolean;
  context?: any;
}
`,paraId:122,tocIndex:36},{value:"Detailed Information",paraId:123,tocIndex:36},{value:"filter",paraId:124,tocIndex:36},{value:"\uFF1ASpecify the filtering conditions of the records to be deleted. Refer to the ",paraId:124,tocIndex:36},{value:"find()",paraId:125,tocIndex:36},{value:" method for the detailed usage of the filter.",paraId:124,tocIndex:36},{value:"filterByTk",paraId:124,tocIndex:36},{value:"\uFF1ASpecify the filtering conditions by TargetKey.",paraId:124,tocIndex:36},{value:"truncate",paraId:124,tocIndex:36},{value:": Whether to empty the table data, this parameter is valid if no ",paraId:124,tocIndex:36},{value:"filter",paraId:124,tocIndex:36},{value:" or ",paraId:124,tocIndex:36},{value:"filterByTk",paraId:124,tocIndex:36},{value:" parameter is passed.",paraId:124,tocIndex:36},{value:"transaction",paraId:124,tocIndex:36},{value:": Transaction object. If no transaction parameter is passed, the method will automatically create an internal transaction.",paraId:124,tocIndex:36}]}}]);
