import React, { useEffect, useMemo } from 'react';
import * as math from 'mathjs'; // 只挂载 mathjs
import generateFunctionsComponent from './generator/generateFunctionsComponent';

const functionsData = [
  {
    "category": "Expression functions",
    "functions": [
      {
        "title": "compile",
        "call": "compile('2 + 3')",
        "result": "{}",
        "definition": {
          "en": "Parse and compile an expression (no direct calculation).",
          "cn": "解析并编译表达式（负责解析，不直接返回结果）。",
          "ja": "式を解析し、コンパイルします（評価はしません）。"
        },
        "parameterDefinitions": {
          "en": "expr (string)",
          "cn": "表达式（字符串）",
          "ja": "式（文字列）"
        }
      },
      {
        "title": "evaluate",
        "call": "evaluate('2 + 3')",
        "result": "5",
        "definition": {
          "en": "Evaluate an expression (and return the result).",
          "cn": "计算表达式并返回结果。",
          "ja": "式を評価して結果を返します。"
        },
        "parameterDefinitions": {
          "en": "expr (string), scope (object, optional)",
          "cn": "表达式（字符串），作用域（可选）",
          "ja": "式（文字列）、スコープ（オプション）"
        }
      },
      {
        "title": "help",
        "call": "help('evaluate')",
        "result": "{\n  \"name\": \"evaluate\",\n  \"category\": \"Expression\",\n  \"syntax\": [\n    \"evaluate(expression)\",\n    \"evaluate(expression, scope)\",\n    \"evaluate([expr1, expr2, expr3, ...])\",\n    \"evaluate([expr1, expr2, expr3, ...], scope)\"\n  ],\n  \"description\": \"Evaluate an expression or an array with expressions.\",\n  \"examples\": [\n    \"evaluate(\\\"2 + 3\\\")\",\n    \"evaluate(\\\"sqrt(16)\\\")\",\n    \"evaluate(\\\"2 inch to cm\\\")\",\n    \"evaluate(\\\"sin(x * pi)\\\", { \\\"x\\\": 1/2 })\",\n    \"evaluate([\\\"width=2\\\", \\\"height=4\\\",\\\"width*height\\\"])\"\n  ],\n  \"seealso\": [],\n  \"mathjs\": \"Help\"\n}",
        "definition": {
          "en": "Retrieve brief usage info or examples.",
          "cn": "检索函数或数据类型的使用说明。",
          "ja": "関数またはデータ型の使用方法を取得します。"
        },
        "parameterDefinitions": {
          "en": "search (string)",
          "cn": "搜索关键字（字符串）",
          "ja": "検索文字列"
        }
      },
      {
        "title": "parser",
        "call": "parser()",
        "result": "{}",
        "definition": {
          "en": "Create a parser for custom operations.",
          "cn": "创建自定义操作用的解析器。",
          "ja": "カスタム操作のためのパーサーを作成します。"
        },
        "parameterDefinitions": {
          "en": "None",
          "cn": "无",
          "ja": "なし"
        }
      }
    ]
  },
  {
    "category": "Algebra functions",
    "functions": [
      {
        "title": "derivative",
        "call": "derivative('x^2', 'x')",
        "result": "{\n  \"mathjs\": \"OperatorNode\",\n  \"op\": \"*\",\n  \"fn\": \"multiply\",\n  \"args\": [\n    {\n      \"mathjs\": \"ConstantNode\",\n      \"value\": 2\n    },\n    {\n      \"mathjs\": \"SymbolNode\",\n      \"name\": \"x\"\n    }\n  ],\n  \"implicit\": false,\n  \"isPercentage\": false\n}",
        "definition": {
          "en": "Take the derivative of an expression with respect to a given variable.",
          "cn": "对表达式进行求导，并指定变量。",
          "ja": "式を指定した変数で微分します。"
        },
        "parameterDefinitions": {
          "en": "expr (string|Node), variable (string)",
          "cn": "表达式（字符串或节点），变量（字符串）",
          "ja": "式（文字列またはNode）、変数（文字列）"
        }
      },
      {
        "title": "leafCount",
        "call": "leafCount('x^2 + y')",
        "result": "3",
        "definition": {
          "en": "Count the number of leaf nodes (symbols/constants) in the parse tree.",
          "cn": "统计表达式解析树中的叶节点数量（符号或常量）。",
          "ja": "パースツリーにおける葉ノード（シンボルや定数）の数を数えます。"
        },
        "parameterDefinitions": {
          "en": "expr (string|Node)",
          "cn": "表达式（字符串或节点）",
          "ja": "式（文字列またはNode）"
        }
      },
      {
        "title": "lsolve",
        "call": "lsolve([[1,2],[3,4]], [5,6])",
        "result": "[\n  [\n    5\n  ],\n  [\n    -2.25\n  ]\n]",
        "definition": {
          "en": "Find one solution of a linear system by forward substitution.",
          "cn": "使用前向替换法求解线性方程组的一个解。",
          "ja": "前進代入法で線形方程式系の単一解を求めます。"
        },
        "parameterDefinitions": {
          "en": "L (Array|Matrix), b (Array|Matrix)",
          "cn": "L（数组或矩阵），b（数组或矩阵）",
          "ja": "L（配列または行列）、b（配列または行列）"
        }
      },
      {
        "title": "lsolveAll",
        "call": "lsolveAll([[1,2],[3,4]], [5,6])",
        "result": "[\n  [\n    [\n      5\n    ],\n    [\n      -2.25\n    ]\n  ]\n]",
        "definition": {
          "en": "Find all solutions of a linear system by forward substitution.",
          "cn": "使用前向替换法求解线性方程组的所有解。",
          "ja": "前進代入法で線形方程式系のすべての解を求めます。"
        },
        "parameterDefinitions": {
          "en": "L (Array|Matrix), b (Array|Matrix)",
          "cn": "L（数组或矩阵），b（数组或矩阵）",
          "ja": "L（配列または行列）、b（配列または行列）"
        }
      },
      {
        "title": "lup",
        "call": "lup([[1,2],[3,4]])",
        "result": "{\n  \"L\": [\n    [\n      1,\n      0\n    ],\n    [\n      0.3333333333333333,\n      1\n    ]\n  ],\n  \"U\": [\n    [\n      3,\n      4\n    ],\n    [\n      0,\n      0.6666666666666667\n    ]\n  ],\n  \"p\": [\n    1,\n    0\n  ]\n}",
        "definition": {
          "en": "Perform LU decomposition of a matrix with partial pivoting.",
          "cn": "对矩阵执行部分主元LU分解。",
          "ja": "行列の部分ピボットLU分解を行います。"
        },
        "parameterDefinitions": {
          "en": "A (Array|Matrix)",
          "cn": "A（数组或矩阵）",
          "ja": "A（配列または行列）"
        }
      },
      {
        "title": "lusolve",
        "call": "lusolve([[1,2],[3,4]], [5,6])",
        "result": "[\n  [\n    -3.9999999999999987\n  ],\n  [\n    4.499999999999999\n  ]\n]",
        "definition": {
          "en": "Solve linear equation A*x=b, where A is an [n x n] matrix.",
          "cn": "求解线性方程 A*x=b（A 为 n×n 矩阵）。",
          "ja": "A が n×n 行列である線形方程式 A*x=b を解きます。"
        },
        "parameterDefinitions": {
          "en": "A (Array|Matrix), b (Array|Matrix)",
          "cn": "A（数组或矩阵），b（数组或矩阵）",
          "ja": "A（配列または行列）、b（配列または行列）"
        }
      },
      {
        "title": "lyap",
        "call": "lyap(A, Q)",
        "result": "Error: A is not defined",
        "definition": {
          "en": "Solve the continuous-time Lyapunov equation AP+PA’+Q=0.",
          "cn": "求解连续时间李雅普诺夫方程 AP+PA’+Q=0。",
          "ja": "連続時間ライアプノフ方程式 AP+PA’+Q=0 を解きます。"
        },
        "parameterDefinitions": {
          "en": "A (Array|Matrix), Q (Array|Matrix)",
          "cn": "A（数组或矩阵），Q（数组或矩阵）",
          "ja": "A（配列または行列）、Q（配列または行列）"
        }
      },
      {
        "title": "polynomialRoot",
        "call": "polynomialRoot(1, 2, 3, 4)",
        "result": "[\n  -0.605829586188268,\n  {\n    \"mathjs\": \"Complex\",\n    \"re\": -0.07208520690586608,\n    \"im\": -0.6383267351483765\n  },\n  {\n    \"mathjs\": \"Complex\",\n    \"re\": -0.07208520690586608,\n    \"im\": 0.6383267351483765\n  }\n]",
        "definition": {
          "en": "Find the numerical roots of a polynomial (real or complex).",
          "cn": "求解多项式的数值根（可包含复数）。",
          "ja": "多項式の数値解（実数または複素数）を求めます。"
        },
        "parameterDefinitions": {
          "en": "constant (number), linearCoeff (number), ... up to cubicCoeff (optional)",
          "cn": "常数项，线性系数项，... 最多到三次项（可选）",
          "ja": "定数項、1次係数項、... 最大3次係数（オプション）"
        }
      },
      {
        "title": "qr",
        "call": "qr([[1,2],[3,4]])",
        "result": "{\n  \"Q\": [\n    [\n      0.316227766016838,\n      0.9486832980505138\n    ],\n    [\n      0.9486832980505138,\n      -0.316227766016838\n    ]\n  ],\n  \"R\": [\n    [\n      3.162277660168379,\n      4.427188724235731\n    ],\n    [\n      0,\n      0.6324555320336751\n    ]\n  ]\n}",
        "definition": {
          "en": "Perform the Matrix QR decomposition.",
          "cn": "对矩阵执行 QR 分解。",
          "ja": "行列のQR分解を行います。"
        },
        "parameterDefinitions": {
          "en": "A (Array|Matrix)",
          "cn": "A（数组或矩阵）",
          "ja": "A（配列または行列）"
        }
      },
      {
        "title": "rationalize",
        "call": "rationalize('1/(x+1)')",
        "result": "{\n  \"mathjs\": \"OperatorNode\",\n  \"op\": \"/\",\n  \"fn\": \"divide\",\n  \"args\": [\n    {\n      \"mathjs\": \"ConstantNode\",\n      \"value\": 1\n    },\n    {\n      \"mathjs\": \"OperatorNode\",\n      \"op\": \"+\",\n      \"fn\": \"add\",\n      \"args\": [\n        {\n          \"mathjs\": \"SymbolNode\",\n          \"name\": \"x\"\n        },\n        {\n          \"mathjs\": \"ConstantNode\",\n          \"value\": 1\n        }\n      ],\n      \"implicit\": false,\n      \"isPercentage\": false\n    }\n  ],\n  \"implicit\": false,\n  \"isPercentage\": false\n}",
        "definition": {
          "en": "Transform a rationalizable expression into a rational fraction.",
          "cn": "将可有理化的表达式转换为有理分式。",
          "ja": "有理化可能な式を有理分数形に変換します。"
        },
        "parameterDefinitions": {
          "en": "expr (string|Node)",
          "cn": "表达式（字符串或节点）",
          "ja": "式（文字列またはNode）"
        }
      },
      {
        "title": "resolve",
        "call": "resolve('x + y', {x:2, y:3})",
        "result": "{\n  \"mathjs\": \"OperatorNode\",\n  \"op\": \"+\",\n  \"fn\": \"add\",\n  \"args\": [\n    {\n      \"mathjs\": \"ConstantNode\",\n      \"value\": 2\n    },\n    {\n      \"mathjs\": \"ConstantNode\",\n      \"value\": 3\n    }\n  ],\n  \"implicit\": false,\n  \"isPercentage\": false\n}",
        "definition": {
          "en": "Replace variable nodes with their values in the given scope.",
          "cn": "用给定作用域中的值替换表达式中的变量。",
          "ja": "指定されたスコープ内の値で変数を置き換えます。"
        },
        "parameterDefinitions": {
          "en": "expr (string|Node), scope (object)",
          "cn": "表达式（字符串或节点），作用域（对象）",
          "ja": "式（文字列またはNode）、スコープ（オブジェクト）"
        }
      },
      {
        "title": "schur",
        "call": "schur([[1,2],[3,4]])",
        "result": "{\n  \"U\": [\n    [\n      0.41597355791928425,\n      -0.9093767091321243\n    ],\n    [\n      0.9093767091321244,\n      0.41597355791928414\n    ]\n  ],\n  \"T\": [\n    [\n      5.37228132326902,\n      -1.0000000000000002\n    ],\n    [\n      5.147016547482756e-118,\n      -0.37228132326901375\n    ]\n  ]\n}",
        "definition": {
          "en": "Compute the real Schur decomposition A = U T U’ for a real matrix A.",
          "cn": "对实数矩阵 A 执行施尔分解 A = U T U’。",
          "ja": "実数行列 A に対してシュール分解 A = U T U’ を求めます。"
        },
        "parameterDefinitions": {
          "en": "A (Array|Matrix)",
          "cn": "A（数组或矩阵）",
          "ja": "A（配列または行列）"
        }
      },
      {
        "title": "simplify",
        "call": "simplify('2x + 3x')",
        "result": "{\n  \"mathjs\": \"OperatorNode\",\n  \"op\": \"*\",\n  \"fn\": \"multiply\",\n  \"args\": [\n    {\n      \"mathjs\": \"ConstantNode\",\n      \"value\": 5\n    },\n    {\n      \"mathjs\": \"SymbolNode\",\n      \"name\": \"x\"\n    }\n  ],\n  \"implicit\": false,\n  \"isPercentage\": false\n}",
        "definition": {
          "en": "Simplify an expression tree (combine like terms, etc.).",
          "cn": "简化表达式解析树（合并同类项等）。",
          "ja": "式のパースツリーを簡略化します（同類項をまとめるなど）。"
        },
        "parameterDefinitions": {
          "en": "expr (string|Node)",
          "cn": "表达式（字符串或节点）",
          "ja": "式（文字列またはNode）"
        }
      },
      {
        "title": "simplifyConstant",
        "call": "simplifyConstant('2+3')",
        "result": "{\n  \"mathjs\": \"ConstantNode\",\n  \"value\": 5\n}",
        "definition": {
          "en": "Replace constant subexpressions with their computed values.",
          "cn": "对表达式中的常量子表达式进行计算替换。",
          "ja": "式中の定数部分を計算して置き換えます。"
        },
        "parameterDefinitions": {
          "en": "expr (string|Node)",
          "cn": "表达式（字符串或节点）",
          "ja": "式（文字列またはNode）"
        }
      },
      {
        "title": "simplifyCore",
        "call": "simplifyCore('x+x')",
        "result": "{\n  \"mathjs\": \"OperatorNode\",\n  \"op\": \"+\",\n  \"fn\": \"add\",\n  \"args\": [\n    {\n      \"mathjs\": \"SymbolNode\",\n      \"name\": \"x\"\n    },\n    {\n      \"mathjs\": \"SymbolNode\",\n      \"name\": \"x\"\n    }\n  ],\n  \"implicit\": false,\n  \"isPercentage\": false\n}",
        "definition": {
          "en": "Perform a single-pass simplification for performance-critical cases.",
          "cn": "单次传递（one-pass）简化表达式，多用于性能敏感场景。",
          "ja": "パフォーマンスが重要な場合に単一パスで簡単化を行います。"
        },
        "parameterDefinitions": {
          "en": "expr (string|Node)",
          "cn": "表达式（字符串或节点）",
          "ja": "式（文字列またはNode）"
        }
      },
      {
        "title": "slu",
        "call": "slu([[1,2],[3,4]], 'natural', 1)",
        "result": "Error: Unexpected type of argument in function slu (expected: SparseMatrix, actual: Array, index: 0)",
        "definition": {
          "en": "Compute the sparse LU decomposition with full pivoting.",
          "cn": "以完全主元方式计算稀疏 LU 分解。",
          "ja": "完全ピボットを用いて疎LU分解を行います。"
        },
        "parameterDefinitions": {
          "en": "A (Array|Matrix), order (string), threshold (number)",
          "cn": "A（数组或矩阵），分解顺序（字符串），阈值（数字）",
          "ja": "A（配列または行列）、分解順序（文字列）、しきい値（数値）"
        }
      },
      {
        "title": "sylvester",
        "call": "sylvester(A, B, C)",
        "result": "Error: A is not defined",
        "definition": {
          "en": "Solve the real-valued Sylvester equation AX + XB = C for X.",
          "cn": "求解实数Sylvester方程 AX + XB = C。",
          "ja": "実数Sylvester方程式 AX + XB = C を解きます。"
        },
        "parameterDefinitions": {
          "en": "A (Array|Matrix), B (Array|Matrix), C (Array|Matrix)",
          "cn": "A（数组或矩阵），B（数组或矩阵），C（数组或矩阵）",
          "ja": "A（配列または行列）、B（配列または行列）、C（配列または行列）"
        }
      },
      {
        "title": "symbolicEqual",
        "call": "symbolicEqual('x+x', '2x')",
        "result": "true",
        "definition": {
          "en": "Check if two expressions are symbolically equivalent.",
          "cn": "检测两个表达式在符号意义上是否相等。",
          "ja": "2つの式が記号的に等しいかどうか判定します。"
        },
        "parameterDefinitions": {
          "en": "expr1 (string|Node), expr2 (string|Node)",
          "cn": "表达式1（字符串或节点），表达式2（字符串或节点）",
          "ja": "式1（文字列またはNode）、式2（文字列またはNode）"
        }
      },
      {
        "title": "usolve",
        "call": "usolve([[1,2],[0,1]], [3,4])",
        "result": "[\n  [\n    -5\n  ],\n  [\n    4\n  ]\n]",
        "definition": {
          "en": "Find one solution of a linear system by backward substitution.",
          "cn": "使用回代法求解线性方程组的一个解。",
          "ja": "後退代入法で線形方程式系の単一解を求めます。"
        },
        "parameterDefinitions": {
          "en": "U (Array|Matrix), b (Array|Matrix)",
          "cn": "U（数组或矩阵），b（数组或矩阵）",
          "ja": "U（配列または行列）、b（配列または行列）"
        }
      },
      {
        "title": "usolveAll",
        "call": "usolveAll([[1,2],[0,1]], [3,4])",
        "result": "[\n  [\n    [\n      -5\n    ],\n    [\n      4\n    ]\n  ]\n]",
        "definition": {
          "en": "Find all solutions of a linear system by backward substitution.",
          "cn": "使用回代法求解线性方程组的所有解。",
          "ja": "後退代入法で線形方程式系のすべての解を求めます。"
        },
        "parameterDefinitions": {
          "en": "U (Array|Matrix), b (Array|Matrix)",
          "cn": "U（数组或矩阵），b（数组或矩阵）",
          "ja": "U（配列または行列）、b（配列または行列）"
        }
      }
    ]
  },
  {
    "category": "Arithmetic functions",
    "functions": [
      {
        "title": "abs",
        "call": "abs(-3.2)",
        "result": "3.2",
        "definition": {
          "en": "Compute the absolute value of a number.",
          "cn": "计算一个数的绝对值。",
          "ja": "数値の絶対値を求めます。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex|Array|Matrix)",
          "cn": "x（数字、复数、数组或矩阵）",
          "ja": "x（数値、複素数、配列または行列）"
        }
      },
      {
        "title": "add",
        "call": "add(2, 3)",
        "result": "5",
        "definition": {
          "en": "Add two or more values (x + y).",
          "cn": "将两个或更多数值相加（x + y）。",
          "ja": "2つ以上の値を加算します（x + y）。"
        },
        "parameterDefinitions": {
          "en": "x, y, ... (number|Array|Matrix)",
          "cn": "x、y、…（数字、数组或矩阵）",
          "ja": "x、y、…（数値、配列または行列）"
        }
      },
      {
        "title": "cbrt",
        "call": "cbrt(8)",
        "result": "2",
        "definition": {
          "en": "Calculate the cubic root of a value. Optionally compute all roots.",
          "cn": "计算一个数的立方根，可选地计算所有立方根。",
          "ja": "値の立方根を計算します（全ての根を求めるオプションあり）。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex), allRoots (boolean, optional)",
          "cn": "x（数字或复数），allRoots（布尔，可选）",
          "ja": "x（数値または複素数）、allRoots（ブール、オプション）"
        }
      },
      {
        "title": "ceil",
        "call": "ceil(3.2)",
        "result": "4",
        "definition": {
          "en": "Round a value towards plus infinity (also applies to complex).",
          "cn": "向正无穷方向取整（对于复数则对实部和虚部分别取整）。",
          "ja": "値を正の無限大方向に丸めます（複素数の場合は実部と虚部を個別に処理）。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex|Array|Matrix)",
          "cn": "x（数字、复数、数组或矩阵）",
          "ja": "x（数値、複素数、配列または行列）"
        }
      },
      {
        "title": "cube",
        "call": "cube(3)",
        "result": "27",
        "definition": {
          "en": "Compute the cube of a value (x*x*x).",
          "cn": "计算一个数的立方 (x*x*x)。",
          "ja": "値の立方 (x*x*x) を求めます。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex|Array|Matrix)",
          "cn": "x（数字、复数、数组或矩阵）",
          "ja": "x（数値、複素数、配列または行列）"
        }
      },
      {
        "title": "divide",
        "call": "divide(6, 2)",
        "result": "3",
        "definition": {
          "en": "Divide two values (x / y).",
          "cn": "两个值相除 (x / y)。",
          "ja": "2つの値を除算します (x / y)。"
        },
        "parameterDefinitions": {
          "en": "x (number|Array|Matrix), y (number|Array|Matrix)",
          "cn": "x（数字、数组或矩阵），y（数字、数组或矩阵）",
          "ja": "x（数値、配列または行列）、y（数値、配列または行列）"
        }
      },
      {
        "title": "dotDivide",
        "call": "dotDivide([6,8],[2,4])",
        "result": "[\n  3,\n  2\n]",
        "definition": {
          "en": "Divide two matrices/arrays element wise.",
          "cn": "逐元素地对两个矩阵或数组执行除法。",
          "ja": "2つの行列・配列を要素単位で除算します。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix), y (Array|Matrix)",
          "cn": "x（数组或矩阵），y（数组或矩阵）",
          "ja": "x（配列または行列）、y（配列または行列）"
        }
      },
      {
        "title": "dotMultiply",
        "call": "dotMultiply([2,3],[4,5])",
        "result": "[\n  8,\n  15\n]",
        "definition": {
          "en": "Multiply two matrices/arrays element wise.",
          "cn": "逐元素地对两个矩阵或数组执行乘法。",
          "ja": "2つの行列・配列を要素単位で乗算します。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix), y (Array|Matrix)",
          "cn": "x（数组或矩阵），y（数组或矩阵）",
          "ja": "x（配列または行列）、y（配列または行列）"
        }
      },
      {
        "title": "dotPow",
        "call": "dotPow([2,3],[2,3])",
        "result": "[\n  4,\n  27\n]",
        "definition": {
          "en": "Raise x to the power of y element wise (x^y).",
          "cn": "逐元素地对 x^y 求幂。",
          "ja": "x^y を要素単位で計算します。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix), y (Array|Matrix)",
          "cn": "x（数组或矩阵），y（数组或矩阵）",
          "ja": "x（配列または行列）、y（配列または行列）"
        }
      },
      {
        "title": "exp",
        "call": "exp(1)",
        "result": "2.718281828459045",
        "definition": {
          "en": "Compute the exponential of a value.",
          "cn": "计算 e^x。",
          "ja": "値の指数関数 e^x を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex|Array|Matrix)",
          "cn": "x（数字、复数、数组或矩阵）",
          "ja": "x（数値、複素数、配列または行列）"
        }
      },
      {
        "title": "expm1",
        "call": "expm1(1)",
        "result": "1.718281828459045",
        "definition": {
          "en": "Compute (e^x - 1).",
          "cn": "计算 e^x - 1。",
          "ja": "e^x - 1 を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex)",
          "cn": "x（数字或复数）",
          "ja": "x（数値または複素数）"
        }
      },
      {
        "title": "fix",
        "call": "fix(3.7)",
        "result": "3",
        "definition": {
          "en": "Round a value towards zero.",
          "cn": "向零方向取整（截断）。",
          "ja": "値を0方向に丸めます（切り捨て）。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex|Array|Matrix)",
          "cn": "x（数字、复数、数组或矩阵）",
          "ja": "x（数値、複素数、配列または行列）"
        }
      },
      {
        "title": "floor",
        "call": "floor(3.7)",
        "result": "3",
        "definition": {
          "en": "Round a value towards minus infinity.",
          "cn": "向负无穷方向取整。",
          "ja": "値を負の無限大方向に丸めます。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex|Array|Matrix)",
          "cn": "x（数字、复数、数组或矩阵）",
          "ja": "x（数値、複素数、配列または行列）"
        }
      },
      {
        "title": "gcd",
        "call": "gcd(8, 12)",
        "result": "4",
        "definition": {
          "en": "Compute the greatest common divisor of two or more values.",
          "cn": "求两个或更多数的最大公约数。",
          "ja": "2つ以上の数の最大公約数を求めます。"
        },
        "parameterDefinitions": {
          "en": "a, b, ... (number|BigNumber)",
          "cn": "a, b, ...（数字或大数）",
          "ja": "a, b, ...（数値またはBigNumber）"
        }
      },
      {
        "title": "hypot",
        "call": "hypot(3, 4)",
        "result": "5",
        "definition": {
          "en": "Compute the square root of the sum of squares of provided values.",
          "cn": "计算多个数的平方和的平方根（如勾股定理）。",
          "ja": "与えられた値の2乗和の平方根を求めます。"
        },
        "parameterDefinitions": {
          "en": "a, b, ... (number|BigNumber)",
          "cn": "a, b, …（数字或大数）",
          "ja": "a, b, …（数値またはBigNumber）"
        }
      },
      {
        "title": "invmod",
        "call": "invmod(3, 11)",
        "result": "4",
        "definition": {
          "en": "Compute the modular multiplicative inverse of a modulo b.",
          "cn": "计算 a 在模 b 意义下的乘法逆元。",
          "ja": "a の b に対する（乗法的）モジュラ逆数を求めます。"
        },
        "parameterDefinitions": {
          "en": "a, b (number|BigNumber)",
          "cn": "a, b（数字或大数）",
          "ja": "a, b（数値またはBigNumber）"
        }
      },
      {
        "title": "lcm",
        "call": "lcm(4, 6)",
        "result": "12",
        "definition": {
          "en": "Compute the least common multiple of two or more values.",
          "cn": "求两个或更多数的最小公倍数。",
          "ja": "2つ以上の数の最小公倍数を求めます。"
        },
        "parameterDefinitions": {
          "en": "a, b, ... (number|BigNumber)",
          "cn": "a, b, ...（数字或大数）",
          "ja": "a, b, ...（数値またはBigNumber）"
        }
      },
      {
        "title": "log",
        "call": "log(100, 10)",
        "result": "2",
        "definition": {
          "en": "Compute the logarithm of a value (custom base optional).",
          "cn": "计算对数（可指定底）。",
          "ja": "値の対数を計算します（任意の底を指定可能）。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex), base (number|Complex, optional)",
          "cn": "x（数字或复数），base（可选，数字或复数）",
          "ja": "x（数値または複素数）、base（オプション、数値または複素数）"
        }
      },
      {
        "title": "log10",
        "call": "log10(100)",
        "result": "2",
        "definition": {
          "en": "Compute the 10-base logarithm of a value.",
          "cn": "计算一个数的 10 进制对数。",
          "ja": "値の10進対数を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex)",
          "cn": "x（数字或复数）",
          "ja": "x（数値または複素数）"
        }
      },
      {
        "title": "log1p",
        "call": "log1p(1)",
        "result": "0.6931471805599453",
        "definition": {
          "en": "Compute ln(1 + x).",
          "cn": "计算 ln(1 + x)。",
          "ja": "ln(1 + x) を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex)",
          "cn": "x（数字或复数）",
          "ja": "x（数値または複素数）"
        }
      },
      {
        "title": "log2",
        "call": "log2(8)",
        "result": "3",
        "definition": {
          "en": "Compute the base-2 logarithm of a value.",
          "cn": "计算一个数的 2 进制对数。",
          "ja": "値の2進対数を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex)",
          "cn": "x（数字或复数）",
          "ja": "x（数値または複素数）"
        }
      },
      {
        "title": "mod",
        "call": "mod(8,3)",
        "result": "2",
        "definition": {
          "en": "Compute x mod y, the remainder of x / y.",
          "cn": "计算 x ÷ y 的余数（x mod y）。",
          "ja": "x÷y の余り (x mod y) を求めます。"
        },
        "parameterDefinitions": {
          "en": "x, y (number|BigNumber)",
          "cn": "x, y（数字或大数）",
          "ja": "x, y（数値またはBigNumber）"
        }
      },
      {
        "title": "multiply",
        "call": "multiply(2, 3)",
        "result": "6",
        "definition": {
          "en": "Multiply two or more values (x * y).",
          "cn": "将两个或更多数值相乘（x * y）。",
          "ja": "2つ以上の値を乗算します（x * y）。"
        },
        "parameterDefinitions": {
          "en": "x, y, ... (number|Array|Matrix)",
          "cn": "x、y、…（数字、数组或矩阵）",
          "ja": "x、y、…（数値、配列または行列）"
        }
      },
      {
        "title": "norm",
        "call": "norm([3,4])",
        "result": "5",
        "definition": {
          "en": "Compute the norm of a number, vector, or matrix (p optional).",
          "cn": "计算数字、向量或矩阵的范数，可选 p。",
          "ja": "数値、ベクトル、行列のノルムを計算します（p は任意）。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix), p (number|string, optional)",
          "cn": "x（数组或矩阵），p（数字或字符串，可选）",
          "ja": "x（配列または行列）、p（数値または文字列、オプション）"
        }
      },
      {
        "title": "nthRoot",
        "call": "nthRoot(16, 4)",
        "result": "2",
        "definition": {
          "en": "Compute the nth root of a value (principal root).",
          "cn": "计算一个数的 n 次方根（主根）。",
          "ja": "値のn乗根（主値）を計算します。"
        },
        "parameterDefinitions": {
          "en": "a (number|BigNumber|Complex), root (number, optional)",
          "cn": "a（数字、大数或复数），root（可选，数字）",
          "ja": "a（数値、BigNumberまたは複素数）、root（オプション、数値）"
        }
      },
      {
        "title": "nthRoots",
        "call": "nthRoots(1,3)",
        "result": "[\n  {\n    \"mathjs\": \"Complex\",\n    \"re\": 1,\n    \"im\": 0\n  },\n  {\n    \"mathjs\": \"Complex\",\n    \"re\": -0.4999999999999998,\n    \"im\": 0.8660254037844387\n  },\n  {\n    \"mathjs\": \"Complex\",\n    \"re\": -0.5000000000000004,\n    \"im\": -0.8660254037844384\n  }\n]",
        "definition": {
          "en": "Compute all nth roots of a value, including complex ones.",
          "cn": "计算一个数的所有 n 次方根，可能包含复数解。",
          "ja": "値のn乗根をすべて求めます（複素解を含む）。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex), root (number)",
          "cn": "x（数字或复数），root（数字）",
          "ja": "x（数値または複素数）、root（数値）"
        }
      },
      {
        "title": "pow",
        "call": "pow(2, 3)",
        "result": "8",
        "definition": {
          "en": "Compute x raised to the power of y (x^y).",
          "cn": "计算 x^y。",
          "ja": "x^y を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex|Array|Matrix), y (number|Complex|Array|Matrix)",
          "cn": "x（数字、复数、数组或矩阵），y（数字、复数、数组或矩阵）",
          "ja": "x（数値、複素数、配列または行列）、y（数値、複素数、配列または行列）"
        }
      },
      {
        "title": "round",
        "call": "round(3.14159, 2)",
        "result": "3.14",
        "definition": {
          "en": "Round a value to the nearest value with optional decimals.",
          "cn": "四舍五入到指定的小数位数。",
          "ja": "小数点以下n桁まで四捨五入します。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex|Array|Matrix), n (number, optional)",
          "cn": "x（数字、复数、数组或矩阵），n（可选，数字）",
          "ja": "x（数値、複素数、配列または行列）、n（オプション、数値）"
        }
      },
      {
        "title": "sign",
        "call": "sign(-3)",
        "result": "-1",
        "definition": {
          "en": "Compute the sign of a value (-1, 0, +1).",
          "cn": "计算数值的符号（-1、0 或 1）。",
          "ja": "値の符号（-1、0、+1）を求めます。"
        },
        "parameterDefinitions": {
          "en": "x (number|BigNumber|Complex)",
          "cn": "x（数字、大数或复数）",
          "ja": "x（数値、BigNumberまたは複素数）"
        }
      },
      {
        "title": "sqrt",
        "call": "sqrt(9)",
        "result": "3",
        "definition": {
          "en": "Compute the square root of a value.",
          "cn": "计算一个数的平方根。",
          "ja": "値の平方根を求めます。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex|Array|Matrix)",
          "cn": "x（数字、复数、数组或矩阵）",
          "ja": "x（数値、複素数、配列または行列）"
        }
      },
      {
        "title": "square",
        "call": "square(3)",
        "result": "9",
        "definition": {
          "en": "Compute the square of a value (x*x).",
          "cn": "计算一个数的平方 (x*x)。",
          "ja": "値の平方 (x*x) を求めます。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex|Array|Matrix)",
          "cn": "x（数字、复数、数组或矩阵）",
          "ja": "x（数値、複素数、配列または行列）"
        }
      },
      {
        "title": "subtract",
        "call": "subtract(8, 3)",
        "result": "5",
        "definition": {
          "en": "Subtract two values (x - y).",
          "cn": "两个数相减 (x - y)。",
          "ja": "2つの値の差を求めます (x - y)。"
        },
        "parameterDefinitions": {
          "en": "x, y (number|Array|Matrix)",
          "cn": "x, y（数字、数组或矩阵）",
          "ja": "x, y（数値、配列または行列）"
        }
      },
      {
        "title": "unaryMinus",
        "call": "unaryMinus(3)",
        "result": "-3",
        "definition": {
          "en": "Apply unary minus operation (negate the value).",
          "cn": "对值执行一元负操作（取反）。",
          "ja": "単項マイナス演算子を適用し、値を符号反転します。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex|Array|Matrix)",
          "cn": "x（数字、复数、数组或矩阵）",
          "ja": "x（数値、複素数、配列または行列）"
        }
      },
      {
        "title": "unaryPlus",
        "call": "unaryPlus(-3)",
        "result": "-3",
        "definition": {
          "en": "Apply unary plus operation (usually no effect).",
          "cn": "对值执行一元加操作（通常无实际变化）。",
          "ja": "単項プラス演算子を適用します（通常変化はありません）。"
        },
        "parameterDefinitions": {
          "en": "x (number|Complex|Array|Matrix)",
          "cn": "x（数字、复数、数组或矩阵）",
          "ja": "x（数値、複素数、配列または行列）"
        }
      },
      {
        "title": "xgcd",
        "call": "xgcd(8, 12)",
        "result": "{\n  \"mathjs\": \"DenseMatrix\",\n  \"data\": [\n    4,\n    -1,\n    1\n  ],\n  \"size\": [\n    3\n  ]\n}",
        "definition": {
          "en": "Compute the extended greatest common divisor of two values.",
          "cn": "计算两个数的扩展最大公约数。",
          "ja": "2つの値の拡張ユークリッド互除法を求めます。"
        },
        "parameterDefinitions": {
          "en": "a, b (number|BigNumber)",
          "cn": "a, b（数字或大数）",
          "ja": "a, b（数値またはBigNumber）"
        }
      }
    ]
  },
  {
    "category": "Bitwise functions",
    "functions": [
      {
        "title": "bitAnd",
        "call": "bitAnd(5, 3)",
        "result": "1",
        "definition": {
          "en": "Apply bitwise AND to two values (x & y).",
          "cn": "对两个值进行按位与 (x & y)。",
          "ja": "2つの値に対してビットANDを実行します (x & y)。"
        },
        "parameterDefinitions": {
          "en": "x, y (number|BigNumber)",
          "cn": "x, y（数字或大数）",
          "ja": "x, y（数値またはBigNumber）"
        }
      },
      {
        "title": "bitNot",
        "call": "bitNot(5)",
        "result": "-6",
        "definition": {
          "en": "Apply bitwise NOT to a value (~x).",
          "cn": "对值执行按位取反 (~x)。",
          "ja": "値に対してビットNOT演算を行います (~x)。"
        },
        "parameterDefinitions": {
          "en": "x (number|BigNumber)",
          "cn": "x（数字或大数）",
          "ja": "x（数値またはBigNumber）"
        }
      },
      {
        "title": "bitOr",
        "call": "bitOr(5, 3)",
        "result": "7",
        "definition": {
          "en": "Apply bitwise OR to two values (x | y).",
          "cn": "对两个值进行按位或 (x | y)。",
          "ja": "2つの値に対してビットORを実行します (x | y)。"
        },
        "parameterDefinitions": {
          "en": "x, y (number|BigNumber)",
          "cn": "x, y（数字或大数）",
          "ja": "x, y（数値またはBigNumber）"
        }
      },
      {
        "title": "bitXor",
        "call": "bitXor(5, 3)",
        "result": "6",
        "definition": {
          "en": "Apply bitwise XOR to two values (x ^ y).",
          "cn": "对两个值进行按位异或 (x ^ y)。",
          "ja": "2つの値に対してビットXORを実行します (x ^ y)。"
        },
        "parameterDefinitions": {
          "en": "x, y (number|BigNumber)",
          "cn": "x, y（数字或大数）",
          "ja": "x, y（数値またはBigNumber）"
        }
      },
      {
        "title": "leftShift",
        "call": "leftShift(5, 1)",
        "result": "10",
        "definition": {
          "en": "Shift bits of x left by y (x << y).",
          "cn": "将 x 的二进制位左移 y 位 (x << y)。",
          "ja": "x のビットを y ビット左シフトします (x << y)。"
        },
        "parameterDefinitions": {
          "en": "x, y (number|BigNumber)",
          "cn": "x, y（数字或大数）",
          "ja": "x, y（数値またはBigNumber）"
        }
      },
      {
        "title": "rightArithShift",
        "call": "rightArithShift(5, 1)",
        "result": "2",
        "definition": {
          "en": "Arithmetic right shift bits of x by y (x >> y).",
          "cn": "对 x 的二进制位进行算术右移 (x >> y)。",
          "ja": "x のビットを算術的に右シフトします (x >> y)。"
        },
        "parameterDefinitions": {
          "en": "x, y (number|BigNumber)",
          "cn": "x, y（数字或大数）",
          "ja": "x, y（数値またはBigNumber）"
        }
      },
      {
        "title": "rightLogShift",
        "call": "rightLogShift(5, 1)",
        "result": "2",
        "definition": {
          "en": "Logical right shift bits of x by y (x >>> y).",
          "cn": "对 x 的二进制位进行逻辑右移 (x >>> y)。",
          "ja": "x のビットを論理的に右シフトします (x >>> y)。"
        },
        "parameterDefinitions": {
          "en": "x, y (number|BigNumber)",
          "cn": "x, y（数字或大数）",
          "ja": "x, y（数値またはBigNumber）"
        }
      }
    ]
  },
  {
    "category": "Combinatorics functions",
    "functions": [
      {
        "title": "bellNumbers",
        "call": "bellNumbers(3)",
        "result": "5",
        "definition": {
          "en": "Count the ways to partition a set of n distinct elements.",
          "cn": "计算 n 个互异元素的所有划分方式数量。",
          "ja": "n 個の異なる要素を分割する方法の数を数えます。"
        },
        "parameterDefinitions": {
          "en": "n (number)",
          "cn": "n（数字）",
          "ja": "n（数値）"
        }
      },
      {
        "title": "catalan",
        "call": "catalan(5)",
        "result": "42",
        "definition": {
          "en": "Compute the Catalan number for n, enumerating various combinatorial structures.",
          "cn": "计算 n 的卡塔兰数，对应多种组合结构计数。",
          "ja": "様々な組合せ構造を数え上げる n のカタラン数を求めます。"
        },
        "parameterDefinitions": {
          "en": "n (number)",
          "cn": "n（数字）",
          "ja": "n（数値）"
        }
      },
      {
        "title": "composition",
        "call": "composition(5, 3)",
        "result": "6",
        "definition": {
          "en": "Compute the number of compositions of n into k parts.",
          "cn": "计算将 n 拆分成 k 部分的组合数。",
          "ja": "n を k 個の部分に分割する方法の数を求めます。"
        },
        "parameterDefinitions": {
          "en": "n, k (number)",
          "cn": "n, k（数字）",
          "ja": "n, k（数値）"
        }
      },
      {
        "title": "stirlingS2",
        "call": "stirlingS2(5, 3)",
        "result": "25",
        "definition": {
          "en": "Count the ways to partition n labeled objects into k nonempty unlabeled subsets.",
          "cn": "计算将 n 个有标签的元素划分为 k 个非空子集的方式（第二类斯特林数）。",
          "ja": "n 個のラベル付き要素を k 個の非空ラベルなし部分集合に分割する方法の数（第2種スターリング数）。"
        },
        "parameterDefinitions": {
          "en": "n, k (number)",
          "cn": "n, k（数字）",
          "ja": "n, k（数値）"
        }
      }
    ]
  },
  {
    "category": "Complex functions",
    "functions": [
      {
        "title": "arg",
        "call": "arg('2 + 2i')",
        "result": "Error: Cannot convert \"2 + 2i\" to a number",
        "definition": {
          "en": "Compute the argument (angle) of a complex value.",
          "cn": "计算复数的幅角（相位）。",
          "ja": "複素数の偏角を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (Complex|number)",
          "cn": "x（复数或数字）",
          "ja": "x（複素数または数値）"
        }
      },
      {
        "title": "conj",
        "call": "conj('2 + 2i')",
        "result": "Error: Cannot convert \"2 + 2i\" to a number",
        "definition": {
          "en": "Compute the complex conjugate of a complex value.",
          "cn": "计算复数的共轭。",
          "ja": "複素数の共役を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (Complex|number)",
          "cn": "x（复数或数字）",
          "ja": "x（複素数または数値）"
        }
      },
      {
        "title": "im",
        "call": "im('2 + 3i')",
        "result": "Error: Cannot convert \"2 + 3i\" to a number",
        "definition": {
          "en": "Get the imaginary part of a complex number.",
          "cn": "获取复数的虚部。",
          "ja": "複素数の虚部を取得します。"
        },
        "parameterDefinitions": {
          "en": "x (Complex|number)",
          "cn": "x（复数或数字）",
          "ja": "x（複素数または数値）"
        }
      },
      {
        "title": "re",
        "call": "re('2 + 3i')",
        "result": "Error: Cannot convert \"2 + 3i\" to a number",
        "definition": {
          "en": "Get the real part of a complex number.",
          "cn": "获取复数的实部。",
          "ja": "複素数の実部を取得します。"
        },
        "parameterDefinitions": {
          "en": "x (Complex|number)",
          "cn": "x（复数或数字）",
          "ja": "x（複素数または数値）"
        }
      }
    ]
  },
  {
    "category": "Geometry functions",
    "functions": [
      {
        "title": "distance",
        "call": "distance([0,0],[3,4])",
        "result": "5",
        "definition": {
          "en": "Calculate the Euclidean distance between two points in N-D space.",
          "cn": "计算 N 维空间中两点之间的欧几里得距离。",
          "ja": "N次元空間における2点間のユークリッド距離を求めます。"
        },
        "parameterDefinitions": {
          "en": "point1 (Array), point2 (Array)",
          "cn": "point1（数组），point2（数组）",
          "ja": "point1（配列）、point2（配列）"
        }
      },
      {
        "title": "intersect",
        "call": "intersect([0,0],[2,2],[0,2],[2,0])",
        "result": "[\n  1,\n  1\n]",
        "definition": {
          "en": "Find the intersection of two lines (2D/3D) or a line and a plane (3D).",
          "cn": "求两条线（二维/三维）或一条线与一个平面（三维）的交点。",
          "ja": "2次元/3次元における2直線の交点、または直線と平面の交点を求めます。"
        },
        "parameterDefinitions": {
          "en": "endPoint1Line1, endPoint2Line1, endPoint1Line2, endPoint2Line2, ...",
          "cn": "直线1的起点与终点，直线2的起点与终点，...",
          "ja": "線分1の始点と終点、線分2の始点と終点、..."
        }
      }
    ]
  },
  {
    "category": "Logical functions",
    "functions": [
      {
        "title": "and",
        "call": "and(true, false)",
        "result": "false",
        "definition": {
          "en": "Perform a logical AND of two values.",
          "cn": "执行逻辑与运算。",
          "ja": "2つの値の論理積を計算します。"
        },
        "parameterDefinitions": {
          "en": "x, y (boolean|number)",
          "cn": "x, y（布尔值或数字）",
          "ja": "x, y（真偽値または数値）"
        }
      },
      {
        "title": "not",
        "call": "not(true)",
        "result": "false",
        "definition": {
          "en": "Perform a logical NOT on a value.",
          "cn": "执行逻辑非运算。",
          "ja": "値の論理否定を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (boolean|number)",
          "cn": "x（布尔值或数字）",
          "ja": "x（真偽値または数値）"
        }
      },
      {
        "title": "or",
        "call": "or(true, false)",
        "result": "true",
        "definition": {
          "en": "Perform a logical OR of two values.",
          "cn": "执行逻辑或运算。",
          "ja": "2つの値の論理和を計算します。"
        },
        "parameterDefinitions": {
          "en": "x, y (boolean|number)",
          "cn": "x, y（布尔值或数字）",
          "ja": "x, y（真偽値または数値）"
        }
      },
      {
        "title": "xor",
        "call": "xor(1, 0)",
        "result": "true",
        "definition": {
          "en": "Perform a logical exclusive OR.",
          "cn": "执行逻辑异或运算。",
          "ja": "排他的論理和を計算します。"
        },
        "parameterDefinitions": {
          "en": "x, y (boolean|number)",
          "cn": "x, y（布尔值或数字）",
          "ja": "x, y（真偽値または数値）"
        }
      }
    ]
  },
  {
    "category": "Matrix functions",
    "functions": [
      {
        "title": "apply",
        "call": "apply([[1,2],[3,4]], 1, val => val * 2)",
        "result": "[\n  null,\n  null\n]",
        "definition": {
          "en": "Apply a callback function over a matrix/array along a specified axis.",
          "cn": "沿指定轴对矩阵或数组应用函数。",
          "ja": "指定した軸に沿ってコールバック関数を適用します。"
        },
        "parameterDefinitions": {
          "en": "A (Array|Matrix), dim (number), callback (function)",
          "cn": "A（数组或矩阵），dim（数字），callback（函数）",
          "ja": "A（配列または行列）、dim（数値）、callback（関数）"
        }
      },
      {
        "title": "column",
        "call": "column([[1,2],[3,4]], 0)",
        "result": "[\n  [\n    1\n  ],\n  [\n    3\n  ]\n]",
        "definition": {
          "en": "Return a specific column from a Matrix.",
          "cn": "从矩阵中返回指定列。",
          "ja": "行列から特定の列を返します。"
        },
        "parameterDefinitions": {
          "en": "value (Matrix|Array), index (number)",
          "cn": "value（矩阵或数组），index（数字）",
          "ja": "value（行列または配列）、index（数値）"
        }
      },
      {
        "title": "concat",
        "call": "concat([1,2], [3,4], [5,6])",
        "result": "[\n  1,\n  2,\n  3,\n  4,\n  5,\n  6\n]",
        "definition": {
          "en": "Concatenate multiple matrices/arrays along a specified dimension.",
          "cn": "沿指定维度拼接多个矩阵/数组。",
          "ja": "指定した次元に沿って複数の行列/配列を連結します。"
        },
        "parameterDefinitions": {
          "en": "a, b, c, ... (Array|Matrix), dim (number, optional)",
          "cn": "a, b, c, ...（数组或矩阵），dim（数字，可选）",
          "ja": "a, b, c, ...（配列または行列）、dim（数値、オプション）"
        }
      },
      {
        "title": "count",
        "call": "count([1,2,3,'hello'])",
        "result": "4",
        "definition": {
          "en": "Count elements in a matrix, array, or string.",
          "cn": "统计矩阵、数组或字符串的元素数量。",
          "ja": "行列、配列、文字列の要素数を数えます。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix|String)",
          "cn": "x（数组、矩阵或字符串）",
          "ja": "x（配列、行列、文字列）"
        }
      },
      {
        "title": "cross",
        "call": "cross([1,2,3], [4,5,6])",
        "result": "[\n  -3,\n  6,\n  -3\n]",
        "definition": {
          "en": "Compute the cross product for two 3D vectors.",
          "cn": "计算两个三维向量的叉积。",
          "ja": "2つの3次元ベクトルのクロス積を計算します。"
        },
        "parameterDefinitions": {
          "en": "x, y (Array|Matrix with length 3)",
          "cn": "x, y（长度为3的数组或矩阵）",
          "ja": "x, y（長さ3の配列または行列）"
        }
      },
      {
        "title": "ctranspose",
        "call": "ctranspose([[1,2],[3,4]])",
        "result": "[\n  [\n    1,\n    3\n  ],\n  [\n    2,\n    4\n  ]\n]",
        "definition": {
          "en": "Transpose and complex conjugate a matrix.",
          "cn": "对矩阵进行转置并取共轭。",
          "ja": "行列を転置し、複素共役を取ります。"
        },
        "parameterDefinitions": {
          "en": "x (Matrix|Array)",
          "cn": "x（矩阵或数组）",
          "ja": "x（行列または配列）"
        }
      },
      {
        "title": "det",
        "call": "det([[1,2],[3,4]])",
        "result": "-2",
        "definition": {
          "en": "Calculate the determinant of a matrix.",
          "cn": "计算矩阵的行列式。",
          "ja": "行列の行列式を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (Matrix|Array)",
          "cn": "x（矩阵或数组）",
          "ja": "x（行列または配列）"
        }
      },
      {
        "title": "diag",
        "call": "diag([1,2,3])",
        "result": "[\n  [\n    1,\n    0,\n    0\n  ],\n  [\n    0,\n    2,\n    0\n  ],\n  [\n    0,\n    0,\n    3\n  ]\n]",
        "definition": {
          "en": "Create a diagonal matrix or retrieve the diagonal of a matrix.",
          "cn": "创建对角矩阵或提取矩阵的对角线。",
          "ja": "対角行列を作成、または行列の対角要素を取り出します。"
        },
        "parameterDefinitions": {
          "en": "X (Array|Matrix)",
          "cn": "X（数组或矩阵）",
          "ja": "X（配列または行列）"
        }
      },
      {
        "title": "diff",
        "call": "diff([1,4,9,16])",
        "result": "[\n  3,\n  5,\n  7\n]",
        "definition": {
          "en": "Compute the difference between successive elements along a given dimension.",
          "cn": "计算指定维度上相邻元素之间的差值。",
          "ja": "指定した次元に沿って、連続する要素の差を計算します。"
        },
        "parameterDefinitions": {
          "en": "arr (Array|Matrix), dim (number, optional)",
          "cn": "arr（数组或矩阵），dim（数字，可选）",
          "ja": "arr（配列または行列）、dim（数値、オプション）"
        }
      },
      {
        "title": "dot",
        "call": "dot([1,2,3],[4,5,6])",
        "result": "32",
        "definition": {
          "en": "Compute the dot product of two vectors.",
          "cn": "计算两个向量的点积。",
          "ja": "2つのベクトルの内積を計算します。"
        },
        "parameterDefinitions": {
          "en": "x, y (Array|Matrix)",
          "cn": "x, y（数组或矩阵）",
          "ja": "x, y（配列または行列）"
        }
      },
      {
        "title": "eigs",
        "call": "eigs([[1,2],[3,4]])",
        "result": "{\n  \"values\": [\n    -0.37228132326901653,\n    5.372281323269014\n  ],\n  \"eigenvectors\": [\n    {\n      \"value\": -0.37228132326901653,\n      \"vector\": [\n        -4.505883335311908,\n        3.091669772938812\n      ]\n    },\n    {\n      \"value\": 5.372281323269014,\n      \"vector\": [\n        0.4438641329939267,\n        0.9703494293791691\n      ]\n    }\n  ]\n}",
        "definition": {
          "en": "Compute eigenvalues and optionally eigenvectors of a square matrix.",
          "cn": "计算方阵的特征值和（可选）特征向量。",
          "ja": "正方行列の固有値と（オプションで）固有ベクトルを計算します。"
        },
        "parameterDefinitions": {
          "en": "x (Matrix|Array), prec (number, optional)",
          "cn": "x（矩阵或数组），prec（数值，可选）",
          "ja": "x（行列または配列）、prec（数値、オプション）"
        }
      },
      {
        "title": "expm",
        "call": "expm([[1,0],[0,1]])",
        "result": "{\n  \"mathjs\": \"DenseMatrix\",\n  \"data\": [\n    [\n      2.7182818284590424,\n      0\n    ],\n    [\n      0,\n      2.7182818284590424\n    ]\n  ],\n  \"size\": [\n    2,\n    2\n  ]\n}",
        "definition": {
          "en": "Compute the matrix exponential e^A.",
          "cn": "计算矩阵的指数 e^A。",
          "ja": "行列の指数 e^A を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (Matrix|Array)",
          "cn": "x（矩阵或数组）",
          "ja": "x（行列または配列）"
        }
      },
      {
        "title": "fft",
        "call": "fft([1,2,3,4])",
        "result": "[\n  {\n    \"mathjs\": \"Complex\",\n    \"re\": 10,\n    \"im\": 0\n  },\n  {\n    \"mathjs\": \"Complex\",\n    \"re\": -2,\n    \"im\": 2\n  },\n  {\n    \"mathjs\": \"Complex\",\n    \"re\": -2,\n    \"im\": 0\n  },\n  {\n    \"mathjs\": \"Complex\",\n    \"re\": -1.9999999999999998,\n    \"im\": -2\n  }\n]",
        "definition": {
          "en": "Compute the N-dimensional Fast Fourier Transform.",
          "cn": "计算 N 维快速傅里叶变换。",
          "ja": "N次元の高速フーリエ変換を計算します。"
        },
        "parameterDefinitions": {
          "en": "arr (Array|Matrix)",
          "cn": "arr（数组或矩阵）",
          "ja": "arr（配列または行列）"
        }
      },
      {
        "title": "filter",
        "call": "filter([1,2,3,4,5], val => val > 2)",
        "result": "[\n  3,\n  4,\n  5\n]",
        "definition": {
          "en": "Filter the items in an array or 1D matrix using a test function.",
          "cn": "使用测试函数过滤数组或一维矩阵。",
          "ja": "テスト関数を使用して配列または1次元行列をフィルタします。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix), test (function)",
          "cn": "x（数组或矩阵），test（函数）",
          "ja": "x（配列または行列）、test（関数）"
        }
      },
      {
        "title": "flatten",
        "call": "flatten([[1,2],[3,4]])",
        "result": "[\n  1,\n  2,\n  3,\n  4\n]",
        "definition": {
          "en": "Flatten a multidimensional matrix into a single dimensional array.",
          "cn": "将多维矩阵或数组展开为一维。",
          "ja": "多次元の行列を一次元にフラット化します。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix)",
          "cn": "x（数组或矩阵）",
          "ja": "x（配列または行列）"
        }
      },
      {
        "title": "forEach",
        "call": "forEach([1,2,3], val => console.log(val))",
        "result": "undefined",
        "definition": {
          "en": "Iterate over elements of a matrix/array and execute a callback.",
          "cn": "遍历矩阵/数组的每个元素并执行回调。",
          "ja": "行列/配列の要素をイテレートし、コールバックを実行します。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix), callback (function)",
          "cn": "x（数组或矩阵），callback（函数）",
          "ja": "x（配列または行列）、callback（関数）"
        }
      },
      {
        "title": "getMatrixDataType",
        "call": "getMatrixDataType([[1,2.2],[3,'hello']])",
        "result": "mixed",
        "definition": {
          "en": "Find the data type of all elements in a matrix/array (e.g., 'number', 'Complex').",
          "cn": "查看矩阵或数组所有元素的数据类型，例如 'number' 或 'Complex'。",
          "ja": "行列または配列のすべての要素のデータ型を返します（例：'number'、'Complex'）。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix)",
          "cn": "x（数组或矩阵）",
          "ja": "x（配列または行列）"
        }
      },
      {
        "title": "identity",
        "call": "identity(3)",
        "result": "{\n  \"mathjs\": \"DenseMatrix\",\n  \"data\": [\n    [\n      1,\n      0,\n      0\n    ],\n    [\n      0,\n      1,\n      0\n    ],\n    [\n      0,\n      0,\n      1\n    ]\n  ],\n  \"size\": [\n    3,\n    3\n  ]\n}",
        "definition": {
          "en": "Create an identity matrix of size n x n (or m x n).",
          "cn": "创建 n x n（或 m x n）的单位矩阵。",
          "ja": "n x n（あるいは m x n）の単位行列を作成します。"
        },
        "parameterDefinitions": {
          "en": "n (number) or [m, n] (Array)",
          "cn": "n（数字）或 [m, n]（数组）",
          "ja": "n（数値）または [m, n]（配列）"
        }
      },
      {
        "title": "ifft",
        "call": "ifft([1,2,3,4])",
        "result": "[\n  {\n    \"mathjs\": \"Complex\",\n    \"re\": 2.5,\n    \"im\": 0\n  },\n  {\n    \"mathjs\": \"Complex\",\n    \"re\": -0.5,\n    \"im\": -0.5\n  },\n  {\n    \"mathjs\": \"Complex\",\n    \"re\": -0.5,\n    \"im\": 0\n  },\n  {\n    \"mathjs\": \"Complex\",\n    \"re\": -0.49999999999999994,\n    \"im\": 0.5\n  }\n]",
        "definition": {
          "en": "Compute the N-dimensional inverse Fast Fourier Transform.",
          "cn": "计算 N 维逆快速傅里叶变换。",
          "ja": "N次元の逆高速フーリエ変換を計算します。"
        },
        "parameterDefinitions": {
          "en": "arr (Array|Matrix)",
          "cn": "arr（数组或矩阵）",
          "ja": "arr（配列または行列）"
        }
      },
      {
        "title": "inv",
        "call": "inv([[1,2],[3,4]])",
        "result": "[\n  [\n    -2,\n    1\n  ],\n  [\n    1.5,\n    -0.5\n  ]\n]",
        "definition": {
          "en": "Compute the inverse of a square matrix.",
          "cn": "计算方阵的逆矩阵。",
          "ja": "正方行列の逆行列を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (Matrix|Array)",
          "cn": "x（矩阵或数组）",
          "ja": "x（行列または配列）"
        }
      },
      {
        "title": "kron",
        "call": "kron([[1,1],[0,1]], [[2,0],[0,2]])",
        "result": "[\n  [\n    2,\n    0,\n    2,\n    0\n  ],\n  [\n    0,\n    2,\n    0,\n    2\n  ],\n  [\n    0,\n    0,\n    2,\n    0\n  ],\n  [\n    0,\n    0,\n    0,\n    2\n  ]\n]",
        "definition": {
          "en": "Compute the Kronecker product of two matrices or vectors.",
          "cn": "计算两个矩阵或向量的克罗内克积。",
          "ja": "2つの行列またはベクトルのクロネッカー積を計算します。"
        },
        "parameterDefinitions": {
          "en": "x, y (Matrix|Array)",
          "cn": "x, y（矩阵或数组）",
          "ja": "x, y（行列または配列）"
        }
      },
      {
        "title": "map",
        "call": "map([1,2,3], val => val * val)",
        "result": "[\n  1,\n  4,\n  9\n]",
        "definition": {
          "en": "Create a new array/matrix by applying a callback function to each element.",
          "cn": "通过对每个元素应用回调创建新的数组/矩阵。",
          "ja": "各要素にコールバックを適用して新しい配列/行列を作成します。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix), callback (function)",
          "cn": "x（数组或矩阵），callback（函数）",
          "ja": "x（配列または行列）、callback（関数）"
        }
      },
      {
        "title": "matrixFromColumns",
        "call": "matrixFromColumns([1,4],[2,5],[3,6])",
        "result": "[\n  [\n    1,\n    2,\n    3\n  ],\n  [\n    4,\n    5,\n    6\n  ]\n]",
        "definition": {
          "en": "Create a dense matrix from vectors as individual columns.",
          "cn": "将多个向量作为单独列组合成一个稠密矩阵。",
          "ja": "複数のベクトルを列としてまとめ、密行列を作成します。"
        },
        "parameterDefinitions": {
          "en": "...arr (Array|Matrix)",
          "cn": "...arr（数组或矩阵）",
          "ja": "...arr（配列または行列）"
        }
      },
      {
        "title": "matrixFromFunction",
        "call": "matrixFromFunction([2,3], (i,j) => i + j)",
        "result": "Error: Cannot convert \"0,0undefined\" to a number",
        "definition": {
          "en": "Create a matrix by evaluating a function at each matrix index.",
          "cn": "根据函数对矩阵每个索引进行求值来生成矩阵。",
          "ja": "行列の各インデックスで関数を評価し、行列を生成します。"
        },
        "parameterDefinitions": {
          "en": "size (Array), fn (function)",
          "cn": "size（数组），fn（函数）",
          "ja": "size（配列）、fn（関数）"
        }
      },
      {
        "title": "matrixFromRows",
        "call": "matrixFromRows([1,2,3],[4,5,6])",
        "result": "[\n  [\n    1,\n    2,\n    3\n  ],\n  [\n    4,\n    5,\n    6\n  ]\n]",
        "definition": {
          "en": "Create a dense matrix from vectors as individual rows.",
          "cn": "将多个向量作为单独行组合成一个稠密矩阵。",
          "ja": "複数のベクトルを行としてまとめ、密行列を作成します。"
        },
        "parameterDefinitions": {
          "en": "...arr (Array|Matrix)",
          "cn": "...arr（数组或矩阵）",
          "ja": "...arr（配列または行列）"
        }
      },
      {
        "title": "ones",
        "call": "ones(2, 3)",
        "result": "{\n  \"mathjs\": \"DenseMatrix\",\n  \"data\": [\n    [\n      1,\n      1,\n      1\n    ],\n    [\n      1,\n      1,\n      1\n    ]\n  ],\n  \"size\": [\n    2,\n    3\n  ]\n}",
        "definition": {
          "en": "Create a matrix of ones with given dimensions.",
          "cn": "创建给定维度的全 1 矩阵。",
          "ja": "指定した次元の要素がすべて1の行列を作成します。"
        },
        "parameterDefinitions": {
          "en": "m, n, p... (number)",
          "cn": "m, n, p...（数字）",
          "ja": "m, n, p...（数値）"
        }
      },
      {
        "title": "partitionSelect",
        "call": "partitionSelect([3,1,4,2], 2)",
        "result": "3",
        "definition": {
          "en": "Partition-based selection of an array or 1D matrix (returns k-th smallest).",
          "cn": "基于分区选择法，从数组或一维矩阵返回第 k 小的元素。",
          "ja": "配列または1次元行列から分割選択により第k番目に小さい要素を返します。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix), k (number)",
          "cn": "x（数组或矩阵），k（数字）",
          "ja": "x（配列または行列）、k（数値）"
        }
      },
      {
        "title": "pinv",
        "call": "pinv([[1,2],[2,4]])",
        "result": "[\n  [\n    0.04000000000000001,\n    0.08000000000000002\n  ],\n  [\n    0.08000000000000002,\n    0.16000000000000003\n  ]\n]",
        "definition": {
          "en": "Compute the Moore–Penrose pseudoinverse of a matrix.",
          "cn": "计算矩阵的 Moore–Penrose 伪逆。",
          "ja": "行列のMoore–Penrose擬似逆を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (Matrix|Array)",
          "cn": "x（矩阵或数组）",
          "ja": "x（行列または配列）"
        }
      },
      {
        "title": "range",
        "call": "range(1, 5, 2)",
        "result": "{\n  \"mathjs\": \"DenseMatrix\",\n  \"data\": [\n    1,\n    3\n  ],\n  \"size\": [\n    2\n  ]\n}",
        "definition": {
          "en": "Create an array of numbers from start to end (step optional).",
          "cn": "从 start 到 end 生成一个数字数组（step 可选）。",
          "ja": "start から end までの数値配列を生成します（step はオプション）。"
        },
        "parameterDefinitions": {
          "en": "start (number), end (number), step (number, optional)",
          "cn": "start（数字），end（数字），step（数字，可选）",
          "ja": "start（数値）、end（数値）、step（数値、オプション）"
        }
      },
      {
        "title": "reshape",
        "call": "reshape([1,2,3,4,5,6], [2,3])",
        "result": "[\n  [\n    1,\n    2,\n    3\n  ],\n  [\n    4,\n    5,\n    6\n  ]\n]",
        "definition": {
          "en": "Reshape an array/matrix to the specified dimensions.",
          "cn": "将数组/矩阵重塑为指定维度。",
          "ja": "配列/行列を指定した次元に再構成します。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix), sizes (Array)",
          "cn": "x（数组或矩阵），sizes（数组）",
          "ja": "x（配列または行列）、sizes（配列）"
        }
      },
      {
        "title": "resize",
        "call": "resize([1,2,3], [5], 0)",
        "result": "[\n  1,\n  2,\n  3,\n  0,\n  0\n]",
        "definition": {
          "en": "Resize a matrix to new dimensions, filling missing elements with a default value if provided.",
          "cn": "将矩阵调整为新维度，可用默认值填充缺失元素。",
          "ja": "行列を新しい次元にリサイズし、必要に応じて既定値で埋めます。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix), size (Array), defaultValue (any, optional)",
          "cn": "x（数组或矩阵），size（数组），defaultValue（可选）",
          "ja": "x（配列または行列）、size（配列）、defaultValue（オプション）"
        }
      },
      {
        "title": "rotate",
        "call": "rotate([1, 0], Math.PI / 2)",
        "result": "[\n  6.123233995736766e-17,\n  1\n]",
        "definition": {
          "en": "Rotate a 2D vector by an angle, or a 3D vector around an axis.",
          "cn": "将 1x2 向量逆时针旋转一定角度，或对 1x3 向量绕给定轴旋转。",
          "ja": "2次元ベクトルをある角度だけ反時計回りに回転、または3次元ベクトルを指定軸の周りで回転させます。"
        },
        "parameterDefinitions": {
          "en": "w (Array|Matrix), theta (number[, axis])",
          "cn": "w（数组或矩阵），theta（数字[, 轴]）",
          "ja": "w（配列または行列）、theta（数値[, 軸]）"
        }
      },
      {
        "title": "rotationMatrix",
        "call": "rotationMatrix(Math.PI / 2)",
        "result": "{\n  \"mathjs\": \"DenseMatrix\",\n  \"data\": [\n    [\n      6.123233995736766e-17,\n      -1\n    ],\n    [\n      1,\n      6.123233995736766e-17\n    ]\n  ],\n  \"size\": [\n    2,\n    2\n  ]\n}",
        "definition": {
          "en": "Create a 2D rotation matrix (2x2) for a given angle in radians.",
          "cn": "创建给定弧度的 2x2 旋转矩阵。",
          "ja": "与えられたラジアン角の 2x2 回転行列を作成します。"
        },
        "parameterDefinitions": {
          "en": "theta (number)",
          "cn": "theta（数字）",
          "ja": "theta（数値）"
        }
      },
      {
        "title": "row",
        "call": "row([[1,2],[3,4]], 1)",
        "result": "[\n  [\n    3,\n    4\n  ]\n]",
        "definition": {
          "en": "Return a specific row from a Matrix.",
          "cn": "从矩阵中返回指定行。",
          "ja": "行列から特定の行を返します。"
        },
        "parameterDefinitions": {
          "en": "value (Matrix|Array), index (number)",
          "cn": "value（矩阵或数组），index（数字）",
          "ja": "value（行列または配列）、index（数値）"
        }
      },
      {
        "title": "size",
        "call": "size([[1,2,3],[4,5,6]])",
        "result": "[\n  2,\n  3\n]",
        "definition": {
          "en": "Compute the size (dimensions) of a matrix, array, or scalar.",
          "cn": "计算矩阵、数组或标量的尺寸（维度）。",
          "ja": "行列、配列、またはスカラーのサイズ（次元）を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix|number)",
          "cn": "x（数组、矩阵或数字）",
          "ja": "x（配列、行列、数値）"
        }
      },
      {
        "title": "sort",
        "call": "sort([3,1,2])",
        "result": "[\n  1,\n  2,\n  3\n]",
        "definition": {
          "en": "Sort the items in a matrix or array in ascending order.",
          "cn": "对矩阵或数组进行升序排序。",
          "ja": "行列または配列の要素を昇順にソートします。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix)",
          "cn": "x（数组或矩阵）",
          "ja": "x（配列または行列）"
        }
      },
      {
        "title": "sqrtm",
        "call": "sqrtm([[4,0],[0,4]])",
        "result": "[\n  [\n    2.000000000000002,\n    0\n  ],\n  [\n    0,\n    2.000000000000002\n  ]\n]",
        "definition": {
          "en": "Compute the principal square root of a square matrix.",
          "cn": "计算方阵的主平方根。",
          "ja": "正方行列の主平方根を計算します。"
        },
        "parameterDefinitions": {
          "en": "A (Matrix|Array)",
          "cn": "A（矩阵或数组）",
          "ja": "A（行列または配列）"
        }
      },
      {
        "title": "squeeze",
        "call": "squeeze([[[1],[2],[3]]])",
        "result": "[\n  1,\n  2,\n  3\n]",
        "definition": {
          "en": "Remove inner and outer singleton dimensions from a matrix.",
          "cn": "移除矩阵中内部和外部的单一维度。",
          "ja": "行列から内側および外側の単一次元を削除します。"
        },
        "parameterDefinitions": {
          "en": "x (Matrix|Array)",
          "cn": "x（矩阵或数组）",
          "ja": "x（行列または配列）"
        }
      },
      {
        "title": "subset",
        "call": "subset(['a','b','c'], 1)",
        "result": "Error: Unexpected type of argument in function subset (expected: Index, actual: number, index: 1)",
        "definition": {
          "en": "Retrieve or replace a subset of a matrix or string.",
          "cn": "获取或替换矩阵或字符串的子集。",
          "ja": "行列や文字列の一部を取得または置換します。"
        },
        "parameterDefinitions": {
          "en": "x (Matrix|Array|String), index (Index), replacement (optional)",
          "cn": "x（矩阵、数组或字符串），index（索引），replacement（可选）",
          "ja": "x（行列、配列、文字列）、index（インデックス）、replacement（オプション）"
        }
      },
      {
        "title": "trace",
        "call": "trace([[1,2],[3,4]])",
        "result": "5",
        "definition": {
          "en": "Compute the trace of a square matrix (sum of diagonal elements).",
          "cn": "计算方阵的迹（对角线元素之和）。",
          "ja": "正方行列のトレース（対角要素の総和）を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (Matrix|Array)",
          "cn": "x（矩阵或数组）",
          "ja": "x（行列または配列）"
        }
      },
      {
        "title": "transpose",
        "call": "transpose([[1,2],[3,4]])",
        "result": "[\n  [\n    1,\n    3\n  ],\n  [\n    2,\n    4\n  ]\n]",
        "definition": {
          "en": "Transpose a matrix.",
          "cn": "对矩阵进行转置。",
          "ja": "行列を転置します。"
        },
        "parameterDefinitions": {
          "en": "x (Matrix|Array)",
          "cn": "x（矩阵或数组）",
          "ja": "x（行列または配列）"
        }
      },
      {
        "title": "zeros",
        "call": "zeros(2, 3)",
        "result": "{\n  \"mathjs\": \"DenseMatrix\",\n  \"data\": [\n    [\n      0,\n      0,\n      0\n    ],\n    [\n      0,\n      0,\n      0\n    ]\n  ],\n  \"size\": [\n    2,\n    3\n  ]\n}",
        "definition": {
          "en": "Create a matrix filled with zeros of given dimensions.",
          "cn": "创建给定维度的全 0 矩阵。",
          "ja": "指定した次元の要素がすべて0の行列を作成します。"
        },
        "parameterDefinitions": {
          "en": "m, n, p... (number)",
          "cn": "m, n, p...（数字）",
          "ja": "m, n, p...（数値）"
        }
      }
    ]
  },
  {
    "category": "Numeric functions",
    "functions": [
      {
        "title": "solveODE",
        "call": "solveODE((t, y) => -0.5 * y, [0, 10], [1])",
        "result": "Error: Unexpected type of argument in function map (expected: Array or Matrix, actual: number, index: 0)",
        "definition": {
          "en": "Numerical integration for ordinary differential equations (default method: RK45).",
          "cn": "对常微分方程进行数值积分（默认使用RK45）。",
          "ja": "常微分方程を数値的に解きます（デフォルトはRK45）。"
        },
        "parameterDefinitions": {
          "en": "func (Function), tspan (Array), y0 (Array)",
          "cn": "函数（func），时间范围（tspan，数组），初始值（y0，数组）",
          "ja": "関数（func）、時間範囲（tspan, 配列）、初期値（y0, 配列）"
        }
      }
    ]
  },
  {
    "category": "Probability functions",
    "functions": [
      {
        "title": "combinations",
        "call": "combinations(5, 2)",
        "result": "10",
        "definition": {
          "en": "Compute the binomial coefficient C(n, k).",
          "cn": "计算从 n 个元素中取 k 个无序组合的数量。",
          "ja": "n 個の要素から k 個を無順序で選ぶ組み合わせ数を求めます。"
        },
        "parameterDefinitions": {
          "en": "n (number), k (number)",
          "cn": "n（数值），k（数值）",
          "ja": "n（数値）、k（数値）"
        }
      },
      {
        "title": "combinationsWithRep",
        "call": "combinationsWithRep(5, 2)",
        "result": "15",
        "definition": {
          "en": "Compute combinations where elements can repeat.",
          "cn": "计算可重复元素的组合数量。",
          "ja": "要素の重複が許可された組み合わせ数を求めます。"
        },
        "parameterDefinitions": {
          "en": "n (number), k (number)",
          "cn": "n（数值），k（数值）",
          "ja": "n（数値）、k（数値）"
        }
      },
      {
        "title": "factorial",
        "call": "factorial(5)",
        "result": "120",
        "definition": {
          "en": "Compute factorial of an integer n.",
          "cn": "计算整数 n 的阶乘。",
          "ja": "整数 n の階乗を求めます。"
        },
        "parameterDefinitions": {
          "en": "n (integer)",
          "cn": "n（整数）",
          "ja": "n（整数）"
        }
      },
      {
        "title": "gamma",
        "call": "gamma(5)",
        "result": "24",
        "definition": {
          "en": "Compute the gamma function using approximations.",
          "cn": "使用近似算法计算 gamma 函数值。",
          "ja": "近似手法を用いてガンマ関数を計算します。"
        },
        "parameterDefinitions": {
          "en": "n (number)",
          "cn": "n（数值）",
          "ja": "n（数値）"
        }
      },
      {
        "title": "kldivergence",
        "call": "kldivergence([0.1, 0.9], [0.2, 0.8])",
        "result": "0.036690014034750584",
        "definition": {
          "en": "Calculate the Kullback-Leibler divergence.",
          "cn": "计算两个分布的 KL 散度。",
          "ja": "2つの分布間のKLダイバージェンスを計算します。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix), y (Array|Matrix)",
          "cn": "x（数组或矩阵），y（数组或矩阵）",
          "ja": "x（配列または行列）、y（配列または行列）"
        }
      },
      {
        "title": "lgamma",
        "call": "lgamma(5)",
        "result": "3.178053830347945",
        "definition": {
          "en": "Compute the log of gamma function (extended approximations).",
          "cn": "计算 gamma 函数的对数（扩展近似）。",
          "ja": "ガンマ関数の対数を計算します（拡張近似）。"
        },
        "parameterDefinitions": {
          "en": "n (number)",
          "cn": "n（数值）",
          "ja": "n（数値）"
        }
      },
      {
        "title": "multinomial",
        "call": "multinomial([1, 2, 3])",
        "result": "60",
        "definition": {
          "en": "Compute the multinomial coefficient for an array of counts.",
          "cn": "根据一组计数计算多项式系数。",
          "ja": "カウントの配列に基づいて多項式係数を計算します。"
        },
        "parameterDefinitions": {
          "en": "a (Array)",
          "cn": "a（数组）",
          "ja": "a（配列）"
        }
      },
      {
        "title": "permutations",
        "call": "permutations(5, 2)",
        "result": "20",
        "definition": {
          "en": "Compute permutations of n items taken k at a time.",
          "cn": "计算 n 个元素中，取 k 个有序排列的数量。",
          "ja": "n 個の要素から k 個を順序付きで選ぶ場合の数を求めます。"
        },
        "parameterDefinitions": {
          "en": "n (number), k (number, optional)",
          "cn": "n（数值），k（数值，可选）",
          "ja": "n（数値）、k（数値、省略可）"
        }
      },
      {
        "title": "pickRandom",
        "call": "pickRandom([10, 20, 30])",
        "result": "20",
        "definition": {
          "en": "Randomly pick value(s) from a 1D array.",
          "cn": "从一维数组中随机选取一个或多个值。",
          "ja": "1次元配列からランダムに1つまたは複数の値を取得します。"
        },
        "parameterDefinitions": {
          "en": "array (Array)",
          "cn": "数组",
          "ja": "配列"
        }
      },
      {
        "title": "random",
        "call": "random(1, 10)",
        "result": "3.6099423753668143",
        "definition": {
          "en": "Get a random number (uniform distribution).",
          "cn": "获取一个均匀分布的随机数。",
          "ja": "一様分布のランダム数を取得します。"
        },
        "parameterDefinitions": {
          "en": "min (number, optional), max (number, optional)",
          "cn": "最小值（可选），最大值（可选）",
          "ja": "最小値（オプション）、最大値（オプション）"
        }
      },
      {
        "title": "randomInt",
        "call": "randomInt(1, 10)",
        "result": "5",
        "definition": {
          "en": "Get a random integer (uniform distribution).",
          "cn": "获取一个均匀分布的随机整数。",
          "ja": "一様分布のランダム整数を取得します。"
        },
        "parameterDefinitions": {
          "en": "min (number, optional), max (number, optional)",
          "cn": "最小值（可选），最大值（可选）",
          "ja": "最小値（オプション）、最大値（オプション）"
        }
      }
    ]
  },
  {
    "category": "Relational functions",
    "functions": [
      {
        "title": "compare",
        "call": "compare(2, 3)",
        "result": "-1",
        "definition": {
          "en": "Compare two values (numerical or lexical).",
          "cn": "比较两个值，可返回 -1、0 或 1。",
          "ja": "2つの値を比較し、-1・0・1を返します。"
        },
        "parameterDefinitions": {
          "en": "x, y (any)",
          "cn": "x，y（任意类型）",
          "ja": "x, y（任意の型）"
        }
      },
      {
        "title": "compareNatural",
        "call": "compareNatural('2', '10')",
        "result": "-1",
        "definition": {
          "en": "Compare any two types in a consistent, natural way.",
          "cn": "以自然、可重复的方式比较任意类型的值。",
          "ja": "すべての型を一貫した自然な方法で比較します。"
        },
        "parameterDefinitions": {
          "en": "x, y (any)",
          "cn": "x，y（任意类型）",
          "ja": "x, y（任意の型）"
        }
      },
      {
        "title": "compareText",
        "call": "compareText('apple', 'banana')",
        "result": "-1",
        "definition": {
          "en": "Lexically compare two strings.",
          "cn": "以字典序方式比较两个字符串。",
          "ja": "2つの文字列を辞書順で比較します。"
        },
        "parameterDefinitions": {
          "en": "x (string), y (string)",
          "cn": "x（字符串），y（字符串）",
          "ja": "x（文字列）、y（文字列）"
        }
      },
      {
        "title": "deepEqual",
        "call": "deepEqual([[1, 2]], [[1, 2]])",
        "result": "true",
        "definition": {
          "en": "Check if two matrices/arrays are element-wise equal.",
          "cn": "逐元素比较两个矩阵/数组是否相同。",
          "ja": "2つの行列または配列を要素ごとに比較し、等しいかどうかを判定します。"
        },
        "parameterDefinitions": {
          "en": "x (Array|Matrix), y (Array|Matrix)",
          "cn": "x（数组/矩阵），y（数组/矩阵）",
          "ja": "x（配列/行列）、y（配列/行列）"
        }
      },
      {
        "title": "equal",
        "call": "equal(2, 2)",
        "result": "true",
        "definition": {
          "en": "Check whether two values are equal.",
          "cn": "判断两个值是否相等。",
          "ja": "2つの値が等しいかどうかを判定します。"
        },
        "parameterDefinitions": {
          "en": "x, y (any)",
          "cn": "x，y（任意类型）",
          "ja": "x, y（任意の型）"
        }
      },
      {
        "title": "equalText",
        "call": "equalText('hello', 'hello')",
        "result": "true",
        "definition": {
          "en": "Check equality of two strings.",
          "cn": "判断两个字符串是否相同。",
          "ja": "2つの文字列が同じかどうかを判定します。"
        },
        "parameterDefinitions": {
          "en": "x (string), y (string)",
          "cn": "x（字符串），y（字符串）",
          "ja": "x（文字列）、y（文字列）"
        }
      },
      {
        "title": "larger",
        "call": "larger(3, 2)",
        "result": "true",
        "definition": {
          "en": "Test if x is strictly larger than y.",
          "cn": "判断 x 是否大于 y。",
          "ja": "x が y より大きいかどうかを判定します。"
        },
        "parameterDefinitions": {
          "en": "x, y (number|BigNumber)",
          "cn": "x，y（数字或大数）",
          "ja": "x, y（数値または多倍長数）"
        }
      },
      {
        "title": "largerEq",
        "call": "largerEq(3, 3)",
        "result": "true",
        "definition": {
          "en": "Test if x is larger or equal to y.",
          "cn": "判断 x 是否大于等于 y。",
          "ja": "x が y 以上かどうかを判定します。"
        },
        "parameterDefinitions": {
          "en": "x, y (number|BigNumber)",
          "cn": "x，y（数字或大数）",
          "ja": "x, y（数値または多倍長数）"
        }
      },
      {
        "title": "smaller",
        "call": "smaller(2, 3)",
        "result": "true",
        "definition": {
          "en": "Test if x is strictly smaller than y.",
          "cn": "判断 x 是否小于 y。",
          "ja": "x が y より小さいかどうかを判定します。"
        },
        "parameterDefinitions": {
          "en": "x, y (number|BigNumber)",
          "cn": "x，y（数字或大数）",
          "ja": "x, y（数値または多倍長数）"
        }
      },
      {
        "title": "smallerEq",
        "call": "smallerEq(2, 2)",
        "result": "true",
        "definition": {
          "en": "Test if x is smaller or equal to y.",
          "cn": "判断 x 是否小于等于 y。",
          "ja": "x が y 以下かどうかを判定します。"
        },
        "parameterDefinitions": {
          "en": "x, y (number|BigNumber)",
          "cn": "x，y（数字或大数）",
          "ja": "x, y（数値または多倍長数）"
        }
      },
      {
        "title": "unequal",
        "call": "unequal(2, 3)",
        "result": "true",
        "definition": {
          "en": "Test whether two values are not equal.",
          "cn": "判断两个值是否不相等。",
          "ja": "2つの値が等しくないかどうかを判定します。"
        },
        "parameterDefinitions": {
          "en": "x, y (any)",
          "cn": "x，y（任意类型）",
          "ja": "x, y（任意の型）"
        }
      }
    ]
  },
  {
    "category": "Set functions",
    "functions": [
      {
        "title": "setCartesian",
        "call": "setCartesian([1, 2], [3, 4])",
        "result": "[\n  [\n    1,\n    3\n  ],\n  [\n    1,\n    4\n  ],\n  [\n    2,\n    3\n  ],\n  [\n    2,\n    4\n  ]\n]",
        "definition": {
          "en": "Create the cartesian product of two (multi)sets.",
          "cn": "生成两个（多）集合的笛卡尔积。",
          "ja": "2つの（マルチ）集合のデカルト積を生成します。"
        },
        "parameterDefinitions": {
          "en": "set1 (Array), set2 (Array)",
          "cn": "第一个集合（数组），第二个集合（数组）",
          "ja": "1つ目の集合（配列）、2つ目の集合（配列）"
        }
      },
      {
        "title": "setDifference",
        "call": "setDifference([1, 2, 3], [2])",
        "result": "[\n  1,\n  3\n]",
        "definition": {
          "en": "Create the difference of two (multi)sets (elements in set1 but not in set2).",
          "cn": "生成两个（多）集合的差集（set1 中有但 set2 中没有的元素）。",
          "ja": "2つの（マルチ）集合の差集合（set1にありset2にない要素）を生成します。"
        },
        "parameterDefinitions": {
          "en": "set1 (Array), set2 (Array)",
          "cn": "第一个集合（数组），第二个集合（数组）",
          "ja": "1つ目の集合（配列）、2つ目の集合（配列）"
        }
      },
      {
        "title": "setDistinct",
        "call": "setDistinct([1, 2, 2, 3])",
        "result": "[\n  1,\n  2,\n  3\n]",
        "definition": {
          "en": "Collect unique elements of a (multi)set.",
          "cn": "获取（多）集合中的唯一元素。",
          "ja": "（マルチ）集合内にあるユニークな要素を取り出します。"
        },
        "parameterDefinitions": {
          "en": "set (Array)",
          "cn": "集合（数组）",
          "ja": "集合（配列）"
        }
      },
      {
        "title": "setIntersect",
        "call": "setIntersect([1, 2], [2, 3])",
        "result": "[\n  2\n]",
        "definition": {
          "en": "Create the intersection of two (multi)sets.",
          "cn": "生成两个（多）集合的交集。",
          "ja": "2つの（マルチ）集合の共通要素を生成します。"
        },
        "parameterDefinitions": {
          "en": "set1 (Array), set2 (Array)",
          "cn": "第一个集合（数组），第二个集合（数组）",
          "ja": "1つ目の集合（配列）、2つ目の集合（配列）"
        }
      },
      {
        "title": "setIsSubset",
        "call": "setIsSubset([1, 2], [1, 2, 3])",
        "result": "true",
        "definition": {
          "en": "Check if set1 is a subset of set2.",
          "cn": "判断 set1 是否是 set2 的子集。",
          "ja": "set1 が set2 の部分集合かどうかを判定します。"
        },
        "parameterDefinitions": {
          "en": "set1 (Array), set2 (Array)",
          "cn": "第一个集合（数组），第二个集合（数组）",
          "ja": "1つ目の集合（配列）、2つ目の集合（配列）"
        }
      },
      {
        "title": "setMultiplicity",
        "call": "setMultiplicity(2, [1, 2, 2, 3])",
        "result": "2",
        "definition": {
          "en": "Count how many times an element appears in a multiset.",
          "cn": "统计在多重集合中某个元素出现的次数。",
          "ja": "マルチ集合内で特定の要素が出現する回数を数えます。"
        },
        "parameterDefinitions": {
          "en": "element (any), set (Array)",
          "cn": "元素（任意类型），集合（数组）",
          "ja": "要素（任意の型）、集合（配列）"
        }
      },
      {
        "title": "setPowerset",
        "call": "setPowerset([1, 2])",
        "result": "[\n  [],\n  [\n    1\n  ],\n  [\n    2\n  ],\n  [\n    1,\n    2\n  ]\n]",
        "definition": {
          "en": "Generate the powerset (all subsets) of a (multi)set.",
          "cn": "生成一个（多）集合的所有子集，即幂集。",
          "ja": "（マルチ）集合のすべての部分集合（冪集合）を生成します。"
        },
        "parameterDefinitions": {
          "en": "set (Array)",
          "cn": "集合（数组）",
          "ja": "集合（配列）"
        }
      },
      {
        "title": "setSize",
        "call": "setSize([1, 2, 3])",
        "result": "3",
        "definition": {
          "en": "Count the total number of elements in a (multi)set.",
          "cn": "统计（多）集合中所有元素的数量。",
          "ja": "（マルチ）集合の全要素数を数えます。"
        },
        "parameterDefinitions": {
          "en": "set (Array)",
          "cn": "集合（数组）",
          "ja": "集合（配列）"
        }
      },
      {
        "title": "setSymDifference",
        "call": "setSymDifference([1, 2], [2, 3])",
        "result": "[\n  1,\n  3\n]",
        "definition": {
          "en": "Create the symmetric difference of two (multi)sets (elements in either set, but not both).",
          "cn": "生成两个（多）集合的对称差（只在其中一个集合中的元素）。",
          "ja": "2つの（マルチ）集合間の対称差（片方にしか含まれない要素）を生成します。"
        },
        "parameterDefinitions": {
          "en": "set1 (Array), set2 (Array)",
          "cn": "第一个集合（数组），第二个集合（数组）",
          "ja": "1つ目の集合（配列）、2つ目の集合（配列）"
        }
      },
      {
        "title": "setUnion",
        "call": "setUnion([1, 2], [2, 3])",
        "result": "[\n  1,\n  3,\n  2\n]",
        "definition": {
          "en": "Create the union of two (multi)sets.",
          "cn": "生成两个（多）集合的并集。",
          "ja": "2つの（マルチ）集合の和集合を生成します。"
        },
        "parameterDefinitions": {
          "en": "set1 (Array), set2 (Array)",
          "cn": "第一个集合（数组），第二个集合（数组）",
          "ja": "1つ目の集合（配列）、2つ目の集合（配列）"
        }
      }
    ]
  },
  {
    "category": "Signal functions",
    "functions": [
      {
        "title": "freqz",
        "call": "freqz([1, -0.5], [1])",
        "result": "{\n  \"h\": [\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5,\n      \"im\": 0\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5000094123586994,\n      \"im\": 0.0030679423245772376\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5000376490804277,\n      \"im\": 0.006135769142859963\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5000847091020884,\n      \"im\": 0.00920336495290241\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5001505906518979,\n      \"im\": 0.012270614261456144\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5002352912494534,\n      \"im\": 0.015337401588318313\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5003388077058253,\n      \"im\": 0.018403611470679416\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5004611361236773,\n      \"im\": 0.02146912846747041\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5006022718974138,\n      \"im\": 0.024533837163709007\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5007622097133526,\n      \"im\": 0.027597622174844967\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5009409435499255,\n      \"im\": 0.03066036815110429\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5011384666779042,\n      \"im\": 0.033721959781832025\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5013547716606549,\n      \"im\": 0.03678228179983371\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5015898503544172,\n      \"im\": 0.03984121898571506\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.501843693908611,\n      \"im\": 0.04289865617221995\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5021162927661701,\n      \"im\": 0.04595447824856636\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5024076366639015,\n      \"im\": 0.0490085701647803\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5027177146328723,\n      \"im\": 0.05206081693602729\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5030465149988219,\n      \"im\": 0.05511110364694153\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5033940253826028,\n      \"im\": 0.058159315455952376\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.503760232700645,\n      \"im\": 0.0612053375996081\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5041451231654502,\n      \"im\": 0.06424905539689658\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.50454868228611,\n      \"im\": 0.06729035425356308\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5049708948688514,\n      \"im\": 0.0703291196664246\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5054117450176094,\n      \"im\": 0.07336523722768087\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5058712161346253,\n      \"im\": 0.07639859262922172\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5063492909210707,\n      \"im\": 0.07942907166693072\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5068459513777006,\n      \"im\": 0.08245656024498496\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5073611788055294,\n      \"im\": 0.08548094438015061\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5078949538065355,\n      \"im\": 0.08850211020607437\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5084472562843918,\n      \"im\": 0.09151994397757048\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5090180654452223,\n      \"im\": 0.0945343320749031\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5096073597983848,\n      \"im\": 0.09754516100806412\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5102151171572797,\n      \"im\": 0.10055231742104595\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5108413146401862,\n      \"im\": 0.10355568809610928\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5114859286711229,\n      \"im\": 0.10655515995804568\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5121489349807358,\n      \"im\": 0.1095506200784349\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5128303086072121,\n      \"im\": 0.11254195567989642\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5135300238972199,\n      \"im\": 0.11552905414033555\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5142480545068742,\n      \"im\": 0.1185118029971836\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.514984373402728,\n      \"im\": 0.12149008995163194\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5157389528627914,\n      \"im\": 0.12446380287286007\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.516511764477574,\n      \"im\": 0.12743282980225729\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5173027791511553,\n      \"im\": 0.13039705895763776\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.51811196710228,\n      \"im\": 0.13335637873744918\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5189392978654792,\n      \"im\": 0.1363106777249745\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5197847402922171,\n      \"im\": 0.13925984469252653\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5206482625520642,\n      \"im\": 0.14220376860563594\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5215298321338956,\n      \"im\": 0.14514233862723117\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5224294158471146,\n      \"im\": 0.1480754441218119\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5233469798229031,\n      \"im\": 0.15100297465961404\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5242824895154958,\n      \"im\": 0.15392482002076743\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5252359097034817,\n      \"im\": 0.15684087019944576\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5262072044911295,\n      \"im\": 0.15975101540800785\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5271963373097394,\n      \"im\": 0.16265514608113146\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5282032709190199,\n      \"im\": 0.16555315287993821\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5292279674084897,\n      \"im\": 0.16844492669611003\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.530270388198905,\n      \"im\": 0.1713303586559972\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5313304940437125,\n      \"im\": 0.17420934012471728\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5324082450305262,\n      \"im\": 0.17708176271024517\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5335036005826306,\n      \"im\": 0.17994751826749406\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5346165194605081,\n      \"im\": 0.18280649890238693\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5357469597633921,\n      \"im\": 0.18565859697591877\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5368948789308443,\n      \"im\": 0.18850370510820913\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5380602337443566,\n      \"im\": 0.1913417161825449\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.539242980328979,\n      \"im\": 0.19417252334941312\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5404430741549711,\n      \"im\": 0.19699602003052405\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5416604700394787,\n      \"im\": 0.1998120999228234\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5428951221482347,\n      \"im\": 0.20262065700249493\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.544146983997285,\n      \"im\": 0.20542158552895196\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5454160084547388,\n      \"im\": 0.20821478004881858\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5467021477425423,\n      \"im\": 0.21100013539989984\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5480053534382783,\n      \"im\": 0.21377754671514104\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.549325576476989,\n      \"im\": 0.21654690942657598\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5506627671530231,\n      \"im\": 0.21930811926926383\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5520168751219074,\n      \"im\": 0.2220610722852146\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5533878494022424,\n      \"im\": 0.22480566482730327\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.554775638377621,\n      \"im\": 0.22754179356317192\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.556180189798573,\n      \"im\": 0.23026935547912\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.557601450784531,\n      \"im\": 0.2329882478839831\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5590393678258225,\n      \"im\": 0.23569836841299882\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5604938867856832,\n      \"im\": 0.23839961503166104\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5619649529022968,\n      \"im\": 0.24109188603956136\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.563452510790855,\n      \"im\": 0.243775080074218\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5649565044456443,\n      \"im\": 0.24644909611489202\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5664768772421537,\n      \"im\": 0.24911383348639093\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5680135719392065,\n      \"im\": 0.2517691918628588\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5695665306811164,\n      \"im\": 0.2544150712715535\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5711356949998639,\n      \"im\": 0.25705137209661083\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5727210058172998,\n      \"im\": 0.2596779950827948\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5743224034473674,\n      \"im\": 0.2622948413392345\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5759398275983514,\n      \"im\": 0.2649018123431473\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5775732173751464,\n      \"im\": 0.2674988099435486\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5792225112815508,\n      \"im\": 0.2700857363649464\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.580887647222581,\n      \"im\": 0.27266249421102323\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.58256856250681,\n      \"im\": 0.2752289864683024\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5842651938487273,\n      \"im\": 0.2777851165098011\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5859774773711222,\n      \"im\": 0.280330788098668\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5877053486074874,\n      \"im\": 0.28286590539180656\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5894487425044477,\n      \"im\": 0.28539037294348363\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5912075934242081,\n      \"im\": 0.28790409570892267\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5929818351470257,\n      \"im\": 0.29040697904788226\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5947714008737026,\n      \"im\": 0.29289892872821943\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5965762232281003,\n      \"im\": 0.2953798509294371\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5983962342596776,\n      \"im\": 0.2978496522462167\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6002313654460475,\n      \"im\": 0.3003082396919345\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6020815476955582,\n      \"im\": 0.3027555207021628\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6039467113498938,\n      \"im\": 0.30519140313815474\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6058267861866968,\n      \"im\": 0.3076157952903134\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6077217014222124,\n      \"im\": 0.31002860588164455\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6096313857139528,\n      \"im\": 0.31242974407119317\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6115557671633838,\n      \"im\": 0.3148191194574635\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6134947733186316,\n      \"im\": 0.31719664208182274\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6154483311772101,\n      \"im\": 0.31956222243188787\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6174163671887705,\n      \"im\": 0.3219157714448957\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6193988072578691,\n      \"im\": 0.3242572005110562\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6213955767467577,\n      \"im\": 0.3265864214768884\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6234066004781937,\n      \"im\": 0.3289033466485393\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6254318027382704,\n      \"im\": 0.3312078887950859\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6274711072792669,\n      \"im\": 0.33349996115181874\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6295244373225204,\n      \"im\": 0.33577947742350917\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6315917155613151,\n      \"im\": 0.33804635178765796\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6336728641637936,\n      \"im\": 0.3403004988977265\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6357678047758875,\n      \"im\": 0.3425418338863502\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6378764585242664,\n      \"im\": 0.3447702723685334\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6399987460193092,\n      \"im\": 0.346985730444827\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6421345873580907,\n      \"im\": 0.34918812470448646\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6442839021273918,\n      \"im\": 0.35137737222861265\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6464466094067263,\n      \"im\": 0.35355339059327373\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6486226277713874,\n      \"im\": 0.3557160978726082\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6508118752955135,\n      \"im\": 0.3578654126419093\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.653014269555173,\n      \"im\": 0.3600012539806908\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6552297276314665,\n      \"im\": 0.36212354147573345\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6574581661136498,\n      \"im\": 0.3642321952241126\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6596995011022735,\n      \"im\": 0.3663271358362064\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.661953648212342,\n      \"im\": 0.3684082844386849\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6642205225764908,\n      \"im\": 0.37047556267747955\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6665000388481812,\n      \"im\": 0.372528892720733\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6687921112049141,\n      \"im\": 0.37456819726172963\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6710966533514606,\n      \"im\": 0.3765933995218062\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6734135785231117,\n      \"im\": 0.37860442325324223\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6757427994889438,\n      \"im\": 0.3806011927421309\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6780842285551043,\n      \"im\": 0.3825836328112295\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6804377775681121,\n      \"im\": 0.3845516688227898\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6828033579181773,\n      \"im\": 0.3865052266813685\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6851808805425365,\n      \"im\": 0.3884442328366162\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6875702559288068,\n      \"im\": 0.3903686142860472\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6899713941183554,\n      \"im\": 0.3922782985777876\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6923842047096866,\n      \"im\": 0.3941732138133031\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6948085968618453,\n      \"im\": 0.3960532886501062\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6972444792978372,\n      \"im\": 0.3979184523044417\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.6996917603080655,\n      \"im\": 0.3997686345539525\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7021503477537833,\n      \"im\": 0.4016037657403224\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7046201490705628,\n      \"im\": 0.4034237767718996\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7071010712717806,\n      \"im\": 0.4052285991262974\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7095930209521177,\n      \"im\": 0.40701816485297415\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7120959042910773,\n      \"im\": 0.40879240657579186\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7146096270565163,\n      \"im\": 0.4105512574955523\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7171340946081934,\n      \"im\": 0.41229465139251265\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7196692119013319,\n      \"im\": 0.4140225226288779\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7222148834901989,\n      \"im\": 0.4157348061512726\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7247710135316976,\n      \"im\": 0.41743143749319\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7273375057889768,\n      \"im\": 0.419112352777419\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7299142636350535,\n      \"im\": 0.42077748871844917\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7325011900564513,\n      \"im\": 0.4224267826248535\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7350981876568525,\n      \"im\": 0.42406017240164856\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7377051586607656,\n      \"im\": 0.4256775965526326\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7403220049172052,\n      \"im\": 0.42727899418270027\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7429486279033892,\n      \"im\": 0.42886430500013606\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7455849287284465,\n      \"im\": 0.43043346931888365\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7482308081371412,\n      \"im\": 0.43198642806079335\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7508861665136091,\n      \"im\": 0.4335231227578463\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7535509038851079,\n      \"im\": 0.4350434955543557\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.756224919925782,\n      \"im\": 0.43654748920914505\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7589081139604386,\n      \"im\": 0.4380350470977033\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7616003849683388,\n      \"im\": 0.4395061132143167\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.764301631587001,\n      \"im\": 0.44096063217417747\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7670117521160169,\n      \"im\": 0.4423985492154689\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.76973064452088,\n      \"im\": 0.44381981020142697\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.772458206436828,\n      \"im\": 0.44522436162237894\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7751943351726966,\n      \"im\": 0.44661215059775766\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7779389277147853,\n      \"im\": 0.44798312487809255\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7806918807307361,\n      \"im\": 0.4493372328469769\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.783453090573424,\n      \"im\": 0.450674423523011\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.786222453284859,\n      \"im\": 0.45199464656172167\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7889998646001001,\n      \"im\": 0.45329785225745767\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7917852199511813,\n      \"im\": 0.45458399154526113\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.794578414471048,\n      \"im\": 0.45585301600271494\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.7973793429975051,\n      \"im\": 0.45710487785176535\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8001879000771766,\n      \"im\": 0.45833952996052135\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8030039799694759,\n      \"im\": 0.4595569258450289\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8058274766505868,\n      \"im\": 0.46075701967102095\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8086582838174551,\n      \"im\": 0.46193976625564337\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8114962948917909,\n      \"im\": 0.46310512106915563\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8143414030240812,\n      \"im\": 0.46425304023660774\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.817193501097613,\n      \"im\": 0.46538348053949186\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8200524817325059,\n      \"im\": 0.4664963994173694\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8229182372897548,\n      \"im\": 0.46759175496947375\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8257906598752828,\n      \"im\": 0.4686695059562875\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8286696413440028,\n      \"im\": 0.46972961180109496\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.83155507330389,\n      \"im\": 0.4707720325915104\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8344468471200618,\n      \"im\": 0.4717967290809802\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8373448539188685,\n      \"im\": 0.47280366269026064\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8402489845919922,\n      \"im\": 0.47379279550887055\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8431591298005542,\n      \"im\": 0.47476409029651834\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8460751799792325,\n      \"im\": 0.47571751048450417\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8489970253403859,\n      \"im\": 0.4766530201770969\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.851924555878188,\n      \"im\": 0.47757058415288534\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8548576613727689,\n      \"im\": 0.47847016786610447\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8577962313943641,\n      \"im\": 0.4793517374479358\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8607401553074735,\n      \"im\": 0.4802152597077829\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8636893222750255,\n      \"im\": 0.4810607021345208\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8666436212625508,\n      \"im\": 0.4818880328977199\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8696029410423622,\n      \"im\": 0.4826972208488447\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8725671701977427,\n      \"im\": 0.48348823552242604\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8755361971271398,\n      \"im\": 0.48426104713720863\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.878509910048368,\n      \"im\": 0.485015626597272\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8814881970028163,\n      \"im\": 0.4857519454931259\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8844709458596643,\n      \"im\": 0.48646997610278003\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8874580443201037,\n      \"im\": 0.48716969139278793\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8904493799215651,\n      \"im\": 0.4878510650192643\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8934448400419543,\n      \"im\": 0.4885140713288772\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.8964443119038907,\n      \"im\": 0.4891586853598138\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.899447682578954,\n      \"im\": 0.48978488284272026\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9024548389919358,\n      \"im\": 0.4903926402016152\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9054656679250969,\n      \"im\": 0.4909819345547776\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9084800560224294,\n      \"im\": 0.49155274371560814\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9114978897939255,\n      \"im\": 0.4921050461934645\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9145190556198494,\n      \"im\": 0.4926388211944706\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.917543439755015,\n      \"im\": 0.49315404862229933\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9205709283330693,\n      \"im\": 0.4936507090789292\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9236014073707783,\n      \"im\": 0.49412878386537473\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9266347627723192,\n      \"im\": 0.4945882549823905\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9296708803335754,\n      \"im\": 0.49502910513114856\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9327096457464369,\n      \"im\": 0.49545131771389\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9357509446031034,\n      \"im\": 0.49585487683454976\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9387946624003919,\n      \"im\": 0.496239767299355\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9418406845440476,\n      \"im\": 0.49660597461739725\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9448888963530584,\n      \"im\": 0.49695348500117803\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9479391830639726,\n      \"im\": 0.4972822853671277\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9509914298352196,\n      \"im\": 0.4975923633360984\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9540455217514336,\n      \"im\": 0.4978837072338299\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.95710134382778,\n      \"im\": 0.498156306091389\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.960158781014285,\n      \"im\": 0.49841014964558283\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9632177182001662,\n      \"im\": 0.4986452283393451\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.966278040218168,\n      \"im\": 0.4988615333220958\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9693396318488957,\n      \"im\": 0.4990590564500746\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9724023778251549,\n      \"im\": 0.4992377902866474\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.975466162836291,\n      \"im\": 0.4993977281025862\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9785308715325295,\n      \"im\": 0.4995388638763227\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9815963885293205,\n      \"im\": 0.49966119229417477\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9846625984116817,\n      \"im\": 0.49976470875054657\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9877293857385439,\n      \"im\": 0.4998494093481021\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9907966350470976,\n      \"im\": 0.4999152908979117\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.99386423085714,\n      \"im\": 0.49996235091957225\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.9969320576754227,\n      \"im\": 0.49999058764130055\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1,\n      \"im\": 0.5\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0030679423245772,\n      \"im\": 0.49999058764130055\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0061357691428598,\n      \"im\": 0.49996235091957225\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0092033649529024,\n      \"im\": 0.4999152908979117\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0122706142614561,\n      \"im\": 0.4998494093481021\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0153374015883183,\n      \"im\": 0.49976470875054657\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0184036114706794,\n      \"im\": 0.49966119229417477\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0214691284674704,\n      \"im\": 0.4995388638763227\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.024533837163709,\n      \"im\": 0.4993977281025862\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0275976221748448,\n      \"im\": 0.4992377902866474\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0306603681511042,\n      \"im\": 0.4990590564500746\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.033721959781832,\n      \"im\": 0.4988615333220958\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0367822817998336,\n      \"im\": 0.4986452283393451\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.039841218985715,\n      \"im\": 0.4984101496455829\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0428986561722198,\n      \"im\": 0.498156306091389\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0459544782485664,\n      \"im\": 0.4978837072338299\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0490085701647802,\n      \"im\": 0.49759236333609846\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0520608169360273,\n      \"im\": 0.4972822853671277\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0551111036469416,\n      \"im\": 0.49695348500117803\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0581593154559523,\n      \"im\": 0.49660597461739725\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.061205337599608,\n      \"im\": 0.496239767299355\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0642490553968966,\n      \"im\": 0.49585487683454976\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.067290354253563,\n      \"im\": 0.49545131771389\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0703291196664246,\n      \"im\": 0.49502910513114856\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0733652372276807,\n      \"im\": 0.4945882549823905\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0763985926292217,\n      \"im\": 0.49412878386537473\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0794290716669306,\n      \"im\": 0.4936507090789292\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.082456560244985,\n      \"im\": 0.49315404862229933\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0854809443801505,\n      \"im\": 0.4926388211944706\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0885021102060743,\n      \"im\": 0.4921050461934645\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.0915199439775705,\n      \"im\": 0.49155274371560814\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.094534332074903,\n      \"im\": 0.4909819345547776\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.097545161008064,\n      \"im\": 0.4903926402016152\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1005523174210459,\n      \"im\": 0.48978488284272026\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1035556880961093,\n      \"im\": 0.4891586853598138\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1065551599580457,\n      \"im\": 0.4885140713288772\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1095506200784349,\n      \"im\": 0.4878510650192643\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1125419556798963,\n      \"im\": 0.48716969139278793\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1155290541403355,\n      \"im\": 0.4864699761027801\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1185118029971837,\n      \"im\": 0.4857519454931259\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.121490089951632,\n      \"im\": 0.485015626597272\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.12446380287286,\n      \"im\": 0.4842610471372087\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1274328298022573,\n      \"im\": 0.48348823552242604\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1303970589576378,\n      \"im\": 0.4826972208488447\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1333563787374492,\n      \"im\": 0.4818880328977199\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1363106777249745,\n      \"im\": 0.4810607021345208\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1392598446925264,\n      \"im\": 0.48021525970778295\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1422037686056359,\n      \"im\": 0.4793517374479358\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.145142338627231,\n      \"im\": 0.47847016786610447\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.148075444121812,\n      \"im\": 0.47757058415288534\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.151002974659614,\n      \"im\": 0.47665302017709693\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1539248200207675,\n      \"im\": 0.47571751048450417\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1568408701994457,\n      \"im\": 0.47476409029651834\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1597510154080077,\n      \"im\": 0.4737927955088706\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1626551460811314,\n      \"im\": 0.4728036626902607\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.165553152879938,\n      \"im\": 0.4717967290809802\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1684449266961099,\n      \"im\": 0.4707720325915104\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.171330358655997,\n      \"im\": 0.46972961180109496\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1742093401247171,\n      \"im\": 0.4686695059562875\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1770817627102452,\n      \"im\": 0.4675917549694738\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.179947518267494,\n      \"im\": 0.4664963994173694\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.182806498902387,\n      \"im\": 0.46538348053949186\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1856585969759188,\n      \"im\": 0.4642530402366078\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.188503705108209,\n      \"im\": 0.4631051210691557\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1913417161825448,\n      \"im\": 0.46193976625564337\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1941725233494132,\n      \"im\": 0.460757019671021\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.196996020030524,\n      \"im\": 0.4595569258450289\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.1998120999228234,\n      \"im\": 0.45833952996052135\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2026206570024949,\n      \"im\": 0.45710487785176535\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2054215855289518,\n      \"im\": 0.45585301600271494\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2082147800488185,\n      \"im\": 0.45458399154526125\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2110001353998998,\n      \"im\": 0.45329785225745767\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.213777546715141,\n      \"im\": 0.4519946465617217\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.216546909426576,\n      \"im\": 0.450674423523011\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2193081192692636,\n      \"im\": 0.44933723284697696\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2220610722852145,\n      \"im\": 0.4479831248780926\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2248056648273034,\n      \"im\": 0.4466121505977576\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2275417935631718,\n      \"im\": 0.445224361622379\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.23026935547912,\n      \"im\": 0.44381981020142697\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.232988247883983,\n      \"im\": 0.44239854921546895\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.235698368412999,\n      \"im\": 0.4409606321741775\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.238399615031661,\n      \"im\": 0.43950611321431676\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2410918860395614,\n      \"im\": 0.4380350470977033\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2437750800742178,\n      \"im\": 0.4365474892091451\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.246449096114892,\n      \"im\": 0.43504349555435573\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2491138334863907,\n      \"im\": 0.4335231227578464\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2517691918628588,\n      \"im\": 0.4319864280607934\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2544150712715536,\n      \"im\": 0.4304334693188836\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2570513720966108,\n      \"im\": 0.42886430500013606\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2596779950827948,\n      \"im\": 0.42727899418270027\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2622948413392343,\n      \"im\": 0.4256775965526326\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2649018123431475,\n      \"im\": 0.4240601724016486\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2674988099435485,\n      \"im\": 0.4224267826248536\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2700857363649465,\n      \"im\": 0.4207774887184492\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2726624942110232,\n      \"im\": 0.4191123527774191\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2752289864683024,\n      \"im\": 0.41743143749319006\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.277785116509801,\n      \"im\": 0.41573480615127273\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2803307880986678,\n      \"im\": 0.4140225226288779\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2828659053918066,\n      \"im\": 0.4122946513925126\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2853903729434837,\n      \"im\": 0.4105512574955524\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2879040957089227,\n      \"im\": 0.40879240657579186\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2904069790478823,\n      \"im\": 0.40701816485297426\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2928989287282193,\n      \"im\": 0.4052285991262974\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.295379850929437,\n      \"im\": 0.4034237767718997\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.2978496522462166,\n      \"im\": 0.40160376574032247\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3003082396919343,\n      \"im\": 0.3997686345539526\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3027555207021626,\n      \"im\": 0.3979184523044418\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3051914031381548,\n      \"im\": 0.39605328865010614\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3076157952903134,\n      \"im\": 0.39417321381330317\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3100286058816446,\n      \"im\": 0.39227829857778757\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3124297440711932,\n      \"im\": 0.3903686142860473\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3148191194574634,\n      \"im\": 0.3884442328366162\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3171966420818226,\n      \"im\": 0.38650522668136855\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.319562222431888,\n      \"im\": 0.3845516688227898\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3219157714448957,\n      \"im\": 0.38258363281122953\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3242572005110562,\n      \"im\": 0.38060119274213094\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3265864214768883,\n      \"im\": 0.37860442325324234\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3289033466485394,\n      \"im\": 0.37659339952180626\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.331207888795086,\n      \"im\": 0.37456819726172963\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3334999611518188,\n      \"im\": 0.37252889272073303\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3357794774235092,\n      \"im\": 0.3704755626774795\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.338046351787658,\n      \"im\": 0.368408284438685\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3403004988977265,\n      \"im\": 0.3663271358362064\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3425418338863502,\n      \"im\": 0.36423219522411265\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3447702723685335,\n      \"im\": 0.36212354147573345\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.346985730444827,\n      \"im\": 0.3600012539806909\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3491881247044863,\n      \"im\": 0.35786541264190935\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3513773722286126,\n      \"im\": 0.35571609787260833\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3535533905932737,\n      \"im\": 0.3535533905932738\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3557160978726084,\n      \"im\": 0.3513773722286126\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3578654126419094,\n      \"im\": 0.34918812470448646\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3600012539806907,\n      \"im\": 0.346985730444827\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3621235414757333,\n      \"im\": 0.3447702723685335\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3642321952241125,\n      \"im\": 0.3425418338863502\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3663271358362064,\n      \"im\": 0.3403004988977266\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.368408284438685,\n      \"im\": 0.33804635178765796\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3704755626774794,\n      \"im\": 0.3357794774235093\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3725288927207329,\n      \"im\": 0.3334999611518188\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3745681972617296,\n      \"im\": 0.331207888795086\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3765933995218063,\n      \"im\": 0.3289033466485394\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3786044232532424,\n      \"im\": 0.3265864214768883\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.380601192742131,\n      \"im\": 0.3242572005110563\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3825836328112295,\n      \"im\": 0.3219157714448957\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3845516688227897,\n      \"im\": 0.3195622224318879\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3865052266813684,\n      \"im\": 0.31719664208182274\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3884442328366162,\n      \"im\": 0.3148191194574636\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3903686142860472,\n      \"im\": 0.31242974407119317\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3922782985777875,\n      \"im\": 0.3100286058816447\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3941732138133032,\n      \"im\": 0.30761579529031347\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.396053288650106,\n      \"im\": 0.30519140313815485\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3979184523044417,\n      \"im\": 0.30275552070216283\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.3997686345539526,\n      \"im\": 0.30030823969193443\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4016037657403224,\n      \"im\": 0.29784965224621673\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4034237767718998,\n      \"im\": 0.2953798509294371\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4052285991262974,\n      \"im\": 0.2928989287282195\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4070181648529743,\n      \"im\": 0.29040697904788226\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4087924065757917,\n      \"im\": 0.2879040957089227\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4105512574955523,\n      \"im\": 0.28539037294348363\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4122946513925125,\n      \"im\": 0.2828659053918067\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4140225226288778,\n      \"im\": 0.28033078809866807\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4157348061512727,\n      \"im\": 0.2777851165098011\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.41743143749319,\n      \"im\": 0.27522898646830246\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.419112352777419,\n      \"im\": 0.2726624942110232\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4207774887184492,\n      \"im\": 0.2700857363649465\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4224267826248536,\n      \"im\": 0.2674988099435486\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4240601724016486,\n      \"im\": 0.2649018123431474\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4256775965526325,\n      \"im\": 0.2622948413392345\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4272789941827002,\n      \"im\": 0.2596779950827949\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.428864305000136,\n      \"im\": 0.2570513720966109\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4304334693188836,\n      \"im\": 0.25441507127155366\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4319864280607932,\n      \"im\": 0.25176919186285884\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4335231227578464,\n      \"im\": 0.24911383348639088\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4350434955543556,\n      \"im\": 0.24644909611489207\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.436547489209145,\n      \"im\": 0.24377508007421794\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4380350470977032,\n      \"im\": 0.24109188603956144\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4395061132143168,\n      \"im\": 0.23839961503166104\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4409606321741775,\n      \"im\": 0.23569836841299893\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.442398549215469,\n      \"im\": 0.2329882478839831\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4438198102014268,\n      \"im\": 0.2302693554791201\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.445224361622379,\n      \"im\": 0.22754179356317195\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4466121505977576,\n      \"im\": 0.22480566482730344\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4479831248780926,\n      \"im\": 0.22206107228521466\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.449337232846977,\n      \"im\": 0.21930811926926377\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.450674423523011,\n      \"im\": 0.21654690942657603\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4519946465617217,\n      \"im\": 0.21377754671514101\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4532978522574576,\n      \"im\": 0.21100013539989992\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4545839915452612,\n      \"im\": 0.20821478004881858\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.455853016002715,\n      \"im\": 0.20542158552895207\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4571048778517652,\n      \"im\": 0.20262065700249496\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4583395299605213,\n      \"im\": 0.19981209992282353\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.459556925845029,\n      \"im\": 0.19699602003052408\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.460757019671021,\n      \"im\": 0.1941725233494133\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4619397662556435,\n      \"im\": 0.19134171618254495\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4631051210691557,\n      \"im\": 0.18850370510820907\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4642530402366076,\n      \"im\": 0.18565859697591885\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4653834805394919,\n      \"im\": 0.1828064989023869\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4664963994173694,\n      \"im\": 0.17994751826749417\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4675917549694737,\n      \"im\": 0.1770817627102452\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4686695059562873,\n      \"im\": 0.1742093401247174\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.469729611801095,\n      \"im\": 0.17133035865599722\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4707720325915103,\n      \"im\": 0.16844492669611016\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4717967290809801,\n      \"im\": 0.16555315287993824\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4728036626902605,\n      \"im\": 0.16265514608113163\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4737927955088705,\n      \"im\": 0.1597510154080079\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4747640902965182,\n      \"im\": 0.1568408701994457\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4757175104845042,\n      \"im\": 0.15392482002076752\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4766530201770969,\n      \"im\": 0.15100297465961401\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4775705841528852,\n      \"im\": 0.148075444121812\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4784701678661043,\n      \"im\": 0.1451423386272312\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4793517374479357,\n      \"im\": 0.14220376860563605\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.480215259707783,\n      \"im\": 0.13925984469252659\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4810607021345208,\n      \"im\": 0.13631067772497463\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.48188803289772,\n      \"im\": 0.13335637873744924\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4826972208488447,\n      \"im\": 0.13039705895763792\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.483488235522426,\n      \"im\": 0.12743282980225734\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4842610471372086,\n      \"im\": 0.12446380287286005\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.485015626597272,\n      \"im\": 0.12149008995163203\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4857519454931258,\n      \"im\": 0.11851180299718359\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.48646997610278,\n      \"im\": 0.11552905414033567\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4871696913927879,\n      \"im\": 0.11254195567989642\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4878510650192642,\n      \"im\": 0.10955062007843502\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4885140713288771,\n      \"im\": 0.10655515995804571\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4891586853598138,\n      \"im\": 0.10355568809610942\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4897848828427203,\n      \"im\": 0.100552317421046\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4903926402016152,\n      \"im\": 0.0975451610080643\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4909819345547777,\n      \"im\": 0.09453433207490318\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4915527437156082,\n      \"im\": 0.09151994397757045\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4921050461934646,\n      \"im\": 0.08850211020607447\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4926388211944706,\n      \"im\": 0.08548094438015061\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4931540486222992,\n      \"im\": 0.08245656024498507\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4936507090789293,\n      \"im\": 0.07942907166693074\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4941287838653747,\n      \"im\": 0.07639859262922184\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4945882549823906,\n      \"im\": 0.0733652372276809\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4950291051311484,\n      \"im\": 0.07032911966642477\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.49545131771389,\n      \"im\": 0.06729035425356314\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4958548768345499,\n      \"im\": 0.06424905539689654\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.496239767299355,\n      \"im\": 0.061205337599608174\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4966059746173972,\n      \"im\": 0.058159315455952355\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.496953485001178,\n      \"im\": 0.05511110364694162\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4972822853671277,\n      \"im\": 0.052060816936027286\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4975923633360984,\n      \"im\": 0.04900857016478041\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.49788370723383,\n      \"im\": 0.045954478248566376\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.498156306091389,\n      \"im\": 0.04289865617222008\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4984101496455828,\n      \"im\": 0.0398412189857151\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.498645228339345,\n      \"im\": 0.036782281799833866\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4988615333220958,\n      \"im\": 0.03372195978183209\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4990590564500745,\n      \"im\": 0.030660368151104244\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4992377902866474,\n      \"im\": 0.027597622174845047\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4993977281025863,\n      \"im\": 0.024533837163708983\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4995388638763227,\n      \"im\": 0.02146912846747051\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4996611922941747,\n      \"im\": 0.018403611470679416\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4997647087505466,\n      \"im\": 0.015337401588318433\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.499849409348102,\n      \"im\": 0.012270614261456163\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4999152908979116,\n      \"im\": 0.00920336495290255\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4999623509195723,\n      \"im\": 0.0061357691428600035\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1.4999905876413004,\n      \"im\": 0.0030679423245773994\n    }\n  ],\n  \"w\": [\n    0,\n    0.006135923151542565,\n    0.01227184630308513,\n    0.018407769454627694,\n    0.02454369260617026,\n    0.030679615757712823,\n    0.03681553890925539,\n    0.04295146206079795,\n    0.04908738521234052,\n    0.05522330836388308,\n    0.06135923151542565,\n    0.0674951546669682,\n    0.07363107781851078,\n    0.07976700097005335,\n    0.0859029241215959,\n    0.09203884727313846,\n    0.09817477042468103,\n    0.1043106935762236,\n    0.11044661672776616,\n    0.11658253987930872,\n    0.1227184630308513,\n    0.12885438618239387,\n    0.1349903093339364,\n    0.14112623248547898,\n    0.14726215563702155,\n    0.15339807878856412,\n    0.1595340019401067,\n    0.16566992509164924,\n    0.1718058482431918,\n    0.17794177139473438,\n    0.18407769454627693,\n    0.1902136176978195,\n    0.19634954084936207,\n    0.20248546400090464,\n    0.2086213871524472,\n    0.21475731030398976,\n    0.22089323345553233,\n    0.2270291566070749,\n    0.23316507975861744,\n    0.23930100291016002,\n    0.2454369260617026,\n    0.25157284921324513,\n    0.25770877236478773,\n    0.2638446955163303,\n    0.2699806186678728,\n    0.2761165418194154,\n    0.28225246497095796,\n    0.28838838812250056,\n    0.2945243112740431,\n    0.30066023442558565,\n    0.30679615757712825,\n    0.3129320807286708,\n    0.3190680038802134,\n    0.32520392703175593,\n    0.3313398501832985,\n    0.3374757733348411,\n    0.3436116964863836,\n    0.34974761963792617,\n    0.35588354278946877,\n    0.3620194659410113,\n    0.36815538909255385,\n    0.37429131224409645,\n    0.380427235395639,\n    0.3865631585471816,\n    0.39269908169872414,\n    0.3988350048502667,\n    0.4049709280018093,\n    0.4111068511533518,\n    0.4172427743048944,\n    0.42337869745643697,\n    0.4295146206079795,\n    0.4356505437595221,\n    0.44178646691106466,\n    0.4479223900626072,\n    0.4540583132141498,\n    0.46019423636569234,\n    0.4663301595172349,\n    0.4724660826687775,\n    0.47860200582032003,\n    0.48473792897186263,\n    0.4908738521234052,\n    0.4970097752749477,\n    0.5031456984264903,\n    0.5092816215780329,\n    0.5154175447295755,\n    0.521553467881118,\n    0.5276893910326605,\n    0.5338253141842031,\n    0.5399612373357456,\n    0.5460971604872883,\n    0.5522330836388308,\n    0.5583690067903734,\n    0.5645049299419159,\n    0.5706408530934585,\n    0.5767767762450011,\n    0.5829126993965437,\n    0.5890486225480862,\n    0.5951845456996288,\n    0.6013204688511713,\n    0.607456392002714,\n    0.6135923151542565,\n    0.619728238305799,\n    0.6258641614573416,\n    0.6320000846088841,\n    0.6381360077604268,\n    0.6442719309119693,\n    0.6504078540635119,\n    0.6565437772150544,\n    0.662679700366597,\n    0.6688156235181395,\n    0.6749515466696822,\n    0.6810874698212247,\n    0.6872233929727672,\n    0.6933593161243098,\n    0.6994952392758523,\n    0.705631162427395,\n    0.7117670855789375,\n    0.7179030087304801,\n    0.7240389318820226,\n    0.7301748550335652,\n    0.7363107781851077,\n    0.7424467013366504,\n    0.7485826244881929,\n    0.7547185476397354,\n    0.760854470791278,\n    0.7669903939428205,\n    0.7731263170943632,\n    0.7792622402459057,\n    0.7853981633974483,\n    0.7915340865489908,\n    0.7976700097005334,\n    0.803805932852076,\n    0.8099418560036186,\n    0.8160777791551611,\n    0.8222137023067037,\n    0.8283496254582462,\n    0.8344855486097889,\n    0.8406214717613314,\n    0.8467573949128739,\n    0.8528933180644165,\n    0.859029241215959,\n    0.8651651643675016,\n    0.8713010875190442,\n    0.8774370106705868,\n    0.8835729338221293,\n    0.8897088569736719,\n    0.8958447801252144,\n    0.9019807032767571,\n    0.9081166264282996,\n    0.9142525495798421,\n    0.9203884727313847,\n    0.9265243958829272,\n    0.9326603190344698,\n    0.9387962421860124,\n    0.944932165337555,\n    0.9510680884890975,\n    0.9572040116406401,\n    0.9633399347921826,\n    0.9694758579437253,\n    0.9756117810952678,\n    0.9817477042468103,\n    0.9878836273983529,\n    0.9940195505498954,\n    1.000155473701438,\n    1.0062913968529805,\n    1.012427320004523,\n    1.0185632431560658,\n    1.0246991663076084,\n    1.030835089459151,\n    1.0369710126106935,\n    1.043106935762236,\n    1.0492428589137786,\n    1.055378782065321,\n    1.0615147052168636,\n    1.0676506283684062,\n    1.0737865515199487,\n    1.0799224746714913,\n    1.086058397823034,\n    1.0921943209745766,\n    1.0983302441261191,\n    1.1044661672776617,\n    1.1106020904292042,\n    1.1167380135807468,\n    1.1228739367322893,\n    1.1290098598838318,\n    1.1351457830353744,\n    1.141281706186917,\n    1.1474176293384597,\n    1.1535535524900022,\n    1.1596894756415448,\n    1.1658253987930873,\n    1.1719613219446299,\n    1.1780972450961724,\n    1.184233168247715,\n    1.1903690913992575,\n    1.1965050145508,\n    1.2026409377023426,\n    1.2087768608538851,\n    1.214912784005428,\n    1.2210487071569704,\n    1.227184630308513,\n    1.2333205534600555,\n    1.239456476611598,\n    1.2455923997631406,\n    1.2517283229146832,\n    1.2578642460662257,\n    1.2640001692177683,\n    1.2701360923693108,\n    1.2762720155208536,\n    1.282407938672396,\n    1.2885438618239387,\n    1.2946797849754812,\n    1.3008157081270237,\n    1.3069516312785663,\n    1.3130875544301088,\n    1.3192234775816514,\n    1.325359400733194,\n    1.3314953238847365,\n    1.337631247036279,\n    1.3437671701878218,\n    1.3499030933393643,\n    1.3560390164909069,\n    1.3621749396424494,\n    1.368310862793992,\n    1.3744467859455345,\n    1.380582709097077,\n    1.3867186322486196,\n    1.3928545554001621,\n    1.3989904785517047,\n    1.4051264017032472,\n    1.41126232485479,\n    1.4173982480063325,\n    1.423534171157875,\n    1.4296700943094176,\n    1.4358060174609601,\n    1.4419419406125027,\n    1.4480778637640452,\n    1.4542137869155878,\n    1.4603497100671303,\n    1.4664856332186729,\n    1.4726215563702154,\n    1.4787574795217582,\n    1.4848934026733007,\n    1.4910293258248433,\n    1.4971652489763858,\n    1.5033011721279284,\n    1.509437095279471,\n    1.5155730184310134,\n    1.521708941582556,\n    1.5278448647340985,\n    1.533980787885641,\n    1.5401167110371838,\n    1.5462526341887264,\n    1.552388557340269,\n    1.5585244804918115,\n    1.564660403643354,\n    1.5707963267948966,\n    1.576932249946439,\n    1.5830681730979816,\n    1.5892040962495242,\n    1.5953400194010667,\n    1.6014759425526093,\n    1.607611865704152,\n    1.6137477888556946,\n    1.6198837120072371,\n    1.6260196351587797,\n    1.6321555583103222,\n    1.6382914814618648,\n    1.6444274046134073,\n    1.6505633277649499,\n    1.6566992509164924,\n    1.662835174068035,\n    1.6689710972195777,\n    1.6751070203711202,\n    1.6812429435226628,\n    1.6873788666742053,\n    1.6935147898257479,\n    1.6996507129772904,\n    1.705786636128833,\n    1.7119225592803755,\n    1.718058482431918,\n    1.7241944055834606,\n    1.7303303287350031,\n    1.736466251886546,\n    1.7426021750380885,\n    1.748738098189631,\n    1.7548740213411735,\n    1.761009944492716,\n    1.7671458676442586,\n    1.7732817907958012,\n    1.7794177139473437,\n    1.7855536370988863,\n    1.7916895602504288,\n    1.7978254834019713,\n    1.8039614065535141,\n    1.8100973297050567,\n    1.8162332528565992,\n    1.8223691760081417,\n    1.8285050991596843,\n    1.8346410223112268,\n    1.8407769454627694,\n    1.846912868614312,\n    1.8530487917658545,\n    1.859184714917397,\n    1.8653206380689396,\n    1.8714565612204823,\n    1.8775924843720249,\n    1.8837284075235674,\n    1.88986433067511,\n    1.8960002538266525,\n    1.902136176978195,\n    1.9082721001297376,\n    1.9144080232812801,\n    1.9205439464328227,\n    1.9266798695843652,\n    1.932815792735908,\n    1.9389517158874505,\n    1.945087639038993,\n    1.9512235621905356,\n    1.9573594853420782,\n    1.9634954084936207,\n    1.9696313316451632,\n    1.9757672547967058,\n    1.9819031779482483,\n    1.9880391010997909,\n    1.9941750242513334,\n    2.000310947402876,\n    2.0064468705544187,\n    2.012582793705961,\n    2.018718716857504,\n    2.024854640009046,\n    2.030990563160589,\n    2.0371264863121317,\n    2.043262409463674,\n    2.0493983326152168,\n    2.055534255766759,\n    2.061670178918302,\n    2.067806102069844,\n    2.073942025221387,\n    2.0800779483729293,\n    2.086213871524472,\n    2.0923497946760143,\n    2.098485717827557,\n    2.1046216409791,\n    2.110757564130642,\n    2.116893487282185,\n    2.1230294104337273,\n    2.12916533358527,\n    2.1353012567368124,\n    2.141437179888355,\n    2.1475731030398975,\n    2.1537090261914402,\n    2.1598449493429825,\n    2.1659808724945253,\n    2.172116795646068,\n    2.1782527187976104,\n    2.184388641949153,\n    2.1905245651006955,\n    2.1966604882522383,\n    2.2027964114037806,\n    2.2089323345553233,\n    2.2150682577068657,\n    2.2212041808584084,\n    2.227340104009951,\n    2.2334760271614935,\n    2.2396119503130363,\n    2.2457478734645786,\n    2.2518837966161214,\n    2.2580197197676637,\n    2.2641556429192065,\n    2.270291566070749,\n    2.2764274892222915,\n    2.282563412373834,\n    2.2886993355253766,\n    2.2948352586769194,\n    2.3009711818284617,\n    2.3071071049800045,\n    2.313243028131547,\n    2.3193789512830896,\n    2.325514874434632,\n    2.3316507975861747,\n    2.337786720737717,\n    2.3439226438892597,\n    2.350058567040802,\n    2.356194490192345,\n    2.3623304133438876,\n    2.36846633649543,\n    2.3746022596469727,\n    2.380738182798515,\n    2.386874105950058,\n    2.3930100291016,\n    2.399145952253143,\n    2.405281875404685,\n    2.411417798556228,\n    2.4175537217077703,\n    2.423689644859313,\n    2.429825568010856,\n    2.435961491162398,\n    2.442097414313941,\n    2.448233337465483,\n    2.454369260617026,\n    2.4605051837685683,\n    2.466641106920111,\n    2.4727770300716534,\n    2.478912953223196,\n    2.4850488763747385,\n    2.4911847995262812,\n    2.497320722677824,\n    2.5034566458293663,\n    2.509592568980909,\n    2.5157284921324514,\n    2.521864415283994,\n    2.5280003384355365,\n    2.5341362615870793,\n    2.5402721847386216,\n    2.5464081078901644,\n    2.552544031041707,\n    2.5586799541932495,\n    2.564815877344792,\n    2.5709518004963345,\n    2.5770877236478773,\n    2.5832236467994196,\n    2.5893595699509624,\n    2.5954954931025047,\n    2.6016314162540475,\n    2.60776733940559,\n    2.6139032625571326,\n    2.6200391857086753,\n    2.6261751088602177,\n    2.6323110320117604,\n    2.6384469551633027,\n    2.6445828783148455,\n    2.650718801466388,\n    2.6568547246179306,\n    2.662990647769473,\n    2.6691265709210157,\n    2.675262494072558,\n    2.6813984172241008,\n    2.6875343403756435,\n    2.693670263527186,\n    2.6998061866787286,\n    2.705942109830271,\n    2.7120780329818137,\n    2.718213956133356,\n    2.724349879284899,\n    2.730485802436441,\n    2.736621725587984,\n    2.742757648739526,\n    2.748893571891069,\n    2.7550294950426117,\n    2.761165418194154,\n    2.767301341345697,\n    2.773437264497239,\n    2.779573187648782,\n    2.7857091108003242,\n    2.791845033951867,\n    2.7979809571034093,\n    2.804116880254952,\n    2.8102528034064944,\n    2.816388726558037,\n    2.82252464970958,\n    2.8286605728611223,\n    2.834796496012665,\n    2.8409324191642074,\n    2.84706834231575,\n    2.8532042654672924,\n    2.859340188618835,\n    2.8654761117703775,\n    2.8716120349219203,\n    2.8777479580734626,\n    2.8838838812250054,\n    2.890019804376548,\n    2.8961557275280905,\n    2.9022916506796332,\n    2.9084275738311756,\n    2.9145634969827183,\n    2.9206994201342606,\n    2.9268353432858034,\n    2.9329712664373457,\n    2.9391071895888885,\n    2.945243112740431,\n    2.9513790358919736,\n    2.9575149590435164,\n    2.9636508821950587,\n    2.9697868053466014,\n    2.9759227284981438,\n    2.9820586516496865,\n    2.988194574801229,\n    2.9943304979527716,\n    3.000466421104314,\n    3.0066023442558567,\n    3.0127382674073995,\n    3.018874190558942,\n    3.0250101137104846,\n    3.031146036862027,\n    3.0372819600135696,\n    3.043417883165112,\n    3.0495538063166547,\n    3.055689729468197,\n    3.06182565261974,\n    3.067961575771282,\n    3.074097498922825,\n    3.0802334220743677,\n    3.08636934522591,\n    3.0925052683774528,\n    3.098641191528995,\n    3.104777114680538,\n    3.11091303783208,\n    3.117048960983623,\n    3.1231848841351653,\n    3.129320807286708,\n    3.1354567304382504\n  ]\n}",
        "definition": {
          "en": "Calculate the frequency response given filter coefficients.",
          "cn": "根据滤波器系数计算频率响应。",
          "ja": "フィルタ係数から周波数応答を計算します。"
        },
        "parameterDefinitions": {
          "en": "b (array), a (array)",
          "cn": "分子系数数组 b，分母系数数组 a",
          "ja": "b（配列）、a（配列）"
        }
      },
      {
        "title": "zpk2tf",
        "call": "zpk2tf([-0.5], [1], 1)",
        "result": "[\n  [\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1,\n      \"im\": 0\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 0.5,\n      \"im\": 0\n    }\n  ],\n  [\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": 1,\n      \"im\": 0\n    },\n    {\n      \"mathjs\": \"Complex\",\n      \"re\": -1,\n      \"im\": 0\n    }\n  ]\n]",
        "definition": {
          "en": "Compute the transfer function from zero, pole, and gain data.",
          "cn": "根据零点、极点及增益计算传递函数。",
          "ja": "零点、極点、およびゲインをもとに伝達関数を計算します。"
        },
        "parameterDefinitions": {
          "en": "z (array), p (array), k (number)",
          "cn": "零点数组 z，极点数组 p，增益 k",
          "ja": "z（配列）、p（配列）、k（数値）"
        }
      }
    ]
  },
  {
    "category": "Special functions",
    "functions": [
      {
        "title": "erf",
        "call": "erf(0.5)",
        "result": "0.5204998778130465",
        "definition": {
          "en": "Compute the error function using rational Chebyshev approximations.",
          "cn": "使用有理切比雪夫近似来计算误差函数。",
          "ja": "有理チェビシェフ近似を用いて誤差関数を計算します。"
        },
        "parameterDefinitions": {
          "en": "x (number)",
          "cn": "输入值 x（数字）",
          "ja": "x（数値）"
        }
      },
      {
        "title": "zeta",
        "call": "zeta(2)",
        "result": "1.6449340668482526",
        "definition": {
          "en": "Compute the Riemann Zeta function using a series expansion.",
          "cn": "利用级数展开来计算黎曼ζ函数。",
          "ja": "級数展開を用いてリーマンゼータ関数を計算します。"
        },
        "parameterDefinitions": {
          "en": "n (number)",
          "cn": "输入值 n（数字）",
          "ja": "n（数値）"
        }
      }
    ]
  },
  {
    "category": "Statistics functions",
    "functions": [
      {
        "title": "corr",
        "call": "corr([2, 3, 4], [5, 6, 7])",
        "result": "1",
        "definition": {
          "en": "Compute the correlation coefficient between two lists or matrices.",
          "cn": "计算两个列表或矩阵之间的相关系数。",
          "ja": "2つのリストまたは行列間の相関係数を計算します。"
        },
        "parameterDefinitions": {
          "en": "A (Array|Matrix), B (Array|Matrix)",
          "cn": "A，B可为数组或矩阵",
          "ja": "A（配列または行列）、B（配列または行列）"
        }
      },
      {
        "title": "cumsum",
        "call": "cumsum([1, 2, 3, 4])",
        "result": "[\n  1,\n  3,\n  6,\n  10\n]",
        "definition": {
          "en": "Compute the cumulative sum of a list or matrix.",
          "cn": "计算列表或矩阵的累加和。",
          "ja": "リストまたは行列の累積和を計算します。"
        }
      },
      {
        "title": "mad",
        "call": "mad([1, 2, 3, 4])",
        "result": "1",
        "definition": {
          "en": "Compute the median absolute deviation of values.",
          "cn": "计算数据的中位绝对偏差。",
          "ja": "データの中央値からの絶対偏差（MAD）を計算します。"
        }
      },
      {
        "title": "max",
        "call": "max([1, 2, 3])",
        "result": "3",
        "definition": {
          "en": "Compute the maximum of a list or matrix.",
          "cn": "返回列表或矩阵的最大值。",
          "ja": "リストまたは行列の最大値を求めます。"
        }
      },
      {
        "title": "mean",
        "call": "mean([2, 4, 6])",
        "result": "4",
        "definition": {
          "en": "Compute the mean (average) of values.",
          "cn": "计算平均值。",
          "ja": "値の平均を計算します。"
        }
      },
      {
        "title": "median",
        "call": "median([1, 2, 3, 4, 5])",
        "result": "3",
        "definition": {
          "en": "Compute the median of values.",
          "cn": "计算中位数。",
          "ja": "値の中央値を計算します。"
        }
      },
      {
        "title": "min",
        "call": "min([1, 2, 3])",
        "result": "1",
        "definition": {
          "en": "Compute the minimum of a list or matrix.",
          "cn": "返回列表或矩阵的最小值。",
          "ja": "リストまたは行列の最小値を求めます。"
        }
      },
      {
        "title": "mode",
        "call": "mode([1, 2, 2, 3])",
        "result": "[\n  2\n]",
        "definition": {
          "en": "Compute the mode of a list or set of values.",
          "cn": "计算众数（最常出现的值）。",
          "ja": "リストまたはデータ集合の最頻値（モード）を求めます。"
        }
      },
      {
        "title": "prod",
        "call": "prod([1, 2, 3, 4])",
        "result": "24",
        "definition": {
          "en": "Compute the product of a list or matrix.",
          "cn": "计算列表或矩阵中所有数的乘积。",
          "ja": "リストまたは行列に含まれる全数の積を計算します。"
        }
      },
      {
        "title": "quantileSeq",
        "call": "quantileSeq([1, 2, 3, 4], 0.25)",
        "result": "1.75",
        "definition": {
          "en": "Compute the prob-order quantile of given data.",
          "cn": "计算列表或矩阵在 prob 位置上的分位数。",
          "ja": "与えられたデータの確率分位数を計算します。"
        }
      },
      {
        "title": "std",
        "call": "std([1, 2, 3, 4])",
        "result": "1.2909944487358056",
        "definition": {
          "en": "Compute the standard deviation of data.",
          "cn": "计算数据的标准差。",
          "ja": "データの標準偏差を計算します。"
        }
      },
      {
        "title": "sum",
        "call": "sum([1, 2, 3])",
        "result": "6",
        "definition": {
          "en": "Compute the sum of a list or matrix.",
          "cn": "计算列表或矩阵所有数的和。",
          "ja": "リストまたは行列の合計を計算します。"
        }
      },
      {
        "title": "variance",
        "call": "variance([1, 2, 3, 4])",
        "result": "1.6666666666666667",
        "definition": {
          "en": "Compute the variance of data.",
          "cn": "计算数据的方差。",
          "ja": "データの分散を計算します。"
        }
      }
    ]
  },
  {
    "category": "String functions",
    "functions": [
      {
        "title": "bin",
        "call": "bin(13)",
        "result": "0b1101",
        "definition": {
          "en": "Format a number as binary.",
          "cn": "将数字格式化为二进制。",
          "ja": "数値を2進数形式でフォーマットします。"
        }
      },
      {
        "title": "format",
        "call": "format(123.456, 2)",
        "result": "120",
        "definition": {
          "en": "Format a value of any type into a string with optional precision.",
          "cn": "将任意类型的值转为指定精度的字符串。",
          "ja": "任意の型の値を文字列に変換し、必要に応じて精度を指定できます。"
        }
      },
      {
        "title": "hex",
        "call": "hex(255)",
        "result": "0xff",
        "definition": {
          "en": "Format a number as hexadecimal.",
          "cn": "将数字格式化为十六进制。",
          "ja": "数値を16進数形式でフォーマットします。"
        }
      },
      {
        "title": "oct",
        "call": "oct(64)",
        "result": "0o100",
        "definition": {
          "en": "Format a number as octal.",
          "cn": "将数字格式化为八进制。",
          "ja": "数値を8進数形式でフォーマットします。"
        }
      },
      {
        "title": "print",
        "call": "print('x = $x, y = $y', {x: 3, y: 4}, 2)",
        "result": "x = 3, y = 4",
        "definition": {
          "en": "Interpolate values into a string template.",
          "cn": "将多个数值插入到字符串模板中。",
          "ja": "複数の数値を文字列テンプレートに埋め込みます。"
        }
      }
    ]
  },
  {
    "category": "Trigonometry functions",
    "functions": [
      {
        "title": "acos",
        "call": "acos(0.5)",
        "result": "1.0471975511965979",
        "definition": {
          "en": "Calculate the inverse cosine.",
          "cn": "计算反余弦值。",
          "ja": "アークコサイン（逆余弦）を計算します。"
        }
      },
      {
        "title": "acosh",
        "call": "acosh(2)",
        "result": "1.3169578969248166",
        "definition": {
          "en": "Calculate the hyperbolic arccos.",
          "cn": "计算双曲反余弦值。",
          "ja": "ハイパボリックアークコサイン（双曲線逆余弦）を計算します。"
        }
      },
      {
        "title": "acot",
        "call": "acot(1)",
        "result": "0.7853981633974483",
        "definition": {
          "en": "Calculate the inverse cotangent.",
          "cn": "计算反余切值。",
          "ja": "アークコタンジェント（逆余切）を計算します。"
        }
      },
      {
        "title": "acoth",
        "call": "acoth(2)",
        "result": "0.5493061443340548",
        "definition": {
          "en": "Calculate the inverse hyperbolic cotangent.",
          "cn": "计算双曲反余切值。",
          "ja": "ハイパボリックアークコタンジェント（双曲線逆余切）を計算します。"
        }
      },
      {
        "title": "acsc",
        "call": "acsc(2)",
        "result": "0.5235987755982989",
        "definition": {
          "en": "Calculate the inverse cosecant.",
          "cn": "计算反余割值。",
          "ja": "アークコセカント（逆余割）を計算します。"
        }
      },
      {
        "title": "acsch",
        "call": "acsch(2)",
        "result": "0.48121182505960347",
        "definition": {
          "en": "Calculate the inverse hyperbolic cosecant.",
          "cn": "计算双曲反余割值。",
          "ja": "ハイパボリックアークコセカント（双曲線逆余割）を計算します。"
        }
      },
      {
        "title": "asec",
        "call": "asec(2)",
        "result": "1.0471975511965979",
        "definition": {
          "en": "Calculate the inverse secant.",
          "cn": "计算反正割值。",
          "ja": "アークセカント（逆正割）を計算します。"
        }
      },
      {
        "title": "asech",
        "call": "asech(0.5)",
        "result": "1.3169578969248166",
        "definition": {
          "en": "Calculate the inverse hyperbolic secant.",
          "cn": "计算双曲反正割值。",
          "ja": "ハイパボリックアークセカント（双曲線逆正割）を計算します。"
        }
      },
      {
        "title": "asin",
        "call": "asin(0.5)",
        "result": "0.5235987755982989",
        "definition": {
          "en": "Calculate the inverse sine.",
          "cn": "计算反正弦值。",
          "ja": "アークサイン（逆正弦）を計算します。"
        }
      },
      {
        "title": "asinh",
        "call": "asinh(1.5)",
        "result": "1.1947632172871094",
        "definition": {
          "en": "Calculate the hyperbolic arcsine.",
          "cn": "计算双曲反正弦值。",
          "ja": "ハイパボリックアークサイン（双曲線逆正弦）を計算します。"
        }
      },
      {
        "title": "atan",
        "call": "atan(1)",
        "result": "0.7853981633974483",
        "definition": {
          "en": "Calculate the inverse tangent.",
          "cn": "计算反正切值。",
          "ja": "アークタンジェント（逆正切）を計算します。"
        }
      },
      {
        "title": "atan2",
        "call": "atan2(1, 2)",
        "result": "0.4636476090008061",
        "definition": {
          "en": "Calculate the two-argument inverse tangent.",
          "cn": "计算具有两个参数的反正切值。",
          "ja": "2つの引数を持つアークタンジェントを計算します。"
        }
      },
      {
        "title": "atanh",
        "call": "atanh(0.5)",
        "result": "0.5493061443340548",
        "definition": {
          "en": "Calculate the hyperbolic arctangent.",
          "cn": "计算双曲反正切值。",
          "ja": "ハイパボリックアークタンジェント（双曲線逆正切）を計算します。"
        }
      },
      {
        "title": "cos",
        "call": "cos(0.5)",
        "result": "0.8775825618903728",
        "definition": {
          "en": "Calculate the cosine of x.",
          "cn": "计算 x 的余弦值。",
          "ja": "与えられた値のコサインを計算します。"
        }
      },
      {
        "title": "cosh",
        "call": "cosh(0.5)",
        "result": "1.1276259652063807",
        "definition": {
          "en": "Calculate the hyperbolic cosine of x.",
          "cn": "计算 x 的双曲余弦值。",
          "ja": "与えられた値のハイパボリックコサインを計算します。"
        }
      },
      {
        "title": "cot",
        "call": "cot(0.5)",
        "result": "1.830487721712452",
        "definition": {
          "en": "Calculate the cotangent of x.",
          "cn": "计算 x 的余切值。",
          "ja": "与えられた値のコタンジェントを計算します。"
        }
      },
      {
        "title": "coth",
        "call": "coth(0.5)",
        "result": "2.163953413738653",
        "definition": {
          "en": "Calculate the hyperbolic cotangent of x.",
          "cn": "计算 x 的双曲余切值。",
          "ja": "与えられた値のハイパボリックコタンジェントを計算します。"
        }
      },
      {
        "title": "csc",
        "call": "csc(0.5)",
        "result": "2.085829642933488",
        "definition": {
          "en": "Calculate the cosecant of x.",
          "cn": "计算 x 的余割值。",
          "ja": "与えられた値のコセカントを計算します。"
        }
      },
      {
        "title": "csch",
        "call": "csch(0.5)",
        "result": "1.9190347513349437",
        "definition": {
          "en": "Calculate the hyperbolic cosecant of x.",
          "cn": "计算 x 的双曲余割值。",
          "ja": "与えられた値のハイパボリックコセカントを計算します。"
        }
      },
      {
        "title": "sec",
        "call": "sec(0.5)",
        "result": "1.139493927324549",
        "definition": {
          "en": "Calculate the secant of x.",
          "cn": "计算 x 的正割值。",
          "ja": "与えられた値のセカントを計算します。"
        }
      },
      {
        "title": "sech",
        "call": "sech(0.5)",
        "result": "0.886818883970074",
        "definition": {
          "en": "Calculate the hyperbolic secant of x.",
          "cn": "计算 x 的双曲正割值。",
          "ja": "与えられた値のハイパボリックセカントを計算します。"
        }
      },
      {
        "title": "sin",
        "call": "sin(0.5)",
        "result": "0.479425538604203",
        "definition": {
          "en": "Calculate the sine of x.",
          "cn": "计算 x 的正弦值。",
          "ja": "与えられた値のサインを計算します。"
        }
      },
      {
        "title": "sinh",
        "call": "sinh(0.5)",
        "result": "0.5210953054937474",
        "definition": {
          "en": "Calculate the hyperbolic sine of x.",
          "cn": "计算 x 的双曲正弦值。",
          "ja": "与えられた値のハイパボリックサインを計算します。"
        }
      },
      {
        "title": "tan",
        "call": "tan(0.5)",
        "result": "0.5463024898437905",
        "definition": {
          "en": "Calculate the tangent of x.",
          "cn": "计算 x 的正切值。",
          "ja": "与えられた値のタンジェントを計算します。"
        }
      },
      {
        "title": "tanh",
        "call": "tanh(0.5)",
        "result": "0.46211715726000974",
        "definition": {
          "en": "Calculate the hyperbolic tangent of x.",
          "cn": "计算 x 的双曲正切值。",
          "ja": "与えられた値のハイパボリックタンジェントを計算します。"
        }
      }
    ]
  },
  {
    "category": "Unit functions",
    "functions": [
      {
        "title": "to",
        "call": "to(5, 'cm')",
        "result": "Error: Unexpected type of argument in function to (expected: Array or DenseMatrix or Matrix, actual: identifier | string, index: 1)",
        "definition": {
          "en": "Convert a value to another unit.",
          "cn": "将一个数值转换为指定单位。",
          "ja": "数値を別の単位に変換します。"
        }
      }
    ]
  },
  {
    "category": "Utils functions",
    "functions": [
      {
        "title": "clone",
        "call": "clone([1, 2, 3])",
        "result": "[\n  1,\n  2,\n  3\n]",
        "definition": {
          "en": "Make a deep copy of a value.",
          "cn": "对输入值进行深拷贝。",
          "ja": "値のディープコピーを作成します。"
        }
      },
      {
        "title": "hasNumericValue",
        "call": "hasNumericValue('123')",
        "result": "true",
        "definition": {
          "en": "Test whether the value contains a valid numeric value.",
          "cn": "检测输入是否包含数值。",
          "ja": "指定した値が有効な数値を含むかどうかをテストします。"
        }
      },
      {
        "title": "isInteger",
        "call": "isInteger(3.0)",
        "result": "true",
        "definition": {
          "en": "Test whether the value is an integer.",
          "cn": "检测输入是否是整数。",
          "ja": "指定した値が整数かどうかをテストします。"
        }
      },
      {
        "title": "isNaN",
        "call": "isNaN(NaN)",
        "result": "true",
        "definition": {
          "en": "Test whether the value is NaN (not a number).",
          "cn": "检测输入是否为 NaN。",
          "ja": "指定した値がNaNかどうかをテストします。"
        }
      },
      {
        "title": "isNegative",
        "call": "isNegative(-5)",
        "result": "true",
        "definition": {
          "en": "Test whether the value is negative.",
          "cn": "检测输入是否为负数。",
          "ja": "指定した値が負数であるかどうかをテストします。"
        }
      },
      {
        "title": "isNumeric",
        "call": "isNumeric('123')",
        "result": "false",
        "definition": {
          "en": "Test whether the value is numeric.",
          "cn": "检测输入是否为数值。",
          "ja": "指定した値が数値であるかどうかをテストします。"
        }
      },
      {
        "title": "isPositive",
        "call": "isPositive(2)",
        "result": "true",
        "definition": {
          "en": "Test whether the value is positive.",
          "cn": "检测输入是否为正数。",
          "ja": "指定した値が正数であるかどうかをテストします。"
        }
      },
      {
        "title": "isPrime",
        "call": "isPrime(7)",
        "result": "true",
        "definition": {
          "en": "Test whether the value is a prime number.",
          "cn": "检测输入是否为质数。",
          "ja": "指定した値が素数であるかどうかをテストします。"
        }
      },
      {
        "title": "isZero",
        "call": "isZero(0)",
        "result": "true",
        "definition": {
          "en": "Test whether the value is zero.",
          "cn": "检测输入是否为 0。",
          "ja": "指定した値が0かどうかをテストします。"
        }
      },
      {
        "title": "numeric",
        "call": "numeric('123')",
        "result": "123",
        "definition": {
          "en": "Convert the value to a specific numeric type (number, BigNumber, etc.).",
          "cn": "将输入值转换为特定的数值类型（如 number、BigNumber 等）。",
          "ja": "指定した値を特定の数値型（number、BigNumberなど）に変換します。"
        }
      },
      {
        "title": "typeOf",
        "call": "typeOf([1, 2, 3])",
        "result": "Array",
        "definition": {
          "en": "Return the type name of the value.",
          "cn": "返回输入值的类型名称。",
          "ja": "指定した値の型名を返します。"
        }
      }
    ]
  }
];


