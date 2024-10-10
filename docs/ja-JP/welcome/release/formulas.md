# v0.9.0：フィールド計算式プラグイン

NocoBaseは現在、2種類の計算式プラグインを提供しています：

- `@nocobase/plugin-math-formula-field` Math式
- `@nocobase/plugin-excel-formula-field` Excel式（[azriel46d](https://github.com/nocobase/nocobase/pull/906) に感謝）

## Math式

[数学.js](https://mathjs.org/) に基づいており、記号計算をサポートする柔軟な式解析器、大量の組み込み関数と定数を備え、数字、大きな数、複素数、分数、単位、行列など、異なるデータ型を扱うための統合ソリューションを提供します。

```ts
import { evaluate } from 'mathjs';
// 式
evaluate('1.2 * (2 + 4.5)'); // 7.8
evaluate('12.7 cm to inch'); // 5 inch
evaluate('sin(45 deg) ^ 2'); // 0.5
evaluate('9 / 3 + 2i'); // 3 + 2i
evaluate('det([-1, 2; 3, 1])'); // -7
```

<img src="./formulas/math-form.jpg" />

## Excel式

[Formula.js](https://formulajs.info/) に基づいており、詳細な使い方は [Formula.js Functions](https://formulajs.info/functions/) を参照してください。

```ts
SUM(-5, 15, 32); // 42
IF(TRUE, 'Hello!', 'Goodbye!'); // Hello!
```

<img src="./formulas/excel-form.jpg" />

