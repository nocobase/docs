# Se connecter avec Google

> https://developers.google.com/identity/openid-connect/openid-connect

## Obtenir les identifiants OAuth 2.0 de Google

Allez sur [Google Cloud Console](https://console.cloud.google.com/apis/credentials) - Créer des identifiants - ID de client OAuth

![](https://static-docs.nocobase.com/0f2946c8643565ecc4ac13249882638c.png)

Accédez à l'interface de configuration et remplissez l'URL de redirection autorisée. L'URL de redirection peut être obtenue lors de l'ajout d'un authentificateur dans NocoBase. Elle est généralement sous la forme `http(s)://hôte:port/api/oidc:redirect`. Voir la section [Manuel de l'utilisateur - Configuration](../index.md#configuration).

![](https://static-docs.nocobase.com/24078bf52ec966a16334894cb3d9d126.png)

## Ajouter un nouvel Authentificateur dans NocoBase

Paramètres du plugin - Authentification des utilisateurs - Ajouter - OIDC

![](https://static-docs.nocobase.com/0e4b1acdef6335aaee2139ae6629977b.png)

Référez-vous aux paramètres présentés dans la section [Manuel de l'utilisateur - Configuration](../index.md#configuration) pour compléter la configuration de l'authentificateur.
