# Markdown 区块

## 介绍

Markdown 区块无需绑定数据源使用，使用 Markdown 语法定义文本内容，可用于显示格式化的文本内容。

## 添加区块

可以在页面或弹窗里添加 Markdown 区块

![20240612205004](https://static-docs.nocobase.com/20240612205004.png)

也可以在表单区块和详情区块里添加内联（inline-block）的 Markdown 区块

![20240612205215](https://static-docs.nocobase.com/20240612205215.png)

## 模板引擎

### 字符串模板

![20240817175031](https://static-docs.nocobase.com/20240817175031.png)

### Handlebars

![20240817175355](https://static-docs.nocobase.com/20240817175355.png)

![20240817175501](https://static-docs.nocobase.com/20240817175501.png)

更多内容参考 [Handlebars 模板引擎](/handbook/template-handlebars)

## 使用变量

Markdown 的文本里也支持使用变量

![20240612205857](https://static-docs.nocobase.com/20240612205857.png)

区块内联的 Markdown 也支持变量

![20240612210333](https://static-docs.nocobase.com/20240612210333.png)

变量中使用关系对多的关系数据时，由于不同模板支持语法不同,在使用数组型数据变量时需要区分不同的写法。
如用户/角色（一对多）

使用字符串模板:

![20240909154424](https://static-docs.nocobase.com/20240909154424.png)

字符串模板中将数组自动用","分割显示。

![20240909154449](https://static-docs.nocobase.com/20240909154449.png)

使用 Handlebars 模板:

![20240909155651](https://static-docs.nocobase.com/20240909155651.png)

遍历数组 使用 `#each`

![20240909155720](https://static-docs.nocobase.com/20240909155720.png)

更多变量的介绍查看 [配置界面 / 变量](/handbook/ui/variables) 章节

## 二维码

Markdown 里支持配置二维码，可以结合变量使用。

```html
<qr-code value="https://www.nocobase.com/" type="svg"></qr-code>
```
