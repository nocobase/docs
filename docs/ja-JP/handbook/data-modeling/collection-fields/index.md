# データテーブルフィールド

## フィールドインターフェースタイプ

NocoBaseはインターフェースの観点からフィールドを以下のように分類しています：

![20240512110352](https://static-docs.nocobase.com/20240512110352.png)

## フィールドデータタイプ

各フィールドインターフェースにはデフォルトのデータタイプがあります。例えば、インターフェースが数字（Number）のフィールドの場合、データタイプのデフォルトはdoubleですが、floatやdecimalなども使用可能です。現在サポートされているデータタイプは以下の通りです：

![20240512103733](https://static-docs.nocobase.com/20240512103733.png)

## フィールドタイプのマッピング

主データベースに新しいフィールドを追加するプロセスは次の通りです：

1. インターフェースタイプを選択します。
2. 現在のインターフェースに対してオプションとして利用可能なデータタイプを設定します。

![20240512172416](https://static-docs.nocobase.com/20240512172416.png)

外部データソースのフィールドマッピングプロセスは以下の通りです：

1. 外部データベースのフィールドタイプに基づいて、対応するデータタイプ（フィールドタイプ）とUIタイプ（フィールドインターフェース）を自動的にマッピングします。
2. 必要に応じて、より適切なデータタイプとインターフェースタイプに修正します。

![20240512172759](https://static-docs.nocobase.com/20240512172759.png)

