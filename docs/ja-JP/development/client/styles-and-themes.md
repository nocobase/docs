# スタイルとテーマ

NocoBaseの動的テーマ機能を利用するために、プラグイン内で[antd-style](https://ant-design.github.io/antd-style/ja-JP/guide)を使用してスタイルを作成することをお勧めします。また、既存の[テーマトークン](https://ant.design/docs/react/customize-theme-cn#seedtoken)を活用して、テーマの動的機能を管理します。さらに、NocoBaseは[テーマエディタープラグイン](#)も提供しており、スタイルを簡単に調整できます。

## スタイルの作成

### `createStyles`を使用してスタイルを作成する（推奨）

```tsx
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  // CSSオブジェクトの記述をサポート
  container: {
    backgroundColor: token.colorBgLayout,
    borderRadius: token.borderRadiusLG,
    maxWidth: 400,
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  // CSS文字列テンプレートを使用して一般的なCSSと同様の記述体験を得ることも可能
  card: css`
    color: ${token.colorTextTertiary};
    box-shadow: ${token.boxShadow};
    &:hover {
      color: ${token.colorTextSecondary};
      box-shadow: ${token.boxShadowSecondary};
    }

    padding: ${token.padding}px;
    border-radius: ${token.borderRadius}px;
    background: ${token.colorBgContainer};
    transition: all 100ms ${token.motionEaseInBack};

    margin-bottom: 8px;
    cursor: pointer;
  `,
}));

export default () => {
  // stylesオブジェクトはuseStylesメソッド内で自動的にキャッシュされるため、再レンダリングの問題を心配する必要はありません
  const { styles, cx, theme } = useStyles();

  return (
    // cxを使用してclassNameを整理
    <div
      className={cx('a-simple-create-style-demo-classname', styles.container)}
    >
      <div className={styles.card}>createStylesデモ</div>
      {/* themeオブジェクトにはすべてのトークンとテーマ情報が含まれています */}
      <div>現在のテーマモード：{theme.appearance}</div>
    </div>
  );
};
```

詳細な使用法は[createStyles API](https://ant-design.github.io/antd-style/api/create-styles)を参照してください。

### `createStylish`を使用して再利用可能なスタイルを作成する

```tsx
import { createStyles, createStylish, css } from 'antd-style';

const useStylish = createStylish(({ token, css }) => {
  const containerBgHover = css`
    cursor: pointer;
    transition: 150ms background-color ease-in-out;
    &:hover {
      background: ${token.colorFillQuaternary};
    }
  `;

  const defaultButtonBase = css`
    color: ${token.colorTextSecondary};
    background: ${token.colorFillQuaternary};
    border-color: transparent;
  `;

  return {
    defaultButton: css`
      ${defaultButtonBase};

      &:hover {
        color: ${token.colorText};
        background: ${token.colorFillSecondary};
        border-color: transparent;
      }
      &:focus {
        ${defaultButtonBase};
        border-color: ${token.colorPrimary};
      }
    `,

    containerBgHover: css`
      cursor: pointer;
      transition: 150ms background-color ease-in-out;

      &:hover {
        background: ${token.colorFillQuaternary};
      }
    `,

    containerBgL2: css`
      ${containerBgHover};
      border-radius: 4px;
      background: ${token.colorFillQuaternary};

      &:hover {
        background: ${token.colorFillTertiary};
      }
    `,
  };
});

const useStyles = createStyles({
  // CSSオブジェクトの記法をサポート
  container: {
    backgroundColor: '#f5f5f5',
    maxWidth: 400,
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // CSS文字列テンプレートを使用して、通常のCSSと同様の記法体験をサポート
  btn: css`
    padding: 24px;
  `,
});

export default () => {
  const { styles, cx } = useStyles();
  const stylish = useStylish();

  return (
    <div className={styles.container}>
      <div className={cx(styles.btn, stylish.defaultButton)}>
        スタイリッシュボタン
      </div>
    </div>
  );
};
```

詳細な使用法については、[createStylish API](https://ant-design.github.io/antd-style/zh-CN/api/create-stylish)を参照してください。

### `createGlobalStyle`を使用してグローバルスタイルを注入

```tsx
import { createGlobalStyle } from 'antd-style';

const Global = createGlobalStyle`
  .some-class {
    color: hotpink;
  }
`;

export default () => {
  return (
    <div>
      <Global />
      <div className="some-class">猛男が最も好きな色</div>
    </div>
  );
};
```

詳細な使用法については、[createGlobalStyle API](https://ant-design.github.io/antd-style/api/global-styles)を参照してください。

## テーマのカスタマイズ

### antdのテーマトークンを使用

#### `createStyles`の例

```tsx
import { SmileOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => {
  const commonCard = css`
    border-radius: ${token.borderRadiusLG}px;
    padding: ${token.paddingLG}px;
  `;

  return {
    container: css`
      background-color: ${token.colorBgLayout};
      padding: 24px;
    `,
    primaryCard: css`
      ${commonCard};
      background: ${token.colorPrimary};
      color: ${token.colorTextLightSolid};
    `,
    defaultCard: css`
      ${commonCard};
      background: ${token.colorBgContainer};
      color: ${token.colorText};
    `,
  };
});

const App = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <Space direction={'vertical'} style={{ width: '100%' }} size={16}>
        <Space>
          <Button title={'機能ボタンの説明'} icon={<SmileOutlined />} />
          操作ボタン
        </Space>
        <div className={styles.defaultCard}>通常のカード</div>
        <div className={styles.primaryCard}>主要なカード</div>
      </Space>
    </div>
  );
};

export default App;
```

#### `createGlobalStyle`の例

```tsx
import { createGlobalStyle, ThemeProvider } from 'antd-style';

const Global = createGlobalStyle`
  .ant-custom-button {
    color: ${(p) => p.theme.colorPrimary};
    background: ${(p) => p.theme.colorPrimaryBg};
    height: ${(p) => p.theme.controlHeight}px;
    border-radius: ${(p) => p.theme.borderRadius}px;
    padding: 0 ${(p) => p.theme.paddingContentHorizontal}px;

    :hover {
      background: ${(p) => p.theme.colorPrimaryBgHover};
      color: ${(p) => p.theme.colorPrimaryTextActive};
    }

    :active {
      background: ${(p) => p.theme.colorPrimaryBorder};
      color: ${(p) => p.theme.colorPrimaryText};
    }

    border: none;
    cursor: pointer;
  }
`;

export default () => {
  return (
    <ThemeProvider>
      <Global />
      <button className="ant-custom-button">antdには存在しないボタン</button>
    </ThemeProvider>
  );
};
```

## テーマのデバッグ

### テーマエディタープラグインの使用方法

![テーマエディター](https://static-docs.nocobase.com/440f844d056a485f9f0dc64a8ca1b4f4.png)

