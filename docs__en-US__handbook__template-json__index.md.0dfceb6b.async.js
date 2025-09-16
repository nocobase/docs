"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[93797],{98851:function(t,s,_){_.r(s);var o=_(572269),u=_(793359),c=_(861788),m=_(719977),h=_(20190),d=_(24268),E=_(496057),x=_(585939),v=_(28484),k=_(635206),P=_(375553),M=_(156266),O=_(572333),D=_(841118),y=_(39297),I=_(868526),j=_(605019),r=_(614651),a=_(280936),l=_(667294),n=_(175583),e=_(785893);function i(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(a.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"json-template",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#json-template",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"JSON Template"]}),(0,e.jsxs)("h2",{id:"introduction",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Introduction"]}),(0,e.jsx)("p",{children:n.texts[0].value}),(0,e.jsxs)("h2",{id:"example",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#example",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Example"]}),(0,e.jsx)("p",{children:n.texts[1].value}),(0,e.jsx)(d.Z,{lang:"json",children:n.texts[2].value}),(0,e.jsx)("p",{children:n.texts[3].value}),(0,e.jsx)(d.Z,{lang:"json",children:n.texts[4].value}),(0,e.jsx)("p",{children:n.texts[5].value}),(0,e.jsx)(d.Z,{lang:"json",children:n.texts[6].value})]})})})})}s.default=i},175583:function(t,s,_){_.r(s),_.d(s,{texts:function(){return o}});const o=[{value:"In a JSON template, variables are represented in string format and must be enclosed in double quotes, such as {{xxxx}}. During the parsing process, each variable's value is converted to its appropriate type based on its actual content. Thus, while the variable itself is a string, the resulting parsed value may not necessarily remain a string.",paraId:0,tocIndex:1},{value:"The JSON template is as follows",paraId:1,tocIndex:2},{value:`{
  "key1": "{{current.key1}}",
  "key2": "{{current.key2}}",
  "key3": "{{current.key3}}",
  "key4": "{{current.key4}}",
  "key5": "{{current.key5}}",
  "key6": "{{current.key6}}",
  "key7": {
    "key1": "{{current.key1}}",
    "key2": "{{current.key2}}"
  },
  "key8": ["{{current.key1}}", "{{current.key3}}"],
  "key9": "{{current.key1}} - \\"{{current.key3}}\\" - {{current.key3}} - val9"
}
`,paraId:2,tocIndex:2},{value:"The current variables are as follows",paraId:3,tocIndex:2},{value:`{
  "key1": "val1",
  "key2": null,
  "key3": 3,
  "key4": {"k": "v"},
  "key5": [1, 2, 3],
  "key6": undefined
}
`,paraId:4,tocIndex:2},{value:"The parsed result will be",paraId:5,tocIndex:2},{value:`{
  "key1": "val1",
  "key2": null,
  "key3": 3,
  "key4": {"k": "v"},
  "key5": [1, 2, 3],
  "key7": {
    "key1": "val1",
    "key2": null
  },
  "key8": ["val1", 3],
  "key9": "val1 - \\"3\\" - 3 - val9"
}
`,paraId:6,tocIndex:2}]}}]);
