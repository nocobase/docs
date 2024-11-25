# 扫二维码

## 介绍

二维码扫码操作，可以在工作台区块里添加

## 示例

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240612214013_rec_.mp4" type="video/mp4">
</video>

## 使用手册

### 生成二维码

1. 假如需要跳转的页面链接为： `https://localhost:13000/m/page/vyoiwa25jig`
2. 我们从手机页面提取 `/page/` 开始时的相对链接，生成二维码。
3. 新建markdown区块，填写如下：

```markdown
<qr-code value="/page/tr8r70ajpko" type="svg"></qr-code>
```

4. 新建“扫描二维码”操作，扫描并获跳转对应页面。

注：
- 扫描二维码操作，只支持系统内部相对链接，且需要从 `/page/` 开始生成
- 暂不支持外部页面。

更多查看 [操作面板区块](/handbook/block-workbench) 文档
