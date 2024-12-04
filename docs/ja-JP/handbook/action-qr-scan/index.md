# QRコードをスキャン

## 概要

QRコードスキャン操作は、作業台ブロックに追加してシステム内のナビゲーションを簡略化できます。

## 例

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240612214013_rec_.mp4" type="video/mp4">
</video>

## 使用手順

### QRコードを生成する

1. 遷移先のページリンクが `https://localhost:13000/m/page/vyoiwa25jig` であるとします。
2. モバイルページのURLから `/page/` 以降の相対リンクを抽出し、QRコードを生成します。
3. 新しいMarkdownブロックを作成し、以下のコードを記述します：

```markdown
<qr-code value="/page/tr8r70ajpko" type="svg"></qr-code>
```

4. 「QRコードをスキャン」アクションを追加し、スキャンして対応するページに遷移します。

**注意**:
- QRコードスキャン操作は、システム内部の相対リンクのみをサポートし、リンクは必ず `/page/` から始まる必要があります。
- 外部ページのリンクは現在サポートされていません。

詳細は、[操作パネルブロック](/handbook/block-action-panel)のドキュメントをご参照ください。
