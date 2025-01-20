# Manuel de l'utilisateur

## Gestion de l'authentification des utilisateurs

Lorsque le plugin d'authentification des utilisateurs est installé, il initialise une méthode d'authentification de type `mot de passe`, basée sur le nom d'utilisateur et l'email de l'utilisateur.

![](https://static-docs.nocobase.com/66eaa9d5421c9cb713b117366bd8a5d5.png)

## Activer le type d'authentification

![](https://static-docs.nocobase.com/7f1fb8f8ca5de67ffc68eff0a65848f5.png)

Seuls les types d'authentification activés seront affichés sur la page de connexion.

![](https://static-docs.nocobase.com/8375a36ef98417af0f0977f1e07345dd.png)

## Types d'authentification des utilisateurs

![](https://static-docs.nocobase.com/da4250c0cea343ebe470cbf7be4b12e4.png)

Les types d'authentification des utilisateurs actuellement supportés par NocoBase sont :

- **Mot de passe (Password)**, plugin d'authentification utilisateur intégré
- **SMS (SMS)**, étendu par le plugin [sms-auth](../../auth-sms/index.md)
- **CAS**, étendu par le plugin [cas-auth](../../auth-cas/index.md)
- **SAML**, étendu par le plugin [saml-auth](../../auth-saml/index.md)
- **OIDC**, étendu par le plugin [oidc-auth](../../auth-oidc/index.md)

De plus, vous pouvez également étendre l'authentification des utilisateurs par vous-même, consultez le [Guide du développeur](../dev/guide.md).

## Authentification par mot de passe

### Interface de configuration

![](https://static-docs.nocobase.com/202411131505095.png)

### Autoriser l'inscription

Lorsque l'inscription est autorisée, la page de connexion affichera le lien pour créer un compte et vous pourrez accéder à la page d'inscription.

![](https://static-docs.nocobase.com/78903930d4b47aaf75cf94c55dd3596e.png)

Page d'inscription

![](https://static-docs.nocobase.com/ac3c3ab42df28cb7c6dc70b24e99e7f7.png)

Lorsque l'inscription n'est pas autorisée, la page de connexion ne montrera pas le lien pour créer un compte.

![](https://static-docs.nocobase.com/8d5e3b6df9991bfc1c2e095a93745121.png)

Lorsque l'inscription n'est pas autorisée, la page d'inscription ne pourra pas être accédée.

![](https://static-docs.nocobase.com/09325c4b07e09f88f80a14dff8430556.png)

### Paramètres du formulaire d'inscription

:::info
Les versions `v1.4.0-beta.7` et ultérieures prennent en charge cette fonctionnalité.
:::

Vous pouvez définir les champs de la collection des utilisateurs à afficher dans le formulaire d'inscription et s'ils sont requis ou non. Au moins un des champs `nom d'utilisateur` ou `email` doit être défini pour s'afficher et être requis.

![](https://static-docs.nocobase.com/202411262133669.png)

Page d'inscription

![](https://static-docs.nocobase.com/202411262135801.png)
