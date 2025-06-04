# Расширение типа аутентификации

## Обзор

NocoBase поддерживает расширение типов аутентификации пользователя по мере необходимости. Аутентификация пользователя обычно делится на два типа: один заключается в определении личности пользователя в самом приложении NocoBase, например, вход по паролю, вход по SMS и т. д.; другой заключается в определении сторонними службами личности пользователя и уведомлении приложения NocoBase о результате с помощью обратных вызовов, таких как OIDC, SAML и другие методы аутентификации. Процесс аутентификации для этих двух различных типов методов аутентификации в NocoBase в основном выглядит следующим образом:

### Сторонние обратные вызовы не требуются

1. Клиент использует NocoBase SDK для вызова интерфейса входа `api.auth.signIn()`, запрашивая интерфейс входа `auth:signIn`, при этом передавая текущий идентификатор аутентификатора через заголовок запроса `X-Authenticator` в бэкэнд.
2. Интерфейс `auth:signIn` перенаправляет к соответствующему типу аутентификации на основе идентификатора аутентификатора в заголовке запроса, а метод `validate` в зарегистрированном классе аутентификации этого типа аутентификации выполняет соответствующую логическую обработку.
3. Клиент извлекает информацию о пользователе и токен аутентификации из ответа интерфейса `auth:signIn`, сохраняет токен в локальном хранилище и завершает вход. Этот шаг автоматически обрабатывается внутри SDK.
4. 
<img src="https://static-docs.nocobase.com/202404211852848.png"/>

### Dependent on Third-party Callbacks

### Зависит от сторонних обратных вызовов

1. Клиент получает сторонний URL-адрес входа через свой собственный зарегистрированный интерфейс (например, `auth:getAuthUrl`) и передает информацию, такую ​​как имя приложения и идентификатор аутентификатора, в соответствии с протоколом.
2. Перенаправляет на сторонний URL-адрес для завершения входа. Сторонняя служба вызывает интерфейс обратного вызова приложения NocoBase (который должен быть зарегистрирован самостоятельно, например `auth:redirect`), возвращает результат аутентификации и возвращает информацию, такую ​​как имя приложения и идентификатор аутентификатора.
3. В методе интерфейса обратного вызова проанализируйте параметры, чтобы получить идентификатор аутентификатора, получите соответствующий класс аутентификации через `AuthManager` и активно вызовите метод `auth.signIn()`. Метод `auth.signIn()` вызовет метод `validate()` для обработки логики аутентификации.
4. После того как метод обратного вызова получит токен аутентификации, он перенаправит обратно на страницу интерфейса с кодом состояния 302 и перенесет `token` и идентификатор аутентификатора в параметры URL, `?authenticator=xxx&token=yyy`.

<img src="https://static-docs.nocobase.com/202404211852377.png"/>

Далее мы обсудим, как регистрировать серверные интерфейсы и клиентские пользовательские интерфейсы.

## Сервер

### Интерфейс

Ядро NocoBase обеспечивает регистрацию и управление для расширения типов аутентификации. Основная логическая обработка расширения плагина входа требует наследования абстрактного класса `Auth` ядра и реализации соответствующих стандартных интерфейсов.
Полный API см. в [Auth](../../../api/auth/auth.md).


```typescript
import { Auth } from '@nocobase/auth';

class CustomAuth extends Auth {
  set user(user) {}
  get user() {}

  async check() {}
  async signIn() {}
}
```

В большинстве случаев расширенный тип аутентификации пользователя может также использовать существующую логику аутентификации JWT для генерации учетных данных для доступа пользователя к API. Класс `BaseAuth` в ядре выполнил базовую реализацию абстрактного класса `Auth`, см. [BaseAuth](../../../api/auth/base-auth.md). Плагины могут напрямую наследовать класс `BaseAuth` для повторного использования части логического кода и снижения затрат на разработку.

```javascript
import { BaseAuth } from '@nocobase/auth';

class CustomAuth extends BaseAuth {
  constructor(config: AuthConfig) {
    // Set user data table
    const userCollection = config.ctx.db.getCollection('users');
    super({ ...config, userCollection });
  }

  // Implement user login logic
  async validate() {}
}
```

### Данные пользователя

В приложении NocoBase связанные коллекции по умолчанию определяются следующим образом:

