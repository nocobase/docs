# BaseInterface

## 概要

BaseInterface はすべての Interface タイプの基本クラスです。ユーザーはこのクラスを継承して、独自の Interface ロジックを実装することができます。

```typescript
class CustomInterface extends BaseInterface {
  async toValue(value: string, ctx?: any): Promise<any> {
    // カスタムの toValue ロジック
  }

  toString(value: any, ctx?: any) {
    // カスタムの toString ロジック
  }
}
// Interface を登録
db.interfaceManager.registerInterfaceType('customInterface', CustomInterface)
```

## インターフェース

### toValue(value: string, ctx?: any): Promise<any>

外部の文字列を interface の実際の値に変換します。この値は直接 Repository に渡して書き込み操作を行うことができます。

### toString(value: any, ctx?: any)

interface の実際の値を string タイプに変換します。string タイプは、エクスポートや表示時に使用することができます。
