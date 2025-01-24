# Référence API

## Côté Serveur

### Auth

API du noyau, référence : [Auth](../../../api/auth/auth.md)

### BaseAuth

API du noyau, référence : [BaseAuth](../../../api/auth/base-auth.md)

### AuthModel

#### Vue d'ensemble

`AuthModel` est l'authentificateur utilisé dans les applications NocoBase (`Authenticator`, référence : [AuthManager - setStorer](../../../api/auth/auth-manager.md#setstorer) et [Auth - constructeur](../../../api/auth/auth.md#constructor)), fournissant des méthodes pour interagir avec la collection de données utilisateur. En outre, les méthodes fournies par le modèle Sequelize peuvent également être utilisées.

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

#### Méthodes de classe

- `findUser(uuid: string): UserModel` - Rechercher un utilisateur par `uuid`.

  - `uuid` - Identifiant unique de l'utilisateur pour le type d'authentification actuel.

- `newUser(uuid: string, userValues?: any): UserModel` - Créer un nouvel utilisateur, lier l'utilisateur à l'authentificateur actuel via `uuid`.

  - `uuid` - Identifiant unique de l'utilisateur pour le type d'authentification actuel.
  - `userValues` - Optionnel. Autres informations sur l'utilisateur. Si non fourni, `uuid` sera utilisé comme pseudonyme de l'utilisateur.

- `findOrCreateUser(uuid: string, userValues?: any): UserModel` - Rechercher ou créer un nouvel utilisateur, la règle de création est la même que ci-dessus.
  - `uuid` - Identifiant unique de l'utilisateur pour le type d'authentification actuel.
  - `userValues` - Optionnel. Autres informations sur l'utilisateur.

## Côté Client

### `plugin.registerType()`

Enregistrer le client du type d'authentification.

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

#### Signature

- `registerType(authType: string, options: AuthOptions)`

#### Type

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

#### Détails

- `SignInForm` - Formulaire de connexion
- `SignInButton` - Bouton de connexion (tiers), peut être utilisé comme alternative au formulaire de connexion
- `SignUpForm` - Formulaire d'inscription
- `AdminSettingsForm` - Formulaire de configuration de l'administrateur

### Route

Les routes frontend pour l'enregistrement du plugin d'authentification sont les suivantes :

- Mise en page d'authentification
  - nom : `auth`
  - chemin : `-`
  - composant : `AuthLayout`

- Page de connexion
  - nom : `auth.signin`
  - chemin : `/signin`
  - composant : `SignInPage`

- Page d'inscription
  - nom : `auth.signup`
  - chemin : `/signup`
  - composant : `SignUpPage`
