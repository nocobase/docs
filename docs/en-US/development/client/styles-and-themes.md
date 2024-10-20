# Styles & Themes

To better accommodate NocoBase's dynamic theme capabilities, it is recommended to use [antd-style](https://ant-design.github.io/antd-style/zh-CN/guide) when writing styles in the plugin. By combining it with the existing [theme tokens](https://ant.design/docs/react/customize-theme-cn#seedtoken), you can efficiently manage the dynamic aspects of themes. Additionally, NocoBase provides a [theme editor plugin](#) that allows for easy style adjustments.

## Writing Styles

### Writing Styles with `createStyles` (Recommended)

```tsx
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  // Supports CSS object syntax
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
  // Also supports CSS string templates for a familiar CSS writing experience
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
  // The styles object is cached by default in the useStyles method, so re-rendering is not a concern
  const { styles, cx, theme } = useStyles();

  return (
    // Use cx to organize classNames
    <div
      className={cx('a-simple-create-style-demo-classname', styles.container)}
    >
      <div className={styles.card}>createStyles Demo</div>
      {/* The theme object contains all tokens and theme-related information */}
      <div>Current theme mode: {theme.appearance}</div>
    </div>
  );
};
```

For detailed usage, refer to the [createStyles API](https://ant-design.github.io/antd-style/zh-CN/api/create-styles).

### Creating Reusable Styles with `createStylish`

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
  // Supports CSS object syntax
  container: {
    backgroundColor: '#f5f5f5',
    maxWidth: 400,
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Also supports CSS string templates for a familiar CSS writing experience
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
        Stylish Button
      </div>
    </div>
  );
};
```

For detailed usage, refer to the [createStylish API](https://ant-design.github.io/antd-style/zh-CN/api/create-stylish).

### Injecting Global Styles with `createGlobalStyle`

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
      <div className="some-class">Favorite color of macho men</div>
    </div>
  );
};
```

For detailed usage, refer to the [createGlobalStyle API](https://ant-design.github.io/antd-style/zh-CN/api/global-styles).

## Customizing Themes

### Using `antd`'s Theme Tokens

#### `createStyles` Example

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
          <Button title={'Feature button description'} icon={<SmileOutlined />} />
          Action button
        </Space>
        <div className={styles.defaultCard}>Default Card</div>
        <div className={styles.primaryCard}>Primary Card</div>
      </Space>
    </div>
  );
};

export default App;
```

#### `createGlobalStyle` Example

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
      <button className="ant-custom-button">Button not available in antd</button>
    </ThemeProvider>
  );
};
```

## Debugging Themes

### Using the Theme Editor Plugin

![Theme Editor](https://static-docs.nocobase.com/440f844d056a485f9f0dc64a8ca1b4f4.png)
