"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[68194],{976310:function(a,s,n){n.r(s);var d=n(572269),u=n(793359),c=n(861788),x=n(719977),h=n(20190),o=n(24268),m=n(496057),g=n(585939),E=n(28484),I=n(635206),v=n(375553),p=n(156266),j=n(572333),D=n(841118),P=n(39297),M=n(868526),O=n(605019),t=n(614651),r=n(280936),l=n(667294),_=n(219424),e=n(785893);function i(){return(0,e.jsx)(t.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(r.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"v090nocobase-\u7684-logging-\u7CFB\u7EDF",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#v090nocobase-\u7684-logging-\u7CFB\u7EDF",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"v0.9.0\uFF1ANocoBase \u7684 Logging \u7CFB\u7EDF"]}),(0,e.jsxs)("h2",{id:"nocobaselogger",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#nocobaselogger",children:(0,e.jsx)("span",{className:"icon icon-link"})}),(0,e.jsx)("code",{children:_.texts[0].value})]}),(0,e.jsx)("p",{children:_.texts[1].value}),(0,e.jsx)(o.Z,{lang:"ts",children:_.texts[2].value}),(0,e.jsxs)("h2",{id:"\u65B0\u589E\u7684\u73AF\u5883\u53D8\u91CF",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u65B0\u589E\u7684\u73AF\u5883\u53D8\u91CF",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u65B0\u589E\u7684\u73AF\u5883\u53D8\u91CF"]}),(0,e.jsx)("p",{children:_.texts[3].value}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)(t.rU,{to:"/welcome/getting-started/env#logger_transport",children:_.texts[4].value})}),(0,e.jsx)("li",{children:(0,e.jsx)(t.rU,{to:"./getting-started/env.md#logger_base_path",children:_.texts[5].value})})]}),(0,e.jsxs)("h2",{id:"application-\u7684-logger-\u914D\u7F6E",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#application-\u7684-logger-\u914D\u7F6E",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Application \u7684 logger \u914D\u7F6E"]}),(0,e.jsx)(o.Z,{lang:"ts",children:_.texts[6].value}),(0,e.jsxs)("p",{children:[_.texts[7].value,(0,e.jsx)("a",{href:"https://github.com/winstonjs/winston#table-of-contents",children:_.texts[8].value})]}),(0,e.jsxs)("h2",{id:"applogger--ctxlogger",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#applogger--ctxlogger",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"app.logger & ctx.logger"]}),(0,e.jsx)("p",{children:_.texts[9].value}),(0,e.jsx)(o.Z,{lang:"ts",children:_.texts[10].value}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:_.texts[11].value}),_.texts[12].value,(0,e.jsx)("code",{children:_.texts[13].value}),_.texts[14].value,(0,e.jsx)("a",{href:"https://github.com/winstonjs/winston#table-of-contents",children:_.texts[15].value})]}),(0,e.jsxs)("h2",{id:"\u81EA\u5B9A\u4E49-transports",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u81EA\u5B9A\u4E49-transports",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u81EA\u5B9A\u4E49 Transports"]}),(0,e.jsx)("p",{children:_.texts[16].value}),(0,e.jsx)(o.Z,{lang:"ts",children:_.texts[17].value})]})})})})}s.default=i},219424:function(a,s,n){n.r(s),n.d(s,{texts:function(){return d}});const d=[{value:"@nocobase/logger",paraId:0},{value:"\u57FA\u4E8E Winston \u5B9E\u73B0\uFF0C\u63D0\u4F9B\u4E86\u4FBF\u6377\u7684\u521B\u5EFA logger \u5B9E\u4F8B\u7684\u65B9\u6CD5\u3002",paraId:1,tocIndex:1},{value:`const logger = createLogger();
logger.info('Hello distributed log files!');

const { instance, middleware } = createAppLogger(); // \u7528\u4E8E @nocobase/server
app.logger = instance;
app.use(middleware);
`,paraId:2,tocIndex:1},{value:"logger \u76F8\u5173\u73AF\u5883\u53D8\u91CF\u6709\uFF1A",paraId:3,tocIndex:2},{value:"LOGGER_TRANSPORT",paraId:4,tocIndex:2},{value:"LOGGER_BASE_PATH",paraId:5,tocIndex:2},{value:`const app = new Application({
  logger: {
    async skip(ctx) {
      return false;
    },
    requestWhitelist: [],
    responseWhitelist: [],
    transports: ['console', 'dailyRotateFile'],
  },
});
`,paraId:6,tocIndex:3},{value:"\u66F4\u591A\u914D\u7F6E\u9879\u53C2\u8003 ",paraId:7,tocIndex:3},{value:"Winston \u6587\u6863",paraId:7,tocIndex:3},{value:"ctx.logger \u5E26\u6709 reqId\uFF0C\u6574\u4E2A ctx \u5468\u671F\u91CC\u90FD\u662F\u4E00\u4E2A reqId",paraId:8,tocIndex:4},{value:`ctx.logger = app.logger.child({ reqId: ctx.reqId });
`,paraId:9,tocIndex:4},{value:"app.logger",paraId:10,tocIndex:4},{value:" \u548C ",paraId:10,tocIndex:4},{value:"ctx.logger",paraId:10,tocIndex:4},{value:" \u90FD\u662F Winston \u5B9E\u4F8B\uFF0C\u8BE6\u7EC6\u7528\u6CD5\u53C2\u8003 ",paraId:10,tocIndex:4},{value:"Winston \u6587\u6863",paraId:10,tocIndex:4},{value:"\u9664\u4E86 Winston \u7684\u65B9\u5F0F\u4EE5\u5916\uFF0CNocoBase \u8FD8\u63D0\u4F9B\u4E86\u4E00\u79CD\u66F4\u4FBF\u6377\u7684\u65B9\u5F0F",paraId:11,tocIndex:5},{value:`import { Transports } from '@nocobase/logger';

Transports['custom'] = () => {
  return new winston.transports.Console();
};

const app = new Application({
  logger: {
    transports: ['custom'],
  },
});
`,paraId:12,tocIndex:5}]}}]);
