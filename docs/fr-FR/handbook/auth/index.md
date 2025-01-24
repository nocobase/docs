# Authentification Utilisateur

## Introduction

Le module d'authentification utilisateur de NocoBase se compose principalement de deux parties :

- Le module `@nocobase/auth` dans le noyau définit des interfaces et des middleware extensibles pour la connexion, l'inscription, la vérification et d'autres fonctions liées à l'authentification des utilisateurs. Il est également utilisé pour enregistrer et gérer diverses méthodes d'authentification étendues.
- Le plugin `@nocobase/plugin-auth` est utilisé pour initialiser le module de gestion de l'authentification dans le noyau. Il fournit également une méthode d'authentification de base par nom d'utilisateur (ou email) et mot de passe.

> Il doit être utilisé en combinaison avec la fonctionnalité de gestion des utilisateurs fournie par le plugin [`@nocobase/plugin-users`](../users/index.md).

En outre, NocoBase propose également divers plugins pour d'autres méthodes d'authentification des utilisateurs :

- [@nocobase/plugin-auth-sms](../auth-sms/index.md) - Fournit la fonction de connexion par vérification SMS
- [@nocobase/plugin-auth-saml](../auth-saml/index.md) - Fournit la fonction de connexion SSO via SAML
- [@nocobase/plugin-auth-oidc](../auth-oidc/index.md) - Fournit la fonction de connexion SSO via OIDC
- [@nocobase/plugin-auth-cas](../auth-cas/index.md) - Fournit la fonction de connexion SSO via CAS

Grâce à ces plugins, après que l'administrateur ait configuré la méthode d'authentification correspondante, les utilisateurs peuvent se connecter directement au système avec l'identité utilisateur fournie par des plateformes telles que Google Workspace, Microsoft Azure. Ils peuvent également se connecter à des outils de plateforme comme Auth0, Logto, Keycloak, et plus encore. De plus, les développeurs peuvent facilement étendre d'autres méthodes d'authentification selon leurs besoins à l'aide des interfaces de base fournies par NocoBase.
