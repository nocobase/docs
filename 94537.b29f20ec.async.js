(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[94537],{35206:function(v,f,n){"use strict";var d=n(96707),x=n(67294),e=n(85893),u=function(c){var r=useSiteData(),i=r.themeConfig,a=i.lang,o=a==="zh-CN",s=a==="ja-JP";return _jsxs("div",{children:[_jsx("div",{className:"markdown",children:_jsx("h2",{children:o?"\u5B89\u88C5":s?"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB":"Installation"})}),_jsxs("div",{className:"dumi-default-container markdown","data-type":"info",children:[_jsxs("svg",{viewBox:"64 64 896 896",children:[_jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}),_jsx("path",{d:"M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"})]}),_jsxs("section",{children:[o?_jsx("p",{children:"\u8BE5\u63D2\u4EF6\u4E3A\u5546\u4E1A\u63D2\u4EF6\uFF0C\u9700\u8981\u901A\u8FC7\u63D2\u4EF6\u7BA1\u7406\u5668\u4E0A\u4F20\u5E76\u6FC0\u6D3B\u63D2\u4EF6\uFF1A"}):s?_jsx("p",{children:"\u3053\u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u5546\u7528\u30D7\u30E9\u30B0\u30A4\u30F3\u3067\u3042\u308A\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u3092\u4ECB\u3057\u3066\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u3001\u30A2\u30AF\u30C6\u30A3\u30D6\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}):_jsx("p",{children:"This is a commercial plugin, which needs to be uploaded and enabled in the plugin manager."}),_jsx("p",{children:_jsx("img",{alt:"",src:"https://static-docs.nocobase.com/20240323162741.png"})})]})]})]})},m=null},91926:function(v,f,n){"use strict";var d=n(67294),x=n(11590),e=n(1191),u=n(85893),m=[{category:"DATE",functions:[{title:"DATE",call:"DATE(2008, 7, 8)",result:"Tue Jul 08 2008 00:00:00 GMT-0700 (PDT)",definition:{en:"Create a date by given year, month, day.",cn:"\u6839\u636E\u7ED9\u5B9A\u7684\u5E74\u3001\u6708\u548C\u65E5\u521B\u5EFA\u65E5\u671F\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u5E74\u3001\u6708\u3001\u65E5\u304B\u3089\u65E5\u4ED8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"year (integer), month (1-12), date (1-31)",cn:"\u5E74\u4EFD\uFF08\u6574\u6570\uFF09\uFF0C\u6708\u4EFD\uFF081-12\uFF09\uFF0C\u65E5\u671F\uFF081-31\uFF09\u3002",ja:"\u5E74\uFF08\u6574\u6570\uFF09\u3001\u6708\uFF081-12\uFF09\u3001\u65E5\uFF081-31\uFF09"}},{title:"DATEVALUE",call:"DATEVALUE('8/22/2011')",result:"Mon Aug 22 2011 00:00:00 GMT-0700 (PDT)",definition:{en:"Converts a date in text format to a serial number.",cn:"\u5C06\u6587\u672C\u683C\u5F0F\u7684\u65E5\u671F\u8F6C\u6362\u4E3A\u65E5\u671F\u5E8F\u5217\u53F7\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u5F62\u5F0F\u306E\u65E5\u4ED8\u3092\u30B7\u30EA\u30A2\u30EB\u756A\u53F7\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"text string representing a date",cn:"\u8868\u793A\u65E5\u671F\u7684\u6587\u672C\u5B57\u7B26\u4E32",ja:"\u65E5\u4ED8\u3092\u8868\u3059\u6587\u5B57\u5217"}},{title:"DAY",call:"DAY('15-Apr-11')",result:15,definition:{en:"Returns the day of the specified date.",cn:"\u8FD4\u56DE\u6307\u5B9A\u65E5\u671F\u4E2D\u7684\u65E5\u90E8\u5206\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u65E5\u4ED8\u306E\u65E5\u306B\u3061\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"date value or date text string",cn:"\u65E5\u671F\u503C\u6216\u65E5\u671F\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u65E5\u4ED8\u5024\u307E\u305F\u306F\u65E5\u4ED8\u306E\u6587\u5B57\u5217"}},{title:"DAYS",call:"DAYS('3/15/11', '2/1/11')",result:42,definition:{en:"Calculates the number of days between two dates.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u4E4B\u95F4\u7684\u5929\u6570\u3002",ja:"2\u3064\u306E\u65E5\u4ED8\u9593\u306E\u65E5\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"end date, start date",cn:"\u7ED3\u675F\u65E5\u671F\uFF0C\u5F00\u59CB\u65E5\u671F\u3002",ja:"\u7D42\u4E86\u65E5\u3001\u958B\u59CB\u65E5"}},{title:"DAYS360",call:"DAYS360('1-Jan-11', '31-Dec-11')",result:360,definition:{en:"Calculates the number of days between two dates based on a 360-day year.",cn:"\u57FA\u4E8E\u4E00\u5E74360\u5929\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u95F4\u7684\u5929\u6570\u3002",ja:"360\u65E5\u306E\u5E74\u306B\u57FA\u3065\u3044\u30662\u3064\u306E\u65E5\u4ED8\u9593\u306E\u65E5\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"start date, end date",cn:"\u8D77\u59CB\u65E5\u671F\uFF0C\u7ED3\u675F\u65E5\u671F\u3002",ja:"\u958B\u59CB\u65E5\u3001\u7D42\u4E86\u65E5"}},{title:"EDATE",call:"EDATE('1/15/11', -1)",result:"Wed Dec 15 2010 00:00:00 GMT-0800 (PST)",definition:{en:"Returns the date that is the indicated number of months before or after the start date.",cn:"\u8FD4\u56DE\u6307\u5B9A\u6708\u4EFD\u6570\u4E4B\u524D\u6216\u4E4B\u540E\u7684\u65E5\u671F\u3002",ja:"\u958B\u59CB\u65E5\u304B\u3089\u6307\u5B9A\u3055\u308C\u305F\u6708\u6570\u524D\u5F8C\u306B\u3042\u308B\u65E5\u4ED8\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"start date, months (positive for future, negative for past)",cn:"\u8D77\u59CB\u65E5\u671F\uFF0C\u6708\u4EFD\u6570\uFF08\u6B63\u6570\u4E3A\u5C06\u6765\uFF0C\u8D1F\u6570\u4E3A\u8FC7\u53BB\uFF09\u3002",ja:"\u958B\u59CB\u65E5\u3001\u6708\u6570\uFF08\u672A\u6765\u306F\u6B63\u3001\u904E\u53BB\u306F\u8CA0\uFF09"}},{title:"EOMONTH",call:"EOMONTH('1/1/11', -3)",result:"Sun Oct 31 2010 00:00:00 GMT-0700 (PDT)",definition:{en:"Returns the last day of the month that is the indicated number of months before or after the start date.",cn:"\u8FD4\u56DE\u6307\u5B9A\u6708\u4EFD\u6570\u4E4B\u524D\u6216\u4E4B\u540E\u7684\u6708\u672B\u65E5\u671F\u3002",ja:"\u958B\u59CB\u65E5\u304B\u3089\u6307\u5B9A\u3055\u308C\u305F\u6708\u6570\u524D\u5F8C\u306B\u3042\u308B\u6708\u672B\u306E\u65E5\u4ED8\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"start date, months (positive for future, negative for past)",cn:"\u8D77\u59CB\u65E5\u671F\uFF0C\u6708\u4EFD\u6570\uFF08\u6B63\u6570\u4E3A\u5C06\u6765\uFF0C\u8D1F\u6570\u4E3A\u8FC7\u53BB\uFF09\u3002",ja:"\u958B\u59CB\u65E5\u3001\u6708\u6570\uFF08\u672A\u6765\u306F\u6B63\u3001\u904E\u53BB\u306F\u8CA0\uFF09"}},{title:"HOUR",call:"HOUR('7/18/2011 7:45:00 AM')",result:7,definition:{en:"Returns the hour part of a time value.",cn:"\u8FD4\u56DE\u65F6\u95F4\u4E2D\u7684\u5C0F\u65F6\u90E8\u5206\u3002",ja:"\u6642\u9593\u5024\u306E\u6642\u9593\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"time value or time text string",cn:"\u65F6\u95F4\u503C\u6216\u65F6\u95F4\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u6642\u9593\u5024\u307E\u305F\u306F\u6642\u9593\u306E\u6587\u5B57\u5217"}},{title:"MINUTE",call:"MINUTE('2/1/2011 12:45:00 PM')",result:45,definition:{en:"Returns the minute part of a time value.",cn:"\u8FD4\u56DE\u65F6\u95F4\u4E2D\u7684\u5206\u949F\u90E8\u5206\u3002",ja:"\u6642\u9593\u5024\u306E\u5206\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"time value or time text string",cn:"\u65F6\u95F4\u503C\u6216\u65F6\u95F4\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u6642\u9593\u5024\u307E\u305F\u306F\u6642\u9593\u306E\u6587\u5B57\u5217"}},{title:"ISOWEEKNUM",call:"ISOWEEKNUM('3/9/2012')",result:10,definition:{en:"Returns the ISO week number of the year for a given date.",cn:"\u8FD4\u56DE\u4E00\u5E74\u4E2D\u7ED9\u5B9A\u65E5\u671F\u6240\u5728\u7684ISO\u5468\u6570\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u65E5\u4ED8\u304C\u5C5E\u3059\u308BISO\u9031\u756A\u53F7\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"date value or date text string",cn:"\u65E5\u671F\u503C\u6216\u65E5\u671F\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u65E5\u4ED8\u5024\u307E\u305F\u306F\u65E5\u4ED8\u306E\u6587\u5B57\u5217"}},{title:"MONTH",call:"MONTH('15-Apr-11')",result:4,definition:{en:"Returns the month part of a date value.",cn:"\u8FD4\u56DE\u6307\u5B9A\u65E5\u671F\u4E2D\u7684\u6708\u90E8\u5206\u3002",ja:"\u65E5\u4ED8\u5024\u306E\u6708\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"date value or date text string",cn:"\u65E5\u671F\u503C\u6216\u65E5\u671F\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u65E5\u4ED8\u5024\u307E\u305F\u306F\u65E5\u4ED8\u306E\u6587\u5B57\u5217"}},{title:"NETWORKDAYS",call:"NETWORKDAYS('10/1/2012', '3/1/2013', ['11/22/2012'])",result:109,definition:{en:"Calculates the total number of working days between two dates, excluding weekends and specified holidays.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u95F4\u7684\u5DE5\u4F5C\u65E5\u6570\uFF0C\u4E0D\u5305\u62EC\u5468\u672B\u548C\u6307\u5B9A\u7684\u5047\u671F\u3002",ja:"2\u3064\u306E\u65E5\u4ED8\u9593\u306E\u5E73\u65E5\u306E\u7DCF\u6570\u3092\u8A08\u7B97\u3057\u3001\u9031\u672B\u3068\u6307\u5B9A\u3055\u308C\u305F\u4F11\u65E5\u3092\u9664\u304D\u307E\u3059\u3002"},parameterDefinitions:{en:"start date, end date, optional holidays array",cn:"\u5F00\u59CB\u65E5\u671F\uFF0C\u7ED3\u675F\u65E5\u671F\uFF0C\u53EF\u9009\u5047\u671F\u6570\u7EC4\u3002",ja:"\u958B\u59CB\u65E5\u3001\u7D42\u4E86\u65E5\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u4F11\u65E5\u914D\u5217"}},{title:"NETWORKDAYSINTL",call:"NETWORKDAYSINTL('1/1/2006', '2/1/2006', 7, ['1/2/2006'])",result:23,definition:{en:"Calculates the total number of working days between two dates, allowing for custom weekends, and excluding specified holidays.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u95F4\u7684\u5DE5\u4F5C\u65E5\u6570\uFF0C\u5141\u8BB8\u81EA\u5B9A\u4E49\u5468\u672B\uFF0C\u5E76\u6392\u9664\u6307\u5B9A\u5047\u671F\u3002",ja:"2\u3064\u306E\u65E5\u4ED8\u9593\u306E\u5E73\u65E5\u306E\u7DCF\u6570\u3092\u8A08\u7B97\u3057\u3001\u30AB\u30B9\u30BF\u30E0\u9031\u672B\u3092\u8A31\u53EF\u3057\u3001\u6307\u5B9A\u3055\u308C\u305F\u4F11\u65E5\u3092\u9664\u304D\u307E\u3059\u3002"},parameterDefinitions:{en:"start date, end date, weekend pattern, optional holidays array",cn:"\u5F00\u59CB\u65E5\u671F\uFF0C\u7ED3\u675F\u65E5\u671F\uFF0C\u5468\u672B\u6A21\u5F0F\uFF0C\u53EF\u9009\u5047\u671F\u6570\u7EC4\u3002",ja:"\u958B\u59CB\u65E5\u3001\u7D42\u4E86\u65E5\u3001\u9031\u672B\u30D1\u30BF\u30FC\u30F3\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u4F11\u65E5\u914D\u5217"}},{title:"NOW",call:"NOW()",result:"Thu Feb 20 2020 23:02:55 GMT+0100 (Central European Standard Time)",definition:{en:"Returns the current date and time.",cn:"\u8FD4\u56DE\u5F53\u524D\u65E5\u671F\u548C\u65F6\u95F4\u3002",ja:"\u73FE\u5728\u306E\u65E5\u4ED8\u3068\u6642\u523B\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"no parameters",cn:"\u65E0\u53C2\u6570\u3002",ja:"\u30D1\u30E9\u30E1\u30FC\u30BF\u306A\u3057"}},{title:"SECOND",call:"SECOND('2/1/2011 4:48:18 PM')",result:18,definition:{en:"Returns the second part of a time value.",cn:"\u8FD4\u56DE\u65F6\u95F4\u4E2D\u7684\u79D2\u90E8\u5206\u3002",ja:"\u6642\u9593\u5024\u306E\u79D2\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"time value or time text string",cn:"\u65F6\u95F4\u503C\u6216\u65F6\u95F4\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u6642\u9593\u5024\u307E\u305F\u306F\u6642\u9593\u306E\u6587\u5B57\u5217"}},{title:"TIME",call:"TIME(16, 48, 10)",result:.7001157407407408,definition:{en:"Creates a time from the given hour, minute, and second.",cn:"\u6839\u636E\u7ED9\u5B9A\u7684\u5C0F\u65F6\u3001\u5206\u949F\u548C\u79D2\u521B\u5EFA\u65F6\u95F4\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u6642\u9593\u3001\u5206\u3001\u79D2\u304B\u3089\u6642\u9593\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"hour (0-23), minute (0-59), second (0-59)",cn:"\u5C0F\u65F6\uFF080-23\uFF09\uFF0C\u5206\u949F\uFF080-59\uFF09\uFF0C\u79D2\uFF080-59\uFF09\u3002",ja:"\u6642\u9593\uFF080-23\uFF09\u3001\u5206\uFF080-59\uFF09\u3001\u79D2\uFF080-59\uFF09"}},{title:"TIMEVALUE",call:"TIMEVALUE('22-Aug-2011 6:35 AM')",result:.2743055555555556,definition:{en:"Converts a time in text format to a time serial number.",cn:"\u5C06\u6587\u672C\u683C\u5F0F\u7684\u65F6\u95F4\u8F6C\u6362\u4E3A\u65F6\u95F4\u5E8F\u5217\u53F7\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u5F62\u5F0F\u306E\u6642\u9593\u3092\u6642\u9593\u306E\u30B7\u30EA\u30A2\u30EB\u756A\u53F7\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"text string representing a time",cn:"\u6587\u672C\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u65F6\u95F4\u3002",ja:"\u6642\u9593\u3092\u8868\u3059\u6587\u5B57\u5217"}},{title:"TODAY",call:"TODAY()",result:"Thu Feb 20 2020 23:02:55 GMT+0100 (Central European Standard Time)",definition:{en:"Returns the current date.",cn:"\u8FD4\u56DE\u4ECA\u5929\u7684\u65E5\u671F\u3002",ja:"\u4ECA\u65E5\u306E\u65E5\u4ED8\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"no parameters",cn:"\u65E0\u53C2\u6570\u3002",ja:"\u30D1\u30E9\u30E1\u30FC\u30BF\u306A\u3057"}},{title:"WEEKDAY",call:"WEEKDAY('2/14/2008', 3)",result:3,definition:{en:"Returns the day of the week as a number.",cn:"\u8FD4\u56DE\u4E00\u5468\u4E2D\u67D0\u4E00\u5929\u7684\u6570\u5B57\u3002",ja:"\u9031\u306E\u65E5\u306B\u3061\u3092\u6570\u5024\u3067\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"date value or date text string, return type (1-3)",cn:"\u65E5\u671F\u503C\u6216\u65E5\u671F\u6587\u672C\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u7C7B\u578B\uFF081-3\uFF09\u3002",ja:"\u65E5\u4ED8\u5024\u307E\u305F\u306F\u65E5\u4ED8\u306E\u6587\u5B57\u5217\u3001\u623B\u308A\u5024\u306E\u30BF\u30A4\u30D7\uFF081-3\uFF09"}},{title:"YEAR",call:"YEAR('7/5/2008')",result:2008,definition:{en:"Returns the year part of a date value.",cn:"\u8FD4\u56DE\u6307\u5B9A\u65E5\u671F\u4E2D\u7684\u5E74\u90E8\u5206\u3002",ja:"\u65E5\u4ED8\u5024\u306E\u5E74\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"date value or date text string",cn:"\u65E5\u671F\u503C\u6216\u65E5\u671F\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u65E5\u4ED8\u5024\u307E\u305F\u306F\u65E5\u4ED8\u306E\u6587\u5B57\u5217"}},{title:"WEEKNUM",call:"WEEKNUM('3/9/2012', 2)",result:11,definition:{en:"Returns the week number of the year for a given date.",cn:"\u8FD4\u56DE\u4E00\u5E74\u4E2D\u7ED9\u5B9A\u65E5\u671F\u6240\u5728\u7684\u5468\u6570\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u65E5\u4ED8\u304C\u5C5E\u3059\u308B\u9031\u756A\u53F7\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"date value or date text string, optional week start day (1=Sunday, 2=Monday)",cn:"\u65E5\u671F\u503C\u6216\u65E5\u671F\u6587\u672C\u5B57\u7B26\u4E32\uFF0C\u53EF\u9009\u5468\u5F00\u59CB\u65E5\uFF081=\u661F\u671F\u65E5\uFF0C2=\u661F\u671F\u4E00\uFF09\u3002",ja:"\u65E5\u4ED8\u5024\u307E\u305F\u306F\u65E5\u4ED8\u306E\u6587\u5B57\u5217\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u9031\u306E\u958B\u59CB\u65E5\uFF081=\u65E5\u66DC\u65E5\u30012=\u6708\u66DC\u65E5\uFF09"}},{title:"WORKDAY",call:"WORKDAY('10/1/2008', 151, ['11/26/2008', '12/4/2008'])",result:"Mon May 04 2009 00:00:00 GMT-0700 (PDT)",definition:{en:"Returns the date that is the indicated number of workdays before or after the start date, excluding weekends and specified holidays.",cn:"\u8FD4\u56DE\u4ECE\u8D77\u59CB\u65E5\u671F\u8D77\u6307\u5B9A\u5DE5\u4F5C\u65E5\u6570\u4E4B\u524D\u6216\u4E4B\u540E\u7684\u65E5\u671F\uFF0C\u4E0D\u5305\u62EC\u5468\u672B\u548C\u6307\u5B9A\u7684\u5047\u671F\u3002",ja:"\u958B\u59CB\u65E5\u304B\u3089\u6307\u5B9A\u3055\u308C\u305F\u4F5C\u696D\u65E5\u524D\u5F8C\u306B\u3042\u308B\u65E5\u4ED8\u3092\u8FD4\u3057\u3001\u9031\u672B\u3068\u6307\u5B9A\u3055\u308C\u305F\u4F11\u65E5\u3092\u9664\u304D\u307E\u3059\u3002"},parameterDefinitions:{en:"start date, workdays, optional holidays array",cn:"\u8D77\u59CB\u65E5\u671F\uFF0C\u5DE5\u4F5C\u65E5\u6570\uFF0C\u53EF\u9009\u5047\u671F\u6570\u7EC4\u3002",ja:"\u958B\u59CB\u65E5\u3001\u4F5C\u696D\u65E5\u6570\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u4F11\u65E5\u914D\u5217"}},{title:"WORKDAYINTL",call:"WORKDAYINTL('1/1/2012', 30, 17)",result:"Sun Feb 05 2012 00:00:00 GMT-0800 (PST)",definition:{en:"Returns the date that is the indicated number of workdays before or after the start date, allowing for custom weekends, and excluding specified holidays.",cn:"\u8FD4\u56DE\u4ECE\u8D77\u59CB\u65E5\u671F\u8D77\u6307\u5B9A\u5DE5\u4F5C\u65E5\u6570\u4E4B\u524D\u6216\u4E4B\u540E\u7684\u65E5\u671F\uFF0C\u5141\u8BB8\u81EA\u5B9A\u4E49\u5468\u672B\uFF0C\u5E76\u6392\u9664\u6307\u5B9A\u5047\u671F\u3002",ja:"\u958B\u59CB\u65E5\u304B\u3089\u6307\u5B9A\u3055\u308C\u305F\u4F5C\u696D\u65E5\u524D\u5F8C\u306B\u3042\u308B\u65E5\u4ED8\u3092\u8FD4\u3057\u3001\u30AB\u30B9\u30BF\u30E0\u9031\u672B\u3092\u8A31\u53EF\u3057\u3001\u6307\u5B9A\u3055\u308C\u305F\u4F11\u65E5\u3092\u9664\u304D\u307E\u3059\u3002"},parameterDefinitions:{en:"start date, workdays, weekend pattern",cn:"\u8D77\u59CB\u65E5\u671F\uFF0C\u5DE5\u4F5C\u65E5\u6570\uFF0C\u5468\u672B\u6A21\u5F0F\u3002",ja:"\u958B\u59CB\u65E5\u3001\u4F5C\u696D\u65E5\u6570\u3001\u9031\u672B\u30D1\u30BF\u30FC\u30F3"}},{title:"YEARFRAC",call:"YEARFRAC('1/1/2012', '7/30/2012', 3)",result:.5780821917808219,definition:{en:"Calculates the fraction of the year represented by the number of whole days between two dates.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u4E4B\u95F4\u7684\u5E74\u5206\u6570\u3002",ja:"2\u3064\u306E\u65E5\u4ED8\u9593\u306E\u5168\u65E5\u6570\u304C\u8868\u3059\u5E74\u306E\u5206\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"start date, end date, optional basis (day count basis)",cn:"\u5F00\u59CB\u65E5\u671F\uFF0C\u7ED3\u675F\u65E5\u671F\uFF0C\u53EF\u9009\u57FA\u7840\uFF08\u65E5\u8BA1\u6570\u57FA\u51C6\uFF09\u3002",ja:"\u958B\u59CB\u65E5\u3001\u7D42\u4E86\u65E5\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u30D9\u30FC\u30B9\uFF08\u65E5\u6570\u306E\u57FA\u6E96\uFF09"}}]},{category:"FINANCIAL",functions:[{title:"ACCRINT",call:"ACCRINT('01/01/2011', '02/01/2011', '07/01/2014', 0.1, 1000, 1, 0)",result:350,definition:{en:"Calculate the accrued interest for a security that pays periodic interest.",cn:"\u8BA1\u7B97\u5B9A\u671F\u652F\u4ED8\u5229\u606F\u7684\u6709\u4EF7\u8BC1\u5238\u7684\u5E94\u8BA1\u5229\u606F\u3002",ja:"\u5B9A\u671F\u7684\u306A\u5229\u6255\u3044\u3092\u3059\u308B\u8A3C\u5238\u306E\u4ED8\u5229\u91D1\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"start_date, first_interest, settlement, rate, par, frequency, basis",cn:"\u8D77\u59CB\u65E5\u671F\uFF0C\u9996\u6B21\u652F\u4ED8\u5229\u606F\u65E5\u671F\uFF0C\u7ED3\u7B97\u65E5\u671F\uFF0C\u5E74\u5229\u7387\uFF0C\u9762\u503C\uFF0C\u671F\u95F4\u6570\uFF0C\u57FA\u7840\u3002",ja:"\u958B\u59CB\u65E5\u3001\u6700\u521D\u306E\u5229\u6255\u65E5\u3001\u6C7A\u6E08\u65E5\u3001\u5229\u7387\u3001\u984D\u9762\u3001\u983B\u5EA6\u3001\u57FA\u6E96"}},{title:"CUMIPMT",call:"CUMIPMT(0.1/12, 30*12, 100000, 13, 24, 0)",result:-9916.77251395708,definition:{en:"Calculate the cumulative interest paid on a loan between start and end periods.",cn:"\u8BA1\u7B97\u4E00\u7CFB\u5217\u4ED8\u6B3E\u4E2D\u7D2F\u79EF\u7684\u5229\u606F\u652F\u4ED8\u3002",ja:"\u958B\u59CB\u671F\u9593\u3068\u7D42\u4E86\u671F\u9593\u306E\u9593\u306B\u652F\u6255\u308F\u308C\u308B\u30ED\u30FC\u30F3\u306E\u7D2F\u7A4D\u5229\u606F\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"rate, nper, pv, start_period, end_period, type",cn:"\u5229\u7387\uFF0C\u603B\u671F\u6570\uFF0C\u73B0\u503C\uFF0C\u5F00\u59CB\u671F\u6570\uFF0C\u7ED3\u675F\u671F\u6570\uFF0C\u652F\u4ED8\u7C7B\u578B\uFF080=\u671F\u672B\uFF0C1=\u671F\u521D\uFF09\u3002",ja:"\u5229\u7387\u3001\u7DCF\u671F\u9593\u3001\u73FE\u5728\u4FA1\u5024\u3001\u958B\u59CB\u671F\u9593\u3001\u7D42\u4E86\u671F\u9593\u3001\u30BF\u30A4\u30D7\uFF080=\u671F\u672B\u30011=\u671F\u521D\uFF09"}},{title:"CUMPRINC",call:"CUMPRINC(0.1/12, 30*12, 100000, 13, 24, 0)",result:-614.0863271085149,definition:{en:"Calculate the cumulative principal paid on a loan between start and end periods.",cn:"\u8BA1\u7B97\u4E00\u7CFB\u5217\u4ED8\u6B3E\u4E2D\u7D2F\u79EF\u7684\u672C\u91D1\u652F\u4ED8\u3002",ja:"\u958B\u59CB\u671F\u9593\u3068\u7D42\u4E86\u671F\u9593\u306E\u9593\u306B\u652F\u6255\u308F\u308C\u308B\u30ED\u30FC\u30F3\u306E\u7D2F\u7A4D\u5143\u672C\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"rate, nper, pv, start_period, end_period, type",cn:"\u5229\u7387\uFF0C\u603B\u671F\u6570\uFF0C\u73B0\u503C\uFF0C\u5F00\u59CB\u671F\u6570\uFF0C\u7ED3\u675F\u671F\u6570\uFF0C\u652F\u4ED8\u7C7B\u578B\uFF080=\u671F\u672B\uFF0C1=\u671F\u521D\uFF09\u3002",ja:"\u5229\u7387\u3001\u7DCF\u671F\u9593\u3001\u73FE\u5728\u4FA1\u5024\u3001\u958B\u59CB\u671F\u9593\u3001\u7D42\u4E86\u671F\u9593\u3001\u30BF\u30A4\u30D7\uFF080=\u671F\u672B\u30011=\u671F\u521D\uFF09"}},{title:"DB",call:"DB(1000000, 100000, 6, 1, 6)",result:159500,definition:{en:"Calculate the depreciation of an asset for a specified period using the fixed-declining balance method.",cn:"\u4F7F\u7528\u56FA\u5B9A\u4F59\u989D\u9012\u51CF\u6CD5\u8BA1\u7B97\u6298\u65E7\u3002",ja:"\u56FA\u5B9A\u6B8B\u4FA1\u9013\u6E1B\u6CD5\u3092\u4F7F\u7528\u3057\u3066\u6307\u5B9A\u3055\u308C\u305F\u671F\u9593\u306E\u8CC7\u7523\u306E\u6E1B\u4FA1\u511F\u5374\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"cost, salvage, life, period, month",cn:"\u6210\u672C\uFF0C\u6B8B\u503C\uFF0C\u4F7F\u7528\u5BFF\u547D\uFF0C\u671F\u95F4\uFF0C\u6708\u4EFD\u3002",ja:"\u539F\u4FA1\u3001\u6B8B\u4FA1\u3001\u8010\u7528\u5E74\u6570\u3001\u671F\u9593\u3001\u6708\u6570"}},{title:"DDB",call:"DDB(1000000, 100000, 6, 1, 1.5)",result:25e4,definition:{en:"Calculate the depreciation of an asset for a specified period using the double-declining balance method or another specified method.",cn:"\u4F7F\u7528\u53CC\u500D\u4F59\u989D\u9012\u51CF\u6CD5\u6216\u5176\u4ED6\u6307\u5B9A\u65B9\u6CD5\u8BA1\u7B97\u6298\u65E7\u3002",ja:"\u4E8C\u91CD\u6B8B\u4FA1\u9013\u6E1B\u6CD5\u307E\u305F\u306F\u4ED6\u306E\u6307\u5B9A\u3055\u308C\u305F\u65B9\u6CD5\u3092\u4F7F\u7528\u3057\u3066\u6307\u5B9A\u3055\u308C\u305F\u671F\u9593\u306E\u8CC7\u7523\u306E\u6E1B\u4FA1\u511F\u5374\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"cost, salvage, life, period, factor",cn:"\u6210\u672C\uFF0C\u6B8B\u503C\uFF0C\u4F7F\u7528\u5BFF\u547D\uFF0C\u671F\u95F4\uFF0C\u56E0\u5B50\u3002",ja:"\u539F\u4FA1\u3001\u6B8B\u4FA1\u3001\u8010\u7528\u5E74\u6570\u3001\u671F\u9593\u3001\u4FC2\u6570"}},{title:"DOLLARDE",call:"DOLLARDE(1.1, 16)",result:1.625,definition:{en:"Converts a dollar price expressed as a fraction into a decimal number.",cn:"\u5C06\u5206\u6570\u8868\u793A\u7684\u4EF7\u683C\u8F6C\u6362\u4E3A\u5C0F\u6570\u8868\u793A\u3002",ja:"\u5206\u6570\u3067\u8868\u73FE\u3055\u308C\u305F\u30C9\u30EB\u4FA1\u683C\u3092\u5C0F\u6570\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"fractional_dollar, fraction",cn:"\u5206\u6570\u5F62\u5F0F\u7684\u7F8E\u5143\u4EF7\u683C\uFF0C\u5206\u6BCD\u3002",ja:"\u5206\u6570\u5F62\u5F0F\u306E\u30C9\u30EB\u4FA1\u683C\u3001\u5206\u6BCD"}},{title:"DOLLARFR",call:"DOLLARFR(1.625, 16)",result:1.1,definition:{en:"Converts a dollar price expressed as a decimal number into a fractional dollar.",cn:"\u5C06\u5C0F\u6570\u8868\u793A\u7684\u4EF7\u683C\u8F6C\u6362\u4E3A\u5206\u6570\u8868\u793A\u3002",ja:"\u5C0F\u6570\u3067\u8868\u73FE\u3055\u308C\u305F\u30C9\u30EB\u4FA1\u683C\u3092\u5206\u6570\u306E\u30C9\u30EB\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"decimal_dollar, fraction",cn:"\u5C0F\u6570\u5F62\u5F0F\u7684\u7F8E\u5143\u4EF7\u683C\uFF0C\u5206\u6BCD\u3002",ja:"\u5C0F\u6570\u5F62\u5F0F\u306E\u30C9\u30EB\u4FA1\u683C\u3001\u5206\u6BCD"}},{title:"EFFECT",call:"EFFECT(0.1, 4)",result:.10381289062499977,definition:{en:"Calculate the effective annual interest rate.",cn:"\u8BA1\u7B97\u5B9E\u9645\u5E74\u5229\u7387\u3002",ja:"\u5B9F\u969B\u306E\u5E74\u9593\u5229\u7387\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"nominal_rate, npery",cn:"\u540D\u4E49\u5E74\u5229\u7387\uFF0C\u6BCF\u5E74\u590D\u5229\u6B21\u6570\u3002",ja:"\u540D\u76EE\u5E74\u5229\u7387\u3001\u5E74\u8907\u5229\u56DE\u6570"}},{title:"FV",call:"FV(0.1/12, 10, -100, -1000, 0)",result:2124.874409194097,definition:{en:"Calculate the future value of an investment.",cn:"\u8BA1\u7B97\u6295\u8D44\u7684\u672A\u6765\u4EF7\u503C\u3002",ja:"\u6295\u8CC7\u306E\u5C06\u6765\u4FA1\u5024\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"rate, nper, pmt, pv, type",cn:"\u6BCF\u671F\u5229\u7387\uFF0C\u671F\u6570\uFF0C\u6BCF\u671F\u652F\u4ED8\u989D\uFF0C\u73B0\u503C\uFF0C\u652F\u4ED8\u7C7B\u578B\uFF080=\u671F\u672B\uFF0C1=\u671F\u521D\uFF09\u3002",ja:"\u5404\u671F\u5229\u7387\u3001\u671F\u9593\u6570\u3001\u5404\u671F\u652F\u6255\u984D\u3001\u73FE\u5728\u4FA1\u5024\u3001\u30BF\u30A4\u30D7\uFF080=\u671F\u672B\u30011=\u671F\u521D\uFF09"}},{title:"FVSCHEDULE",call:"FVSCHEDULE(100, [0.09,0.1,0.11])",result:133.08900000000003,definition:{en:"Calculate the future value of an initial principal after applying a series of compound interest rates.",cn:"\u6839\u636E\u4E00\u7CFB\u5217\u590D\u5229\u7387\u8BA1\u7B97\u672C\u91D1\u7684\u672A\u6765\u4EF7\u503C\u3002",ja:"\u4E00\u9023\u306E\u8907\u5229\u5229\u7387\u3092\u9069\u7528\u3057\u305F\u5F8C\u306E\u521D\u671F\u5143\u672C\u306E\u5C06\u6765\u4FA1\u5024\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"principal, schedule",cn:"\u672C\u91D1\uFF0C\u5229\u7387\u6570\u7EC4\u3002",ja:"\u5143\u672C\u3001\u5229\u7387\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB"}},{title:"IPMT",call:"IPMT(0.1/12, 6, 2*12, 100000, 1000000, 0)",result:928.8235718400465,definition:{en:"Calculate the interest payment for a given period for an investment based on periodic, constant payments and a constant interest rate.",cn:"\u8BA1\u7B97\u7279\u5B9A\u671F\u95F4\u5185\u7684\u5229\u606F\u652F\u4ED8\u3002",ja:"\u4E00\u5B9A\u306E\u5229\u7387\u3068\u5B9A\u671F\u7684\u306A\u5B9A\u984D\u8FD4\u6E08\u306B\u57FA\u3065\u304F\u6295\u8CC7\u306E\u7279\u5B9A\u671F\u9593\u306E\u5229\u606F\u652F\u6255\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"rate, per, nper, pv, fv, type",cn:"\u6BCF\u671F\u5229\u7387\uFF0C\u671F\u95F4\uFF0C\u603B\u671F\u6570\uFF0C\u73B0\u503C\uFF0C\u672A\u6765\u503C\uFF0C\u652F\u4ED8\u7C7B\u578B\uFF080=\u671F\u672B\uFF0C1=\u671F\u521D\uFF09\u3002",ja:"\u5404\u671F\u5229\u7387\u3001\u671F\u9593\u3001\u7DCF\u671F\u9593\u3001\u73FE\u5728\u4FA1\u5024\u3001\u5C06\u6765\u4FA1\u5024\u3001\u30BF\u30A4\u30D7\uFF080=\u671F\u672B\u30011=\u671F\u521D\uFF09"}},{title:"IRR",call:"IRR([-75000,12000,15000,18000,21000,24000], 0.075)",result:.05715142887178447,definition:{en:"Calculate the internal rate of return for a series of cash flows.",cn:"\u8BA1\u7B97\u5185\u90E8\u6536\u76CA\u7387\u3002",ja:"\u4E00\u9023\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u30D5\u30ED\u30FC\u306E\u5185\u90E8\u53CE\u76CA\u7387\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"values, guess",cn:"\u73B0\u91D1\u6D41\u6570\u7EC4\uFF0C\u4F30\u8BA1\u503C\u3002",ja:"\u30AD\u30E3\u30C3\u30B7\u30E5\u30D5\u30ED\u30FC\u914D\u5217\u3001\u63A8\u5B9A\u5024"}},{title:"ISPMT",call:"ISPMT(0.1/12, 6, 2*12, 100000)",result:-625,definition:{en:"Calculate the interest paid during a specific period of a loan.",cn:"\u8BA1\u7B97\u7279\u5B9A\u671F\u95F4\u5185\u7684\u5229\u606F\u652F\u4ED8\uFF08\u9002\u7528\u4E8E\u8D37\u6B3E\uFF09\u3002",ja:"\u30ED\u30FC\u30F3\u306E\u7279\u5B9A\u671F\u9593\u306E\u5229\u606F\u652F\u6255\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"rate, per, nper, pv",cn:"\u6BCF\u671F\u5229\u7387\uFF0C\u671F\u95F4\uFF0C\u603B\u671F\u6570\uFF0C\u8D37\u6B3E\u91D1\u989D\u3002",ja:"\u5404\u671F\u5229\u7387\u3001\u671F\u9593\u3001\u7DCF\u671F\u9593\u3001\u30ED\u30FC\u30F3\u984D"}},{title:"MIRR",call:"MIRR([-75000,12000,15000,18000,21000,24000], 0.1, 0.12)",result:.07971710360838036,definition:{en:"Calculate the modified internal rate of return for a series of periodic cash flows.",cn:"\u8BA1\u7B97\u4FEE\u6B63\u5185\u90E8\u6536\u76CA\u7387\u3002",ja:"\u4E00\u9023\u306E\u5B9A\u671F\u7684\u306A\u30AD\u30E3\u30C3\u30B7\u30E5\u30D5\u30ED\u30FC\u306E\u4FEE\u6B63\u5185\u90E8\u53CE\u76CA\u7387\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"values, finance_rate, reinvest_rate",cn:"\u73B0\u91D1\u6D41\u6570\u7EC4\uFF0C\u878D\u8D44\u5229\u7387\uFF0C\u518D\u6295\u8D44\u5229\u7387\u3002",ja:"\u30AD\u30E3\u30C3\u30B7\u30E5\u30D5\u30ED\u30FC\u914D\u5217\u3001\u8CA1\u52D9\u5229\u7387\u3001\u518D\u6295\u8CC7\u5229\u7387"}},{title:"NOMINAL",call:"NOMINAL(0.1, 4)",result:.09645475633778045,definition:{en:"Calculate the nominal annual interest rate.",cn:"\u8BA1\u7B97\u540D\u4E49\u5E74\u5229\u7387\u3002",ja:"\u540D\u76EE\u306E\u5E74\u9593\u5229\u7387\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"effect_rate, npery",cn:"\u5B9E\u9645\u5E74\u5229\u7387\uFF0C\u6BCF\u5E74\u590D\u5229\u6B21\u6570\u3002",ja:"\u5B9F\u969B\u306E\u5E74\u9593\u5229\u7387\u3001\u5E74\u8907\u5229\u56DE\u6570"}},{title:"NPER",call:"NPER(0.1/12, -100, -1000, 10000, 0)",result:63.39385422740764,definition:{en:"Calculate the number of periods for an investment based on periodic, constant payments and a constant interest rate.",cn:"\u8BA1\u7B97\u8FBE\u5230\u76EE\u6807\u503C\u6240\u9700\u7684\u671F\u6570\u3002",ja:"\u4E00\u5B9A\u306E\u5229\u7387\u3068\u5B9A\u671F\u7684\u306A\u5B9A\u984D\u8FD4\u6E08\u306B\u57FA\u3065\u304F\u6295\u8CC7\u306E\u671F\u9593\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"rate, pmt, pv, fv, type",cn:"\u6BCF\u671F\u5229\u7387\uFF0C\u6BCF\u671F\u652F\u4ED8\u989D\uFF0C\u73B0\u503C\uFF0C\u672A\u6765\u503C\uFF0C\u652F\u4ED8\u7C7B\u578B\uFF080=\u671F\u672B\uFF0C1=\u671F\u521D\uFF09\u3002",ja:"\u5404\u671F\u5229\u7387\u3001\u5404\u671F\u652F\u6255\u984D\u3001\u73FE\u5728\u4FA1\u5024\u3001\u5C06\u6765\u4FA1\u5024\u3001\u30BF\u30A4\u30D7\uFF080=\u671F\u672B\u30011=\u671F\u521D\uFF09"}},{title:"NPV",call:"NPV(0.1, -10000, 2000, 4000, 8000)",result:1031.3503176012546,definition:{en:"Calculate the net present value of an investment based on a series of future cash flows and a discount rate for each period.",cn:"\u8BA1\u7B97\u4E00\u7CFB\u5217\u672A\u6765\u73B0\u91D1\u6D41\u7684\u51C0\u73B0\u503C\u3002",ja:"\u5404\u671F\u9593\u306E\u5272\u5F15\u7387\u306B\u57FA\u3065\u304F\u4E00\u9023\u306E\u5C06\u6765\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u30D5\u30ED\u30FC\u306B\u3088\u308B\u6295\u8CC7\u306E\u7D14\u73FE\u5728\u4FA1\u5024\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"rate, value1, value2, ...",cn:"\u6BCF\u671F\u6298\u73B0\u7387\uFF0C\u73B0\u91D1\u6D41\u6570\u7EC4\u3002",ja:"\u5404\u671F\u5272\u5F15\u7387\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u30D5\u30ED\u30FC\u914D\u5217"}},{title:"PDURATION",call:"PDURATION(0.1, 1000, 2000)",result:7.272540897341714,definition:{en:"Calculate the number of periods required for an investment to reach a specified value.",cn:"\u8BA1\u7B97\u8FBE\u5230\u7279\u5B9A\u503C\u6240\u9700\u7684\u65F6\u95F4\u3002",ja:"\u6295\u8CC7\u304C\u6307\u5B9A\u3055\u308C\u305F\u4FA1\u5024\u306B\u5230\u9054\u3059\u308B\u306E\u306B\u5FC5\u8981\u306A\u671F\u9593\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"rate, pv, fv",cn:"\u6BCF\u671F\u5229\u7387\uFF0C\u73B0\u503C\uFF0C\u672A\u6765\u503C\u3002",ja:"\u5404\u671F\u5229\u7387\u3001\u73FE\u5728\u4FA1\u5024\u3001\u5C06\u6765\u4FA1\u5024"}},{title:"PMT",call:"PMT(0.1/12, 2*12, 1000, 10000, 0)",result:-42426.08563793503,definition:{en:"Calculate the payment for a loan based on constant payments and a constant interest rate.",cn:"\u8BA1\u7B97\u8D37\u6B3E\u7684\u6BCF\u671F\u652F\u4ED8\u989D\u3002",ja:"\u4E00\u5B9A\u306E\u5229\u7387\u3068\u5B9A\u984D\u8FD4\u6E08\u306B\u57FA\u3065\u304F\u30ED\u30FC\u30F3\u306E\u5404\u671F\u652F\u6255\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"rate, nper, pv, fv, type",cn:"\u6BCF\u671F\u5229\u7387\uFF0C\u603B\u671F\u6570\uFF0C\u73B0\u503C\uFF0C\u672A\u6765\u503C\uFF0C\u652F\u4ED8\u7C7B\u578B\uFF080=\u671F\u672B\uFF0C1=\u671F\u521D\uFF09\u3002",ja:"\u5404\u671F\u5229\u7387\u3001\u7DCF\u671F\u9593\u3001\u73FE\u5728\u4FA1\u5024\u3001\u5C06\u6765\u4FA1\u5024\u3001\u30BF\u30A4\u30D7\uFF080=\u671F\u672B\u30011=\u671F\u521D\uFF09"}},{title:"PPMT",call:"PPMT(0.1/12, 6, 2*12, 100000, 1000000, 0)",result:-43354.909209775076,definition:{en:"Calculate the principal payment for a given period for an investment based on periodic, constant payments and a constant interest rate.",cn:"\u8BA1\u7B97\u7279\u5B9A\u671F\u95F4\u5185\u7684\u672C\u91D1\u652F\u4ED8\u3002",ja:"\u4E00\u5B9A\u306E\u5229\u7387\u3068\u5B9A\u671F\u7684\u306A\u5B9A\u984D\u8FD4\u6E08\u306B\u57FA\u3065\u304F\u6295\u8CC7\u306E\u7279\u5B9A\u671F\u9593\u306E\u5143\u672C\u652F\u6255\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"rate, per, nper, pv, fv, type",cn:"\u6BCF\u671F\u5229\u7387\uFF0C\u671F\u95F4\uFF0C\u603B\u671F\u6570\uFF0C\u73B0\u503C\uFF0C\u672A\u6765\u503C\uFF0C\u652F\u4ED8\u7C7B\u578B\uFF080=\u671F\u672B\uFF0C1=\u671F\u521D\uFF09\u3002",ja:"\u5404\u671F\u5229\u7387\u3001\u671F\u9593\u3001\u7DCF\u671F\u9593\u3001\u73FE\u5728\u4FA1\u5024\u3001\u5C06\u6765\u4FA1\u5024\u3001\u30BF\u30A4\u30D7\uFF080=\u671F\u672B\u30011=\u671F\u521D\uFF09"}},{title:"PV",call:"PV(0.1/12, 2*12, 1000, 10000, 0)",result:-29864.950264779152,definition:{en:"Calculate the present value of an investment.",cn:"\u8BA1\u7B97\u6295\u8D44\u7684\u73B0\u503C\u3002",ja:"\u6295\u8CC7\u306E\u73FE\u5728\u4FA1\u5024\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"rate, nper, pmt, fv, type",cn:"\u6BCF\u671F\u5229\u7387\uFF0C\u671F\u6570\uFF0C\u6BCF\u671F\u652F\u4ED8\u989D\uFF0C\u672A\u6765\u503C\uFF0C\u652F\u4ED8\u7C7B\u578B\uFF080=\u671F\u672B\uFF0C1=\u671F\u521D\uFF09\u3002",ja:"\u5404\u671F\u5229\u7387\u3001\u671F\u9593\u6570\u3001\u5404\u671F\u652F\u6255\u984D\u3001\u5C06\u6765\u4FA1\u5024\u3001\u30BF\u30A4\u30D7\uFF080=\u671F\u672B\u30011=\u671F\u521D\uFF09"}},{title:"RATE",call:"RATE(2*12, -1000, -10000, 100000, 0, 0.1)",result:.06517891177181533,definition:{en:"Calculate the interest rate per period of an annuity.",cn:"\u8BA1\u7B97\u6BCF\u671F\u5229\u7387\u3002",ja:"\u5E74\u91D1\u306E\u5404\u671F\u5229\u7387\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"nper, pmt, pv, fv, type, guess",cn:"\u603B\u671F\u6570\uFF0C\u6BCF\u671F\u652F\u4ED8\u989D\uFF0C\u73B0\u503C\uFF0C\u672A\u6765\u503C\uFF0C\u652F\u4ED8\u7C7B\u578B\uFF080=\u671F\u672B\uFF0C1=\u671F\u521D\uFF09\uFF0C\u4F30\u8BA1\u503C\u3002",ja:"\u7DCF\u671F\u9593\u3001\u5404\u671F\u652F\u6255\u984D\u3001\u73FE\u5728\u4FA1\u5024\u3001\u5C06\u6765\u4FA1\u5024\u3001\u30BF\u30A4\u30D7\uFF080=\u671F\u672B\u30011=\u671F\u521D\uFF09\u3001\u63A8\u5B9A\u5024"}}]},{category:"ENGINEERING",functions:[{title:"BIN2DEC",call:"BIN2DEC(101010)",result:42,definition:{en:"Convert a binary number to decimal.",cn:"\u5C06\u4E8C\u8FDB\u5236\u6570\u8F6C\u6362\u4E3A\u5341\u8FDB\u5236\u6570\u3002",ja:"2\u9032\u6570\u309210\u9032\u6570\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"binary_number",cn:"\u4E8C\u8FDB\u5236\u6570\u503C\u3002",ja:"2\u9032\u6570\u5024"}},{title:"BIN2HEX",call:"BIN2HEX(101010)",result:"2a",definition:{en:"Convert a binary number to hexadecimal.",cn:"\u5C06\u4E8C\u8FDB\u5236\u6570\u8F6C\u6362\u4E3A\u5341\u516D\u8FDB\u5236\u6570\u3002",ja:"2\u9032\u6570\u309216\u9032\u6570\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"binary_number",cn:"\u4E8C\u8FDB\u5236\u6570\u503C\u3002",ja:"2\u9032\u6570\u5024"}},{title:"BIN2OCT",call:"BIN2OCT(101010)",result:"52",definition:{en:"Convert a binary number to octal.",cn:"\u5C06\u4E8C\u8FDB\u5236\u6570\u8F6C\u6362\u4E3A\u516B\u8FDB\u5236\u6570\u3002",ja:"2\u9032\u6570\u30928\u9032\u6570\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"binary_number",cn:"\u4E8C\u8FDB\u5236\u6570\u503C\u3002",ja:"2\u9032\u6570\u5024"}},{title:"BITAND",call:"BITAND(42, 24)",result:8,definition:{en:"Perform a bitwise AND operation on two numbers.",cn:"\u6267\u884C\u4E24\u4E2A\u6570\u5B57\u7684\u6309\u4F4D\u4E0E\u8FD0\u7B97\u3002",ja:"2\u3064\u306E\u6570\u5024\u306B\u5BFE\u3057\u3066\u30D3\u30C3\u30C8\u3054\u3068\u306EAND\u6F14\u7B97\u3092\u884C\u3044\u307E\u3059\u3002"},parameterDefinitions:{en:"integer, integer",cn:"\u6574\u6570\uFF0C\u6574\u6570\u3002",ja:"\u6574\u6570\u3001\u6574\u6570"}},{title:"BITLSHIFT",call:"BITLSHIFT(42, 24)",result:704643072,definition:{en:"Shift a number left by the specified amount of bits.",cn:"\u5BF9\u6570\u5B57\u8FDB\u884C\u5DE6\u79FB\u4F4D\u64CD\u4F5C\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u6570\u3060\u3051\u6570\u5024\u3092\u5DE6\u30B7\u30D5\u30C8\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"integer, shift_amount",cn:"\u6574\u6570\uFF0C\u79FB\u4F4D\u91CF\u3002",ja:"\u6574\u6570\u3001\u30B7\u30D5\u30C8\u91CF"}},{title:"BITOR",call:"BITOR(42, 24)",result:58,definition:{en:"Perform a bitwise OR operation on two numbers.",cn:"\u6267\u884C\u4E24\u4E2A\u6570\u5B57\u7684\u6309\u4F4D\u6216\u8FD0\u7B97\u3002",ja:"2\u3064\u306E\u6570\u5024\u306B\u5BFE\u3057\u3066\u30D3\u30C3\u30C8\u3054\u3068\u306EOR\u6F14\u7B97\u3092\u884C\u3044\u307E\u3059\u3002"},parameterDefinitions:{en:"integer, integer",cn:"\u6574\u6570\uFF0C\u6574\u6570\u3002",ja:"\u6574\u6570\u3001\u6574\u6570"}},{title:"BITRSHIFT",call:"BITRSHIFT(42, 2)",result:10,definition:{en:"Shift a number right by the specified amount of bits.",cn:"\u5BF9\u6570\u5B57\u8FDB\u884C\u53F3\u79FB\u4F4D\u64CD\u4F5C\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u30D3\u30C3\u30C8\u6570\u3060\u3051\u6570\u5024\u3092\u53F3\u30B7\u30D5\u30C8\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"integer, shift_amount",cn:"\u6574\u6570\uFF0C\u79FB\u4F4D\u91CF\u3002",ja:"\u6574\u6570\u3001\u30B7\u30D5\u30C8\u91CF"}},{title:"BITXOR",call:"BITXOR(42, 24)",result:50,definition:{en:"Perform a bitwise XOR operation on two numbers.",cn:"\u6267\u884C\u4E24\u4E2A\u6570\u5B57\u7684\u6309\u4F4D\u5F02\u6216\u8FD0\u7B97\u3002",ja:"2\u3064\u306E\u6570\u5024\u306B\u5BFE\u3057\u3066\u30D3\u30C3\u30C8\u3054\u3068\u306EXOR\u6F14\u7B97\u3092\u884C\u3044\u307E\u3059\u3002"},parameterDefinitions:{en:"integer, integer",cn:"\u6574\u6570\uFF0C\u6574\u6570\u3002",ja:"\u6574\u6570\u3001\u6574\u6570"}},{title:"COMPLEX",call:"COMPLEX(3, 4)",result:"3+4i",definition:{en:"Create a complex number.",cn:"\u521B\u5EFA\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"real_part, imaginary_part",cn:"\u5B9E\u90E8\uFF0C\u865A\u90E8\u3002",ja:"\u5B9F\u6570\u90E8\u3001\u865A\u6570\u90E8"}},{title:"CONVERT",call:"CONVERT(64, 'kibyte', 'bit')",result:524288,definition:{en:"Convert a value from one measurement system to another.",cn:"\u5728\u4E0D\u540C\u5355\u4F4D\u4E4B\u95F4\u8F6C\u6362\u6570\u503C\u3002",ja:"\u7570\u306A\u308B\u5358\u4F4D\u7CFB\u9593\u3067\u5024\u3092\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"value, from_unit, to_unit",cn:"\u6570\u503C\uFF0C\u539F\u59CB\u5355\u4F4D\uFF0C\u76EE\u6807\u5355\u4F4D\u3002",ja:"\u5024\u3001\u5143\u306E\u5358\u4F4D\u3001\u76EE\u6A19\u5358\u4F4D"}},{title:"DEC2BIN",call:"DEC2BIN(42)",result:"101010",definition:{en:"Convert a decimal number to binary.",cn:"\u5C06\u5341\u8FDB\u5236\u6570\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u6570\u3002",ja:"10\u9032\u6570\u30922\u9032\u6570\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"decimal_number",cn:"\u5341\u8FDB\u5236\u6570\u503C\u3002",ja:"10\u9032\u6570\u5024"}},{title:"DEC2HEX",call:"DEC2HEX(42)",result:"2a",definition:{en:"Convert a decimal number to hexadecimal.",cn:"\u5C06\u5341\u8FDB\u5236\u6570\u8F6C\u6362\u4E3A\u5341\u516D\u8FDB\u5236\u6570\u3002",ja:"10\u9032\u6570\u309216\u9032\u6570\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"decimal_number",cn:"\u5341\u8FDB\u5236\u6570\u503C\u3002",ja:"10\u9032\u6570\u5024"}},{title:"DEC2OCT",call:"DEC2OCT(42)",result:"52",definition:{en:"Convert a decimal number to octal.",cn:"\u5C06\u5341\u8FDB\u5236\u6570\u8F6C\u6362\u4E3A\u516B\u8FDB\u5236\u6570\u3002",ja:"10\u9032\u6570\u30928\u9032\u6570\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"decimal_number",cn:"\u5341\u8FDB\u5236\u6570\u503C\u3002",ja:"10\u9032\u6570\u5024"}},{title:"DELTA",call:"DELTA(42, 42)",result:1,definition:{en:"Test whether two values are equal.",cn:"\u6D4B\u8BD5\u4E24\u4E2A\u503C\u662F\u5426\u76F8\u7B49\u3002",ja:"2\u3064\u306E\u5024\u304C\u7B49\u3057\u3044\u304B\u3069\u3046\u304B\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"value, value",cn:"\u6570\u503C\uFF0C\u6570\u503C\u3002",ja:"\u5024\u3001\u5024"}},{title:"ERF",call:"ERF(1)",result:.8427007929497149,definition:{en:"Calculate the error function.",cn:"\u8BA1\u7B97\u8BEF\u5DEE\u51FD\u6570\u3002",ja:"\u8AA4\u5DEE\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"upper_limit",cn:"\u4E0A\u9650\u3002",ja:"\u4E0A\u9650"}},{title:"ERFC",call:"ERFC(1)",result:.1572992070502851,definition:{en:"Calculate the complementary error function.",cn:"\u8BA1\u7B97\u4E92\u8865\u8BEF\u5DEE\u51FD\u6570\u3002",ja:"\u76F8\u88DC\u8AA4\u5DEE\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"lower_limit",cn:"\u4E0B\u9650\u3002",ja:"\u4E0B\u9650"}},{title:"GESTEP",call:"GESTEP(42, 24)",result:1,definition:{en:"Test if one number is greater than or equal to another.",cn:"\u6D4B\u8BD5\u4E00\u4E2A\u6570\u662F\u5426\u5927\u4E8E\u6216\u7B49\u4E8E\u53E6\u4E00\u4E2A\u6570\u3002",ja:"1\u3064\u306E\u6570\u5024\u304C\u5225\u306E\u6570\u5024\u4EE5\u4E0A\u304B\u3069\u3046\u304B\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"value, threshold",cn:"\u6570\u503C\uFF0C\u9608\u503C\u3002",ja:"\u5024\u3001\u95BE\u5024"}},{title:"HEX2BIN",call:"HEX2BIN('2a')",result:"101010",definition:{en:"Convert a hexadecimal number to binary.",cn:"\u5C06\u5341\u516D\u8FDB\u5236\u6570\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u6570\u3002",ja:"16\u9032\u6570\u30922\u9032\u6570\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"hexadecimal_number",cn:"\u5341\u516D\u8FDB\u5236\u6570\u503C\u3002",ja:"16\u9032\u6570\u5024"}},{title:"HEX2DEC",call:"HEX2DEC('2a')",result:42,definition:{en:"Convert a hexadecimal number to decimal.",cn:"\u5C06\u5341\u516D\u8FDB\u5236\u6570\u8F6C\u6362\u4E3A\u5341\u8FDB\u5236\u6570\u3002",ja:"16\u9032\u6570\u309210\u9032\u6570\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"hexadecimal_number",cn:"\u5341\u516D\u8FDB\u5236\u6570\u503C\u3002",ja:"16\u9032\u6570\u5024"}},{title:"HEX2OCT",call:"HEX2OCT('2a')",result:"52",definition:{en:"Convert a hexadecimal number to octal.",cn:"\u5C06\u5341\u516D\u8FDB\u5236\u6570\u8F6C\u6362\u4E3A\u516B\u8FDB\u5236\u6570\u3002",ja:"16\u9032\u6570\u30928\u9032\u6570\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"hexadecimal_number",cn:"\u5341\u516D\u8FDB\u5236\u6570\u503C\u3002",ja:"16\u9032\u6570\u5024"}},{title:"IMABS",call:"IMABS('3+4i')",result:5,definition:{en:"Calculate the absolute value (modulus) of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u7EDD\u5BF9\u503C\uFF08\u6A21\uFF09\u3002",ja:"\u8907\u7D20\u6570\u306E\u7D76\u5BFE\u5024\uFF08\u30E2\u30B8\u30E5\u30E9\u30B9\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMAGINARY",call:"IMAGINARY('3+4i')",result:4,definition:{en:"Return the imaginary part of a complex number.",cn:"\u8FD4\u56DE\u590D\u6570\u7684\u865A\u90E8\u3002",ja:"\u8907\u7D20\u6570\u306E\u865A\u6570\u90E8\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMARGUMENT",call:"IMARGUMENT('3+4i')",result:.9272952180016122,definition:{en:"Calculate the argument of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u5E45\u89D2\u3002",ja:"\u8907\u7D20\u6570\u306E\u504F\u89D2\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMCONJUGATE",call:"IMCONJUGATE('3+4i')",result:"3-4i",definition:{en:"Calculate the conjugate of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u5171\u8F6D\u3002",ja:"\u8907\u7D20\u6570\u306E\u5171\u5F79\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMCOS",call:"IMCOS('1+i')",result:"0.8337300251311491-0.9888977057628651i",definition:{en:"Calculate the cosine of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u4F59\u5F26\u3002",ja:"\u8907\u7D20\u6570\u306E\u4F59\u5F26\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMCOSH",call:"IMCOSH('1+i')",result:"0.8337300251311491+0.9888977057628651i",definition:{en:"Calculate the hyperbolic cosine of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u53CC\u66F2\u4F59\u5F26\u3002",ja:"\u8907\u7D20\u6570\u306E\u53CC\u66F2\u7DDA\u4F59\u5F26\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMCOT",call:"IMCOT('1+i')",result:"0.21762156185440265-0.8680141428959249i",definition:{en:"Calculate the cotangent of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u4F59\u5207\u3002",ja:"\u8907\u7D20\u6570\u306E\u4F59\u63A5\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMCSC",call:"IMCSC('1+i')",result:"0.6215180171704283-0.3039310016284264i",definition:{en:"Calculate the cosecant of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u4F59\u5272\u3002",ja:"\u8907\u7D20\u6570\u306E\u4F59\u5272\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMCSCH",call:"IMCSCH('1+i')",result:"0.3039310016284264-0.6215180171704283i",definition:{en:"Calculate the hyperbolic cosecant of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u53CC\u66F2\u4F59\u5272\u3002",ja:"\u8907\u7D20\u6570\u306E\u53CC\u66F2\u7DDA\u4F59\u5272\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMDIV",call:"IMDIV('1+2i', '3+4i')",result:"0.44+0.08i",definition:{en:"Calculate the division of two complex numbers.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u590D\u6570\u7684\u9664\u6CD5\u3002",ja:"2\u3064\u306E\u8907\u7D20\u6570\u306E\u9664\u7B97\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"dividend, divisor",cn:"\u88AB\u9664\u590D\u6570\uFF0C\u9664\u590D\u6570\u3002",ja:"\u88AB\u9664\u6570\u3001\u9664\u6570"}},{title:"IMEXP",call:"IMEXP('1+i')",result:"1.4686939399158851+2.2873552871788423i",definition:{en:"Calculate the exponential of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u6307\u6570\u3002",ja:"\u8907\u7D20\u6570\u306E\u6307\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMLN",call:"IMLN('1+i')",result:"0.3465735902799727+0.7853981633974483i",definition:{en:"Calculate the natural logarithm of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u81EA\u7136\u5BF9\u6570\u3002",ja:"\u8907\u7D20\u6570\u306E\u81EA\u7136\u5BFE\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMLOG10",call:"IMLOG10('1+i')",result:"0.1505149978319906+0.3410940884604603i",definition:{en:"Calculate the base-10 logarithm of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u4EE510\u4E3A\u5E95\u7684\u5BF9\u6570\u3002",ja:"\u8907\u7D20\u6570\u306E\u5E38\u7528\u5BFE\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMLOG2",call:"IMLOG2('1+i')",result:"0.5000000000000001+1.1330900354567985i",definition:{en:"Calculate the base-2 logarithm of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u4EE52\u4E3A\u5E95\u7684\u5BF9\u6570\u3002",ja:"\u8907\u7D20\u6570\u306E2\u9032\u5BFE\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMPOWER",call:"IMPOWER('1+i', 2)",result:"1.2246063538223775e-16+2.0000000000000004i",definition:{en:"Calculate the power of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u5E42\u3002",ja:"\u8907\u7D20\u6570\u306E\u51AA\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number, power",cn:"\u590D\u6570\uFF0C\u5E42\u6B21\u3002",ja:"\u8907\u7D20\u6570\u3001\u51AA"}},{title:"IMPRODUCT",call:"IMPRODUCT('1+2i', '3+4i', '5+6i')",result:"-85+20i",definition:{en:"Calculate the product of multiple complex numbers.",cn:"\u8BA1\u7B97\u591A\u4E2A\u590D\u6570\u7684\u4E58\u79EF\u3002",ja:"\u8907\u6570\u306E\u8907\u7D20\u6570\u306E\u7A4D\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array_of_complex_numbers",cn:"\u590D\u6570\u6570\u7EC4\u3002",ja:"\u8907\u7D20\u6570\u914D\u5217"}},{title:"IMREAL",call:"IMREAL('3+4i')",result:3,definition:{en:"Return the real part of a complex number.",cn:"\u8FD4\u56DE\u590D\u6570\u7684\u5B9E\u90E8\u3002",ja:"\u8907\u7D20\u6570\u306E\u5B9F\u6570\u90E8\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMSEC",call:"IMSEC('1+i')",result:"0.4983370305551868+0.591083841721045i",definition:{en:"Calculate the secant of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u6B63\u5272\u3002",ja:"\u8907\u7D20\u6570\u306E\u6B63\u5272\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMSECH",call:"IMSECH('1+i')",result:"0.4983370305551868-0.591083841721045i",definition:{en:"Calculate the hyperbolic secant of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u53CC\u66F2\u6B63\u5272\u3002",ja:"\u8907\u7D20\u6570\u306E\u53CC\u66F2\u7DDA\u6B63\u5272\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMSIN",call:"IMSIN('1+i')",result:"1.2984575814159773+0.6349639147847361i",definition:{en:"Calculate the sine of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u6B63\u5F26\u3002",ja:"\u8907\u7D20\u6570\u306E\u6B63\u5F26\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMSINH",call:"IMSINH('1+i')",result:"0.6349639147847361+1.2984575814159773i",definition:{en:"Calculate the hyperbolic sine of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u53CC\u66F2\u6B63\u5F26\u3002",ja:"\u8907\u7D20\u6570\u306E\u53CC\u66F2\u7DDA\u6B63\u5F26\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMSQRT",call:"IMSQRT('1+i')",result:"1.0986841134678098+0.45508986056222733i",definition:{en:"Calculate the square root of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u5E73\u65B9\u6839\u3002",ja:"\u8907\u7D20\u6570\u306E\u5E73\u65B9\u6839\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"IMSUB",call:"IMSUB('3+4i', '1+2i')",result:"2+2i",definition:{en:"Calculate the subtraction of two complex numbers.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u590D\u6570\u7684\u51CF\u6CD5\u3002",ja:"2\u3064\u306E\u8907\u7D20\u6570\u306E\u6E1B\u7B97\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"minuend, subtrahend",cn:"\u88AB\u51CF\u590D\u6570\uFF0C\u51CF\u590D\u6570\u3002",ja:"\u88AB\u6E1B\u6570\u3001\u6E1B\u6570"}},{title:"IMSUM",call:"IMSUM('1+2i', '3+4i', '5+6i')",result:"9+12i",definition:{en:"Calculate the sum of multiple complex numbers.",cn:"\u8BA1\u7B97\u591A\u4E2A\u590D\u6570\u7684\u548C\u3002",ja:"\u8907\u6570\u306E\u8907\u7D20\u6570\u306E\u548C\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array_of_complex_numbers",cn:"\u590D\u6570\u6570\u7EC4\u3002",ja:"\u8907\u7D20\u6570\u914D\u5217"}},{title:"IMTAN",call:"IMTAN('1+i')",result:"0.2717525853195117+1.0839233273386946i",definition:{en:"Calculate the tangent of a complex number.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u6B63\u5207\u3002",ja:"\u8907\u7D20\u6570\u306E\u6B63\u63A5\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"complex_number",cn:"\u590D\u6570\u3002",ja:"\u8907\u7D20\u6570"}},{title:"OCT2BIN",call:"OCT2BIN('52')",result:"101010",definition:{en:"Convert an octal number to binary.",cn:"\u5C06\u516B\u8FDB\u5236\u6570\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u6570\u3002",ja:"8\u9032\u6570\u30922\u9032\u6570\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"octal_number",cn:"\u516B\u8FDB\u5236\u6570\u503C\u3002",ja:"8\u9032\u6570\u5024"}},{title:"OCT2DEC",call:"OCT2DEC('52')",result:42,definition:{en:"Convert an octal number to decimal.",cn:"\u5C06\u516B\u8FDB\u5236\u6570\u8F6C\u6362\u4E3A\u5341\u8FDB\u5236\u6570\u3002",ja:"8\u9032\u6570\u309210\u9032\u6570\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"octal_number",cn:"\u516B\u8FDB\u5236\u6570\u503C\u3002",ja:"8\u9032\u6570\u5024"}},{title:"OCT2HEX",call:"OCT2HEX('52')",result:"2a",definition:{en:"Convert an octal number to hexadecimal.",cn:"\u5C06\u516B\u8FDB\u5236\u6570\u8F6C\u6362\u4E3A\u5341\u516D\u8FDB\u5236\u6570\u3002",ja:"8\u9032\u6570\u309216\u9032\u6570\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"octal_number",cn:"\u516B\u8FDB\u5236\u6570\u503C\u3002",ja:"8\u9032\u6570\u5024"}}]},{category:"LOGICAL",functions:[{title:"AND",call:"AND(true, false, true)",result:!1,definition:{en:"Returns true if all arguments are true, otherwise returns false.",cn:"\u5F53\u6240\u6709\u53C2\u6570\u90FD\u4E3A\u771F\u65F6\u8FD4\u56DE\u771F\uFF0C\u5426\u5219\u8FD4\u56DE\u5047\u3002",ja:"\u3059\u3079\u3066\u306E\u5F15\u6570\u304C\u771F\u3067\u3042\u308B\u5834\u5408\u306B\u306E\u307F\u771F\u3092\u8FD4\u3057\u3001\u305D\u308C\u4EE5\u5916\u306F\u507D\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"One or more logical values (boolean). The function returns true only if all arguments are true.",cn:"\u53C2\u6570\u662F\u4E00\u4E2A\u6216\u591A\u4E2A\u903B\u8F91\u503C\uFF08\u5E03\u5C14\u503C\uFF09\uFF0C\u53EA\u6709\u6240\u6709\u53C2\u6570\u5747\u4E3A\u771F\u65F6\u51FD\u6570\u624D\u8FD4\u56DE\u771F\u3002",ja:"1\u3064\u4EE5\u4E0A\u306E\u8AD6\u7406\u5024\uFF08\u30D6\u30FC\u30EB\u5024\uFF09\u3002\u3059\u3079\u3066\u306E\u5F15\u6570\u304C\u771F\u3067\u3042\u308B\u5834\u5408\u306B\u306E\u307F\u95A2\u6570\u306F\u771F\u3092\u8FD4\u3057\u307E\u3059\u3002"}},{title:"FALSE",call:"FALSE()",result:!1,definition:{en:"Returns the logical value false.",cn:"\u8FD4\u56DE\u903B\u8F91\u503C\u5047\u3002",ja:"\u8AD6\u7406\u5024\u507D\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"No parameters.",cn:"\u65E0\u53C2\u6570\u3002",ja:"\u30D1\u30E9\u30E1\u30FC\u30BF\u306A\u3057\u3002"}},{title:"IF",call:"IF(true, 'Hello!', 'Goodbye!')",result:"Hello!",definition:{en:"Returns one value if a condition is true and another value if it is false.",cn:"\u6839\u636E\u6761\u4EF6\u7684\u771F\u5047\u8FD4\u56DE\u4E0D\u540C\u7684\u503C\u3002",ja:"\u6761\u4EF6\u304C\u771F\u306E\u5834\u5408\u3068\u507D\u306E\u5834\u5408\u3067\u7570\u306A\u308B\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Condition, value if true, value if false.",cn:"\u6761\u4EF6\uFF0C\u6761\u4EF6\u4E3A\u771F\u65F6\u7684\u503C\uFF0C\u6761\u4EF6\u4E3A\u5047\u65F6\u7684\u503C\u3002",ja:"\u6761\u4EF6\u3001\u6761\u4EF6\u304C\u771F\u306E\u3068\u304D\u306E\u5024\u3001\u6761\u4EF6\u304C\u507D\u306E\u3068\u304D\u306E\u5024\u3002"}},{title:"IFS",call:"IFS(false, 'Hello!', true, 'Goodbye!')",result:"Goodbye!",definition:{en:"Checks multiple conditions and returns the value of the first true condition.",cn:"\u68C0\u67E5\u591A\u4E2A\u6761\u4EF6\uFF0C\u5E76\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u4E3A\u771F\u7684\u7ED3\u679C\u503C\u3002",ja:"\u8907\u6570\u306E\u6761\u4EF6\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3001\u6700\u521D\u306E\u771F\u306E\u6761\u4EF6\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Multiple pairs of conditions and corresponding values, in pairs.",cn:"\u591A\u5BF9\u6761\u4EF6\u548C\u5BF9\u5E94\u7684\u503C\uFF0C\u6210\u5BF9\u51FA\u73B0\u3002",ja:"\u8907\u6570\u306E\u6761\u4EF6\u3068\u5BFE\u5FDC\u3059\u308B\u5024\u306E\u30DA\u30A2\u3001\u30DA\u30A2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002"}},{title:"NOT",call:"NOT(true)",result:!1,definition:{en:"Reverses the logic of its argument, true becomes false, and false becomes true.",cn:"\u53CD\u8F6C\u903B\u8F91\u503C\uFF0C\u771F\u53D8\u5047\uFF0C\u5047\u53D8\u771F\u3002",ja:"\u5F15\u6570\u306E\u8AD6\u7406\u5024\u3092\u53CD\u8EE2\u3055\u305B\u307E\u3059\u3002\u771F\u306F\u507D\u306B\u306A\u308A\u3001\u507D\u306F\u771F\u306B\u306A\u308A\u307E\u3059\u3002"},parameterDefinitions:{en:"A single logical value (boolean).",cn:"\u4E00\u4E2A\u903B\u8F91\u503C\uFF08\u5E03\u5C14\u503C\uFF09\u3002",ja:"\u5358\u4E00\u306E\u8AD6\u7406\u5024\uFF08\u30D6\u30FC\u30EB\u5024\uFF09\u3002"}},{title:"OR",call:"OR(true, false, true)",result:!0,definition:{en:"Returns true if any argument is true, otherwise returns false.",cn:"\u5F53\u4EFB\u4E00\u53C2\u6570\u4E3A\u771F\u65F6\u8FD4\u56DE\u771F\uFF0C\u5426\u5219\u8FD4\u56DE\u5047\u3002",ja:"\u4EFB\u610F\u306E\u5F15\u6570\u304C\u771F\u3067\u3042\u308C\u3070\u771F\u3092\u8FD4\u3057\u3001\u305D\u308C\u4EE5\u5916\u306F\u507D\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"One or more logical values (boolean), returns true if at least one argument is true.",cn:"\u53C2\u6570\u662F\u4E00\u4E2A\u6216\u591A\u4E2A\u903B\u8F91\u503C\uFF08\u5E03\u5C14\u503C\uFF09\uFF0C\u53EA\u8981\u6709\u4E00\u4E2A\u53C2\u6570\u4E3A\u771F\u51FD\u6570\u5373\u8FD4\u56DE\u771F\u3002",ja:"1\u3064\u4EE5\u4E0A\u306E\u8AD6\u7406\u5024\uFF08\u30D6\u30FC\u30EB\u5024\uFF09\u3001\u5C11\u306A\u304F\u3068\u30821\u3064\u306E\u5F15\u6570\u304C\u771F\u3067\u3042\u308C\u3070\u771F\u3092\u8FD4\u3057\u307E\u3059\u3002"}},{title:"SWITCH",call:"SWITCH(7, 9, 'Nine', 7, 'Seven')",result:"Seven",definition:{en:"Evaluates an expression and returns a matching result; if no match is found, returns a default value.",cn:"\u6839\u636E\u8868\u8FBE\u5F0F\u7684\u503C\u8FD4\u56DE\u5339\u914D\u7684\u7ED3\u679C\u503C\uFF0C\u82E5\u65E0\u5339\u914D\u5219\u8FD4\u56DE\u9ED8\u8BA4\u503C\u3002",ja:"\u5F0F\u306E\u5024\u306B\u57FA\u3065\u3044\u3066\u4E00\u81F4\u3059\u308B\u7D50\u679C\u3092\u8FD4\u3057\u3001\u4E00\u81F4\u3057\u306A\u3044\u5834\u5408\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Expression, match value 1, result value 1, ..., [default value].",cn:"\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u503C1\uFF0C\u7ED3\u679C\u503C1\uFF0C...\uFF0C[\u9ED8\u8BA4\u503C]\u3002",ja:"\u5F0F\u3001\u4E00\u81F4\u50241\u3001\u7D50\u679C\u50241\u3001...\u3001[\u30C7\u30D5\u30A9\u30EB\u30C8\u5024]\u3002"}},{title:"TRUE",call:"TRUE()",result:!0,definition:{en:"Returns the logical value true.",cn:"\u8FD4\u56DE\u903B\u8F91\u503C\u771F\u3002",ja:"\u8AD6\u7406\u5024\u771F\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"No parameters.",cn:"\u65E0\u53C2\u6570\u3002",ja:"\u30D1\u30E9\u30E1\u30FC\u30BF\u306A\u3057\u3002"}},{title:"XOR",call:"XOR(true, false, true)",result:!1,definition:{en:"Returns true if an odd number of arguments are true, otherwise returns false.",cn:"\u5F53\u4E14\u4EC5\u5F53\u6709\u5947\u6570\u4E2A\u53C2\u6570\u4E3A\u771F\u65F6\u8FD4\u56DE\u771F\uFF0C\u5426\u5219\u8FD4\u56DE\u5047\u3002",ja:"\u5947\u6570\u500B\u306E\u5F15\u6570\u304C\u771F\u3067\u3042\u308B\u5834\u5408\u306B\u306E\u307F\u771F\u3092\u8FD4\u3057\u3001\u305D\u308C\u4EE5\u5916\u306F\u507D\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"One or more logical values (boolean), returns true if an odd number of arguments are true.",cn:"\u53C2\u6570\u662F\u4E00\u4E2A\u6216\u591A\u4E2A\u903B\u8F91\u503C\uFF08\u5E03\u5C14\u503C\uFF09\uFF0C\u6709\u5947\u6570\u4E2A\u53C2\u6570\u4E3A\u771F\u65F6\u8FD4\u56DE\u771F\u3002",ja:"1\u3064\u4EE5\u4E0A\u306E\u8AD6\u7406\u5024\uFF08\u30D6\u30FC\u30EB\u5024\uFF09\u3001\u5947\u6570\u500B\u306E\u5F15\u6570\u304C\u771F\u3067\u3042\u308C\u3070\u771F\u3092\u8FD4\u3057\u307E\u3059\u3002"}}]},{category:"MATH",functions:[{title:"ABS",call:"ABS(-4)",result:4,definition:{en:"Returns the absolute value of a number.",cn:"\u8FD4\u56DE\u6570\u503C\u7684\u7EDD\u5BF9\u503C\u3002",ja:"\u6570\u306E\u7D76\u5BFE\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Number.",cn:"\u6570\u503C\u3002",ja:"\u6570\u3002"}},{title:"ACOS",call:"ACOS(-0.5)",result:2.0943951023931957,definition:{en:"Calculates the arccosine (in radians).",cn:"\u8BA1\u7B97\u53CD\u4F59\u5F26\u503C\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u9006\u4F59\u5F26\uFF08\u30E9\u30B8\u30A2\u30F3\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"A number between -1 and 1.",cn:"\u4ECB\u4E8E-1\u548C1\u4E4B\u95F4\u7684\u6570\u503C\u3002",ja:"-1\u304B\u30891\u306E\u9593\u306E\u6570\u3002"}},{title:"ACOSH",call:"ACOSH(10)",result:2.993222846126381,definition:{en:"Calculates the inverse hyperbolic cosine.",cn:"\u8BA1\u7B97\u53CD\u53CC\u66F2\u4F59\u5F26\u503C\u3002",ja:"\u9006\u53CC\u66F2\u7DDA\u4F59\u5F26\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"A number greater than or equal to 1.",cn:"\u5927\u4E8E\u7B49\u4E8E1\u7684\u6570\u503C\u3002",ja:"1\u4EE5\u4E0A\u3067\u3042\u308B\u6570\u3002"}},{title:"ACOT",call:"ACOT(2)",result:.46364760900080615,definition:{en:"Calculates the arccotangent (in radians).",cn:"\u8BA1\u7B97\u53CD\u6B63\u5207\u503C\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u9006\u4F59\u63A5\uFF08\u30E9\u30B8\u30A2\u30F3\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Any number.",cn:"\u4EFB\u610F\u6570\u503C\u3002",ja:"\u4EFB\u610F\u306E\u6570\u3002"}},{title:"ACOTH",call:"ACOTH(6)",result:.16823611831060645,definition:{en:"Calculates the inverse hyperbolic cotangent.",cn:"\u8BA1\u7B97\u53CD\u53CC\u66F2\u6B63\u5207\u503C\u3002",ja:"\u9006\u53CC\u66F2\u7DDA\u4F59\u63A5\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"A number with an absolute value greater than 1.",cn:"\u7EDD\u5BF9\u503C\u5927\u4E8E1\u7684\u6570\u503C\u3002",ja:"\u7D76\u5BFE\u5024\u304C1\u4EE5\u4E0A\u306E\u6570\u3002"}},{title:"AGGREGATE",call:"AGGREGATE(9, 4, [-5,15], [32,'Hello World!'])",result:"10,32",definition:{en:"Performs aggregate operations, ignoring errors or hidden rows.",cn:"\u6267\u884C\u805A\u5408\u8FD0\u7B97\uFF0C\u5FFD\u7565\u9519\u8BEF\u6216\u9690\u85CF\u884C\u3002",ja:"\u96C6\u8A08\u6F14\u7B97\u3092\u5B9F\u884C\u3057\u3001\u30A8\u30E9\u30FC\u307E\u305F\u306F\u975E\u8868\u793A\u306E\u884C\u3092\u7121\u8996\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Function number, option, array1, ..., arrayN.",cn:"\u51FD\u6570\u53F7\uFF0C\u9009\u9879\uFF0C\u6570\u7EC41\uFF0C...\uFF0C\u6570\u7EC4N\u3002",ja:"\u95A2\u6570\u756A\u53F7\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u3001\u914D\u52171\u3001...\u3001\u914D\u5217N\u3002"}},{title:"ARABIC",call:"ARABIC('MCMXII')",result:1912,definition:{en:"Converts a Roman numeral to an Arabic numeral.",cn:"\u5C06\u7F57\u9A6C\u6570\u5B57\u8F6C\u6362\u4E3A\u963F\u62C9\u4F2F\u6570\u5B57\u3002",ja:"\u30ED\u30FC\u30DE\u6570\u5B57\u3092\u30A2\u30E9\u30D3\u30A2\u6570\u5B57\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Roman numeral string.",cn:"\u7F57\u9A6C\u6570\u5B57\u5B57\u7B26\u4E32\u3002",ja:"\u30ED\u30FC\u30DE\u6570\u5B57\u306E\u6587\u5B57\u5217\u3002"}},{title:"ASIN",call:"ASIN(-0.5)",result:-.5235987755982988,definition:{en:"Calculates the arcsine (in radians).",cn:"\u8BA1\u7B97\u53CD\u6B63\u5F26\u503C\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u9006\u6B63\u5F26\uFF08\u30E9\u30B8\u30A2\u30F3\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"A number between -1 and 1.",cn:"\u4ECB\u4E8E-1\u548C1\u4E4B\u95F4\u7684\u6570\u503C\u3002",ja:"-1\u304B\u30891\u306E\u9593\u306E\u6570\u3002"}},{title:"ASINH",call:"ASINH(-2.5)",result:-1.6472311463710965,definition:{en:"Calculates the inverse hyperbolic sine.",cn:"\u8BA1\u7B97\u53CD\u53CC\u66F2\u6B63\u5F26\u503C\u3002",ja:"\u9006\u53CC\u66F2\u7DDA\u6B63\u5F26\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Any number.",cn:"\u4EFB\u610F\u6570\u503C\u3002",ja:"\u4EFB\u610F\u306E\u6570\u3002"}},{title:"ATAN",call:"ATAN(1)",result:.7853981633974483,definition:{en:"Calculates the arctangent (in radians).",cn:"\u8BA1\u7B97\u53CD\u6B63\u5207\u503C\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u9006\u6B63\u63A5\uFF08\u30E9\u30B8\u30A2\u30F3\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Any number.",cn:"\u4EFB\u610F\u6570\u503C\u3002",ja:"\u4EFB\u610F\u306E\u6570\u3002"}},{title:"ATAN2",call:"ATAN2(-1, -1)",result:-2.356194490192345,definition:{en:"Calculates the arctangent (in radians) from coordinates.",cn:"\u6839\u636E\u5750\u6807\u8BA1\u7B97\u53CD\u6B63\u5207\u503C\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u5EA7\u6A19\u304B\u3089\u9006\u6B63\u63A5\uFF08\u30E9\u30B8\u30A2\u30F3\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Y coordinate, X coordinate.",cn:"y\u5750\u6807\uFF0Cx\u5750\u6807\u3002",ja:"Y\u5EA7\u6A19\u3001X\u5EA7\u6A19\u3002"}},{title:"ATANH",call:"ATANH(-0.1)",result:-.10033534773107562,definition:{en:"Calculates the inverse hyperbolic tangent.",cn:"\u8BA1\u7B97\u53CD\u53CC\u66F2\u6B63\u5207\u503C\u3002",ja:"\u9006\u53CC\u66F2\u7DDA\u6B63\u63A5\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"A number between -1 and 1.",cn:"\u4ECB\u4E8E-1\u548C1\u4E4B\u95F4\u7684\u6570\u503C\u3002",ja:"-1\u304B\u30891\u306E\u9593\u306E\u6570\u3002"}},{title:"BASE",call:"BASE(15, 2, 10)",result:"0000001111",definition:{en:"Converts a number into a text representation at a given base.",cn:"\u5C06\u6570\u503C\u8F6C\u6362\u4E3A\u6307\u5B9A\u57FA\u6570\u7684\u6587\u672C\u8868\u793A\u3002",ja:"\u6570\u3092\u6307\u5B9A\u3055\u308C\u305F\u57FA\u6570\u306E\u30C6\u30AD\u30B9\u30C8\u8868\u73FE\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Number, base, [minimum length].",cn:"\u6570\u503C\uFF0C\u57FA\u6570\uFF0C[\u6700\u5C0F\u957F\u5EA6]\u3002",ja:"\u6570\u3001\u57FA\u6570\u3001[\u6700\u5C0F\u9577\u3055]\u3002"}},{title:"CEILING",call:"CEILING(-5.5, 2, -1)",result:-6,definition:{en:"Rounds a number up to the nearest multiple.",cn:"\u5C06\u6570\u503C\u5411\u4E0A\u820D\u5165\u5230\u6700\u63A5\u8FD1\u7684\u500D\u6570\u3002",ja:"\u6570\u3092\u6700\u3082\u8FD1\u3044\u500D\u6570\u306B\u5207\u308A\u4E0A\u3052\u307E\u3059\u3002"},parameterDefinitions:{en:"Number, multiple, [mode].",cn:"\u6570\u503C\uFF0C\u500D\u6570\uFF0C[\u6A21\u5F0F]\u3002",ja:"\u6570\u3001\u500D\u6570\u3001[\u30E2\u30FC\u30C9]\u3002"}},{title:"CEILINGMATH",call:"CEILINGMATH(-5.5, 2, -1)",result:-6,definition:{en:"Rounds a number up using specified multiple and direction.",cn:"\u5C06\u6570\u503C\u5411\u4E0A\u820D\u5165\uFF0C\u4F7F\u7528\u6307\u5B9A\u7684\u500D\u6570\u548C\u65B9\u5411\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u500D\u6570\u3068\u65B9\u5411\u3092\u4F7F\u7528\u3057\u3066\u6570\u3092\u5207\u308A\u4E0A\u3052\u307E\u3059\u3002"},parameterDefinitions:{en:"Number, [multiple], [mode].",cn:"\u6570\u503C\uFF0C[\u500D\u6570]\uFF0C[\u6A21\u5F0F]\u3002",ja:"\u6570\u3001[\u500D\u6570]\u3001[\u30E2\u30FC\u30C9]\u3002"}},{title:"CEILINGPRECISE",call:"CEILINGPRECISE(-4.1, -2)",result:-4,definition:{en:"Rounds a number up to the nearest multiple, regardless of sign.",cn:"\u5C06\u6570\u503C\u5411\u4E0A\u820D\u5165\u5230\u6700\u63A5\u8FD1\u7684\u500D\u6570\uFF0C\u4E0D\u8003\u8651\u7B26\u53F7\u3002",ja:"\u6570\u3092\u6700\u3082\u8FD1\u3044\u500D\u6570\u306B\u5207\u308A\u4E0A\u3052\u3001\u7B26\u53F7\u306B\u95A2\u308F\u3089\u305A\u884C\u3044\u307E\u3059\u3002"},parameterDefinitions:{en:"Number, [multiple].",cn:"\u6570\u503C\uFF0C[\u500D\u6570]\u3002",ja:"\u6570\u3001[\u500D\u6570]\u3002"}},{title:"COMBIN",call:"COMBIN(8, 2)",result:28,definition:{en:"Calculates the number of combinations.",cn:"\u8BA1\u7B97\u7EC4\u5408\u6570\u3002",ja:"\u7D44\u307F\u5408\u308F\u305B\u306E\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Total number, chosen number.",cn:"\u603B\u6570\uFF0C\u9009\u4E2D\u6570\u3002",ja:"\u7DCF\u6570\u3001\u9078\u629E\u6570\u3002"}},{title:"COMBINA",call:"COMBINA(4, 3)",result:20,definition:{en:"Calculates the number of combinations with repetitions.",cn:"\u8BA1\u7B97\u5141\u8BB8\u91CD\u590D\u7684\u7EC4\u5408\u6570\u3002",ja:"\u7E70\u308A\u8FD4\u3057\u3092\u8A31\u3057\u305F\u7D44\u307F\u5408\u308F\u305B\u306E\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Total number, chosen number.",cn:"\u603B\u6570\uFF0C\u9009\u4E2D\u6570\u3002",ja:"\u7DCF\u6570\u3001\u9078\u629E\u6570\u3002"}},{title:"COS",call:"COS(1)",result:.5403023058681398,definition:{en:"Calculates the cosine (in radians).",cn:"\u8BA1\u7B97\u4F59\u5F26\u503C\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u4F59\u5F26\uFF08\u30E9\u30B8\u30A2\u30F3\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Angle (in radians).",cn:"\u89D2\u5EA6\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u89D2\u5EA6\uFF08\u30E9\u30B8\u30A2\u30F3\uFF09\u3002"}},{title:"COSH",call:"COSH(1)",result:1.5430806348152437,definition:{en:"Calculates the hyperbolic cosine.",cn:"\u8BA1\u7B97\u53CC\u66F2\u4F59\u5F26\u503C\u3002",ja:"\u53CC\u66F2\u7DDA\u4F59\u5F26\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Any number.",cn:"\u4EFB\u610F\u6570\u503C\u3002",ja:"\u4EFB\u610F\u306E\u6570\u3002"}},{title:"COT",call:"COT(30)",result:-.15611995216165922,definition:{en:"Calculates the cotangent (in radians).",cn:"\u8BA1\u7B97\u4F59\u5207\u503C\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u4F59\u63A5\uFF08\u30E9\u30B8\u30A2\u30F3\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Angle (in radians).",cn:"\u89D2\u5EA6\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u89D2\u5EA6\uFF08\u30E9\u30B8\u30A2\u30F3\uFF09\u3002"}},{title:"COTH",call:"COTH(2)",result:1.0373147207275482,definition:{en:"Calculates the hyperbolic cotangent.",cn:"\u8BA1\u7B97\u53CC\u66F2\u4F59\u5207\u503C\u3002",ja:"\u53CC\u66F2\u7DDA\u4F59\u63A5\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Any number.",cn:"\u4EFB\u610F\u6570\u503C\u3002",ja:"\u4EFB\u610F\u306E\u6570\u3002"}},{title:"CSC",call:"CSC(15)",result:1.5377805615408537,definition:{en:"Calculates the cosecant (in radians).",cn:"\u8BA1\u7B97\u4F59\u5272\u503C\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u4F59\u5272\uFF08\u30E9\u30B8\u30A2\u30F3\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Angle (in radians).",cn:"\u89D2\u5EA6\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u89D2\u5EA6\uFF08\u30E9\u30B8\u30A2\u30F3\uFF09\u3002"}},{title:"CSCH",call:"CSCH(1.5)",result:.46964244059522464,definition:{en:"Calculates the hyperbolic cosecant.",cn:"\u8BA1\u7B97\u53CC\u66F2\u4F59\u5272\u503C\u3002",ja:"\u53CC\u66F2\u7DDA\u4F59\u5272\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Any number.",cn:"\u4EFB\u610F\u6570\u503C\u3002",ja:"\u4EFB\u610F\u306E\u6570\u3002"}},{title:"DECIMAL",call:"DECIMAL('FF', 16)",result:255,definition:{en:"Converts a text representation of a number to decimal.",cn:"\u5C06\u6587\u672C\u5F62\u5F0F\u7684\u6570\u5B57\u8F6C\u6362\u4E3A\u5341\u8FDB\u5236\u3002",ja:"\u6570\u306E\u30C6\u30AD\u30B9\u30C8\u8868\u73FE\u309210\u9032\u6570\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Text, base.",cn:"\u6587\u672C\uFF0C\u57FA\u6570\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u3001\u57FA\u6570\u3002"}},{title:"ERF",call:"ERF(1)",result:.8427007929497149,definition:{en:"Calculates the error function.",cn:"\u8BA1\u7B97\u8BEF\u5DEE\u51FD\u6570\u3002",ja:"\u8AA4\u5DEE\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Upper limit.",cn:"\u4E0A\u9650\u3002",ja:"\u4E0A\u9650\u3002"}},{title:"ERFC",call:"ERFC(1)",result:.1572992070502851,definition:{en:"Calculates the complementary error function.",cn:"\u8BA1\u7B97\u4E92\u8865\u8BEF\u5DEE\u51FD\u6570\u3002",ja:"\u76F8\u88DC\u8AA4\u5DEE\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Lower limit.",cn:"\u4E0B\u9650\u3002",ja:"\u4E0B\u9650\u3002"}},{title:"EVEN",call:"EVEN(-1)",result:-2,definition:{en:"Rounds a number up to the nearest even integer.",cn:"\u5C06\u6570\u503C\u5411\u4E0A\u820D\u5165\u5230\u6700\u63A5\u8FD1\u7684\u5076\u6570\u3002",ja:"\u6570\u3092\u6700\u3082\u8FD1\u3044\u5076\u6570\u306B\u5207\u308A\u4E0A\u3052\u307E\u3059\u3002"},parameterDefinitions:{en:"Number.",cn:"\u6570\u503C\u3002",ja:"\u6570\u3002"}},{title:"EXP",call:"EXP(1)",result:2.718281828459045,definition:{en:"Calculates e raised to the power of a given number.",cn:"\u8BA1\u7B97e\u7684\u5E42\u6B21\u65B9\u3002",ja:"e \u3092\u6307\u5B9A\u3055\u308C\u305F\u6570\u306E\u51AA\u4E57\u306B\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Exponent.",cn:"\u6307\u6570\u3002",ja:"\u6307\u6570\u3002"}},{title:"FACT",call:"FACT(5)",result:120,definition:{en:"Calculates the factorial.",cn:"\u8BA1\u7B97\u9636\u4E58\u3002",ja:"\u968E\u4E57\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Non-negative integer.",cn:"\u975E\u8D1F\u6574\u6570\u3002",ja:"\u8CA0\u3067\u306A\u3044\u6574\u6570\u3002"}},{title:"FACTDOUBLE",call:"FACTDOUBLE(7)",result:105,definition:{en:"Calculates the double factorial.",cn:"\u8BA1\u7B97\u53CC\u9636\u4E58\u3002",ja:"\u4E8C\u91CD\u968E\u4E57\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Non-negative integer.",cn:"\u975E\u8D1F\u6574\u6570\u3002",ja:"\u8CA0\u3067\u306A\u3044\u6574\u6570\u3002"}},{title:"FLOOR",call:"FLOOR(-3.1)",result:-4,definition:{en:"Rounds a number down to the nearest multiple.",cn:"\u5C06\u6570\u503C\u5411\u4E0B\u820D\u5165\u5230\u6700\u63A5\u8FD1\u7684\u500D\u6570\u3002",ja:"\u6570\u3092\u6700\u3082\u8FD1\u3044\u500D\u6570\u306B\u5207\u308A\u4E0B\u3052\u307E\u3059\u3002"},parameterDefinitions:{en:"Number, multiple.",cn:"\u6570\u503C\uFF0C\u500D\u6570\u3002",ja:"\u6570\u3001\u500D\u6570\u3002"}},{title:"FLOORMATH",call:"FLOORMATH(-4.1, -2, -1)",result:-4,definition:{en:"Rounds a number down using specified multiple and direction.",cn:"\u5C06\u6570\u503C\u5411\u4E0B\u820D\u5165\uFF0C\u4F7F\u7528\u6307\u5B9A\u7684\u500D\u6570\u548C\u65B9\u5411\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u500D\u6570\u3068\u65B9\u5411\u3092\u4F7F\u7528\u3057\u3066\u6570\u3092\u5207\u308A\u4E0B\u3052\u307E\u3059\u3002"},parameterDefinitions:{en:"Number, [multiple], [mode].",cn:"\u6570\u503C\uFF0C[\u500D\u6570]\uFF0C[\u6A21\u5F0F]\u3002",ja:"\u6570\u3001[\u500D\u6570]\u3001[\u30E2\u30FC\u30C9]\u3002"}},{title:"FLOORPRECISE",call:"FLOORPRECISE(-3.1, -2)",result:-4,definition:{en:"Rounds a number down to the nearest multiple, regardless of sign.",cn:"\u5C06\u6570\u503C\u5411\u4E0B\u820D\u5165\u5230\u6700\u63A5\u8FD1\u7684\u500D\u6570\uFF0C\u4E0D\u8003\u8651\u7B26\u53F7\u3002",ja:"\u6570\u3092\u6700\u3082\u8FD1\u3044\u500D\u6570\u306B\u5207\u308A\u4E0B\u3052\u3001\u7B26\u53F7\u306B\u95A2\u308F\u3089\u305A\u884C\u3044\u307E\u3059\u3002"},parameterDefinitions:{en:"Number, [multiple].",cn:"\u6570\u503C\uFF0C[\u500D\u6570]\u3002",ja:"\u6570\u3001[\u500D\u6570]\u3002"}},{title:"GCD",call:"GCD(24, 36, 48)",result:12,definition:{en:"Calculates the greatest common divisor.",cn:"\u8BA1\u7B97\u6700\u5927\u516C\u7EA6\u6570\u3002",ja:"\u6700\u5927\u516C\u7D04\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Two or more integers.",cn:"\u4E24\u4E2A\u6216\u591A\u4E2A\u6574\u6570\u3002",ja:"2\u3064\u4EE5\u4E0A\u306E\u6574\u6570\u3002"}},{title:"INT",call:"INT(-8.9)",result:-9,definition:{en:"Rounds a number down to the nearest integer.",cn:"\u5C06\u6570\u503C\u5411\u4E0B\u53D6\u6574\u4E3A\u6700\u63A5\u8FD1\u7684\u6574\u6570\u3002",ja:"\u6570\u3092\u6700\u3082\u8FD1\u3044\u6574\u6570\u306B\u5207\u308A\u4E0B\u3052\u307E\u3059\u3002"},parameterDefinitions:{en:"Number.",cn:"\u6570\u503C\u3002",ja:"\u6570\u3002"}},{title:"ISEVEN",call:"ISEVEN(-2.5)",result:!0,definition:{en:"Tests whether a number is even.",cn:"\u6D4B\u8BD5\u6570\u503C\u662F\u5426\u4E3A\u5076\u6570\u3002",ja:"\u6570\u304C\u5076\u6570\u304B\u3069\u3046\u304B\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Number.",cn:"\u6570\u503C\u3002",ja:"\u6570\u3002"}},{title:"ISOCEILING",call:"ISOCEILING(-4.1, -2)",result:-4,definition:{en:"Rounds a number up to the nearest multiple, following ISO standards.",cn:"\u5C06\u6570\u503C\u5411\u4E0A\u820D\u5165\u5230\u6700\u63A5\u8FD1\u7684\u500D\u6570\uFF0C\u9075\u5FAAISO\u6807\u51C6\u3002",ja:"ISO\u898F\u683C\u306B\u5F93\u3063\u3066\u6570\u3092\u6700\u3082\u8FD1\u3044\u500D\u6570\u306B\u5207\u308A\u4E0A\u3052\u307E\u3059\u3002"},parameterDefinitions:{en:"Number, [multiple].",cn:"\u6570\u503C\uFF0C[\u500D\u6570]\u3002",ja:"\u6570\u3001[\u500D\u6570]\u3002"}},{title:"ISODD",call:"ISODD(-2.5)",result:!1,definition:{en:"Tests whether a number is odd.",cn:"\u6D4B\u8BD5\u6570\u503C\u662F\u5426\u4E3A\u5947\u6570\u3002",ja:"\u6570\u304C\u5947\u6570\u304B\u3069\u3046\u304B\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Number.",cn:"\u6570\u503C\u3002",ja:"\u6570\u3002"}},{title:"LCM",call:"LCM(24, 36, 48)",result:144,definition:{en:"Calculates the least common multiple.",cn:"\u8BA1\u7B97\u6700\u5C0F\u516C\u500D\u6570\u3002",ja:"\u6700\u5C0F\u516C\u500D\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Two or more integers.",cn:"\u4E24\u4E2A\u6216\u591A\u4E2A\u6574\u6570\u3002",ja:"2\u3064\u4EE5\u4E0A\u306E\u6574\u6570\u3002"}},{title:"LN",call:"LN(86)",result:4.454347296253507,definition:{en:"Calculates the natural logarithm.",cn:"\u8BA1\u7B97\u81EA\u7136\u5BF9\u6570\u3002",ja:"\u81EA\u7136\u5BFE\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Positive value.",cn:"\u6B63\u503C\u3002",ja:"\u6B63\u306E\u5024\u3002"}},{title:"LOG",call:"LOG(8, 2)",result:3,definition:{en:"Calculates the logarithm for a specified base.",cn:"\u8BA1\u7B97\u6307\u5B9A\u5E95\u6570\u7684\u5BF9\u6570\u3002",ja:"\u6307\u5B9A\u3057\u305F\u5E95\u6570\u306E\u5BFE\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Number, base.",cn:"\u6570\u503C\uFF0C\u5E95\u6570\u3002",ja:"\u6570\u3001\u5E95\u6570\u3002"}},{title:"LOG10",call:"LOG10(100000)",result:5,definition:{en:"Calculates the logarithm with base 10.",cn:"\u8BA1\u7B97\u4EE510\u4E3A\u5E95\u7684\u5BF9\u6570\u3002",ja:"\u5E95\u657010\u306E\u5BFE\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Positive value.",cn:"\u6B63\u503C\u3002",ja:"\u6B63\u306E\u5024\u3002"}},{title:"MOD",call:"MOD(3, -2)",result:-1,definition:{en:"Calculates the remainder of two numbers divided.",cn:"\u8BA1\u7B97\u4E24\u6570\u76F8\u9664\u7684\u4F59\u6570\u3002",ja:"2\u3064\u306E\u6570\u3092\u5272\u3063\u305F\u6642\u306E\u5270\u4F59\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Dividend, divisor.",cn:"\u88AB\u9664\u6570\uFF0C\u9664\u6570\u3002",ja:"\u88AB\u9664\u6570\u3001\u9664\u6570\u3002"}},{title:"MROUND",call:"MROUND(-10, -3)",result:-9,definition:{en:"Rounds a number to the nearest multiple.",cn:"\u5C06\u6570\u503C\u56DB\u820D\u4E94\u5165\u5230\u6700\u63A5\u8FD1\u7684\u500D\u6570\u3002",ja:"\u6570\u3092\u6700\u3082\u8FD1\u3044\u500D\u6570\u306B\u56DB\u6368\u4E94\u5165\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Number, multiple.",cn:"\u6570\u503C\uFF0C\u500D\u6570\u3002",ja:"\u6570\u3001\u500D\u6570\u3002"}},{title:"MULTINOMIAL",call:"MULTINOMIAL(2, 3, 4)",result:1260,definition:{en:"Calculates the multinomial coefficient.",cn:"\u8BA1\u7B97\u591A\u9879\u5F0F\u7CFB\u6570\u3002",ja:"\u591A\u9805\u4FC2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Two or more non-negative integers.",cn:"\u4E24\u4E2A\u6216\u591A\u4E2A\u975E\u8D1F\u6574\u6570\u3002",ja:"2\u3064\u4EE5\u4E0A\u306E\u8CA0\u3067\u306A\u3044\u6574\u6570\u3002"}},{title:"ODD",call:"ODD(-1.5)",result:-3,definition:{en:"Rounds a number up to the nearest odd integer.",cn:"\u5C06\u6570\u503C\u5411\u4E0A\u820D\u5165\u5230\u6700\u63A5\u8FD1\u7684\u5947\u6570\u3002",ja:"\u6570\u3092\u6700\u3082\u8FD1\u3044\u5947\u6570\u306B\u5207\u308A\u4E0A\u3052\u307E\u3059\u3002"},parameterDefinitions:{en:"Number.",cn:"\u6570\u503C\u3002",ja:"\u6570\u3002"}},{title:"POWER",call:"POWER(5, 2)",result:25,definition:{en:"Calculates a number raised to a power.",cn:"\u8BA1\u7B97\u5E42\u6B21\u65B9\u3002",ja:"\u6570\u306E\u51AA\u4E57\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Base, exponent.",cn:"\u5E95\u6570\uFF0C\u6307\u6570\u3002",ja:"\u5E95\u6570\u3001\u6307\u6570\u3002"}},{title:"PRODUCT",call:"PRODUCT(5, 15, 30)",result:2250,definition:{en:"Calculates the product of multiple numbers.",cn:"\u8BA1\u7B97\u591A\u4E2A\u6570\u503C\u7684\u4E58\u79EF\u3002",ja:"\u8907\u6570\u306E\u6570\u306E\u7A4D\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"One or more numbers.",cn:"\u4E00\u4E2A\u6216\u591A\u4E2A\u6570\u503C\u3002",ja:"1\u3064\u4EE5\u4E0A\u306E\u6570\u3002"}},{title:"QUOTIENT",call:"QUOTIENT(-10, 3)",result:-3,definition:{en:"Calculates the integer portion of a division, ignoring the remainder.",cn:"\u8BA1\u7B97\u4E24\u6570\u76F8\u9664\u7684\u5546\uFF0C\u4E0D\u5305\u62EC\u4F59\u6570\u3002",ja:"\u5272\u308A\u7B97\u306E\u6574\u6570\u90E8\u5206\u3092\u8A08\u7B97\u3057\u3001\u5270\u4F59\u3092\u7121\u8996\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Dividend, divisor.",cn:"\u88AB\u9664\u6570\uFF0C\u9664\u6570\u3002",ja:"\u88AB\u9664\u6570\u3001\u9664\u6570\u3002"}},{title:"RADIANS",call:"RADIANS(180)",result:3.141592653589793,definition:{en:"Converts degrees to radians.",cn:"\u5C06\u89D2\u5EA6\u8F6C\u6362\u4E3A\u5F27\u5EA6\u3002",ja:"\u5EA6\u3092\u30E9\u30B8\u30A2\u30F3\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Angle in degrees.",cn:"\u89D2\u5EA6\u3002",ja:"\u5EA6\u6570\u306E\u89D2\u5EA6\u3002"}},{title:"RAND",call:"RAND()",result:"[Random real number between 0 and 1]",definition:{en:"Generates a random real number between 0 and 1.",cn:"\u751F\u62100\u52301\u4E4B\u95F4\u7684\u968F\u673A\u5B9E\u6570\u3002",ja:"0\u304B\u30891\u306E\u9593\u306E\u30E9\u30F3\u30C0\u30E0\u306A\u5B9F\u6570\u3092\u751F\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"No parameters.",cn:"\u65E0\u53C2\u6570\u3002",ja:"\u30D1\u30E9\u30E1\u30FC\u30BF\u306A\u3057\u3002"}},{title:"RANDBETWEEN",call:"RANDBETWEEN(-1, 1)",result:"[Random integer between bottom and top]",definition:{en:"Generates a random integer within a specified range.",cn:"\u751F\u6210\u6307\u5B9A\u8303\u56F4\u5185\u7684\u968F\u673A\u6574\u6570\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u7BC4\u56F2\u5185\u306E\u30E9\u30F3\u30C0\u30E0\u306A\u6574\u6570\u3092\u751F\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Bottom, top.",cn:"\u4E0B\u9650\uFF0C\u4E0A\u9650\u3002",ja:"\u4E0B\u9650\u3001\u4E0A\u9650\u3002"}},{title:"ROUND",call:"ROUND(626.3, -3)",result:1e3,definition:{en:"Rounds a number to a specified number of digits.",cn:"\u6309\u6307\u5B9A\u4F4D\u6570\u56DB\u820D\u4E94\u5165\u6570\u503C\u3002",ja:"\u6570\u3092\u6307\u5B9A\u3055\u308C\u305F\u6841\u6570\u306B\u56DB\u6368\u4E94\u5165\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Number, num_digits.",cn:"\u6570\u503C\uFF0C\u4F4D\u6570\u3002",ja:"\u6570\u3001\u6841\u6570\u3002"}},{title:"ROUNDDOWN",call:"ROUNDDOWN(-3.14159, 2)",result:-3.14,definition:{en:"Rounds a number down to a specified number of digits.",cn:"\u5C06\u6570\u503C\u5411\u4E0B\u820D\u5165\u5230\u6307\u5B9A\u4F4D\u6570\u3002",ja:"\u6570\u3092\u6307\u5B9A\u3055\u308C\u305F\u6841\u6570\u306B\u5207\u308A\u4E0B\u3052\u307E\u3059\u3002"},parameterDefinitions:{en:"Number, num_digits.",cn:"\u6570\u503C\uFF0C\u4F4D\u6570\u3002",ja:"\u6570\u3001\u6841\u6570\u3002"}},{title:"ROUNDUP",call:"ROUNDUP(-3.14159, 2)",result:-3.15,definition:{en:"Rounds a number up to a specified number of digits.",cn:"\u5C06\u6570\u503C\u5411\u4E0A\u820D\u5165\u5230\u6307\u5B9A\u4F4D\u6570\u3002",ja:"\u6570\u3092\u6307\u5B9A\u3055\u308C\u305F\u6841\u6570\u306B\u5207\u308A\u4E0A\u3052\u307E\u3059\u3002"},parameterDefinitions:{en:"Number, num_digits.",cn:"\u6570\u503C\uFF0C\u4F4D\u6570\u3002",ja:"\u6570\u3001\u6841\u6570\u3002"}},{title:"SEC",call:"SEC(45)",result:1.9035944074044246,definition:{en:"Calculates the secant (in radians).",cn:"\u8BA1\u7B97\u6B63\u5272\u503C\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u30BB\u30AB\u30F3\u30C8\uFF08\u30E9\u30B8\u30A2\u30F3\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Angle in radians.",cn:"\u89D2\u5EA6\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u30E9\u30B8\u30A2\u30F3\u306E\u89D2\u5EA6\u3002"}},{title:"SECH",call:"SECH(45)",result:5725037161098787e-35,definition:{en:"Calculates the hyperbolic secant.",cn:"\u8BA1\u7B97\u53CC\u66F2\u6B63\u5272\u503C\u3002",ja:"\u53CC\u66F2\u7DDA\u30BB\u30AB\u30F3\u30C8\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Any number.",cn:"\u4EFB\u610F\u6570\u503C\u3002",ja:"\u4EFB\u610F\u306E\u6570\u3002"}},{title:"SIGN",call:"SIGN(-0.00001)",result:-1,definition:{en:"Returns the sign of a number.",cn:"\u8FD4\u56DE\u6570\u503C\u7684\u7B26\u53F7\u3002",ja:"\u6570\u306E\u7B26\u53F7\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Number.",cn:"\u6570\u503C\u3002",ja:"\u6570\u3002"}},{title:"SIN",call:"SIN(1)",result:.8414709848078965,definition:{en:"Calculates the sine (in radians).",cn:"\u8BA1\u7B97\u6B63\u5F26\u503C\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u30B5\u30A4\u30F3\uFF08\u30E9\u30B8\u30A2\u30F3\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Angle in radians.",cn:"\u89D2\u5EA6\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u30E9\u30B8\u30A2\u30F3\u306E\u89D2\u5EA6\u3002"}},{title:"SINH",call:"SINH(1)",result:1.1752011936438014,definition:{en:"Calculates the hyperbolic sine.",cn:"\u8BA1\u7B97\u53CC\u66F2\u6B63\u5F26\u503C\u3002",ja:"\u53CC\u66F2\u7DDA\u30B5\u30A4\u30F3\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Any number.",cn:"\u4EFB\u610F\u6570\u503C\u3002",ja:"\u4EFB\u610F\u306E\u6570\u3002"}},{title:"SQRT",call:"SQRT(16)",result:4,definition:{en:"Calculates the square root.",cn:"\u8BA1\u7B97\u5E73\u65B9\u6839\u3002",ja:"\u5E73\u65B9\u6839\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Non-negative number.",cn:"\u975E\u8D1F\u6570\u503C\u3002",ja:"\u8CA0\u3067\u306A\u3044\u6570\u3002"}},{title:"SQRTPI",call:"SQRTPI(2)",result:2.5066282746310002,definition:{en:"Calculates the square root of a number multiplied by pi.",cn:"\u8BA1\u7B97\u6570\u503C\u4E0E\u03C0\u7684\u4E58\u79EF\u7684\u5E73\u65B9\u6839\u3002",ja:"\u6570\u3068\u03C0\u306E\u7A4D\u306E\u5E73\u65B9\u6839\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Non-negative number.",cn:"\u975E\u8D1F\u6570\u503C\u3002",ja:"\u8CA0\u3067\u306A\u3044\u6570\u3002"}},{title:"SUBTOTAL",call:"SUBTOTAL(9, [-5,15], [32,'Hello World!'])",result:"10,32",definition:{en:"Calculates a subtotal in a list or database, ignoring hidden rows.",cn:"\u8BA1\u7B97\u5B50\u96C6\u7684\u6C47\u603B\u503C\uFF0C\u5FFD\u7565\u9690\u85CF\u884C\u3002",ja:"\u30EA\u30B9\u30C8\u307E\u305F\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u90E8\u5206\u5408\u8A08\u3092\u8A08\u7B97\u3057\u3001\u975E\u8868\u793A\u884C\u3092\u7121\u8996\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Function_num, array1, ..., arrayN.",cn:"\u51FD\u6570\u53F7\uFF0C\u6570\u7EC41\uFF0C...\uFF0C\u6570\u7EC4N\u3002",ja:"\u95A2\u6570\u756A\u53F7\u3001\u914D\u52171\u3001...\u3001\u914D\u5217N\u3002"}},{title:"SUM",call:"SUM(-5, 15, 32, 'Hello World!')",result:42,definition:{en:"Calculates the sum of numbers, ignoring text.",cn:"\u8BA1\u7B97\u6570\u503C\u603B\u548C\uFF0C\u5FFD\u7565\u6587\u672C\u3002",ja:"\u6570\u306E\u5408\u8A08\u3092\u8A08\u7B97\u3057\u3001\u30C6\u30AD\u30B9\u30C8\u3092\u7121\u8996\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"One or more numbers.",cn:"\u4E00\u4E2A\u6216\u591A\u4E2A\u6570\u503C\u3002",ja:"1\u3064\u4EE5\u4E0A\u306E\u6570\u3002"}},{title:"SUMIF",call:"SUMIF([2,4,8,16], '>5')",result:24,definition:{en:"Sums values based on a condition.",cn:"\u6839\u636E\u6761\u4EF6\u6C42\u548C\u3002",ja:"\u6761\u4EF6\u306B\u57FA\u3065\u3044\u3066\u5024\u3092\u5408\u8A08\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Array, criteria.",cn:"\u6570\u7EC4\uFF0C\u6761\u4EF6\u3002",ja:"\u914D\u5217\u3001\u6761\u4EF6\u3002"}},{title:"SUMIFS",call:"SUMIFS([2,4,8,16], [1,2,3,4], '>=2', [1,2,4,8], '<=4')",result:12,definition:{en:"Sums values based on multiple conditions.",cn:"\u6839\u636E\u591A\u4E2A\u6761\u4EF6\u6C42\u548C\u3002",ja:"\u8907\u6570\u306E\u6761\u4EF6\u306B\u57FA\u3065\u3044\u3066\u5024\u3092\u5408\u8A08\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Sum_array, criteria_range1, criteria1, ..., criteria_rangeN, criteriaN.",cn:"\u6C42\u548C\u6570\u7EC4\uFF0C\u6761\u4EF6\u6570\u7EC41\uFF0C\u6761\u4EF61\uFF0C...\uFF0C\u6761\u4EF6\u6570\u7EC4N\uFF0C\u6761\u4EF6N\u3002",ja:"\u5408\u8A08\u914D\u5217\u3001\u6761\u4EF6\u7BC4\u56F21\u3001\u6761\u4EF61\u3001...\u3001\u6761\u4EF6\u7BC4\u56F2N\u3001\u6761\u4EF6N\u3002"}},{title:"SUMPRODUCT",call:"SUMPRODUCT([[1,2],[3,4]], [[1,0],[0,1]])",result:5,definition:{en:"Calculates the sum of the products of corresponding elements in arrays.",cn:"\u8BA1\u7B97\u6570\u7EC4\u5143\u7D20\u7684\u4E58\u79EF\u4E4B\u548C\u3002",ja:"\u914D\u5217\u306E\u5BFE\u5FDC\u3059\u308B\u8981\u7D20\u306E\u7A4D\u306E\u5408\u8A08\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Two or more arrays.",cn:"\u4E24\u4E2A\u6216\u591A\u4E2A\u6570\u7EC4\u3002",ja:"2\u3064\u4EE5\u4E0A\u306E\u914D\u5217\u3002"}},{title:"SUMSQ",call:"SUMSQ(3, 4)",result:25,definition:{en:"Calculates the sum of squares of numbers.",cn:"\u8BA1\u7B97\u6570\u503C\u7684\u5E73\u65B9\u548C\u3002",ja:"\u6570\u306E\u4E8C\u4E57\u306E\u5408\u8A08\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"One or more numbers.",cn:"\u4E00\u4E2A\u6216\u591A\u4E2A\u6570\u503C\u3002",ja:"1\u3064\u4EE5\u4E0A\u306E\u6570\u3002"}},{title:"SUMX2MY2",call:"SUMX2MY2([1,2], [3,4])",result:-20,definition:{en:"Calculates the sum of the difference of squares of corresponding elements in two arrays.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u6570\u7EC4\u5BF9\u5E94\u5143\u7D20\u5E73\u65B9\u5DEE\u4E4B\u548C\u3002",ja:"2\u3064\u306E\u914D\u5217\u306E\u5BFE\u5FDC\u3059\u308B\u8981\u7D20\u306E\u4E8C\u4E57\u306E\u5DEE\u306E\u5408\u8A08\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Array1, array2.",cn:"\u6570\u7EC41\uFF0C\u6570\u7EC42\u3002",ja:"\u914D\u52171\u3001\u914D\u52172\u3002"}},{title:"SUMX2PY2",call:"SUMX2PY2([1,2], [3,4])",result:30,definition:{en:"Calculates the sum of the sum of squares of corresponding elements in two arrays.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u6570\u7EC4\u5BF9\u5E94\u5143\u7D20\u5E73\u65B9\u548C\u4E4B\u548C\u3002",ja:"2\u3064\u306E\u914D\u5217\u306E\u5BFE\u5FDC\u3059\u308B\u8981\u7D20\u306E\u4E8C\u4E57\u306E\u5408\u8A08\u306E\u5408\u8A08\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Array1, array2.",cn:"\u6570\u7EC41\uFF0C\u6570\u7EC42\u3002",ja:"\u914D\u52171\u3001\u914D\u52172\u3002"}},{title:"SUMXMY2",call:"SUMXMY2([1,2], [3,4])",result:8,definition:{en:"Calculates the sum of squares of differences of corresponding elements in two arrays.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u6570\u7EC4\u5BF9\u5E94\u5143\u7D20\u5DEE\u7684\u5E73\u65B9\u548C\u3002",ja:"2\u3064\u306E\u914D\u5217\u306E\u5BFE\u5FDC\u3059\u308B\u8981\u7D20\u306E\u5DEE\u306E\u4E8C\u4E57\u306E\u5408\u8A08\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Array1, array2.",cn:"\u6570\u7EC41\uFF0C\u6570\u7EC42\u3002",ja:"\u914D\u52171\u3001\u914D\u52172\u3002"}},{title:"TAN",call:"TAN(1)",result:1.5574077246549023,definition:{en:"Calculates the tangent (in radians).",cn:"\u8BA1\u7B97\u6B63\u5207\u503C\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u30BF\u30F3\u30B8\u30A7\u30F3\u30C8\uFF08\u30E9\u30B8\u30A2\u30F3\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Angle in radians.",cn:"\u89D2\u5EA6\uFF08\u5F27\u5EA6\uFF09\u3002",ja:"\u30E9\u30B8\u30A2\u30F3\u306E\u89D2\u5EA6\u3002"}},{title:"TANH",call:"TANH(-2)",result:-.9640275800758168,definition:{en:"Calculates the hyperbolic tangent.",cn:"\u8BA1\u7B97\u53CC\u66F2\u6B63\u5207\u503C\u3002",ja:"\u53CC\u66F2\u7DDA\u30BF\u30F3\u30B8\u30A7\u30F3\u30C8\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Any number.",cn:"\u4EFB\u610F\u6570\u503C\u3002",ja:"\u4EFB\u610F\u306E\u6570\u3002"}},{title:"TRUNC",call:"TRUNC(-8.9)",result:-8,definition:{en:"Truncates a number without rounding.",cn:"\u622A\u65AD\u6570\u503C\uFF0C\u4E0D\u8FDB\u884C\u56DB\u820D\u4E94\u5165\u3002",ja:"\u6570\u3092\u5207\u308A\u6368\u3066\u3001\u56DB\u6368\u4E94\u5165\u3092\u884C\u3044\u307E\u305B\u3093\u3002"},parameterDefinitions:{en:"Number, [num_digits].",cn:"\u6570\u503C\uFF0C[\u4F4D\u6570]\u3002",ja:"\u6570\u3001[\u6841\u6570]\u3002"}}]},{category:"STATISTICAL",functions:[{title:"AVEDEV",call:"AVEDEV([2,4], [8,16])",result:4.5,definition:{en:"Calculates the average of the absolute deviations.",cn:"\u8BA1\u7B97\u5E73\u5747\u7EDD\u5BF9\u504F\u5DEE\u3002",ja:"\u7D76\u5BFE\u504F\u5DEE\u306E\u5E73\u5747\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Arguments are arrays of numbers representing data points.",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\uFF0C\u8868\u793A\u6570\u636E\u70B9\u3002",ja:"\u5F15\u6570\u306F\u30C7\u30FC\u30BF\u30DD\u30A4\u30F3\u30C8\u3092\u8868\u3059\u6570\u5024\u306E\u914D\u5217\u3067\u3059\u3002"}},{title:"AVERAGE",call:"AVERAGE([2,4], [8,16])",result:7.5,definition:{en:"Calculates the arithmetic mean.",cn:"\u8BA1\u7B97\u7B97\u672F\u5E73\u5747\u503C\u3002",ja:"\u7B97\u8853\u5E73\u5747\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Arguments are arrays of numbers representing data points to average.",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\uFF0C\u8868\u793A\u8981\u5E73\u5747\u7684\u6570\u636E\u70B9\u3002",ja:"\u5F15\u6570\u306F\u5E73\u5747\u5316\u3059\u308B\u30C7\u30FC\u30BF\u30DD\u30A4\u30F3\u30C8\u3092\u8868\u3059\u6570\u5024\u306E\u914D\u5217\u3067\u3059\u3002"}},{title:"AVERAGEA",call:"AVERAGEA([2,4], [8,16])",result:7.5,definition:{en:"Calculates the average including text and logical values.",cn:"\u8BA1\u7B97\u5305\u542B\u6587\u672C\u548C\u903B\u8F91\u503C\u5728\u5185\u7684\u5E73\u5747\u503C\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u3068\u8AD6\u7406\u5024\u3092\u542B\u3080\u5E73\u5747\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Arguments are arrays of numbers, text, or logical values; all non-empty values are calculated.",cn:"\u53C2\u6570\u662F\u6570\u503C\u3001\u6587\u672C\u6216\u903B\u8F91\u503C\u7684\u6570\u7EC4\uFF0C\u6240\u6709\u975E\u7A7A\u503C\u90FD\u5C06\u88AB\u8BA1\u7B97\u3002",ja:"\u5F15\u6570\u306F\u6570\u5024\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u307E\u305F\u306F\u8AD6\u7406\u5024\u306E\u914D\u5217\u3067\u3001\u3059\u3079\u3066\u306E\u975E\u7A7A\u5024\u304C\u8A08\u7B97\u3055\u308C\u307E\u3059\u3002"}},{title:"AVERAGEIF",call:"AVERAGEIF([2,4,8,16], '>5', [1, 2, 3, 4])",result:3.5,definition:{en:"Calculates the average based on a single condition.",cn:"\u57FA\u4E8E\u5355\u4E2A\u6761\u4EF6\u8BA1\u7B97\u5E73\u5747\u503C\u3002",ja:"\u5358\u4E00\u306E\u6761\u4EF6\u306B\u57FA\u3065\u3044\u3066\u5E73\u5747\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"First argument is an array of numbers, second is a condition, third optional array for averaging.",cn:"\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u6761\u4EF6\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u53EF\u9009\u7684\u6570\u503C\u6570\u7EC4\u7528\u4E8E\u5E73\u5747\u3002",ja:"\u6700\u521D\u306E\u5F15\u6570\u306F\u6570\u5024\u306E\u914D\u5217\u30012\u3064\u76EE\u306F\u6761\u4EF6\u30013\u3064\u76EE\u306F\u7701\u7565\u53EF\u80FD\u306A\u5E73\u5747\u7528\u306E\u6570\u5024\u914D\u5217\u3067\u3059\u3002"}},{title:"AVERAGEIFS",call:"AVERAGEIFS([2,4,8,16], [1,2,3,4], '>=2', [1,2,4,8], '<=4')",result:6,definition:{en:"Calculates the average based on multiple conditions.",cn:"\u57FA\u4E8E\u591A\u4E2A\u6761\u4EF6\u8BA1\u7B97\u5E73\u5747\u503C\u3002",ja:"\u8907\u6570\u306E\u6761\u4EF6\u306B\u57FA\u3065\u3044\u3066\u5E73\u5747\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"First argument is an array of numbers, followed by pairs of condition arrays and condition expressions.",cn:"\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\uFF0C\u540E\u8DDF\u6210\u5BF9\u7684\u6761\u4EF6\u6570\u7EC4\u548C\u6761\u4EF6\u8868\u8FBE\u5F0F\u3002",ja:"\u6700\u521D\u306E\u5F15\u6570\u306F\u6570\u5024\u306E\u914D\u5217\u3067\u3001\u305D\u306E\u5F8C\u306B\u6761\u4EF6\u914D\u5217\u3068\u6761\u4EF6\u8868\u73FE\u306E\u30DA\u30A2\u304C\u7D9A\u304D\u307E\u3059\u3002"}},{title:"BETADIST",call:"BETADIST(2, 8, 10, true, 1, 3)",result:.6854705810117458,definition:{en:"Calculates the cumulative beta probability density function.",cn:"\u8BA1\u7B97\u7D2F\u79EF\u8D1D\u5854\u6982\u7387\u5BC6\u5EA6\u51FD\u6570\u3002",ja:"\u7D2F\u7A4D\u30D9\u30FC\u30BF\u78BA\u7387\u5BC6\u5EA6\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Parameters are value, \u03B1, \u03B2, cumulative flag, A (optional), and B (optional).",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u503C\u3001\u03B1\u3001\u03B2\u3001\u7D2F\u79EF\u6807\u5FD7\u3001A\uFF08\u53EF\u9009\uFF09\u548CB\uFF08\u53EF\u9009\uFF09\u3002",ja:"\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u9806\u306B\u5024\u3001\u03B1\u3001\u03B2\u3001\u7D2F\u7A4D\u30D5\u30E9\u30B0\u3001A\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09\u3001\u304A\u3088\u3073B\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09\u3067\u3059\u3002"}},{title:"BETAINV",call:"BETAINV(0.6854705810117458, 8, 10, 1, 3)",result:1.9999999999999998,definition:{en:"Calculates the inverse of the cumulative beta probability density function.",cn:"\u8BA1\u7B97\u7D2F\u79EF\u8D1D\u5854\u6982\u7387\u5BC6\u5EA6\u51FD\u6570\u7684\u53CD\u51FD\u6570\u3002",ja:"\u7D2F\u7A4D\u30D9\u30FC\u30BF\u78BA\u7387\u5BC6\u5EA6\u95A2\u6570\u306E\u9006\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Parameters are probability, \u03B1, \u03B2, A (optional), and B (optional).",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6982\u7387\u3001\u03B1\u3001\u03B2\u3001A\uFF08\u53EF\u9009\uFF09\u548CB\uFF08\u53EF\u9009\uFF09\u3002",ja:"\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u9806\u306B\u78BA\u7387\u3001\u03B1\u3001\u03B2\u3001A\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09\u3001\u304A\u3088\u3073B\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09\u3067\u3059\u3002"}},{title:"BINOMDIST",call:"BINOMDIST(6, 10, 0.5, false)",result:.205078125,definition:{en:"Calculates the binomial distribution probability.",cn:"\u8BA1\u7B97\u4E8C\u9879\u5206\u5E03\u7684\u6982\u7387\u3002",ja:"\u4E8C\u9805\u5206\u5E03\u306E\u78BA\u7387\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Parameters are trials, successes, success probability, and cumulative flag.",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u8BD5\u9A8C\u6B21\u6570\u3001\u6210\u529F\u6B21\u6570\u3001\u6210\u529F\u6982\u7387\u3001\u7D2F\u79EF\u6807\u5FD7\u3002",ja:"\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u9806\u306B\u8A66\u884C\u56DE\u6570\u3001\u6210\u529F\u56DE\u6570\u3001\u6210\u529F\u78BA\u7387\u3001\u304A\u3088\u3073\u7D2F\u7A4D\u30D5\u30E9\u30B0\u3067\u3059\u3002"}},{title:"CORREL",call:"CORREL([3,2,4,5,6], [9,7,12,15,17])",result:.9970544855015815,definition:{en:"Calculates the correlation coefficient between two datasets.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u6570\u636E\u96C6\u7684\u76F8\u5173\u7CFB\u6570\u3002",ja:"2\u3064\u306E\u30C7\u30FC\u30BF\u30BB\u30C3\u30C8\u9593\u306E\u76F8\u95A2\u4FC2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Arguments are two arrays of numbers representing two datasets.",cn:"\u53C2\u6570\u662F\u4E24\u4E2A\u6570\u503C\u6570\u7EC4\uFF0C\u8868\u793A\u4E24\u4E2A\u6570\u636E\u96C6\u3002",ja:"\u5F15\u6570\u306F2\u3064\u306E\u30C7\u30FC\u30BF\u30BB\u30C3\u30C8\u3092\u8868\u3059\u6570\u5024\u306E\u914D\u5217\u3067\u3059\u3002"}},{title:"COUNT",call:"COUNT([1,2], [3,4])",result:4,definition:{en:"Counts the number of numeric cells.",cn:"\u8BA1\u7B97\u6570\u503C\u5355\u5143\u683C\u7684\u6570\u91CF\u3002",ja:"\u6570\u5024\u30BB\u30EB\u306E\u6570\u3092\u30AB\u30A6\u30F3\u30C8\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Arguments are arrays or ranges of numbers.",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\u6216\u8303\u56F4\u3002",ja:"\u5F15\u6570\u306F\u6570\u5024\u306E\u914D\u5217\u307E\u305F\u306F\u7BC4\u56F2\u3067\u3059\u3002"}},{title:"COUNTA",call:"COUNTA([1, null, 3, 'a', '', 'c'])",result:4,definition:{en:"Counts the number of non-empty cells.",cn:"\u8BA1\u7B97\u975E\u7A7A\u5355\u5143\u683C\u7684\u6570\u91CF\u3002",ja:"\u975E\u7A7A\u30BB\u30EB\u306E\u6570\u3092\u30AB\u30A6\u30F3\u30C8\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Arguments are arrays or ranges of any type.",cn:"\u53C2\u6570\u662F\u4EFB\u610F\u7C7B\u578B\u7684\u6570\u7EC4\u6216\u8303\u56F4\u3002",ja:"\u5F15\u6570\u306F\u4EFB\u610F\u306E\u578B\u306E\u914D\u5217\u307E\u305F\u306F\u7BC4\u56F2\u3067\u3059\u3002"}},{title:"COUNTBLANK",call:"COUNTBLANK([1, null, 3, 'a', '', 'c'])",result:2,definition:{en:"Counts the number of blank cells.",cn:"\u8BA1\u7B97\u7A7A\u767D\u5355\u5143\u683C\u7684\u6570\u91CF\u3002",ja:"\u7A7A\u767D\u30BB\u30EB\u306E\u6570\u3092\u30AB\u30A6\u30F3\u30C8\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Arguments are arrays or ranges of any type.",cn:"\u53C2\u6570\u662F\u4EFB\u610F\u7C7B\u578B\u7684\u6570\u7EC4\u6216\u8303\u56F4\u3002",ja:"\u5F15\u6570\u306F\u4EFB\u610F\u306E\u578B\u306E\u914D\u5217\u307E\u305F\u306F\u7BC4\u56F2\u3067\u3059\u3002"}},{title:"COUNTIF",call:"COUNTIF(['Caen', 'Melbourne', 'Palo Alto', 'Singapore'], 'a')",result:3,definition:{en:"Counts the number of cells based on a condition.",cn:"\u57FA\u4E8E\u6761\u4EF6\u8BA1\u7B97\u5355\u5143\u683C\u6570\u91CF\u3002",ja:"\u6761\u4EF6\u306B\u57FA\u3065\u3044\u3066\u30BB\u30EB\u306E\u6570\u3092\u30AB\u30A6\u30F3\u30C8\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Arguments are an array of numbers or text and a condition.",cn:"\u53C2\u6570\u662F\u6570\u503C\u6216\u6587\u672C\u6570\u7EC4\u4EE5\u53CA\u6761\u4EF6\u3002",ja:"\u5F15\u6570\u306F\u6570\u5024\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u306E\u914D\u5217\u3068\u6761\u4EF6\u3067\u3059\u3002"}},{title:"COUNTIFS",call:"COUNTIFS([2,4,8,16], [1,2,3,4], '>=2', [1,2,4,8], '<=4')",result:2,definition:{en:"Counts the number of cells based on multiple conditions.",cn:"\u57FA\u4E8E\u591A\u4E2A\u6761\u4EF6\u8BA1\u7B97\u5355\u5143\u683C\u6570\u91CF\u3002",ja:"\u8907\u6570\u306E\u6761\u4EF6\u306B\u57FA\u3065\u3044\u3066\u30BB\u30EB\u306E\u6570\u3092\u30AB\u30A6\u30F3\u30C8\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Arguments are pairs of condition arrays and condition expressions.",cn:"\u53C2\u6570\u662F\u6210\u5BF9\u7684\u6761\u4EF6\u6570\u7EC4\u548C\u6761\u4EF6\u8868\u8FBE\u5F0F\u3002",ja:"\u5F15\u6570\u306F\u6761\u4EF6\u914D\u5217\u3068\u6761\u4EF6\u8868\u73FE\u306E\u30DA\u30A2\u3067\u3059\u3002"}},{title:"COVARIANCEP",call:"COVARIANCEP([3,2,4,5,6], [9,7,12,15,17])",result:5.2,definition:{en:"Calculates the population covariance.",cn:"\u8BA1\u7B97\u603B\u4F53\u534F\u65B9\u5DEE\u3002",ja:"\u6BCD\u96C6\u56E3\u306E\u5171\u5206\u6563\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Arguments are two arrays of numbers representing two datasets.",cn:"\u53C2\u6570\u662F\u4E24\u4E2A\u6570\u503C\u6570\u7EC4\uFF0C\u8868\u793A\u4E24\u4E2A\u6570\u636E\u96C6\u3002",ja:"\u5F15\u6570\u306F2\u3064\u306E\u30C7\u30FC\u30BF\u30BB\u30C3\u30C8\u3092\u8868\u3059\u6570\u5024\u306E\u914D\u5217\u3067\u3059\u3002"}},{title:"COVARIANCES",call:"COVARIANCES([2,4,8], [5,11,12])",result:9.666666666666668,definition:{en:"Calculates the sample covariance.",cn:"\u8BA1\u7B97\u6837\u672C\u534F\u65B9\u5DEE\u3002",ja:"\u6A19\u672C\u306E\u5171\u5206\u6563\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Arguments are two arrays of numbers representing two datasets.",cn:"\u53C2\u6570\u662F\u4E24\u4E2A\u6570\u503C\u6570\u7EC4\uFF0C\u8868\u793A\u4E24\u4E2A\u6570\u636E\u96C6\u3002",ja:"\u5F15\u6570\u306F2\u3064\u306E\u30C7\u30FC\u30BF\u30BB\u30C3\u30C8\u3092\u8868\u3059\u6570\u5024\u306E\u914D\u5217\u3067\u3059\u3002"}},{title:"DEVSQ",call:"DEVSQ([2,4,8,16])",result:115,definition:{en:"Calculates the sum of squares of deviations.",cn:"\u8BA1\u7B97\u504F\u5DEE\u5E73\u65B9\u548C\u3002",ja:"\u504F\u5DEE\u306E\u4E8C\u4E57\u548C\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Arguments are arrays of numbers representing data points.",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\uFF0C\u8868\u793A\u6570\u636E\u70B9\u3002",ja:"\u5F15\u6570\u306F\u30C7\u30FC\u30BF\u30DD\u30A4\u30F3\u30C8\u3092\u8868\u3059\u6570\u5024\u306E\u914D\u5217\u3067\u3059\u3002"}},{title:"EXPONDIST",call:"EXPONDIST(0.2, 10, true)",result:.8646647167633873,definition:{en:"Calculates the exponential distribution.",cn:"\u8BA1\u7B97\u6307\u6570\u5206\u5E03\u3002",ja:"\u6307\u6570\u5206\u5E03\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Parameters are value, \u03BB, and cumulative flag.",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u503C\u3001\u03BB\u3001\u7D2F\u79EF\u6807\u5FD7\u3002",ja:"\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u9806\u306B\u5024\u3001\u03BB\u3001\u304A\u3088\u3073\u7D2F\u7A4D\u30D5\u30E9\u30B0\u3067\u3059\u3002"}},{title:"FDIST",call:"FDIST(15.2069, 6, 4, false)",result:.0012237917087831735,definition:{en:"Calculates the F probability distribution.",cn:"\u8BA1\u7B97F\u6982\u7387\u5206\u5E03\u3002",ja:"F\u78BA\u7387\u5206\u5E03\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Parameters are value, degrees of freedom 1, degrees of freedom 2, and cumulative flag.",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u503C\u3001\u81EA\u7531\u5EA61\u3001\u81EA\u7531\u5EA62\u3001\u7D2F\u79EF\u6807\u5FD7\u3002",ja:"\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u9806\u306B\u5024\u3001\u81EA\u7531\u5EA61\u3001\u81EA\u7531\u5EA62\u3001\u304A\u3088\u3073\u7D2F\u7A4D\u30D5\u30E9\u30B0\u3067\u3059\u3002"}},{title:"FINV",call:"FINV(0.01, 6, 4)",result:.10930991412457851,definition:{en:"Calculates the inverse of the F probability distribution.",cn:"\u8BA1\u7B97F\u6982\u7387\u5206\u5E03\u7684\u53CD\u51FD\u6570\u3002",ja:"F\u78BA\u7387\u5206\u5E03\u306E\u9006\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Parameters are probability, degrees of freedom 1, and degrees of freedom 2.",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6982\u7387\u3001\u81EA\u7531\u5EA61\u3001\u81EA\u7531\u5EA62\u3002",ja:"\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u9806\u306B\u78BA\u7387\u3001\u81EA\u7531\u5EA61\u3001\u304A\u3088\u3073\u81EA\u7531\u5EA62\u3067\u3059\u3002"}},{title:"FISHER",call:"FISHER(0.75)",result:.9729550745276566,definition:{en:"Calculates the Fisher transformation.",cn:"\u8BA1\u7B97\u8D39\u820D\u5C14\u53D8\u6362\u3002",ja:"\u30D5\u30A3\u30C3\u30B7\u30E3\u30FC\u5909\u63DB\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Parameter is a number representing the correlation coefficient.",cn:"\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u503C\uFF0C\u8868\u793A\u76F8\u5173\u7CFB\u6570\u3002",ja:"\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u76F8\u95A2\u4FC2\u6570\u3092\u8868\u3059\u6570\u5024\u3067\u3059\u3002"}},{title:"FISHERINV",call:"FISHERINV(0.9729550745276566)",result:.75,definition:{en:"Calculates the inverse of the Fisher transformation.",cn:"\u8BA1\u7B97\u8D39\u820D\u5C14\u9006\u53D8\u6362\u3002",ja:"\u30D5\u30A3\u30C3\u30B7\u30E3\u30FC\u9006\u5909\u63DB\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Parameter is a number representing the result of the Fisher transformation.",cn:"\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u503C\uFF0C\u8868\u793A\u8D39\u820D\u5C14\u53D8\u6362\u7684\u7ED3\u679C\u3002",ja:"\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u30D5\u30A3\u30C3\u30B7\u30E3\u30FC\u5909\u63DB\u306E\u7D50\u679C\u3092\u8868\u3059\u6570\u5024\u3067\u3059\u3002"}},{title:"FORECAST",call:"FORECAST(30, [6,7,9,15,21], [20,28,31,38,40])",result:10.607253086419755,definition:{en:"Predicts a y-value for a new x-value using known x and y values.",cn:"\u6839\u636E\u5DF2\u77E5\u7684x\u548Cy\u503C\u9884\u6D4B\u65B0x\u503C\u7684y\u503C\u3002",ja:"\u65E2\u77E5\u306Ex\u3068y\u306E\u5024\u3092\u4F7F\u7528\u3057\u3066\u3001\u65B0\u3057\u3044x\u306E\u5024\u306B\u5BFE\u3059\u308By\u306E\u5024\u3092\u4E88\u6E2C\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"new x-value, array of known y-values, array of known x-values",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u65B0x\u503C\u3001\u5DF2\u77E5y\u503C\u6570\u7EC4\u3001\u5DF2\u77E5x\u503C\u6570\u7EC4\u3002",ja:"\u65B0\u3057\u3044x\u306E\u5024\u3001\u65E2\u77E5\u306Ey\u306E\u5024\u306E\u914D\u5217\u3001\u65E2\u77E5\u306Ex\u306E\u5024\u306E\u914D\u5217"}},{title:"FREQUENCY",call:"FREQUENCY([79,85,78,85,50,81,95,88,97], [70,79,89])",result:"1,2,4,2",definition:{en:"Calculates the frequency distribution.",cn:"\u8BA1\u7B97\u9891\u6570\u5206\u5E03\u3002",ja:"\u983B\u5EA6\u5206\u5E03\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of data, array of bin boundaries",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6570\u636E\u6570\u7EC4\u3001\u5206\u7EC4\u8FB9\u754C\u6570\u7EC4\u3002",ja:"\u30C7\u30FC\u30BF\u306E\u914D\u5217\u3001\u30D3\u30F3\u5883\u754C\u306E\u914D\u5217"}},{title:"GAMMA",call:"GAMMA(2.5)",result:1.3293403919101043,definition:{en:"Calculates the gamma function value.",cn:"\u8BA1\u7B97\u4F3D\u739B\u51FD\u6570\u503C\u3002",ja:"\u30AC\u30F3\u30DE\u95A2\u6570\u306E\u5024\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"a positive number",cn:"\u53C2\u6570\u662F\u4E00\u4E2A\u6B63\u6570\u3002",ja:"\u6B63\u306E\u6570"}},{title:"GAMMALN",call:"GAMMALN(10)",result:12.801827480081961,definition:{en:"Calculates the natural logarithm of the gamma function.",cn:"\u8BA1\u7B97\u4F3D\u739B\u51FD\u6570\u7684\u81EA\u7136\u5BF9\u6570\u3002",ja:"\u30AC\u30F3\u30DE\u95A2\u6570\u306E\u81EA\u7136\u5BFE\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"a positive number",cn:"\u53C2\u6570\u662F\u4E00\u4E2A\u6B63\u6570\u3002",ja:"\u6B63\u306E\u6570"}},{title:"GAUSS",call:"GAUSS(2)",result:.4772498680518208,definition:{en:"Calculates the probability in the standard normal distribution.",cn:"\u8BA1\u7B97\u6807\u51C6\u6B63\u6001\u5206\u5E03\u4E0B\u7684\u6982\u7387\u3002",ja:"\u6A19\u6E96\u6B63\u898F\u5206\u5E03\u306B\u304A\u3051\u308B\u78BA\u7387\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"a number representing the z-score",cn:"\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u503C\uFF0C\u8868\u793Az\u5206\u6570\u3002",ja:"z\u30B9\u30B3\u30A2\u3092\u8868\u3059\u6570"}},{title:"GEOMEAN",call:"GEOMEAN([2,4], [8,16])",result:5.656854249492381,definition:{en:"Calculates the geometric mean.",cn:"\u8BA1\u7B97\u51E0\u4F55\u5E73\u5747\u503C\u3002",ja:"\u5E7E\u4F55\u5E73\u5747\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers representing data points",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\uFF0C\u8868\u793A\u6570\u636E\u70B9\u3002",ja:"\u30C7\u30FC\u30BF\u30DD\u30A4\u30F3\u30C8\u3092\u8868\u3059\u6570\u5024\u306E\u914D\u5217"}},{title:"GROWTH",call:"GROWTH([2,4,8,16], [1,2,3,4], [5])",result:32.00000000000003,definition:{en:"Predicts exponential growth based on known data.",cn:"\u6839\u636E\u5DF2\u77E5\u6570\u636E\u9884\u6D4B\u6307\u6570\u589E\u957F\u503C\u3002",ja:"\u65E2\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u57FA\u3065\u3044\u3066\u6307\u6570\u6210\u9577\u3092\u4E88\u6E2C\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of known y-values, array of known x-values, array of new x-values",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u5DF2\u77E5y\u503C\u6570\u7EC4\u3001\u5DF2\u77E5x\u503C\u6570\u7EC4\u3001\u65B0x\u503C\u6570\u7EC4\u3002",ja:"\u65E2\u77E5\u306Ey\u306E\u5024\u306E\u914D\u5217\u3001\u65E2\u77E5\u306Ex\u306E\u5024\u306E\u914D\u5217\u3001\u65B0\u3057\u3044x\u306E\u5024\u306E\u914D\u5217"}},{title:"HARMEAN",call:"HARMEAN([2,4], [8,16])",result:4.266666666666667,definition:{en:"Calculates the harmonic mean.",cn:"\u8BA1\u7B97\u8C03\u548C\u5E73\u5747\u503C\u3002",ja:"\u8ABF\u548C\u5E73\u5747\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers representing data points",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\uFF0C\u8868\u793A\u6570\u636E\u70B9\u3002",ja:"\u30C7\u30FC\u30BF\u30DD\u30A4\u30F3\u30C8\u3092\u8868\u3059\u6570\u5024\u306E\u914D\u5217"}},{title:"HYPGEOMDIST",call:"HYPGEOMDIST(1, 4, 8, 20, false)",result:.3632610939112487,definition:{en:"Calculates the hypergeometric distribution.",cn:"\u8BA1\u7B97\u8D85\u51E0\u4F55\u5206\u5E03\u3002",ja:"\u8D85\u5E7E\u4F55\u5206\u5E03\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"number of successes in sample, sample size, number of successes in population, population size, cumulative flag",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6837\u672C\u4E2D\u6210\u529F\u7684\u6B21\u6570\u3001\u6837\u672C\u5927\u5C0F\u3001\u603B\u4F53\u4E2D\u6210\u529F\u7684\u6B21\u6570\u3001\u603B\u4F53\u5927\u5C0F\u3001\u7D2F\u79EF\u6807\u5FD7\u3002",ja:"\u30B5\u30F3\u30D7\u30EB\u4E2D\u306E\u6210\u529F\u56DE\u6570\u3001\u30B5\u30F3\u30D7\u30EB\u30B5\u30A4\u30BA\u3001\u6BCD\u96C6\u56E3\u4E2D\u306E\u6210\u529F\u56DE\u6570\u3001\u6BCD\u96C6\u56E3\u30B5\u30A4\u30BA\u3001\u7D2F\u7A4D\u30D5\u30E9\u30B0"}},{title:"INTERCEPT",call:"INTERCEPT([2,3,9,1,8], [6,5,11,7,5])",result:.04838709677419217,definition:{en:"Calculates the intercept of the linear regression.",cn:"\u8BA1\u7B97\u7EBF\u6027\u56DE\u5F52\u7684\u622A\u8DDD\u3002",ja:"\u7DDA\u5F62\u56DE\u5E30\u306E\u5207\u7247\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of known y-values, array of known x-values",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u5DF2\u77E5y\u503C\u6570\u7EC4\u3001\u5DF2\u77E5x\u503C\u6570\u7EC4\u3002",ja:"\u65E2\u77E5\u306Ey\u306E\u5024\u306E\u914D\u5217\u3001\u65E2\u77E5\u306Ex\u306E\u5024\u306E\u914D\u5217"}},{title:"KURT",call:"KURT([3,4,5,2,3,4,5,6,4,7])",result:-.15179963720841627,definition:{en:"Calculates the kurtosis.",cn:"\u8BA1\u7B97\u5CF0\u5EA6\u3002",ja:"\u5C16\u5EA6\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers representing data points",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\uFF0C\u8868\u793A\u6570\u636E\u70B9\u3002",ja:"\u30C7\u30FC\u30BF\u30DD\u30A4\u30F3\u30C8\u3092\u8868\u3059\u6570\u5024\u306E\u914D\u5217"}},{title:"LARGE",call:"LARGE([3,5,3,5,4,4,2,4,6,7], 3)",result:5,definition:{en:"Returns the k-th largest value.",cn:"\u8FD4\u56DE\u7B2Ck\u5927\u7684\u503C\u3002",ja:"k\u756A\u76EE\u306B\u5927\u304D\u306A\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, k value",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6570\u503C\u6570\u7EC4\u3001k\u503C\u3002",ja:"\u6570\u5024\u306E\u914D\u5217\u3001k\u306E\u5024"}},{title:"LINEST",call:"LINEST([1,9,5,7], [0,4,2,3], true, true)",result:"2,1",definition:{en:"Performs linear regression analysis.",cn:"\u6267\u884C\u7EBF\u6027\u56DE\u5F52\u5206\u6790\u3002",ja:"\u7DDA\u5F62\u56DE\u5E30\u5206\u6790\u3092\u884C\u3044\u307E\u3059\u3002"},parameterDefinitions:{en:"array of known y-values, array of known x-values, whether to return additional statistics, whether to return more statistics",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u5DF2\u77E5y\u503C\u6570\u7EC4\u3001\u5DF2\u77E5x\u503C\u6570\u7EC4\u3001\u662F\u5426\u8FD4\u56DE\u9644\u52A0\u7EDF\u8BA1\u4FE1\u606F\u3001\u662F\u5426\u8FD4\u56DE\u66F4\u591A\u7EDF\u8BA1\u4FE1\u606F\u3002",ja:"\u65E2\u77E5\u306Ey\u306E\u5024\u306E\u914D\u5217\u3001\u65E2\u77E5\u306Ex\u306E\u5024\u306E\u914D\u5217\u3001\u8FFD\u52A0\u306E\u7D71\u8A08\u60C5\u5831\u3092\u8FD4\u3059\u304B\u3069\u3046\u304B\u3001\u3088\u308A\u591A\u304F\u306E\u7D71\u8A08\u60C5\u5831\u3092\u8FD4\u3059\u304B\u3069\u3046\u304B"}},{title:"LOGNORMDIST",call:"LOGNORMDIST(4, 3.5, 1.2, true)",result:.0390835557068005,definition:{en:"Calculates the lognormal distribution.",cn:"\u8BA1\u7B97\u5BF9\u6570\u6B63\u6001\u5206\u5E03\u3002",ja:"\u5BFE\u6570\u6B63\u898F\u5206\u5E03\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"value, mean, standard deviation, cumulative flag",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u503C\u3001\u5E73\u5747\u503C\u3001\u6807\u51C6\u5DEE\u3001\u7D2F\u79EF\u6807\u5FD7\u3002",ja:"\u5024\u3001\u5E73\u5747\u3001\u6A19\u6E96\u504F\u5DEE\u3001\u7D2F\u7A4D\u30D5\u30E9\u30B0"}},{title:"LOGNORMINV",call:"LOGNORMINV(0.0390835557068005, 3.5, 1.2, true)",result:4.000000000000001,definition:{en:"Calculates the inverse of the lognormal distribution.",cn:"\u8BA1\u7B97\u5BF9\u6570\u6B63\u6001\u5206\u5E03\u7684\u53CD\u51FD\u6570\u3002",ja:"\u5BFE\u6570\u6B63\u898F\u5206\u5E03\u306E\u9006\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"probability, mean, standard deviation, cumulative flag",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6982\u7387\u3001\u5E73\u5747\u503C\u3001\u6807\u51C6\u5DEE\u3001\u7D2F\u79EF\u6807\u5FD7\u3002",ja:"\u78BA\u7387\u3001\u5E73\u5747\u3001\u6A19\u6E96\u504F\u5DEE\u3001\u7D2F\u7A4D\u30D5\u30E9\u30B0"}},{title:"MAX",call:"MAX([0.1,0.2], [0.4,0.8], [true, false])",result:.8,definition:{en:"Returns the maximum value.",cn:"\u8FD4\u56DE\u6700\u5927\u503C\u3002",ja:"\u6700\u5927\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\u3002",ja:"\u6570\u5024\u306E\u914D\u5217"}},{title:"MAXA",call:"MAXA([0.1,0.2], [0.4,0.8], [true, false])",result:1,definition:{en:"Returns the maximum value including text and logical values.",cn:"\u8FD4\u56DE\u5305\u62EC\u6587\u672C\u548C\u903B\u8F91\u503C\u7684\u6700\u5927\u503C\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u3068\u8AD6\u7406\u5024\u3092\u542B\u3080\u6700\u5927\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, text, or logical values",cn:"\u53C2\u6570\u662F\u6570\u503C\u3001\u6587\u672C\u6216\u903B\u8F91\u503C\u7684\u6570\u7EC4\u3002",ja:"\u6570\u5024\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u307E\u305F\u306F\u8AD6\u7406\u5024\u306E\u914D\u5217"}},{title:"MEDIAN",call:"MEDIAN([1,2,3], [4,5,6])",result:3.5,definition:{en:"Returns the median.",cn:"\u8FD4\u56DE\u4E2D\u4F4D\u6570\u3002",ja:"\u4E2D\u592E\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\u3002",ja:"\u6570\u5024\u306E\u914D\u5217"}},{title:"MIN",call:"MIN([0.1,0.2], [0.4,0.8], [true, false])",result:.1,definition:{en:"Returns the minimum value.",cn:"\u8FD4\u56DE\u6700\u5C0F\u503C\u3002",ja:"\u6700\u5C0F\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\u3002",ja:"\u6570\u5024\u306E\u914D\u5217"}},{title:"MINA",call:"MINA([0.1,0.2], [0.4,0.8], [true, false])",result:0,definition:{en:"Returns the minimum value including text and logical values.",cn:"\u8FD4\u56DE\u5305\u62EC\u6587\u672C\u548C\u903B\u8F91\u503C\u7684\u6700\u5C0F\u503C\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u3068\u8AD6\u7406\u5024\u3092\u542B\u3080\u6700\u5C0F\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, text, or logical values",cn:"\u53C2\u6570\u662F\u6570\u503C\u3001\u6587\u672C\u6216\u903B\u8F91\u503C\u7684\u6570\u7EC4\u3002",ja:"\u6570\u5024\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u307E\u305F\u306F\u8AD6\u7406\u5024\u306E\u914D\u5217"}},{title:"MODEMULT",call:"MODEMULT([1,2,3,4,3,2,1,2,3])",result:"2,3",definition:{en:"Returns an array of the most frequent values.",cn:"\u8FD4\u56DE\u51FA\u73B0\u9891\u7387\u6700\u9AD8\u7684\u503C\u6570\u7EC4\u3002",ja:"\u6700\u3082\u983B\u7E41\u306B\u73FE\u308C\u308B\u5024\u306E\u914D\u5217\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\u3002",ja:"\u6570\u5024\u306E\u914D\u5217"}},{title:"MODESNGL",call:"MODESNGL([1,2,3,4,3,2,1,2,3])",result:2,definition:{en:"Returns the single most frequent value.",cn:"\u8FD4\u56DE\u6700\u5E38\u51FA\u73B0\u7684\u5355\u4E2A\u503C\u3002",ja:"\u6700\u3082\u983B\u7E41\u306B\u73FE\u308C\u308B\u5358\u4E00\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\u3002",ja:"\u6570\u5024\u306E\u914D\u5217"}},{title:"NORMDIST",call:"NORMDIST(42, 40, 1.5, true)",result:.9087887802741321,definition:{en:"Calculates the normal distribution.",cn:"\u8BA1\u7B97\u6B63\u6001\u5206\u5E03\u3002",ja:"\u6B63\u898F\u5206\u5E03\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"value, mean, standard deviation, cumulative flag",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u503C\u3001\u5E73\u5747\u503C\u3001\u6807\u51C6\u5DEE\u3001\u7D2F\u79EF\u6807\u5FD7\u3002",ja:"\u5024\u3001\u5E73\u5747\u3001\u6A19\u6E96\u504F\u5DEE\u3001\u7D2F\u7A4D\u30D5\u30E9\u30B0"}},{title:"NORMINV",call:"NORMINV(0.9087887802741321, 40, 1.5)",result:42,definition:{en:"Calculates the inverse of the normal distribution.",cn:"\u8BA1\u7B97\u6B63\u6001\u5206\u5E03\u7684\u53CD\u51FD\u6570\u3002",ja:"\u6B63\u898F\u5206\u5E03\u306E\u9006\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"probability, mean, standard deviation",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6982\u7387\u3001\u5E73\u5747\u503C\u3001\u6807\u51C6\u5DEE\u3002",ja:"\u78BA\u7387\u3001\u5E73\u5747\u3001\u6A19\u6E96\u504F\u5DEE"}},{title:"NORMSDIST",call:"NORMSDIST(1, true)",result:.8413447460685429,definition:{en:"Calculates the standard normal distribution.",cn:"\u8BA1\u7B97\u6807\u51C6\u6B63\u6001\u5206\u5E03\u3002",ja:"\u6A19\u6E96\u6B63\u898F\u5206\u5E03\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"a number representing the z-score",cn:"\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u503C\uFF0C\u8868\u793Az\u5206\u6570\u3002",ja:"z\u30B9\u30B3\u30A2\u3092\u8868\u3059\u6570"}},{title:"NORMSINV",call:"NORMSINV(0.8413447460685429)",result:1.0000000000000002,definition:{en:"Calculates the inverse of the standard normal distribution.",cn:"\u8BA1\u7B97\u6807\u51C6\u6B63\u6001\u5206\u5E03\u7684\u53CD\u51FD\u6570\u3002",ja:"\u6A19\u6E96\u6B63\u898F\u5206\u5E03\u306E\u9006\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"a probability value",cn:"\u53C2\u6570\u662F\u4E00\u4E2A\u6982\u7387\u503C\u3002",ja:"\u78BA\u7387\u5024"}},{title:"PEARSON",call:"PEARSON([9,7,5,3,1], [10,6,1,5,3])",result:.6993786061802354,definition:{en:"Calculates the Pearson product-moment correlation coefficient.",cn:"\u8BA1\u7B97\u76AE\u5C14\u900A\u4E58\u79EF\u77E9\u76F8\u5173\u7CFB\u6570\u3002",ja:"\u30D4\u30A2\u30BD\u30F3\u7A4D\u7387\u76F8\u95A2\u4FC2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"two arrays of numbers representing two datasets",cn:"\u53C2\u6570\u662F\u4E24\u4E2A\u6570\u503C\u6570\u7EC4\uFF0C\u8868\u793A\u4E24\u4E2A\u6570\u636E\u96C6\u3002",ja:"2\u3064\u306E\u30C7\u30FC\u30BF\u30BB\u30C3\u30C8\u3092\u8868\u3059\u6570\u5024\u306E\u914D\u5217"}},{title:"PERCENTILEEXC",call:"PERCENTILEEXC([1,2,3,4], 0.3)",result:1.5,definition:{en:"Calculates the percentile exclusive.",cn:"\u8BA1\u7B97\u6392\u9664\u767E\u5206\u4F4D\u6570\u3002",ja:"\u30D1\u30FC\u30BB\u30F3\u30BF\u30A4\u30EB\u3092\u9664\u5916\u3057\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, k value",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6570\u503C\u6570\u7EC4\u3001k\u503C\u3002",ja:"\u6570\u5024\u306E\u914D\u5217\u3001k\u306E\u5024"}},{title:"PERCENTILEINC",call:"PERCENTILEINC([1,2,3,4], 0.3)",result:1.9,definition:{en:"Calculates the percentile inclusive.",cn:"\u8BA1\u7B97\u5305\u542B\u767E\u5206\u4F4D\u6570\u3002",ja:"\u30D1\u30FC\u30BB\u30F3\u30BF\u30A4\u30EB\u3092\u542B\u3081\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, k value",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6570\u503C\u6570\u7EC4\u3001k\u503C\u3002",ja:"\u6570\u5024\u306E\u914D\u5217\u3001k\u306E\u5024"}},{title:"PERCENTRANKEXC",call:"PERCENTRANKEXC([1,2,3,4], 2, 2)",result:.4,definition:{en:"Calculates the percentage rank exclusive.",cn:"\u8BA1\u7B97\u6392\u9664\u767E\u5206\u6BD4\u6392\u540D\u3002",ja:"\u30D1\u30FC\u30BB\u30F3\u30C8\u30E9\u30F3\u30AF\u3092\u9664\u5916\u3057\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, x value, significance (optional)",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6570\u503C\u6570\u7EC4\u3001x\u503C\u3001\u663E\u8457\u6027\uFF08\u53EF\u9009\uFF09\u3002",ja:"\u6570\u5024\u306E\u914D\u5217\u3001x\u306E\u5024\u3001\u6709\u610F\u6C34\u6E96\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09"}},{title:"PERCENTRANKINC",call:"PERCENTRANKINC([1,2,3,4], 2, 2)",result:.33,definition:{en:"Calculates the percentage rank inclusive.",cn:"\u8BA1\u7B97\u5305\u542B\u767E\u5206\u6BD4\u6392\u540D\u3002",ja:"\u30D1\u30FC\u30BB\u30F3\u30C8\u30E9\u30F3\u30AF\u3092\u542B\u3081\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, x value, significance (optional)",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6570\u503C\u6570\u7EC4\u3001x\u503C\u3001\u663E\u8457\u6027\uFF08\u53EF\u9009\uFF09\u3002",ja:"\u6570\u5024\u306E\u914D\u5217\u3001x\u306E\u5024\u3001\u6709\u610F\u6C34\u6E96\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09"}},{title:"PERMUT",call:"PERMUT(100, 3)",result:970200,definition:{en:"Calculates the number of permutations.",cn:"\u8BA1\u7B97\u6392\u5217\u6570\u3002",ja:"\u9806\u5217\u306E\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"total n, chosen k",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u603B\u6570n\u3001\u9009\u62E9\u6570k\u3002",ja:"\u5168\u4F53n\u3001\u9078\u629Ek"}},{title:"PERMUTATIONA",call:"PERMUTATIONA(4, 3)",result:64,definition:{en:"Calculates the number of permutations with repetition.",cn:"\u8BA1\u7B97\u5141\u8BB8\u91CD\u590D\u7684\u6392\u5217\u6570\u3002",ja:"\u7E70\u308A\u8FD4\u3057\u3092\u8A31\u3057\u305F\u9806\u5217\u306E\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"total n, chosen k",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u603B\u6570n\u3001\u9009\u62E9\u6570k\u3002",ja:"\u5168\u4F53n\u3001\u9078\u629Ek"}},{title:"PHI",call:"PHI(0.75)",result:.30113743215480443,definition:{en:"Calculates the density function for the standard normal distribution.",cn:"\u8BA1\u7B97\u6807\u51C6\u6B63\u6001\u5206\u5E03\u7684\u5BC6\u5EA6\u51FD\u6570\u3002",ja:"\u6A19\u6E96\u6B63\u898F\u5206\u5E03\u306E\u5BC6\u5EA6\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"a number representing the z-score",cn:"\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u503C\uFF0C\u8868\u793Az\u5206\u6570\u3002",ja:"z\u30B9\u30B3\u30A2\u3092\u8868\u3059\u6570"}},{title:"POISSONDIST",call:"POISSONDIST(2, 5, true)",result:.12465201948308113,definition:{en:"Calculates the Poisson distribution.",cn:"\u8BA1\u7B97\u6CCA\u677E\u5206\u5E03\u3002",ja:"\u30DD\u30A2\u30BD\u30F3\u5206\u5E03\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"number of events, mean, cumulative flag",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u4E8B\u4EF6\u6B21\u6570\u3001\u5E73\u5747\u503C\u3001\u7D2F\u79EF\u6807\u5FD7\u3002",ja:"\u4E8B\u8C61\u306E\u56DE\u6570\u3001\u5E73\u5747\u3001\u7D2F\u7A4D\u30D5\u30E9\u30B0"}},{title:"PROB",call:"PROB([1,2,3,4], [0.1,0.2,0.2,0.1], 2, 3)",result:.4,definition:{en:"Calculates the sum of probabilities.",cn:"\u8BA1\u7B97\u6982\u7387\u4E4B\u548C\u3002",ja:"\u78BA\u7387\u306E\u5408\u8A08\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, array of probabilities, lower limit, upper limit",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6570\u503C\u6570\u7EC4\u3001\u6982\u7387\u6570\u7EC4\u3001\u4E0B\u9650\u3001\u4E0A\u9650\u3002",ja:"\u6570\u5024\u306E\u914D\u5217\u3001\u78BA\u7387\u306E\u914D\u5217\u3001\u4E0B\u9650\u3001\u4E0A\u9650"}},{title:"QUARTILEEXC",call:"QUARTILEEXC([1,2,3,4], 1)",result:1.25,definition:{en:"Calculates the quartile exclusive.",cn:"\u8BA1\u7B97\u6392\u9664\u56DB\u5206\u4F4D\u6570\u3002",ja:"\u56DB\u5206\u4F4D\u6570\u3092\u9664\u5916\u3057\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, quart value",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6570\u503C\u6570\u7EC4\u3001quart\u503C\u3002",ja:"\u6570\u5024\u306E\u914D\u5217\u3001quart\u306E\u5024"}},{title:"QUARTILEINC",call:"QUARTILEINC([1,2,3,4], 1)",result:1.75,definition:{en:"Calculates the quartile inclusive.",cn:"\u8BA1\u7B97\u5305\u542B\u56DB\u5206\u4F4D\u6570\u3002",ja:"\u56DB\u5206\u4F4D\u6570\u3092\u542B\u3081\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, quart value",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6570\u503C\u6570\u7EC4\u3001quart\u503C\u3002",ja:"\u6570\u5024\u306E\u914D\u5217\u3001quart\u306E\u5024"}},{title:"RANKAVG",call:"RANKAVG(4, [2,4,4,8,8,16], false)",result:4.5,definition:{en:"Calculates the average rank.",cn:"\u8BA1\u7B97\u5E73\u5747\u6392\u540D\u3002",ja:"\u5E73\u5747\u30E9\u30F3\u30AF\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"value, array of numbers, order (ascending/descending)",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6570\u503C\u3001\u6570\u503C\u6570\u7EC4\u3001\u6392\u5E8F\u65B9\u5F0F\uFF08\u5347\u5E8F/\u964D\u5E8F\uFF09\u3002",ja:"\u5024\u3001\u6570\u5024\u306E\u914D\u5217\u3001\u9806\u5E8F\uFF08\u6607\u9806/\u964D\u9806\uFF09"}},{title:"RANKEQ",call:"RANKEQ(4, [2,4,4,8,8,16], false)",result:4,definition:{en:"Calculates the rank equal to a specified value.",cn:"\u8BA1\u7B97\u7B49\u4E8E\u6307\u5B9A\u503C\u7684\u6392\u540D\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u5024\u306B\u7B49\u3057\u3044\u30E9\u30F3\u30AF\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"value, array of numbers, order (ascending/descending)",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6570\u503C\u3001\u6570\u503C\u6570\u7EC4\u3001\u6392\u5E8F\u65B9\u5F0F\uFF08\u5347\u5E8F/\u964D\u5E8F\uFF09\u3002",ja:"\u5024\u3001\u6570\u5024\u306E\u914D\u5217\u3001\u9806\u5E8F\uFF08\u6607\u9806/\u964D\u9806\uFF09"}},{title:"RSQ",call:"RSQ([9,7,5,3,1], [10,6,1,5,3])",result:.4891304347826088,definition:{en:"Calculates the coefficient of determination.",cn:"\u8BA1\u7B97\u51B3\u5B9A\u7CFB\u6570\u3002",ja:"\u6C7A\u5B9A\u4FC2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"two arrays of numbers representing two datasets",cn:"\u53C2\u6570\u662F\u4E24\u4E2A\u6570\u503C\u6570\u7EC4\uFF0C\u8868\u793A\u4E24\u4E2A\u6570\u636E\u96C6\u3002",ja:"2\u3064\u306E\u30C7\u30FC\u30BF\u30BB\u30C3\u30C8\u3092\u8868\u3059\u6570\u5024\u306E\u914D\u5217"}},{title:"SKEW",call:"SKEW([3,4,5,2,3,4,5,6,4,7])",result:.3595430714067974,definition:{en:"Calculates the skewness.",cn:"\u8BA1\u7B97\u504F\u5EA6\u3002",ja:"\u6B6A\u5EA6\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers representing data points",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\uFF0C\u8868\u793A\u6570\u636E\u70B9\u3002",ja:"\u30C7\u30FC\u30BF\u30DD\u30A4\u30F3\u30C8\u3092\u8868\u3059\u6570\u5024\u306E\u914D\u5217"}},{title:"SKEWP",call:"SKEWP([3,4,5,2,3,4,5,6,4,7])",result:.303193339354144,definition:{en:"Calculates the skewness based on a population.",cn:"\u8BA1\u7B97\u57FA\u4E8E\u603B\u4F53\u7684\u504F\u5EA6\u3002",ja:"\u6BCD\u96C6\u56E3\u306B\u57FA\u3065\u304F\u6B6A\u5EA6\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers representing data points",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\uFF0C\u8868\u793A\u6570\u636E\u70B9\u3002",ja:"\u30C7\u30FC\u30BF\u30DD\u30A4\u30F3\u30C8\u3092\u8868\u3059\u6570\u5024\u306E\u914D\u5217"}},{title:"SLOPE",call:"SLOPE([1,9,5,7], [0,4,2,3])",result:2,definition:{en:"Calculates the slope of the linear regression.",cn:"\u8BA1\u7B97\u7EBF\u6027\u56DE\u5F52\u7684\u659C\u7387\u3002",ja:"\u7DDA\u5F62\u56DE\u5E30\u306E\u50BE\u304D\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of known y-values, array of known x-values",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u5DF2\u77E5y\u503C\u6570\u7EC4\u3001\u5DF2\u77E5x\u503C\u6570\u7EC4\u3002",ja:"\u65E2\u77E5\u306Ey\u306E\u5024\u306E\u914D\u5217\u3001\u65E2\u77E5\u306Ex\u306E\u5024\u306E\u914D\u5217"}},{title:"SMALL",call:"SMALL([3,5,3,5,4,4,2,4,6,7], 3)",result:3,definition:{en:"Returns the k-th smallest value.",cn:"\u8FD4\u56DE\u7B2Ck\u5C0F\u7684\u503C\u3002",ja:"k\u756A\u76EE\u306B\u5C0F\u3055\u3044\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, k value",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6570\u503C\u6570\u7EC4\u3001k\u503C\u3002",ja:"\u6570\u5024\u306E\u914D\u5217\u3001k\u306E\u5024"}},{title:"STANDARDIZE",call:"STANDARDIZE(42, 40, 1.5)",result:1.3333333333333333,definition:{en:"Standardizes a value to a z-score.",cn:"\u5C06\u503C\u6807\u51C6\u5316\u4E3Az\u5206\u6570\u3002",ja:"\u5024\u3092z\u30B9\u30B3\u30A2\u306B\u6A19\u6E96\u5316\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"value, mean, standard deviation",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u503C\u3001\u5E73\u5747\u503C\u3001\u6807\u51C6\u5DEE\u3002",ja:"\u5024\u3001\u5E73\u5747\u3001\u6A19\u6E96\u504F\u5DEE"}},{title:"STDEVA",call:"STDEVA([2,4], [8,16], [true, false])",result:6.013872850889572,definition:{en:"Calculates the standard deviation including text and logical values.",cn:"\u8BA1\u7B97\u5305\u542B\u6587\u672C\u548C\u903B\u8F91\u503C\u7684\u6807\u51C6\u5DEE\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u3068\u8AD6\u7406\u5024\u3092\u542B\u3080\u6A19\u6E96\u504F\u5DEE\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, text, or logical values",cn:"\u53C2\u6570\u662F\u6570\u503C\u3001\u6587\u672C\u6216\u903B\u8F91\u503C\u7684\u6570\u7EC4\u3002",ja:"\u6570\u5024\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u307E\u305F\u306F\u8AD6\u7406\u5024\u306E\u914D\u5217"}},{title:"STDEVP",call:"STDEVP([2,4], [8,16], [true, false])",result:5.361902647381804,definition:{en:"Calculates the standard deviation of a population.",cn:"\u8BA1\u7B97\u603B\u4F53\u6807\u51C6\u5DEE\u3002",ja:"\u6BCD\u96C6\u56E3\u306E\u6A19\u6E96\u504F\u5DEE\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\u3002",ja:"\u6570\u5024\u306E\u914D\u5217"}},{title:"STDEVPA",call:"STDEVPA([2,4], [8,16], [true, false])",result:5.489889697333535,definition:{en:"Calculates the standard deviation of a population including text and logical values.",cn:"\u8BA1\u7B97\u57FA\u4E8E\u603B\u4F53\u5E76\u5305\u542B\u6587\u672C\u548C\u903B\u8F91\u503C\u7684\u6807\u51C6\u5DEE\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u3068\u8AD6\u7406\u5024\u3092\u542B\u3080\u6BCD\u96C6\u56E3\u306E\u6A19\u6E96\u504F\u5DEE\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, text, or logical values",cn:"\u53C2\u6570\u662F\u6570\u503C\u3001\u6587\u672C\u6216\u903B\u8F91\u503C\u7684\u6570\u7EC4\u3002",ja:"\u6570\u5024\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u307E\u305F\u306F\u8AD6\u7406\u5024\u306E\u914D\u5217"}},{title:"STDEVS",call:"STDEVS([2,4], [8,16], [true, false])",result:6.191391873668904,definition:{en:"Calculates the sample standard deviation.",cn:"\u8BA1\u7B97\u6837\u672C\u6807\u51C6\u5DEE\u3002",ja:"\u6A19\u672C\u306E\u6A19\u6E96\u504F\u5DEE\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\u3002",ja:"\u6570\u5024\u306E\u914D\u5217"}},{title:"STEYX",call:"STEYX([2,3,9,1,8,7,5], [6,5,11,7,5,4,4])",result:3.305718950210041,definition:{en:"Calculates the standard error of the predicted value.",cn:"\u8BA1\u7B97\u9884\u6D4B\u503C\u7684\u6807\u51C6\u8BEF\u5DEE\u3002",ja:"\u4E88\u6E2C\u5024\u306E\u6A19\u6E96\u8AA4\u5DEE\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of known y-values, array of known x-values",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u5DF2\u77E5y\u503C\u6570\u7EC4\u3001\u5DF2\u77E5x\u503C\u6570\u7EC4\u3002",ja:"\u65E2\u77E5\u306Ey\u306E\u5024\u306E\u914D\u5217\u3001\u65E2\u77E5\u306Ex\u306E\u5024\u306E\u914D\u5217"}},{title:"TINV",call:"TINV(0.9946953263673741, 1)",result:59.99999999996535,definition:{en:"Calculates the inverse of the t-distribution.",cn:"\u8BA1\u7B97t\u5206\u5E03\u7684\u53CD\u51FD\u6570\u3002",ja:"t\u5206\u5E03\u306E\u9006\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"probability, degrees of freedom",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6982\u7387\u3001\u81EA\u7531\u5EA6\u3002",ja:"\u78BA\u7387\u3001\u81EA\u7531\u5EA6"}},{title:"TRIMMEAN",call:"TRIMMEAN([4,5,6,7,2,3,4,5,1,2,3], 0.2)",result:3.7777777777777777,definition:{en:"Calculates the mean of the interior of a data set.",cn:"\u8BA1\u7B97\u5185\u90E8\u5E73\u5747\u503C\u3002",ja:"\u30C7\u30FC\u30BF\u30BB\u30C3\u30C8\u306E\u5185\u5074\u306E\u5E73\u5747\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, fraction to trim",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6570\u503C\u6570\u7EC4\u3001\u4FEE\u526A\u6BD4\u4F8B\u3002",ja:"\u6570\u5024\u306E\u914D\u5217\u3001\u30C8\u30EA\u30DF\u30F3\u30B0\u3059\u308B\u6BD4\u7387"}},{title:"VARA",call:"VARA([2,4], [8,16], [true, false])",result:36.16666666666667,definition:{en:"Calculates variance including text and logical values.",cn:"\u8BA1\u7B97\u5305\u542B\u6587\u672C\u548C\u903B\u8F91\u503C\u7684\u65B9\u5DEE\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u3068\u8AD6\u7406\u5024\u3092\u542B\u3080\u5206\u6563\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, text, or logical values",cn:"\u53C2\u6570\u662F\u6570\u503C\u3001\u6587\u672C\u6216\u903B\u8F91\u503C\u7684\u6570\u7EC4\u3002",ja:"\u6570\u5024\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u307E\u305F\u306F\u8AD6\u7406\u5024\u306E\u914D\u5217"}},{title:"VARP",call:"VARP([2,4], [8,16], [true, false])",result:28.75,definition:{en:"Calculates variance based on an entire population.",cn:"\u8BA1\u7B97\u603B\u4F53\u65B9\u5DEE\u3002",ja:"\u6BCD\u96C6\u56E3\u5168\u4F53\u306B\u57FA\u3065\u304F\u5206\u6563\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\u3002",ja:"\u6570\u5024\u306E\u914D\u5217"}},{title:"VARPA",call:"VARPA([2,4], [8,16], [true, false])",result:30.13888888888889,definition:{en:"Calculates variance based on an entire population including text and logical values.",cn:"\u8BA1\u7B97\u57FA\u4E8E\u603B\u4F53\u5E76\u5305\u542B\u6587\u672C\u548C\u903B\u8F91\u503C\u7684\u65B9\u5DEE\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u3068\u8AD6\u7406\u5024\u3092\u542B\u3080\u6BCD\u96C6\u56E3\u5168\u4F53\u306E\u5206\u6563\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, text, or logical values",cn:"\u53C2\u6570\u662F\u6570\u503C\u3001\u6587\u672C\u6216\u903B\u8F91\u503C\u7684\u6570\u7EC4\u3002",ja:"\u6570\u5024\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u307E\u305F\u306F\u8AD6\u7406\u5024\u306E\u914D\u5217"}},{title:"VARS",call:"VARS([2,4], [8,16], [true, false])",result:38.333333333333336,definition:{en:"Calculates sample variance.",cn:"\u8BA1\u7B97\u6837\u672C\u65B9\u5DEE\u3002",ja:"\u6A19\u672C\u306E\u5206\u6563\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers",cn:"\u53C2\u6570\u662F\u6570\u503C\u6570\u7EC4\u3002",ja:"\u6570\u5024\u306E\u914D\u5217"}},{title:"WEIBULLDIST",call:"WEIBULLDIST(105, 20, 100, true)",result:.9295813900692769,definition:{en:"Calculates the Weibull distribution.",cn:"\u8BA1\u7B97\u97E6\u4F2F\u5206\u5E03\u3002",ja:"\u30EF\u30A4\u30D6\u30EB\u5206\u5E03\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"value, alpha, beta, cumulative flag",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u503C\u3001\u03B1\u3001\u03B2\u3001\u7D2F\u79EF\u6807\u5FD7\u3002",ja:"\u5024\u3001\u03B1\u3001\u03B2\u3001\u7D2F\u7A4D\u30D5\u30E9\u30B0"}},{title:"ZTEST",call:"ZTEST([3,6,7,8,6,5,4,2,1,9], 4)",result:.09057419685136381,definition:{en:"Calculates the one-tailed probability of a z-test.",cn:"\u8BA1\u7B97z\u68C0\u9A8C\u7684\u5355\u5C3E\u6982\u7387\u3002",ja:"z\u691C\u5B9A\u306E\u7247\u5C3E\u78BA\u7387\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array of numbers, hypothesized mean",cn:"\u53C2\u6570\u4F9D\u6B21\u662F\u6570\u503C\u6570\u7EC4\u3001\u5047\u8BBE\u5E73\u5747\u503C\u3002",ja:"\u6570\u5024\u306E\u914D\u5217\u3001\u4EEE\u8AAC\u5E73\u5747"}}]},{category:"TEXT",functions:[{title:"CHAR",call:"CHAR(65)",result:"A",definition:{en:"Converts a number code to its corresponding character.",cn:"\u5C06\u6570\u5B57\u4EE3\u7801\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u5B57\u7B26\u3002",ja:"\u6570\u5024\u30B3\u30FC\u30C9\u3092\u5BFE\u5FDC\u3059\u308B\u6587\u5B57\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"number representing the character code",cn:"\u53C2\u6570\u662F\u6570\u5B57\uFF0C\u8868\u793A\u5B57\u7B26\u7684\u7F16\u7801\u3002",ja:"\u6587\u5B57\u306E\u30B3\u30FC\u30C9\u3092\u8868\u3059\u6570\u5024"}},{title:"CLEAN",call:"CLEAN('Monthly report')",result:"Monthly report",definition:{en:"Removes all non-printable characters from text.",cn:"\u79FB\u9664\u6587\u672C\u4E2D\u7684\u6240\u6709\u975E\u6253\u5370\u5B57\u7B26\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u304B\u3089\u3059\u3079\u3066\u306E\u975E\u8868\u793A\u6587\u5B57\u3092\u524A\u9664\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"text string to clean",cn:"\u53C2\u6570\u662F\u5305\u542B\u8981\u6E05\u7406\u7684\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217"}},{title:"CODE",call:"CODE('A')",result:65,definition:{en:"Returns the numeric code of the first character in a text string.",cn:"\u8FD4\u56DE\u6587\u672C\u5B57\u7B26\u4E32\u4E2D\u7B2C\u4E00\u4E2A\u5B57\u7B26\u7684\u6570\u5B57\u4EE3\u7801\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217\u306E\u6700\u521D\u306E\u6587\u5B57\u306E\u6570\u5024\u30B3\u30FC\u30C9\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"text string containing a single character",cn:"\u53C2\u6570\u662F\u5305\u542B\u5355\u4E2A\u5B57\u7B26\u7684\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u5358\u4E00\u306E\u6587\u5B57\u3092\u542B\u3080\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217"}},{title:"CONCATENATE",call:"CONCATENATE('Andreas', ' ', 'Hauser')",result:"Andreas Hauser",definition:{en:"Joins multiple text strings into one string.",cn:"\u5C06\u591A\u4E2A\u6587\u672C\u5B57\u7B26\u4E32\u5408\u5E76\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002",ja:"\u8907\u6570\u306E\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217\u30921\u3064\u306E\u6587\u5B57\u5217\u306B\u7D50\u5408\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"one or more text strings to concatenate",cn:"\u53C2\u6570\u662F\u4E00\u4E2A\u6216\u591A\u4E2A\u8981\u8FDE\u63A5\u7684\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u9023\u7D50\u3059\u308B1\u3064\u4EE5\u4E0A\u306E\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217"}},{title:"EXACT",call:"EXACT('Word', 'word')",result:!1,definition:{en:"Checks if two text strings are identical, case-sensitive.",cn:"\u68C0\u67E5\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u5B8C\u5168\u76F8\u540C\uFF0C\u533A\u5206\u5927\u5C0F\u5199\u3002",ja:"2\u3064\u306E\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217\u304C\u540C\u4E00\u3067\u3042\u308B\u304B\u3092\u78BA\u8A8D\u3057\u307E\u3059\uFF08\u5927\u6587\u5B57\u3068\u5C0F\u6587\u5B57\u3092\u533A\u5225\uFF09\u3002"},parameterDefinitions:{en:"two text strings to compare",cn:"\u53C2\u6570\u662F\u4E24\u4E2A\u8981\u6BD4\u8F83\u7684\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u6BD4\u8F03\u3059\u308B2\u3064\u306E\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217"}},{title:"FIND",call:"FIND('M', 'Miriam McGovern', 3)",result:8,definition:{en:"Finds the position of a substring within text, starting at a specified position.",cn:"\u4ECE\u8D77\u59CB\u4F4D\u7F6E\u5F00\u59CB\u67E5\u627E\u5B50\u5B57\u7B26\u4E32\u7684\u4F4D\u7F6E\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u4F4D\u7F6E\u304B\u3089\u958B\u59CB\u3057\u3066\u3001\u30C6\u30AD\u30B9\u30C8\u5185\u306E\u90E8\u5206\u6587\u5B57\u5217\u306E\u4F4D\u7F6E\u3092\u898B\u3064\u3051\u307E\u3059\u3002"},parameterDefinitions:{en:"text to find, source text, optional start position",cn:"\u53C2\u6570\u5305\u62EC\u8981\u67E5\u627E\u7684\u6587\u672C\u3001\u6E90\u6587\u672C\u548C\u53EF\u9009\u7684\u8D77\u59CB\u4F4D\u7F6E\u3002",ja:"\u898B\u3064\u3051\u308B\u30C6\u30AD\u30B9\u30C8\u3001\u30BD\u30FC\u30B9\u30C6\u30AD\u30B9\u30C8\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u958B\u59CB\u4F4D\u7F6E"}},{title:"LEFT",call:"LEFT('Sale Price', 4)",result:"Sale",definition:{en:"Extracts a specified number of characters from the left side of a string.",cn:"\u4ECE\u5B57\u7B26\u4E32\u5DE6\u4FA7\u63D0\u53D6\u6307\u5B9A\u6570\u91CF\u7684\u5B57\u7B26\u3002",ja:"\u6587\u5B57\u5217\u306E\u5DE6\u5074\u304B\u3089\u6307\u5B9A\u3055\u308C\u305F\u6570\u306E\u6587\u5B57\u3092\u62BD\u51FA\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"text string and number of characters to extract",cn:"\u53C2\u6570\u662F\u6587\u672C\u5B57\u7B26\u4E32\u548C\u8981\u63D0\u53D6\u7684\u5B57\u7B26\u6570\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217\u3068\u62BD\u51FA\u3059\u308B\u6587\u5B57\u6570"}},{title:"LEN",call:"LEN('Phoenix, AZ')",result:11,definition:{en:"Returns the number of characters in a text string.",cn:"\u8FD4\u56DE\u6587\u672C\u5B57\u7B26\u4E32\u4E2D\u7684\u5B57\u7B26\u6570\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217\u306E\u6587\u5B57\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"text string to count",cn:"\u53C2\u6570\u662F\u5305\u542B\u8981\u8BA1\u6570\u7684\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u30AB\u30A6\u30F3\u30C8\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217"}},{title:"LOWER",call:"LOWER('E. E. Cummings')",result:"e. e. cummings",definition:{en:"Converts all characters to lowercase.",cn:"\u5C06\u6240\u6709\u5B57\u7B26\u8F6C\u6362\u4E3A\u5C0F\u5199\u3002",ja:"\u3059\u3079\u3066\u306E\u6587\u5B57\u3092\u5C0F\u6587\u5B57\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"text string to convert",cn:"\u53C2\u6570\u662F\u8981\u8F6C\u6362\u7684\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u5909\u63DB\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217"}},{title:"MID",call:"MID('Fluid Flow', 7, 20)",result:"Flow",definition:{en:"Extracts a specified number of characters from the middle of a string.",cn:"\u4ECE\u5B57\u7B26\u4E32\u4E2D\u95F4\u63D0\u53D6\u6307\u5B9A\u6570\u91CF\u7684\u5B57\u7B26\u3002",ja:"\u6587\u5B57\u5217\u306E\u4E2D\u592E\u304B\u3089\u6307\u5B9A\u3055\u308C\u305F\u6570\u306E\u6587\u5B57\u3092\u62BD\u51FA\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"text string, start position, number of characters to extract",cn:"\u53C2\u6570\u662F\u6587\u672C\u5B57\u7B26\u4E32\u3001\u8D77\u59CB\u4F4D\u7F6E\u548C\u8981\u63D0\u53D6\u7684\u5B57\u7B26\u6570\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217\u3001\u958B\u59CB\u4F4D\u7F6E\u3001\u62BD\u51FA\u3059\u308B\u6587\u5B57\u6570"}},{title:"NUMBERVALUE",call:"NUMBERVALUE('2.500,27', ',', '.')",result:2500.27,definition:{en:"Converts text to a number based on specified delimiters.",cn:"\u6839\u636E\u6307\u5B9A\u7684\u5206\u9694\u7B26\u5C06\u6587\u672C\u8F6C\u6362\u4E3A\u6570\u5B57\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u533A\u5207\u308A\u6587\u5B57\u306B\u57FA\u3065\u3044\u3066\u30C6\u30AD\u30B9\u30C8\u3092\u6570\u5024\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"text string, decimal separator, group separator",cn:"\u53C2\u6570\u662F\u6587\u672C\u5B57\u7B26\u4E32\u3001\u5C0F\u6570\u5206\u9694\u7B26\u548C\u7EC4\u5206\u9694\u7B26\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217\u3001\u5C0F\u6570\u70B9\u533A\u5207\u308A\u6587\u5B57\u3001\u30B0\u30EB\u30FC\u30D7\u533A\u5207\u308A\u6587\u5B57"}},{title:"PROPER",call:"PROPER('this is a TITLE')",result:"This Is A Title",definition:{en:"Capitalizes the first letter of each word.",cn:"\u5C06\u6BCF\u4E2A\u5355\u8BCD\u7684\u9996\u5B57\u6BCD\u5927\u5199\u3002",ja:"\u5404\u5358\u8A9E\u306E\u6700\u521D\u306E\u6587\u5B57\u3092\u5927\u6587\u5B57\u306B\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"text string to format",cn:"\u53C2\u6570\u662F\u8981\u683C\u5F0F\u5316\u7684\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u66F8\u5F0F\u8A2D\u5B9A\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217"}},{title:"REPLACE",call:"REPLACE('abcdefghijk', 6, 5, '*')",result:"abcde*k",definition:{en:"Replaces part of old text with new text.",cn:"\u7528\u65B0\u6587\u672C\u66FF\u6362\u65E7\u6587\u672C\u4E2D\u7684\u90E8\u5206\u3002",ja:"\u53E4\u3044\u30C6\u30AD\u30B9\u30C8\u306E\u4E00\u90E8\u3092\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u3067\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002"},parameterDefinitions:{en:"original text, start position, number of characters to replace, new text",cn:"\u53C2\u6570\u662F\u539F\u59CB\u6587\u672C\u3001\u8D77\u59CB\u4F4D\u7F6E\u3001\u8981\u66FF\u6362\u7684\u5B57\u7B26\u6570\u548C\u65B0\u6587\u672C\u3002",ja:"\u5143\u306E\u30C6\u30AD\u30B9\u30C8\u3001\u958B\u59CB\u4F4D\u7F6E\u3001\u7F6E\u304D\u63DB\u3048\u308B\u6587\u5B57\u6570\u3001\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8"}},{title:"REPT",call:"REPT('*-', 3)",result:"*-*-*-",definition:{en:"Repeats text a specified number of times.",cn:"\u6839\u636E\u6307\u5B9A\u6B21\u6570\u91CD\u590D\u6587\u672C\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u3092\u6307\u5B9A\u56DE\u6570\u7E70\u308A\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"text string and number of repetitions",cn:"\u53C2\u6570\u662F\u6587\u672C\u5B57\u7B26\u4E32\u548C\u91CD\u590D\u6B21\u6570\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217\u3068\u7E70\u308A\u8FD4\u3057\u56DE\u6570"}},{title:"RIGHT",call:"RIGHT('Sale Price', 5)",result:"Price",definition:{en:"Extracts a specified number of characters from the right side of a string.",cn:"\u4ECE\u5B57\u7B26\u4E32\u53F3\u4FA7\u63D0\u53D6\u6307\u5B9A\u6570\u91CF\u7684\u5B57\u7B26\u3002",ja:"\u6587\u5B57\u5217\u306E\u53F3\u5074\u304B\u3089\u6307\u5B9A\u3055\u308C\u305F\u6570\u306E\u6587\u5B57\u3092\u62BD\u51FA\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"text string and number of characters to extract",cn:"\u53C2\u6570\u662F\u6587\u672C\u5B57\u7B26\u4E32\u548C\u8981\u63D0\u53D6\u7684\u5B57\u7B26\u6570\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217\u3068\u62BD\u51FA\u3059\u308B\u6587\u5B57\u6570"}},{title:"ROMAN",call:"ROMAN(499)",result:"CDXCIX",definition:{en:"Converts an Arabic numeral to Roman numerals.",cn:"\u5C06\u963F\u62C9\u4F2F\u6570\u5B57\u8F6C\u6362\u4E3A\u7F57\u9A6C\u6570\u5B57\u3002",ja:"\u30A2\u30E9\u30D3\u30A2\u6570\u5B57\u3092\u30ED\u30FC\u30DE\u6570\u5B57\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Arabic numeral to convert",cn:"\u53C2\u6570\u662F\u8981\u8F6C\u6362\u7684\u963F\u62C9\u4F2F\u6570\u5B57\u3002",ja:"\u5909\u63DB\u3059\u308B\u30A2\u30E9\u30D3\u30A2\u6570\u5B57"}},{title:"SEARCH",call:"SEARCH('margin', 'Profit Margin')",result:8,definition:{en:"Finds the position of a substring in text, not case-sensitive.",cn:"\u5728\u6587\u672C\u4E2D\u67E5\u627E\u5B50\u5B57\u7B26\u4E32\uFF0C\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u5185\u3067\u90E8\u5206\u6587\u5B57\u5217\u306E\u4F4D\u7F6E\u3092\u898B\u3064\u3051\u307E\u3059\uFF08\u5927\u6587\u5B57\u3068\u5C0F\u6587\u5B57\u3092\u533A\u5225\u3057\u307E\u305B\u3093\uFF09\u3002"},parameterDefinitions:{en:"text to find, source text",cn:"\u53C2\u6570\u5305\u62EC\u8981\u67E5\u627E\u7684\u6587\u672C\u548C\u6E90\u6587\u672C\u3002",ja:"\u898B\u3064\u3051\u308B\u30C6\u30AD\u30B9\u30C8\u3001\u30BD\u30FC\u30B9\u30C6\u30AD\u30B9\u30C8"}},{title:"SUBSTITUTE",call:"SUBSTITUTE('Quarter 1, 2011', '1', '2', 3)",result:"Quarter 1, 2012",definition:{en:"Replaces specific instances of old text with new text.",cn:"\u7528\u65B0\u6587\u672C\u66FF\u6362\u65E7\u6587\u672C\u4E2D\u7684\u7279\u5B9A\u5B9E\u4F8B\u3002",ja:"\u53E4\u3044\u30C6\u30AD\u30B9\u30C8\u306E\u7279\u5B9A\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u3067\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002"},parameterDefinitions:{en:"original text, old text, new text, optional instance to replace",cn:"\u53C2\u6570\u662F\u539F\u59CB\u6587\u672C\u3001\u65E7\u6587\u672C\u3001\u65B0\u6587\u672C\u548C\u53EF\u9009\u7684\u66FF\u6362\u5B9E\u4F8B\u3002",ja:"\u5143\u306E\u30C6\u30AD\u30B9\u30C8\u3001\u53E4\u3044\u30C6\u30AD\u30B9\u30C8\u3001\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u7F6E\u304D\u63DB\u3048\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9"}},{title:"T",call:"T('Rainfall')",result:"Rainfall",definition:{en:"Returns the text if the argument is text; otherwise returns an empty string.",cn:"\u5982\u679C\u53C2\u6570\u662F\u6587\u672C\uFF0C\u5219\u8FD4\u56DE\u8BE5\u6587\u672C\uFF1B\u5426\u5219\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32\u3002",ja:"\u5F15\u6570\u304C\u30C6\u30AD\u30B9\u30C8\u3067\u3042\u308C\u3070\u305D\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u8FD4\u3057\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u7A7A\u306E\u6587\u5B57\u5217\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"any data type",cn:"\u53C2\u6570\u53EF\u4EE5\u662F\u4EFB\u4F55\u7C7B\u578B\u7684\u6570\u636E\u3002",ja:"\u4EFB\u610F\u306E\u30C7\u30FC\u30BF\u578B"}},{title:"TRIM",call:"TRIM(' First Quarter Earnings ')",result:"First Quarter Earnings",definition:{en:"Removes spaces before and after text, preserves internal multiple spaces as one.",cn:"\u53BB\u9664\u6587\u672C\u524D\u540E\u7684\u7A7A\u683C\uFF0C\u5185\u90E8\u591A\u4E8E\u4E00\u4E2A\u7684\u7A7A\u683C\u4FDD\u7559\u4E3A\u4E00\u4E2A\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u306E\u524D\u5F8C\u306B\u3042\u308B\u30B9\u30DA\u30FC\u30B9\u3092\u524A\u9664\u3057\u3001\u5185\u90E8\u306E\u8907\u6570\u306E\u30B9\u30DA\u30FC\u30B9\u30921\u3064\u306B\u4FDD\u3061\u307E\u3059\u3002"},parameterDefinitions:{en:"text string to trim",cn:"\u53C2\u6570\u662F\u8981\u4FEE\u526A\u7684\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u30C8\u30EA\u30DF\u30F3\u30B0\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217"}},{title:"TEXTJOIN",call:"TEXTJOIN(' ', true, 'The', '', 'sun', 'will', 'come', 'up', 'tomorrow.')",result:"The sun will come up tomorrow.",definition:{en:"Joins multiple text items into one string using a specified delimiter.",cn:"\u5C06\u591A\u4E2A\u6587\u672C\u9879\u8FDE\u63A5\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4F7F\u7528\u6307\u5B9A\u7684\u5206\u9694\u7B26\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u533A\u5207\u308A\u6587\u5B57\u3092\u4F7F\u7528\u3057\u3066\u3001\u8907\u6570\u306E\u30C6\u30AD\u30B9\u30C8\u9805\u76EE\u30921\u3064\u306E\u6587\u5B57\u5217\u306B\u7D50\u5408\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"delimiter, ignore empty flag, text items to join",cn:"\u53C2\u6570\u662F\u5206\u9694\u7B26\u3001\u5FFD\u7565\u7A7A\u503C\u6807\u5FD7\u548C\u8981\u8FDE\u63A5\u7684\u6587\u672C\u9879\u3002",ja:"\u533A\u5207\u308A\u6587\u5B57\u3001\u7A7A\u3092\u7121\u8996\u3059\u308B\u30D5\u30E9\u30B0\u3001\u7D50\u5408\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u9805\u76EE"}},{title:"UNICHAR",call:"UNICHAR(66)",result:"B",definition:{en:"Returns the character corresponding to the given Unicode number.",cn:"\u8FD4\u56DE\u7ED9\u5B9AUnicode\u6570\u5B57\u5BF9\u5E94\u7684\u5B57\u7B26\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305FUnicode\u6570\u5024\u306B\u5BFE\u5FDC\u3059\u308B\u6587\u5B57\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"Unicode character code",cn:"\u53C2\u6570\u662FUnicode\u5B57\u7B26\u4EE3\u7801\u3002",ja:"Unicode\u6587\u5B57\u30B3\u30FC\u30C9"}},{title:"UNICODE",call:"UNICODE('B')",result:66,definition:{en:"Returns the Unicode number of the first character in a text string.",cn:"\u8FD4\u56DE\u6587\u672C\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u7684Unicode\u6570\u5B57\u3002",ja:"\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217\u306E\u6700\u521D\u306E\u6587\u5B57\u306EUnicode\u6570\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"text string containing a single character",cn:"\u53C2\u6570\u662F\u5305\u542B\u5355\u4E2A\u5B57\u7B26\u7684\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u5358\u4E00\u306E\u6587\u5B57\u3092\u542B\u3080\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217"}},{title:"UPPER",call:"UPPER('total')",result:"TOTAL",definition:{en:"Converts all characters to uppercase.",cn:"\u5C06\u6240\u6709\u5B57\u7B26\u8F6C\u6362\u4E3A\u5927\u5199\u3002",ja:"\u3059\u3079\u3066\u306E\u6587\u5B57\u3092\u5927\u6587\u5B57\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"text string to convert",cn:"\u53C2\u6570\u662F\u8981\u8F6C\u6362\u7684\u6587\u672C\u5B57\u7B26\u4E32\u3002",ja:"\u5909\u63DB\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217"}}]}],h=(0,e.Z)({data:m}),c=function(){return console.log(Object.keys(x)),(0,d.useEffect)(function(){Object.keys(x).forEach(function(i){window[i]=x[i]})},[]),(0,u.jsx)(h,{})};f.Z=c},56266:function(v,f,n){"use strict";var d=n(27424),x=n.n(d),e=n(67294),u=n(86322),m=n.n(u),h=n(14226),c=n(96707),r=n(85893),i=[{en:`
# Welcome to the Markdown Editor

This is a tutorial on how to use the Markdown Editor.
`,zh:`
# \u6B22\u8FCE\u4F7F\u7528 Markdown \u7F16\u8F91\u5668

\u8FD9\u662F\u4E00\u4E2A\u5173\u4E8E\u5982\u4F55\u4F7F\u7528 Markdown \u7F16\u8F91\u5668\u7684\u6559\u7A0B\u3002
`,ja:`
# Markdown\u30A8\u30C7\u30A3\u30BF\u3078\u3088\u3046\u3053\u305D

\u3053\u308C\u306FMarkdown\u30A8\u30C7\u30A3\u30BF\u306E\u4F7F\u3044\u65B9\u306B\u95A2\u3059\u308B\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u3059\u3002
`},{en:`
## Markdown Syntax Basics

### Headers
Use # for headers. For example:
- # Header 1
- ## Header 2
- ### Header 3

### Emphasis
- **Bold** will render as Bold.
- *Italic* will render as Italic.
- ~~Strikethrough~~ will render as Strikethrough.

### Links
[NocoBase](https://www.nocobase.com/) creates a hyperlink.

### Images
![Alt text](https://static-docs.nocobase.com/logo-nocobase.png)

### Blockquotes
> This is a blockquote. Use the ">" symbol at the beginning of a line to create one.

### Code Blocks
Use triple backticks (\`\`\`) for code blocks. Here's an example with JavaScript:

\`\`\`js
function greet() {
  console.log('Hello, Markdown!');
}
greet();
\`\`\`

### Math Blocks
For math equations, you would typically use double dollar signs for block equations and single dollar signs for inline equations. Here are examples:
$$ E = mc^2 $$
Inline equation: $E = mc^2$

### Tables
Tables are created with pipes (|) and dashes (-):
| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Row 1 Data 1 | Row 1 Data 2 | Row 1 Data 3 |
| Row 2 Data 1 | Row 2 Data 2 | Row 2 Data 3 |

### Emoji
You can add emojis like :smile: which renders as \u{1F604}.

### Lists
- Unordered lists use - or *.
  - Example: - Item 1

### Task Lists
- [x] Completed task
- [ ] Incomplete task
`,zh:`
## Markdown \u57FA\u672C\u8BED\u6CD5

### \u6807\u9898
\u4F7F\u7528 # \u8868\u793A\u6807\u9898\u3002\u4F8B\u5982\uFF1A
- # \u4E00\u7EA7\u6807\u9898
- ## \u4E8C\u7EA7\u6807\u9898
- ### \u4E09\u7EA7\u6807\u9898

### \u5F3A\u8C03
- **\u52A0\u7C97** \u4F1A\u663E\u793A\u4E3A \u52A0\u7C97\u3002
- *\u659C\u4F53* \u4F1A\u663E\u793A\u4E3A \u659C\u4F53\u3002
- ~~\u5220\u9664\u7EBF~~ \u4F1A\u663E\u793A\u4E3A \u5220\u9664\u7EBF\u3002

### \u94FE\u63A5
[NocoBase](https://www.nocobase.com/) \u521B\u5EFA\u8D85\u94FE\u63A5\u3002

### \u56FE\u7247
![\u66FF\u4EE3\u6587\u5B57](https://static-docs.nocobase.com/logo-nocobase.png)

### \u5F15\u7528
> \u8FD9\u662F\u4E00\u4E2A\u5F15\u7528\u3002\u5728\u884C\u9996\u4F7F\u7528 \u201C>\u201D \u7B26\u53F7\u6765\u521B\u5EFA\u3002

### \u4EE3\u7801\u5757
\u4F7F\u7528\u4E09\u4E2A\u53CD\u5F15\u53F7\uFF08\`\`\`\uFF09\u8868\u793A\u4EE3\u7801\u5757\u3002\u8FD9\u91CC\u662F\u4E00\u4E2A JavaScript \u4EE3\u7801\u7684\u4F8B\u5B50\uFF1A

\`\`\`js
function greet() {
  console.log('\u4F60\u597D\uFF0CMarkdown\uFF01');
}
greet();
\`\`\`

### \u516C\u5F0F\u5757
\u5BF9\u4E8E\u6570\u5B66\u516C\u5F0F\uFF0C\u901A\u5E38\u4F7F\u7528\u53CC\u7F8E\u5143\u7B26\u53F7\u8868\u793A\u884C\u95F4\u516C\u5F0F\uFF0C\u5355\u7F8E\u5143\u7B26\u53F7\u8868\u793A\u884C\u5185\u516C\u5F0F\u3002\u8FD9\u91CC\u6709\u4E00\u4E9B\u4F8B\u5B50\uFF1A
$$ E = mc^2 $$
\u884C\u5185\u516C\u5F0F: $E = mc^2$

### \u8868\u683C
\u8868\u683C\u901A\u8FC7\u7AD6\u7EBF\uFF08|\uFF09\u548C\u77ED\u6A2A\u7EBF\uFF08-\uFF09\u521B\u5EFA\uFF1A
| \u52171 | \u52172 | \u52173 |
| --- | --- | --- |
| \u7B2C1\u884C\u6570\u636E1 | \u7B2C1\u884C\u6570\u636E2 | \u7B2C1\u884C\u6570\u636E3 |
| \u7B2C2\u884C\u6570\u636E1 | \u7B2C2\u884C\u6570\u636E2 | \u7B2C2\u884C\u6570\u636E3 |

### \u8868\u60C5\u7B26\u53F7 Emoji
\u4F60\u53EF\u4EE5\u6DFB\u52A0\u7C7B\u4F3C :smile: \u7684\u8868\u60C5\u7B26\u53F7\uFF0C\u5B83\u4F1A\u663E\u793A\u4E3A \u{1F604}\u3002

### \u5217\u8868
- \u65E0\u5E8F\u5217\u8868\u4F7F\u7528 - \u6216 *\u3002
  - \u793A\u4F8B\uFF1A- \u9879\u76EE 1

### \u4EFB\u52A1\u5217\u8868
- [x] \u5DF2\u5B8C\u6210\u7684\u4EFB\u52A1
- [ ] \u672A\u5B8C\u6210\u7684\u4EFB\u52A1
`,ja:`
## Markdown \u57FA\u672C\u6587\u6CD5

### \u898B\u51FA\u3057
# \u3092\u4F7F\u3063\u3066\u898B\u51FA\u3057\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070\uFF1A
- # \u898B\u51FA\u30571
- ## \u898B\u51FA\u30572
- ### \u898B\u51FA\u30573

### \u5F37\u8ABF
- **\u592A\u5B57** \u306F \u592A\u5B57 \u306B\u306A\u308A\u307E\u3059\u3002
- *\u659C\u4F53* \u306F \u659C\u4F53 \u306B\u306A\u308A\u307E\u3059\u3002
- ~~\u53D6\u308A\u6D88\u3057\u7DDA~~ \u306F \u53D6\u308A\u6D88\u3057\u7DDA \u306B\u306A\u308A\u307E\u3059\u3002

### \u30EA\u30F3\u30AF
[NocoBase](https://www.nocobase.com/) \u306F\u30CF\u30A4\u30D1\u30FC\u30EA\u30F3\u30AF\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002

### \u753B\u50CF
![\u4EE3\u66FF\u30C6\u30AD\u30B9\u30C8](https://static-docs.nocobase.com/logo-nocobase.png)

### \u5F15\u7528
> \u3053\u308C\u306F\u5F15\u7528\u3067\u3059\u3002\u884C\u306E\u6700\u521D\u306B ">", \u30B7\u30F3\u30DC\u30EB\u3092\u4F7F\u7528\u3057\u3066\u4F5C\u6210\u3057\u307E\u3059\u3002

### \u30B3\u30FC\u30C9\u30D6\u30ED\u30C3\u30AF
\u30B3\u30FC\u30C9\u30D6\u30ED\u30C3\u30AF\u306F3\u3064\u306E\u30D0\u30C3\u30AF\u30AF\u30A9\u30FC\u30C8\uFF08\`\`\`\uFF09\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u4EE5\u4E0B\u304CJavaScript\u306E\u4F8B\u3067\u3059\uFF1A

\`\`\`js
function greet() {
  console.log('\u3053\u3093\u306B\u3061\u306F\u3001Markdown\uFF01');
}
greet();
\`\`\`

### \u6570\u5F0F\u30D6\u30ED\u30C3\u30AF
\u6570\u5F0F\u306F\u901A\u5E38\u3001\u30C0\u30D6\u30EB\u30C9\u30EB\u8A18\u53F7\u3092\u4F7F\u3063\u3066\u884C\u9593\u6570\u5F0F\u3092\u4F5C\u6210\u3057\u3001\u30B7\u30F3\u30B0\u30EB\u30C9\u30EB\u8A18\u53F7\u3092\u4F7F\u3063\u3066\u884C\u5185\u6570\u5F0F\u3092\u4F5C\u308A\u307E\u3059\u3002\u4EE5\u4E0B\u304C\u305D\u306E\u4F8B\u3067\u3059\uFF1A
$$ E = mc^2 $$
\u884C\u5185\u6570\u5F0F: $E = mc^2$

### \u30C6\u30FC\u30D6\u30EB
\u30C6\u30FC\u30D6\u30EB\u306F\u30D1\u30A4\u30D7\uFF08|\uFF09\u3068\u30C0\u30C3\u30B7\u30E5\uFF08-\uFF09\u3092\u4F7F\u7528\u3057\u3066\u4F5C\u6210\u3057\u307E\u3059\uFF1A
| \u52171 | \u52172 | \u52173 |
| --- | --- | --- |
| \u884C1\u30C7\u30FC\u30BF1 | \u884C1\u30C7\u30FC\u30BF2 | \u884C1\u30C7\u30FC\u30BF3 |
| \u884C2\u30C7\u30FC\u30BF1 | \u884C2\u30C7\u30FC\u30BF2 | \u884C2\u30C7\u30FC\u30BF3 |

### \u7D75\u6587\u5B57 Emoji
:smile: \u306E\u3088\u3046\u306A\u7D75\u6587\u5B57\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002\u305D\u308C\u306F \u{1F604} \u3068\u3057\u3066\u8868\u793A\u3055\u308C\u307E\u3059\u3002

### \u30EA\u30B9\u30C8
- \u7B87\u6761\u66F8\u304D\u306F - \u307E\u305F\u306F * \u3092\u4F7F\u7528\u3057\u307E\u3059\u3002
  - \u4F8B: - \u30A2\u30A4\u30C6\u30E01

### \u30BF\u30B9\u30AF\u30EA\u30B9\u30C8
- [x] \u5B8C\u4E86\u3057\u305F\u30BF\u30B9\u30AF
- [ ] \u672A\u5B8C\u4E86\u306E\u30BF\u30B9\u30AF
`}],a=function(){var s=(0,e.useState)(null),t=x()(s,2),C=t[0],p=t[1],y=(0,c.WF)(),D=y.themeConfig,j=D.lang.slice(0,2),k=function(E){return i.map(function(R){return R[E]||R.en}).join(`
`)};return(0,e.useEffect)(function(){var A=k(j),E=new(m())("vditor",{value:A,after:function(){p(E)}});return function(){E.destroy(),p(null)}},[j]),(0,e.useEffect)(function(){if(C){var A=k(j);C.setValue(A)}},[j]),(0,r.jsx)("div",{id:"vditor",className:"vditor"})};f.Z=a},66893:function(v,f,n){"use strict";var d=n(42122),x=n.n(d),e=n(67294),u=n(33783),m=n(1191),h=n(85893),c=[{category:"Expression functions",functions:[{title:"compile",call:"compile('2 + 3')",result:"{}",definition:{en:"Parse and compile an expression (no direct calculation).",cn:"\u89E3\u6790\u5E76\u7F16\u8BD1\u8868\u8FBE\u5F0F\uFF08\u8D1F\u8D23\u89E3\u6790\uFF0C\u4E0D\u76F4\u63A5\u8FD4\u56DE\u7ED3\u679C\uFF09\u3002",ja:"\u5F0F\u3092\u89E3\u6790\u3057\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u3057\u307E\u3059\uFF08\u8A55\u4FA1\u306F\u3057\u307E\u305B\u3093\uFF09\u3002"},parameterDefinitions:{en:"expr (string)",cn:"\u8868\u8FBE\u5F0F\uFF08\u5B57\u7B26\u4E32\uFF09",ja:"\u5F0F\uFF08\u6587\u5B57\u5217\uFF09"}},{title:"evaluate",call:"evaluate('2 + 3')",result:"5",definition:{en:"Evaluate an expression (and return the result).",cn:"\u8BA1\u7B97\u8868\u8FBE\u5F0F\u5E76\u8FD4\u56DE\u7ED3\u679C\u3002",ja:"\u5F0F\u3092\u8A55\u4FA1\u3057\u3066\u7D50\u679C\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"expr (string), scope (object, optional)",cn:"\u8868\u8FBE\u5F0F\uFF08\u5B57\u7B26\u4E32\uFF09\uFF0C\u4F5C\u7528\u57DF\uFF08\u53EF\u9009\uFF09",ja:"\u5F0F\uFF08\u6587\u5B57\u5217\uFF09\u3001\u30B9\u30B3\u30FC\u30D7\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09"}},{title:"help",call:"help('evaluate')",result:`{
  "name": "evaluate",
  "category": "Expression",
  "syntax": [
    "evaluate(expression)",
    "evaluate(expression, scope)",
    "evaluate([expr1, expr2, expr3, ...])",
    "evaluate([expr1, expr2, expr3, ...], scope)"
  ],
  "description": "Evaluate an expression or an array with expressions.",
  "examples": [
    "evaluate(\\"2 + 3\\")",
    "evaluate(\\"sqrt(16)\\")",
    "evaluate(\\"2 inch to cm\\")",
    "evaluate(\\"sin(x * pi)\\", { \\"x\\": 1/2 })",
    "evaluate([\\"width=2\\", \\"height=4\\",\\"width*height\\"])"
  ],
  "seealso": [],
  "mathjs": "Help"
}`,definition:{en:"Retrieve brief usage info or examples.",cn:"\u68C0\u7D22\u51FD\u6570\u6216\u6570\u636E\u7C7B\u578B\u7684\u4F7F\u7528\u8BF4\u660E\u3002",ja:"\u95A2\u6570\u307E\u305F\u306F\u30C7\u30FC\u30BF\u578B\u306E\u4F7F\u7528\u65B9\u6CD5\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"search (string)",cn:"\u641C\u7D22\u5173\u952E\u5B57\uFF08\u5B57\u7B26\u4E32\uFF09",ja:"\u691C\u7D22\u6587\u5B57\u5217"}},{title:"parser",call:"parser()",result:"{}",definition:{en:"Create a parser for custom operations.",cn:"\u521B\u5EFA\u81EA\u5B9A\u4E49\u64CD\u4F5C\u7528\u7684\u89E3\u6790\u5668\u3002",ja:"\u30AB\u30B9\u30BF\u30E0\u64CD\u4F5C\u306E\u305F\u3081\u306E\u30D1\u30FC\u30B5\u30FC\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"None",cn:"\u65E0",ja:"\u306A\u3057"}}]},{category:"Algebra functions",functions:[{title:"derivative",call:"derivative('x^2', 'x')",result:`{
  "mathjs": "OperatorNode",
  "op": "*",
  "fn": "multiply",
  "args": [
    {
      "mathjs": "ConstantNode",
      "value": 2
    },
    {
      "mathjs": "SymbolNode",
      "name": "x"
    }
  ],
  "implicit": false,
  "isPercentage": false
}`,definition:{en:"Take the derivative of an expression with respect to a given variable.",cn:"\u5BF9\u8868\u8FBE\u5F0F\u8FDB\u884C\u6C42\u5BFC\uFF0C\u5E76\u6307\u5B9A\u53D8\u91CF\u3002",ja:"\u5F0F\u3092\u6307\u5B9A\u3057\u305F\u5909\u6570\u3067\u5FAE\u5206\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"expr (string|Node), variable (string)",cn:"\u8868\u8FBE\u5F0F\uFF08\u5B57\u7B26\u4E32\u6216\u8282\u70B9\uFF09\uFF0C\u53D8\u91CF\uFF08\u5B57\u7B26\u4E32\uFF09",ja:"\u5F0F\uFF08\u6587\u5B57\u5217\u307E\u305F\u306FNode\uFF09\u3001\u5909\u6570\uFF08\u6587\u5B57\u5217\uFF09"}},{title:"leafCount",call:"leafCount('x^2 + y')",result:"3",definition:{en:"Count the number of leaf nodes (symbols/constants) in the parse tree.",cn:"\u7EDF\u8BA1\u8868\u8FBE\u5F0F\u89E3\u6790\u6811\u4E2D\u7684\u53F6\u8282\u70B9\u6570\u91CF\uFF08\u7B26\u53F7\u6216\u5E38\u91CF\uFF09\u3002",ja:"\u30D1\u30FC\u30B9\u30C4\u30EA\u30FC\u306B\u304A\u3051\u308B\u8449\u30CE\u30FC\u30C9\uFF08\u30B7\u30F3\u30DC\u30EB\u3084\u5B9A\u6570\uFF09\u306E\u6570\u3092\u6570\u3048\u307E\u3059\u3002"},parameterDefinitions:{en:"expr (string|Node)",cn:"\u8868\u8FBE\u5F0F\uFF08\u5B57\u7B26\u4E32\u6216\u8282\u70B9\uFF09",ja:"\u5F0F\uFF08\u6587\u5B57\u5217\u307E\u305F\u306FNode\uFF09"}},{title:"lsolve",call:"lsolve([[1,2],[3,4]], [5,6])",result:`[
  [
    5
  ],
  [
    -2.25
  ]
]`,definition:{en:"Find one solution of a linear system by forward substitution.",cn:"\u4F7F\u7528\u524D\u5411\u66FF\u6362\u6CD5\u6C42\u89E3\u7EBF\u6027\u65B9\u7A0B\u7EC4\u7684\u4E00\u4E2A\u89E3\u3002",ja:"\u524D\u9032\u4EE3\u5165\u6CD5\u3067\u7DDA\u5F62\u65B9\u7A0B\u5F0F\u7CFB\u306E\u5358\u4E00\u89E3\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"L (Array|Matrix), b (Array|Matrix)",cn:"L\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cb\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"L\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001b\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"lsolveAll",call:"lsolveAll([[1,2],[3,4]], [5,6])",result:`[
  [
    [
      5
    ],
    [
      -2.25
    ]
  ]
]`,definition:{en:"Find all solutions of a linear system by forward substitution.",cn:"\u4F7F\u7528\u524D\u5411\u66FF\u6362\u6CD5\u6C42\u89E3\u7EBF\u6027\u65B9\u7A0B\u7EC4\u7684\u6240\u6709\u89E3\u3002",ja:"\u524D\u9032\u4EE3\u5165\u6CD5\u3067\u7DDA\u5F62\u65B9\u7A0B\u5F0F\u7CFB\u306E\u3059\u3079\u3066\u306E\u89E3\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"L (Array|Matrix), b (Array|Matrix)",cn:"L\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cb\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"L\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001b\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"lup",call:"lup([[1,2],[3,4]])",result:`{
  "L": [
    [
      1,
      0
    ],
    [
      0.3333333333333333,
      1
    ]
  ],
  "U": [
    [
      3,
      4
    ],
    [
      0,
      0.6666666666666667
    ]
  ],
  "p": [
    1,
    0
  ]
}`,definition:{en:"Perform LU decomposition of a matrix with partial pivoting.",cn:"\u5BF9\u77E9\u9635\u6267\u884C\u90E8\u5206\u4E3B\u5143LU\u5206\u89E3\u3002",ja:"\u884C\u5217\u306E\u90E8\u5206\u30D4\u30DC\u30C3\u30C8LU\u5206\u89E3\u3092\u884C\u3044\u307E\u3059\u3002"},parameterDefinitions:{en:"A (Array|Matrix)",cn:"A\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"A\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"lusolve",call:"lusolve([[1,2],[3,4]], [5,6])",result:`[
  [
    -3.9999999999999987
  ],
  [
    4.499999999999999
  ]
]`,definition:{en:"Solve linear equation A*x=b, where A is an [n x n] matrix.",cn:"\u6C42\u89E3\u7EBF\u6027\u65B9\u7A0B A*x=b\uFF08A \u4E3A n\xD7n \u77E9\u9635\uFF09\u3002",ja:"A \u304C n\xD7n \u884C\u5217\u3067\u3042\u308B\u7DDA\u5F62\u65B9\u7A0B\u5F0F A*x=b \u3092\u89E3\u304D\u307E\u3059\u3002"},parameterDefinitions:{en:"A (Array|Matrix), b (Array|Matrix)",cn:"A\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cb\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"A\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001b\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"lyap",call:"lyap(A, Q)",result:"Error: A is not defined",definition:{en:"Solve the continuous-time Lyapunov equation AP+PA\u2019+Q=0.",cn:"\u6C42\u89E3\u8FDE\u7EED\u65F6\u95F4\u674E\u96C5\u666E\u8BFA\u592B\u65B9\u7A0B AP+PA\u2019+Q=0\u3002",ja:"\u9023\u7D9A\u6642\u9593\u30E9\u30A4\u30A2\u30D7\u30CE\u30D5\u65B9\u7A0B\u5F0F AP+PA\u2019+Q=0 \u3092\u89E3\u304D\u307E\u3059\u3002"},parameterDefinitions:{en:"A (Array|Matrix), Q (Array|Matrix)",cn:"A\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0CQ\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"A\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001Q\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"polynomialRoot",call:"polynomialRoot(1, 2, 3, 4)",result:`[
  -0.605829586188268,
  {
    "mathjs": "Complex",
    "re": -0.07208520690586608,
    "im": -0.6383267351483765
  },
  {
    "mathjs": "Complex",
    "re": -0.07208520690586608,
    "im": 0.6383267351483765
  }
]`,definition:{en:"Find the numerical roots of a polynomial (real or complex).",cn:"\u6C42\u89E3\u591A\u9879\u5F0F\u7684\u6570\u503C\u6839\uFF08\u53EF\u5305\u542B\u590D\u6570\uFF09\u3002",ja:"\u591A\u9805\u5F0F\u306E\u6570\u5024\u89E3\uFF08\u5B9F\u6570\u307E\u305F\u306F\u8907\u7D20\u6570\uFF09\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"constant (number), linearCoeff (number), ... up to cubicCoeff (optional)",cn:"\u5E38\u6570\u9879\uFF0C\u7EBF\u6027\u7CFB\u6570\u9879\uFF0C... \u6700\u591A\u5230\u4E09\u6B21\u9879\uFF08\u53EF\u9009\uFF09",ja:"\u5B9A\u6570\u9805\u30011\u6B21\u4FC2\u6570\u9805\u3001... \u6700\u59273\u6B21\u4FC2\u6570\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09"}},{title:"qr",call:"qr([[1,2],[3,4]])",result:`{
  "Q": [
    [
      0.316227766016838,
      0.9486832980505138
    ],
    [
      0.9486832980505138,
      -0.316227766016838
    ]
  ],
  "R": [
    [
      3.162277660168379,
      4.427188724235731
    ],
    [
      0,
      0.6324555320336751
    ]
  ]
}`,definition:{en:"Perform the Matrix QR decomposition.",cn:"\u5BF9\u77E9\u9635\u6267\u884C QR \u5206\u89E3\u3002",ja:"\u884C\u5217\u306EQR\u5206\u89E3\u3092\u884C\u3044\u307E\u3059\u3002"},parameterDefinitions:{en:"A (Array|Matrix)",cn:"A\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"A\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"rationalize",call:"rationalize('1/(x+1)')",result:`{
  "mathjs": "OperatorNode",
  "op": "/",
  "fn": "divide",
  "args": [
    {
      "mathjs": "ConstantNode",
      "value": 1
    },
    {
      "mathjs": "OperatorNode",
      "op": "+",
      "fn": "add",
      "args": [
        {
          "mathjs": "SymbolNode",
          "name": "x"
        },
        {
          "mathjs": "ConstantNode",
          "value": 1
        }
      ],
      "implicit": false,
      "isPercentage": false
    }
  ],
  "implicit": false,
  "isPercentage": false
}`,definition:{en:"Transform a rationalizable expression into a rational fraction.",cn:"\u5C06\u53EF\u6709\u7406\u5316\u7684\u8868\u8FBE\u5F0F\u8F6C\u6362\u4E3A\u6709\u7406\u5206\u5F0F\u3002",ja:"\u6709\u7406\u5316\u53EF\u80FD\u306A\u5F0F\u3092\u6709\u7406\u5206\u6570\u5F62\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"expr (string|Node)",cn:"\u8868\u8FBE\u5F0F\uFF08\u5B57\u7B26\u4E32\u6216\u8282\u70B9\uFF09",ja:"\u5F0F\uFF08\u6587\u5B57\u5217\u307E\u305F\u306FNode\uFF09"}},{title:"resolve",call:"resolve('x + y', {x:2, y:3})",result:`{
  "mathjs": "OperatorNode",
  "op": "+",
  "fn": "add",
  "args": [
    {
      "mathjs": "ConstantNode",
      "value": 2
    },
    {
      "mathjs": "ConstantNode",
      "value": 3
    }
  ],
  "implicit": false,
  "isPercentage": false
}`,definition:{en:"Replace variable nodes with their values in the given scope.",cn:"\u7528\u7ED9\u5B9A\u4F5C\u7528\u57DF\u4E2D\u7684\u503C\u66FF\u6362\u8868\u8FBE\u5F0F\u4E2D\u7684\u53D8\u91CF\u3002",ja:"\u6307\u5B9A\u3055\u308C\u305F\u30B9\u30B3\u30FC\u30D7\u5185\u306E\u5024\u3067\u5909\u6570\u3092\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002"},parameterDefinitions:{en:"expr (string|Node), scope (object)",cn:"\u8868\u8FBE\u5F0F\uFF08\u5B57\u7B26\u4E32\u6216\u8282\u70B9\uFF09\uFF0C\u4F5C\u7528\u57DF\uFF08\u5BF9\u8C61\uFF09",ja:"\u5F0F\uFF08\u6587\u5B57\u5217\u307E\u305F\u306FNode\uFF09\u3001\u30B9\u30B3\u30FC\u30D7\uFF08\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\uFF09"}},{title:"schur",call:"schur([[1,2],[3,4]])",result:`{
  "U": [
    [
      0.41597355791928425,
      -0.9093767091321243
    ],
    [
      0.9093767091321244,
      0.41597355791928414
    ]
  ],
  "T": [
    [
      5.37228132326902,
      -1.0000000000000002
    ],
    [
      5.147016547482756e-118,
      -0.37228132326901375
    ]
  ]
}`,definition:{en:"Compute the real Schur decomposition A = U T U\u2019 for a real matrix A.",cn:"\u5BF9\u5B9E\u6570\u77E9\u9635 A \u6267\u884C\u65BD\u5C14\u5206\u89E3 A = U T U\u2019\u3002",ja:"\u5B9F\u6570\u884C\u5217 A \u306B\u5BFE\u3057\u3066\u30B7\u30E5\u30FC\u30EB\u5206\u89E3 A = U T U\u2019 \u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"A (Array|Matrix)",cn:"A\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"A\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"simplify",call:"simplify('2x + 3x')",result:`{
  "mathjs": "OperatorNode",
  "op": "*",
  "fn": "multiply",
  "args": [
    {
      "mathjs": "ConstantNode",
      "value": 5
    },
    {
      "mathjs": "SymbolNode",
      "name": "x"
    }
  ],
  "implicit": false,
  "isPercentage": false
}`,definition:{en:"Simplify an expression tree (combine like terms, etc.).",cn:"\u7B80\u5316\u8868\u8FBE\u5F0F\u89E3\u6790\u6811\uFF08\u5408\u5E76\u540C\u7C7B\u9879\u7B49\uFF09\u3002",ja:"\u5F0F\u306E\u30D1\u30FC\u30B9\u30C4\u30EA\u30FC\u3092\u7C21\u7565\u5316\u3057\u307E\u3059\uFF08\u540C\u985E\u9805\u3092\u307E\u3068\u3081\u308B\u306A\u3069\uFF09\u3002"},parameterDefinitions:{en:"expr (string|Node)",cn:"\u8868\u8FBE\u5F0F\uFF08\u5B57\u7B26\u4E32\u6216\u8282\u70B9\uFF09",ja:"\u5F0F\uFF08\u6587\u5B57\u5217\u307E\u305F\u306FNode\uFF09"}},{title:"simplifyConstant",call:"simplifyConstant('2+3')",result:`{
  "mathjs": "ConstantNode",
  "value": 5
}`,definition:{en:"Replace constant subexpressions with their computed values.",cn:"\u5BF9\u8868\u8FBE\u5F0F\u4E2D\u7684\u5E38\u91CF\u5B50\u8868\u8FBE\u5F0F\u8FDB\u884C\u8BA1\u7B97\u66FF\u6362\u3002",ja:"\u5F0F\u4E2D\u306E\u5B9A\u6570\u90E8\u5206\u3092\u8A08\u7B97\u3057\u3066\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002"},parameterDefinitions:{en:"expr (string|Node)",cn:"\u8868\u8FBE\u5F0F\uFF08\u5B57\u7B26\u4E32\u6216\u8282\u70B9\uFF09",ja:"\u5F0F\uFF08\u6587\u5B57\u5217\u307E\u305F\u306FNode\uFF09"}},{title:"simplifyCore",call:"simplifyCore('x+x')",result:`{
  "mathjs": "OperatorNode",
  "op": "+",
  "fn": "add",
  "args": [
    {
      "mathjs": "SymbolNode",
      "name": "x"
    },
    {
      "mathjs": "SymbolNode",
      "name": "x"
    }
  ],
  "implicit": false,
  "isPercentage": false
}`,definition:{en:"Perform a single-pass simplification for performance-critical cases.",cn:"\u5355\u6B21\u4F20\u9012\uFF08one-pass\uFF09\u7B80\u5316\u8868\u8FBE\u5F0F\uFF0C\u591A\u7528\u4E8E\u6027\u80FD\u654F\u611F\u573A\u666F\u3002",ja:"\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u304C\u91CD\u8981\u306A\u5834\u5408\u306B\u5358\u4E00\u30D1\u30B9\u3067\u7C21\u5358\u5316\u3092\u884C\u3044\u307E\u3059\u3002"},parameterDefinitions:{en:"expr (string|Node)",cn:"\u8868\u8FBE\u5F0F\uFF08\u5B57\u7B26\u4E32\u6216\u8282\u70B9\uFF09",ja:"\u5F0F\uFF08\u6587\u5B57\u5217\u307E\u305F\u306FNode\uFF09"}},{title:"slu",call:"slu([[1,2],[3,4]], 'natural', 1)",result:"Error: Unexpected type of argument in function slu (expected: SparseMatrix, actual: Array, index: 0)",definition:{en:"Compute the sparse LU decomposition with full pivoting.",cn:"\u4EE5\u5B8C\u5168\u4E3B\u5143\u65B9\u5F0F\u8BA1\u7B97\u7A00\u758F LU \u5206\u89E3\u3002",ja:"\u5B8C\u5168\u30D4\u30DC\u30C3\u30C8\u3092\u7528\u3044\u3066\u758ELU\u5206\u89E3\u3092\u884C\u3044\u307E\u3059\u3002"},parameterDefinitions:{en:"A (Array|Matrix), order (string), threshold (number)",cn:"A\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0C\u5206\u89E3\u987A\u5E8F\uFF08\u5B57\u7B26\u4E32\uFF09\uFF0C\u9608\u503C\uFF08\u6570\u5B57\uFF09",ja:"A\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001\u5206\u89E3\u9806\u5E8F\uFF08\u6587\u5B57\u5217\uFF09\u3001\u3057\u304D\u3044\u5024\uFF08\u6570\u5024\uFF09"}},{title:"sylvester",call:"sylvester(A, B, C)",result:"Error: A is not defined",definition:{en:"Solve the real-valued Sylvester equation AX + XB = C for X.",cn:"\u6C42\u89E3\u5B9E\u6570Sylvester\u65B9\u7A0B AX + XB = C\u3002",ja:"\u5B9F\u6570Sylvester\u65B9\u7A0B\u5F0F AX + XB = C \u3092\u89E3\u304D\u307E\u3059\u3002"},parameterDefinitions:{en:"A (Array|Matrix), B (Array|Matrix), C (Array|Matrix)",cn:"A\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0CB\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0CC\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"A\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001B\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001C\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"symbolicEqual",call:"symbolicEqual('x+x', '2x')",result:"true",definition:{en:"Check if two expressions are symbolically equivalent.",cn:"\u68C0\u6D4B\u4E24\u4E2A\u8868\u8FBE\u5F0F\u5728\u7B26\u53F7\u610F\u4E49\u4E0A\u662F\u5426\u76F8\u7B49\u3002",ja:"2\u3064\u306E\u5F0F\u304C\u8A18\u53F7\u7684\u306B\u7B49\u3057\u3044\u304B\u3069\u3046\u304B\u5224\u5B9A\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"expr1 (string|Node), expr2 (string|Node)",cn:"\u8868\u8FBE\u5F0F1\uFF08\u5B57\u7B26\u4E32\u6216\u8282\u70B9\uFF09\uFF0C\u8868\u8FBE\u5F0F2\uFF08\u5B57\u7B26\u4E32\u6216\u8282\u70B9\uFF09",ja:"\u5F0F1\uFF08\u6587\u5B57\u5217\u307E\u305F\u306FNode\uFF09\u3001\u5F0F2\uFF08\u6587\u5B57\u5217\u307E\u305F\u306FNode\uFF09"}},{title:"usolve",call:"usolve([[1,2],[0,1]], [3,4])",result:`[
  [
    -5
  ],
  [
    4
  ]
]`,definition:{en:"Find one solution of a linear system by backward substitution.",cn:"\u4F7F\u7528\u56DE\u4EE3\u6CD5\u6C42\u89E3\u7EBF\u6027\u65B9\u7A0B\u7EC4\u7684\u4E00\u4E2A\u89E3\u3002",ja:"\u5F8C\u9000\u4EE3\u5165\u6CD5\u3067\u7DDA\u5F62\u65B9\u7A0B\u5F0F\u7CFB\u306E\u5358\u4E00\u89E3\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"U (Array|Matrix), b (Array|Matrix)",cn:"U\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cb\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"U\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001b\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"usolveAll",call:"usolveAll([[1,2],[0,1]], [3,4])",result:`[
  [
    [
      -5
    ],
    [
      4
    ]
  ]
]`,definition:{en:"Find all solutions of a linear system by backward substitution.",cn:"\u4F7F\u7528\u56DE\u4EE3\u6CD5\u6C42\u89E3\u7EBF\u6027\u65B9\u7A0B\u7EC4\u7684\u6240\u6709\u89E3\u3002",ja:"\u5F8C\u9000\u4EE3\u5165\u6CD5\u3067\u7DDA\u5F62\u65B9\u7A0B\u5F0F\u7CFB\u306E\u3059\u3079\u3066\u306E\u89E3\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"U (Array|Matrix), b (Array|Matrix)",cn:"U\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cb\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"U\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001b\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}}]},{category:"Arithmetic functions",functions:[{title:"abs",call:"abs(-3.2)",result:"3.2",definition:{en:"Compute the absolute value of a number.",cn:"\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u7EDD\u5BF9\u503C\u3002",ja:"\u6570\u5024\u306E\u7D76\u5BFE\u5024\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number|Complex|Array|Matrix)",cn:"x\uFF08\u6570\u5B57\u3001\u590D\u6570\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u6570\u5024\u3001\u8907\u7D20\u6570\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"add",call:"add(2, 3)",result:"5",definition:{en:"Add two or more values (x + y).",cn:"\u5C06\u4E24\u4E2A\u6216\u66F4\u591A\u6570\u503C\u76F8\u52A0\uFF08x + y\uFF09\u3002",ja:"2\u3064\u4EE5\u4E0A\u306E\u5024\u3092\u52A0\u7B97\u3057\u307E\u3059\uFF08x + y\uFF09\u3002"},parameterDefinitions:{en:"x, y, ... (number|Array|Matrix)",cn:"x\u3001y\u3001\u2026\uFF08\u6570\u5B57\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\u3001y\u3001\u2026\uFF08\u6570\u5024\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"cbrt",call:"cbrt(8)",result:"2",definition:{en:"Calculate the cubic root of a value. Optionally compute all roots.",cn:"\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u7ACB\u65B9\u6839\uFF0C\u53EF\u9009\u5730\u8BA1\u7B97\u6240\u6709\u7ACB\u65B9\u6839\u3002",ja:"\u5024\u306E\u7ACB\u65B9\u6839\u3092\u8A08\u7B97\u3057\u307E\u3059\uFF08\u5168\u3066\u306E\u6839\u3092\u6C42\u3081\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u3042\u308A\uFF09\u3002"},parameterDefinitions:{en:"x (number|Complex), allRoots (boolean, optional)",cn:"x\uFF08\u6570\u5B57\u6216\u590D\u6570\uFF09\uFF0CallRoots\uFF08\u5E03\u5C14\uFF0C\u53EF\u9009\uFF09",ja:"x\uFF08\u6570\u5024\u307E\u305F\u306F\u8907\u7D20\u6570\uFF09\u3001allRoots\uFF08\u30D6\u30FC\u30EB\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09"}},{title:"ceil",call:"ceil(3.2)",result:"4",definition:{en:"Round a value towards plus infinity (also applies to complex).",cn:"\u5411\u6B63\u65E0\u7A77\u65B9\u5411\u53D6\u6574\uFF08\u5BF9\u4E8E\u590D\u6570\u5219\u5BF9\u5B9E\u90E8\u548C\u865A\u90E8\u5206\u522B\u53D6\u6574\uFF09\u3002",ja:"\u5024\u3092\u6B63\u306E\u7121\u9650\u5927\u65B9\u5411\u306B\u4E38\u3081\u307E\u3059\uFF08\u8907\u7D20\u6570\u306E\u5834\u5408\u306F\u5B9F\u90E8\u3068\u865A\u90E8\u3092\u500B\u5225\u306B\u51E6\u7406\uFF09\u3002"},parameterDefinitions:{en:"x (number|Complex|Array|Matrix)",cn:"x\uFF08\u6570\u5B57\u3001\u590D\u6570\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u6570\u5024\u3001\u8907\u7D20\u6570\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"cube",call:"cube(3)",result:"27",definition:{en:"Compute the cube of a value (x*x*x).",cn:"\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u7ACB\u65B9 (x*x*x)\u3002",ja:"\u5024\u306E\u7ACB\u65B9 (x*x*x) \u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number|Complex|Array|Matrix)",cn:"x\uFF08\u6570\u5B57\u3001\u590D\u6570\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u6570\u5024\u3001\u8907\u7D20\u6570\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"divide",call:"divide(6, 2)",result:"3",definition:{en:"Divide two values (x / y).",cn:"\u4E24\u4E2A\u503C\u76F8\u9664 (x / y)\u3002",ja:"2\u3064\u306E\u5024\u3092\u9664\u7B97\u3057\u307E\u3059 (x / y)\u3002"},parameterDefinitions:{en:"x (number|Array|Matrix), y (number|Array|Matrix)",cn:"x\uFF08\u6570\u5B57\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cy\uFF08\u6570\u5B57\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u6570\u5024\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001y\uFF08\u6570\u5024\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"dotDivide",call:"dotDivide([6,8],[2,4])",result:`[
  3,
  2
]`,definition:{en:"Divide two matrices/arrays element wise.",cn:"\u9010\u5143\u7D20\u5730\u5BF9\u4E24\u4E2A\u77E9\u9635\u6216\u6570\u7EC4\u6267\u884C\u9664\u6CD5\u3002",ja:"2\u3064\u306E\u884C\u5217\u30FB\u914D\u5217\u3092\u8981\u7D20\u5358\u4F4D\u3067\u9664\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix), y (Array|Matrix)",cn:"x\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cy\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001y\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"dotMultiply",call:"dotMultiply([2,3],[4,5])",result:`[
  8,
  15
]`,definition:{en:"Multiply two matrices/arrays element wise.",cn:"\u9010\u5143\u7D20\u5730\u5BF9\u4E24\u4E2A\u77E9\u9635\u6216\u6570\u7EC4\u6267\u884C\u4E58\u6CD5\u3002",ja:"2\u3064\u306E\u884C\u5217\u30FB\u914D\u5217\u3092\u8981\u7D20\u5358\u4F4D\u3067\u4E57\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix), y (Array|Matrix)",cn:"x\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cy\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001y\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"dotPow",call:"dotPow([2,3],[2,3])",result:`[
  4,
  27
]`,definition:{en:"Raise x to the power of y element wise (x^y).",cn:"\u9010\u5143\u7D20\u5730\u5BF9 x^y \u6C42\u5E42\u3002",ja:"x^y \u3092\u8981\u7D20\u5358\u4F4D\u3067\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix), y (Array|Matrix)",cn:"x\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cy\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001y\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"exp",call:"exp(1)",result:"2.718281828459045",definition:{en:"Compute the exponential of a value.",cn:"\u8BA1\u7B97 e^x\u3002",ja:"\u5024\u306E\u6307\u6570\u95A2\u6570 e^x \u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number|Complex|Array|Matrix)",cn:"x\uFF08\u6570\u5B57\u3001\u590D\u6570\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u6570\u5024\u3001\u8907\u7D20\u6570\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"expm1",call:"expm1(1)",result:"1.718281828459045",definition:{en:"Compute (e^x - 1).",cn:"\u8BA1\u7B97 e^x - 1\u3002",ja:"e^x - 1 \u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number|Complex)",cn:"x\uFF08\u6570\u5B57\u6216\u590D\u6570\uFF09",ja:"x\uFF08\u6570\u5024\u307E\u305F\u306F\u8907\u7D20\u6570\uFF09"}},{title:"fix",call:"fix(3.7)",result:"3",definition:{en:"Round a value towards zero.",cn:"\u5411\u96F6\u65B9\u5411\u53D6\u6574\uFF08\u622A\u65AD\uFF09\u3002",ja:"\u5024\u30920\u65B9\u5411\u306B\u4E38\u3081\u307E\u3059\uFF08\u5207\u308A\u6368\u3066\uFF09\u3002"},parameterDefinitions:{en:"x (number|Complex|Array|Matrix)",cn:"x\uFF08\u6570\u5B57\u3001\u590D\u6570\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u6570\u5024\u3001\u8907\u7D20\u6570\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"floor",call:"floor(3.7)",result:"3",definition:{en:"Round a value towards minus infinity.",cn:"\u5411\u8D1F\u65E0\u7A77\u65B9\u5411\u53D6\u6574\u3002",ja:"\u5024\u3092\u8CA0\u306E\u7121\u9650\u5927\u65B9\u5411\u306B\u4E38\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number|Complex|Array|Matrix)",cn:"x\uFF08\u6570\u5B57\u3001\u590D\u6570\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u6570\u5024\u3001\u8907\u7D20\u6570\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"gcd",call:"gcd(8, 12)",result:"4",definition:{en:"Compute the greatest common divisor of two or more values.",cn:"\u6C42\u4E24\u4E2A\u6216\u66F4\u591A\u6570\u7684\u6700\u5927\u516C\u7EA6\u6570\u3002",ja:"2\u3064\u4EE5\u4E0A\u306E\u6570\u306E\u6700\u5927\u516C\u7D04\u6570\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"a, b, ... (number|BigNumber)",cn:"a, b, ...\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"a, b, ...\uFF08\u6570\u5024\u307E\u305F\u306FBigNumber\uFF09"}},{title:"hypot",call:"hypot(3, 4)",result:"5",definition:{en:"Compute the square root of the sum of squares of provided values.",cn:"\u8BA1\u7B97\u591A\u4E2A\u6570\u7684\u5E73\u65B9\u548C\u7684\u5E73\u65B9\u6839\uFF08\u5982\u52FE\u80A1\u5B9A\u7406\uFF09\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u5024\u306E2\u4E57\u548C\u306E\u5E73\u65B9\u6839\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"a, b, ... (number|BigNumber)",cn:"a, b, \u2026\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"a, b, \u2026\uFF08\u6570\u5024\u307E\u305F\u306FBigNumber\uFF09"}},{title:"invmod",call:"invmod(3, 11)",result:"4",definition:{en:"Compute the modular multiplicative inverse of a modulo b.",cn:"\u8BA1\u7B97 a \u5728\u6A21 b \u610F\u4E49\u4E0B\u7684\u4E58\u6CD5\u9006\u5143\u3002",ja:"a \u306E b \u306B\u5BFE\u3059\u308B\uFF08\u4E57\u6CD5\u7684\uFF09\u30E2\u30B8\u30E5\u30E9\u9006\u6570\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"a, b (number|BigNumber)",cn:"a, b\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"a, b\uFF08\u6570\u5024\u307E\u305F\u306FBigNumber\uFF09"}},{title:"lcm",call:"lcm(4, 6)",result:"12",definition:{en:"Compute the least common multiple of two or more values.",cn:"\u6C42\u4E24\u4E2A\u6216\u66F4\u591A\u6570\u7684\u6700\u5C0F\u516C\u500D\u6570\u3002",ja:"2\u3064\u4EE5\u4E0A\u306E\u6570\u306E\u6700\u5C0F\u516C\u500D\u6570\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"a, b, ... (number|BigNumber)",cn:"a, b, ...\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"a, b, ...\uFF08\u6570\u5024\u307E\u305F\u306FBigNumber\uFF09"}},{title:"log",call:"log(100, 10)",result:"2",definition:{en:"Compute the logarithm of a value (custom base optional).",cn:"\u8BA1\u7B97\u5BF9\u6570\uFF08\u53EF\u6307\u5B9A\u5E95\uFF09\u3002",ja:"\u5024\u306E\u5BFE\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\uFF08\u4EFB\u610F\u306E\u5E95\u3092\u6307\u5B9A\u53EF\u80FD\uFF09\u3002"},parameterDefinitions:{en:"x (number|Complex), base (number|Complex, optional)",cn:"x\uFF08\u6570\u5B57\u6216\u590D\u6570\uFF09\uFF0Cbase\uFF08\u53EF\u9009\uFF0C\u6570\u5B57\u6216\u590D\u6570\uFF09",ja:"x\uFF08\u6570\u5024\u307E\u305F\u306F\u8907\u7D20\u6570\uFF09\u3001base\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\u3001\u6570\u5024\u307E\u305F\u306F\u8907\u7D20\u6570\uFF09"}},{title:"log10",call:"log10(100)",result:"2",definition:{en:"Compute the 10-base logarithm of a value.",cn:"\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684 10 \u8FDB\u5236\u5BF9\u6570\u3002",ja:"\u5024\u306E10\u9032\u5BFE\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number|Complex)",cn:"x\uFF08\u6570\u5B57\u6216\u590D\u6570\uFF09",ja:"x\uFF08\u6570\u5024\u307E\u305F\u306F\u8907\u7D20\u6570\uFF09"}},{title:"log1p",call:"log1p(1)",result:"0.6931471805599453",definition:{en:"Compute ln(1 + x).",cn:"\u8BA1\u7B97 ln(1 + x)\u3002",ja:"ln(1 + x) \u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number|Complex)",cn:"x\uFF08\u6570\u5B57\u6216\u590D\u6570\uFF09",ja:"x\uFF08\u6570\u5024\u307E\u305F\u306F\u8907\u7D20\u6570\uFF09"}},{title:"log2",call:"log2(8)",result:"3",definition:{en:"Compute the base-2 logarithm of a value.",cn:"\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684 2 \u8FDB\u5236\u5BF9\u6570\u3002",ja:"\u5024\u306E2\u9032\u5BFE\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number|Complex)",cn:"x\uFF08\u6570\u5B57\u6216\u590D\u6570\uFF09",ja:"x\uFF08\u6570\u5024\u307E\u305F\u306F\u8907\u7D20\u6570\uFF09"}},{title:"mod",call:"mod(8,3)",result:"2",definition:{en:"Compute x mod y, the remainder of x / y.",cn:"\u8BA1\u7B97 x \xF7 y \u7684\u4F59\u6570\uFF08x mod y\uFF09\u3002",ja:"x\xF7y \u306E\u4F59\u308A (x mod y) \u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (number|BigNumber)",cn:"x, y\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"x, y\uFF08\u6570\u5024\u307E\u305F\u306FBigNumber\uFF09"}},{title:"multiply",call:"multiply(2, 3)",result:"6",definition:{en:"Multiply two or more values (x * y).",cn:"\u5C06\u4E24\u4E2A\u6216\u66F4\u591A\u6570\u503C\u76F8\u4E58\uFF08x * y\uFF09\u3002",ja:"2\u3064\u4EE5\u4E0A\u306E\u5024\u3092\u4E57\u7B97\u3057\u307E\u3059\uFF08x * y\uFF09\u3002"},parameterDefinitions:{en:"x, y, ... (number|Array|Matrix)",cn:"x\u3001y\u3001\u2026\uFF08\u6570\u5B57\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\u3001y\u3001\u2026\uFF08\u6570\u5024\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"norm",call:"norm([3,4])",result:"5",definition:{en:"Compute the norm of a number, vector, or matrix (p optional).",cn:"\u8BA1\u7B97\u6570\u5B57\u3001\u5411\u91CF\u6216\u77E9\u9635\u7684\u8303\u6570\uFF0C\u53EF\u9009 p\u3002",ja:"\u6570\u5024\u3001\u30D9\u30AF\u30C8\u30EB\u3001\u884C\u5217\u306E\u30CE\u30EB\u30E0\u3092\u8A08\u7B97\u3057\u307E\u3059\uFF08p \u306F\u4EFB\u610F\uFF09\u3002"},parameterDefinitions:{en:"x (Array|Matrix), p (number|string, optional)",cn:"x\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cp\uFF08\u6570\u5B57\u6216\u5B57\u7B26\u4E32\uFF0C\u53EF\u9009\uFF09",ja:"x\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001p\uFF08\u6570\u5024\u307E\u305F\u306F\u6587\u5B57\u5217\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09"}},{title:"nthRoot",call:"nthRoot(16, 4)",result:"2",definition:{en:"Compute the nth root of a value (principal root).",cn:"\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684 n \u6B21\u65B9\u6839\uFF08\u4E3B\u6839\uFF09\u3002",ja:"\u5024\u306En\u4E57\u6839\uFF08\u4E3B\u5024\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"a (number|BigNumber|Complex), root (number, optional)",cn:"a\uFF08\u6570\u5B57\u3001\u5927\u6570\u6216\u590D\u6570\uFF09\uFF0Croot\uFF08\u53EF\u9009\uFF0C\u6570\u5B57\uFF09",ja:"a\uFF08\u6570\u5024\u3001BigNumber\u307E\u305F\u306F\u8907\u7D20\u6570\uFF09\u3001root\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\u3001\u6570\u5024\uFF09"}},{title:"nthRoots",call:"nthRoots(1,3)",result:`[
  {
    "mathjs": "Complex",
    "re": 1,
    "im": 0
  },
  {
    "mathjs": "Complex",
    "re": -0.4999999999999998,
    "im": 0.8660254037844387
  },
  {
    "mathjs": "Complex",
    "re": -0.5000000000000004,
    "im": -0.8660254037844384
  }
]`,definition:{en:"Compute all nth roots of a value, including complex ones.",cn:"\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u6240\u6709 n \u6B21\u65B9\u6839\uFF0C\u53EF\u80FD\u5305\u542B\u590D\u6570\u89E3\u3002",ja:"\u5024\u306En\u4E57\u6839\u3092\u3059\u3079\u3066\u6C42\u3081\u307E\u3059\uFF08\u8907\u7D20\u89E3\u3092\u542B\u3080\uFF09\u3002"},parameterDefinitions:{en:"x (number|Complex), root (number)",cn:"x\uFF08\u6570\u5B57\u6216\u590D\u6570\uFF09\uFF0Croot\uFF08\u6570\u5B57\uFF09",ja:"x\uFF08\u6570\u5024\u307E\u305F\u306F\u8907\u7D20\u6570\uFF09\u3001root\uFF08\u6570\u5024\uFF09"}},{title:"pow",call:"pow(2, 3)",result:"8",definition:{en:"Compute x raised to the power of y (x^y).",cn:"\u8BA1\u7B97 x^y\u3002",ja:"x^y \u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number|Complex|Array|Matrix), y (number|Complex|Array|Matrix)",cn:"x\uFF08\u6570\u5B57\u3001\u590D\u6570\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cy\uFF08\u6570\u5B57\u3001\u590D\u6570\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u6570\u5024\u3001\u8907\u7D20\u6570\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001y\uFF08\u6570\u5024\u3001\u8907\u7D20\u6570\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"round",call:"round(3.14159, 2)",result:"3.14",definition:{en:"Round a value to the nearest value with optional decimals.",cn:"\u56DB\u820D\u4E94\u5165\u5230\u6307\u5B9A\u7684\u5C0F\u6570\u4F4D\u6570\u3002",ja:"\u5C0F\u6570\u70B9\u4EE5\u4E0Bn\u6841\u307E\u3067\u56DB\u6368\u4E94\u5165\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number|Complex|Array|Matrix), n (number, optional)",cn:"x\uFF08\u6570\u5B57\u3001\u590D\u6570\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cn\uFF08\u53EF\u9009\uFF0C\u6570\u5B57\uFF09",ja:"x\uFF08\u6570\u5024\u3001\u8907\u7D20\u6570\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001n\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\u3001\u6570\u5024\uFF09"}},{title:"sign",call:"sign(-3)",result:"-1",definition:{en:"Compute the sign of a value (-1, 0, +1).",cn:"\u8BA1\u7B97\u6570\u503C\u7684\u7B26\u53F7\uFF08-1\u30010 \u6216 1\uFF09\u3002",ja:"\u5024\u306E\u7B26\u53F7\uFF08-1\u30010\u3001+1\uFF09\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number|BigNumber|Complex)",cn:"x\uFF08\u6570\u5B57\u3001\u5927\u6570\u6216\u590D\u6570\uFF09",ja:"x\uFF08\u6570\u5024\u3001BigNumber\u307E\u305F\u306F\u8907\u7D20\u6570\uFF09"}},{title:"sqrt",call:"sqrt(9)",result:"3",definition:{en:"Compute the square root of a value.",cn:"\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u5E73\u65B9\u6839\u3002",ja:"\u5024\u306E\u5E73\u65B9\u6839\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number|Complex|Array|Matrix)",cn:"x\uFF08\u6570\u5B57\u3001\u590D\u6570\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u6570\u5024\u3001\u8907\u7D20\u6570\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"square",call:"square(3)",result:"9",definition:{en:"Compute the square of a value (x*x).",cn:"\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u5E73\u65B9 (x*x)\u3002",ja:"\u5024\u306E\u5E73\u65B9 (x*x) \u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number|Complex|Array|Matrix)",cn:"x\uFF08\u6570\u5B57\u3001\u590D\u6570\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u6570\u5024\u3001\u8907\u7D20\u6570\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"subtract",call:"subtract(8, 3)",result:"5",definition:{en:"Subtract two values (x - y).",cn:"\u4E24\u4E2A\u6570\u76F8\u51CF (x - y)\u3002",ja:"2\u3064\u306E\u5024\u306E\u5DEE\u3092\u6C42\u3081\u307E\u3059 (x - y)\u3002"},parameterDefinitions:{en:"x, y (number|Array|Matrix)",cn:"x, y\uFF08\u6570\u5B57\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x, y\uFF08\u6570\u5024\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"unaryMinus",call:"unaryMinus(3)",result:"-3",definition:{en:"Apply unary minus operation (negate the value).",cn:"\u5BF9\u503C\u6267\u884C\u4E00\u5143\u8D1F\u64CD\u4F5C\uFF08\u53D6\u53CD\uFF09\u3002",ja:"\u5358\u9805\u30DE\u30A4\u30CA\u30B9\u6F14\u7B97\u5B50\u3092\u9069\u7528\u3057\u3001\u5024\u3092\u7B26\u53F7\u53CD\u8EE2\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number|Complex|Array|Matrix)",cn:"x\uFF08\u6570\u5B57\u3001\u590D\u6570\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u6570\u5024\u3001\u8907\u7D20\u6570\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"unaryPlus",call:"unaryPlus(-3)",result:"-3",definition:{en:"Apply unary plus operation (usually no effect).",cn:"\u5BF9\u503C\u6267\u884C\u4E00\u5143\u52A0\u64CD\u4F5C\uFF08\u901A\u5E38\u65E0\u5B9E\u9645\u53D8\u5316\uFF09\u3002",ja:"\u5358\u9805\u30D7\u30E9\u30B9\u6F14\u7B97\u5B50\u3092\u9069\u7528\u3057\u307E\u3059\uFF08\u901A\u5E38\u5909\u5316\u306F\u3042\u308A\u307E\u305B\u3093\uFF09\u3002"},parameterDefinitions:{en:"x (number|Complex|Array|Matrix)",cn:"x\uFF08\u6570\u5B57\u3001\u590D\u6570\u3001\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u6570\u5024\u3001\u8907\u7D20\u6570\u3001\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"xgcd",call:"xgcd(8, 12)",result:`{
  "mathjs": "DenseMatrix",
  "data": [
    4,
    -1,
    1
  ],
  "size": [
    3
  ]
}`,definition:{en:"Compute the extended greatest common divisor of two values.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u6570\u7684\u6269\u5C55\u6700\u5927\u516C\u7EA6\u6570\u3002",ja:"2\u3064\u306E\u5024\u306E\u62E1\u5F35\u30E6\u30FC\u30AF\u30EA\u30C3\u30C9\u4E92\u9664\u6CD5\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"a, b (number|BigNumber)",cn:"a, b\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"a, b\uFF08\u6570\u5024\u307E\u305F\u306FBigNumber\uFF09"}}]},{category:"Bitwise functions",functions:[{title:"bitAnd",call:"bitAnd(5, 3)",result:"1",definition:{en:"Apply bitwise AND to two values (x & y).",cn:"\u5BF9\u4E24\u4E2A\u503C\u8FDB\u884C\u6309\u4F4D\u4E0E (x & y)\u3002",ja:"2\u3064\u306E\u5024\u306B\u5BFE\u3057\u3066\u30D3\u30C3\u30C8AND\u3092\u5B9F\u884C\u3057\u307E\u3059 (x & y)\u3002"},parameterDefinitions:{en:"x, y (number|BigNumber)",cn:"x, y\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"x, y\uFF08\u6570\u5024\u307E\u305F\u306FBigNumber\uFF09"}},{title:"bitNot",call:"bitNot(5)",result:"-6",definition:{en:"Apply bitwise NOT to a value (~x).",cn:"\u5BF9\u503C\u6267\u884C\u6309\u4F4D\u53D6\u53CD (~x)\u3002",ja:"\u5024\u306B\u5BFE\u3057\u3066\u30D3\u30C3\u30C8NOT\u6F14\u7B97\u3092\u884C\u3044\u307E\u3059 (~x)\u3002"},parameterDefinitions:{en:"x (number|BigNumber)",cn:"x\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"x\uFF08\u6570\u5024\u307E\u305F\u306FBigNumber\uFF09"}},{title:"bitOr",call:"bitOr(5, 3)",result:"7",definition:{en:"Apply bitwise OR to two values (x | y).",cn:"\u5BF9\u4E24\u4E2A\u503C\u8FDB\u884C\u6309\u4F4D\u6216 (x | y)\u3002",ja:"2\u3064\u306E\u5024\u306B\u5BFE\u3057\u3066\u30D3\u30C3\u30C8OR\u3092\u5B9F\u884C\u3057\u307E\u3059 (x | y)\u3002"},parameterDefinitions:{en:"x, y (number|BigNumber)",cn:"x, y\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"x, y\uFF08\u6570\u5024\u307E\u305F\u306FBigNumber\uFF09"}},{title:"bitXor",call:"bitXor(5, 3)",result:"6",definition:{en:"Apply bitwise XOR to two values (x ^ y).",cn:"\u5BF9\u4E24\u4E2A\u503C\u8FDB\u884C\u6309\u4F4D\u5F02\u6216 (x ^ y)\u3002",ja:"2\u3064\u306E\u5024\u306B\u5BFE\u3057\u3066\u30D3\u30C3\u30C8XOR\u3092\u5B9F\u884C\u3057\u307E\u3059 (x ^ y)\u3002"},parameterDefinitions:{en:"x, y (number|BigNumber)",cn:"x, y\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"x, y\uFF08\u6570\u5024\u307E\u305F\u306FBigNumber\uFF09"}},{title:"leftShift",call:"leftShift(5, 1)",result:"10",definition:{en:"Shift bits of x left by y (x << y).",cn:"\u5C06 x \u7684\u4E8C\u8FDB\u5236\u4F4D\u5DE6\u79FB y \u4F4D (x << y)\u3002",ja:"x \u306E\u30D3\u30C3\u30C8\u3092 y \u30D3\u30C3\u30C8\u5DE6\u30B7\u30D5\u30C8\u3057\u307E\u3059 (x << y)\u3002"},parameterDefinitions:{en:"x, y (number|BigNumber)",cn:"x, y\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"x, y\uFF08\u6570\u5024\u307E\u305F\u306FBigNumber\uFF09"}},{title:"rightArithShift",call:"rightArithShift(5, 1)",result:"2",definition:{en:"Arithmetic right shift bits of x by y (x >> y).",cn:"\u5BF9 x \u7684\u4E8C\u8FDB\u5236\u4F4D\u8FDB\u884C\u7B97\u672F\u53F3\u79FB (x >> y)\u3002",ja:"x \u306E\u30D3\u30C3\u30C8\u3092\u7B97\u8853\u7684\u306B\u53F3\u30B7\u30D5\u30C8\u3057\u307E\u3059 (x >> y)\u3002"},parameterDefinitions:{en:"x, y (number|BigNumber)",cn:"x, y\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"x, y\uFF08\u6570\u5024\u307E\u305F\u306FBigNumber\uFF09"}},{title:"rightLogShift",call:"rightLogShift(5, 1)",result:"2",definition:{en:"Logical right shift bits of x by y (x >>> y).",cn:"\u5BF9 x \u7684\u4E8C\u8FDB\u5236\u4F4D\u8FDB\u884C\u903B\u8F91\u53F3\u79FB (x >>> y)\u3002",ja:"x \u306E\u30D3\u30C3\u30C8\u3092\u8AD6\u7406\u7684\u306B\u53F3\u30B7\u30D5\u30C8\u3057\u307E\u3059 (x >>> y)\u3002"},parameterDefinitions:{en:"x, y (number|BigNumber)",cn:"x, y\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"x, y\uFF08\u6570\u5024\u307E\u305F\u306FBigNumber\uFF09"}}]},{category:"Combinatorics functions",functions:[{title:"bellNumbers",call:"bellNumbers(3)",result:"5",definition:{en:"Count the ways to partition a set of n distinct elements.",cn:"\u8BA1\u7B97 n \u4E2A\u4E92\u5F02\u5143\u7D20\u7684\u6240\u6709\u5212\u5206\u65B9\u5F0F\u6570\u91CF\u3002",ja:"n \u500B\u306E\u7570\u306A\u308B\u8981\u7D20\u3092\u5206\u5272\u3059\u308B\u65B9\u6CD5\u306E\u6570\u3092\u6570\u3048\u307E\u3059\u3002"},parameterDefinitions:{en:"n (number)",cn:"n\uFF08\u6570\u5B57\uFF09",ja:"n\uFF08\u6570\u5024\uFF09"}},{title:"catalan",call:"catalan(5)",result:"42",definition:{en:"Compute the Catalan number for n, enumerating various combinatorial structures.",cn:"\u8BA1\u7B97 n \u7684\u5361\u5854\u5170\u6570\uFF0C\u5BF9\u5E94\u591A\u79CD\u7EC4\u5408\u7ED3\u6784\u8BA1\u6570\u3002",ja:"\u69D8\u3005\u306A\u7D44\u5408\u305B\u69CB\u9020\u3092\u6570\u3048\u4E0A\u3052\u308B n \u306E\u30AB\u30BF\u30E9\u30F3\u6570\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"n (number)",cn:"n\uFF08\u6570\u5B57\uFF09",ja:"n\uFF08\u6570\u5024\uFF09"}},{title:"composition",call:"composition(5, 3)",result:"6",definition:{en:"Compute the number of compositions of n into k parts.",cn:"\u8BA1\u7B97\u5C06 n \u62C6\u5206\u6210 k \u90E8\u5206\u7684\u7EC4\u5408\u6570\u3002",ja:"n \u3092 k \u500B\u306E\u90E8\u5206\u306B\u5206\u5272\u3059\u308B\u65B9\u6CD5\u306E\u6570\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"n, k (number)",cn:"n, k\uFF08\u6570\u5B57\uFF09",ja:"n, k\uFF08\u6570\u5024\uFF09"}},{title:"stirlingS2",call:"stirlingS2(5, 3)",result:"25",definition:{en:"Count the ways to partition n labeled objects into k nonempty unlabeled subsets.",cn:"\u8BA1\u7B97\u5C06 n \u4E2A\u6709\u6807\u7B7E\u7684\u5143\u7D20\u5212\u5206\u4E3A k \u4E2A\u975E\u7A7A\u5B50\u96C6\u7684\u65B9\u5F0F\uFF08\u7B2C\u4E8C\u7C7B\u65AF\u7279\u6797\u6570\uFF09\u3002",ja:"n \u500B\u306E\u30E9\u30D9\u30EB\u4ED8\u304D\u8981\u7D20\u3092 k \u500B\u306E\u975E\u7A7A\u30E9\u30D9\u30EB\u306A\u3057\u90E8\u5206\u96C6\u5408\u306B\u5206\u5272\u3059\u308B\u65B9\u6CD5\u306E\u6570\uFF08\u7B2C2\u7A2E\u30B9\u30BF\u30FC\u30EA\u30F3\u30B0\u6570\uFF09\u3002"},parameterDefinitions:{en:"n, k (number)",cn:"n, k\uFF08\u6570\u5B57\uFF09",ja:"n, k\uFF08\u6570\u5024\uFF09"}}]},{category:"Complex functions",functions:[{title:"arg",call:"arg('2 + 2i')",result:'Error: Cannot convert "2 + 2i" to a number',definition:{en:"Compute the argument (angle) of a complex value.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u5E45\u89D2\uFF08\u76F8\u4F4D\uFF09\u3002",ja:"\u8907\u7D20\u6570\u306E\u504F\u89D2\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Complex|number)",cn:"x\uFF08\u590D\u6570\u6216\u6570\u5B57\uFF09",ja:"x\uFF08\u8907\u7D20\u6570\u307E\u305F\u306F\u6570\u5024\uFF09"}},{title:"conj",call:"conj('2 + 2i')",result:'Error: Cannot convert "2 + 2i" to a number',definition:{en:"Compute the complex conjugate of a complex value.",cn:"\u8BA1\u7B97\u590D\u6570\u7684\u5171\u8F6D\u3002",ja:"\u8907\u7D20\u6570\u306E\u5171\u5F79\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Complex|number)",cn:"x\uFF08\u590D\u6570\u6216\u6570\u5B57\uFF09",ja:"x\uFF08\u8907\u7D20\u6570\u307E\u305F\u306F\u6570\u5024\uFF09"}},{title:"im",call:"im('2 + 3i')",result:'Error: Cannot convert "2 + 3i" to a number',definition:{en:"Get the imaginary part of a complex number.",cn:"\u83B7\u53D6\u590D\u6570\u7684\u865A\u90E8\u3002",ja:"\u8907\u7D20\u6570\u306E\u865A\u90E8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Complex|number)",cn:"x\uFF08\u590D\u6570\u6216\u6570\u5B57\uFF09",ja:"x\uFF08\u8907\u7D20\u6570\u307E\u305F\u306F\u6570\u5024\uFF09"}},{title:"re",call:"re('2 + 3i')",result:'Error: Cannot convert "2 + 3i" to a number',definition:{en:"Get the real part of a complex number.",cn:"\u83B7\u53D6\u590D\u6570\u7684\u5B9E\u90E8\u3002",ja:"\u8907\u7D20\u6570\u306E\u5B9F\u90E8\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Complex|number)",cn:"x\uFF08\u590D\u6570\u6216\u6570\u5B57\uFF09",ja:"x\uFF08\u8907\u7D20\u6570\u307E\u305F\u306F\u6570\u5024\uFF09"}}]},{category:"Geometry functions",functions:[{title:"distance",call:"distance([0,0],[3,4])",result:"5",definition:{en:"Calculate the Euclidean distance between two points in N-D space.",cn:"\u8BA1\u7B97 N \u7EF4\u7A7A\u95F4\u4E2D\u4E24\u70B9\u4E4B\u95F4\u7684\u6B27\u51E0\u91CC\u5F97\u8DDD\u79BB\u3002",ja:"N\u6B21\u5143\u7A7A\u9593\u306B\u304A\u3051\u308B2\u70B9\u9593\u306E\u30E6\u30FC\u30AF\u30EA\u30C3\u30C9\u8DDD\u96E2\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"point1 (Array), point2 (Array)",cn:"point1\uFF08\u6570\u7EC4\uFF09\uFF0Cpoint2\uFF08\u6570\u7EC4\uFF09",ja:"point1\uFF08\u914D\u5217\uFF09\u3001point2\uFF08\u914D\u5217\uFF09"}},{title:"intersect",call:"intersect([0,0],[2,2],[0,2],[2,0])",result:`[
  1,
  1
]`,definition:{en:"Find the intersection of two lines (2D/3D) or a line and a plane (3D).",cn:"\u6C42\u4E24\u6761\u7EBF\uFF08\u4E8C\u7EF4/\u4E09\u7EF4\uFF09\u6216\u4E00\u6761\u7EBF\u4E0E\u4E00\u4E2A\u5E73\u9762\uFF08\u4E09\u7EF4\uFF09\u7684\u4EA4\u70B9\u3002",ja:"2\u6B21\u5143/3\u6B21\u5143\u306B\u304A\u3051\u308B2\u76F4\u7DDA\u306E\u4EA4\u70B9\u3001\u307E\u305F\u306F\u76F4\u7DDA\u3068\u5E73\u9762\u306E\u4EA4\u70B9\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"endPoint1Line1, endPoint2Line1, endPoint1Line2, endPoint2Line2, ...",cn:"\u76F4\u7EBF1\u7684\u8D77\u70B9\u4E0E\u7EC8\u70B9\uFF0C\u76F4\u7EBF2\u7684\u8D77\u70B9\u4E0E\u7EC8\u70B9\uFF0C...",ja:"\u7DDA\u52061\u306E\u59CB\u70B9\u3068\u7D42\u70B9\u3001\u7DDA\u52062\u306E\u59CB\u70B9\u3068\u7D42\u70B9\u3001..."}}]},{category:"Logical functions",functions:[{title:"and",call:"and(true, false)",result:"false",definition:{en:"Perform a logical AND of two values.",cn:"\u6267\u884C\u903B\u8F91\u4E0E\u8FD0\u7B97\u3002",ja:"2\u3064\u306E\u5024\u306E\u8AD6\u7406\u7A4D\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (boolean|number)",cn:"x, y\uFF08\u5E03\u5C14\u503C\u6216\u6570\u5B57\uFF09",ja:"x, y\uFF08\u771F\u507D\u5024\u307E\u305F\u306F\u6570\u5024\uFF09"}},{title:"not",call:"not(true)",result:"false",definition:{en:"Perform a logical NOT on a value.",cn:"\u6267\u884C\u903B\u8F91\u975E\u8FD0\u7B97\u3002",ja:"\u5024\u306E\u8AD6\u7406\u5426\u5B9A\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (boolean|number)",cn:"x\uFF08\u5E03\u5C14\u503C\u6216\u6570\u5B57\uFF09",ja:"x\uFF08\u771F\u507D\u5024\u307E\u305F\u306F\u6570\u5024\uFF09"}},{title:"or",call:"or(true, false)",result:"true",definition:{en:"Perform a logical OR of two values.",cn:"\u6267\u884C\u903B\u8F91\u6216\u8FD0\u7B97\u3002",ja:"2\u3064\u306E\u5024\u306E\u8AD6\u7406\u548C\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (boolean|number)",cn:"x, y\uFF08\u5E03\u5C14\u503C\u6216\u6570\u5B57\uFF09",ja:"x, y\uFF08\u771F\u507D\u5024\u307E\u305F\u306F\u6570\u5024\uFF09"}},{title:"xor",call:"xor(1, 0)",result:"true",definition:{en:"Perform a logical exclusive OR.",cn:"\u6267\u884C\u903B\u8F91\u5F02\u6216\u8FD0\u7B97\u3002",ja:"\u6392\u4ED6\u7684\u8AD6\u7406\u548C\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (boolean|number)",cn:"x, y\uFF08\u5E03\u5C14\u503C\u6216\u6570\u5B57\uFF09",ja:"x, y\uFF08\u771F\u507D\u5024\u307E\u305F\u306F\u6570\u5024\uFF09"}}]},{category:"Matrix functions",functions:[{title:"apply",call:"apply([[1,2],[3,4]], 1, val => val * 2)",result:`[
  null,
  null
]`,definition:{en:"Apply a callback function over a matrix/array along a specified axis.",cn:"\u6CBF\u6307\u5B9A\u8F74\u5BF9\u77E9\u9635\u6216\u6570\u7EC4\u5E94\u7528\u51FD\u6570\u3002",ja:"\u6307\u5B9A\u3057\u305F\u8EF8\u306B\u6CBF\u3063\u3066\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u3092\u9069\u7528\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"A (Array|Matrix), dim (number), callback (function)",cn:"A\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cdim\uFF08\u6570\u5B57\uFF09\uFF0Ccallback\uFF08\u51FD\u6570\uFF09",ja:"A\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001dim\uFF08\u6570\u5024\uFF09\u3001callback\uFF08\u95A2\u6570\uFF09"}},{title:"column",call:"column([[1,2],[3,4]], 0)",result:`[
  [
    1
  ],
  [
    3
  ]
]`,definition:{en:"Return a specific column from a Matrix.",cn:"\u4ECE\u77E9\u9635\u4E2D\u8FD4\u56DE\u6307\u5B9A\u5217\u3002",ja:"\u884C\u5217\u304B\u3089\u7279\u5B9A\u306E\u5217\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"value (Matrix|Array), index (number)",cn:"value\uFF08\u77E9\u9635\u6216\u6570\u7EC4\uFF09\uFF0Cindex\uFF08\u6570\u5B57\uFF09",ja:"value\uFF08\u884C\u5217\u307E\u305F\u306F\u914D\u5217\uFF09\u3001index\uFF08\u6570\u5024\uFF09"}},{title:"concat",call:"concat([1,2], [3,4], [5,6])",result:`[
  1,
  2,
  3,
  4,
  5,
  6
]`,definition:{en:"Concatenate multiple matrices/arrays along a specified dimension.",cn:"\u6CBF\u6307\u5B9A\u7EF4\u5EA6\u62FC\u63A5\u591A\u4E2A\u77E9\u9635/\u6570\u7EC4\u3002",ja:"\u6307\u5B9A\u3057\u305F\u6B21\u5143\u306B\u6CBF\u3063\u3066\u8907\u6570\u306E\u884C\u5217/\u914D\u5217\u3092\u9023\u7D50\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"a, b, c, ... (Array|Matrix), dim (number, optional)",cn:"a, b, c, ...\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cdim\uFF08\u6570\u5B57\uFF0C\u53EF\u9009\uFF09",ja:"a, b, c, ...\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001dim\uFF08\u6570\u5024\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09"}},{title:"count",call:"count([1,2,3,'hello'])",result:"4",definition:{en:"Count elements in a matrix, array, or string.",cn:"\u7EDF\u8BA1\u77E9\u9635\u3001\u6570\u7EC4\u6216\u5B57\u7B26\u4E32\u7684\u5143\u7D20\u6570\u91CF\u3002",ja:"\u884C\u5217\u3001\u914D\u5217\u3001\u6587\u5B57\u5217\u306E\u8981\u7D20\u6570\u3092\u6570\u3048\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix|String)",cn:"x\uFF08\u6570\u7EC4\u3001\u77E9\u9635\u6216\u5B57\u7B26\u4E32\uFF09",ja:"x\uFF08\u914D\u5217\u3001\u884C\u5217\u3001\u6587\u5B57\u5217\uFF09"}},{title:"cross",call:"cross([1,2,3], [4,5,6])",result:`[
  -3,
  6,
  -3
]`,definition:{en:"Compute the cross product for two 3D vectors.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u4E09\u7EF4\u5411\u91CF\u7684\u53C9\u79EF\u3002",ja:"2\u3064\u306E3\u6B21\u5143\u30D9\u30AF\u30C8\u30EB\u306E\u30AF\u30ED\u30B9\u7A4D\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (Array|Matrix with length 3)",cn:"x, y\uFF08\u957F\u5EA6\u4E3A3\u7684\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x, y\uFF08\u9577\u30553\u306E\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"ctranspose",call:"ctranspose([[1,2],[3,4]])",result:`[
  [
    1,
    3
  ],
  [
    2,
    4
  ]
]`,definition:{en:"Transpose and complex conjugate a matrix.",cn:"\u5BF9\u77E9\u9635\u8FDB\u884C\u8F6C\u7F6E\u5E76\u53D6\u5171\u8F6D\u3002",ja:"\u884C\u5217\u3092\u8EE2\u7F6E\u3057\u3001\u8907\u7D20\u5171\u5F79\u3092\u53D6\u308A\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Matrix|Array)",cn:"x\uFF08\u77E9\u9635\u6216\u6570\u7EC4\uFF09",ja:"x\uFF08\u884C\u5217\u307E\u305F\u306F\u914D\u5217\uFF09"}},{title:"det",call:"det([[1,2],[3,4]])",result:"-2",definition:{en:"Calculate the determinant of a matrix.",cn:"\u8BA1\u7B97\u77E9\u9635\u7684\u884C\u5217\u5F0F\u3002",ja:"\u884C\u5217\u306E\u884C\u5217\u5F0F\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Matrix|Array)",cn:"x\uFF08\u77E9\u9635\u6216\u6570\u7EC4\uFF09",ja:"x\uFF08\u884C\u5217\u307E\u305F\u306F\u914D\u5217\uFF09"}},{title:"diag",call:"diag([1,2,3])",result:`[
  [
    1,
    0,
    0
  ],
  [
    0,
    2,
    0
  ],
  [
    0,
    0,
    3
  ]
]`,definition:{en:"Create a diagonal matrix or retrieve the diagonal of a matrix.",cn:"\u521B\u5EFA\u5BF9\u89D2\u77E9\u9635\u6216\u63D0\u53D6\u77E9\u9635\u7684\u5BF9\u89D2\u7EBF\u3002",ja:"\u5BFE\u89D2\u884C\u5217\u3092\u4F5C\u6210\u3001\u307E\u305F\u306F\u884C\u5217\u306E\u5BFE\u89D2\u8981\u7D20\u3092\u53D6\u308A\u51FA\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"X (Array|Matrix)",cn:"X\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"X\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"diff",call:"diff([1,4,9,16])",result:`[
  3,
  5,
  7
]`,definition:{en:"Compute the difference between successive elements along a given dimension.",cn:"\u8BA1\u7B97\u6307\u5B9A\u7EF4\u5EA6\u4E0A\u76F8\u90BB\u5143\u7D20\u4E4B\u95F4\u7684\u5DEE\u503C\u3002",ja:"\u6307\u5B9A\u3057\u305F\u6B21\u5143\u306B\u6CBF\u3063\u3066\u3001\u9023\u7D9A\u3059\u308B\u8981\u7D20\u306E\u5DEE\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"arr (Array|Matrix), dim (number, optional)",cn:"arr\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cdim\uFF08\u6570\u5B57\uFF0C\u53EF\u9009\uFF09",ja:"arr\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001dim\uFF08\u6570\u5024\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09"}},{title:"dot",call:"dot([1,2,3],[4,5,6])",result:"32",definition:{en:"Compute the dot product of two vectors.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u5411\u91CF\u7684\u70B9\u79EF\u3002",ja:"2\u3064\u306E\u30D9\u30AF\u30C8\u30EB\u306E\u5185\u7A4D\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (Array|Matrix)",cn:"x, y\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x, y\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"eigs",call:"eigs([[1,2],[3,4]])",result:`{
  "values": [
    -0.37228132326901653,
    5.372281323269014
  ],
  "eigenvectors": [
    {
      "value": -0.37228132326901653,
      "vector": [
        -4.505883335311908,
        3.091669772938812
      ]
    },
    {
      "value": 5.372281323269014,
      "vector": [
        0.4438641329939267,
        0.9703494293791691
      ]
    }
  ]
}`,definition:{en:"Compute eigenvalues and optionally eigenvectors of a square matrix.",cn:"\u8BA1\u7B97\u65B9\u9635\u7684\u7279\u5F81\u503C\u548C\uFF08\u53EF\u9009\uFF09\u7279\u5F81\u5411\u91CF\u3002",ja:"\u6B63\u65B9\u884C\u5217\u306E\u56FA\u6709\u5024\u3068\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\uFF09\u56FA\u6709\u30D9\u30AF\u30C8\u30EB\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Matrix|Array), prec (number, optional)",cn:"x\uFF08\u77E9\u9635\u6216\u6570\u7EC4\uFF09\uFF0Cprec\uFF08\u6570\u503C\uFF0C\u53EF\u9009\uFF09",ja:"x\uFF08\u884C\u5217\u307E\u305F\u306F\u914D\u5217\uFF09\u3001prec\uFF08\u6570\u5024\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09"}},{title:"expm",call:"expm([[1,0],[0,1]])",result:`{
  "mathjs": "DenseMatrix",
  "data": [
    [
      2.7182818284590424,
      0
    ],
    [
      0,
      2.7182818284590424
    ]
  ],
  "size": [
    2,
    2
  ]
}`,definition:{en:"Compute the matrix exponential e^A.",cn:"\u8BA1\u7B97\u77E9\u9635\u7684\u6307\u6570 e^A\u3002",ja:"\u884C\u5217\u306E\u6307\u6570 e^A \u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Matrix|Array)",cn:"x\uFF08\u77E9\u9635\u6216\u6570\u7EC4\uFF09",ja:"x\uFF08\u884C\u5217\u307E\u305F\u306F\u914D\u5217\uFF09"}},{title:"fft",call:"fft([1,2,3,4])",result:`[
  {
    "mathjs": "Complex",
    "re": 10,
    "im": 0
  },
  {
    "mathjs": "Complex",
    "re": -2,
    "im": 2
  },
  {
    "mathjs": "Complex",
    "re": -2,
    "im": 0
  },
  {
    "mathjs": "Complex",
    "re": -1.9999999999999998,
    "im": -2
  }
]`,definition:{en:"Compute the N-dimensional Fast Fourier Transform.",cn:"\u8BA1\u7B97 N \u7EF4\u5FEB\u901F\u5085\u91CC\u53F6\u53D8\u6362\u3002",ja:"N\u6B21\u5143\u306E\u9AD8\u901F\u30D5\u30FC\u30EA\u30A8\u5909\u63DB\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"arr (Array|Matrix)",cn:"arr\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"arr\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"filter",call:"filter([1,2,3,4,5], val => val > 2)",result:`[
  3,
  4,
  5
]`,definition:{en:"Filter the items in an array or 1D matrix using a test function.",cn:"\u4F7F\u7528\u6D4B\u8BD5\u51FD\u6570\u8FC7\u6EE4\u6570\u7EC4\u6216\u4E00\u7EF4\u77E9\u9635\u3002",ja:"\u30C6\u30B9\u30C8\u95A2\u6570\u3092\u4F7F\u7528\u3057\u3066\u914D\u5217\u307E\u305F\u306F1\u6B21\u5143\u884C\u5217\u3092\u30D5\u30A3\u30EB\u30BF\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix), test (function)",cn:"x\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Ctest\uFF08\u51FD\u6570\uFF09",ja:"x\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001test\uFF08\u95A2\u6570\uFF09"}},{title:"flatten",call:"flatten([[1,2],[3,4]])",result:`[
  1,
  2,
  3,
  4
]`,definition:{en:"Flatten a multidimensional matrix into a single dimensional array.",cn:"\u5C06\u591A\u7EF4\u77E9\u9635\u6216\u6570\u7EC4\u5C55\u5F00\u4E3A\u4E00\u7EF4\u3002",ja:"\u591A\u6B21\u5143\u306E\u884C\u5217\u3092\u4E00\u6B21\u5143\u306B\u30D5\u30E9\u30C3\u30C8\u5316\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix)",cn:"x\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"forEach",call:"forEach([1,2,3], val => console.log(val))",result:"undefined",definition:{en:"Iterate over elements of a matrix/array and execute a callback.",cn:"\u904D\u5386\u77E9\u9635/\u6570\u7EC4\u7684\u6BCF\u4E2A\u5143\u7D20\u5E76\u6267\u884C\u56DE\u8C03\u3002",ja:"\u884C\u5217/\u914D\u5217\u306E\u8981\u7D20\u3092\u30A4\u30C6\u30EC\u30FC\u30C8\u3057\u3001\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix), callback (function)",cn:"x\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Ccallback\uFF08\u51FD\u6570\uFF09",ja:"x\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001callback\uFF08\u95A2\u6570\uFF09"}},{title:"getMatrixDataType",call:"getMatrixDataType([[1,2.2],[3,'hello']])",result:"mixed",definition:{en:"Find the data type of all elements in a matrix/array (e.g., 'number', 'Complex').",cn:"\u67E5\u770B\u77E9\u9635\u6216\u6570\u7EC4\u6240\u6709\u5143\u7D20\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u4F8B\u5982 'number' \u6216 'Complex'\u3002",ja:"\u884C\u5217\u307E\u305F\u306F\u914D\u5217\u306E\u3059\u3079\u3066\u306E\u8981\u7D20\u306E\u30C7\u30FC\u30BF\u578B\u3092\u8FD4\u3057\u307E\u3059\uFF08\u4F8B\uFF1A'number'\u3001'Complex'\uFF09\u3002"},parameterDefinitions:{en:"x (Array|Matrix)",cn:"x\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"identity",call:"identity(3)",result:`{
  "mathjs": "DenseMatrix",
  "data": [
    [
      1,
      0,
      0
    ],
    [
      0,
      1,
      0
    ],
    [
      0,
      0,
      1
    ]
  ],
  "size": [
    3,
    3
  ]
}`,definition:{en:"Create an identity matrix of size n x n (or m x n).",cn:"\u521B\u5EFA n x n\uFF08\u6216 m x n\uFF09\u7684\u5355\u4F4D\u77E9\u9635\u3002",ja:"n x n\uFF08\u3042\u308B\u3044\u306F m x n\uFF09\u306E\u5358\u4F4D\u884C\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"n (number) or [m, n] (Array)",cn:"n\uFF08\u6570\u5B57\uFF09\u6216 [m, n]\uFF08\u6570\u7EC4\uFF09",ja:"n\uFF08\u6570\u5024\uFF09\u307E\u305F\u306F [m, n]\uFF08\u914D\u5217\uFF09"}},{title:"ifft",call:"ifft([1,2,3,4])",result:`[
  {
    "mathjs": "Complex",
    "re": 2.5,
    "im": 0
  },
  {
    "mathjs": "Complex",
    "re": -0.5,
    "im": -0.5
  },
  {
    "mathjs": "Complex",
    "re": -0.5,
    "im": 0
  },
  {
    "mathjs": "Complex",
    "re": -0.49999999999999994,
    "im": 0.5
  }
]`,definition:{en:"Compute the N-dimensional inverse Fast Fourier Transform.",cn:"\u8BA1\u7B97 N \u7EF4\u9006\u5FEB\u901F\u5085\u91CC\u53F6\u53D8\u6362\u3002",ja:"N\u6B21\u5143\u306E\u9006\u9AD8\u901F\u30D5\u30FC\u30EA\u30A8\u5909\u63DB\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"arr (Array|Matrix)",cn:"arr\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"arr\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"inv",call:"inv([[1,2],[3,4]])",result:`[
  [
    -2,
    1
  ],
  [
    1.5,
    -0.5
  ]
]`,definition:{en:"Compute the inverse of a square matrix.",cn:"\u8BA1\u7B97\u65B9\u9635\u7684\u9006\u77E9\u9635\u3002",ja:"\u6B63\u65B9\u884C\u5217\u306E\u9006\u884C\u5217\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Matrix|Array)",cn:"x\uFF08\u77E9\u9635\u6216\u6570\u7EC4\uFF09",ja:"x\uFF08\u884C\u5217\u307E\u305F\u306F\u914D\u5217\uFF09"}},{title:"kron",call:"kron([[1,1],[0,1]], [[2,0],[0,2]])",result:`[
  [
    2,
    0,
    2,
    0
  ],
  [
    0,
    2,
    0,
    2
  ],
  [
    0,
    0,
    2,
    0
  ],
  [
    0,
    0,
    0,
    2
  ]
]`,definition:{en:"Compute the Kronecker product of two matrices or vectors.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u77E9\u9635\u6216\u5411\u91CF\u7684\u514B\u7F57\u5185\u514B\u79EF\u3002",ja:"2\u3064\u306E\u884C\u5217\u307E\u305F\u306F\u30D9\u30AF\u30C8\u30EB\u306E\u30AF\u30ED\u30CD\u30C3\u30AB\u30FC\u7A4D\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (Matrix|Array)",cn:"x, y\uFF08\u77E9\u9635\u6216\u6570\u7EC4\uFF09",ja:"x, y\uFF08\u884C\u5217\u307E\u305F\u306F\u914D\u5217\uFF09"}},{title:"map",call:"map([1,2,3], val => val * val)",result:`[
  1,
  4,
  9
]`,definition:{en:"Create a new array/matrix by applying a callback function to each element.",cn:"\u901A\u8FC7\u5BF9\u6BCF\u4E2A\u5143\u7D20\u5E94\u7528\u56DE\u8C03\u521B\u5EFA\u65B0\u7684\u6570\u7EC4/\u77E9\u9635\u3002",ja:"\u5404\u8981\u7D20\u306B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u9069\u7528\u3057\u3066\u65B0\u3057\u3044\u914D\u5217/\u884C\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix), callback (function)",cn:"x\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Ccallback\uFF08\u51FD\u6570\uFF09",ja:"x\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001callback\uFF08\u95A2\u6570\uFF09"}},{title:"matrixFromColumns",call:"matrixFromColumns([1,4],[2,5],[3,6])",result:`[
  [
    1,
    2,
    3
  ],
  [
    4,
    5,
    6
  ]
]`,definition:{en:"Create a dense matrix from vectors as individual columns.",cn:"\u5C06\u591A\u4E2A\u5411\u91CF\u4F5C\u4E3A\u5355\u72EC\u5217\u7EC4\u5408\u6210\u4E00\u4E2A\u7A20\u5BC6\u77E9\u9635\u3002",ja:"\u8907\u6570\u306E\u30D9\u30AF\u30C8\u30EB\u3092\u5217\u3068\u3057\u3066\u307E\u3068\u3081\u3001\u5BC6\u884C\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"...arr (Array|Matrix)",cn:"...arr\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"...arr\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"matrixFromFunction",call:"matrixFromFunction([2,3], (i,j) => i + j)",result:'Error: Cannot convert "0,0undefined" to a number',definition:{en:"Create a matrix by evaluating a function at each matrix index.",cn:"\u6839\u636E\u51FD\u6570\u5BF9\u77E9\u9635\u6BCF\u4E2A\u7D22\u5F15\u8FDB\u884C\u6C42\u503C\u6765\u751F\u6210\u77E9\u9635\u3002",ja:"\u884C\u5217\u306E\u5404\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3067\u95A2\u6570\u3092\u8A55\u4FA1\u3057\u3001\u884C\u5217\u3092\u751F\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"size (Array), fn (function)",cn:"size\uFF08\u6570\u7EC4\uFF09\uFF0Cfn\uFF08\u51FD\u6570\uFF09",ja:"size\uFF08\u914D\u5217\uFF09\u3001fn\uFF08\u95A2\u6570\uFF09"}},{title:"matrixFromRows",call:"matrixFromRows([1,2,3],[4,5,6])",result:`[
  [
    1,
    2,
    3
  ],
  [
    4,
    5,
    6
  ]
]`,definition:{en:"Create a dense matrix from vectors as individual rows.",cn:"\u5C06\u591A\u4E2A\u5411\u91CF\u4F5C\u4E3A\u5355\u72EC\u884C\u7EC4\u5408\u6210\u4E00\u4E2A\u7A20\u5BC6\u77E9\u9635\u3002",ja:"\u8907\u6570\u306E\u30D9\u30AF\u30C8\u30EB\u3092\u884C\u3068\u3057\u3066\u307E\u3068\u3081\u3001\u5BC6\u884C\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"...arr (Array|Matrix)",cn:"...arr\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"...arr\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"ones",call:"ones(2, 3)",result:`{
  "mathjs": "DenseMatrix",
  "data": [
    [
      1,
      1,
      1
    ],
    [
      1,
      1,
      1
    ]
  ],
  "size": [
    2,
    3
  ]
}`,definition:{en:"Create a matrix of ones with given dimensions.",cn:"\u521B\u5EFA\u7ED9\u5B9A\u7EF4\u5EA6\u7684\u5168 1 \u77E9\u9635\u3002",ja:"\u6307\u5B9A\u3057\u305F\u6B21\u5143\u306E\u8981\u7D20\u304C\u3059\u3079\u30661\u306E\u884C\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"m, n, p... (number)",cn:"m, n, p...\uFF08\u6570\u5B57\uFF09",ja:"m, n, p...\uFF08\u6570\u5024\uFF09"}},{title:"partitionSelect",call:"partitionSelect([3,1,4,2], 2)",result:"3",definition:{en:"Partition-based selection of an array or 1D matrix (returns k-th smallest).",cn:"\u57FA\u4E8E\u5206\u533A\u9009\u62E9\u6CD5\uFF0C\u4ECE\u6570\u7EC4\u6216\u4E00\u7EF4\u77E9\u9635\u8FD4\u56DE\u7B2C k \u5C0F\u7684\u5143\u7D20\u3002",ja:"\u914D\u5217\u307E\u305F\u306F1\u6B21\u5143\u884C\u5217\u304B\u3089\u5206\u5272\u9078\u629E\u306B\u3088\u308A\u7B2Ck\u756A\u76EE\u306B\u5C0F\u3055\u3044\u8981\u7D20\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix), k (number)",cn:"x\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Ck\uFF08\u6570\u5B57\uFF09",ja:"x\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001k\uFF08\u6570\u5024\uFF09"}},{title:"pinv",call:"pinv([[1,2],[2,4]])",result:`[
  [
    0.04000000000000001,
    0.08000000000000002
  ],
  [
    0.08000000000000002,
    0.16000000000000003
  ]
]`,definition:{en:"Compute the Moore\u2013Penrose pseudoinverse of a matrix.",cn:"\u8BA1\u7B97\u77E9\u9635\u7684 Moore\u2013Penrose \u4F2A\u9006\u3002",ja:"\u884C\u5217\u306EMoore\u2013Penrose\u64EC\u4F3C\u9006\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Matrix|Array)",cn:"x\uFF08\u77E9\u9635\u6216\u6570\u7EC4\uFF09",ja:"x\uFF08\u884C\u5217\u307E\u305F\u306F\u914D\u5217\uFF09"}},{title:"range",call:"range(1, 5, 2)",result:`{
  "mathjs": "DenseMatrix",
  "data": [
    1,
    3
  ],
  "size": [
    2
  ]
}`,definition:{en:"Create an array of numbers from start to end (step optional).",cn:"\u4ECE start \u5230 end \u751F\u6210\u4E00\u4E2A\u6570\u5B57\u6570\u7EC4\uFF08step \u53EF\u9009\uFF09\u3002",ja:"start \u304B\u3089 end \u307E\u3067\u306E\u6570\u5024\u914D\u5217\u3092\u751F\u6210\u3057\u307E\u3059\uFF08step \u306F\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09\u3002"},parameterDefinitions:{en:"start (number), end (number), step (number, optional)",cn:"start\uFF08\u6570\u5B57\uFF09\uFF0Cend\uFF08\u6570\u5B57\uFF09\uFF0Cstep\uFF08\u6570\u5B57\uFF0C\u53EF\u9009\uFF09",ja:"start\uFF08\u6570\u5024\uFF09\u3001end\uFF08\u6570\u5024\uFF09\u3001step\uFF08\u6570\u5024\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09"}},{title:"reshape",call:"reshape([1,2,3,4,5,6], [2,3])",result:`[
  [
    1,
    2,
    3
  ],
  [
    4,
    5,
    6
  ]
]`,definition:{en:"Reshape an array/matrix to the specified dimensions.",cn:"\u5C06\u6570\u7EC4/\u77E9\u9635\u91CD\u5851\u4E3A\u6307\u5B9A\u7EF4\u5EA6\u3002",ja:"\u914D\u5217/\u884C\u5217\u3092\u6307\u5B9A\u3057\u305F\u6B21\u5143\u306B\u518D\u69CB\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix), sizes (Array)",cn:"x\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Csizes\uFF08\u6570\u7EC4\uFF09",ja:"x\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001sizes\uFF08\u914D\u5217\uFF09"}},{title:"resize",call:"resize([1,2,3], [5], 0)",result:`[
  1,
  2,
  3,
  0,
  0
]`,definition:{en:"Resize a matrix to new dimensions, filling missing elements with a default value if provided.",cn:"\u5C06\u77E9\u9635\u8C03\u6574\u4E3A\u65B0\u7EF4\u5EA6\uFF0C\u53EF\u7528\u9ED8\u8BA4\u503C\u586B\u5145\u7F3A\u5931\u5143\u7D20\u3002",ja:"\u884C\u5217\u3092\u65B0\u3057\u3044\u6B21\u5143\u306B\u30EA\u30B5\u30A4\u30BA\u3057\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u65E2\u5B9A\u5024\u3067\u57CB\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix), size (Array), defaultValue (any, optional)",cn:"x\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Csize\uFF08\u6570\u7EC4\uFF09\uFF0CdefaultValue\uFF08\u53EF\u9009\uFF09",ja:"x\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001size\uFF08\u914D\u5217\uFF09\u3001defaultValue\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09"}},{title:"rotate",call:"rotate([1, 0], Math.PI / 2)",result:`[
  6.123233995736766e-17,
  1
]`,definition:{en:"Rotate a 2D vector by an angle, or a 3D vector around an axis.",cn:"\u5C06 1x2 \u5411\u91CF\u9006\u65F6\u9488\u65CB\u8F6C\u4E00\u5B9A\u89D2\u5EA6\uFF0C\u6216\u5BF9 1x3 \u5411\u91CF\u7ED5\u7ED9\u5B9A\u8F74\u65CB\u8F6C\u3002",ja:"2\u6B21\u5143\u30D9\u30AF\u30C8\u30EB\u3092\u3042\u308B\u89D2\u5EA6\u3060\u3051\u53CD\u6642\u8A08\u56DE\u308A\u306B\u56DE\u8EE2\u3001\u307E\u305F\u306F3\u6B21\u5143\u30D9\u30AF\u30C8\u30EB\u3092\u6307\u5B9A\u8EF8\u306E\u5468\u308A\u3067\u56DE\u8EE2\u3055\u305B\u307E\u3059\u3002"},parameterDefinitions:{en:"w (Array|Matrix), theta (number[, axis])",cn:"w\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Ctheta\uFF08\u6570\u5B57[, \u8F74]\uFF09",ja:"w\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001theta\uFF08\u6570\u5024[, \u8EF8]\uFF09"}},{title:"rotationMatrix",call:"rotationMatrix(Math.PI / 2)",result:`{
  "mathjs": "DenseMatrix",
  "data": [
    [
      6.123233995736766e-17,
      -1
    ],
    [
      1,
      6.123233995736766e-17
    ]
  ],
  "size": [
    2,
    2
  ]
}`,definition:{en:"Create a 2D rotation matrix (2x2) for a given angle in radians.",cn:"\u521B\u5EFA\u7ED9\u5B9A\u5F27\u5EA6\u7684 2x2 \u65CB\u8F6C\u77E9\u9635\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u30E9\u30B8\u30A2\u30F3\u89D2\u306E 2x2 \u56DE\u8EE2\u884C\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"theta (number)",cn:"theta\uFF08\u6570\u5B57\uFF09",ja:"theta\uFF08\u6570\u5024\uFF09"}},{title:"row",call:"row([[1,2],[3,4]], 1)",result:`[
  [
    3,
    4
  ]
]`,definition:{en:"Return a specific row from a Matrix.",cn:"\u4ECE\u77E9\u9635\u4E2D\u8FD4\u56DE\u6307\u5B9A\u884C\u3002",ja:"\u884C\u5217\u304B\u3089\u7279\u5B9A\u306E\u884C\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"value (Matrix|Array), index (number)",cn:"value\uFF08\u77E9\u9635\u6216\u6570\u7EC4\uFF09\uFF0Cindex\uFF08\u6570\u5B57\uFF09",ja:"value\uFF08\u884C\u5217\u307E\u305F\u306F\u914D\u5217\uFF09\u3001index\uFF08\u6570\u5024\uFF09"}},{title:"size",call:"size([[1,2,3],[4,5,6]])",result:`[
  2,
  3
]`,definition:{en:"Compute the size (dimensions) of a matrix, array, or scalar.",cn:"\u8BA1\u7B97\u77E9\u9635\u3001\u6570\u7EC4\u6216\u6807\u91CF\u7684\u5C3A\u5BF8\uFF08\u7EF4\u5EA6\uFF09\u3002",ja:"\u884C\u5217\u3001\u914D\u5217\u3001\u307E\u305F\u306F\u30B9\u30AB\u30E9\u30FC\u306E\u30B5\u30A4\u30BA\uFF08\u6B21\u5143\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix|number)",cn:"x\uFF08\u6570\u7EC4\u3001\u77E9\u9635\u6216\u6570\u5B57\uFF09",ja:"x\uFF08\u914D\u5217\u3001\u884C\u5217\u3001\u6570\u5024\uFF09"}},{title:"sort",call:"sort([3,1,2])",result:`[
  1,
  2,
  3
]`,definition:{en:"Sort the items in a matrix or array in ascending order.",cn:"\u5BF9\u77E9\u9635\u6216\u6570\u7EC4\u8FDB\u884C\u5347\u5E8F\u6392\u5E8F\u3002",ja:"\u884C\u5217\u307E\u305F\u306F\u914D\u5217\u306E\u8981\u7D20\u3092\u6607\u9806\u306B\u30BD\u30FC\u30C8\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix)",cn:"x\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"sqrtm",call:"sqrtm([[4,0],[0,4]])",result:`[
  [
    2.000000000000002,
    0
  ],
  [
    0,
    2.000000000000002
  ]
]`,definition:{en:"Compute the principal square root of a square matrix.",cn:"\u8BA1\u7B97\u65B9\u9635\u7684\u4E3B\u5E73\u65B9\u6839\u3002",ja:"\u6B63\u65B9\u884C\u5217\u306E\u4E3B\u5E73\u65B9\u6839\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"A (Matrix|Array)",cn:"A\uFF08\u77E9\u9635\u6216\u6570\u7EC4\uFF09",ja:"A\uFF08\u884C\u5217\u307E\u305F\u306F\u914D\u5217\uFF09"}},{title:"squeeze",call:"squeeze([[[1],[2],[3]]])",result:`[
  1,
  2,
  3
]`,definition:{en:"Remove inner and outer singleton dimensions from a matrix.",cn:"\u79FB\u9664\u77E9\u9635\u4E2D\u5185\u90E8\u548C\u5916\u90E8\u7684\u5355\u4E00\u7EF4\u5EA6\u3002",ja:"\u884C\u5217\u304B\u3089\u5185\u5074\u304A\u3088\u3073\u5916\u5074\u306E\u5358\u4E00\u6B21\u5143\u3092\u524A\u9664\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Matrix|Array)",cn:"x\uFF08\u77E9\u9635\u6216\u6570\u7EC4\uFF09",ja:"x\uFF08\u884C\u5217\u307E\u305F\u306F\u914D\u5217\uFF09"}},{title:"subset",call:"subset(['a','b','c'], 1)",result:"Error: Unexpected type of argument in function subset (expected: Index, actual: number, index: 1)",definition:{en:"Retrieve or replace a subset of a matrix or string.",cn:"\u83B7\u53D6\u6216\u66FF\u6362\u77E9\u9635\u6216\u5B57\u7B26\u4E32\u7684\u5B50\u96C6\u3002",ja:"\u884C\u5217\u3084\u6587\u5B57\u5217\u306E\u4E00\u90E8\u3092\u53D6\u5F97\u307E\u305F\u306F\u7F6E\u63DB\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Matrix|Array|String), index (Index), replacement (optional)",cn:"x\uFF08\u77E9\u9635\u3001\u6570\u7EC4\u6216\u5B57\u7B26\u4E32\uFF09\uFF0Cindex\uFF08\u7D22\u5F15\uFF09\uFF0Creplacement\uFF08\u53EF\u9009\uFF09",ja:"x\uFF08\u884C\u5217\u3001\u914D\u5217\u3001\u6587\u5B57\u5217\uFF09\u3001index\uFF08\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\uFF09\u3001replacement\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09"}},{title:"trace",call:"trace([[1,2],[3,4]])",result:"5",definition:{en:"Compute the trace of a square matrix (sum of diagonal elements).",cn:"\u8BA1\u7B97\u65B9\u9635\u7684\u8FF9\uFF08\u5BF9\u89D2\u7EBF\u5143\u7D20\u4E4B\u548C\uFF09\u3002",ja:"\u6B63\u65B9\u884C\u5217\u306E\u30C8\u30EC\u30FC\u30B9\uFF08\u5BFE\u89D2\u8981\u7D20\u306E\u7DCF\u548C\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Matrix|Array)",cn:"x\uFF08\u77E9\u9635\u6216\u6570\u7EC4\uFF09",ja:"x\uFF08\u884C\u5217\u307E\u305F\u306F\u914D\u5217\uFF09"}},{title:"transpose",call:"transpose([[1,2],[3,4]])",result:`[
  [
    1,
    3
  ],
  [
    2,
    4
  ]
]`,definition:{en:"Transpose a matrix.",cn:"\u5BF9\u77E9\u9635\u8FDB\u884C\u8F6C\u7F6E\u3002",ja:"\u884C\u5217\u3092\u8EE2\u7F6E\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Matrix|Array)",cn:"x\uFF08\u77E9\u9635\u6216\u6570\u7EC4\uFF09",ja:"x\uFF08\u884C\u5217\u307E\u305F\u306F\u914D\u5217\uFF09"}},{title:"zeros",call:"zeros(2, 3)",result:`{
  "mathjs": "DenseMatrix",
  "data": [
    [
      0,
      0,
      0
    ],
    [
      0,
      0,
      0
    ]
  ],
  "size": [
    2,
    3
  ]
}`,definition:{en:"Create a matrix filled with zeros of given dimensions.",cn:"\u521B\u5EFA\u7ED9\u5B9A\u7EF4\u5EA6\u7684\u5168 0 \u77E9\u9635\u3002",ja:"\u6307\u5B9A\u3057\u305F\u6B21\u5143\u306E\u8981\u7D20\u304C\u3059\u3079\u30660\u306E\u884C\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"m, n, p... (number)",cn:"m, n, p...\uFF08\u6570\u5B57\uFF09",ja:"m, n, p...\uFF08\u6570\u5024\uFF09"}}]},{category:"Numeric functions",functions:[{title:"solveODE",call:"solveODE((t, y) => -0.5 * y, [0, 10], [1])",result:"Error: Unexpected type of argument in function map (expected: Array or Matrix, actual: number, index: 0)",definition:{en:"Numerical integration for ordinary differential equations (default method: RK45).",cn:"\u5BF9\u5E38\u5FAE\u5206\u65B9\u7A0B\u8FDB\u884C\u6570\u503C\u79EF\u5206\uFF08\u9ED8\u8BA4\u4F7F\u7528RK45\uFF09\u3002",ja:"\u5E38\u5FAE\u5206\u65B9\u7A0B\u3092\u6570\u5024\u7684\u306B\u89E3\u304D\u307E\u3059\uFF08\u30C7\u30D5\u30A9\u30EB\u30C8\u306FRK45\uFF09\u3002"},parameterDefinitions:{en:"func (Function), tspan (Array), y0 (Array)",cn:"\u51FD\u6570\uFF08func\uFF09\uFF0C\u65F6\u95F4\u8303\u56F4\uFF08tspan\uFF0C\u6570\u7EC4\uFF09\uFF0C\u521D\u59CB\u503C\uFF08y0\uFF0C\u6570\u7EC4\uFF09",ja:"\u95A2\u6570\uFF08func\uFF09\u3001\u6642\u9593\u7BC4\u56F2\uFF08tspan, \u914D\u5217\uFF09\u3001\u521D\u671F\u5024\uFF08y0, \u914D\u5217\uFF09"}}]},{category:"Probability functions",functions:[{title:"combinations",call:"combinations(5, 2)",result:"10",definition:{en:"Compute the binomial coefficient C(n, k).",cn:"\u8BA1\u7B97\u4ECE n \u4E2A\u5143\u7D20\u4E2D\u53D6 k \u4E2A\u65E0\u5E8F\u7EC4\u5408\u7684\u6570\u91CF\u3002",ja:"n \u500B\u306E\u8981\u7D20\u304B\u3089 k \u500B\u3092\u7121\u9806\u5E8F\u3067\u9078\u3076\u7D44\u307F\u5408\u308F\u305B\u6570\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"n (number), k (number)",cn:"n\uFF08\u6570\u503C\uFF09\uFF0Ck\uFF08\u6570\u503C\uFF09",ja:"n\uFF08\u6570\u5024\uFF09\u3001k\uFF08\u6570\u5024\uFF09"}},{title:"combinationsWithRep",call:"combinationsWithRep(5, 2)",result:"15",definition:{en:"Compute combinations where elements can repeat.",cn:"\u8BA1\u7B97\u53EF\u91CD\u590D\u5143\u7D20\u7684\u7EC4\u5408\u6570\u91CF\u3002",ja:"\u8981\u7D20\u306E\u91CD\u8907\u304C\u8A31\u53EF\u3055\u308C\u305F\u7D44\u307F\u5408\u308F\u305B\u6570\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"n (number), k (number)",cn:"n\uFF08\u6570\u503C\uFF09\uFF0Ck\uFF08\u6570\u503C\uFF09",ja:"n\uFF08\u6570\u5024\uFF09\u3001k\uFF08\u6570\u5024\uFF09"}},{title:"factorial",call:"factorial(5)",result:"120",definition:{en:"Compute factorial of an integer n.",cn:"\u8BA1\u7B97\u6574\u6570 n \u7684\u9636\u4E58\u3002",ja:"\u6574\u6570 n \u306E\u968E\u4E57\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"n (integer)",cn:"n\uFF08\u6574\u6570\uFF09",ja:"n\uFF08\u6574\u6570\uFF09"}},{title:"gamma",call:"gamma(5)",result:"24",definition:{en:"Compute the gamma function using approximations.",cn:"\u4F7F\u7528\u8FD1\u4F3C\u7B97\u6CD5\u8BA1\u7B97 gamma \u51FD\u6570\u503C\u3002",ja:"\u8FD1\u4F3C\u624B\u6CD5\u3092\u7528\u3044\u3066\u30AC\u30F3\u30DE\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"n (number)",cn:"n\uFF08\u6570\u503C\uFF09",ja:"n\uFF08\u6570\u5024\uFF09"}},{title:"kldivergence",call:"kldivergence([0.1, 0.9], [0.2, 0.8])",result:"0.036690014034750584",definition:{en:"Calculate the Kullback-Leibler divergence.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u5206\u5E03\u7684 KL \u6563\u5EA6\u3002",ja:"2\u3064\u306E\u5206\u5E03\u9593\u306EKL\u30C0\u30A4\u30D0\u30FC\u30B8\u30A7\u30F3\u30B9\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix), y (Array|Matrix)",cn:"x\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09\uFF0Cy\uFF08\u6570\u7EC4\u6216\u77E9\u9635\uFF09",ja:"x\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001y\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"lgamma",call:"lgamma(5)",result:"3.178053830347945",definition:{en:"Compute the log of gamma function (extended approximations).",cn:"\u8BA1\u7B97 gamma \u51FD\u6570\u7684\u5BF9\u6570\uFF08\u6269\u5C55\u8FD1\u4F3C\uFF09\u3002",ja:"\u30AC\u30F3\u30DE\u95A2\u6570\u306E\u5BFE\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\uFF08\u62E1\u5F35\u8FD1\u4F3C\uFF09\u3002"},parameterDefinitions:{en:"n (number)",cn:"n\uFF08\u6570\u503C\uFF09",ja:"n\uFF08\u6570\u5024\uFF09"}},{title:"multinomial",call:"multinomial([1, 2, 3])",result:"60",definition:{en:"Compute the multinomial coefficient for an array of counts.",cn:"\u6839\u636E\u4E00\u7EC4\u8BA1\u6570\u8BA1\u7B97\u591A\u9879\u5F0F\u7CFB\u6570\u3002",ja:"\u30AB\u30A6\u30F3\u30C8\u306E\u914D\u5217\u306B\u57FA\u3065\u3044\u3066\u591A\u9805\u5F0F\u4FC2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"a (Array)",cn:"a\uFF08\u6570\u7EC4\uFF09",ja:"a\uFF08\u914D\u5217\uFF09"}},{title:"permutations",call:"permutations(5, 2)",result:"20",definition:{en:"Compute permutations of n items taken k at a time.",cn:"\u8BA1\u7B97 n \u4E2A\u5143\u7D20\u4E2D\uFF0C\u53D6 k \u4E2A\u6709\u5E8F\u6392\u5217\u7684\u6570\u91CF\u3002",ja:"n \u500B\u306E\u8981\u7D20\u304B\u3089 k \u500B\u3092\u9806\u5E8F\u4ED8\u304D\u3067\u9078\u3076\u5834\u5408\u306E\u6570\u3092\u6C42\u3081\u307E\u3059\u3002"},parameterDefinitions:{en:"n (number), k (number, optional)",cn:"n\uFF08\u6570\u503C\uFF09\uFF0Ck\uFF08\u6570\u503C\uFF0C\u53EF\u9009\uFF09",ja:"n\uFF08\u6570\u5024\uFF09\u3001k\uFF08\u6570\u5024\u3001\u7701\u7565\u53EF\uFF09"}},{title:"pickRandom",call:"pickRandom([10, 20, 30])",result:"20",definition:{en:"Randomly pick value(s) from a 1D array.",cn:"\u4ECE\u4E00\u7EF4\u6570\u7EC4\u4E2D\u968F\u673A\u9009\u53D6\u4E00\u4E2A\u6216\u591A\u4E2A\u503C\u3002",ja:"1\u6B21\u5143\u914D\u5217\u304B\u3089\u30E9\u30F3\u30C0\u30E0\u306B1\u3064\u307E\u305F\u306F\u8907\u6570\u306E\u5024\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"array (Array)",cn:"\u6570\u7EC4",ja:"\u914D\u5217"}},{title:"random",call:"random(1, 10)",result:"3.6099423753668143",definition:{en:"Get a random number (uniform distribution).",cn:"\u83B7\u53D6\u4E00\u4E2A\u5747\u5300\u5206\u5E03\u7684\u968F\u673A\u6570\u3002",ja:"\u4E00\u69D8\u5206\u5E03\u306E\u30E9\u30F3\u30C0\u30E0\u6570\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"min (number, optional), max (number, optional)",cn:"\u6700\u5C0F\u503C\uFF08\u53EF\u9009\uFF09\uFF0C\u6700\u5927\u503C\uFF08\u53EF\u9009\uFF09",ja:"\u6700\u5C0F\u5024\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09\u3001\u6700\u5927\u5024\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09"}},{title:"randomInt",call:"randomInt(1, 10)",result:"5",definition:{en:"Get a random integer (uniform distribution).",cn:"\u83B7\u53D6\u4E00\u4E2A\u5747\u5300\u5206\u5E03\u7684\u968F\u673A\u6574\u6570\u3002",ja:"\u4E00\u69D8\u5206\u5E03\u306E\u30E9\u30F3\u30C0\u30E0\u6574\u6570\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"min (number, optional), max (number, optional)",cn:"\u6700\u5C0F\u503C\uFF08\u53EF\u9009\uFF09\uFF0C\u6700\u5927\u503C\uFF08\u53EF\u9009\uFF09",ja:"\u6700\u5C0F\u5024\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09\u3001\u6700\u5927\u5024\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09"}}]},{category:"Relational functions",functions:[{title:"compare",call:"compare(2, 3)",result:"-1",definition:{en:"Compare two values (numerical or lexical).",cn:"\u6BD4\u8F83\u4E24\u4E2A\u503C\uFF0C\u53EF\u8FD4\u56DE -1\u30010 \u6216 1\u3002",ja:"2\u3064\u306E\u5024\u3092\u6BD4\u8F03\u3057\u3001-1\u30FB0\u30FB1\u3092\u8FD4\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (any)",cn:"x\uFF0Cy\uFF08\u4EFB\u610F\u7C7B\u578B\uFF09",ja:"x, y\uFF08\u4EFB\u610F\u306E\u578B\uFF09"}},{title:"compareNatural",call:"compareNatural('2', '10')",result:"-1",definition:{en:"Compare any two types in a consistent, natural way.",cn:"\u4EE5\u81EA\u7136\u3001\u53EF\u91CD\u590D\u7684\u65B9\u5F0F\u6BD4\u8F83\u4EFB\u610F\u7C7B\u578B\u7684\u503C\u3002",ja:"\u3059\u3079\u3066\u306E\u578B\u3092\u4E00\u8CAB\u3057\u305F\u81EA\u7136\u306A\u65B9\u6CD5\u3067\u6BD4\u8F03\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (any)",cn:"x\uFF0Cy\uFF08\u4EFB\u610F\u7C7B\u578B\uFF09",ja:"x, y\uFF08\u4EFB\u610F\u306E\u578B\uFF09"}},{title:"compareText",call:"compareText('apple', 'banana')",result:"-1",definition:{en:"Lexically compare two strings.",cn:"\u4EE5\u5B57\u5178\u5E8F\u65B9\u5F0F\u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\u3002",ja:"2\u3064\u306E\u6587\u5B57\u5217\u3092\u8F9E\u66F8\u9806\u3067\u6BD4\u8F03\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (string), y (string)",cn:"x\uFF08\u5B57\u7B26\u4E32\uFF09\uFF0Cy\uFF08\u5B57\u7B26\u4E32\uFF09",ja:"x\uFF08\u6587\u5B57\u5217\uFF09\u3001y\uFF08\u6587\u5B57\u5217\uFF09"}},{title:"deepEqual",call:"deepEqual([[1, 2]], [[1, 2]])",result:"true",definition:{en:"Check if two matrices/arrays are element-wise equal.",cn:"\u9010\u5143\u7D20\u6BD4\u8F83\u4E24\u4E2A\u77E9\u9635/\u6570\u7EC4\u662F\u5426\u76F8\u540C\u3002",ja:"2\u3064\u306E\u884C\u5217\u307E\u305F\u306F\u914D\u5217\u3092\u8981\u7D20\u3054\u3068\u306B\u6BD4\u8F03\u3057\u3001\u7B49\u3057\u3044\u304B\u3069\u3046\u304B\u3092\u5224\u5B9A\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (Array|Matrix), y (Array|Matrix)",cn:"x\uFF08\u6570\u7EC4/\u77E9\u9635\uFF09\uFF0Cy\uFF08\u6570\u7EC4/\u77E9\u9635\uFF09",ja:"x\uFF08\u914D\u5217/\u884C\u5217\uFF09\u3001y\uFF08\u914D\u5217/\u884C\u5217\uFF09"}},{title:"equal",call:"equal(2, 2)",result:"true",definition:{en:"Check whether two values are equal.",cn:"\u5224\u65AD\u4E24\u4E2A\u503C\u662F\u5426\u76F8\u7B49\u3002",ja:"2\u3064\u306E\u5024\u304C\u7B49\u3057\u3044\u304B\u3069\u3046\u304B\u3092\u5224\u5B9A\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (any)",cn:"x\uFF0Cy\uFF08\u4EFB\u610F\u7C7B\u578B\uFF09",ja:"x, y\uFF08\u4EFB\u610F\u306E\u578B\uFF09"}},{title:"equalText",call:"equalText('hello', 'hello')",result:"true",definition:{en:"Check equality of two strings.",cn:"\u5224\u65AD\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u540C\u3002",ja:"2\u3064\u306E\u6587\u5B57\u5217\u304C\u540C\u3058\u304B\u3069\u3046\u304B\u3092\u5224\u5B9A\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (string), y (string)",cn:"x\uFF08\u5B57\u7B26\u4E32\uFF09\uFF0Cy\uFF08\u5B57\u7B26\u4E32\uFF09",ja:"x\uFF08\u6587\u5B57\u5217\uFF09\u3001y\uFF08\u6587\u5B57\u5217\uFF09"}},{title:"larger",call:"larger(3, 2)",result:"true",definition:{en:"Test if x is strictly larger than y.",cn:"\u5224\u65AD x \u662F\u5426\u5927\u4E8E y\u3002",ja:"x \u304C y \u3088\u308A\u5927\u304D\u3044\u304B\u3069\u3046\u304B\u3092\u5224\u5B9A\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (number|BigNumber)",cn:"x\uFF0Cy\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"x, y\uFF08\u6570\u5024\u307E\u305F\u306F\u591A\u500D\u9577\u6570\uFF09"}},{title:"largerEq",call:"largerEq(3, 3)",result:"true",definition:{en:"Test if x is larger or equal to y.",cn:"\u5224\u65AD x \u662F\u5426\u5927\u4E8E\u7B49\u4E8E y\u3002",ja:"x \u304C y \u4EE5\u4E0A\u304B\u3069\u3046\u304B\u3092\u5224\u5B9A\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (number|BigNumber)",cn:"x\uFF0Cy\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"x, y\uFF08\u6570\u5024\u307E\u305F\u306F\u591A\u500D\u9577\u6570\uFF09"}},{title:"smaller",call:"smaller(2, 3)",result:"true",definition:{en:"Test if x is strictly smaller than y.",cn:"\u5224\u65AD x \u662F\u5426\u5C0F\u4E8E y\u3002",ja:"x \u304C y \u3088\u308A\u5C0F\u3055\u3044\u304B\u3069\u3046\u304B\u3092\u5224\u5B9A\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (number|BigNumber)",cn:"x\uFF0Cy\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"x, y\uFF08\u6570\u5024\u307E\u305F\u306F\u591A\u500D\u9577\u6570\uFF09"}},{title:"smallerEq",call:"smallerEq(2, 2)",result:"true",definition:{en:"Test if x is smaller or equal to y.",cn:"\u5224\u65AD x \u662F\u5426\u5C0F\u4E8E\u7B49\u4E8E y\u3002",ja:"x \u304C y \u4EE5\u4E0B\u304B\u3069\u3046\u304B\u3092\u5224\u5B9A\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (number|BigNumber)",cn:"x\uFF0Cy\uFF08\u6570\u5B57\u6216\u5927\u6570\uFF09",ja:"x, y\uFF08\u6570\u5024\u307E\u305F\u306F\u591A\u500D\u9577\u6570\uFF09"}},{title:"unequal",call:"unequal(2, 3)",result:"true",definition:{en:"Test whether two values are not equal.",cn:"\u5224\u65AD\u4E24\u4E2A\u503C\u662F\u5426\u4E0D\u76F8\u7B49\u3002",ja:"2\u3064\u306E\u5024\u304C\u7B49\u3057\u304F\u306A\u3044\u304B\u3069\u3046\u304B\u3092\u5224\u5B9A\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x, y (any)",cn:"x\uFF0Cy\uFF08\u4EFB\u610F\u7C7B\u578B\uFF09",ja:"x, y\uFF08\u4EFB\u610F\u306E\u578B\uFF09"}}]},{category:"Set functions",functions:[{title:"setCartesian",call:"setCartesian([1, 2], [3, 4])",result:`[
  [
    1,
    3
  ],
  [
    1,
    4
  ],
  [
    2,
    3
  ],
  [
    2,
    4
  ]
]`,definition:{en:"Create the cartesian product of two (multi)sets.",cn:"\u751F\u6210\u4E24\u4E2A\uFF08\u591A\uFF09\u96C6\u5408\u7684\u7B1B\u5361\u5C14\u79EF\u3002",ja:"2\u3064\u306E\uFF08\u30DE\u30EB\u30C1\uFF09\u96C6\u5408\u306E\u30C7\u30AB\u30EB\u30C8\u7A4D\u3092\u751F\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"set1 (Array), set2 (Array)",cn:"\u7B2C\u4E00\u4E2A\u96C6\u5408\uFF08\u6570\u7EC4\uFF09\uFF0C\u7B2C\u4E8C\u4E2A\u96C6\u5408\uFF08\u6570\u7EC4\uFF09",ja:"1\u3064\u76EE\u306E\u96C6\u5408\uFF08\u914D\u5217\uFF09\u30012\u3064\u76EE\u306E\u96C6\u5408\uFF08\u914D\u5217\uFF09"}},{title:"setDifference",call:"setDifference([1, 2, 3], [2])",result:`[
  1,
  3
]`,definition:{en:"Create the difference of two (multi)sets (elements in set1 but not in set2).",cn:"\u751F\u6210\u4E24\u4E2A\uFF08\u591A\uFF09\u96C6\u5408\u7684\u5DEE\u96C6\uFF08set1 \u4E2D\u6709\u4F46 set2 \u4E2D\u6CA1\u6709\u7684\u5143\u7D20\uFF09\u3002",ja:"2\u3064\u306E\uFF08\u30DE\u30EB\u30C1\uFF09\u96C6\u5408\u306E\u5DEE\u96C6\u5408\uFF08set1\u306B\u3042\u308Aset2\u306B\u306A\u3044\u8981\u7D20\uFF09\u3092\u751F\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"set1 (Array), set2 (Array)",cn:"\u7B2C\u4E00\u4E2A\u96C6\u5408\uFF08\u6570\u7EC4\uFF09\uFF0C\u7B2C\u4E8C\u4E2A\u96C6\u5408\uFF08\u6570\u7EC4\uFF09",ja:"1\u3064\u76EE\u306E\u96C6\u5408\uFF08\u914D\u5217\uFF09\u30012\u3064\u76EE\u306E\u96C6\u5408\uFF08\u914D\u5217\uFF09"}},{title:"setDistinct",call:"setDistinct([1, 2, 2, 3])",result:`[
  1,
  2,
  3
]`,definition:{en:"Collect unique elements of a (multi)set.",cn:"\u83B7\u53D6\uFF08\u591A\uFF09\u96C6\u5408\u4E2D\u7684\u552F\u4E00\u5143\u7D20\u3002",ja:"\uFF08\u30DE\u30EB\u30C1\uFF09\u96C6\u5408\u5185\u306B\u3042\u308B\u30E6\u30CB\u30FC\u30AF\u306A\u8981\u7D20\u3092\u53D6\u308A\u51FA\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"set (Array)",cn:"\u96C6\u5408\uFF08\u6570\u7EC4\uFF09",ja:"\u96C6\u5408\uFF08\u914D\u5217\uFF09"}},{title:"setIntersect",call:"setIntersect([1, 2], [2, 3])",result:`[
  2
]`,definition:{en:"Create the intersection of two (multi)sets.",cn:"\u751F\u6210\u4E24\u4E2A\uFF08\u591A\uFF09\u96C6\u5408\u7684\u4EA4\u96C6\u3002",ja:"2\u3064\u306E\uFF08\u30DE\u30EB\u30C1\uFF09\u96C6\u5408\u306E\u5171\u901A\u8981\u7D20\u3092\u751F\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"set1 (Array), set2 (Array)",cn:"\u7B2C\u4E00\u4E2A\u96C6\u5408\uFF08\u6570\u7EC4\uFF09\uFF0C\u7B2C\u4E8C\u4E2A\u96C6\u5408\uFF08\u6570\u7EC4\uFF09",ja:"1\u3064\u76EE\u306E\u96C6\u5408\uFF08\u914D\u5217\uFF09\u30012\u3064\u76EE\u306E\u96C6\u5408\uFF08\u914D\u5217\uFF09"}},{title:"setIsSubset",call:"setIsSubset([1, 2], [1, 2, 3])",result:"true",definition:{en:"Check if set1 is a subset of set2.",cn:"\u5224\u65AD set1 \u662F\u5426\u662F set2 \u7684\u5B50\u96C6\u3002",ja:"set1 \u304C set2 \u306E\u90E8\u5206\u96C6\u5408\u304B\u3069\u3046\u304B\u3092\u5224\u5B9A\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"set1 (Array), set2 (Array)",cn:"\u7B2C\u4E00\u4E2A\u96C6\u5408\uFF08\u6570\u7EC4\uFF09\uFF0C\u7B2C\u4E8C\u4E2A\u96C6\u5408\uFF08\u6570\u7EC4\uFF09",ja:"1\u3064\u76EE\u306E\u96C6\u5408\uFF08\u914D\u5217\uFF09\u30012\u3064\u76EE\u306E\u96C6\u5408\uFF08\u914D\u5217\uFF09"}},{title:"setMultiplicity",call:"setMultiplicity(2, [1, 2, 2, 3])",result:"2",definition:{en:"Count how many times an element appears in a multiset.",cn:"\u7EDF\u8BA1\u5728\u591A\u91CD\u96C6\u5408\u4E2D\u67D0\u4E2A\u5143\u7D20\u51FA\u73B0\u7684\u6B21\u6570\u3002",ja:"\u30DE\u30EB\u30C1\u96C6\u5408\u5185\u3067\u7279\u5B9A\u306E\u8981\u7D20\u304C\u51FA\u73FE\u3059\u308B\u56DE\u6570\u3092\u6570\u3048\u307E\u3059\u3002"},parameterDefinitions:{en:"element (any), set (Array)",cn:"\u5143\u7D20\uFF08\u4EFB\u610F\u7C7B\u578B\uFF09\uFF0C\u96C6\u5408\uFF08\u6570\u7EC4\uFF09",ja:"\u8981\u7D20\uFF08\u4EFB\u610F\u306E\u578B\uFF09\u3001\u96C6\u5408\uFF08\u914D\u5217\uFF09"}},{title:"setPowerset",call:"setPowerset([1, 2])",result:`[
  [],
  [
    1
  ],
  [
    2
  ],
  [
    1,
    2
  ]
]`,definition:{en:"Generate the powerset (all subsets) of a (multi)set.",cn:"\u751F\u6210\u4E00\u4E2A\uFF08\u591A\uFF09\u96C6\u5408\u7684\u6240\u6709\u5B50\u96C6\uFF0C\u5373\u5E42\u96C6\u3002",ja:"\uFF08\u30DE\u30EB\u30C1\uFF09\u96C6\u5408\u306E\u3059\u3079\u3066\u306E\u90E8\u5206\u96C6\u5408\uFF08\u51AA\u96C6\u5408\uFF09\u3092\u751F\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"set (Array)",cn:"\u96C6\u5408\uFF08\u6570\u7EC4\uFF09",ja:"\u96C6\u5408\uFF08\u914D\u5217\uFF09"}},{title:"setSize",call:"setSize([1, 2, 3])",result:"3",definition:{en:"Count the total number of elements in a (multi)set.",cn:"\u7EDF\u8BA1\uFF08\u591A\uFF09\u96C6\u5408\u4E2D\u6240\u6709\u5143\u7D20\u7684\u6570\u91CF\u3002",ja:"\uFF08\u30DE\u30EB\u30C1\uFF09\u96C6\u5408\u306E\u5168\u8981\u7D20\u6570\u3092\u6570\u3048\u307E\u3059\u3002"},parameterDefinitions:{en:"set (Array)",cn:"\u96C6\u5408\uFF08\u6570\u7EC4\uFF09",ja:"\u96C6\u5408\uFF08\u914D\u5217\uFF09"}},{title:"setSymDifference",call:"setSymDifference([1, 2], [2, 3])",result:`[
  1,
  3
]`,definition:{en:"Create the symmetric difference of two (multi)sets (elements in either set, but not both).",cn:"\u751F\u6210\u4E24\u4E2A\uFF08\u591A\uFF09\u96C6\u5408\u7684\u5BF9\u79F0\u5DEE\uFF08\u53EA\u5728\u5176\u4E2D\u4E00\u4E2A\u96C6\u5408\u4E2D\u7684\u5143\u7D20\uFF09\u3002",ja:"2\u3064\u306E\uFF08\u30DE\u30EB\u30C1\uFF09\u96C6\u5408\u9593\u306E\u5BFE\u79F0\u5DEE\uFF08\u7247\u65B9\u306B\u3057\u304B\u542B\u307E\u308C\u306A\u3044\u8981\u7D20\uFF09\u3092\u751F\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"set1 (Array), set2 (Array)",cn:"\u7B2C\u4E00\u4E2A\u96C6\u5408\uFF08\u6570\u7EC4\uFF09\uFF0C\u7B2C\u4E8C\u4E2A\u96C6\u5408\uFF08\u6570\u7EC4\uFF09",ja:"1\u3064\u76EE\u306E\u96C6\u5408\uFF08\u914D\u5217\uFF09\u30012\u3064\u76EE\u306E\u96C6\u5408\uFF08\u914D\u5217\uFF09"}},{title:"setUnion",call:"setUnion([1, 2], [2, 3])",result:`[
  1,
  3,
  2
]`,definition:{en:"Create the union of two (multi)sets.",cn:"\u751F\u6210\u4E24\u4E2A\uFF08\u591A\uFF09\u96C6\u5408\u7684\u5E76\u96C6\u3002",ja:"2\u3064\u306E\uFF08\u30DE\u30EB\u30C1\uFF09\u96C6\u5408\u306E\u548C\u96C6\u5408\u3092\u751F\u6210\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"set1 (Array), set2 (Array)",cn:"\u7B2C\u4E00\u4E2A\u96C6\u5408\uFF08\u6570\u7EC4\uFF09\uFF0C\u7B2C\u4E8C\u4E2A\u96C6\u5408\uFF08\u6570\u7EC4\uFF09",ja:"1\u3064\u76EE\u306E\u96C6\u5408\uFF08\u914D\u5217\uFF09\u30012\u3064\u76EE\u306E\u96C6\u5408\uFF08\u914D\u5217\uFF09"}}]},{category:"Signal functions",functions:[{title:"freqz",call:"freqz([1, -0.5], [1])",result:`{
  "h": [
    {
      "mathjs": "Complex",
      "re": 0.5,
      "im": 0
    },
    {
      "mathjs": "Complex",
      "re": 0.5000094123586994,
      "im": 0.0030679423245772376
    },
    {
      "mathjs": "Complex",
      "re": 0.5000376490804277,
      "im": 0.006135769142859963
    },
    {
      "mathjs": "Complex",
      "re": 0.5000847091020884,
      "im": 0.00920336495290241
    },
    {
      "mathjs": "Complex",
      "re": 0.5001505906518979,
      "im": 0.012270614261456144
    },
    {
      "mathjs": "Complex",
      "re": 0.5002352912494534,
      "im": 0.015337401588318313
    },
    {
      "mathjs": "Complex",
      "re": 0.5003388077058253,
      "im": 0.018403611470679416
    },
    {
      "mathjs": "Complex",
      "re": 0.5004611361236773,
      "im": 0.02146912846747041
    },
    {
      "mathjs": "Complex",
      "re": 0.5006022718974138,
      "im": 0.024533837163709007
    },
    {
      "mathjs": "Complex",
      "re": 0.5007622097133526,
      "im": 0.027597622174844967
    },
    {
      "mathjs": "Complex",
      "re": 0.5009409435499255,
      "im": 0.03066036815110429
    },
    {
      "mathjs": "Complex",
      "re": 0.5011384666779042,
      "im": 0.033721959781832025
    },
    {
      "mathjs": "Complex",
      "re": 0.5013547716606549,
      "im": 0.03678228179983371
    },
    {
      "mathjs": "Complex",
      "re": 0.5015898503544172,
      "im": 0.03984121898571506
    },
    {
      "mathjs": "Complex",
      "re": 0.501843693908611,
      "im": 0.04289865617221995
    },
    {
      "mathjs": "Complex",
      "re": 0.5021162927661701,
      "im": 0.04595447824856636
    },
    {
      "mathjs": "Complex",
      "re": 0.5024076366639015,
      "im": 0.0490085701647803
    },
    {
      "mathjs": "Complex",
      "re": 0.5027177146328723,
      "im": 0.05206081693602729
    },
    {
      "mathjs": "Complex",
      "re": 0.5030465149988219,
      "im": 0.05511110364694153
    },
    {
      "mathjs": "Complex",
      "re": 0.5033940253826028,
      "im": 0.058159315455952376
    },
    {
      "mathjs": "Complex",
      "re": 0.503760232700645,
      "im": 0.0612053375996081
    },
    {
      "mathjs": "Complex",
      "re": 0.5041451231654502,
      "im": 0.06424905539689658
    },
    {
      "mathjs": "Complex",
      "re": 0.50454868228611,
      "im": 0.06729035425356308
    },
    {
      "mathjs": "Complex",
      "re": 0.5049708948688514,
      "im": 0.0703291196664246
    },
    {
      "mathjs": "Complex",
      "re": 0.5054117450176094,
      "im": 0.07336523722768087
    },
    {
      "mathjs": "Complex",
      "re": 0.5058712161346253,
      "im": 0.07639859262922172
    },
    {
      "mathjs": "Complex",
      "re": 0.5063492909210707,
      "im": 0.07942907166693072
    },
    {
      "mathjs": "Complex",
      "re": 0.5068459513777006,
      "im": 0.08245656024498496
    },
    {
      "mathjs": "Complex",
      "re": 0.5073611788055294,
      "im": 0.08548094438015061
    },
    {
      "mathjs": "Complex",
      "re": 0.5078949538065355,
      "im": 0.08850211020607437
    },
    {
      "mathjs": "Complex",
      "re": 0.5084472562843918,
      "im": 0.09151994397757048
    },
    {
      "mathjs": "Complex",
      "re": 0.5090180654452223,
      "im": 0.0945343320749031
    },
    {
      "mathjs": "Complex",
      "re": 0.5096073597983848,
      "im": 0.09754516100806412
    },
    {
      "mathjs": "Complex",
      "re": 0.5102151171572797,
      "im": 0.10055231742104595
    },
    {
      "mathjs": "Complex",
      "re": 0.5108413146401862,
      "im": 0.10355568809610928
    },
    {
      "mathjs": "Complex",
      "re": 0.5114859286711229,
      "im": 0.10655515995804568
    },
    {
      "mathjs": "Complex",
      "re": 0.5121489349807358,
      "im": 0.1095506200784349
    },
    {
      "mathjs": "Complex",
      "re": 0.5128303086072121,
      "im": 0.11254195567989642
    },
    {
      "mathjs": "Complex",
      "re": 0.5135300238972199,
      "im": 0.11552905414033555
    },
    {
      "mathjs": "Complex",
      "re": 0.5142480545068742,
      "im": 0.1185118029971836
    },
    {
      "mathjs": "Complex",
      "re": 0.514984373402728,
      "im": 0.12149008995163194
    },
    {
      "mathjs": "Complex",
      "re": 0.5157389528627914,
      "im": 0.12446380287286007
    },
    {
      "mathjs": "Complex",
      "re": 0.516511764477574,
      "im": 0.12743282980225729
    },
    {
      "mathjs": "Complex",
      "re": 0.5173027791511553,
      "im": 0.13039705895763776
    },
    {
      "mathjs": "Complex",
      "re": 0.51811196710228,
      "im": 0.13335637873744918
    },
    {
      "mathjs": "Complex",
      "re": 0.5189392978654792,
      "im": 0.1363106777249745
    },
    {
      "mathjs": "Complex",
      "re": 0.5197847402922171,
      "im": 0.13925984469252653
    },
    {
      "mathjs": "Complex",
      "re": 0.5206482625520642,
      "im": 0.14220376860563594
    },
    {
      "mathjs": "Complex",
      "re": 0.5215298321338956,
      "im": 0.14514233862723117
    },
    {
      "mathjs": "Complex",
      "re": 0.5224294158471146,
      "im": 0.1480754441218119
    },
    {
      "mathjs": "Complex",
      "re": 0.5233469798229031,
      "im": 0.15100297465961404
    },
    {
      "mathjs": "Complex",
      "re": 0.5242824895154958,
      "im": 0.15392482002076743
    },
    {
      "mathjs": "Complex",
      "re": 0.5252359097034817,
      "im": 0.15684087019944576
    },
    {
      "mathjs": "Complex",
      "re": 0.5262072044911295,
      "im": 0.15975101540800785
    },
    {
      "mathjs": "Complex",
      "re": 0.5271963373097394,
      "im": 0.16265514608113146
    },
    {
      "mathjs": "Complex",
      "re": 0.5282032709190199,
      "im": 0.16555315287993821
    },
    {
      "mathjs": "Complex",
      "re": 0.5292279674084897,
      "im": 0.16844492669611003
    },
    {
      "mathjs": "Complex",
      "re": 0.530270388198905,
      "im": 0.1713303586559972
    },
    {
      "mathjs": "Complex",
      "re": 0.5313304940437125,
      "im": 0.17420934012471728
    },
    {
      "mathjs": "Complex",
      "re": 0.5324082450305262,
      "im": 0.17708176271024517
    },
    {
      "mathjs": "Complex",
      "re": 0.5335036005826306,
      "im": 0.17994751826749406
    },
    {
      "mathjs": "Complex",
      "re": 0.5346165194605081,
      "im": 0.18280649890238693
    },
    {
      "mathjs": "Complex",
      "re": 0.5357469597633921,
      "im": 0.18565859697591877
    },
    {
      "mathjs": "Complex",
      "re": 0.5368948789308443,
      "im": 0.18850370510820913
    },
    {
      "mathjs": "Complex",
      "re": 0.5380602337443566,
      "im": 0.1913417161825449
    },
    {
      "mathjs": "Complex",
      "re": 0.539242980328979,
      "im": 0.19417252334941312
    },
    {
      "mathjs": "Complex",
      "re": 0.5404430741549711,
      "im": 0.19699602003052405
    },
    {
      "mathjs": "Complex",
      "re": 0.5416604700394787,
      "im": 0.1998120999228234
    },
    {
      "mathjs": "Complex",
      "re": 0.5428951221482347,
      "im": 0.20262065700249493
    },
    {
      "mathjs": "Complex",
      "re": 0.544146983997285,
      "im": 0.20542158552895196
    },
    {
      "mathjs": "Complex",
      "re": 0.5454160084547388,
      "im": 0.20821478004881858
    },
    {
      "mathjs": "Complex",
      "re": 0.5467021477425423,
      "im": 0.21100013539989984
    },
    {
      "mathjs": "Complex",
      "re": 0.5480053534382783,
      "im": 0.21377754671514104
    },
    {
      "mathjs": "Complex",
      "re": 0.549325576476989,
      "im": 0.21654690942657598
    },
    {
      "mathjs": "Complex",
      "re": 0.5506627671530231,
      "im": 0.21930811926926383
    },
    {
      "mathjs": "Complex",
      "re": 0.5520168751219074,
      "im": 0.2220610722852146
    },
    {
      "mathjs": "Complex",
      "re": 0.5533878494022424,
      "im": 0.22480566482730327
    },
    {
      "mathjs": "Complex",
      "re": 0.554775638377621,
      "im": 0.22754179356317192
    },
    {
      "mathjs": "Complex",
      "re": 0.556180189798573,
      "im": 0.23026935547912
    },
    {
      "mathjs": "Complex",
      "re": 0.557601450784531,
      "im": 0.2329882478839831
    },
    {
      "mathjs": "Complex",
      "re": 0.5590393678258225,
      "im": 0.23569836841299882
    },
    {
      "mathjs": "Complex",
      "re": 0.5604938867856832,
      "im": 0.23839961503166104
    },
    {
      "mathjs": "Complex",
      "re": 0.5619649529022968,
      "im": 0.24109188603956136
    },
    {
      "mathjs": "Complex",
      "re": 0.563452510790855,
      "im": 0.243775080074218
    },
    {
      "mathjs": "Complex",
      "re": 0.5649565044456443,
      "im": 0.24644909611489202
    },
    {
      "mathjs": "Complex",
      "re": 0.5664768772421537,
      "im": 0.24911383348639093
    },
    {
      "mathjs": "Complex",
      "re": 0.5680135719392065,
      "im": 0.2517691918628588
    },
    {
      "mathjs": "Complex",
      "re": 0.5695665306811164,
      "im": 0.2544150712715535
    },
    {
      "mathjs": "Complex",
      "re": 0.5711356949998639,
      "im": 0.25705137209661083
    },
    {
      "mathjs": "Complex",
      "re": 0.5727210058172998,
      "im": 0.2596779950827948
    },
    {
      "mathjs": "Complex",
      "re": 0.5743224034473674,
      "im": 0.2622948413392345
    },
    {
      "mathjs": "Complex",
      "re": 0.5759398275983514,
      "im": 0.2649018123431473
    },
    {
      "mathjs": "Complex",
      "re": 0.5775732173751464,
      "im": 0.2674988099435486
    },
    {
      "mathjs": "Complex",
      "re": 0.5792225112815508,
      "im": 0.2700857363649464
    },
    {
      "mathjs": "Complex",
      "re": 0.580887647222581,
      "im": 0.27266249421102323
    },
    {
      "mathjs": "Complex",
      "re": 0.58256856250681,
      "im": 0.2752289864683024
    },
    {
      "mathjs": "Complex",
      "re": 0.5842651938487273,
      "im": 0.2777851165098011
    },
    {
      "mathjs": "Complex",
      "re": 0.5859774773711222,
      "im": 0.280330788098668
    },
    {
      "mathjs": "Complex",
      "re": 0.5877053486074874,
      "im": 0.28286590539180656
    },
    {
      "mathjs": "Complex",
      "re": 0.5894487425044477,
      "im": 0.28539037294348363
    },
    {
      "mathjs": "Complex",
      "re": 0.5912075934242081,
      "im": 0.28790409570892267
    },
    {
      "mathjs": "Complex",
      "re": 0.5929818351470257,
      "im": 0.29040697904788226
    },
    {
      "mathjs": "Complex",
      "re": 0.5947714008737026,
      "im": 0.29289892872821943
    },
    {
      "mathjs": "Complex",
      "re": 0.5965762232281003,
      "im": 0.2953798509294371
    },
    {
      "mathjs": "Complex",
      "re": 0.5983962342596776,
      "im": 0.2978496522462167
    },
    {
      "mathjs": "Complex",
      "re": 0.6002313654460475,
      "im": 0.3003082396919345
    },
    {
      "mathjs": "Complex",
      "re": 0.6020815476955582,
      "im": 0.3027555207021628
    },
    {
      "mathjs": "Complex",
      "re": 0.6039467113498938,
      "im": 0.30519140313815474
    },
    {
      "mathjs": "Complex",
      "re": 0.6058267861866968,
      "im": 0.3076157952903134
    },
    {
      "mathjs": "Complex",
      "re": 0.6077217014222124,
      "im": 0.31002860588164455
    },
    {
      "mathjs": "Complex",
      "re": 0.6096313857139528,
      "im": 0.31242974407119317
    },
    {
      "mathjs": "Complex",
      "re": 0.6115557671633838,
      "im": 0.3148191194574635
    },
    {
      "mathjs": "Complex",
      "re": 0.6134947733186316,
      "im": 0.31719664208182274
    },
    {
      "mathjs": "Complex",
      "re": 0.6154483311772101,
      "im": 0.31956222243188787
    },
    {
      "mathjs": "Complex",
      "re": 0.6174163671887705,
      "im": 0.3219157714448957
    },
    {
      "mathjs": "Complex",
      "re": 0.6193988072578691,
      "im": 0.3242572005110562
    },
    {
      "mathjs": "Complex",
      "re": 0.6213955767467577,
      "im": 0.3265864214768884
    },
    {
      "mathjs": "Complex",
      "re": 0.6234066004781937,
      "im": 0.3289033466485393
    },
    {
      "mathjs": "Complex",
      "re": 0.6254318027382704,
      "im": 0.3312078887950859
    },
    {
      "mathjs": "Complex",
      "re": 0.6274711072792669,
      "im": 0.33349996115181874
    },
    {
      "mathjs": "Complex",
      "re": 0.6295244373225204,
      "im": 0.33577947742350917
    },
    {
      "mathjs": "Complex",
      "re": 0.6315917155613151,
      "im": 0.33804635178765796
    },
    {
      "mathjs": "Complex",
      "re": 0.6336728641637936,
      "im": 0.3403004988977265
    },
    {
      "mathjs": "Complex",
      "re": 0.6357678047758875,
      "im": 0.3425418338863502
    },
    {
      "mathjs": "Complex",
      "re": 0.6378764585242664,
      "im": 0.3447702723685334
    },
    {
      "mathjs": "Complex",
      "re": 0.6399987460193092,
      "im": 0.346985730444827
    },
    {
      "mathjs": "Complex",
      "re": 0.6421345873580907,
      "im": 0.34918812470448646
    },
    {
      "mathjs": "Complex",
      "re": 0.6442839021273918,
      "im": 0.35137737222861265
    },
    {
      "mathjs": "Complex",
      "re": 0.6464466094067263,
      "im": 0.35355339059327373
    },
    {
      "mathjs": "Complex",
      "re": 0.6486226277713874,
      "im": 0.3557160978726082
    },
    {
      "mathjs": "Complex",
      "re": 0.6508118752955135,
      "im": 0.3578654126419093
    },
    {
      "mathjs": "Complex",
      "re": 0.653014269555173,
      "im": 0.3600012539806908
    },
    {
      "mathjs": "Complex",
      "re": 0.6552297276314665,
      "im": 0.36212354147573345
    },
    {
      "mathjs": "Complex",
      "re": 0.6574581661136498,
      "im": 0.3642321952241126
    },
    {
      "mathjs": "Complex",
      "re": 0.6596995011022735,
      "im": 0.3663271358362064
    },
    {
      "mathjs": "Complex",
      "re": 0.661953648212342,
      "im": 0.3684082844386849
    },
    {
      "mathjs": "Complex",
      "re": 0.6642205225764908,
      "im": 0.37047556267747955
    },
    {
      "mathjs": "Complex",
      "re": 0.6665000388481812,
      "im": 0.372528892720733
    },
    {
      "mathjs": "Complex",
      "re": 0.6687921112049141,
      "im": 0.37456819726172963
    },
    {
      "mathjs": "Complex",
      "re": 0.6710966533514606,
      "im": 0.3765933995218062
    },
    {
      "mathjs": "Complex",
      "re": 0.6734135785231117,
      "im": 0.37860442325324223
    },
    {
      "mathjs": "Complex",
      "re": 0.6757427994889438,
      "im": 0.3806011927421309
    },
    {
      "mathjs": "Complex",
      "re": 0.6780842285551043,
      "im": 0.3825836328112295
    },
    {
      "mathjs": "Complex",
      "re": 0.6804377775681121,
      "im": 0.3845516688227898
    },
    {
      "mathjs": "Complex",
      "re": 0.6828033579181773,
      "im": 0.3865052266813685
    },
    {
      "mathjs": "Complex",
      "re": 0.6851808805425365,
      "im": 0.3884442328366162
    },
    {
      "mathjs": "Complex",
      "re": 0.6875702559288068,
      "im": 0.3903686142860472
    },
    {
      "mathjs": "Complex",
      "re": 0.6899713941183554,
      "im": 0.3922782985777876
    },
    {
      "mathjs": "Complex",
      "re": 0.6923842047096866,
      "im": 0.3941732138133031
    },
    {
      "mathjs": "Complex",
      "re": 0.6948085968618453,
      "im": 0.3960532886501062
    },
    {
      "mathjs": "Complex",
      "re": 0.6972444792978372,
      "im": 0.3979184523044417
    },
    {
      "mathjs": "Complex",
      "re": 0.6996917603080655,
      "im": 0.3997686345539525
    },
    {
      "mathjs": "Complex",
      "re": 0.7021503477537833,
      "im": 0.4016037657403224
    },
    {
      "mathjs": "Complex",
      "re": 0.7046201490705628,
      "im": 0.4034237767718996
    },
    {
      "mathjs": "Complex",
      "re": 0.7071010712717806,
      "im": 0.4052285991262974
    },
    {
      "mathjs": "Complex",
      "re": 0.7095930209521177,
      "im": 0.40701816485297415
    },
    {
      "mathjs": "Complex",
      "re": 0.7120959042910773,
      "im": 0.40879240657579186
    },
    {
      "mathjs": "Complex",
      "re": 0.7146096270565163,
      "im": 0.4105512574955523
    },
    {
      "mathjs": "Complex",
      "re": 0.7171340946081934,
      "im": 0.41229465139251265
    },
    {
      "mathjs": "Complex",
      "re": 0.7196692119013319,
      "im": 0.4140225226288779
    },
    {
      "mathjs": "Complex",
      "re": 0.7222148834901989,
      "im": 0.4157348061512726
    },
    {
      "mathjs": "Complex",
      "re": 0.7247710135316976,
      "im": 0.41743143749319
    },
    {
      "mathjs": "Complex",
      "re": 0.7273375057889768,
      "im": 0.419112352777419
    },
    {
      "mathjs": "Complex",
      "re": 0.7299142636350535,
      "im": 0.42077748871844917
    },
    {
      "mathjs": "Complex",
      "re": 0.7325011900564513,
      "im": 0.4224267826248535
    },
    {
      "mathjs": "Complex",
      "re": 0.7350981876568525,
      "im": 0.42406017240164856
    },
    {
      "mathjs": "Complex",
      "re": 0.7377051586607656,
      "im": 0.4256775965526326
    },
    {
      "mathjs": "Complex",
      "re": 0.7403220049172052,
      "im": 0.42727899418270027
    },
    {
      "mathjs": "Complex",
      "re": 0.7429486279033892,
      "im": 0.42886430500013606
    },
    {
      "mathjs": "Complex",
      "re": 0.7455849287284465,
      "im": 0.43043346931888365
    },
    {
      "mathjs": "Complex",
      "re": 0.7482308081371412,
      "im": 0.43198642806079335
    },
    {
      "mathjs": "Complex",
      "re": 0.7508861665136091,
      "im": 0.4335231227578463
    },
    {
      "mathjs": "Complex",
      "re": 0.7535509038851079,
      "im": 0.4350434955543557
    },
    {
      "mathjs": "Complex",
      "re": 0.756224919925782,
      "im": 0.43654748920914505
    },
    {
      "mathjs": "Complex",
      "re": 0.7589081139604386,
      "im": 0.4380350470977033
    },
    {
      "mathjs": "Complex",
      "re": 0.7616003849683388,
      "im": 0.4395061132143167
    },
    {
      "mathjs": "Complex",
      "re": 0.764301631587001,
      "im": 0.44096063217417747
    },
    {
      "mathjs": "Complex",
      "re": 0.7670117521160169,
      "im": 0.4423985492154689
    },
    {
      "mathjs": "Complex",
      "re": 0.76973064452088,
      "im": 0.44381981020142697
    },
    {
      "mathjs": "Complex",
      "re": 0.772458206436828,
      "im": 0.44522436162237894
    },
    {
      "mathjs": "Complex",
      "re": 0.7751943351726966,
      "im": 0.44661215059775766
    },
    {
      "mathjs": "Complex",
      "re": 0.7779389277147853,
      "im": 0.44798312487809255
    },
    {
      "mathjs": "Complex",
      "re": 0.7806918807307361,
      "im": 0.4493372328469769
    },
    {
      "mathjs": "Complex",
      "re": 0.783453090573424,
      "im": 0.450674423523011
    },
    {
      "mathjs": "Complex",
      "re": 0.786222453284859,
      "im": 0.45199464656172167
    },
    {
      "mathjs": "Complex",
      "re": 0.7889998646001001,
      "im": 0.45329785225745767
    },
    {
      "mathjs": "Complex",
      "re": 0.7917852199511813,
      "im": 0.45458399154526113
    },
    {
      "mathjs": "Complex",
      "re": 0.794578414471048,
      "im": 0.45585301600271494
    },
    {
      "mathjs": "Complex",
      "re": 0.7973793429975051,
      "im": 0.45710487785176535
    },
    {
      "mathjs": "Complex",
      "re": 0.8001879000771766,
      "im": 0.45833952996052135
    },
    {
      "mathjs": "Complex",
      "re": 0.8030039799694759,
      "im": 0.4595569258450289
    },
    {
      "mathjs": "Complex",
      "re": 0.8058274766505868,
      "im": 0.46075701967102095
    },
    {
      "mathjs": "Complex",
      "re": 0.8086582838174551,
      "im": 0.46193976625564337
    },
    {
      "mathjs": "Complex",
      "re": 0.8114962948917909,
      "im": 0.46310512106915563
    },
    {
      "mathjs": "Complex",
      "re": 0.8143414030240812,
      "im": 0.46425304023660774
    },
    {
      "mathjs": "Complex",
      "re": 0.817193501097613,
      "im": 0.46538348053949186
    },
    {
      "mathjs": "Complex",
      "re": 0.8200524817325059,
      "im": 0.4664963994173694
    },
    {
      "mathjs": "Complex",
      "re": 0.8229182372897548,
      "im": 0.46759175496947375
    },
    {
      "mathjs": "Complex",
      "re": 0.8257906598752828,
      "im": 0.4686695059562875
    },
    {
      "mathjs": "Complex",
      "re": 0.8286696413440028,
      "im": 0.46972961180109496
    },
    {
      "mathjs": "Complex",
      "re": 0.83155507330389,
      "im": 0.4707720325915104
    },
    {
      "mathjs": "Complex",
      "re": 0.8344468471200618,
      "im": 0.4717967290809802
    },
    {
      "mathjs": "Complex",
      "re": 0.8373448539188685,
      "im": 0.47280366269026064
    },
    {
      "mathjs": "Complex",
      "re": 0.8402489845919922,
      "im": 0.47379279550887055
    },
    {
      "mathjs": "Complex",
      "re": 0.8431591298005542,
      "im": 0.47476409029651834
    },
    {
      "mathjs": "Complex",
      "re": 0.8460751799792325,
      "im": 0.47571751048450417
    },
    {
      "mathjs": "Complex",
      "re": 0.8489970253403859,
      "im": 0.4766530201770969
    },
    {
      "mathjs": "Complex",
      "re": 0.851924555878188,
      "im": 0.47757058415288534
    },
    {
      "mathjs": "Complex",
      "re": 0.8548576613727689,
      "im": 0.47847016786610447
    },
    {
      "mathjs": "Complex",
      "re": 0.8577962313943641,
      "im": 0.4793517374479358
    },
    {
      "mathjs": "Complex",
      "re": 0.8607401553074735,
      "im": 0.4802152597077829
    },
    {
      "mathjs": "Complex",
      "re": 0.8636893222750255,
      "im": 0.4810607021345208
    },
    {
      "mathjs": "Complex",
      "re": 0.8666436212625508,
      "im": 0.4818880328977199
    },
    {
      "mathjs": "Complex",
      "re": 0.8696029410423622,
      "im": 0.4826972208488447
    },
    {
      "mathjs": "Complex",
      "re": 0.8725671701977427,
      "im": 0.48348823552242604
    },
    {
      "mathjs": "Complex",
      "re": 0.8755361971271398,
      "im": 0.48426104713720863
    },
    {
      "mathjs": "Complex",
      "re": 0.878509910048368,
      "im": 0.485015626597272
    },
    {
      "mathjs": "Complex",
      "re": 0.8814881970028163,
      "im": 0.4857519454931259
    },
    {
      "mathjs": "Complex",
      "re": 0.8844709458596643,
      "im": 0.48646997610278003
    },
    {
      "mathjs": "Complex",
      "re": 0.8874580443201037,
      "im": 0.48716969139278793
    },
    {
      "mathjs": "Complex",
      "re": 0.8904493799215651,
      "im": 0.4878510650192643
    },
    {
      "mathjs": "Complex",
      "re": 0.8934448400419543,
      "im": 0.4885140713288772
    },
    {
      "mathjs": "Complex",
      "re": 0.8964443119038907,
      "im": 0.4891586853598138
    },
    {
      "mathjs": "Complex",
      "re": 0.899447682578954,
      "im": 0.48978488284272026
    },
    {
      "mathjs": "Complex",
      "re": 0.9024548389919358,
      "im": 0.4903926402016152
    },
    {
      "mathjs": "Complex",
      "re": 0.9054656679250969,
      "im": 0.4909819345547776
    },
    {
      "mathjs": "Complex",
      "re": 0.9084800560224294,
      "im": 0.49155274371560814
    },
    {
      "mathjs": "Complex",
      "re": 0.9114978897939255,
      "im": 0.4921050461934645
    },
    {
      "mathjs": "Complex",
      "re": 0.9145190556198494,
      "im": 0.4926388211944706
    },
    {
      "mathjs": "Complex",
      "re": 0.917543439755015,
      "im": 0.49315404862229933
    },
    {
      "mathjs": "Complex",
      "re": 0.9205709283330693,
      "im": 0.4936507090789292
    },
    {
      "mathjs": "Complex",
      "re": 0.9236014073707783,
      "im": 0.49412878386537473
    },
    {
      "mathjs": "Complex",
      "re": 0.9266347627723192,
      "im": 0.4945882549823905
    },
    {
      "mathjs": "Complex",
      "re": 0.9296708803335754,
      "im": 0.49502910513114856
    },
    {
      "mathjs": "Complex",
      "re": 0.9327096457464369,
      "im": 0.49545131771389
    },
    {
      "mathjs": "Complex",
      "re": 0.9357509446031034,
      "im": 0.49585487683454976
    },
    {
      "mathjs": "Complex",
      "re": 0.9387946624003919,
      "im": 0.496239767299355
    },
    {
      "mathjs": "Complex",
      "re": 0.9418406845440476,
      "im": 0.49660597461739725
    },
    {
      "mathjs": "Complex",
      "re": 0.9448888963530584,
      "im": 0.49695348500117803
    },
    {
      "mathjs": "Complex",
      "re": 0.9479391830639726,
      "im": 0.4972822853671277
    },
    {
      "mathjs": "Complex",
      "re": 0.9509914298352196,
      "im": 0.4975923633360984
    },
    {
      "mathjs": "Complex",
      "re": 0.9540455217514336,
      "im": 0.4978837072338299
    },
    {
      "mathjs": "Complex",
      "re": 0.95710134382778,
      "im": 0.498156306091389
    },
    {
      "mathjs": "Complex",
      "re": 0.960158781014285,
      "im": 0.49841014964558283
    },
    {
      "mathjs": "Complex",
      "re": 0.9632177182001662,
      "im": 0.4986452283393451
    },
    {
      "mathjs": "Complex",
      "re": 0.966278040218168,
      "im": 0.4988615333220958
    },
    {
      "mathjs": "Complex",
      "re": 0.9693396318488957,
      "im": 0.4990590564500746
    },
    {
      "mathjs": "Complex",
      "re": 0.9724023778251549,
      "im": 0.4992377902866474
    },
    {
      "mathjs": "Complex",
      "re": 0.975466162836291,
      "im": 0.4993977281025862
    },
    {
      "mathjs": "Complex",
      "re": 0.9785308715325295,
      "im": 0.4995388638763227
    },
    {
      "mathjs": "Complex",
      "re": 0.9815963885293205,
      "im": 0.49966119229417477
    },
    {
      "mathjs": "Complex",
      "re": 0.9846625984116817,
      "im": 0.49976470875054657
    },
    {
      "mathjs": "Complex",
      "re": 0.9877293857385439,
      "im": 0.4998494093481021
    },
    {
      "mathjs": "Complex",
      "re": 0.9907966350470976,
      "im": 0.4999152908979117
    },
    {
      "mathjs": "Complex",
      "re": 0.99386423085714,
      "im": 0.49996235091957225
    },
    {
      "mathjs": "Complex",
      "re": 0.9969320576754227,
      "im": 0.49999058764130055
    },
    {
      "mathjs": "Complex",
      "re": 1,
      "im": 0.5
    },
    {
      "mathjs": "Complex",
      "re": 1.0030679423245772,
      "im": 0.49999058764130055
    },
    {
      "mathjs": "Complex",
      "re": 1.0061357691428598,
      "im": 0.49996235091957225
    },
    {
      "mathjs": "Complex",
      "re": 1.0092033649529024,
      "im": 0.4999152908979117
    },
    {
      "mathjs": "Complex",
      "re": 1.0122706142614561,
      "im": 0.4998494093481021
    },
    {
      "mathjs": "Complex",
      "re": 1.0153374015883183,
      "im": 0.49976470875054657
    },
    {
      "mathjs": "Complex",
      "re": 1.0184036114706794,
      "im": 0.49966119229417477
    },
    {
      "mathjs": "Complex",
      "re": 1.0214691284674704,
      "im": 0.4995388638763227
    },
    {
      "mathjs": "Complex",
      "re": 1.024533837163709,
      "im": 0.4993977281025862
    },
    {
      "mathjs": "Complex",
      "re": 1.0275976221748448,
      "im": 0.4992377902866474
    },
    {
      "mathjs": "Complex",
      "re": 1.0306603681511042,
      "im": 0.4990590564500746
    },
    {
      "mathjs": "Complex",
      "re": 1.033721959781832,
      "im": 0.4988615333220958
    },
    {
      "mathjs": "Complex",
      "re": 1.0367822817998336,
      "im": 0.4986452283393451
    },
    {
      "mathjs": "Complex",
      "re": 1.039841218985715,
      "im": 0.4984101496455829
    },
    {
      "mathjs": "Complex",
      "re": 1.0428986561722198,
      "im": 0.498156306091389
    },
    {
      "mathjs": "Complex",
      "re": 1.0459544782485664,
      "im": 0.4978837072338299
    },
    {
      "mathjs": "Complex",
      "re": 1.0490085701647802,
      "im": 0.49759236333609846
    },
    {
      "mathjs": "Complex",
      "re": 1.0520608169360273,
      "im": 0.4972822853671277
    },
    {
      "mathjs": "Complex",
      "re": 1.0551111036469416,
      "im": 0.49695348500117803
    },
    {
      "mathjs": "Complex",
      "re": 1.0581593154559523,
      "im": 0.49660597461739725
    },
    {
      "mathjs": "Complex",
      "re": 1.061205337599608,
      "im": 0.496239767299355
    },
    {
      "mathjs": "Complex",
      "re": 1.0642490553968966,
      "im": 0.49585487683454976
    },
    {
      "mathjs": "Complex",
      "re": 1.067290354253563,
      "im": 0.49545131771389
    },
    {
      "mathjs": "Complex",
      "re": 1.0703291196664246,
      "im": 0.49502910513114856
    },
    {
      "mathjs": "Complex",
      "re": 1.0733652372276807,
      "im": 0.4945882549823905
    },
    {
      "mathjs": "Complex",
      "re": 1.0763985926292217,
      "im": 0.49412878386537473
    },
    {
      "mathjs": "Complex",
      "re": 1.0794290716669306,
      "im": 0.4936507090789292
    },
    {
      "mathjs": "Complex",
      "re": 1.082456560244985,
      "im": 0.49315404862229933
    },
    {
      "mathjs": "Complex",
      "re": 1.0854809443801505,
      "im": 0.4926388211944706
    },
    {
      "mathjs": "Complex",
      "re": 1.0885021102060743,
      "im": 0.4921050461934645
    },
    {
      "mathjs": "Complex",
      "re": 1.0915199439775705,
      "im": 0.49155274371560814
    },
    {
      "mathjs": "Complex",
      "re": 1.094534332074903,
      "im": 0.4909819345547776
    },
    {
      "mathjs": "Complex",
      "re": 1.097545161008064,
      "im": 0.4903926402016152
    },
    {
      "mathjs": "Complex",
      "re": 1.1005523174210459,
      "im": 0.48978488284272026
    },
    {
      "mathjs": "Complex",
      "re": 1.1035556880961093,
      "im": 0.4891586853598138
    },
    {
      "mathjs": "Complex",
      "re": 1.1065551599580457,
      "im": 0.4885140713288772
    },
    {
      "mathjs": "Complex",
      "re": 1.1095506200784349,
      "im": 0.4878510650192643
    },
    {
      "mathjs": "Complex",
      "re": 1.1125419556798963,
      "im": 0.48716969139278793
    },
    {
      "mathjs": "Complex",
      "re": 1.1155290541403355,
      "im": 0.4864699761027801
    },
    {
      "mathjs": "Complex",
      "re": 1.1185118029971837,
      "im": 0.4857519454931259
    },
    {
      "mathjs": "Complex",
      "re": 1.121490089951632,
      "im": 0.485015626597272
    },
    {
      "mathjs": "Complex",
      "re": 1.12446380287286,
      "im": 0.4842610471372087
    },
    {
      "mathjs": "Complex",
      "re": 1.1274328298022573,
      "im": 0.48348823552242604
    },
    {
      "mathjs": "Complex",
      "re": 1.1303970589576378,
      "im": 0.4826972208488447
    },
    {
      "mathjs": "Complex",
      "re": 1.1333563787374492,
      "im": 0.4818880328977199
    },
    {
      "mathjs": "Complex",
      "re": 1.1363106777249745,
      "im": 0.4810607021345208
    },
    {
      "mathjs": "Complex",
      "re": 1.1392598446925264,
      "im": 0.48021525970778295
    },
    {
      "mathjs": "Complex",
      "re": 1.1422037686056359,
      "im": 0.4793517374479358
    },
    {
      "mathjs": "Complex",
      "re": 1.145142338627231,
      "im": 0.47847016786610447
    },
    {
      "mathjs": "Complex",
      "re": 1.148075444121812,
      "im": 0.47757058415288534
    },
    {
      "mathjs": "Complex",
      "re": 1.151002974659614,
      "im": 0.47665302017709693
    },
    {
      "mathjs": "Complex",
      "re": 1.1539248200207675,
      "im": 0.47571751048450417
    },
    {
      "mathjs": "Complex",
      "re": 1.1568408701994457,
      "im": 0.47476409029651834
    },
    {
      "mathjs": "Complex",
      "re": 1.1597510154080077,
      "im": 0.4737927955088706
    },
    {
      "mathjs": "Complex",
      "re": 1.1626551460811314,
      "im": 0.4728036626902607
    },
    {
      "mathjs": "Complex",
      "re": 1.165553152879938,
      "im": 0.4717967290809802
    },
    {
      "mathjs": "Complex",
      "re": 1.1684449266961099,
      "im": 0.4707720325915104
    },
    {
      "mathjs": "Complex",
      "re": 1.171330358655997,
      "im": 0.46972961180109496
    },
    {
      "mathjs": "Complex",
      "re": 1.1742093401247171,
      "im": 0.4686695059562875
    },
    {
      "mathjs": "Complex",
      "re": 1.1770817627102452,
      "im": 0.4675917549694738
    },
    {
      "mathjs": "Complex",
      "re": 1.179947518267494,
      "im": 0.4664963994173694
    },
    {
      "mathjs": "Complex",
      "re": 1.182806498902387,
      "im": 0.46538348053949186
    },
    {
      "mathjs": "Complex",
      "re": 1.1856585969759188,
      "im": 0.4642530402366078
    },
    {
      "mathjs": "Complex",
      "re": 1.188503705108209,
      "im": 0.4631051210691557
    },
    {
      "mathjs": "Complex",
      "re": 1.1913417161825448,
      "im": 0.46193976625564337
    },
    {
      "mathjs": "Complex",
      "re": 1.1941725233494132,
      "im": 0.460757019671021
    },
    {
      "mathjs": "Complex",
      "re": 1.196996020030524,
      "im": 0.4595569258450289
    },
    {
      "mathjs": "Complex",
      "re": 1.1998120999228234,
      "im": 0.45833952996052135
    },
    {
      "mathjs": "Complex",
      "re": 1.2026206570024949,
      "im": 0.45710487785176535
    },
    {
      "mathjs": "Complex",
      "re": 1.2054215855289518,
      "im": 0.45585301600271494
    },
    {
      "mathjs": "Complex",
      "re": 1.2082147800488185,
      "im": 0.45458399154526125
    },
    {
      "mathjs": "Complex",
      "re": 1.2110001353998998,
      "im": 0.45329785225745767
    },
    {
      "mathjs": "Complex",
      "re": 1.213777546715141,
      "im": 0.4519946465617217
    },
    {
      "mathjs": "Complex",
      "re": 1.216546909426576,
      "im": 0.450674423523011
    },
    {
      "mathjs": "Complex",
      "re": 1.2193081192692636,
      "im": 0.44933723284697696
    },
    {
      "mathjs": "Complex",
      "re": 1.2220610722852145,
      "im": 0.4479831248780926
    },
    {
      "mathjs": "Complex",
      "re": 1.2248056648273034,
      "im": 0.4466121505977576
    },
    {
      "mathjs": "Complex",
      "re": 1.2275417935631718,
      "im": 0.445224361622379
    },
    {
      "mathjs": "Complex",
      "re": 1.23026935547912,
      "im": 0.44381981020142697
    },
    {
      "mathjs": "Complex",
      "re": 1.232988247883983,
      "im": 0.44239854921546895
    },
    {
      "mathjs": "Complex",
      "re": 1.235698368412999,
      "im": 0.4409606321741775
    },
    {
      "mathjs": "Complex",
      "re": 1.238399615031661,
      "im": 0.43950611321431676
    },
    {
      "mathjs": "Complex",
      "re": 1.2410918860395614,
      "im": 0.4380350470977033
    },
    {
      "mathjs": "Complex",
      "re": 1.2437750800742178,
      "im": 0.4365474892091451
    },
    {
      "mathjs": "Complex",
      "re": 1.246449096114892,
      "im": 0.43504349555435573
    },
    {
      "mathjs": "Complex",
      "re": 1.2491138334863907,
      "im": 0.4335231227578464
    },
    {
      "mathjs": "Complex",
      "re": 1.2517691918628588,
      "im": 0.4319864280607934
    },
    {
      "mathjs": "Complex",
      "re": 1.2544150712715536,
      "im": 0.4304334693188836
    },
    {
      "mathjs": "Complex",
      "re": 1.2570513720966108,
      "im": 0.42886430500013606
    },
    {
      "mathjs": "Complex",
      "re": 1.2596779950827948,
      "im": 0.42727899418270027
    },
    {
      "mathjs": "Complex",
      "re": 1.2622948413392343,
      "im": 0.4256775965526326
    },
    {
      "mathjs": "Complex",
      "re": 1.2649018123431475,
      "im": 0.4240601724016486
    },
    {
      "mathjs": "Complex",
      "re": 1.2674988099435485,
      "im": 0.4224267826248536
    },
    {
      "mathjs": "Complex",
      "re": 1.2700857363649465,
      "im": 0.4207774887184492
    },
    {
      "mathjs": "Complex",
      "re": 1.2726624942110232,
      "im": 0.4191123527774191
    },
    {
      "mathjs": "Complex",
      "re": 1.2752289864683024,
      "im": 0.41743143749319006
    },
    {
      "mathjs": "Complex",
      "re": 1.277785116509801,
      "im": 0.41573480615127273
    },
    {
      "mathjs": "Complex",
      "re": 1.2803307880986678,
      "im": 0.4140225226288779
    },
    {
      "mathjs": "Complex",
      "re": 1.2828659053918066,
      "im": 0.4122946513925126
    },
    {
      "mathjs": "Complex",
      "re": 1.2853903729434837,
      "im": 0.4105512574955524
    },
    {
      "mathjs": "Complex",
      "re": 1.2879040957089227,
      "im": 0.40879240657579186
    },
    {
      "mathjs": "Complex",
      "re": 1.2904069790478823,
      "im": 0.40701816485297426
    },
    {
      "mathjs": "Complex",
      "re": 1.2928989287282193,
      "im": 0.4052285991262974
    },
    {
      "mathjs": "Complex",
      "re": 1.295379850929437,
      "im": 0.4034237767718997
    },
    {
      "mathjs": "Complex",
      "re": 1.2978496522462166,
      "im": 0.40160376574032247
    },
    {
      "mathjs": "Complex",
      "re": 1.3003082396919343,
      "im": 0.3997686345539526
    },
    {
      "mathjs": "Complex",
      "re": 1.3027555207021626,
      "im": 0.3979184523044418
    },
    {
      "mathjs": "Complex",
      "re": 1.3051914031381548,
      "im": 0.39605328865010614
    },
    {
      "mathjs": "Complex",
      "re": 1.3076157952903134,
      "im": 0.39417321381330317
    },
    {
      "mathjs": "Complex",
      "re": 1.3100286058816446,
      "im": 0.39227829857778757
    },
    {
      "mathjs": "Complex",
      "re": 1.3124297440711932,
      "im": 0.3903686142860473
    },
    {
      "mathjs": "Complex",
      "re": 1.3148191194574634,
      "im": 0.3884442328366162
    },
    {
      "mathjs": "Complex",
      "re": 1.3171966420818226,
      "im": 0.38650522668136855
    },
    {
      "mathjs": "Complex",
      "re": 1.319562222431888,
      "im": 0.3845516688227898
    },
    {
      "mathjs": "Complex",
      "re": 1.3219157714448957,
      "im": 0.38258363281122953
    },
    {
      "mathjs": "Complex",
      "re": 1.3242572005110562,
      "im": 0.38060119274213094
    },
    {
      "mathjs": "Complex",
      "re": 1.3265864214768883,
      "im": 0.37860442325324234
    },
    {
      "mathjs": "Complex",
      "re": 1.3289033466485394,
      "im": 0.37659339952180626
    },
    {
      "mathjs": "Complex",
      "re": 1.331207888795086,
      "im": 0.37456819726172963
    },
    {
      "mathjs": "Complex",
      "re": 1.3334999611518188,
      "im": 0.37252889272073303
    },
    {
      "mathjs": "Complex",
      "re": 1.3357794774235092,
      "im": 0.3704755626774795
    },
    {
      "mathjs": "Complex",
      "re": 1.338046351787658,
      "im": 0.368408284438685
    },
    {
      "mathjs": "Complex",
      "re": 1.3403004988977265,
      "im": 0.3663271358362064
    },
    {
      "mathjs": "Complex",
      "re": 1.3425418338863502,
      "im": 0.36423219522411265
    },
    {
      "mathjs": "Complex",
      "re": 1.3447702723685335,
      "im": 0.36212354147573345
    },
    {
      "mathjs": "Complex",
      "re": 1.346985730444827,
      "im": 0.3600012539806909
    },
    {
      "mathjs": "Complex",
      "re": 1.3491881247044863,
      "im": 0.35786541264190935
    },
    {
      "mathjs": "Complex",
      "re": 1.3513773722286126,
      "im": 0.35571609787260833
    },
    {
      "mathjs": "Complex",
      "re": 1.3535533905932737,
      "im": 0.3535533905932738
    },
    {
      "mathjs": "Complex",
      "re": 1.3557160978726084,
      "im": 0.3513773722286126
    },
    {
      "mathjs": "Complex",
      "re": 1.3578654126419094,
      "im": 0.34918812470448646
    },
    {
      "mathjs": "Complex",
      "re": 1.3600012539806907,
      "im": 0.346985730444827
    },
    {
      "mathjs": "Complex",
      "re": 1.3621235414757333,
      "im": 0.3447702723685335
    },
    {
      "mathjs": "Complex",
      "re": 1.3642321952241125,
      "im": 0.3425418338863502
    },
    {
      "mathjs": "Complex",
      "re": 1.3663271358362064,
      "im": 0.3403004988977266
    },
    {
      "mathjs": "Complex",
      "re": 1.368408284438685,
      "im": 0.33804635178765796
    },
    {
      "mathjs": "Complex",
      "re": 1.3704755626774794,
      "im": 0.3357794774235093
    },
    {
      "mathjs": "Complex",
      "re": 1.3725288927207329,
      "im": 0.3334999611518188
    },
    {
      "mathjs": "Complex",
      "re": 1.3745681972617296,
      "im": 0.331207888795086
    },
    {
      "mathjs": "Complex",
      "re": 1.3765933995218063,
      "im": 0.3289033466485394
    },
    {
      "mathjs": "Complex",
      "re": 1.3786044232532424,
      "im": 0.3265864214768883
    },
    {
      "mathjs": "Complex",
      "re": 1.380601192742131,
      "im": 0.3242572005110563
    },
    {
      "mathjs": "Complex",
      "re": 1.3825836328112295,
      "im": 0.3219157714448957
    },
    {
      "mathjs": "Complex",
      "re": 1.3845516688227897,
      "im": 0.3195622224318879
    },
    {
      "mathjs": "Complex",
      "re": 1.3865052266813684,
      "im": 0.31719664208182274
    },
    {
      "mathjs": "Complex",
      "re": 1.3884442328366162,
      "im": 0.3148191194574636
    },
    {
      "mathjs": "Complex",
      "re": 1.3903686142860472,
      "im": 0.31242974407119317
    },
    {
      "mathjs": "Complex",
      "re": 1.3922782985777875,
      "im": 0.3100286058816447
    },
    {
      "mathjs": "Complex",
      "re": 1.3941732138133032,
      "im": 0.30761579529031347
    },
    {
      "mathjs": "Complex",
      "re": 1.396053288650106,
      "im": 0.30519140313815485
    },
    {
      "mathjs": "Complex",
      "re": 1.3979184523044417,
      "im": 0.30275552070216283
    },
    {
      "mathjs": "Complex",
      "re": 1.3997686345539526,
      "im": 0.30030823969193443
    },
    {
      "mathjs": "Complex",
      "re": 1.4016037657403224,
      "im": 0.29784965224621673
    },
    {
      "mathjs": "Complex",
      "re": 1.4034237767718998,
      "im": 0.2953798509294371
    },
    {
      "mathjs": "Complex",
      "re": 1.4052285991262974,
      "im": 0.2928989287282195
    },
    {
      "mathjs": "Complex",
      "re": 1.4070181648529743,
      "im": 0.29040697904788226
    },
    {
      "mathjs": "Complex",
      "re": 1.4087924065757917,
      "im": 0.2879040957089227
    },
    {
      "mathjs": "Complex",
      "re": 1.4105512574955523,
      "im": 0.28539037294348363
    },
    {
      "mathjs": "Complex",
      "re": 1.4122946513925125,
      "im": 0.2828659053918067
    },
    {
      "mathjs": "Complex",
      "re": 1.4140225226288778,
      "im": 0.28033078809866807
    },
    {
      "mathjs": "Complex",
      "re": 1.4157348061512727,
      "im": 0.2777851165098011
    },
    {
      "mathjs": "Complex",
      "re": 1.41743143749319,
      "im": 0.27522898646830246
    },
    {
      "mathjs": "Complex",
      "re": 1.419112352777419,
      "im": 0.2726624942110232
    },
    {
      "mathjs": "Complex",
      "re": 1.4207774887184492,
      "im": 0.2700857363649465
    },
    {
      "mathjs": "Complex",
      "re": 1.4224267826248536,
      "im": 0.2674988099435486
    },
    {
      "mathjs": "Complex",
      "re": 1.4240601724016486,
      "im": 0.2649018123431474
    },
    {
      "mathjs": "Complex",
      "re": 1.4256775965526325,
      "im": 0.2622948413392345
    },
    {
      "mathjs": "Complex",
      "re": 1.4272789941827002,
      "im": 0.2596779950827949
    },
    {
      "mathjs": "Complex",
      "re": 1.428864305000136,
      "im": 0.2570513720966109
    },
    {
      "mathjs": "Complex",
      "re": 1.4304334693188836,
      "im": 0.25441507127155366
    },
    {
      "mathjs": "Complex",
      "re": 1.4319864280607932,
      "im": 0.25176919186285884
    },
    {
      "mathjs": "Complex",
      "re": 1.4335231227578464,
      "im": 0.24911383348639088
    },
    {
      "mathjs": "Complex",
      "re": 1.4350434955543556,
      "im": 0.24644909611489207
    },
    {
      "mathjs": "Complex",
      "re": 1.436547489209145,
      "im": 0.24377508007421794
    },
    {
      "mathjs": "Complex",
      "re": 1.4380350470977032,
      "im": 0.24109188603956144
    },
    {
      "mathjs": "Complex",
      "re": 1.4395061132143168,
      "im": 0.23839961503166104
    },
    {
      "mathjs": "Complex",
      "re": 1.4409606321741775,
      "im": 0.23569836841299893
    },
    {
      "mathjs": "Complex",
      "re": 1.442398549215469,
      "im": 0.2329882478839831
    },
    {
      "mathjs": "Complex",
      "re": 1.4438198102014268,
      "im": 0.2302693554791201
    },
    {
      "mathjs": "Complex",
      "re": 1.445224361622379,
      "im": 0.22754179356317195
    },
    {
      "mathjs": "Complex",
      "re": 1.4466121505977576,
      "im": 0.22480566482730344
    },
    {
      "mathjs": "Complex",
      "re": 1.4479831248780926,
      "im": 0.22206107228521466
    },
    {
      "mathjs": "Complex",
      "re": 1.449337232846977,
      "im": 0.21930811926926377
    },
    {
      "mathjs": "Complex",
      "re": 1.450674423523011,
      "im": 0.21654690942657603
    },
    {
      "mathjs": "Complex",
      "re": 1.4519946465617217,
      "im": 0.21377754671514101
    },
    {
      "mathjs": "Complex",
      "re": 1.4532978522574576,
      "im": 0.21100013539989992
    },
    {
      "mathjs": "Complex",
      "re": 1.4545839915452612,
      "im": 0.20821478004881858
    },
    {
      "mathjs": "Complex",
      "re": 1.455853016002715,
      "im": 0.20542158552895207
    },
    {
      "mathjs": "Complex",
      "re": 1.4571048778517652,
      "im": 0.20262065700249496
    },
    {
      "mathjs": "Complex",
      "re": 1.4583395299605213,
      "im": 0.19981209992282353
    },
    {
      "mathjs": "Complex",
      "re": 1.459556925845029,
      "im": 0.19699602003052408
    },
    {
      "mathjs": "Complex",
      "re": 1.460757019671021,
      "im": 0.1941725233494133
    },
    {
      "mathjs": "Complex",
      "re": 1.4619397662556435,
      "im": 0.19134171618254495
    },
    {
      "mathjs": "Complex",
      "re": 1.4631051210691557,
      "im": 0.18850370510820907
    },
    {
      "mathjs": "Complex",
      "re": 1.4642530402366076,
      "im": 0.18565859697591885
    },
    {
      "mathjs": "Complex",
      "re": 1.4653834805394919,
      "im": 0.1828064989023869
    },
    {
      "mathjs": "Complex",
      "re": 1.4664963994173694,
      "im": 0.17994751826749417
    },
    {
      "mathjs": "Complex",
      "re": 1.4675917549694737,
      "im": 0.1770817627102452
    },
    {
      "mathjs": "Complex",
      "re": 1.4686695059562873,
      "im": 0.1742093401247174
    },
    {
      "mathjs": "Complex",
      "re": 1.469729611801095,
      "im": 0.17133035865599722
    },
    {
      "mathjs": "Complex",
      "re": 1.4707720325915103,
      "im": 0.16844492669611016
    },
    {
      "mathjs": "Complex",
      "re": 1.4717967290809801,
      "im": 0.16555315287993824
    },
    {
      "mathjs": "Complex",
      "re": 1.4728036626902605,
      "im": 0.16265514608113163
    },
    {
      "mathjs": "Complex",
      "re": 1.4737927955088705,
      "im": 0.1597510154080079
    },
    {
      "mathjs": "Complex",
      "re": 1.4747640902965182,
      "im": 0.1568408701994457
    },
    {
      "mathjs": "Complex",
      "re": 1.4757175104845042,
      "im": 0.15392482002076752
    },
    {
      "mathjs": "Complex",
      "re": 1.4766530201770969,
      "im": 0.15100297465961401
    },
    {
      "mathjs": "Complex",
      "re": 1.4775705841528852,
      "im": 0.148075444121812
    },
    {
      "mathjs": "Complex",
      "re": 1.4784701678661043,
      "im": 0.1451423386272312
    },
    {
      "mathjs": "Complex",
      "re": 1.4793517374479357,
      "im": 0.14220376860563605
    },
    {
      "mathjs": "Complex",
      "re": 1.480215259707783,
      "im": 0.13925984469252659
    },
    {
      "mathjs": "Complex",
      "re": 1.4810607021345208,
      "im": 0.13631067772497463
    },
    {
      "mathjs": "Complex",
      "re": 1.48188803289772,
      "im": 0.13335637873744924
    },
    {
      "mathjs": "Complex",
      "re": 1.4826972208488447,
      "im": 0.13039705895763792
    },
    {
      "mathjs": "Complex",
      "re": 1.483488235522426,
      "im": 0.12743282980225734
    },
    {
      "mathjs": "Complex",
      "re": 1.4842610471372086,
      "im": 0.12446380287286005
    },
    {
      "mathjs": "Complex",
      "re": 1.485015626597272,
      "im": 0.12149008995163203
    },
    {
      "mathjs": "Complex",
      "re": 1.4857519454931258,
      "im": 0.11851180299718359
    },
    {
      "mathjs": "Complex",
      "re": 1.48646997610278,
      "im": 0.11552905414033567
    },
    {
      "mathjs": "Complex",
      "re": 1.4871696913927879,
      "im": 0.11254195567989642
    },
    {
      "mathjs": "Complex",
      "re": 1.4878510650192642,
      "im": 0.10955062007843502
    },
    {
      "mathjs": "Complex",
      "re": 1.4885140713288771,
      "im": 0.10655515995804571
    },
    {
      "mathjs": "Complex",
      "re": 1.4891586853598138,
      "im": 0.10355568809610942
    },
    {
      "mathjs": "Complex",
      "re": 1.4897848828427203,
      "im": 0.100552317421046
    },
    {
      "mathjs": "Complex",
      "re": 1.4903926402016152,
      "im": 0.0975451610080643
    },
    {
      "mathjs": "Complex",
      "re": 1.4909819345547777,
      "im": 0.09453433207490318
    },
    {
      "mathjs": "Complex",
      "re": 1.4915527437156082,
      "im": 0.09151994397757045
    },
    {
      "mathjs": "Complex",
      "re": 1.4921050461934646,
      "im": 0.08850211020607447
    },
    {
      "mathjs": "Complex",
      "re": 1.4926388211944706,
      "im": 0.08548094438015061
    },
    {
      "mathjs": "Complex",
      "re": 1.4931540486222992,
      "im": 0.08245656024498507
    },
    {
      "mathjs": "Complex",
      "re": 1.4936507090789293,
      "im": 0.07942907166693074
    },
    {
      "mathjs": "Complex",
      "re": 1.4941287838653747,
      "im": 0.07639859262922184
    },
    {
      "mathjs": "Complex",
      "re": 1.4945882549823906,
      "im": 0.0733652372276809
    },
    {
      "mathjs": "Complex",
      "re": 1.4950291051311484,
      "im": 0.07032911966642477
    },
    {
      "mathjs": "Complex",
      "re": 1.49545131771389,
      "im": 0.06729035425356314
    },
    {
      "mathjs": "Complex",
      "re": 1.4958548768345499,
      "im": 0.06424905539689654
    },
    {
      "mathjs": "Complex",
      "re": 1.496239767299355,
      "im": 0.061205337599608174
    },
    {
      "mathjs": "Complex",
      "re": 1.4966059746173972,
      "im": 0.058159315455952355
    },
    {
      "mathjs": "Complex",
      "re": 1.496953485001178,
      "im": 0.05511110364694162
    },
    {
      "mathjs": "Complex",
      "re": 1.4972822853671277,
      "im": 0.052060816936027286
    },
    {
      "mathjs": "Complex",
      "re": 1.4975923633360984,
      "im": 0.04900857016478041
    },
    {
      "mathjs": "Complex",
      "re": 1.49788370723383,
      "im": 0.045954478248566376
    },
    {
      "mathjs": "Complex",
      "re": 1.498156306091389,
      "im": 0.04289865617222008
    },
    {
      "mathjs": "Complex",
      "re": 1.4984101496455828,
      "im": 0.0398412189857151
    },
    {
      "mathjs": "Complex",
      "re": 1.498645228339345,
      "im": 0.036782281799833866
    },
    {
      "mathjs": "Complex",
      "re": 1.4988615333220958,
      "im": 0.03372195978183209
    },
    {
      "mathjs": "Complex",
      "re": 1.4990590564500745,
      "im": 0.030660368151104244
    },
    {
      "mathjs": "Complex",
      "re": 1.4992377902866474,
      "im": 0.027597622174845047
    },
    {
      "mathjs": "Complex",
      "re": 1.4993977281025863,
      "im": 0.024533837163708983
    },
    {
      "mathjs": "Complex",
      "re": 1.4995388638763227,
      "im": 0.02146912846747051
    },
    {
      "mathjs": "Complex",
      "re": 1.4996611922941747,
      "im": 0.018403611470679416
    },
    {
      "mathjs": "Complex",
      "re": 1.4997647087505466,
      "im": 0.015337401588318433
    },
    {
      "mathjs": "Complex",
      "re": 1.499849409348102,
      "im": 0.012270614261456163
    },
    {
      "mathjs": "Complex",
      "re": 1.4999152908979116,
      "im": 0.00920336495290255
    },
    {
      "mathjs": "Complex",
      "re": 1.4999623509195723,
      "im": 0.0061357691428600035
    },
    {
      "mathjs": "Complex",
      "re": 1.4999905876413004,
      "im": 0.0030679423245773994
    }
  ],
  "w": [
    0,
    0.006135923151542565,
    0.01227184630308513,
    0.018407769454627694,
    0.02454369260617026,
    0.030679615757712823,
    0.03681553890925539,
    0.04295146206079795,
    0.04908738521234052,
    0.05522330836388308,
    0.06135923151542565,
    0.0674951546669682,
    0.07363107781851078,
    0.07976700097005335,
    0.0859029241215959,
    0.09203884727313846,
    0.09817477042468103,
    0.1043106935762236,
    0.11044661672776616,
    0.11658253987930872,
    0.1227184630308513,
    0.12885438618239387,
    0.1349903093339364,
    0.14112623248547898,
    0.14726215563702155,
    0.15339807878856412,
    0.1595340019401067,
    0.16566992509164924,
    0.1718058482431918,
    0.17794177139473438,
    0.18407769454627693,
    0.1902136176978195,
    0.19634954084936207,
    0.20248546400090464,
    0.2086213871524472,
    0.21475731030398976,
    0.22089323345553233,
    0.2270291566070749,
    0.23316507975861744,
    0.23930100291016002,
    0.2454369260617026,
    0.25157284921324513,
    0.25770877236478773,
    0.2638446955163303,
    0.2699806186678728,
    0.2761165418194154,
    0.28225246497095796,
    0.28838838812250056,
    0.2945243112740431,
    0.30066023442558565,
    0.30679615757712825,
    0.3129320807286708,
    0.3190680038802134,
    0.32520392703175593,
    0.3313398501832985,
    0.3374757733348411,
    0.3436116964863836,
    0.34974761963792617,
    0.35588354278946877,
    0.3620194659410113,
    0.36815538909255385,
    0.37429131224409645,
    0.380427235395639,
    0.3865631585471816,
    0.39269908169872414,
    0.3988350048502667,
    0.4049709280018093,
    0.4111068511533518,
    0.4172427743048944,
    0.42337869745643697,
    0.4295146206079795,
    0.4356505437595221,
    0.44178646691106466,
    0.4479223900626072,
    0.4540583132141498,
    0.46019423636569234,
    0.4663301595172349,
    0.4724660826687775,
    0.47860200582032003,
    0.48473792897186263,
    0.4908738521234052,
    0.4970097752749477,
    0.5031456984264903,
    0.5092816215780329,
    0.5154175447295755,
    0.521553467881118,
    0.5276893910326605,
    0.5338253141842031,
    0.5399612373357456,
    0.5460971604872883,
    0.5522330836388308,
    0.5583690067903734,
    0.5645049299419159,
    0.5706408530934585,
    0.5767767762450011,
    0.5829126993965437,
    0.5890486225480862,
    0.5951845456996288,
    0.6013204688511713,
    0.607456392002714,
    0.6135923151542565,
    0.619728238305799,
    0.6258641614573416,
    0.6320000846088841,
    0.6381360077604268,
    0.6442719309119693,
    0.6504078540635119,
    0.6565437772150544,
    0.662679700366597,
    0.6688156235181395,
    0.6749515466696822,
    0.6810874698212247,
    0.6872233929727672,
    0.6933593161243098,
    0.6994952392758523,
    0.705631162427395,
    0.7117670855789375,
    0.7179030087304801,
    0.7240389318820226,
    0.7301748550335652,
    0.7363107781851077,
    0.7424467013366504,
    0.7485826244881929,
    0.7547185476397354,
    0.760854470791278,
    0.7669903939428205,
    0.7731263170943632,
    0.7792622402459057,
    0.7853981633974483,
    0.7915340865489908,
    0.7976700097005334,
    0.803805932852076,
    0.8099418560036186,
    0.8160777791551611,
    0.8222137023067037,
    0.8283496254582462,
    0.8344855486097889,
    0.8406214717613314,
    0.8467573949128739,
    0.8528933180644165,
    0.859029241215959,
    0.8651651643675016,
    0.8713010875190442,
    0.8774370106705868,
    0.8835729338221293,
    0.8897088569736719,
    0.8958447801252144,
    0.9019807032767571,
    0.9081166264282996,
    0.9142525495798421,
    0.9203884727313847,
    0.9265243958829272,
    0.9326603190344698,
    0.9387962421860124,
    0.944932165337555,
    0.9510680884890975,
    0.9572040116406401,
    0.9633399347921826,
    0.9694758579437253,
    0.9756117810952678,
    0.9817477042468103,
    0.9878836273983529,
    0.9940195505498954,
    1.000155473701438,
    1.0062913968529805,
    1.012427320004523,
    1.0185632431560658,
    1.0246991663076084,
    1.030835089459151,
    1.0369710126106935,
    1.043106935762236,
    1.0492428589137786,
    1.055378782065321,
    1.0615147052168636,
    1.0676506283684062,
    1.0737865515199487,
    1.0799224746714913,
    1.086058397823034,
    1.0921943209745766,
    1.0983302441261191,
    1.1044661672776617,
    1.1106020904292042,
    1.1167380135807468,
    1.1228739367322893,
    1.1290098598838318,
    1.1351457830353744,
    1.141281706186917,
    1.1474176293384597,
    1.1535535524900022,
    1.1596894756415448,
    1.1658253987930873,
    1.1719613219446299,
    1.1780972450961724,
    1.184233168247715,
    1.1903690913992575,
    1.1965050145508,
    1.2026409377023426,
    1.2087768608538851,
    1.214912784005428,
    1.2210487071569704,
    1.227184630308513,
    1.2333205534600555,
    1.239456476611598,
    1.2455923997631406,
    1.2517283229146832,
    1.2578642460662257,
    1.2640001692177683,
    1.2701360923693108,
    1.2762720155208536,
    1.282407938672396,
    1.2885438618239387,
    1.2946797849754812,
    1.3008157081270237,
    1.3069516312785663,
    1.3130875544301088,
    1.3192234775816514,
    1.325359400733194,
    1.3314953238847365,
    1.337631247036279,
    1.3437671701878218,
    1.3499030933393643,
    1.3560390164909069,
    1.3621749396424494,
    1.368310862793992,
    1.3744467859455345,
    1.380582709097077,
    1.3867186322486196,
    1.3928545554001621,
    1.3989904785517047,
    1.4051264017032472,
    1.41126232485479,
    1.4173982480063325,
    1.423534171157875,
    1.4296700943094176,
    1.4358060174609601,
    1.4419419406125027,
    1.4480778637640452,
    1.4542137869155878,
    1.4603497100671303,
    1.4664856332186729,
    1.4726215563702154,
    1.4787574795217582,
    1.4848934026733007,
    1.4910293258248433,
    1.4971652489763858,
    1.5033011721279284,
    1.509437095279471,
    1.5155730184310134,
    1.521708941582556,
    1.5278448647340985,
    1.533980787885641,
    1.5401167110371838,
    1.5462526341887264,
    1.552388557340269,
    1.5585244804918115,
    1.564660403643354,
    1.5707963267948966,
    1.576932249946439,
    1.5830681730979816,
    1.5892040962495242,
    1.5953400194010667,
    1.6014759425526093,
    1.607611865704152,
    1.6137477888556946,
    1.6198837120072371,
    1.6260196351587797,
    1.6321555583103222,
    1.6382914814618648,
    1.6444274046134073,
    1.6505633277649499,
    1.6566992509164924,
    1.662835174068035,
    1.6689710972195777,
    1.6751070203711202,
    1.6812429435226628,
    1.6873788666742053,
    1.6935147898257479,
    1.6996507129772904,
    1.705786636128833,
    1.7119225592803755,
    1.718058482431918,
    1.7241944055834606,
    1.7303303287350031,
    1.736466251886546,
    1.7426021750380885,
    1.748738098189631,
    1.7548740213411735,
    1.761009944492716,
    1.7671458676442586,
    1.7732817907958012,
    1.7794177139473437,
    1.7855536370988863,
    1.7916895602504288,
    1.7978254834019713,
    1.8039614065535141,
    1.8100973297050567,
    1.8162332528565992,
    1.8223691760081417,
    1.8285050991596843,
    1.8346410223112268,
    1.8407769454627694,
    1.846912868614312,
    1.8530487917658545,
    1.859184714917397,
    1.8653206380689396,
    1.8714565612204823,
    1.8775924843720249,
    1.8837284075235674,
    1.88986433067511,
    1.8960002538266525,
    1.902136176978195,
    1.9082721001297376,
    1.9144080232812801,
    1.9205439464328227,
    1.9266798695843652,
    1.932815792735908,
    1.9389517158874505,
    1.945087639038993,
    1.9512235621905356,
    1.9573594853420782,
    1.9634954084936207,
    1.9696313316451632,
    1.9757672547967058,
    1.9819031779482483,
    1.9880391010997909,
    1.9941750242513334,
    2.000310947402876,
    2.0064468705544187,
    2.012582793705961,
    2.018718716857504,
    2.024854640009046,
    2.030990563160589,
    2.0371264863121317,
    2.043262409463674,
    2.0493983326152168,
    2.055534255766759,
    2.061670178918302,
    2.067806102069844,
    2.073942025221387,
    2.0800779483729293,
    2.086213871524472,
    2.0923497946760143,
    2.098485717827557,
    2.1046216409791,
    2.110757564130642,
    2.116893487282185,
    2.1230294104337273,
    2.12916533358527,
    2.1353012567368124,
    2.141437179888355,
    2.1475731030398975,
    2.1537090261914402,
    2.1598449493429825,
    2.1659808724945253,
    2.172116795646068,
    2.1782527187976104,
    2.184388641949153,
    2.1905245651006955,
    2.1966604882522383,
    2.2027964114037806,
    2.2089323345553233,
    2.2150682577068657,
    2.2212041808584084,
    2.227340104009951,
    2.2334760271614935,
    2.2396119503130363,
    2.2457478734645786,
    2.2518837966161214,
    2.2580197197676637,
    2.2641556429192065,
    2.270291566070749,
    2.2764274892222915,
    2.282563412373834,
    2.2886993355253766,
    2.2948352586769194,
    2.3009711818284617,
    2.3071071049800045,
    2.313243028131547,
    2.3193789512830896,
    2.325514874434632,
    2.3316507975861747,
    2.337786720737717,
    2.3439226438892597,
    2.350058567040802,
    2.356194490192345,
    2.3623304133438876,
    2.36846633649543,
    2.3746022596469727,
    2.380738182798515,
    2.386874105950058,
    2.3930100291016,
    2.399145952253143,
    2.405281875404685,
    2.411417798556228,
    2.4175537217077703,
    2.423689644859313,
    2.429825568010856,
    2.435961491162398,
    2.442097414313941,
    2.448233337465483,
    2.454369260617026,
    2.4605051837685683,
    2.466641106920111,
    2.4727770300716534,
    2.478912953223196,
    2.4850488763747385,
    2.4911847995262812,
    2.497320722677824,
    2.5034566458293663,
    2.509592568980909,
    2.5157284921324514,
    2.521864415283994,
    2.5280003384355365,
    2.5341362615870793,
    2.5402721847386216,
    2.5464081078901644,
    2.552544031041707,
    2.5586799541932495,
    2.564815877344792,
    2.5709518004963345,
    2.5770877236478773,
    2.5832236467994196,
    2.5893595699509624,
    2.5954954931025047,
    2.6016314162540475,
    2.60776733940559,
    2.6139032625571326,
    2.6200391857086753,
    2.6261751088602177,
    2.6323110320117604,
    2.6384469551633027,
    2.6445828783148455,
    2.650718801466388,
    2.6568547246179306,
    2.662990647769473,
    2.6691265709210157,
    2.675262494072558,
    2.6813984172241008,
    2.6875343403756435,
    2.693670263527186,
    2.6998061866787286,
    2.705942109830271,
    2.7120780329818137,
    2.718213956133356,
    2.724349879284899,
    2.730485802436441,
    2.736621725587984,
    2.742757648739526,
    2.748893571891069,
    2.7550294950426117,
    2.761165418194154,
    2.767301341345697,
    2.773437264497239,
    2.779573187648782,
    2.7857091108003242,
    2.791845033951867,
    2.7979809571034093,
    2.804116880254952,
    2.8102528034064944,
    2.816388726558037,
    2.82252464970958,
    2.8286605728611223,
    2.834796496012665,
    2.8409324191642074,
    2.84706834231575,
    2.8532042654672924,
    2.859340188618835,
    2.8654761117703775,
    2.8716120349219203,
    2.8777479580734626,
    2.8838838812250054,
    2.890019804376548,
    2.8961557275280905,
    2.9022916506796332,
    2.9084275738311756,
    2.9145634969827183,
    2.9206994201342606,
    2.9268353432858034,
    2.9329712664373457,
    2.9391071895888885,
    2.945243112740431,
    2.9513790358919736,
    2.9575149590435164,
    2.9636508821950587,
    2.9697868053466014,
    2.9759227284981438,
    2.9820586516496865,
    2.988194574801229,
    2.9943304979527716,
    3.000466421104314,
    3.0066023442558567,
    3.0127382674073995,
    3.018874190558942,
    3.0250101137104846,
    3.031146036862027,
    3.0372819600135696,
    3.043417883165112,
    3.0495538063166547,
    3.055689729468197,
    3.06182565261974,
    3.067961575771282,
    3.074097498922825,
    3.0802334220743677,
    3.08636934522591,
    3.0925052683774528,
    3.098641191528995,
    3.104777114680538,
    3.11091303783208,
    3.117048960983623,
    3.1231848841351653,
    3.129320807286708,
    3.1354567304382504
  ]
}`,definition:{en:"Calculate the frequency response given filter coefficients.",cn:"\u6839\u636E\u6EE4\u6CE2\u5668\u7CFB\u6570\u8BA1\u7B97\u9891\u7387\u54CD\u5E94\u3002",ja:"\u30D5\u30A3\u30EB\u30BF\u4FC2\u6570\u304B\u3089\u5468\u6CE2\u6570\u5FDC\u7B54\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"b (array), a (array)",cn:"\u5206\u5B50\u7CFB\u6570\u6570\u7EC4 b\uFF0C\u5206\u6BCD\u7CFB\u6570\u6570\u7EC4 a",ja:"b\uFF08\u914D\u5217\uFF09\u3001a\uFF08\u914D\u5217\uFF09"}},{title:"zpk2tf",call:"zpk2tf([-0.5], [1], 1)",result:`[
  [
    {
      "mathjs": "Complex",
      "re": 1,
      "im": 0
    },
    {
      "mathjs": "Complex",
      "re": 0.5,
      "im": 0
    }
  ],
  [
    {
      "mathjs": "Complex",
      "re": 1,
      "im": 0
    },
    {
      "mathjs": "Complex",
      "re": -1,
      "im": 0
    }
  ]
]`,definition:{en:"Compute the transfer function from zero, pole, and gain data.",cn:"\u6839\u636E\u96F6\u70B9\u3001\u6781\u70B9\u53CA\u589E\u76CA\u8BA1\u7B97\u4F20\u9012\u51FD\u6570\u3002",ja:"\u96F6\u70B9\u3001\u6975\u70B9\u3001\u304A\u3088\u3073\u30B2\u30A4\u30F3\u3092\u3082\u3068\u306B\u4F1D\u9054\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"z (array), p (array), k (number)",cn:"\u96F6\u70B9\u6570\u7EC4 z\uFF0C\u6781\u70B9\u6570\u7EC4 p\uFF0C\u589E\u76CA k",ja:"z\uFF08\u914D\u5217\uFF09\u3001p\uFF08\u914D\u5217\uFF09\u3001k\uFF08\u6570\u5024\uFF09"}}]},{category:"Special functions",functions:[{title:"erf",call:"erf(0.5)",result:"0.5204998778130465",definition:{en:"Compute the error function using rational Chebyshev approximations.",cn:"\u4F7F\u7528\u6709\u7406\u5207\u6BD4\u96EA\u592B\u8FD1\u4F3C\u6765\u8BA1\u7B97\u8BEF\u5DEE\u51FD\u6570\u3002",ja:"\u6709\u7406\u30C1\u30A7\u30D3\u30B7\u30A7\u30D5\u8FD1\u4F3C\u3092\u7528\u3044\u3066\u8AA4\u5DEE\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"x (number)",cn:"\u8F93\u5165\u503C x\uFF08\u6570\u5B57\uFF09",ja:"x\uFF08\u6570\u5024\uFF09"}},{title:"zeta",call:"zeta(2)",result:"1.6449340668482526",definition:{en:"Compute the Riemann Zeta function using a series expansion.",cn:"\u5229\u7528\u7EA7\u6570\u5C55\u5F00\u6765\u8BA1\u7B97\u9ECE\u66FC\u03B6\u51FD\u6570\u3002",ja:"\u7D1A\u6570\u5C55\u958B\u3092\u7528\u3044\u3066\u30EA\u30FC\u30DE\u30F3\u30BC\u30FC\u30BF\u95A2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"n (number)",cn:"\u8F93\u5165\u503C n\uFF08\u6570\u5B57\uFF09",ja:"n\uFF08\u6570\u5024\uFF09"}}]},{category:"Statistics functions",functions:[{title:"corr",call:"corr([2, 3, 4], [5, 6, 7])",result:"1",definition:{en:"Compute the correlation coefficient between two lists or matrices.",cn:"\u8BA1\u7B97\u4E24\u4E2A\u5217\u8868\u6216\u77E9\u9635\u4E4B\u95F4\u7684\u76F8\u5173\u7CFB\u6570\u3002",ja:"2\u3064\u306E\u30EA\u30B9\u30C8\u307E\u305F\u306F\u884C\u5217\u9593\u306E\u76F8\u95A2\u4FC2\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"},parameterDefinitions:{en:"A (Array|Matrix), B (Array|Matrix)",cn:"A\uFF0CB\u53EF\u4E3A\u6570\u7EC4\u6216\u77E9\u9635",ja:"A\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09\u3001B\uFF08\u914D\u5217\u307E\u305F\u306F\u884C\u5217\uFF09"}},{title:"cumsum",call:"cumsum([1, 2, 3, 4])",result:`[
  1,
  3,
  6,
  10
]`,definition:{en:"Compute the cumulative sum of a list or matrix.",cn:"\u8BA1\u7B97\u5217\u8868\u6216\u77E9\u9635\u7684\u7D2F\u52A0\u548C\u3002",ja:"\u30EA\u30B9\u30C8\u307E\u305F\u306F\u884C\u5217\u306E\u7D2F\u7A4D\u548C\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"mad",call:"mad([1, 2, 3, 4])",result:"1",definition:{en:"Compute the median absolute deviation of values.",cn:"\u8BA1\u7B97\u6570\u636E\u7684\u4E2D\u4F4D\u7EDD\u5BF9\u504F\u5DEE\u3002",ja:"\u30C7\u30FC\u30BF\u306E\u4E2D\u592E\u5024\u304B\u3089\u306E\u7D76\u5BFE\u504F\u5DEE\uFF08MAD\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"max",call:"max([1, 2, 3])",result:"3",definition:{en:"Compute the maximum of a list or matrix.",cn:"\u8FD4\u56DE\u5217\u8868\u6216\u77E9\u9635\u7684\u6700\u5927\u503C\u3002",ja:"\u30EA\u30B9\u30C8\u307E\u305F\u306F\u884C\u5217\u306E\u6700\u5927\u5024\u3092\u6C42\u3081\u307E\u3059\u3002"}},{title:"mean",call:"mean([2, 4, 6])",result:"4",definition:{en:"Compute the mean (average) of values.",cn:"\u8BA1\u7B97\u5E73\u5747\u503C\u3002",ja:"\u5024\u306E\u5E73\u5747\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"median",call:"median([1, 2, 3, 4, 5])",result:"3",definition:{en:"Compute the median of values.",cn:"\u8BA1\u7B97\u4E2D\u4F4D\u6570\u3002",ja:"\u5024\u306E\u4E2D\u592E\u5024\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"min",call:"min([1, 2, 3])",result:"1",definition:{en:"Compute the minimum of a list or matrix.",cn:"\u8FD4\u56DE\u5217\u8868\u6216\u77E9\u9635\u7684\u6700\u5C0F\u503C\u3002",ja:"\u30EA\u30B9\u30C8\u307E\u305F\u306F\u884C\u5217\u306E\u6700\u5C0F\u5024\u3092\u6C42\u3081\u307E\u3059\u3002"}},{title:"mode",call:"mode([1, 2, 2, 3])",result:`[
  2
]`,definition:{en:"Compute the mode of a list or set of values.",cn:"\u8BA1\u7B97\u4F17\u6570\uFF08\u6700\u5E38\u51FA\u73B0\u7684\u503C\uFF09\u3002",ja:"\u30EA\u30B9\u30C8\u307E\u305F\u306F\u30C7\u30FC\u30BF\u96C6\u5408\u306E\u6700\u983B\u5024\uFF08\u30E2\u30FC\u30C9\uFF09\u3092\u6C42\u3081\u307E\u3059\u3002"}},{title:"prod",call:"prod([1, 2, 3, 4])",result:"24",definition:{en:"Compute the product of a list or matrix.",cn:"\u8BA1\u7B97\u5217\u8868\u6216\u77E9\u9635\u4E2D\u6240\u6709\u6570\u7684\u4E58\u79EF\u3002",ja:"\u30EA\u30B9\u30C8\u307E\u305F\u306F\u884C\u5217\u306B\u542B\u307E\u308C\u308B\u5168\u6570\u306E\u7A4D\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"quantileSeq",call:"quantileSeq([1, 2, 3, 4], 0.25)",result:"1.75",definition:{en:"Compute the prob-order quantile of given data.",cn:"\u8BA1\u7B97\u5217\u8868\u6216\u77E9\u9635\u5728 prob \u4F4D\u7F6E\u4E0A\u7684\u5206\u4F4D\u6570\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u30C7\u30FC\u30BF\u306E\u78BA\u7387\u5206\u4F4D\u6570\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"std",call:"std([1, 2, 3, 4])",result:"1.2909944487358056",definition:{en:"Compute the standard deviation of data.",cn:"\u8BA1\u7B97\u6570\u636E\u7684\u6807\u51C6\u5DEE\u3002",ja:"\u30C7\u30FC\u30BF\u306E\u6A19\u6E96\u504F\u5DEE\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"sum",call:"sum([1, 2, 3])",result:"6",definition:{en:"Compute the sum of a list or matrix.",cn:"\u8BA1\u7B97\u5217\u8868\u6216\u77E9\u9635\u6240\u6709\u6570\u7684\u548C\u3002",ja:"\u30EA\u30B9\u30C8\u307E\u305F\u306F\u884C\u5217\u306E\u5408\u8A08\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"variance",call:"variance([1, 2, 3, 4])",result:"1.6666666666666667",definition:{en:"Compute the variance of data.",cn:"\u8BA1\u7B97\u6570\u636E\u7684\u65B9\u5DEE\u3002",ja:"\u30C7\u30FC\u30BF\u306E\u5206\u6563\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}}]},{category:"String functions",functions:[{title:"bin",call:"bin(13)",result:"0b1101",definition:{en:"Format a number as binary.",cn:"\u5C06\u6570\u5B57\u683C\u5F0F\u5316\u4E3A\u4E8C\u8FDB\u5236\u3002",ja:"\u6570\u5024\u30922\u9032\u6570\u5F62\u5F0F\u3067\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3057\u307E\u3059\u3002"}},{title:"format",call:"format(123.456, 2)",result:"120",definition:{en:"Format a value of any type into a string with optional precision.",cn:"\u5C06\u4EFB\u610F\u7C7B\u578B\u7684\u503C\u8F6C\u4E3A\u6307\u5B9A\u7CBE\u5EA6\u7684\u5B57\u7B26\u4E32\u3002",ja:"\u4EFB\u610F\u306E\u578B\u306E\u5024\u3092\u6587\u5B57\u5217\u306B\u5909\u63DB\u3057\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u7CBE\u5EA6\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002"}},{title:"hex",call:"hex(255)",result:"0xff",definition:{en:"Format a number as hexadecimal.",cn:"\u5C06\u6570\u5B57\u683C\u5F0F\u5316\u4E3A\u5341\u516D\u8FDB\u5236\u3002",ja:"\u6570\u5024\u309216\u9032\u6570\u5F62\u5F0F\u3067\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3057\u307E\u3059\u3002"}},{title:"oct",call:"oct(64)",result:"0o100",definition:{en:"Format a number as octal.",cn:"\u5C06\u6570\u5B57\u683C\u5F0F\u5316\u4E3A\u516B\u8FDB\u5236\u3002",ja:"\u6570\u5024\u30928\u9032\u6570\u5F62\u5F0F\u3067\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3057\u307E\u3059\u3002"}},{title:"print",call:"print('x = $x, y = $y', {x: 3, y: 4}, 2)",result:"x = 3, y = 4",definition:{en:"Interpolate values into a string template.",cn:"\u5C06\u591A\u4E2A\u6570\u503C\u63D2\u5165\u5230\u5B57\u7B26\u4E32\u6A21\u677F\u4E2D\u3002",ja:"\u8907\u6570\u306E\u6570\u5024\u3092\u6587\u5B57\u5217\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306B\u57CB\u3081\u8FBC\u307F\u307E\u3059\u3002"}}]},{category:"Trigonometry functions",functions:[{title:"acos",call:"acos(0.5)",result:"1.0471975511965979",definition:{en:"Calculate the inverse cosine.",cn:"\u8BA1\u7B97\u53CD\u4F59\u5F26\u503C\u3002",ja:"\u30A2\u30FC\u30AF\u30B3\u30B5\u30A4\u30F3\uFF08\u9006\u4F59\u5F26\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"acosh",call:"acosh(2)",result:"1.3169578969248166",definition:{en:"Calculate the hyperbolic arccos.",cn:"\u8BA1\u7B97\u53CC\u66F2\u53CD\u4F59\u5F26\u503C\u3002",ja:"\u30CF\u30A4\u30D1\u30DC\u30EA\u30C3\u30AF\u30A2\u30FC\u30AF\u30B3\u30B5\u30A4\u30F3\uFF08\u53CC\u66F2\u7DDA\u9006\u4F59\u5F26\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"acot",call:"acot(1)",result:"0.7853981633974483",definition:{en:"Calculate the inverse cotangent.",cn:"\u8BA1\u7B97\u53CD\u4F59\u5207\u503C\u3002",ja:"\u30A2\u30FC\u30AF\u30B3\u30BF\u30F3\u30B8\u30A7\u30F3\u30C8\uFF08\u9006\u4F59\u5207\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"acoth",call:"acoth(2)",result:"0.5493061443340548",definition:{en:"Calculate the inverse hyperbolic cotangent.",cn:"\u8BA1\u7B97\u53CC\u66F2\u53CD\u4F59\u5207\u503C\u3002",ja:"\u30CF\u30A4\u30D1\u30DC\u30EA\u30C3\u30AF\u30A2\u30FC\u30AF\u30B3\u30BF\u30F3\u30B8\u30A7\u30F3\u30C8\uFF08\u53CC\u66F2\u7DDA\u9006\u4F59\u5207\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"acsc",call:"acsc(2)",result:"0.5235987755982989",definition:{en:"Calculate the inverse cosecant.",cn:"\u8BA1\u7B97\u53CD\u4F59\u5272\u503C\u3002",ja:"\u30A2\u30FC\u30AF\u30B3\u30BB\u30AB\u30F3\u30C8\uFF08\u9006\u4F59\u5272\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"acsch",call:"acsch(2)",result:"0.48121182505960347",definition:{en:"Calculate the inverse hyperbolic cosecant.",cn:"\u8BA1\u7B97\u53CC\u66F2\u53CD\u4F59\u5272\u503C\u3002",ja:"\u30CF\u30A4\u30D1\u30DC\u30EA\u30C3\u30AF\u30A2\u30FC\u30AF\u30B3\u30BB\u30AB\u30F3\u30C8\uFF08\u53CC\u66F2\u7DDA\u9006\u4F59\u5272\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"asec",call:"asec(2)",result:"1.0471975511965979",definition:{en:"Calculate the inverse secant.",cn:"\u8BA1\u7B97\u53CD\u6B63\u5272\u503C\u3002",ja:"\u30A2\u30FC\u30AF\u30BB\u30AB\u30F3\u30C8\uFF08\u9006\u6B63\u5272\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"asech",call:"asech(0.5)",result:"1.3169578969248166",definition:{en:"Calculate the inverse hyperbolic secant.",cn:"\u8BA1\u7B97\u53CC\u66F2\u53CD\u6B63\u5272\u503C\u3002",ja:"\u30CF\u30A4\u30D1\u30DC\u30EA\u30C3\u30AF\u30A2\u30FC\u30AF\u30BB\u30AB\u30F3\u30C8\uFF08\u53CC\u66F2\u7DDA\u9006\u6B63\u5272\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"asin",call:"asin(0.5)",result:"0.5235987755982989",definition:{en:"Calculate the inverse sine.",cn:"\u8BA1\u7B97\u53CD\u6B63\u5F26\u503C\u3002",ja:"\u30A2\u30FC\u30AF\u30B5\u30A4\u30F3\uFF08\u9006\u6B63\u5F26\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"asinh",call:"asinh(1.5)",result:"1.1947632172871094",definition:{en:"Calculate the hyperbolic arcsine.",cn:"\u8BA1\u7B97\u53CC\u66F2\u53CD\u6B63\u5F26\u503C\u3002",ja:"\u30CF\u30A4\u30D1\u30DC\u30EA\u30C3\u30AF\u30A2\u30FC\u30AF\u30B5\u30A4\u30F3\uFF08\u53CC\u66F2\u7DDA\u9006\u6B63\u5F26\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"atan",call:"atan(1)",result:"0.7853981633974483",definition:{en:"Calculate the inverse tangent.",cn:"\u8BA1\u7B97\u53CD\u6B63\u5207\u503C\u3002",ja:"\u30A2\u30FC\u30AF\u30BF\u30F3\u30B8\u30A7\u30F3\u30C8\uFF08\u9006\u6B63\u5207\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"atan2",call:"atan2(1, 2)",result:"0.4636476090008061",definition:{en:"Calculate the two-argument inverse tangent.",cn:"\u8BA1\u7B97\u5177\u6709\u4E24\u4E2A\u53C2\u6570\u7684\u53CD\u6B63\u5207\u503C\u3002",ja:"2\u3064\u306E\u5F15\u6570\u3092\u6301\u3064\u30A2\u30FC\u30AF\u30BF\u30F3\u30B8\u30A7\u30F3\u30C8\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"atanh",call:"atanh(0.5)",result:"0.5493061443340548",definition:{en:"Calculate the hyperbolic arctangent.",cn:"\u8BA1\u7B97\u53CC\u66F2\u53CD\u6B63\u5207\u503C\u3002",ja:"\u30CF\u30A4\u30D1\u30DC\u30EA\u30C3\u30AF\u30A2\u30FC\u30AF\u30BF\u30F3\u30B8\u30A7\u30F3\u30C8\uFF08\u53CC\u66F2\u7DDA\u9006\u6B63\u5207\uFF09\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"cos",call:"cos(0.5)",result:"0.8775825618903728",definition:{en:"Calculate the cosine of x.",cn:"\u8BA1\u7B97 x \u7684\u4F59\u5F26\u503C\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u5024\u306E\u30B3\u30B5\u30A4\u30F3\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"cosh",call:"cosh(0.5)",result:"1.1276259652063807",definition:{en:"Calculate the hyperbolic cosine of x.",cn:"\u8BA1\u7B97 x \u7684\u53CC\u66F2\u4F59\u5F26\u503C\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u5024\u306E\u30CF\u30A4\u30D1\u30DC\u30EA\u30C3\u30AF\u30B3\u30B5\u30A4\u30F3\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"cot",call:"cot(0.5)",result:"1.830487721712452",definition:{en:"Calculate the cotangent of x.",cn:"\u8BA1\u7B97 x \u7684\u4F59\u5207\u503C\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u5024\u306E\u30B3\u30BF\u30F3\u30B8\u30A7\u30F3\u30C8\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"coth",call:"coth(0.5)",result:"2.163953413738653",definition:{en:"Calculate the hyperbolic cotangent of x.",cn:"\u8BA1\u7B97 x \u7684\u53CC\u66F2\u4F59\u5207\u503C\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u5024\u306E\u30CF\u30A4\u30D1\u30DC\u30EA\u30C3\u30AF\u30B3\u30BF\u30F3\u30B8\u30A7\u30F3\u30C8\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"csc",call:"csc(0.5)",result:"2.085829642933488",definition:{en:"Calculate the cosecant of x.",cn:"\u8BA1\u7B97 x \u7684\u4F59\u5272\u503C\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u5024\u306E\u30B3\u30BB\u30AB\u30F3\u30C8\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"csch",call:"csch(0.5)",result:"1.9190347513349437",definition:{en:"Calculate the hyperbolic cosecant of x.",cn:"\u8BA1\u7B97 x \u7684\u53CC\u66F2\u4F59\u5272\u503C\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u5024\u306E\u30CF\u30A4\u30D1\u30DC\u30EA\u30C3\u30AF\u30B3\u30BB\u30AB\u30F3\u30C8\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"sec",call:"sec(0.5)",result:"1.139493927324549",definition:{en:"Calculate the secant of x.",cn:"\u8BA1\u7B97 x \u7684\u6B63\u5272\u503C\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u5024\u306E\u30BB\u30AB\u30F3\u30C8\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"sech",call:"sech(0.5)",result:"0.886818883970074",definition:{en:"Calculate the hyperbolic secant of x.",cn:"\u8BA1\u7B97 x \u7684\u53CC\u66F2\u6B63\u5272\u503C\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u5024\u306E\u30CF\u30A4\u30D1\u30DC\u30EA\u30C3\u30AF\u30BB\u30AB\u30F3\u30C8\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"sin",call:"sin(0.5)",result:"0.479425538604203",definition:{en:"Calculate the sine of x.",cn:"\u8BA1\u7B97 x \u7684\u6B63\u5F26\u503C\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u5024\u306E\u30B5\u30A4\u30F3\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"sinh",call:"sinh(0.5)",result:"0.5210953054937474",definition:{en:"Calculate the hyperbolic sine of x.",cn:"\u8BA1\u7B97 x \u7684\u53CC\u66F2\u6B63\u5F26\u503C\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u5024\u306E\u30CF\u30A4\u30D1\u30DC\u30EA\u30C3\u30AF\u30B5\u30A4\u30F3\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"tan",call:"tan(0.5)",result:"0.5463024898437905",definition:{en:"Calculate the tangent of x.",cn:"\u8BA1\u7B97 x \u7684\u6B63\u5207\u503C\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u5024\u306E\u30BF\u30F3\u30B8\u30A7\u30F3\u30C8\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}},{title:"tanh",call:"tanh(0.5)",result:"0.46211715726000974",definition:{en:"Calculate the hyperbolic tangent of x.",cn:"\u8BA1\u7B97 x \u7684\u53CC\u66F2\u6B63\u5207\u503C\u3002",ja:"\u4E0E\u3048\u3089\u308C\u305F\u5024\u306E\u30CF\u30A4\u30D1\u30DC\u30EA\u30C3\u30AF\u30BF\u30F3\u30B8\u30A7\u30F3\u30C8\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"}}]},{category:"Unit functions",functions:[{title:"to",call:"to(5, 'cm')",result:"Error: Unexpected type of argument in function to (expected: Array or DenseMatrix or Matrix, actual: identifier | string, index: 1)",definition:{en:"Convert a value to another unit.",cn:"\u5C06\u4E00\u4E2A\u6570\u503C\u8F6C\u6362\u4E3A\u6307\u5B9A\u5355\u4F4D\u3002",ja:"\u6570\u5024\u3092\u5225\u306E\u5358\u4F4D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"}}]},{category:"Utils functions",functions:[{title:"clone",call:"clone([1, 2, 3])",result:`[
  1,
  2,
  3
]`,definition:{en:"Make a deep copy of a value.",cn:"\u5BF9\u8F93\u5165\u503C\u8FDB\u884C\u6DF1\u62F7\u8D1D\u3002",ja:"\u5024\u306E\u30C7\u30A3\u30FC\u30D7\u30B3\u30D4\u30FC\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"}},{title:"hasNumericValue",call:"hasNumericValue('123')",result:"true",definition:{en:"Test whether the value contains a valid numeric value.",cn:"\u68C0\u6D4B\u8F93\u5165\u662F\u5426\u5305\u542B\u6570\u503C\u3002",ja:"\u6307\u5B9A\u3057\u305F\u5024\u304C\u6709\u52B9\u306A\u6570\u5024\u3092\u542B\u3080\u304B\u3069\u3046\u304B\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002"}},{title:"isInteger",call:"isInteger(3.0)",result:"true",definition:{en:"Test whether the value is an integer.",cn:"\u68C0\u6D4B\u8F93\u5165\u662F\u5426\u662F\u6574\u6570\u3002",ja:"\u6307\u5B9A\u3057\u305F\u5024\u304C\u6574\u6570\u304B\u3069\u3046\u304B\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002"}},{title:"isNaN",call:"isNaN(NaN)",result:"true",definition:{en:"Test whether the value is NaN (not a number).",cn:"\u68C0\u6D4B\u8F93\u5165\u662F\u5426\u4E3A NaN\u3002",ja:"\u6307\u5B9A\u3057\u305F\u5024\u304CNaN\u304B\u3069\u3046\u304B\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002"}},{title:"isNegative",call:"isNegative(-5)",result:"true",definition:{en:"Test whether the value is negative.",cn:"\u68C0\u6D4B\u8F93\u5165\u662F\u5426\u4E3A\u8D1F\u6570\u3002",ja:"\u6307\u5B9A\u3057\u305F\u5024\u304C\u8CA0\u6570\u3067\u3042\u308B\u304B\u3069\u3046\u304B\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002"}},{title:"isNumeric",call:"isNumeric('123')",result:"false",definition:{en:"Test whether the value is numeric.",cn:"\u68C0\u6D4B\u8F93\u5165\u662F\u5426\u4E3A\u6570\u503C\u3002",ja:"\u6307\u5B9A\u3057\u305F\u5024\u304C\u6570\u5024\u3067\u3042\u308B\u304B\u3069\u3046\u304B\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002"}},{title:"isPositive",call:"isPositive(2)",result:"true",definition:{en:"Test whether the value is positive.",cn:"\u68C0\u6D4B\u8F93\u5165\u662F\u5426\u4E3A\u6B63\u6570\u3002",ja:"\u6307\u5B9A\u3057\u305F\u5024\u304C\u6B63\u6570\u3067\u3042\u308B\u304B\u3069\u3046\u304B\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002"}},{title:"isPrime",call:"isPrime(7)",result:"true",definition:{en:"Test whether the value is a prime number.",cn:"\u68C0\u6D4B\u8F93\u5165\u662F\u5426\u4E3A\u8D28\u6570\u3002",ja:"\u6307\u5B9A\u3057\u305F\u5024\u304C\u7D20\u6570\u3067\u3042\u308B\u304B\u3069\u3046\u304B\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002"}},{title:"isZero",call:"isZero(0)",result:"true",definition:{en:"Test whether the value is zero.",cn:"\u68C0\u6D4B\u8F93\u5165\u662F\u5426\u4E3A 0\u3002",ja:"\u6307\u5B9A\u3057\u305F\u5024\u304C0\u304B\u3069\u3046\u304B\u3092\u30C6\u30B9\u30C8\u3057\u307E\u3059\u3002"}},{title:"numeric",call:"numeric('123')",result:"123",definition:{en:"Convert the value to a specific numeric type (number, BigNumber, etc.).",cn:"\u5C06\u8F93\u5165\u503C\u8F6C\u6362\u4E3A\u7279\u5B9A\u7684\u6570\u503C\u7C7B\u578B\uFF08\u5982 number\u3001BigNumber \u7B49\uFF09\u3002",ja:"\u6307\u5B9A\u3057\u305F\u5024\u3092\u7279\u5B9A\u306E\u6570\u5024\u578B\uFF08number\u3001BigNumber\u306A\u3069\uFF09\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"}},{title:"typeOf",call:"typeOf([1, 2, 3])",result:"Array",definition:{en:"Return the type name of the value.",cn:"\u8FD4\u56DE\u8F93\u5165\u503C\u7684\u7C7B\u578B\u540D\u79F0\u3002",ja:"\u6307\u5B9A\u3057\u305F\u5024\u306E\u578B\u540D\u3092\u8FD4\u3057\u307E\u3059\u3002"}}]}];function r(a,o){var s=Object.keys(o);return a.map(function(t){var C=t.functions.filter(function(p){return s.includes(p.title)&&typeof o[p.title]=="function"});return C.length>0?x()(x()({},t),{},{functions:C}):null}).filter(function(t){return t!==null})}var i=function(){(0,e.useEffect)(function(){Object.keys(u).forEach(function(t){window[t]=u[t]})},[]);var o=(0,e.useMemo)(function(){return r(c,u)},[]),s=(0,e.useMemo)(function(){return(0,m.Z)({data:o})},[o]);return(0,h.jsx)(s,{})};f.Z=i},1783:function(v,f,n){"use strict";var d=n(96707),x=n(67294),e=n(85893);function u(c){var r=c.name,i=c.link;return(0,e.jsxs)(d.rU,{to:i!=null?i:"/handbook/".concat(r),children:["plugin-",r]})}function m(c){var r=c.plugins,i=c.name,a=c.link;return r?r.split(",").map(function(o,s){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(u,{name:o}),s<r.split(",").length-1?", ":""]})}):(0,e.jsx)(u,{name:i,link:a})}var h=function(r){var i=r.name,a=r.link,o=r.plugins,s=r.commercial,t=r.licenseBundled,C=(0,d.WF)(),p=C.themeConfig,y=p.lang==="zh-CN",D=p.lang==="ja-JP",j=t==="enterprise"?{"zh-CN":"\u4F01\u4E1A\u7248","ja-JP":"\u4F01\u4E1A\u7248","en-US":"commercial edition"}:{"zh-CN":"\u5546\u4E1A\u7248","ja-JP":"\u5546\u4E1A\u7248","en-US":"commercial edition"};return(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"dumi-default-container markdown","data-type":"info",children:[(0,e.jsxs)("svg",{viewBox:"64 64 896 896",children:[(0,e.jsx)("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}),(0,e.jsx)("path",{d:"M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"})]}),(0,e.jsx)("h4",{children:y?"\u63D0\u793A":D?"\u6CE8\u610F":"INFO"}),t?(0,e.jsx)("section",{children:y?(0,e.jsxs)("p",{children:["\u8BE5\u529F\u80FD\u7531\u5546\u4E1A\u63D2\u4EF6 ",(0,e.jsx)(m,{name:i,link:a,plugins:o})," \u63D0\u4F9B\uFF0C\u5305\u542B\u5728 ",(0,e.jsx)("a",{target:"_blank",href:"https://www.nocobase.com/cn/commercial",children:j[p.lang]})," \u4E2D\uFF0C\u65E0\u9700\u5355\u72EC\u8D2D\u4E70\u3002"]}):D?(0,e.jsxs)("p",{children:["\u3053\u306E\u6A5F\u80FD\u306F\u5546\u7528\u30D7\u30E9\u30B0\u30A4\u30F3 ",(0,e.jsx)(m,{name:i,link:a,plugins:o})," \u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u307E\u3059\uFF0C\u5305\u542B\u5728 ",(0,e.jsx)("a",{target:"_blank",href:"https://www.nocobase.com/jp/commercial",children:j[p.lang]})," \u4E2D\uFF0C\u65E0\u9700\u5355\u72EC\u8D2D\u4E70\u3002"]}):(0,e.jsxs)("p",{children:["This feature is provided by the commercial plugin ",(0,e.jsx)(m,{name:i,link:a,plugins:o}),", included in the ",(0,e.jsx)("a",{target:"_blank",href:"https://www.nocobase.com/en/commercial",children:j[p.lang]}),", with no additional purchase required."]})}):(0,e.jsx)("section",{children:y?(0,e.jsxs)("p",{children:["\u8BE5\u529F\u80FD\u7531",s?"\u5546\u4E1A":"","\u63D2\u4EF6 ",(0,e.jsx)(m,{name:i,link:a,plugins:o})," \u63D0\u4F9B",s&&(0,e.jsxs)(e.Fragment,{children:["\uFF0C\u8BF7\u67E5\u770B ",(0,e.jsx)("a",{target:"_blank",href:"https://www.nocobase.com/cn/plugins",children:"\u5546\u4E1A\u6388\u6743"})," \u4E86\u89E3\u8BE6\u60C5"]}),"."]}):D?(0,e.jsxs)("p",{children:["\u3053\u306E\u6A5F\u80FD\u306F",s?"\u5546\u7528":"","\u30D7\u30E9\u30B0\u30A4\u30F3 ",(0,e.jsx)(m,{name:i,link:a,plugins:o})," \u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u307E\u3059\u3002",s&&(0,e.jsxs)(e.Fragment,{children:[" \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,e.jsx)("a",{target:"_blank",href:"https://www.nocobase.com/jp/plugins",children:"\u5546\u7528\u30E9\u30A4\u30BB\u30F3\u30B9"})," \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002"]})]}):(0,e.jsxs)("p",{children:["This feature is provided by the ",s?"commercial ":"","plugin ",(0,e.jsx)(m,{name:i,link:a,plugins:o}),". ",s&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("br",{})," Please refer to the ",(0,e.jsx)("a",{target:"_blank",href:"https://www.nocobase.com/en/plugins",children:"commercial license"})," for details."]})]})})]})})};f.Z=h},39297:function(v,f,n){"use strict";var d=n(96707),x=n(67294),e=n(85893),u=function(c){var r=useNavigate(),i=[{id:1,createdAt:"2023-10-29T10:32:21.717Z",updatedAt:"2023-10-29T10:32:21.717Z",name:"error-handler",packageName:"@nocobase/plugin-error-handler",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-error-handler",displayName:"Error handler","displayName.zh-CN":"\u9519\u8BEF\u5904\u7406\u5668",description:"Handling application errors and exceptions","description.zh-CN":"\u5904\u7406\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u9519\u8BEF\u548C\u5F02\u5E38",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@formily/json-schema":"2.x",supertest:"^6.1.6"},peerDependencies:{"@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"},repository:{type:"git",url:"git+https://github.com/nocobase/nocobase.git",directory:"packages/plugin-error-handler"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@formily/json-schema",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"}],readmeUrl:"/static/plugins/@nocobase/plugin-error-handler/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.428Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-error-handler",updatable:!1,displayName:"Error handler",description:"Handling application errors and exceptions"},{id:2,createdAt:"2023-10-29T10:32:21.725Z",updatedAt:"2023-10-29T10:32:21.725Z",name:"collection-manager",packageName:"@nocobase/plugin-collection-manager",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-collection-manager",displayName:"Collection manager","displayName.zh-CN":"\u6570\u636E\u8868\u7BA1\u7406",description:"Provide convenient collection management capabilities","description.zh-CN":"\u63D0\u4F9B\u4FBF\u6377\u7684\u6570\u636E\u8868\u7BA1\u7406\u80FD\u529B",version:"0.14.0-alpha.3",main:"./dist/server/index.js",license:"AGPL-3.0",devDependencies:{"@hapi/topo":"^6.0.0","async-mutex":"^0.3.2",toposort:"^2.0.2"},peerDependencies:{"@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/plugin-error-handler":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/plugin-error-handler",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"async-mutex",result:!0,versionRange:"0.3.x",packageVersion:"0.3.2"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-collection-manager/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.414Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-collection-manager",updatable:!1,displayName:"Collection manager",description:"Provide convenient collection management capabilities"},{id:3,createdAt:"2023-10-29T10:32:21.730Z",updatedAt:"2023-10-29T10:32:21.730Z",name:"ui-schema-storage",packageName:"@nocobase/plugin-ui-schema-storage",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-ui-schema-storage",displayName:"UI schema storage","displayName.zh-CN":"UI schema \u5B58\u50A8\u670D\u52A1",description:"Provides centralized UI schema storage service","description.zh-CN":"\u63D0\u4F9B\u4E2D\u5FC3\u5316\u7684 UI schema \u5B58\u50A8\u670D\u52A1",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@formily/json-schema":"2.x"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/cache":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/plugin-error-handler":"0.x","@nocobase/plugin-users":"0.x","@nocobase/resourcer":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/cache",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/resourcer",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@formily/json-schema",result:!0,versionRange:"2.x",packageVersion:"2.2.27"}],readmeUrl:"/static/plugins/@nocobase/plugin-ui-schema-storage/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.466Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-ui-schema-storage",updatable:!1,displayName:"UI schema storage",description:"Provides centralized UI schema storage service"},{id:4,createdAt:"2023-10-29T10:32:21.736Z",updatedAt:"2023-10-29T10:32:21.736Z",name:"file-manager",packageName:"@nocobase/plugin-file-manager",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-file-manager",version:"0.14.0-alpha.3",displayName:"File manager","displayName.zh-CN":"\u6587\u4EF6\u7BA1\u7406\u5668",description:"Provides file storage services, and extended the file collection template and the attachment field","description.zh-CN":"\u63D0\u4F9B\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\uFF0C\u5E76\u62D3\u5C55\u4E86\u6587\u4EF6\u8868\u6A21\u677F\u548C\u9644\u4EF6\u5B57\u6BB5",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@aws-sdk/client-s3":"^3.245.0","@formily/antd-v5":"1.x","@formily/core":"2.x","@formily/react":"2.x","@formily/shared":"2.x","@koa/multer":"^3.0.0","@types/koa-multer":"^1.0.1","@types/multer":"^1.4.5",antd:"5.x","cos-nodejs-sdk-v5":"^2.11.14","koa-static":"^5.0.0","mime-match":"^1.0.2",mkdirp:"~0.5.4",multer:"^1.4.2","multer-aliyun-oss":"2.1.1","multer-cos":"^1.0.3","multer-s3":"^3.0.1",react:"^18.2.0","react-i18next":"^11.15.1",supertest:"^6.1.6"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"@formily/antd-v5",result:!0,versionRange:"1.x",packageVersion:"1.1.0"},{name:"@formily/core",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"multer",result:!0,versionRange:"1.x",packageVersion:"1.4.4"}],readmeUrl:"/static/plugins/@nocobase/plugin-file-manager/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.431Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-file-manager",updatable:!1,displayName:"File manager",description:"Provides file storage services, and extended the file collection template and the attachment field"},{id:5,createdAt:"2023-10-29T10:32:21.741Z",updatedAt:"2023-10-29T10:32:21.741Z",name:"system-settings",packageName:"@nocobase/plugin-system-settings",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-system-settings",displayName:"System settings","displayName.zh-CN":"\u7CFB\u7EDF\u8BBE\u7F6E",description:"Used to adjust the system title, logo, etc","description.zh-CN":"\u7528\u4E8E\u8C03\u6574\u7CFB\u7EDF\u7684\u6807\u9898\u3001LOGO \u7B49",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",peerDependencies:{"@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-system-settings/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.463Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-system-settings",updatable:!1,displayName:"System settings",description:"Used to adjust the system title, logo, etc"},{id:6,createdAt:"2023-10-29T10:32:21.747Z",updatedAt:"2023-10-29T10:32:21.747Z",name:"sequence-field",packageName:"@nocobase/plugin-sequence-field",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-sequence-field",displayName:"Sequence field","displayName.zh-CN":"\u81EA\u52A8\u7F16\u7801\u5B57\u6BB5",description:"","description.zh-CN":"",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@formily/antd-v5":"1.x","@formily/core":"2.x","@formily/react":"2.x",antd:"5.x",classnames:"^2.3.1","cron-parser":"4.4.0",react:"18.x","react-i18next":"^11.15.1","react-js-cron":"^3.1.0"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/plugin-collection-manager":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@formily/antd-v5",result:!0,versionRange:"1.x",packageVersion:"1.1.0"},{name:"@formily/core",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"dayjs",result:!0,versionRange:"1.x",packageVersion:"1.11.9"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"}],readmeUrl:"/static/plugins/@nocobase/plugin-sequence-field/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.460Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-sequence-field",updatable:!1,displayName:"Sequence field",description:""},{id:7,createdAt:"2023-10-29T10:32:21.753Z",updatedAt:"2023-10-29T10:32:21.753Z",name:"verification",packageName:"@nocobase/plugin-verification",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-verification",displayName:"Verification","displayName.zh-CN":"\u9A8C\u8BC1\u7801",description:"verification setting.","description.zh-CN":"\u9A8C\u8BC1\u7801\u914D\u7F6E\u3002",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@alicloud/dysmsapi20170525":"2.0.17","@alicloud/openapi-client":"0.4.1","@alicloud/tea-util":"1.4.4","@formily/antd-v5":"1.x","@formily/core":"2.x","@formily/react":"2.x","@formily/shared":"2.x",antd:"5.x",react:"18.x","react-i18next":"^11.15.1","tencentcloud-sdk-nodejs":"^4.0.525"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/resourcer":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/resourcer",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@formily/antd-v5",result:!0,versionRange:"1.x",packageVersion:"1.1.0"},{name:"@formily/core",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"dayjs",result:!0,versionRange:"1.x",packageVersion:"1.11.9"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"}],readmeUrl:"/static/plugins/@nocobase/plugin-verification/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.468Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-verification",updatable:!1,displayName:"Verification",description:"verification setting."},{id:8,createdAt:"2023-10-29T10:32:21.759Z",updatedAt:"2023-10-29T10:32:21.759Z",name:"users",packageName:"@nocobase/plugin-users",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-users",displayName:"Users","displayName.zh-CN":"\u7528\u6237",description:"Provides a basic user model and a password-based user authentication type, and extended the createdBy and updatedBy field types","description.zh-CN":"\u63D0\u4F9B\u4E86\u57FA\u7840\u7684\u7528\u6237\u6A21\u578B\u548C\u57FA\u4E8E\u5BC6\u7801\u7684\u7528\u6237\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u5E76\u62D3\u5C55\u4E86\u521B\u5EFA\u4EBA\u548C\u6700\u540E\u66F4\u65B0\u4EBA\u5B57\u6BB5\u7C7B\u578B",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@types/jsonwebtoken":"^8.5.8",jsonwebtoken:"^8.5.1"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/plugin-acl":"0.x","@nocobase/plugin-auth":"0.x","@nocobase/resourcer":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"jsonwebtoken",result:!0,versionRange:"8.x",packageVersion:"8.5.1"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/resourcer",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-users/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.467Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-users",updatable:!1,displayName:"Users",description:"Provides a basic user model and a password-based user authentication type, and extended the createdBy and updatedBy field types"},{id:9,createdAt:"2023-10-29T10:32:21.765Z",updatedAt:"2023-10-29T10:32:21.765Z",name:"acl",packageName:"@nocobase/plugin-acl",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-acl",displayName:"ACL","displayName.zh-CN":"\u6743\u9650\u63A7\u5236",description:"A simple access control based on roles, resources and actions","description.zh-CN":"\u57FA\u4E8E\u89D2\u8272\u3001\u8D44\u6E90\u548C\u64CD\u4F5C\u7684\u6743\u9650\u63A7\u5236\u3002",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@types/jsonwebtoken":"^8.5.8","async-mutex":"^0.3.2",jsonwebtoken:"^8.5.1",react:"^18.2.0","react-dom":"^18.2.0"},peerDependencies:{"@nocobase/acl":"0.x","@nocobase/actions":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"},repository:{type:"git",url:"git+https://github.com/nocobase/nocobase.git",directory:"packages/plugins/acl"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/acl",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"async-mutex",result:!0,versionRange:"0.3.x",packageVersion:"0.3.2"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"}],readmeUrl:"/static/plugins/@nocobase/plugin-acl/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.391Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-acl",updatable:!1,displayName:"ACL",description:"A simple access control based on roles, resources and actions"},{id:10,createdAt:"2023-10-29T10:32:21.773Z",updatedAt:"2023-10-29T10:32:21.773Z",name:"china-region",packageName:"@nocobase/plugin-china-region",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-china-region",version:"0.14.0-alpha.3",displayName:"China region","displayName.zh-CN":"\u4E2D\u56FD\u884C\u653F\u533A",description:"Provides China region data and field interface","description.zh-CN":"\u63D0\u4F9B\u4E2D\u56FD\u884C\u653F\u533A\u6570\u636E\u548C\u5B57\u6BB5\uFF08Interface\uFF09\u7C7B\u578B",main:"./dist/server/index.js",license:"AGPL-3.0",devDependencies:{"@formily/core":"2.x","@formily/react":"2.x","@types/cross-spawn":"^6.0.2","china-division":"^2.4.0","cross-spawn":"^7.0.3"},peerDependencies:{"@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@formily/core",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"china-division",result:!0,versionRange:"2.x",packageVersion:"2.6.1"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-china-region/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.406Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-china-region",updatable:!1,displayName:"China region",description:"Provides China region data and field interface"},{id:11,createdAt:"2023-10-29T10:32:21.779Z",updatedAt:"2023-10-29T10:32:21.779Z",name:"workflow",packageName:"@nocobase/plugin-workflow",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-workflow",displayName:"Workflow","displayName.zh-CN":"\u5DE5\u4F5C\u6D41",description:"A powerful workflow plugin designed to support business process management and automation.","description.zh-CN":"\u5DE5\u4F5C\u6D41\u63D2\u4EF6\uFF0C\u4E3A\u4E1A\u52A1\u6D41\u7A0B\u7BA1\u7406\u548C\u81EA\u52A8\u5316\u63D0\u4F9B\u652F\u6301\u3002",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@ant-design/icons":"5.x","@emotion/css":"^11.7.1","@formily/antd-v5":"1.x","@formily/core":"2.x","@formily/react":"2.x","@types/ejs":"^3.1.1",antd:"5.x",axios:"^0.26.1",classnames:"^2.3.1","cron-parser":"4.4.0",dayjs:"^1.11.8",lodash:"4.17.21","lru-cache":"8.0.5",react:"18.x","react-i18next":"^11.15.1","react-js-cron":"^3.1.0","react-router-dom":"^6.11.2",sequelize:"^6.26.0",winston:"^3.8.2"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/evaluators":"0.x","@nocobase/logger":"0.x","@nocobase/plugin-collection-manager":"0.x","@nocobase/plugin-error-handler":"0.x","@nocobase/plugin-users":"0.x","@nocobase/resourcer":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"winston",result:!0,versionRange:"3.x",packageVersion:"3.9.0"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/logger",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/evaluators",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"react-router-dom",result:!0,versionRange:"6.x",packageVersion:"6.14.1"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"axios",result:!0,versionRange:"0.26.x",packageVersion:"0.26.1"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"},{name:"sequelize",result:!0,versionRange:"6.x",packageVersion:"6.32.1"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/core",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/antd-v5",result:!0,versionRange:"1.x",packageVersion:"1.1.0"},{name:"@nocobase/resourcer",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@emotion/css",result:!0,versionRange:"11.x",packageVersion:"11.11.2"},{name:"dayjs",result:!0,versionRange:"1.x",packageVersion:"1.11.9"}],readmeUrl:"/static/plugins/@nocobase/plugin-workflow/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.471Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-workflow",updatable:!1,displayName:"Workflow",description:"A powerful workflow plugin designed to support business process management and automation."},{id:12,createdAt:"2023-10-29T10:32:21.785Z",updatedAt:"2023-10-29T10:32:21.785Z",name:"client",packageName:"@nocobase/plugin-client",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-client",displayName:"WEB client","displayName.zh-CN":"WEB \u5BA2\u6237\u7AEF",description:"Provides a client interface for the NocoBase server","description.zh-CN":"\u4E3A NocoBase \u670D\u52A1\u7AEF\u63D0\u4F9B\u5BA2\u6237\u7AEF\u754C\u9762",version:"0.14.0-alpha.3",main:"./dist/server/index.js",license:"AGPL-3.0",devDependencies:{antd:"5.x",cronstrue:"^2.11.0","koa-send":"^5.0.1","koa-static":"^5.0.0"},peerDependencies:{"@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-client/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.414Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-client",updatable:!1,displayName:"WEB client",description:"Provides a client interface for the NocoBase server"},{id:13,createdAt:"2023-10-29T10:32:21.791Z",updatedAt:"2023-10-29T10:32:21.791Z",name:"export",packageName:"@nocobase/plugin-export",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-export",displayName:"Data export","displayName.zh-CN":"\u6570\u636E\u5BFC\u51FA",description:"Export data in excel format","description.zh-CN":"\u5BFC\u51FA excel \u683C\u5F0F\u7684\u6570\u636E",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@formily/antd-v5":"1.x","@formily/react":"2.x","@formily/shared":"2.x","@types/node-xlsx":"^0.15.1","file-saver":"^2.0.5","node-xlsx":"^0.16.1",react:"^18.2.0","react-i18next":"^11.15.1"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@formily/antd-v5",result:!0,versionRange:"1.x",packageVersion:"1.1.0"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-export/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.430Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-export",updatable:!1,displayName:"Data export",description:"Export data in excel format"},{id:14,createdAt:"2023-10-29T10:32:21.796Z",updatedAt:"2023-10-29T10:32:21.796Z",name:"import",packageName:"@nocobase/plugin-import",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-import",displayName:"Data import","displayName.zh-CN":"\u6570\u636E\u5BFC\u5165",description:"Import data according to the excel template provided","description.zh-CN":"\u6839\u636E\u63D0\u4F9B\u7684 excel \u6A21\u677F\u5BFC\u5165\u6570\u636E",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@ant-design/icons":"5.x","@formily/antd-v5":"1.x","@formily/core":"2.x","@formily/react":"2.x","@formily/shared":"2.x","@koa/multer":"^3.0.2","@types/node-xlsx":"^0.15.1",antd:"5.x","file-saver":"^2.0.5",mathjs:"^10.6.0","node-xlsx":"^0.16.1",react:"^18.2.0","react-dom":"^18.2.0","react-i18next":"^11.15.1",xlsx:"^0.17.0"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@formily/antd-v5",result:!0,versionRange:"1.x",packageVersion:"1.1.0"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"react-dom",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"},{name:"@formily/core",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"mathjs",result:!0,versionRange:"10.x",packageVersion:"10.6.4"}],readmeUrl:"/static/plugins/@nocobase/plugin-import/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.438Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-import",updatable:!1,displayName:"Data import",description:"Import data according to the excel template provided"},{id:15,createdAt:"2023-10-29T10:32:21.803Z",updatedAt:"2023-10-29T10:32:21.803Z",name:"duplicator",packageName:"@nocobase/plugin-duplicator",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-duplicator",displayName:"App backup & restore","displayName.zh-CN":"\u5E94\u7528\u7684\u5907\u4EFD\u4E0E\u8FD8\u539F",description:"Can be used for application replication, migration, upgrade, etc","description.zh-CN":"\u53EF\u7528\u4E8E\u5E94\u7528\u7684\u590D\u5236\u3001\u8FC1\u79FB\u3001\u5347\u7EA7\u7B49\u573A\u666F",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",repository:{type:"git",url:"git+https://github.com/nocobase/nocobase.git",directory:"packages/plugins/duplicator"},devDependencies:{"@koa/multer":"^3.0.2","@types/archiver":"^5.3.1",antd:"5.x",archiver:"^5.3.1",dayjs:"^1.11.8",decompress:"^4.2.1",inquirer:"^8.0.0","koa-send":"^5.0.1",mkdirp:"^1.0.4",react:"^18.2.0",tar:"^6.1.13"},peerDependencies:{"@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"}},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"dayjs",result:!0,versionRange:"1.x",packageVersion:"1.11.9"},{name:"koa-send",result:!0,versionRange:"5.x",packageVersion:"5.0.1"}],readmeUrl:"/static/plugins/@nocobase/plugin-duplicator/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.428Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-duplicator",updatable:!1,displayName:"App backup & restore",description:"Can be used for application replication, migration, upgrade, etc"},{id:16,createdAt:"2023-10-29T10:32:21.809Z",updatedAt:"2023-10-29T10:32:21.809Z",name:"iframe-block",packageName:"@nocobase/plugin-iframe-block",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-iframe-block",displayName:"iframe","displayName.zh-CN":"iframe",description:"Create an iframe block on the page to embed and display external web pages or content","description.zh-CN":"\u5728\u9875\u9762\u4E0A\u521B\u5EFA\u548C\u7BA1\u7406iframe\uFF0C\u7528\u4E8E\u5D4C\u5165\u548C\u5C55\u793A\u5916\u90E8\u7F51\u9875\u6216\u5185\u5BB9",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@ant-design/icons":"5.x","@formily/react":"2.x","@formily/shared":"2.x",antd:"5.x",react:"^18.2.0","react-i18next":"^11.15.1","react-iframe":"~1.8.5"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x"}},isCompatible:!0,depsCompatible:[{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-iframe-block/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.438Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-iframe-block",updatable:!1,displayName:"iframe",description:"Create an iframe block on the page to embed and display external web pages or content"},{id:17,createdAt:"2023-10-29T10:32:21.814Z",updatedAt:"2023-10-29T10:32:21.814Z",name:"formula-field",packageName:"@nocobase/plugin-formula-field",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-formula-field",displayName:"Formula field","displayName.zh-CN":"\u516C\u5F0F\u5B57\u6BB5",description:"You can configure and store calculation results between multi-field values of the same record, supporting both mathjs and excel functions engines.","description.zh-CN":"\u53EF\u4EE5\u914D\u7F6E\u5E76\u5B58\u50A8\u540C\u4E00\u6761\u8BB0\u5F55\u7684\u591A\u5B57\u6BB5\u503C\u4E4B\u95F4\u7684\u8BA1\u7B97\u7ED3\u679C\uFF0C\u652F\u6301 mathjs \u548C excel functions \u4E24\u79CD\u5F15\u64CE",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@formily/antd-v5":"1.x","@formily/core":"2.x","@formily/react":"2.x","@formily/reactive":"2.x",react:"^18.2.0","react-i18next":"^11.15.1"},peerDependencies:{"@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/evaluators":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"}},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/evaluators",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@formily/core",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/reactive",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"}],readmeUrl:"/static/plugins/@nocobase/plugin-formula-field/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.434Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-formula-field",updatable:!1,displayName:"Formula field",description:"You can configure and store calculation results between multi-field values of the same record, supporting both mathjs and excel functions engines."},{id:18,createdAt:"2023-10-29T10:32:21.820Z",updatedAt:"2023-10-29T10:32:21.820Z",name:"charts",packageName:"@nocobase/plugin-charts",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-charts",displayName:"Charts(Deprecated)","displayName.zh-CN":"\u56FE\u8868\uFF08\u5E9F\u5F03\uFF09",description:"Out-of-the-box, feature-rich chart plugins.","description.zh-CN":"\u5F00\u7BB1\u5373\u7528\u3001\u4E30\u5BCC\u7684\u62A5\u8868\u3002",version:"0.14.0-alpha.3",main:"./dist/server/index.js",devDependencies:{"@ant-design/icons":"5.x","@formily/antd-v5":"1.x","@formily/core":"2.x","@formily/react":"2.x","@formily/shared":"2.x",antd:"5.x",json5:"^2.2.3",react:"^18.2.0","react-i18next":"^11.15.1","react-router-dom":"^6.11.2"},peerDependencies:{"@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"}},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@formily/antd-v5",result:!0,versionRange:"1.x",packageVersion:"1.1.0"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@formily/core",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"react-router-dom",result:!0,versionRange:"6.x",packageVersion:"6.14.1"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"}],readmeUrl:null,changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.404Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-charts",updatable:!1,displayName:"Charts(Deprecated)",description:"Out-of-the-box, feature-rich chart plugins."},{id:19,createdAt:"2023-10-29T10:32:21.825Z",updatedAt:"2023-10-29T10:32:21.825Z",name:"data-visualization",packageName:"@nocobase/plugin-data-visualization",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-data-visualization",version:"0.14.0-alpha.3",displayName:"Data Visualization","displayName.zh-CN":"\u6570\u636E\u53EF\u89C6\u5316",description:"Provides business intelligence and data visualization features","description.zh-CN":"\u63D0\u4F9B BI \u9762\u677F\u548C\u6570\u636E\u53EF\u89C6\u5316\u529F\u80FD",main:"dist/server/index.js",devDependencies:{"@ant-design/icons":"5.x","@ant-design/plots":"^1.2.5","@emotion/css":"^11.7.1","@formily/antd-v5":"1.x","@formily/core":"2.x","@formily/react":"2.x","@formily/shared":"2.x","@testing-library/react":"^14.0.0",antd:"5.x",classnames:"^2.3.1","koa-compose":"^4.1.0",lodash:"^4.17.21",react:"^18.2.0","react-error-boundary":"^4.0.10","react-i18next":"^11.15.1",vitest:"0.x"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/cache":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"}},isCompatible:!0,depsCompatible:[{name:"@nocobase/cache",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"@formily/antd-v5",result:!0,versionRange:"1.x",packageVersion:"1.1.0"},{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"dayjs",result:!0,versionRange:"1.x",packageVersion:"1.11.9"},{name:"@formily/core",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"ahooks",result:!0,versionRange:"3.x",packageVersion:"3.7.8"},{name:"@emotion/css",result:!0,versionRange:"11.x",packageVersion:"11.11.2"}],readmeUrl:"/static/plugins/@nocobase/plugin-data-visualization/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.418Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-data-visualization",updatable:!1,displayName:"Data Visualization",description:"Provides business intelligence and data visualization features"},{id:20,createdAt:"2023-10-29T10:32:21.830Z",updatedAt:"2023-10-29T10:32:21.830Z",name:"auth",packageName:"@nocobase/plugin-auth",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-auth",version:"0.14.0-alpha.3",main:"./dist/server/index.js",devDependencies:{"@ant-design/icons":"5.x","@formily/react":"2.x","@formily/shared":"2.x","@types/cron":"^2.0.1",antd:"5.x",cron:"^2.3.1",react:"^18.2.0","react-i18next":"^11.15.1"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/auth":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x"},displayName:"Authentication","displayName.zh-CN":"\u7528\u6237\u8BA4\u8BC1",description:"Basic authentication and authenticator management","description.zh-CN":"\u63D0\u4F9B\u57FA\u7840\u8BA4\u8BC1\u529F\u80FD\u548C\u6269\u5C55\u8BA4\u8BC1\u5668\u7BA1\u7406\u529F\u80FD"},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@nocobase/auth",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-auth/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.397Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-auth",updatable:!1,displayName:"Authentication",description:"Basic authentication and authenticator management"},{id:21,createdAt:"2023-10-29T10:32:21.835Z",updatedAt:"2023-10-29T10:32:21.835Z",name:"sms-auth",packageName:"@nocobase/plugin-sms-auth",version:"0.14.0-alpha.3",enabled:!0,installed:null,builtIn:!0,packageJson:{name:"@nocobase/plugin-sms-auth",displayName:"SMS auth","displayName.zh-CN":"\u77ED\u4FE1\u8BA4\u8BC1",description:"SMS authentication for NocoBase","description.zh-CN":"SMS authentication for NocoBase",version:"0.14.0-alpha.3",main:"./dist/server/index.js",devDependencies:{"@formily/react":"2.x",antd:"5.x",react:"18.x","react-i18next":"^11.15.1"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/auth":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/plugin-auth":"0.x","@nocobase/plugin-verification":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x"}},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@nocobase/plugin-verification",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/auth",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/plugin-auth",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-sms-auth/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.461Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-sms-auth",updatable:!1,displayName:"SMS auth",description:"SMS authentication for NocoBase"},{id:22,createdAt:"2023-10-29T10:32:21.840Z",updatedAt:"2023-10-29T10:32:21.840Z",name:"audit-logs",packageName:"@nocobase/plugin-audit-logs",version:"0.14.0-alpha.3",enabled:null,installed:null,builtIn:null,packageJson:{name:"@nocobase/plugin-audit-logs",version:"0.14.0-alpha.3",displayName:"Audit logs","displayName.zh-CN":"\u5BA1\u8BA1\u65E5\u5FD7",description:"Data addition, modification, deletion logs","description.zh-CN":"\u6570\u636E\u7684\u589E\u5220\u6539\u65E5\u5FD7",main:"./dist/server/index.js",license:"AGPL-3.0",devDependencies:{"@ant-design/icons":"5.x","@formily/antd-v5":"1.x","@formily/react":"2.x","@formily/shared":"2.x",react:"^18.2.0","react-i18next":"^11.15.1"},peerDependencies:{"@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@formily/antd-v5",result:!0,versionRange:"1.x",packageVersion:"1.1.0"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-audit-logs/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.396Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-audit-logs",updatable:!1,displayName:"Audit logs",description:"Data addition, modification, deletion logs"},{id:23,createdAt:"2023-10-29T10:32:21.845Z",updatedAt:"2023-10-29T10:32:21.845Z",name:"sample-hello",packageName:"@nocobase/plugin-sample-hello",version:"0.14.0-alpha.3",enabled:null,installed:null,builtIn:null,packageJson:{name:"@nocobase/plugin-sample-hello",version:"0.14.0-alpha.3",main:"./dist/server/index.js",displayName:"Hello","displayName.zh-CN":"Hello",description:"A simple NocoBase plugin example","description.zh-CN":"\u4E00\u4E2A\u7B80\u5355\u7684 NocoBase \u63D2\u4EF6",devDependencies:{"@ant-design/icons":"5.x","@formily/react":"2.x",antd:"5.x",react:"^18.2.0","react-i18next":"^11.15.1"},peerDependencies:{"@nocobase/client":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x"},gitHead:"ee5825377d8bec05f968a8365a0cdcd49878ada6"},isCompatible:!0,depsCompatible:[{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-sample-hello/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.457Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-sample-hello",updatable:!1,displayName:"Hello",description:"A simple NocoBase plugin example"},{id:24,createdAt:"2023-10-29T10:32:21.850Z",updatedAt:"2023-10-29T10:32:21.850Z",name:"multi-app-manager",packageName:"@nocobase/plugin-multi-app-manager",version:"0.14.0-alpha.3",enabled:null,installed:null,builtIn:null,packageJson:{name:"@nocobase/plugin-multi-app-manager",displayName:"Multi-app manager","displayName.zh-CN":"\u591A\u5E94\u7528\u7BA1\u7406\u5668",description:"Dynamically create multiple apps without separate deployments","description.zh-CN":"\u65E0\u9700\u5355\u72EC\u90E8\u7F72\u5373\u53EF\u52A8\u6001\u521B\u5EFA\u591A\u4E2A\u5E94\u7528",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@formily/react":"2.x","@formily/shared":"2.x",antd:"5.x","async-mutex":"^0.3.2",mysql2:"^2.3.3",pg:"^8.7.3",react:"18.x","react-i18next":"^11.15.1","react-router-dom":"^6.11.2"},peerDependencies:{"@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"react-router-dom",result:!0,versionRange:"6.x",packageVersion:"6.14.1"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"async-mutex",result:!0,versionRange:"0.3.x",packageVersion:"0.3.2"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"},{name:"mysql2",result:!0,versionRange:"2.x",packageVersion:"2.3.3"},{name:"pg",result:!0,versionRange:"8.x",packageVersion:"8.11.1"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"}],readmeUrl:"/static/plugins/@nocobase/plugin-multi-app-manager/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.445Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-multi-app-manager",updatable:!1,displayName:"Multi-app manager",description:"Dynamically create multiple apps without separate deployments"},{id:25,createdAt:"2023-10-29T10:32:21.855Z",updatedAt:"2023-10-29T10:32:21.855Z",name:"multi-app-share-collection",packageName:"@nocobase/plugin-multi-app-share-collection",version:"0.14.0-alpha.3",enabled:null,installed:null,builtIn:null,packageJson:{name:"@nocobase/plugin-multi-app-share-collection",displayName:"Multi-app share collection","displayName.zh-CN":"\u591A\u5E94\u7528\u6570\u636E\u8868\u5171\u4EAB",description:"","description.zh-CN":"",version:"0.14.0-alpha.3",main:"./dist/server/index.js",devDependencies:{"@formily/react":"2.x",antd:"5.x",react:"18.x","react-i18next":"^11.15.1"},peerDependencies:{"@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/plugin-collection-manager":"0.x","@nocobase/plugin-error-handler":"0.x","@nocobase/plugin-multi-app-manager":"0.x","@nocobase/plugin-users":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"}},isCompatible:!0,depsCompatible:[{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/plugin-multi-app-manager",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:null,changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.446Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-multi-app-share-collection",updatable:!1,displayName:"Multi-app share collection",description:""},{id:26,createdAt:"2023-10-29T10:32:21.860Z",updatedAt:"2023-10-29T10:32:21.860Z",name:"oidc",packageName:"@nocobase/plugin-oidc",version:"0.14.0-alpha.3",enabled:null,installed:null,builtIn:null,packageJson:{name:"@nocobase/plugin-oidc",displayName:"OIDC (OpenID Connect) auth - SSO login","displayName.zh-CN":"OIDC (OpenID Connect) \u8BA4\u8BC1 - SSO \u767B\u5F55",description:"OIDC (OpenID Connect) authentication for NocoBase","description.zh-CN":"OIDC (OpenID Connect) authentication for NocoBase",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@ant-design/icons":"5.x","@formily/antd-v5":"1.x","@formily/react":"2.x",ahooks:"^3.7.2",antd:"5.x",nanoid:"3.3.4","openid-client":"^5.4.2",react:"18.x","react-i18next":"^11.15.1"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/auth":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x"}},isCompatible:!0,depsCompatible:[{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"ahooks",result:!0,versionRange:"3.x",packageVersion:"3.7.8"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@formily/antd-v5",result:!0,versionRange:"1.x",packageVersion:"1.1.0"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/auth",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-oidc/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.449Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-oidc",updatable:!1,displayName:"OIDC (OpenID Connect) auth - SSO login",description:"OIDC (OpenID Connect) authentication for NocoBase"},{id:27,createdAt:"2023-10-29T10:32:21.865Z",updatedAt:"2023-10-29T10:32:21.865Z",name:"saml",packageName:"@nocobase/plugin-saml",version:"0.14.0-alpha.3",enabled:null,installed:null,builtIn:null,packageJson:{name:"@nocobase/plugin-saml",displayName:"SAML auth - SSO login","displayName.zh-CN":"SAML \u8BA4\u8BC1 - SSO \u767B\u5F55",description:"SAML authentication for NocoBase","description.zh-CN":"NocoBase \u7684 SAML \u8EAB\u4EFD\u9A8C\u8BC1",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@ant-design/icons":"5.x","@formily/react":"2.x","@node-saml/node-saml":"^4.0.2",antd:"5.x",react:"18.x","react-i18next":"^11.15.1"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/auth":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x"}},isCompatible:!0,depsCompatible:[{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/auth",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-saml/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.452Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-saml",updatable:!1,displayName:"SAML auth - SSO login",description:"SAML authentication for NocoBase"},{id:28,createdAt:"2023-10-29T10:32:21.870Z",updatedAt:"2023-10-29T10:32:21.870Z",name:"cas",packageName:"@nocobase/plugin-cas",version:"0.14.0-alpha.3",enabled:null,installed:null,builtIn:null,packageJson:{name:"@nocobase/plugin-cas",displayName:"CAS auth - SSO login","displayName.zh-CN":"CAS \u8BA4\u8BC1 - SSO \u767B\u5F55",description:"CAS authentication for NocoBase","description.zh-CN":"NocoBase \u7684 CAS \u8EAB\u4EFD\u9A8C\u8BC1",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",peerDependencies:{"@nocobase/actions":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x"},devDependencies:{"@ant-design/icons":"5.x",antd:"5.x","react-router-dom":"6.x"}},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"react-router-dom",result:!0,versionRange:"6.x",packageVersion:"6.14.1"},{name:"@nocobase/auth",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/plugin-auth",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"axios",result:!0,versionRange:"0.26.x",packageVersion:"0.26.1"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-cas/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.401Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-cas",updatable:!1,displayName:"CAS auth - SSO login",description:"CAS authentication for NocoBase"},{id:29,createdAt:"2023-10-29T10:32:21.875Z",updatedAt:"2023-10-29T10:32:21.875Z",name:"map",packageName:"@nocobase/plugin-map",version:"0.14.0-alpha.3",enabled:null,installed:null,builtIn:null,packageJson:{name:"@nocobase/plugin-map",displayName:"Map","displayName.zh-CN":"\u5730\u56FE",version:"0.14.0-alpha.3",description:"Provides map fields and blocks","description.zh-CN":"\u63D0\u4F9B\u5730\u56FE\u5B57\u6BB5\u548C\u533A\u5757",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@amap/amap-jsapi-loader":"^1.0.1","@amap/amap-jsapi-types":"^0.0.10","@ant-design/icons":"5.x","@formily/antd-v5":"1.x","@formily/core":"2.x","@formily/react":"2.x","@formily/shared":"2.x","@googlemaps/js-api-loader":"^1.16.1","@types/google.maps":"^3.53.4","@types/react":"^17.0.0","@types/react-dom":"^17.0.0",ahooks:"^3.7.2",antd:"5.x",react:"18.x","react-dom":"18.x","react-i18next":"^11.15.1","react-router-dom":"^6.11.2"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"}},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"},{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"@formily/antd-v5",result:!0,versionRange:"1.x",packageVersion:"1.1.0"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"ahooks",result:!0,versionRange:"3.x",packageVersion:"3.7.8"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"react-router-dom",result:!0,versionRange:"6.x",packageVersion:"6.14.1"},{name:"@formily/core",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-map/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.441Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-map",updatable:!1,displayName:"Map",description:"Provides map fields and blocks"},{id:30,createdAt:"2023-10-29T10:32:21.880Z",updatedAt:"2023-10-29T10:32:21.880Z",name:"snapshot-field",packageName:"@nocobase/plugin-snapshot-field",version:"0.14.0-alpha.3",enabled:null,installed:null,builtIn:null,packageJson:{name:"@nocobase/plugin-snapshot-field",displayName:"Snapshot field","displayName.zh-CN":"\u5173\u7CFB\u5FEB\u7167\u5B57\u6BB5",description:"","description.zh-CN":"",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@ant-design/icons":"5.x","@formily/core":"2.x","@formily/react":"2.x","@formily/shared":"2.x",antd:"5.x","rc-tree-select":"5.5.5",react:"18.x","react-i18next":"^11.15.1"},peerDependencies:{"@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"}},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/core",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"}],readmeUrl:"/static/plugins/@nocobase/plugin-snapshot-field/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.462Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-snapshot-field",updatable:!1,displayName:"Snapshot field",description:""},{id:31,createdAt:"2023-10-29T10:32:21.885Z",updatedAt:"2023-10-29T10:32:21.885Z",name:"graph-collection-manager",packageName:"@nocobase/plugin-graph-collection-manager",version:"0.14.0-alpha.3",enabled:null,installed:null,builtIn:null,packageJson:{name:"@nocobase/plugin-graph-collection-manager",displayName:"Graph collection manager","displayName.zh-CN":"\u53EF\u89C6\u5316\u7684\u6570\u636E\u8868\u7BA1\u7406",description:"An ER diagram-like tool","description.zh-CN":"\u7C7B\u4F3C ER \u56FE\u7684\u5DE5\u5177",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@ant-design/icons":"5.x","@antv/x6":"^2.0.0","@antv/x6-plugin-dnd":"^2.0.0","@antv/x6-plugin-export":"^2.0.0","@antv/x6-plugin-minimap":"^2.0.0","@antv/x6-plugin-scroller":"^2.0.0","@antv/x6-plugin-selection":"^2.0.0","@antv/x6-plugin-snapline":"^2.0.0","@antv/x6-react-shape":"^2.0.0","@formily/react":"2.x","@formily/reactive":"2.x","@formily/shared":"2.x",ahooks:"^3.7.2",antd:"5.x",dagre:"^0.8.5",react:"^18.2.0","react-i18next":"^11.15.1"},peerDependencies:{"@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"}},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@emotion/css",result:!0,versionRange:"11.x",packageVersion:"11.11.2"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"},{name:"react-router-dom",result:!0,versionRange:"6.x",packageVersion:"6.14.1"},{name:"@formily/reactive",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/utils",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"ahooks",result:!0,versionRange:"3.x",packageVersion:"3.7.8"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-graph-collection-manager/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.435Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-graph-collection-manager",updatable:!1,displayName:"Graph collection manager",description:"An ER diagram-like tool"},{id:32,createdAt:"2023-10-29T10:32:21.890Z",updatedAt:"2023-10-29T10:32:21.890Z",name:"mobile-client",packageName:"@nocobase/plugin-mobile-client",version:"0.14.0-alpha.3",enabled:null,installed:null,builtIn:null,packageJson:{name:"@nocobase/plugin-mobile-client",version:"0.14.0-alpha.3",main:"./dist/server/index.js",displayName:"Mobile client","displayName.zh-CN":"\u79FB\u52A8\u7AEF",description:"Provides the ability to configure mobile pages","description.zh-CN":"\u63D0\u4F9B\u79FB\u52A8\u7AEF\u9875\u9762\u914D\u7F6E\u7684\u80FD\u529B",devDependencies:{"@ant-design/icons":"5.x","@formily/antd-v5":"1.x","@formily/react":"2.x","@formily/shared":"2.x","@types/react":"17.x","@types/react-dom":"17.x",ahooks:"3.x",antd:"5.x","antd-mobile":"^5.29.1","antd-style":"3.x",classnames:"2.x",react:"18.x","react-dom":"18.x","react-i18next":"11.x","react-router-dom":"6.x"},peerDependencies:{"@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"}},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"react-router-dom",result:!0,versionRange:"6.x",packageVersion:"6.14.1"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"@ant-design/icons",result:!0,versionRange:"5.x",packageVersion:"5.1.4"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"lodash",result:!0,versionRange:"4.x",packageVersion:"4.17.21"},{name:"ahooks",result:!0,versionRange:"3.x",packageVersion:"3.7.8"},{name:"@formily/antd-v5",result:!0,versionRange:"1.x",packageVersion:"1.1.0"}],readmeUrl:null,changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.444Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-mobile-client",updatable:!1,displayName:"Mobile client",description:"Provides the ability to configure mobile pages"},{id:33,createdAt:"2023-10-29T10:32:21.895Z",updatedAt:"2023-10-29T10:32:21.895Z",name:"api-keys",packageName:"@nocobase/plugin-api-keys",version:"0.14.0-alpha.3",enabled:null,installed:null,builtIn:null,packageJson:{name:"@nocobase/plugin-api-keys",displayName:"API keys","displayName.zh-CN":"API \u5BC6\u94A5",description:"Allows users to use API key to access NocoBase HTTP API","description.zh-CN":"\u5141\u8BB8\u7528\u6237\u4F7F\u7528 API \u5BC6\u94A5\u8BBF\u95EE NocoBase HTTP API",version:"0.14.0-alpha.3",license:"AGPL-3.0",main:"./dist/server/index.js",devDependencies:{"@formily/react":"2.x","@formily/shared":"2.x",ahooks:"^3.7.2",antd:"5.x",dayjs:"^1.11.8",i18next:"^22.4.9",react:"^18.2.0","react-dom":"^18.2.0","react-i18next":"^11.15.1"},peerDependencies:{"@nocobase/actions":"0.x","@nocobase/client":"0.x","@nocobase/database":"0.x","@nocobase/resourcer":"0.x","@nocobase/server":"0.x","@nocobase/test":"0.x","@nocobase/utils":"0.x"},gitHead:"ce588eefb0bfc50f7d5bbee575e0b5e843bf6644"},isCompatible:!0,depsCompatible:[{name:"@nocobase/client",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react",result:!0,versionRange:"18.x",packageVersion:"18.2.0"},{name:"@nocobase/database",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"@nocobase/server",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"},{name:"react-i18next",result:!0,versionRange:"11.x",packageVersion:"11.18.6"},{name:"@formily/react",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"dayjs",result:!0,versionRange:"1.x",packageVersion:"1.11.9"},{name:"ahooks",result:!0,versionRange:"3.x",packageVersion:"3.7.8"},{name:"antd",result:!0,versionRange:"5.x",packageVersion:"5.8.6"},{name:"@formily/shared",result:!0,versionRange:"2.x",packageVersion:"2.2.27"},{name:"@nocobase/actions",result:!0,versionRange:"0.14.x",packageVersion:"0.14.0-alpha.3"}],readmeUrl:"/static/plugins/@nocobase/plugin-api-keys/README.md",changelogUrl:null,lastUpdated:"2023-10-29T10:27:21.395Z",file:"/Users/chen/nocobase/nocobase/packages/plugins/@nocobase/plugin-api-keys",updatable:!1,displayName:"API keys",description:"Allows users to use API key to access NocoBase HTTP API"},{id:34,createdAt:"2023-10-29T10:32:21.900Z",updatedAt:"2023-10-29T10:32:21.900Z",name:"localization-management",packageName:"@nocobase/plugin-localization-management",version:"0.14.0-alpha.3",displayName:"Localization management",description:"Allows to manage localization resources of the application."},{id:35,name:"theme-editor",packageName:"@nocobase/plugin-theme-editor",version:"0.14.0-alpha.3",displayName:"Theme editor",description:"Allows you to customize UI colors, sizes, etc"},{id:36,name:"api-doc",packageName:"@nocobase/plugin-api-doc",version:"0.14.0-alpha.3",displayName:"API documentation",description:"An OpenAPI documentation generator for NocoBase HTTP API"}];return _jsx("div",{children:_jsx(Table,{bordered:!0,size:"middle",pagination:!1,onRow:function(o){return{onClick:function(){r("/plugins/".concat(o.name))}}},columns:[{title:"Plugin",width:300,dataIndex:"displayName",ellipsis:!0,render:function(o,s){return _jsxs(Link,{className:"plugin-link",to:"/doc/plugins/".concat(s.name),children:[_jsx("div",{className:"display-name",children:o}),_jsx("div",{className:"package-name",children:s.packageName})]})}},{title:"Version",dataIndex:"version",ellipsis:!0,width:200},{title:"Description",dataIndex:"description",ellipsis:!0}],dataSource:i})})},m=null},68526:function(v,f,n){"use strict";var d=n(96707),x=n(67294),e=n(85893),u=function(h){var c=(0,d.WF)(),r=c.themeConfig,i=(0,d.s0)();return x.useEffect(function(){var a,o=r==null||(a=r.sidebarEnhance)===null||a===void 0||(a=a["/welcome"])===null||a===void 0||(a=a[2])===null||a===void 0||(a=a.children)===null||a===void 0||(a=a[1])===null||a===void 0||(a=a.children)===null||a===void 0?void 0:a[0];i(o)},[]),(0,e.jsx)("div",{})};f.Z=u},5019:function(v,f,n){"use strict";var d=n(51425),x=n(67294),e=n(85893),u=function(h){console.log(h);var c=function(){return h.children.map(function(i){return{key:i.props.name,label:i.props.label,children:i.props.children}})};return(0,e.jsx)("div",{className:"markdown",children:(0,e.jsx)(d.Z,{items:c()})})};f.Z=u},1191:function(v,f,n){"use strict";var d=n(18698),x=n.n(d),e=n(27424),u=n.n(e),m=n(67294),h=n(96707),c=n(36994),r=n(4393),i=n(71230),a=n(15746),o=n(10900),s=n(54517),t=n(85893),C=c.default.Title,p=c.default.Text,y=function(j){var k=j.data,A=function(){var R=(0,h.WF)(),T=R.themeConfig,M=T.lang==="zh-CN",F=T.lang==="ja-JP",P=(0,m.useState)(""),I=u()(P,2),U=I[0],V=I[1],w=(0,m.useState)(""),_=u()(w,2),B=_[0],N=_[1],O=function(l){try{if(!l.trim()){N("");return}var g=Function('"use strict"; return ('+l+")")();g instanceof Date?g=g.toString():x()(g)==="object"&&g!==null?g=JSON.stringify(g):g=String(g),N(g)}catch(H){N("Error: ".concat(H.message))}},L=function(l){V(l),O(l)},z=function(l){var g=l.target.value;V(g),O(g)},S=function(l){return l?M&&l.cn?l.cn:F&&l.ja?l.ja:l.en||"":""},Z=[{title:"Function",dataIndex:"title",key:"title",width:"10%",render:function(l){return(0,t.jsx)(p,{strong:!0,children:l})}},{title:"Definition",dataIndex:"definition",key:"definition",width:"25%",render:function(l){return S(l)}},{title:"Example call",dataIndex:"call",key:"call",width:"20%",render:function(l){return(0,t.jsx)(p,{style:{color:"#1677ff",cursor:"pointer"},onClick:function(){return L(l)},children:l})}},{title:"Parameters",dataIndex:"parameterDefinitions",key:"parameterDefinitions",width:"20%",render:function(l){return S(l)}},{title:"Expected result",dataIndex:"result",key:"result",width:"25%"}];return(0,t.jsxs)("div",{children:[(0,t.jsx)("section",{style:{position:"sticky",top:0,zIndex:999,background:"#fff",padding:"16px 0",borderBottom:"1px solid #f0f0f0"},children:(0,t.jsxs)(r.Z,{style:{marginBottom:0},children:[(0,t.jsxs)(i.Z,{gutter:[16,16],align:"middle",children:[(0,t.jsx)(a.Z,{xs:24,sm:24,md:16,lg:16,xl:16,children:(0,t.jsxs)(i.Z,{gutter:8,align:"middle",children:[(0,t.jsx)(a.Z,{flex:"70px",children:(0,t.jsx)(p,{strong:!0,children:"Formula:"})}),(0,t.jsx)(a.Z,{flex:"auto",children:(0,t.jsx)(o.Z,{placeholder:"Enter formula here",value:U,onChange:z})})]})}),(0,t.jsx)(a.Z,{xs:24,sm:24,md:8,lg:8,xl:8,children:(0,t.jsxs)(i.Z,{gutter:8,align:"middle",children:[(0,t.jsx)(a.Z,{flex:"60px",children:(0,t.jsx)(p,{strong:!0,children:"Result:"})}),(0,t.jsx)(a.Z,{flex:"auto",children:(0,t.jsx)(r.Z,{size:"small",style:{backgroundColor:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:4},children:(0,t.jsx)(p,{style:{fontWeight:"bold"},children:B})})})]})})]}),(0,t.jsx)("div",{style:{marginTop:16},children:(0,t.jsx)(p,{children:M?"\u70B9\u51FB\u4E0B\u9762\u8868\u683C\u4E2D\u67D0\u51FD\u6570\u7684 Example call\uFF0C\u53EF\u5C06\u793A\u4F8B\u81EA\u52A8\u586B\u5165\u4E0A\u65B9\u8F93\u5165\u6846\u5E76\u6267\u884C\u3002":F?"\u4E0B\u306E\u30C6\u30FC\u30D6\u30EB\u306E Example call \u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u4E0A\u306E\u5165\u529B\u6B04\u306B\u81EA\u52D5\u7684\u306B\u5165\u529B\u3057\u3066\u5B9F\u884C\u3057\u307E\u3059\u3002":"Click an Example call below to populate and execute in the input above."})})]})}),k.map(function(b){return(0,t.jsxs)(r.Z,{style:{marginTop:24},children:[(0,t.jsx)(C,{level:3,children:b.category}),(0,t.jsx)(s.Z,{dataSource:b.functions,columns:Z,rowKey:"title",pagination:!1})]},b.category)})]})};return A};f.Z=y},75042:function(){}}]);
