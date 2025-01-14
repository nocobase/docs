
# パス

## {{absolute}}

指定された `filepath` からディレクトリパスのセグメントを取得します。

**パラメータ**

* `ext` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{absolute "docs/toc.md"}}
<!-- 結果: 'docs' -->
```

## {{dirname}}

指定された `filepath` からディレクトリパスのセグメントを取得します。

**パラメータ**

* `ext` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{dirname "docs/toc.md"}}
<!-- 結果: 'docs' -->
```

## {{relative}}

`a` から `b` への相対ファイルパスを取得します。

**パラメータ**

* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{relative a b}}
```

## {{basename}}

指定された `filepath` からファイル名を取得します。

**パラメータ**

* `ext` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{basename "docs/toc.md"}}
<!-- 結果: 'toc.md' -->
```

## {{stem}}

指定された `filepath` から「ステム」を取得します。

**パラメータ**

* `filepath` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{stem "docs/toc.md"}}
<!-- 結果: 'toc' -->
```

## {{extname}}

指定された `filepath` からファイル拡張子を取得します。

**パラメータ**

* `filepath` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{extname "docs/toc.md"}}
<!-- 結果: '.md' -->
```

## {{resolve}}

指定された `filepath` から絶対パスを解決します。

**パラメータ**

* `filepath` **{String}**
* `returns` **{String}**

**例**

```handlebars
{{resolve "docs/toc.md"}}
<!-- 結果: '/User/dev/docs/toc.md' -->
```

## {{segments}}

配列インデックスの範囲を渡すことで、ファイルパスの特定の（結合された）セグメントを取得します。

**パラメータ**

* `filepath` **{String}**: セグメントに分割するファイルパス。
* `returns` **{String}**: 結合された単一のファイルパスを返します。

**例**

```handlebars
{{segments "a/b/c/d" "2" "3"}}
<!-- 結果: 'c/d' -->

{{segments "a/b/c/d" "1" "3"}}
<!-- 結果: 'b/c/d' -->

{{segments "a/b/c/d" "1" "2"}}
<!-- 結果: 'b/c' -->
```
