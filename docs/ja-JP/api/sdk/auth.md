# Auth

## 概要

`Auth` クラスは主にクライアントでユーザー情報を保存・取得し、ユーザー認証に関連するインターフェースをリクエストするために使用されます。

## インスタンス属性

### `locale`

現在のユーザーが使用している言語。

### `role`

現在のユーザーが使用している役割。

### `token`

API インターフェースの `token`。

### `authenticator`

現在のユーザーが認証時に使用する認証器。詳細は [ユーザー認証](../../handbook/auth/user) を参照してください。

## クラスメソッド

### `signIn()`

ユーザーログイン。

#### シグネチャ

- `async signIn(values: any, authenticator?: string): Promise<AxiosResponse<any>>`

#### 詳細

| パラメータ名      | タイプ   | 説明                     |
| ----------------- | -------- | ------------------------ |
| `values`          | `any`    | ログインインターフェースのリクエストパラメータ |
| `authenticator`   | `string` | ログインに使用する認証器の識別子         |

### `signUp()`

ユーザー登録。

#### シグネチャ

- `async signUp(values: any, authenticator?: string): Promise<AxiosResponse<any>>`

#### 詳細

| パラメータ名      | タイプ   | 説明                     |
| ----------------- | -------- | ------------------------ |
| `values`          | `any`    | 登録インターフェースのリクエストパラメータ |
| `authenticator`   | `string` | 登録に使用する認証器の識別子         |

### `signOut()`

ログアウト。

#### シグネチャ

- `async signOut(values: any, authenticator?: string): Promise<AxiosResponse<any>>`

#### 詳細

| パラメータ名      | タイプ   | 説明                     |
| ----------------- | -------- | ------------------------ |
| `values`          | `any`    | ログアウトインターフェースのリクエストパラメータ |
| `authenticator`   | `string` | ログアウトに使用する認証器の識別子         |