function filterFunctionsData(
  data: {
    category: string;
    functions: {
      title: string;
      [key: string]: any;
    }[];
  }[],
  math: Record<string, any>
) {
  // 先拿到所有的函数名称
  const mathKeys = Object.keys(math);

  // 对原始数据进行处理
  return data
    .map((categoryItem) => {
      // 只保留在 math 里且类型为 function 的函数
      const filteredFunctions = categoryItem.functions.filter((fn) => {
        return (
          mathKeys.includes(fn.title) && typeof math[fn.title] === "function"
        );
      });

      // 如果该分类筛完后还有函数，就保留下来
      if (filteredFunctions.length > 0) {
        return {
          ...categoryItem,
          functions: filteredFunctions,
        };
      }
      // 如果没有则返回 null，用于后面过滤掉空分类
      return null;
    })
    // 最后把 null 的分类过滤掉
    .filter((item) => item !== null) as {
    category: string;
    functions: {
      title: string;
      [key: string]: any;
    }[];
  }[];
}


const MathFunctions: React.FC = () => {
  // 把 mathjs 的 API 暴露到全局（如果确有需要）
  useEffect(() => {
    Object.keys(math).forEach((key) => {
      (window as any)[key] = (math as any)[key];
    });
  }, []);

  // 根据最新 mathjs 版本过滤无效函数
  const filteredData = useMemo(() => {
    return filterFunctionsData(functionsData, math);
  }, []);

  // 生成组件
  const CommonComponent = useMemo(
    () => generateFunctionsComponent({ data: filteredData }),
    [filteredData]
  );

  return <CommonComponent />;
};

export default MathFunctions;
