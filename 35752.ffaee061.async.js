"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[35752],{435752:function(d,a,e){e.r(a),e.d(a,{texts:function(){return r}});const r=[{value:"Returns all of the items in an array after the specified index. Opposite of ",paraId:0,tocIndex:1},{value:"before",paraId:1,tocIndex:1},{value:".",paraId:0,tocIndex:1},{value:"Params",paraId:2,tocIndex:1},{value:"array",paraId:3,tocIndex:1},{value:" ",paraId:3,tocIndex:1},{value:"{Array}",paraId:3,tocIndex:1},{value:": Collection",paraId:3,tocIndex:1},{value:"n",paraId:3,tocIndex:1},{value:" ",paraId:3,tocIndex:1},{value:"{Number}",paraId:3,tocIndex:1},{value:": Starting index (number of items to exclude)",paraId:3,tocIndex:1},{value:"returns",paraId:3,tocIndex:1},{value:" ",paraId:3,tocIndex:1},{value:"{Array}",paraId:3,tocIndex:1},{value:": Array exluding ",paraId:3,tocIndex:1},{value:"n",paraId:3,tocIndex:1},{value:" items.",paraId:3,tocIndex:1},{value:"Example",paraId:4,tocIndex:1},{value:`<!-- array: ['a', 'b', 'c'] -->
{{after array 1}}
<!-- results in: '["c"]' -->
`,paraId:5,tocIndex:1},{value:"Cast the given ",paraId:6,tocIndex:2},{value:"value",paraId:6,tocIndex:2},{value:" to an array.",paraId:6,tocIndex:2},{value:"Params",paraId:7,tocIndex:2},{value:"value",paraId:8,tocIndex:2},{value:" ",paraId:8,tocIndex:2},{value:"{any}",paraId:8,tocIndex:2},{value:"returns",paraId:8,tocIndex:2},{value:" ",paraId:8,tocIndex:2},{value:"{Array}",paraId:8,tocIndex:2},{value:"Example",paraId:9,tocIndex:2},{value:`{{arrayify "foo"}}
<!-- results in: [ "foo" ] -->
`,paraId:10,tocIndex:2},{value:"Return all of the items in the collection before the specified count. Opposite of ",paraId:11,tocIndex:3},{value:"after",paraId:12,tocIndex:3},{value:".",paraId:11,tocIndex:3},{value:"Params",paraId:13,tocIndex:3},{value:"array",paraId:14,tocIndex:3},{value:" ",paraId:14,tocIndex:3},{value:"{Array}",paraId:14,tocIndex:3},{value:"n",paraId:14,tocIndex:3},{value:" ",paraId:14,tocIndex:3},{value:"{Number}",paraId:14,tocIndex:3},{value:"returns",paraId:14,tocIndex:3},{value:" ",paraId:14,tocIndex:3},{value:"{Array}",paraId:14,tocIndex:3},{value:": Array excluding items after the given number.",paraId:14,tocIndex:3},{value:"Example",paraId:15,tocIndex:3},{value:`<!-- array: ['a', 'b', 'c'] -->
{{before array 2}}
<!-- results in: '["a", "b"]' -->
`,paraId:16,tocIndex:3},{value:"Params",paraId:17,tocIndex:4},{value:"array",paraId:18,tocIndex:4},{value:" ",paraId:18,tocIndex:4},{value:"{Array}",paraId:18,tocIndex:4},{value:"options",paraId:18,tocIndex:4},{value:" ",paraId:18,tocIndex:4},{value:"{Object}",paraId:18,tocIndex:4},{value:"returns",paraId:18,tocIndex:4},{value:" ",paraId:18,tocIndex:4},{value:"{String}",paraId:18,tocIndex:4},{value:"Example",paraId:19,tocIndex:4},{value:`<!-- array: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] -->
{{#eachIndex array}}
  {{item}} is {{index}}
{{/eachIndex}}
`,paraId:20,tocIndex:4},{value:"Block helper that filters the given array and renders the block for values that evaluate to ",paraId:21,tocIndex:5},{value:"true",paraId:21,tocIndex:5},{value:", otherwise the inverse block is returned.",paraId:21,tocIndex:5},{value:"Params",paraId:22,tocIndex:5},{value:"array",paraId:23,tocIndex:5},{value:" ",paraId:23,tocIndex:5},{value:"{Array}",paraId:23,tocIndex:5},{value:"value",paraId:23,tocIndex:5},{value:" ",paraId:23,tocIndex:5},{value:"{any}",paraId:23,tocIndex:5},{value:"options",paraId:23,tocIndex:5},{value:" ",paraId:23,tocIndex:5},{value:"{Object}",paraId:23,tocIndex:5},{value:"returns",paraId:23,tocIndex:5},{value:" ",paraId:23,tocIndex:5},{value:"{String}",paraId:23,tocIndex:5},{value:"Example",paraId:24,tocIndex:5},{value:`<!-- array: ['a', 'b', 'c'] -->
{{#filter array "foo"}}AAA{{else}}BBB{{/filter}}
<!-- results in: 'BBB' -->
`,paraId:25,tocIndex:5},{value:"Returns the first item, or first ",paraId:26,tocIndex:6},{value:"n",paraId:26,tocIndex:6},{value:" items of an array.",paraId:26,tocIndex:6},{value:"Params",paraId:27,tocIndex:6},{value:"array",paraId:28,tocIndex:6},{value:" ",paraId:28,tocIndex:6},{value:"{Array}",paraId:28,tocIndex:6},{value:"n",paraId:28,tocIndex:6},{value:" ",paraId:28,tocIndex:6},{value:"{Number}",paraId:28,tocIndex:6},{value:": Number of items to return, starting at ",paraId:28,tocIndex:6},{value:"0",paraId:28,tocIndex:6},{value:".",paraId:28,tocIndex:6},{value:"returns",paraId:28,tocIndex:6},{value:" ",paraId:28,tocIndex:6},{value:"{Array}",paraId:28,tocIndex:6},{value:"Example",paraId:29,tocIndex:6},{value:`{{first "['a', 'b', 'c', 'd', 'e']" 2}}
<!-- results in: '["a", "b"]' -->
`,paraId:30,tocIndex:6},{value:"Iterates over each item in an array and exposes the current item in the array as context to the inner block. In addition to the current array item, the helper exposes the following variables to the inner block:",paraId:31,tocIndex:7},{value:"index",paraId:32,tocIndex:7},{value:"total",paraId:32,tocIndex:7},{value:"isFirst",paraId:32,tocIndex:7},{value:"isLast",paraId:32,tocIndex:7},{value:`
Also, `,paraId:32,tocIndex:7},{value:"@index",paraId:32,tocIndex:7},{value:` is exposed as a private variable, and additional
private variables may be defined as hash arguments.`,paraId:32,tocIndex:7},{value:"Params",paraId:33,tocIndex:7},{value:"array",paraId:34,tocIndex:7},{value:" ",paraId:34,tocIndex:7},{value:"{Array}",paraId:34,tocIndex:7},{value:"returns",paraId:34,tocIndex:7},{value:" ",paraId:34,tocIndex:7},{value:"{String}",paraId:34,tocIndex:7},{value:"Example",paraId:35,tocIndex:7},{value:`<!-- accounts = [
{'name': 'John', 'email': 'john@example.com'},
{'name': 'Malcolm', 'email': 'malcolm@example.com'},
{'name': 'David', 'email': 'david@example.com'}
] -->

{{#forEach accounts}}
  <a href="mailto:{{ email }}" title="Send an email to {{ name }}">
    {{ name }}
  </a>{{#unless isLast}}, {{/unless}}
{{/forEach}}
`,paraId:36,tocIndex:7},{value:"Block helper that renders the block if an array has the given ",paraId:37,tocIndex:8},{value:"value",paraId:37,tocIndex:8},{value:". Optionally specify an inverse block to render when the array does not have the given value.",paraId:37,tocIndex:8},{value:"Params",paraId:38,tocIndex:8},{value:"array",paraId:39,tocIndex:8},{value:" ",paraId:39,tocIndex:8},{value:"{Array}",paraId:39,tocIndex:8},{value:"value",paraId:39,tocIndex:8},{value:" ",paraId:39,tocIndex:8},{value:"{any}",paraId:39,tocIndex:8},{value:"options",paraId:39,tocIndex:8},{value:" ",paraId:39,tocIndex:8},{value:"{Object}",paraId:39,tocIndex:8},{value:"returns",paraId:39,tocIndex:8},{value:" ",paraId:39,tocIndex:8},{value:"{String}",paraId:39,tocIndex:8},{value:"Example",paraId:40,tocIndex:8},{value:`<!-- array: ['a', 'b', 'c'] -->
{{#inArray array "d"}}
  foo
{{else}}
  bar
{{/inArray}}
<!-- results in: 'bar' -->
`,paraId:41,tocIndex:8},{value:"Returns true if ",paraId:42,tocIndex:9},{value:"value",paraId:42,tocIndex:9},{value:" is an es5 array.",paraId:42,tocIndex:9},{value:"Params",paraId:43,tocIndex:9},{value:"value",paraId:44,tocIndex:9},{value:" ",paraId:44,tocIndex:9},{value:"{any}",paraId:44,tocIndex:9},{value:": The value to test.",paraId:44,tocIndex:9},{value:"returns",paraId:44,tocIndex:9},{value:" ",paraId:44,tocIndex:9},{value:"{Boolean}",paraId:44,tocIndex:9},{value:"Example",paraId:45,tocIndex:9},{value:`{{isArray "abc"}}
<!-- results in: false -->

<!-- array: [1, 2, 3] -->
{{isArray array}}
<!-- results in: true -->
`,paraId:46,tocIndex:9},{value:"Returns the item from ",paraId:47,tocIndex:10},{value:"array",paraId:47,tocIndex:10},{value:" at index ",paraId:47,tocIndex:10},{value:"idx",paraId:47,tocIndex:10},{value:".",paraId:47,tocIndex:10},{value:"Params",paraId:48,tocIndex:10},{value:"array",paraId:49,tocIndex:10},{value:" ",paraId:49,tocIndex:10},{value:"{Array}",paraId:49,tocIndex:10},{value:"idx",paraId:49,tocIndex:10},{value:" ",paraId:49,tocIndex:10},{value:"{Number}",paraId:49,tocIndex:10},{value:"returns",paraId:49,tocIndex:10},{value:" ",paraId:49,tocIndex:10},{value:"{any}",paraId:49,tocIndex:10},{value:" ",paraId:49,tocIndex:10},{value:"value",paraId:49,tocIndex:10},{value:"Example",paraId:50,tocIndex:10},{value:`<!-- array: ['a', 'b', 'c'] -->
{{itemAt array 1}}
<!-- results in: 'b' -->
`,paraId:51,tocIndex:10},{value:"Join all elements of array into a string, optionally using a given separator.",paraId:52,tocIndex:11},{value:"Params",paraId:53,tocIndex:11},{value:"array",paraId:54,tocIndex:11},{value:" ",paraId:54,tocIndex:11},{value:"{Array}",paraId:54,tocIndex:11},{value:"separator",paraId:54,tocIndex:11},{value:" ",paraId:54,tocIndex:11},{value:"{String}",paraId:54,tocIndex:11},{value:": The separator to use. Defaults to ",paraId:54,tocIndex:11},{value:",",paraId:54,tocIndex:11},{value:".",paraId:54,tocIndex:11},{value:"returns",paraId:54,tocIndex:11},{value:" ",paraId:54,tocIndex:11},{value:"{String}",paraId:54,tocIndex:11},{value:"Example",paraId:55,tocIndex:11},{value:`<!-- array: ['a', 'b', 'c'] -->
{{join array}}
<!-- results in: 'a, b, c' -->

{{join array '-'}}
<!-- results in: 'a-b-c' -->
`,paraId:56,tocIndex:11},{value:"Returns true if the the length of the given ",paraId:57,tocIndex:12},{value:"value",paraId:57,tocIndex:12},{value:` is equal
to the given `,paraId:57,tocIndex:12},{value:"length",paraId:57,tocIndex:12},{value:". Can be used as a block or inline helper.",paraId:57,tocIndex:12},{value:"Params",paraId:58,tocIndex:12},{value:"value",paraId:59,tocIndex:12},{value:" ",paraId:59,tocIndex:12},{value:"{Array|String}",paraId:59,tocIndex:12},{value:"length",paraId:59,tocIndex:12},{value:" ",paraId:59,tocIndex:12},{value:"{Number}",paraId:59,tocIndex:12},{value:"options",paraId:59,tocIndex:12},{value:" ",paraId:59,tocIndex:12},{value:"{Object}",paraId:59,tocIndex:12},{value:"returns",paraId:59,tocIndex:12},{value:" ",paraId:59,tocIndex:12},{value:"{String}",paraId:59,tocIndex:12},{value:"Returns the last item, or last ",paraId:60,tocIndex:13},{value:"n",paraId:60,tocIndex:13},{value:" items of an array or string. Opposite of ",paraId:60,tocIndex:13},{value:"first",paraId:61,tocIndex:13},{value:".",paraId:60,tocIndex:13},{value:"Params",paraId:62,tocIndex:13},{value:"value",paraId:63,tocIndex:13},{value:" ",paraId:63,tocIndex:13},{value:"{Array|String}",paraId:63,tocIndex:13},{value:": Array or string.",paraId:63,tocIndex:13},{value:"n",paraId:63,tocIndex:13},{value:" ",paraId:63,tocIndex:13},{value:"{Number}",paraId:63,tocIndex:13},{value:": Number of items to return from the end of the array.",paraId:63,tocIndex:13},{value:"returns",paraId:63,tocIndex:13},{value:" ",paraId:63,tocIndex:13},{value:"{Array}",paraId:63,tocIndex:13},{value:"Example",paraId:64,tocIndex:13},{value:`<!-- var value = ['a', 'b', 'c', 'd', 'e'] -->

{{last value}}
<!-- results in: ['e'] -->

{{last value 2}}
<!-- results in: ['d', 'e'] -->

{{last value 3}}
<!-- results in: ['c', 'd', 'e'] -->
`,paraId:65,tocIndex:13},{value:"Returns the length of the given string or array.",paraId:66,tocIndex:14},{value:"Params",paraId:67,tocIndex:14},{value:"value",paraId:68,tocIndex:14},{value:" ",paraId:68,tocIndex:14},{value:"{Array|Object|String}",paraId:68,tocIndex:14},{value:"returns",paraId:68,tocIndex:14},{value:" ",paraId:68,tocIndex:14},{value:"{Number}",paraId:68,tocIndex:14},{value:": The length of the value.",paraId:68,tocIndex:14},{value:"Example",paraId:69,tocIndex:14},{value:`{{length '["a", "b", "c"]'}}
<!-- results in: 3 -->

<!-- results in: myArray = ['a', 'b', 'c', 'd', 'e']; -->
{{length myArray}}
<!-- results in: 5 -->

<!-- results in: myObject = {'a': 'a', 'b': 'b'}; -->
{{length myObject}}
<!-- results in: 2 -->
`,paraId:70,tocIndex:14},{value:"Alias for ",paraId:71,tocIndex:15},{value:"equalsLength",paraId:72,tocIndex:15},{value:"Returns a new array, created by calling ",paraId:73,tocIndex:16},{value:"function",paraId:73,tocIndex:16},{value:" on each element of the given ",paraId:73,tocIndex:16},{value:"array",paraId:73,tocIndex:16},{value:". For example,",paraId:73,tocIndex:16},{value:"Params",paraId:74,tocIndex:16},{value:"array",paraId:75,tocIndex:16},{value:" ",paraId:75,tocIndex:16},{value:"{Array}",paraId:75,tocIndex:16},{value:"fn",paraId:75,tocIndex:16},{value:" ",paraId:75,tocIndex:16},{value:"{Function}",paraId:75,tocIndex:16},{value:"returns",paraId:75,tocIndex:16},{value:" ",paraId:75,tocIndex:16},{value:"{String}",paraId:75,tocIndex:16},{value:"Example",paraId:76,tocIndex:16},{value:`<!-- array: ['a', 'b', 'c'], and "double" is a
fictitious function that duplicates letters -->
{{map array double}}
<!-- results in: '["aa", "bb", "cc"]' -->
`,paraId:77,tocIndex:16},{value:"Map over the given object or array or objects and create an array of values from the given ",paraId:78,tocIndex:17},{value:"prop",paraId:78,tocIndex:17},{value:". Dot-notation may be used (as a string) to get nested properties.",paraId:78,tocIndex:17},{value:"Params",paraId:79,tocIndex:17},{value:"collection",paraId:80,tocIndex:17},{value:" ",paraId:80,tocIndex:17},{value:"{Array|Object}",paraId:80,tocIndex:17},{value:"prop",paraId:80,tocIndex:17},{value:" ",paraId:80,tocIndex:17},{value:"{Function}",paraId:80,tocIndex:17},{value:"returns",paraId:80,tocIndex:17},{value:" ",paraId:80,tocIndex:17},{value:"{String}",paraId:80,tocIndex:17},{value:"Example",paraId:81,tocIndex:17},{value:`// {{pluck items "data.title"}}
<!-- results in: '["aa", "bb", "cc"]' -->
`,paraId:82,tocIndex:17},{value:"Reverse the elements in an array, or the characters in a string.",paraId:83,tocIndex:18},{value:"Params",paraId:84,tocIndex:18},{value:"value",paraId:85,tocIndex:18},{value:" ",paraId:85,tocIndex:18},{value:"{Array|String}",paraId:85,tocIndex:18},{value:"returns",paraId:85,tocIndex:18},{value:" ",paraId:85,tocIndex:18},{value:"{Array|String}",paraId:85,tocIndex:18},{value:": Returns the reversed string or array.",paraId:85,tocIndex:18},{value:"Example",paraId:86,tocIndex:18},{value:`<!-- value: 'abcd' -->
{{reverse value}}
<!-- results in: 'dcba' -->
<!-- value: ['a', 'b', 'c', 'd'] -->
{{reverse value}}
<!-- results in: ['d', 'c', 'b', 'a'] -->
`,paraId:87,tocIndex:18},{value:"Block helper that returns the block if the callback returns true for some value in the given array.",paraId:88,tocIndex:19},{value:"Params",paraId:89,tocIndex:19},{value:"array",paraId:90,tocIndex:19},{value:" ",paraId:90,tocIndex:19},{value:"{Array}",paraId:90,tocIndex:19},{value:"iter",paraId:90,tocIndex:19},{value:" ",paraId:90,tocIndex:19},{value:"{Function}",paraId:90,tocIndex:19},{value:": Iteratee",paraId:90,tocIndex:19},{value:"{Options}",paraId:90,tocIndex:19},{value:": Handlebars provided options object",paraId:90,tocIndex:19},{value:"returns",paraId:90,tocIndex:19},{value:" ",paraId:90,tocIndex:19},{value:"{String}",paraId:90,tocIndex:19},{value:"Example",paraId:91,tocIndex:19},{value:`<!-- array: [1, 'b', 3] -->
{{#some array isString}}
  Render me if the array has a string.
{{else}}
  Render me if it doesn't.
{{/some}}
<!-- results in: 'Render me if the array has a string.' -->
`,paraId:92,tocIndex:19},{value:"Sort the given ",paraId:93,tocIndex:20},{value:"array",paraId:93,tocIndex:20},{value:". If an array of objects is passed, you may optionally pass a ",paraId:93,tocIndex:20},{value:"key",paraId:93,tocIndex:20},{value:" to sort on as the second argument. You may alternatively pass a sorting function as the second argument.",paraId:93,tocIndex:20},{value:"Params",paraId:94,tocIndex:20},{value:"array",paraId:95,tocIndex:20},{value:" ",paraId:95,tocIndex:20},{value:"{Array}",paraId:95,tocIndex:20},{value:": the array to sort.",paraId:95,tocIndex:20},{value:"key",paraId:95,tocIndex:20},{value:" ",paraId:95,tocIndex:20},{value:"{String|Function}",paraId:95,tocIndex:20},{value:": The object key to sort by, or sorting function.",paraId:95,tocIndex:20},{value:"Example",paraId:96,tocIndex:20},{value:`<!-- array: ['b', 'a', 'c'] -->
{{sort array}}
<!-- results in: '["a", "b", "c"]' -->
`,paraId:97,tocIndex:20},{value:"Sort an ",paraId:98,tocIndex:21},{value:"array",paraId:98,tocIndex:21},{value:". If an array of objects is passed, you may optionally pass a ",paraId:98,tocIndex:21},{value:"key",paraId:98,tocIndex:21},{value:" to sort on as the second argument. You may alternatively pass a sorting function as the second argument.",paraId:98,tocIndex:21},{value:"Params",paraId:99,tocIndex:21},{value:"array",paraId:100,tocIndex:21},{value:" ",paraId:100,tocIndex:21},{value:"{Array}",paraId:100,tocIndex:21},{value:": the array to sort.",paraId:100,tocIndex:21},{value:"props",paraId:100,tocIndex:21},{value:" ",paraId:100,tocIndex:21},{value:"{String|Function}",paraId:100,tocIndex:21},{value:": One or more properties to sort by, or sorting functions to use.",paraId:100,tocIndex:21},{value:"Example",paraId:101,tocIndex:21},{value:`<!-- array: [{a: 'zzz'}, {a: 'aaa'}] -->
{{sortBy array "a"}}
<!-- results in: '[{"a":"aaa"}, {"a":"zzz"}]' -->
`,paraId:102,tocIndex:21},{value:"Use the items in the array ",paraId:103,tocIndex:22},{value:"after",paraId:103,tocIndex:22},{value:" the specified index as context inside a block. Opposite of ",paraId:103,tocIndex:22},{value:"withBefore",paraId:104,tocIndex:22},{value:".",paraId:103,tocIndex:22},{value:"Params",paraId:105,tocIndex:22},{value:"array",paraId:106,tocIndex:22},{value:" ",paraId:106,tocIndex:22},{value:"{Array}",paraId:106,tocIndex:22},{value:"idx",paraId:106,tocIndex:22},{value:" ",paraId:106,tocIndex:22},{value:"{Number}",paraId:106,tocIndex:22},{value:"options",paraId:106,tocIndex:22},{value:" ",paraId:106,tocIndex:22},{value:"{Object}",paraId:106,tocIndex:22},{value:"returns",paraId:106,tocIndex:22},{value:" ",paraId:106,tocIndex:22},{value:"{Array}",paraId:106,tocIndex:22},{value:"Example",paraId:107,tocIndex:22},{value:`<!-- array: ['a', 'b', 'c', 'd', 'e'] -->
{{#withAfter array 3}}
  {{this}}
{{/withAfter}}
<!-- results in: "de" -->
`,paraId:108,tocIndex:22},{value:"Use the items in the array ",paraId:109,tocIndex:23},{value:"before",paraId:109,tocIndex:23},{value:" the specified index as context inside a block. Opposite of ",paraId:109,tocIndex:23},{value:"withAfter",paraId:110,tocIndex:23},{value:".",paraId:109,tocIndex:23},{value:"Params",paraId:111,tocIndex:23},{value:"array",paraId:112,tocIndex:23},{value:" ",paraId:112,tocIndex:23},{value:"{Array}",paraId:112,tocIndex:23},{value:"idx",paraId:112,tocIndex:23},{value:" ",paraId:112,tocIndex:23},{value:"{Number}",paraId:112,tocIndex:23},{value:"options",paraId:112,tocIndex:23},{value:" ",paraId:112,tocIndex:23},{value:"{Object}",paraId:112,tocIndex:23},{value:"returns",paraId:112,tocIndex:23},{value:" ",paraId:112,tocIndex:23},{value:"{Array}",paraId:112,tocIndex:23},{value:"Example",paraId:113,tocIndex:23},{value:`<!-- array: ['a', 'b', 'c', 'd', 'e'] -->
{{#withBefore array 3}}
  {{this}}
{{/withBefore}}
<!-- results in: 'ab' -->
`,paraId:114,tocIndex:23},{value:"Use the first item in a collection inside a handlebars block expression. Opposite of ",paraId:115,tocIndex:24},{value:"withLast",paraId:116,tocIndex:24},{value:".",paraId:115,tocIndex:24},{value:"Params",paraId:117,tocIndex:24},{value:"array",paraId:118,tocIndex:24},{value:" ",paraId:118,tocIndex:24},{value:"{Array}",paraId:118,tocIndex:24},{value:"idx",paraId:118,tocIndex:24},{value:" ",paraId:118,tocIndex:24},{value:"{Number}",paraId:118,tocIndex:24},{value:"options",paraId:118,tocIndex:24},{value:" ",paraId:118,tocIndex:24},{value:"{Object}",paraId:118,tocIndex:24},{value:"returns",paraId:118,tocIndex:24},{value:" ",paraId:118,tocIndex:24},{value:"{String}",paraId:118,tocIndex:24},{value:"Example",paraId:119,tocIndex:24},{value:`<!-- array: ['a', 'b', 'c'] -->
{{#withFirst array}}
  {{this}}
{{/withFirst}}
<!-- results in: 'a' -->
`,paraId:120,tocIndex:24},{value:"Block helper that groups array elements by given group ",paraId:121,tocIndex:25},{value:"size",paraId:121,tocIndex:25},{value:".",paraId:121,tocIndex:25},{value:"Params",paraId:122,tocIndex:25},{value:"array",paraId:123,tocIndex:25},{value:" ",paraId:123,tocIndex:25},{value:"{Array}",paraId:123,tocIndex:25},{value:": The array to iterate over",paraId:123,tocIndex:25},{value:"size",paraId:123,tocIndex:25},{value:" ",paraId:123,tocIndex:25},{value:"{Number}",paraId:123,tocIndex:25},{value:': The desired length of each array "group"',paraId:123,tocIndex:25},{value:"options",paraId:123,tocIndex:25},{value:" ",paraId:123,tocIndex:25},{value:"{Object}",paraId:123,tocIndex:25},{value:": Handlebars options",paraId:123,tocIndex:25},{value:"returns",paraId:123,tocIndex:25},{value:" ",paraId:123,tocIndex:25},{value:"{String}",paraId:123,tocIndex:25},{value:"Example",paraId:124,tocIndex:25},{value:`<!-- array: ['a','b','c','d','e','f','g','h'] -->
{{#withGroup array 4}}
  {{#each this}}
    {{.}}
  {{each}}
  <br>
{{/withGroup}}
<!-- results in: -->
<!-- 'a','b','c','d'<br> -->
<!-- 'e','f','g','h'<br> -->
`,paraId:125,tocIndex:25},{value:"Use the last item or ",paraId:126,tocIndex:26},{value:"n",paraId:126,tocIndex:26},{value:" items in an array as context inside a block. Opposite of ",paraId:126,tocIndex:26},{value:"withFirst",paraId:127,tocIndex:26},{value:".",paraId:126,tocIndex:26},{value:"Params",paraId:128,tocIndex:26},{value:"array",paraId:129,tocIndex:26},{value:" ",paraId:129,tocIndex:26},{value:"{Array}",paraId:129,tocIndex:26},{value:"idx",paraId:129,tocIndex:26},{value:" ",paraId:129,tocIndex:26},{value:"{Number}",paraId:129,tocIndex:26},{value:": The starting index.",paraId:129,tocIndex:26},{value:"options",paraId:129,tocIndex:26},{value:" ",paraId:129,tocIndex:26},{value:"{Object}",paraId:129,tocIndex:26},{value:"returns",paraId:129,tocIndex:26},{value:" ",paraId:129,tocIndex:26},{value:"{String}",paraId:129,tocIndex:26},{value:"Example",paraId:130,tocIndex:26},{value:`<!-- array: ['a', 'b', 'c'] -->
{{#withLast array}}
  {{this}}
{{/withLast}}
<!-- results in: 'c' -->
`,paraId:131,tocIndex:26},{value:"Block helper that sorts a collection and exposes the sorted collection as context inside the block.",paraId:132,tocIndex:27},{value:"Params",paraId:133,tocIndex:27},{value:"array",paraId:134,tocIndex:27},{value:" ",paraId:134,tocIndex:27},{value:"{Array}",paraId:134,tocIndex:27},{value:"prop",paraId:134,tocIndex:27},{value:" ",paraId:134,tocIndex:27},{value:"{String}",paraId:134,tocIndex:27},{value:"options",paraId:134,tocIndex:27},{value:" ",paraId:134,tocIndex:27},{value:"{Object}",paraId:134,tocIndex:27},{value:": Specify ",paraId:134,tocIndex:27},{value:'reverse="true"',paraId:134,tocIndex:27},{value:" to reverse the array.",paraId:134,tocIndex:27},{value:"returns",paraId:134,tocIndex:27},{value:" ",paraId:134,tocIndex:27},{value:"{String}",paraId:134,tocIndex:27},{value:"Example",paraId:135,tocIndex:27},{value:`<!-- array: ['b', 'a', 'c'] -->
{{#withSort array}}{{this}}{{/withSort}}
<!-- results in: 'abc' -->
`,paraId:136,tocIndex:27},{value:"Block helper that return an array with all duplicate values removed. Best used along with a ",paraId:137,tocIndex:28},{value:"each",paraId:138,tocIndex:28},{value:" helper.",paraId:137,tocIndex:28},{value:"Params",paraId:139,tocIndex:28},{value:"array",paraId:140,tocIndex:28},{value:" ",paraId:140,tocIndex:28},{value:"{Array}",paraId:140,tocIndex:28},{value:"options",paraId:140,tocIndex:28},{value:" ",paraId:140,tocIndex:28},{value:"{Object}",paraId:140,tocIndex:28},{value:"returns",paraId:140,tocIndex:28},{value:" ",paraId:140,tocIndex:28},{value:"{Array}",paraId:140,tocIndex:28},{value:"Example",paraId:141,tocIndex:28},{value:`<!-- array: ['a', 'a', 'c', 'b', 'e', 'e'] -->
{{#each (unique array)}}{{.}}{{/each}}
<!-- results in: 'acbe' -->
`,paraId:142,tocIndex:28}]}}]);
