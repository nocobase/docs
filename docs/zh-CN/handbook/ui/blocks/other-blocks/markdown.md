# Markdown 区块

## 介绍

Markdown 区块无需绑定数据源使用，使用 Markdown 语法定义文本内容，可用于显示格式化的文本内容。

## 添加区块

可以在页面或弹窗里添加 Markdown 区块

![20240612205004](https://static-docs.nocobase.com/20240612205004.png)

也可以在表单区块和详情区块里添加内联（inline-block）的 Markdown 区块

![20240612205215](https://static-docs.nocobase.com/20240612205215.png)


## 模板引擎

![20240811204945](https://static-docs.nocobase.com/20240811204945.png)
### 字符串模板

![20240811204803](https://static-docs.nocobase.com/20240811204803.png)
### Handlebars

Handlebars 是一个 JavaScript 模板引擎，支持条件判断（{{#if}}）和循环（{{#each}}）等内置语法，目前暂不支持扩展helpers。

![20240811204856](https://static-docs.nocobase.com/20240811204856.png)

![20240811203846](https://static-docs.nocobase.com/20240811203846.png)

<a href="https://handlebarsjs.com/guide/builtin-helpers" target="_blank"> Handlebars 语法参考</a>

## 使用变量

Markdown 的文本里也支持使用变量

![20240612205857](https://static-docs.nocobase.com/20240612205857.png)

区块内联的 Markdown 也支持变量

![20240612210333](https://static-docs.nocobase.com/20240612210333.png)

更多变量的介绍查看 [配置界面 / 变量](/handbook/ui/variables) 章节

## 二维码

Markdown 里支持配置二维码，可以结合变量使用。

```html
<qr-code value="https://www.nocobase.com/" type="svg"></qr-code>
```