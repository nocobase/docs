# MicroSoft Entra ID

> https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app  
> https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols-oidc

## Ajouter un Authentificateur sur NocoBase

Tout d'abord, ajoutez un authentificateur sur NocoBase : Paramètres du plugin - Authentification des utilisateurs - Ajouter - OIDC.

Copiez l'URL de redirection.

![](https://static-docs.nocobase.com/202412021504114.png)

## Enregistrer l'application

Ouvrez le Microsoft Entra Admin Center et enregistrez une nouvelle application.

![](https://static-docs.nocobase.com/202412021506837.png)

Dans ce champ, entrez l'URL de redirection copiée précédemment.

![](https://static-docs.nocobase.com/202412021506380.png)

## Obtenez et remplissez les informations correspondantes

Cliquez sur l'application que vous venez d'enregistrer, puis copiez l'**ID d'application (client)** et l'**ID du répertoire (locataire)**.

![](https://static-docs.nocobase.com/202412021509602.png)

Cliquez sur **Certificats et secrets**, créez un nouveau secret client (Client secrets) et copiez la **valeur**.

![](https://static-docs.nocobase.com/202412021512616.png)

Les informations ci-dessus et leur correspondance avec la configuration de l'authentificateur NocoBase sont les suivantes :

| Informations MicroSoft Entra   | Configuration de l'authentificateur NocoBase                                                                                                          |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ID de l'application (client)  | Client ID                                                                                                                                           |
| Client secrets - Valeur       | Client secret                                                                                                                                       |
| ID du répertoire (locataire)  | Issuer :<br />https://login.microsoftonline.com/{tenant}/v2.0/.well-known/openid-configuration, remplacez `{tenant}` par l'ID du répertoire        |
