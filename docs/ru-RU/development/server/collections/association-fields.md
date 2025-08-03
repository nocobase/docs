### **Поля связей**

В реляционной базе данных стандартный способ создания связи между таблицами — добавление поля внешнего ключа и ограничения внешнего ключа. Например, Knex создаёт таблицу по следующему образцу:

```js
knex.schema.table('posts', function (table) {
  table.integer('userId').unsigned();
  table.foreign('userId').references('users.id');
});
```

Этот код создаёт поле `userId` в таблице `posts` и устанавливает ограничение внешнего ключа `posts.userId`, ссылающееся на `users.id`. В NocoBase такая связь создаётся путём настройки поля связи, например:

```js
{
  name: 'posts',
  fields: [
    {
      type: 'belongsTo',
      name: 'user',
      target: 'users',
      foreignKey: 'userId',
    },
  ],
}
```

#### **Параметры связей**

##### **BelongsTo**

```ts
interface BelongsTo {
  type: 'belongsTo';
  name: string;
  // по умолчанию — множественное число от name
  target?: string;
  // по умолчанию — первичный ключ целевой модели, обычно 'id'
  targetKey?: any;
  // по умолчанию — target + 'Id'
  foreignKey?: any;
}
```

// Первичный ключ `id` таблицы `authors` связан с внешним ключом `authorId` таблицы `books`

```js
{
  name: 'books',
  fields: [
    {
      type: 'belongsTo',
      name: 'author',
      target: 'authors',
      targetKey: 'id', // первичный ключ таблицы authors
      foreignKey: 'authorId', // внешний ключ в таблице books
    }
  ],
}
```

##### **HasOne**

```ts
interface HasOne {
  type: 'hasOne';
  name: string;
  // по умолчанию — множественное число от name
  target?: string;
  // по умолчанию — первичный ключ исходной модели, обычно 'id'
  sourceKey?: string;
  // по умолчанию — имя исходной коллекции в единственном числе + 'Id'
  foreignKey?: string;
}
```

// Первичный ключ `id` таблицы `users` связан с внешним ключом `userId` таблицы `profiles`

```js
{
  name: 'users',
  fields: [
    {
      type: 'hasOne',
      name: 'profile',
      target: 'profiles',
      sourceKey: 'id', // первичный ключ таблицы users
      foreignKey: 'userId', // внешний ключ в таблице profiles
    }
  ],
}
```

##### **HasMany**

```ts
interface HasMany {
  type: 'hasMany';
  name: string;
  // по умолчанию — name
  target?: string;
  // по умолчанию — первичный ключ исходной модели, обычно 'id'
  sourceKey?: string;
  // по умолчанию — имя исходной коллекции в единственном числе + 'Id'
  foreignKey?: string;
}
```

// Первичный ключ `id` таблицы `posts` связан с внешним ключом `postId` таблицы `comments`

```js
{
  name: 'posts',
  fields: [
    {
      type: 'hasMany',
      name: 'comments',
      target: 'comments',
      sourceKey: 'id', // первичный ключ таблицы posts
      foreignKey: 'postId', // внешний ключ в таблице comments
    }
  ],
}
```

##### **BelongsToMany**

```ts
interface BelongsToMany {
  type: 'belongsToMany';
  name: string;
  // по умолчанию — name
  target?: string;
  // по умолчанию — имя исходной коллекции и целевой, в алфавитном порядке
  through?: string;
  // по умолчанию — имя исходной коллекции в единственном числе + 'Id'
  foreignKey?: string;
  // по умолчанию — первичный ключ исходной модели, обычно 'id'
  sourceKey?: string;
  // по умолчанию — имя целевой таблицы в единственном числе + 'Id'
  otherKey?: string;
  // по умолчанию — первичный ключ целевой модели, обычно 'id'
  targetKey?: string;
}
```

// Первичные ключи таблиц `tags` и `posts`, а также два внешних ключа таблицы `posts_tags` связаны между собой

```js
{
  name: 'posts',
  fields: [
    {
      type: 'belongsToMany',
      name: 'tags',
      target: 'tags',
      through: 'posts_tags', // промежуточная таблица
      foreignKey: 'tagId', // внешний ключ 1, в таблице posts_tags
      otherKey: 'postId', // внешний ключ 2, в таблице posts_tags
      targetKey: 'id', // первичный ключ таблицы tags
      sourceKey: 'id', // первичный ключ таблицы posts
    }
  ],
}
```
