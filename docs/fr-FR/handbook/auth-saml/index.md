# Auth: SAML 2.0

<PluginInfo commercial="true" name="auth-saml"></PluginInfo>

## Introduction

Le plugin **Auth: SAML 2.0** suit la norme de protocole SAML 2.0 (Security Assertion Markup Language 2.0), permettant aux utilisateurs de se connecter à NocoBase en utilisant les comptes fournis par des fournisseurs de services d'authentification d'identité tiers (IdP).

## Activer le Plugin

![](https://static-docs.nocobase.com/6a12f3d8073c47532a4f8aac900e4296.png)

## Ajouter l'Authentification SAML

Allez dans la page de gestion du plugin d'authentification des utilisateurs.

![](../auth-oidc/static/2023-12-03-18-19-33.png)

Ajoutez - SAML

![](https://static-docs.nocobase.com/5076fe56086b7799be308bbaf7c4425d.png)

## Configuration

![](https://static-docs.nocobase.com/976b66e589973c322d81dcddd22c6146.png)

- **SSO URL** : Fournie par l'IdP, utilisée pour la connexion unique (SSO).
- **Certificat Public** : Fournie par l'IdP.
- **Entity ID (IdP Issuer)** : Optionnel, fourni par l'IdP.
- **http** : Si votre application NocoBase utilise le protocole http, cochez cette option.
- **Utiliser ce champ pour lier l'utilisateur** : Le champ utilisé pour faire correspondre et lier les utilisateurs existants, peut être l'email ou le nom d'utilisateur, par défaut c'est l'email. Les informations utilisateur fournies par l'IdP doivent contenir le champ `email` ou `username`.
- **Inscription automatique lorsque l'utilisateur n'existe pas** : Si un utilisateur correspondant n'est pas trouvé, un nouvel utilisateur sera créé automatiquement.
- **Utilisation** : Les configurations `SP Issuer / EntityID` et `ACS URL` doivent être copiées et remplies dans la configuration correspondante dans l'IdP.

## Mapping des Champs

Le mapping des champs doit être configuré sur la plateforme de configuration de l'IdP. Vous pouvez vous référer à [cet exemple](../auth-saml/example/google.md).

Les champs disponibles pour le mapping dans NocoBase sont :

- email (obligatoire)
- téléphone (uniquement efficace pour les plateformes qui supportent `phone` dans le scope, comme Alibaba Cloud, Lark)
- nickname
- username
- firstName
- lastName

Le champ `nameID` est porté par le protocole SAML et n'a pas besoin d'être mappé, il sera enregistré comme un identifiant unique de l'utilisateur.  
La règle de priorité pour l'attribution du pseudonyme à un nouvel utilisateur est : `nickname` > `firstName lastName` > `username` > `nameID`.  
Actuellement, le mapping des organisations et des rôles des utilisateurs n'est pas supporté.

## Connexion

Allez sur la page de connexion et cliquez sur le bouton sous le formulaire de connexion pour initier la connexion via un fournisseur tiers.

![](https://static-docs.nocobase.com/74963865c9d36a294948e6adeb5b24bc.png)
