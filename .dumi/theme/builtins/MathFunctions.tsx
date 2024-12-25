import React, { useEffect } from 'react';
import * as math from 'mathjs'; // 只挂载 mathjs
import generateFunctionsComponent from './generator/generateFunctionsComponent';

const functionsData = [
    {
      "category": "Expression functions",
      "functions": [
        {
          "title": "math.compile",
          "call": "math.compile(expr)",
          "result": "Parsed and compiled expression",
          "definition": {
            "en": "Parse and compile an expression.",
            "cn": "解析并编译表达式。",
            "ja": "式を解析してコンパイルします。"
          },
          "parameterDefinitions": {
            "en": "expr (string)",
            "cn": "表达式（字符串）",
            "ja": "式（文字列）"
          }
        },
        {
          "title": "math.evaluate",
          "call": "math.evaluate(expr [, scope])",
          "result": "Evaluated result of the expression",
          "definition": {
            "en": "Evaluate an expression.",
            "cn": "计算表达式。",
            "ja": "式を評価します。"
          },
          "parameterDefinitions": {
            "en": "expr (string), scope (object, optional)",
            "cn": "表达式（字符串），作用域（对象，可选）",
            "ja": "式（文字列）、スコープ（オプション）"
          }
        },
        {
          "title": "math.help",
          "call": "math.help(search)",
          "result": "Help information about the function or data type",
          "definition": {
            "en": "Retrieve help on a function or data type.",
            "cn": "检索函数或数据类型的帮助信息。",
            "ja": "関数またはデータ型に関するヘルプを取得します。"
          },
          "parameterDefinitions": {
            "en": "search (string)",
            "cn": "搜索关键字（字符串）",
            "ja": "検索文字列"
          }
        },
        {
          "title": "math.parser",
          "call": "math.parser()",
          "result": "Created parser instance",
          "definition": {
            "en": "Create a parser.",
            "cn": "创建一个解析器。",
            "ja": "パーサーを作成します。"
          },
          "parameterDefinitions": {
            "en": "None",
            "cn": "无",
            "ja": "なし"
          }
        }
      ]
    }
  ];

const CommonComponent = generateFunctionsComponent({ data: functionsData });

const MathFunctions: React.FC = () => {
  // 在此挂载 mathjs
  useEffect(() => {
    Object.keys(math).forEach((key) => {
      (window as any)[key] = (math as any)[key];
    });
  }, []);

  return <CommonComponent />;
};

export default MathFunctions;
