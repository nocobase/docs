// src/components/MarkdownEditor.tsx
import React, { useEffect, useState } from "react";
import Vditor from "vditor";
import "vditor/dist/index.css";
import { useSiteData } from 'dumi';

interface TutorialStep {
  en: string;
  zh: string;
  ja: string;
}

// 定义教程内容数组，每个元素包含中、日、英三种语言的文本
const tutorialSteps: TutorialStep[] = [
  {
    en: `
# Welcome to the Markdown Editor

This is a tutorial on how to use the Markdown Editor.
`,
    zh: `
# 欢迎使用 Markdown 编辑器

这是一个关于如何使用 Markdown 编辑器的教程。
`,
    ja: `
# Markdownエディタへようこそ

これはMarkdownエディタの使い方に関するチュートリアルです。
`,
  },
  {
    en: `
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
You can add emojis like :smile: which renders as 😄.

### Lists
- Unordered lists use - or *.
  - Example: - Item 1

### Task Lists
- [x] Completed task
- [ ] Incomplete task
`,
    zh: `
## Markdown 基本语法

### 标题
使用 # 表示标题。例如：
- # 一级标题
- ## 二级标题
- ### 三级标题

### 强调
- **加粗** 会显示为 加粗。
- *斜体* 会显示为 斜体。
- ~~删除线~~ 会显示为 删除线。

### 链接
[NocoBase](https://www.nocobase.com/) 创建超链接。

### 图片
![替代文字](https://static-docs.nocobase.com/logo-nocobase.png)

### 引用
> 这是一个引用。在行首使用 “>” 符号来创建。

### 代码块
使用三个反引号（\`\`\`）表示代码块。这里是一个 JavaScript 代码的例子：

\`\`\`js
function greet() {
  console.log('你好，Markdown！');
}
greet();
\`\`\`

### 公式块
对于数学公式，通常使用双美元符号表示行间公式，单美元符号表示行内公式。这里有一些例子：
$$ E = mc^2 $$
行内公式: $E = mc^2$

### 表格
表格通过竖线（|）和短横线（-）创建：
| 列1 | 列2 | 列3 |
| --- | --- | --- |
| 第1行数据1 | 第1行数据2 | 第1行数据3 |
| 第2行数据1 | 第2行数据2 | 第2行数据3 |

### 表情符号 Emoji
你可以添加类似 :smile: 的表情符号，它会显示为 😄。

### 列表
- 无序列表使用 - 或 *。
  - 示例：- 项目 1

### 任务列表
- [x] 已完成的任务
- [ ] 未完成的任务
`,
    ja: `
## Markdown 基本文法

### 見出し
# を使って見出しを作成します。例えば：
- # 見出し1
- ## 見出し2
- ### 見出し3

### 強調
- **太字** は 太字 になります。
- *斜体* は 斜体 になります。
- ~~取り消し線~~ は 取り消し線 になります。

### リンク
[NocoBase](https://www.nocobase.com/) はハイパーリンクを作成します。

### 画像
![代替テキスト](https://static-docs.nocobase.com/logo-nocobase.png)

### 引用
> これは引用です。行の最初に ">", シンボルを使用して作成します。

### コードブロック
コードブロックは3つのバッククォート（\`\`\`）を使用します。以下がJavaScriptの例です：

\`\`\`js
function greet() {
  console.log('こんにちは、Markdown！');
}
greet();
\`\`\`

### 数式ブロック
数式は通常、ダブルドル記号を使って行間数式を作成し、シングルドル記号を使って行内数式を作ります。以下がその例です：
$$ E = mc^2 $$
行内数式: $E = mc^2$

### テーブル
テーブルはパイプ（|）とダッシュ（-）を使用して作成します：
| 列1 | 列2 | 列3 |
| --- | --- | --- |
| 行1データ1 | 行1データ2 | 行1データ3 |
| 行2データ1 | 行2データ2 | 行2データ3 |

### 絵文字 Emoji
:smile: のような絵文字を追加できます。それは 😄 として表示されます。

### リスト
- 箇条書きは - または * を使用します。
  - 例: - アイテム1

### タスクリスト
- [x] 完了したタスク
- [ ] 未完了のタスク
`,
  },
];

const MarkdownEditor: React.FC = () => {
  const [vditorInstance, setVditorInstance] = useState<Vditor | null>(null);
  const { themeConfig } = useSiteData();
  // 提取语言代码，如 'en', 'zh', 'ja'
  const language = themeConfig.lang.slice(0, 2);

  // 根据当前语言拼接教程内容
  const assembleContent = (lang: string): string => {
    return tutorialSteps.map((step) => step[lang] || step['en']).join("\n");
  };

  // 初始化 Vditor
  useEffect(() => {
    const initialContent = assembleContent(language);

    const vditor = new Vditor("vditor", {
      value: initialContent,
      after: () => {
        setVditorInstance(vditor);
      },
    });

    // 清理函数
    return () => {
      vditor.destroy();
      setVditorInstance(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  // 当语言变化时，更新 Vditor 的内容
  useEffect(() => {
    if (vditorInstance) {
      const newContent = assembleContent(language);
      vditorInstance.setValue(newContent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return <div id="vditor" className="vditor"></div>;
};

export default MarkdownEditor;
