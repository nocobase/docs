
# 数値

## {{bytes}}

数値をバイト単位にフォーマットします。文字列が渡された場合、その長さがフォーマットされて返されます。

**例:**

* `'foo' => 3 B`
* `13661855 => 13.66 MB`
* `825399 => 825.39 kB`
* `1396 => 1.4 kB`

**パラメータ**

* `number` **{Number|String}**
* `returns` **{String}**

## {{addCommas}}

数値にカンマを追加します。

**パラメータ**

* `num` **{Number}**
* `returns` **{Number}**

## {{phoneNumber}}

文字列または数値をフォーマットされた電話番号に変換します。

**パラメータ**

* `num` **{Number|String}**: フォーマットする電話番号、例: `8005551212`
* `returns` **{Number}**: フォーマットされた電話番号: `(800) 555-1212`

## {{toAbbr}}

数値を指定された`precision`の桁数に省略します。これはバイト単位のサイズではなく、一般的な数値のためのものです。

**パラメータ**

* `number` **{Number}**
* `precision` **{Number}**
* `returns` **{String}**

## {{toExponential}}

与えられた数値を指数表記で表す文字列を返します。

**パラメータ**

* `number` **{Number}**
* `fractionDigits` **{Number}**: オプション。小数点以下の桁数を指定する整数。デフォルトは数値を指定するために必要な桁数です。
* `returns` **{Number}**

**例**

```handlebars
{{toExponential number digits}};
```

## {{toFixed}}

与えられた数値を固定小数点表記でフォーマットします。

**パラメータ**

* `number` **{Number}**
* `digits` **{Number}**: (オプション) 小数点以下の桁数。0から20までの値です。この引数が省略された場合、0として扱われます。
* `returns` **{String}**: 固定小数点表記で表された数値の文字列。

**例**

```handlebars
{{toFixed "1.1234" 2}}
//=> '1.12'
```

## {{toFloat}}

**パラメータ**

* `number` **{Number}**
* `returns` **{Number}**

## {{toInt}}

**パラメータ**

* `number` **{Number}**
* `returns` **{Number}**

## {{toPrecision}}

指定された精度で`Number`オブジェクトを表す文字列を返します。

**パラメータ**

* `number` **{Number}**
* `precision` **{Number}**: (オプション) 有効桁数を指定する整数。精度が1から100の間でない場合、`0`に強制されます。
* `returns` **{String}**: 固定小数点表記または指数表記で表された数値の文字列で、指定された有効桁数に丸められます。

**例**

```handlebars
{{toPrecision "1.1234" 2}}
//=> '1.1'
```
