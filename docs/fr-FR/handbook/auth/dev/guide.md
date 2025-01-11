# Étendre le Type d'Authentification

## Vue d'ensemble

NocoBase prend en charge l'extension des types d'authentification des utilisateurs selon les besoins. L'authentification des utilisateurs se divise généralement en deux types : l'un consiste à déterminer l'identité de l'utilisateur au sein de l'application NocoBase elle-même, comme la connexion par mot de passe, la connexion par SMS, etc.; l'autre consiste à utiliser des services tiers pour déterminer l'identité de l'utilisateur et à notifier l'application NocoBase du résultat via des rappels, comme OIDC, SAML, et autres méthodes d'authentification. Le processus d'authentification pour ces deux types d'authentification dans NocoBase est essentiellement le suivant :

### Aucuns rappels tiers requis

1. Le client utilise le SDK NocoBase pour appeler l'interface de connexion `api.auth.signIn()`, demandant l'interface de connexion `auth:signIn`, tout en envoyant l'identifiant de l'authentificateur actuel via l'en-tête de la requête `X-Authenticator` vers le backend.
2. L'interface `auth:signIn` transmet à l'authentification correspondante basée sur l'identifiant de l'authentificateur dans l'en-tête de la requête, et la méthode `validate` dans la classe d'authentification enregistrée pour ce type d'authentification effectue le traitement logique correspondant.
3. Le client récupère les informations utilisateur et le jeton d'authentification à partir de la réponse de l'interface `auth:signIn`, sauvegarde le jeton dans le stockage local, et termine la connexion. Cette étape est automatiquement gérée en interne par le SDK.

