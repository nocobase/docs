"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[2483],{709560:function(i,a,n){n.r(a);var o=n(572269),u=n(793359),h=n(861788),m=n(719977),c=n(20190),t=n(24268),g=n(496057),f=n(585939),y=n(28484),x=n(635206),E=n(375553),I=n(156266),p=n(572333),M=n(841118),v=n(39297),b=n(868526),O=n(605019),r=n(614651),_=n(280936),d=n(667294),s=n(678255),e=n(785893);function l(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(d.Suspense,{fallback:(0,e.jsx)(_.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"association-fields",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#association-fields",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Association Fields"]}),(0,e.jsx)("p",{children:s.texts[0].value}),(0,e.jsx)(t.Z,{lang:"ts",children:s.texts[1].value}),(0,e.jsx)("p",{children:s.texts[2].value}),(0,e.jsx)(t.Z,{lang:"ts",children:s.texts[3].value}),(0,e.jsxs)("h2",{id:"relationship-parameters",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#relationship-parameters",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Relationship parameters"]}),(0,e.jsxs)("h3",{id:"belongsto",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#belongsto",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"BelongsTo"]}),(0,e.jsx)(t.Z,{lang:"ts",children:s.texts[4].value}),(0,e.jsxs)("h3",{id:"hasone",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#hasone",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"HasOne"]}),(0,e.jsx)(t.Z,{lang:"ts",children:s.texts[5].value}),(0,e.jsxs)("h3",{id:"hasmany",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#hasmany",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"HasMany"]}),(0,e.jsx)(t.Z,{lang:"ts",children:s.texts[6].value}),(0,e.jsxs)("h3",{id:"belongstomany",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#belongstomany",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"BelongsToMany"]}),(0,e.jsx)(t.Z,{lang:"ts",children:s.texts[7].value})]})})})})}a.default=l},678255:function(i,a,n){n.r(a),n.d(a,{texts:function(){return o}});const o=[{value:"In a relational database, the standard way to build a table relationship is to add a foreign key field followed by a foreign key constraint. For example, Knex builds a table with the following example.",paraId:0,tocIndex:0},{value:`knex.schema.table('posts', function (table) {
  table.integer('userId').unsigned();
  table.foreign('userId').references('users.id');
});
`,paraId:1,tocIndex:0},{value:"This procedure creates a userId field in the posts table and sets the foreign key constraint posts.userId to refer to users.id. In NocoBase's Collection, such a relational constraint is created by configuring the relational field, e.g.",paraId:2,tocIndex:0},{value:`{
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
`,paraId:3,tocIndex:0},{value:`interface BelongsTo {
  type: 'belongsTo';
  name: string;
  // defaults to name's plural
  target?: string;
  // The default value is the primary key of the target model, usually 'id'
  targetKey?: any;
  // defaults to target + 'Id'
  foreignKey?: any;
}

// The authors table's primary key id is concatenated with the books table's foreign key authorId
{
  name: 'books',
  fields: [
    {
      type: 'belongsTo',
      name: 'author',
      target: 'authors',
      targetKey: 'id', // authors table's primary key
      foreignKey: 'authorId', // foreign key in books table
    }
  ],
}
`,paraId:4,tocIndex:2},{value:`interface HasOne {
  type: 'hasOne';
  name: string;
  // defaults to name's plural
  target?: string;
  // The default value is the primary key of the source model, usually 'id'
  sourceKey?: string;
  // default value is the singular form of source collection name + 'Id'
  foreignKey?: string;
foreignKey?}

// The users table's primary key id is concatenated with the profiles' foreign key userId
{
  name: 'users',
  fields: [
    {
      type: 'hasOne',
      name: 'profile',
      target: 'profiles',
      sourceKey: 'id', // users table's primary key
      foreignKey: 'userId', // foreign key in profiles table
    }
  ],
}
`,paraId:5,tocIndex:3},{value:`interface HasMany {
  type: 'hasMany';
  name: string;
  // defaults to name
  target?: string;
  // The default value is the primary key of the source model, usually 'id'
  sourceKey?: string;
  // the default value is the singular form of the source collection name + 'Id'
  foreignKey?: string;
}

// The posts table's primary key id is concatenated with the comments table's postId
{
  name: 'posts',
  fields: [
    {
      type: 'hasMany',
      name: 'comments',
      target: 'comments',
      sourceKey: 'id', // posts table's primary key
      foreignKey: 'postId', // foreign key in the comments table
    }
  ],
}
`,paraId:6,tocIndex:4},{value:`interface BelongsToMany {
  type: 'belongsToMany';
  name: string;
  // default value is name
  target?: string;
  // defaults to the source collection name and target in the natural order of the first letter of the string
  through?: string;
  // defaults to the singular form of source collection name + 'Id'
  foreignKey?: string;
  // The default value is the primary key of the source model, usually id
  sourceKey?: string;
  // the default value is the singular form of target + 'Id'
  otherKey?: string;
  // the default value is the primary key of the target model, usually id
  targetKey?: string;
}

// tags table's primary key, posts table's primary key and posts_tags two foreign keys are linked
{
  name: 'posts',
  fields: [
    {
      type: 'believesToMany',
      name: 'tags',
      target: 'tags',
      through: 'posts_tags', // intermediate table
      foreignKey: 'tagId', // foreign key 1, in posts_tags table
      otherKey: 'postId', // foreignKey2, in posts_tags table
      targetKey: 'id', // tags table's primary key
      sourceKey: 'id', // posts table's primary key
    }
  ],
}
`,paraId:7,tocIndex:5}]}}]);
