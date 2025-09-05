# Ссылка на API

## Серверная сторона

### Auth

API ядра, ссылка: [Auth](../../../api/auth/auth.md)

### BaseAuth

API ядра, ссылка: [BaseAuth](../../../api/auth/base-auth.md)

### AuthModel

#### Обзор

`AuthModel` — это аутентификатор, используемый в приложениях NocoBase (`Authenticator`, ссылка: [AuthManager - setStorer](../../../api/auth/auth-manager.md#setstorer) и [Auth - constructor](../../../api/auth/auth.md#constructor)), предоставляющий некоторые методы для взаимодействия с пользовательской коллекцией данных. Кроме того, можно использовать методы, предоставляемые Sequelize Model.

```ts
import { AuthModel } from '@nocobase/plugin-auth';

class CustomAuth extends BaseAuth {
  async validate() {
    // ...
    const authenticator = this.authenticator as AuthModel;
    this.authenticator.findUser();
    this.authenticator.newUser();
    this.authenticator.findOrCreateUser();
    // ...
  }
}
```

#### Методы класса

- `findUser(uuid: string): UserModel` - Запрос пользователя по `uuid`.

- `uuid` - Уникальный идентификатор пользователя из текущего типа аутентификации

- `newUser(uuid: string, userValues?: any): UserModel` - Создать нового пользователя, привязать пользователя к текущему аутентификатору через `uuid`.

- `uuid` - Уникальный идентификатор пользователя из текущего типа аутентификации
- `userValues` - Необязательно. Другая информация о пользователе. Если не передано, `uuid` будет использоваться как псевдоним пользователя.

- `findOrCreateUser(uuid: string, userValues?: any): UserModel` - Найти или создать нового пользователя, правило создания такое же, как указано выше.
- `uuid` - Уникальный идентификатор пользователя из текущего типа аутентификации
- `userValues` - Необязательно. Другая информация о пользователе.

## Клиентская сторона

### `plugin.registerType()`

Регистрация клиента типа аутентификации.

```ts
import AuthPlugin from '@nocobase/plugin-auth/client';

class CustomAuthPlugin extends Plugin {
  async load() {
    const auth = this.app.pm.get(AuthPlugin);
    auth.registerType('custom-auth-type', {
      components: {
        SignInForm,
        // SignInButton
        SignUpForm,
        AdminSettingsForm,
      },
    });
  }
}
```

#### Подпись

- `registerType(authType: string, options: AuthOptions)`

#### Тип

```ts
export type AuthOptions = {
  components: Partial<{
    SignInForm: ComponentType<{ authenticator: AuthenticatorType }>;
    SignInButton: ComponentType<{ authenticator: AuthenticatorType }>;
    SignUpForm: ComponentType<{ authenticatorName: string }>;
    AdminSettingsForm: ComponentType;
  }>;
};
```

#### Подробности

- `SignInForm` - Форма входа
- `SignInButton` - Кнопка входа (стороннего разработчика), может использоваться как альтернатива форме входа
- `SignUpForm` - Форма регистрации
- `AdminSettingsForm` - Форма конфигурации администратора

### Маршрут

Фронтенд-маршруты для регистрации плагина аутентификации следующие:

- Auth Layout
  - name: `auth`
  - path: `-`
  - component: `AuthLayout`

- SignIn Page
  - name: `auth.signin`
  - path: `/signin`
  - component: `SignInPage`

- SignUp Page
  - name: `auth.signup`
  - path: `/signup`
  - component: `SignUpPage`