| Collections           | Description                                                                                                          | Plugin                                                         |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `users`               | Store user information, such as email, nickname, and password                                                        | [User Plugin (`@nocobase/plugin-users`)](../../users/index.md) |
| `authenticators`      | Store authenticator (authentication type entity) information, corresponding to authentication type and configuration | User Authentication Plugin (`@nocobase/plugin-auth`)           |
| `usersAuthenticators` | Associates users and authenticators, saves user information under the corresponding authenticator                    | User Authentication Plugin (`@nocobase/plugin-auth`)           |

В общем, расширенные методы входа используют `users` и `usersAuthenticators` для хранения соответствующих пользовательских данных. Только в особых случаях вам нужно добавить новую коллекцию самостоятельно.

Основные поля `usersAuthenticators`:

| Field           | Description                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------- |
| `uuid`          | Unique identifier for this type of authentication, such as phone number, WeChat openid, etc |
| `meta`          | JSON field, other information to be saved                                                   |
| `userId`        | User ID                                                                                     |
| `authenticator` | Authenticator name (unique identifier)                                                      |

Для операций запроса и создания пользователя модель данных `authenticators` `AuthModel` также инкапсулирует несколько методов, которые могут использоваться в классе `CustomAuth` через `this.authenticator[methodName]`. Для полного API см. [AuthModel](../dev/api.md#authmodel).

```ts
import { AuthModel } from '@nocobase/plugin-auth';

class CustomAuth extends BaseAuth {
  async validate() {
    // ...
    const authenticator = this.authenticator as AuthModel;
    this.authenticator.findUser(); // Query user
    this.authenticator.newUser(); // Create new user
    this.authenticator.findOrCreateUser(); // Query or create new user
    // ...
  }
}
```

### Регистрация типа аутентификации

Расширенный метод аутентификации необходимо зарегистрировать в модуле управления аутентификацией.

```javascript
class CustomAuthPlugin extends Plugin {
  async load() {
    this.app.authManager.registerTypes('custom-auth-type', {
      auth: CustomAuth,
    });
  }
}
```

## Клиент

Пользовательский интерфейс клиента регистрируется через интерфейс `registerType`, предоставляемый клиентом плагина аутентификации пользователя:

```ts
import AuthPlugin from '@nocobase/plugin-auth/client';

class CustomAuthPlugin extends Plugin {
  async load() {
    const auth = this.app.pm.get(AuthPlugin);
    auth.registerType('custom-auth-type', {
      components: {
        SignInForm, // Sign in form
        SignInButton, // Sign in (third party) button, can be either with the login form
        SignUpForm, // Sign up form
        AdminSettingsForm, // Backstage management form
      },
    });
  }
}
```

### Форма входа

![](https://static-docs.nocobase.com/33afe18f229c3db45c7a1921c2c050b7.png)

Если несколько аутентификаторов, соответствующих типу аутентификации, имеют зарегистрированные формы входа, они будут отображаться в виде вкладок. Заголовок вкладки — это заголовок аутентификатора, настроенного в фоновом режиме.

![](https://static-docs.nocobase.com/ada6d7add744be0c812359c23bf4c7fc.png)

### Кнопка входа

![](https://static-docs.nocobase.com/e706f7785782adc77b0f4ee4faadfab8.png)

Обычно для сторонних кнопок входа, но на самом деле может быть любым компонентом.

### Форма регистрации

![](https://static-docs.nocobase.com/f95c53431bf21ec312fcfd51923f0b42.png)

Если вам нужно перейти со страницы входа на страницу регистрации, вам нужно сделать это самостоятельно в компоненте входа.

### Форма управления бэкэндом

![](https://static-docs.nocobase.com/f4b544b5b0f5afee5621ad4abf66b24f.png)

Вверху находится общая конфигурация аутентификатора, а внизу — часть формы пользовательской конфигурации, которую можно зарегистрировать.

### API запросов

Чтобы инициировать запросы на интерфейсы, связанные с аутентификацией пользователя, на стороне клиента, вы можете использовать SDK, предоставляемый NocoBase.

```ts
import { useAPIClient } from '@nocobase/client';

// Use in component
const api = useAPIClient();
api.auth.signIn(data, authenticator);
```

Подробные справочные материалы по API см. в [@nocobase/sdk - Auth](../../../api/sdk/auth.md).
