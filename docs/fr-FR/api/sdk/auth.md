# Auth

## Overview

The `Auth` class is primarily used for accessing user information on the client-side, as well as requesting user authentication-related APIs.

## Instance Properties

### `locale`

The language used by the current user.

### `role`

The role used by the current user.

### `token`

The API interface token.

### `authenticator`

The authenticator used for current user authentication. Refer to [User Authentication](../../handbook/auth/user.md).

## Class Methods

### `signIn()`

User login.

#### Signature

- `async signIn(values: any, authenticator?: string): Promise<AxiosResponse<any>>`

#### Details

| Parameter       | Type     | Description                             |
| --------------- | -------- | --------------------------------------- |
| `values`        | `any`    | Login API request parameters            |
| `authenticator` | `string` | Authenticator identifier used for login |

### `signUp()`

User registration.

#### Signature

- `async signUp(values: any, authenticator?: string): Promise<AxiosResponse<any>>`

#### Details

| Parameter       | Type     | Description                                    |
| --------------- | -------- | ---------------------------------------------- |
| `values`        | `any`    | Registration API request parameters            |
| `authenticator` | `string` | Authenticator identifier used for registration |

### `signOut()`

Log out.

#### Signature

- `async signOut(values: any, authenticator?: string): Promise<AxiosResponse<any>>`

#### Details

| Parameter       | Type     | Description                              |
| --------------- | -------- | ---------------------------------------- |
| `values`        | `any`    | Logout API request parameters            |
| `authenticator` | `string` | Authenticator identifier used for logout |
