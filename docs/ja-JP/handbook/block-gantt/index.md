# ガントチャート

<PluginInfo name="block-gantt"></PluginInfo>

## 紹介

ガントチャートブロックは、時間軸形式でデータを表示し、プロジェクト管理、イベント計画、工事計画、タスクスケジューリングなどに最適です。

## インストール

内蔵プラグインのため、インストールは不要です。

## ブロックの追加

![](https://static-docs.nocobase.com/f064f8fadf52947c990f5dad97736f98.png)

![](https://static-docs.nocobase.com/858112f44bc543973b6e5b03856a6360.png)

- **タイトルフィールド**：タスクバーを識別するために使用します。
- **時間スケール**：時間スケールを設定します。デフォルトは日です。
- **開始日フィールド**：各タスクの開始日を必須で入力します。
- **終了日フィールド**：各タスクの終了日を必須で入力します。
- **進捗フィールド**：タスクの進捗を示すフィールドを設定します（パーセンテージフィールド、任意）。

## 使用説明

![](https://static-docs.nocobase.com/fff6fe1e1fe0a88d20f80b3bb7233608.gif)

- マウスをホバーすると、タスクの継続時間や進捗などの情報を表示するカードが表示されます。
- ドラッグしてタスクの開始日と終了日を調整します。
- ドラッグして進捗バーを調整し、タスクの進捗を変更します。

## ブロック設定項目

![20240419211301](https://static-docs.nocobase.com/20240419211301.png)

### データ範囲の設定

![20240419211033](https://static-docs.nocobase.com/20240419211033.png)

詳細は [データ範囲の設定](/handbook/ui/blocks/block-settings/data-scope) を参照してください。

- [ブロックテンプレートとして保存](/handbook/block-template)
- [データロード方式の設定](/handbook/ui/blocks/block-settings/loading-mode)

## 設定操作

### グローバル操作

![20240419213653](https://static-docs.nocobase.com/20240419213653.png)

- [フィルタ](/handbook/ui/actions/types/filter)
- [追加](/handbook/ui/actions/types/add-new)
- [削除](/handbook/ui/actions/types/delete)
- [更新](/handbook/ui/actions/types/refresh)
- [インポート](/handbook/action-import)
- [エクスポート](/handbook/action-export)
- [データ追加](/handbook/action-add-record)
- [一括更新](/handbook/action-bulk-update)
- [一括編集](/handbook/action-bulk-edit)

### 行操作

![20240419213823](https://static-docs.nocobase.com/20240419213823.png)

- [表示](/handbook/ui/actions/types/view)
- [編集](/handbook/ui/actions/types/edit)
- [コピー](/handbook/action-duplicate)
- [削除](/handbook/ui/actions/types/delete)
- [ポップアップ](/handbook/ui/actions/types/pop-up)
- [レコード更新](/handbook/ui/actions/types/update-record)
- [カスタムリクエスト](/handbook/action-custom-request)
- [ワークフローをトリガー](/handbook/workflow/manual/triggers/custom-action)

