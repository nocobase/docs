# iframe 区块

<PluginInfo name="block-iframe"></PluginInfo>

## 介绍
Iframe 区块允许将外部网页或内容嵌入到当前页面中。

## 安装

内置插件，无需安装。
## 添加区块


![20240408220259](https://static-docs.nocobase.com/20240408220259.png)

配置 URL 或 Html 直接将外部应用嵌入。

![20240408220322](https://static-docs.nocobase.com/20240408220322.png)

## 模板引擎

![20240811205327](https://static-docs.nocobase.com/20240811205327.png)
### 字符串模板

默认的模板引擎
### Handlebars

Handlebars 是一个 JavaScript 模板引擎，支持条件判断（{{#if}}）和循环（{{#each}}）等内置语法，目前暂不支持扩展helpers。

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

<a href="https://handlebarsjs.com/guide/builtin-helpers" target="_blank"> Handlebars 语法参考</a>

## 传入变量

### html 支持变量解析

![20240603120321](https://static-docs.nocobase.com/20240603120321.png)

![20240603120629](https://static-docs.nocobase.com/20240603120629.gif)

### url 支持变量

![20240603142219](https://static-docs.nocobase.com/20240603142219.png)

更多关于变量内容参考 [变量](/handbook/ui/variables)