![Aucun rappel tiers requis](https://static-docs.nocobase.com/202404211852848.png)

### Dépendant des rappels tiers

1. Le client obtient l'URL de connexion tierce via son propre interface enregistrée (comme `auth:getAuthUrl`), en envoyant des informations telles que le nom de l'application et l'identifiant de l'authentificateur selon le protocole.
2. Il est redirigé vers l'URL tierce pour compléter la connexion. Le service tiers appelle l'interface de rappel de l'application NocoBase (qui doit être enregistrée, comme `auth:redirect`), renvoie le résultat d'authentification, et retourne des informations telles que le nom de l'application et l'identifiant de l'authentificateur.
3. Dans la méthode de l'interface de rappel, les paramètres sont analysés pour obtenir l'identifiant de l'authentificateur, obtenir la classe d'authentification correspondante via `AuthManager`, et appeler activement la méthode `auth.signIn()`. La méthode `auth.signIn()` appellera la méthode `validate()` pour traiter la logique d'authentification.
4. Après que la méthode de rappel obtienne le jeton d'authentification, elle redirige vers la page frontend avec un code de statut 302, en portant les paramètres URL `?authenticator=xxx&token=yyy`.

![Dépendant des rappels tiers](https://static-docs.nocobase.com/202404211852377.png)

Ensuite, nous discuterons de la manière d'enregistrer les interfaces côté serveur et les interfaces utilisateur côté client.

## Serveur

### Interface

Le noyau NocoBase fournit l'enregistrement et la gestion des types d'authentification étendus. Le traitement logique principal pour étendre le plugin de connexion nécessite l'héritage de la classe abstraite `Auth` du noyau et la mise en œuvre des interfaces standard correspondantes.
Pour l'API complète, consultez [Auth](../../../api/auth/auth.md).

```typescript
import { Auth } from '@nocobase/auth';

class CustomAuth extends Auth {
  set user(user) {}
  get user() {}

  async check() {}
  async signIn() {}
}
```

Dans la plupart des cas, le type d'authentification utilisateur étendu peut également utiliser la logique d'authentification JWT existante pour générer le jeton d'authentification permettant à l'utilisateur d'accéder à l'API. La classe `BaseAuth` dans le noyau a déjà implémenté la classe abstraite `Auth`, consultez [BaseAuth](../../../api/auth/base-auth.md). Les plugins peuvent hériter directement de la classe `BaseAuth` pour réutiliser une partie du code logique et réduire les coûts de développement.

```javascript
import { BaseAuth } from '@nocobase/auth';

class CustomAuth extends BaseAuth {
  constructor(config: AuthConfig) {
    // Définir la table des utilisateurs
    const userCollection = config.ctx.db.getCollection('users');
    super({ ...config, userCollection });
  }

  // Implémenter la logique de connexion utilisateur
  async validate() {}
}
```

### Données Utilisateur

Dans une application NocoBase, les collections liées sont définies par défaut comme suit :

| Collections           | Description                                                                                                          | Plugin                                                         |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `users`               | Stocke les informations utilisateur, comme l'email, le surnom et le mot de passe                                    | [Plugin Utilisateur (`@nocobase/plugin-users`)](../../users/index.md) |
| `authenticators`      | Stocke les informations de l'authentificateur (type d'entité d'authentification), correspondant au type d'authentification et à la configuration | Plugin Authentification Utilisateur (`@nocobase/plugin-auth`) |
| `usersAuthenticators` | Associe les utilisateurs et les authentificateurs, en enregistrant les informations utilisateur sous l'authentificateur correspondant | Plugin Authentification Utilisateur (`@nocobase/plugin-auth`) |

En général, les méthodes de connexion étendues utilisent `users` et `usersAuthenticators` pour stocker les données utilisateur correspondantes. Seuls dans des cas particuliers, il est nécessaire d'ajouter une nouvelle collection par vous-même.

Les principaux champs de `usersAuthenticators` sont :

| Champ            | Description                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------- |
| `uuid`           | Identifiant unique pour ce type d'authentification, comme le numéro de téléphone, l'openid WeChat, etc |
| `meta`           | Champ JSON, pour d'autres informations à sauvegarder                                        |
| `userId`         | Identifiant de l'utilisateur                                                                 |
| `authenticator`  | Nom de l'authentificateur (identifiant unique)                                               |

Pour les opérations de recherche et de création d'utilisateurs, le modèle de données `AuthModel` des authentificateurs encapsule également plusieurs méthodes pouvant être utilisées dans la classe `CustomAuth` via `this.authenticator[methodName]`. Pour l'API complète, consultez [AuthModel](../dev/api.md#authmodel).

```ts
import { AuthModel } from '@nocobase/plugin-auth';

class CustomAuth extends BaseAuth {
  async validate() {
    // ...
    const authenticator = this.authenticator as AuthModel;
    this.authenticator.findUser(); // Rechercher un utilisateur
    this.authenticator.newUser(); // Créer un nouvel utilisateur
    this.authenticator.findOrCreateUser(); // Rechercher ou créer un utilisateur
    // ...
  }
}
```

### Enregistrement du Type d'Authentification

La méthode d'authentification étendue doit être enregistrée dans le module de gestion des authentifications.

```javascript
class CustomAuthPlugin extends Plugin {
  async load() {
    this.app.authManager.registerTypes('custom-auth-type', {
      auth: CustomAuth,
    });
  }
}
```

## Client

L'interface utilisateur côté client est enregistrée via l'interface `registerType` fournie par le plugin d'authentification utilisateur client :

```ts
import AuthPlugin from '@nocobase/plugin-auth/client';

class CustomAuthPlugin extends Plugin {
  async load() {
    const auth = this.app.pm.get(AuthPlugin);
    auth.registerType('custom-auth-type', {
      components: {
        SignInForm, // Formulaire de connexion
        SignInButton, // Bouton de connexion (tiers), peut être avec ou sans formulaire de connexion
        SignUpForm, // Formulaire d'inscription
        AdminSettingsForm, // Formulaire de gestion administrative
      },
    });
  }
}
```

### Formulaire de Connexion

![](https://static-docs.nocobase.com/33afe18f229c3db45c7a1921c2c050b7.png)

Si plusieurs authentificateurs correspondant au type d'authentification ont enregistré des formulaires de connexion, ceux-ci seront affichés sous forme d'onglets. Le titre de l'onglet est le titre de l'authentificateur configuré en arrière-plan.

![](https://static-docs.nocobase.com/ada6d7add744be0c812359c23bf4c7fc.png)

### Bouton de Connexion

![](https://static-docs.nocobase.com/e706f7785782adc77b0f4ee4faadfab8.png)

Ce bouton est généralement utilisé pour la connexion tierce, mais peut en réalité être n'importe quel composant.

### Formulaire d'Inscription

![](https://static-docs.nocobase.com/f95c53431bf21ec312fcfd51923f0b42.png)

Si vous avez besoin de passer de la page de connexion à la page d'inscription, vous devez gérer cela vous-même dans le composant de connexion.

### Formulaire de Gestion Back-End

![](https://static-doc

s.nocobase.com/f4b544b5b0f5afee5621ad4abf66b24f.png)

En haut se trouve la configuration générique de l'authentificateur, et en bas se trouve la partie du formulaire de configuration personnalisée qui peut être enregistrée.

### Requêtes API

Pour initier des requêtes sur les interfaces liées à l'authentification des utilisateurs côté client, vous pouvez utiliser le SDK fourni par NocoBase.

```ts
import { useAPIClient } from '@nocobase/client';

// Utiliser dans le composant
const api = useAPIClient();
api.auth.signIn(data, authenticator);
```

Pour des références d'API détaillées, consultez [@nocobase/sdk - Auth](../../../api/sdk/auth.md).
