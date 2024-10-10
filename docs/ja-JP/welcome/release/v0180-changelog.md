# v0.18：2023-12-21

## 新機能

NocoBaseをより堅牢にするために、第四四半期にはE2Eテストを追加し、全体のテスト体系を整備しました。

### @nocobase/test

NocoBaseテストパッケージには以下が含まれます：

- `@nocobase/test/server` サーバーサイドテスト
  - インターフェーステスト用に`supertest`と統合
  - `mockDatabase`と`mockServer`が内蔵されています

- `@nocobase/test/client` クライアントサイドテスト
  - `@testing-library/react`と`@testing-library/user-event`が統合されています

- `@nocobase/test/e2e` E2Eテスト
  - `@playwright/test`と統合
  - よく使われるモックメソッドが内蔵されています

### テストフレームワーク

- バックエンドテストにはVitestフレームワークを使用
- フロントエンドテストにはVitestフレームワークを使用
- E2EテストにはPlaywrightフレームワークを使用

### テストの作成

#### バックエンドテスト

```typescript
import { mockDatabase } from '@nocobase/test/server';

describe('my db suite', () => {
  let db;

  beforeEach(async () => {
    db = mockDatabase();
    db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });
    await db.sync();
  });

  afterEach(async () => {
    await db.close();
  });

  test('私のケース', async () => {
    const repository = db.getRepository('posts');
    const post = await repository.create({
      values: {
        title: 'こんにちは',
      },
    });

    expect(post.get('title')).toEqual('こんにちは');
  });
});
```

#### フロントエンドテスト

```typescript
import { render, screen, userEvent, waitFor } from '@nocobase/test/client';

it('ユーザー入力の値が表示される必要があります', async () => {
  const { container } = render(<App1 />);
  const input = container.querySelector('input');
  await userEvent.type(input, 'こんにちは世界');
  await waitFor(() => {
    expect(screen.getByText('こんにちは世界')).toBeInTheDocument();
  });
});
```

#### E2Eテスト

```typescript
import { test } from '@nocobase/test/e2e';

test('サインイン', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('ユーザー名/メール').click();
  await page.getByPlaceholder('ユーザー名/メール').fill('admin@nocobase.com');
  await page.getByPlaceholder('パスワード').click();
  await page.getByPlaceholder('パスワード').fill('admin123');
  await page.getByRole('button', { name: 'サインイン' }).click();
  await expect(
    page.getByTestId('user-center-button').getByText('スーパ管理者'),
  ).toBeVisible();
});
```

### Vitest テストの実行

```bash
# すべてのテストを実行し、フロントエンドとバックエンドの2つの Vitest プロセスを並行して実行
yarn test

# クライアント関連のテストケースを実行
yarn test --client
# 同義
yarn cross-env TEST_ENV=client-side vitest

# サーバー関連のテストケースを実行
yarn test --server
# 同義
yarn cross-env TEST_ENV=server-side vitest

# ディレクトリまたはファイルを指定
yarn test your/path/src/__tests__/test-file.test.ts
# フロントエンドファイルは /client/ を含む必要があります
yarn test your/path/client/src/__tests__/test-file.test.ts
```

📢 Vitest を直接実行することとの違い

- パスを指定すると、フロントエンドとバックエンドを自動的に識別できます。フロントエンドには `/client/` を含める必要があります。
- バックエンドのテストはデフォルトで `--single-thread` ですが、無効にする場合は `--single-thread=false` を追加してください。
- デフォルトでは `--run` オプションを使用してテストが終了するとプロセスも終了します。リッスンが必要な場合は `--watch` オプションを追加してください。

### Playwright テストの実行

```bash
# 依存関係のインストール
yarn e2e install-deps

# テストの実行
yarn e2e test

# UIモード
yarn e2e test --ui

# 実行中のアプリのURL
yarn e2e test --url=http://localhost:20000

# アプリを起動します。毎回再インストールされます。
yarn e2e start-app
```

## その他の変更

### ユーザー認証拡張の最適化

- ユーザー認証拡張の開発ガイド [https://docs-cn.nocobase.com/plugins/auth/dev/guide](https://docs-cn.nocobase.com/plugins/auth/dev/guide)
- ユーザー認証拡張に関する非互換性の変更 [https://docs-cn.nocobase.com/breaking-changes/v0-18-0-alpha-1](https://docs-cn.nocobase.com/breaking-changes/v0-18-0-alpha-1)

### プラグイン化の分割

カーネルをより洗練させるために、特定の機能がプラグイン化されて分割されました。最近完了した分割プラグインは以下の通りです：

| プラグイン名                      | パッケージ名                                      |
| --------------------------------- | ------------------------------------------------ |
| 操作 - 一括編集                  | @nocobase/plugin-action-bulk-edit                |
| 操作 - 一括更新                  | @nocobase/plugin-action-bulk-update              |
| 操作 - コピー                    | @nocobase/plugin-action-duplicate                |
| カンバンブロック                 | @nocobase/plugin-kanban                          |
| ガントチャートブロック           | @nocobase/plugin-gantt                           |
| ワークフロー - 集計              | @nocobase/plugin-workflow-aggregate              |
| ワークフロー - 承認              | @nocobase/plugin-workflow-approval               |
| ワークフロー - 遅延              | @nocobase/plugin-workflow-delay                  |
| ワークフロー - 動的計算          | @nocobase/plugin-workflow-dynamic-calculation    |
| ワークフロー - フォームトリガー  | @nocobase/plugin-workflow-form-trigger           |
| ワークフロー - JSONクエリ        | @nocobase/plugin-workflow-json-query             |
| ワークフロー - ループ            | @nocobase/plugin-workflow-loop                   |
| ワークフロー - 手動              | @nocobase/plugin-workflow-manual                 |
| ワークフロー - 並列              | @nocobase/plugin-workflow-parallel               |
| ワークフロー - リクエスト        | @nocobase/plugin-workflow-request                |
| ワークフロー - SQL               | @nocobase/plugin-workflow-sql                    |

詳細については[完全なプラグインリスト](https://docs-cn.nocobase.com/plugins)をご覧ください。文書は現在作成中であり、一部の内容が欠落しているか、翻訳が不完全な場合があります。最新の情報については[nocobase/docs](https://github.com/nocobase/docs)をご確認ください。

