# Auth: OIDC

<PluginInfo commercial="true" name="auth-oidc"></PluginInfo>

## Introduction

Le plugin **Auth: OIDC** suit la norme du protocole OIDC (Open ConnectID), utilisant le flux de code d'autorisation, permettant aux utilisateurs de se connecter à NocoBase en utilisant des comptes fournis par des prestataires de services d'authentification d'identité tiers (IdP).

## Activer le Plugin

![](https://static.docs.nocobase.com/202411122358790.png)

## Ajouter l'authentification OIDC

Accédez à la **page de gestion du plugin d'authentification des utilisateurs**.

![](https://static.docs.nocobase.com/202411130004459.png)

Cliquez sur **Ajouter** et sélectionnez **OIDC**.

![](https://static.docs.nocobase.com/1efbde1c0e2f4967efc1c4336be45ca2.png)

## Configuration

### Configuration de base

![](https://static.docs.nocobase.com/202411130006341.png)

| Configuration                                         | Description                                                                                                             | Version         |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------- |
| **Inscription automatique lorsqu'aucun utilisateur n'existe** | Détermine si un nouvel utilisateur doit être automatiquement créé lorsqu'aucun utilisateur correspondant n'est trouvé.   | -               |
| **Émetteur**                                          | L'émetteur fourni par l'IdP, se terminant généralement par `/.well-known/openid-configuration`.                           | -               |
| **ID Client**                                         | L'ID Client                                                                                                             | -               |
| **Secret Client**                                     | Le Secret Client                                                                                                        | -               |
| **Portée (Scope)**                                    | Facultatif, par défaut `openid email profile`.                                                                           | -               |
| **Algorithme de signature du jeton id_token**          | L'algorithme de signature pour `id_token`, par défaut `RS256`.                                                          | -               |
| **Activer la déconnexion initiée par le RP**          | Active la déconnexion initiée par le RP. Cela déconnecte la session de l'IdP lorsque l'utilisateur se déconnecte. L'URL de redirection après déconnexion doit être configurée dans [Utilisation](#utilisation). | `v1.3.44-beta` |

### Mappage des champs

| Configuration                     | Description                                                                                                     |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Mappage des champs**             | Mappage des champs. NocoBase prend en charge le mappage de champs tels que le surnom, l'email et le numéro de téléphone. Le surnom par défaut est `openid`. |
| **Champ utilisé pour lier l'utilisateur** | Utilisé pour faire correspondre et lier avec les utilisateurs existants. Vous pouvez choisir l'email ou le nom d'utilisateur, l'email étant par défaut. L'IdP doit fournir des informations sur l'`email` ou le `nom d'utilisateur`. |

### Configuration avancée

![](https://static.docs.nocobase.com/202411130013306.png)

| Configuration                                                        | Description                                                                                                                                                               | Version         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| **HTTP**                                                            | Détermine si l'URL de retour de NocoBase utilise le protocole HTTP, par défaut c'est `https`.                                                                           | -               |
| **Port**                                                            | Port pour l'URL de retour de NocoBase, par défaut `443/80`.                                                                                                               | -               |
| **Jeton d'état**                                                     | Utilisé pour vérifier la source de la demande et éviter les attaques CSRF. Vous pouvez fournir une valeur fixe, mais **laisser ce champ vide pour générer des valeurs aléatoires par défaut est fortement recommandé. Si vous utilisez une valeur fixe, évaluez soigneusement votre environnement et les risques de sécurité.** | -               |
| **Passer des paramètres lors de l'échange du code d'autorisation**   | Certains IdPs peuvent exiger le passage de l'ID Client ou du Secret Client comme paramètres lors de l'échange d'un code contre un jeton. Vous pouvez sélectionner cette option et spécifier les noms des paramètres correspondants. | -               |
| **Méthode pour appeler l'endpoint des informations utilisateur**     | La méthode HTTP utilisée pour appeler l'API d'informations sur l'utilisateur.                                                                                             | -               |
| **Où placer le jeton d'accès lors de l'appel à l'endpoint des informations utilisateur** | Comment le jeton d'accès est passé lors de l'appel à l'API d'informations utilisateur :<br/>- En-tête - Dans l'en-tête de la requête (par défaut).<br />- Corps - Dans le corps de la requête, utilisé avec la méthode `POST`.<br />- Paramètres de la requête - En tant que paramètres de la requête, utilisés avec la méthode `GET`. | -               |
| **Ignorer la vérification SSL**                                     | Ignorer la vérification SSL lors de l'appel à l'API de l'IdP. **Cette option expose votre système à des risques d'attaques de type "man-in-the-middle". N'activez cette option que si vous comprenez son but et ses implications. Elle est fortement déconseillée dans les environnements de production.** | `v1.3.40-beta` |

---

### Utilisation

| Configuration                  | Description                                                                                              |
| ------------------------------ | -------------------------------------------------------------------------------------------------------- |
| **URL de redirection**          | Utilisée pour configurer l'URL de retour dans l'IdP.                                                     |
| **URL de redirection après déconnexion** | Utilisée pour configurer l'URL de redirection après déconnexion dans l'IdP lorsque la déconnexion initiée par le RP est activée. |

:::info
Lors des tests en local, utilisez `127.0.0.1` au lieu de `localhost` pour l'URL, car la connexion OIDC nécessite l'écriture d'un état dans le cookie client pour la validation de sécurité. Si vous voyez un clignotement de la fenêtre de connexion mais échouez à vous connecter, vérifiez les journaux du serveur pour les problèmes de non-correspondance des états et assurez-vous que le paramètre d'état est inclus dans le cookie de la requête. Ce problème se produit souvent lorsque l'état dans le cookie client ne correspond pas à l'état dans la requête.
:::

### Connexion

Accédez à la page de connexion et cliquez sur le bouton sous le formulaire de connexion pour initier la connexion via un fournisseur tiers.

![](https://static-docs.nocobase.com/e493d156254c2ac0b6f6e1002e6a2e6b.png)
