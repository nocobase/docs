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
## Features

- **Bold** and *italic* text
- Create [links](https://www.example.com)
- Lists:
  - Unordered
  - Ordered
- Insert images
- Code blocks
`,
    zh: `
## 功能

- **加粗** 和 *斜体* 文本
- 创建 [链接](https://www.example.com)
- 列表：
  - 无序列表
  - 有序列表
- 插入图片
- 代码块
`,
    ja: `
## 機能

- **太字** と *斜体* テキスト
- [リンク](https://www.example.com) の作成
- リスト：
  - 箇条書き
  - 番号付きリスト
- 画像の挿入
- コードブロック
`,
  },
  {
    en: `
## Getting Started

1. **Edit** the markdown text on the left.
2. **Preview** the rendered content on the right.
3. **Save** your work regularly.

Happy writing!
`,
    zh: `
## 快速开始

1. **编辑** 左侧的 Markdown 文本。
2. **预览** 右侧渲染后的内容。
3. **定期保存** 您的工作。

祝您写作愉快！
`,
    ja: `
## 始め方

1. 左側の Markdown テキストを**編集**します。
2. 右側にレンダリングされた内容を**プレビュー**します。
3. 定期的に**保存**します。

楽しい執筆を！
`,
  },
  // 可以在此处添加更多教程步骤
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
