# Authentification : WeCom (Entreprise WeChat)

<PluginInfo commercial="true" name="wecom"></PluginInfo>

## Introduction

Le plugin **WeCom (Entreprise WeChat)** permet aux utilisateurs de se connecter à NocoBase en utilisant leur compte WeCom.

## Activation du plugin

![](https://static-docs.nocobase.com/202406272056962.png)

## Créer et configurer une application WeCom personnalisée

Accédez à l'interface de gestion de WeCom et créez une application WeCom personnalisée.

![](https://static-docs.nocobase.com/202406272101321.png)

![](https://static-docs.nocobase.com/202406272102087.png)

Cliquez sur l'application pour entrer dans la page de détails, faites défiler la page et cliquez sur "Authentification WeCom".

![](https://static-docs.nocobase.com/202406272104655.png)

Définissez le domaine de rappel de l'autorisation sur le nom de domaine de l'application NocoBase.

![](https://static-docs.nocobase.com/202406272105662.png)

Retournez à la page des détails de l'application, puis cliquez sur "Autorisation Web et JS-SDK".

![](https://static-docs.nocobase.com/202406272107063.png)

Configurez et vérifiez le domaine de rappel autorisé pour la fonctionnalité d'autorisation Web OAuth2.0 de l'application.

![](https://static-docs.nocobase.com/202406272107899.png)

Dans la page des détails de l'application, cliquez sur "IP de confiance de l'entreprise".

![](https://static-docs.nocobase.com/202406272108834.png)

Configurez l'IP de l'application NocoBase.

![](https://static-docs.nocobase.com/202406272109805.png)

## Obtenir les clés depuis le panneau de gestion WeCom

Dans le panneau de gestion WeCom - Mon entreprise, copiez l'**ID de l'entreprise**.

![](https://static-docs.nocobase.com/202406272111637.png)

Dans le panneau de gestion WeCom - Gestion des applications, accédez à la page des détails de l'application que vous avez créée précédemment, puis copiez l'**AgentId** et le **Secret**.

![](https://static-docs.nocobase.com/202406272122322.png)

## Ajouter l'authentification WeCom dans NocoBase

Accédez à la page de gestion du plugin d'authentification utilisateur.

![](https://static-docs.nocobase.com/202406272115044.png)

Ajoutez - **WeCom**

![](https://static-docs.nocobase.com/202406272115805.png)

### Configuration

![](https://static-docs.nocobase.com/202412041459250.png)

| Paramètre                                                                                       | Description                                                                                           | Version requise |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ---------------- |
| Lorsque le numéro de téléphone ne correspond à aucun utilisateur existant, <br />faut-il créer un nouvel utilisateur automatiquement ? | Si le numéro de téléphone ne correspond à aucun utilisateur, doit-on créer automatiquement un nouvel utilisateur ? | -                |
| **ID de l'entreprise**                                                                          | ID de l'entreprise, obtenu depuis le panneau de gestion WeCom                                          | -                |
| **AgentId**                                                                                     | À obtenir depuis les configurations de l'application WeCom                                            | -                |
| **Secret**                                                                                       | À obtenir depuis les configurations de l'application WeCom                                            | -                |
| **Origine**                                                                                      | Le domaine actuel de l'application NocoBase                                                           | -                |
| **Lien de redirection de l'application du tableau de bord**                                      | Lien vers l'application après une connexion réussie                                                   | `v1.4.0`         |
| **Connexion automatique**                                                                        | Lors de l'ouverture du lien dans le navigateur WeCom, la connexion se fait automatiquement. Lors de la configuration de plusieurs authenticateurs WeCom, cette option ne peut être activée que pour un seul. | `v1.4.0`         |
| **Lien de la page d'accueil de l'application du tableau de bord**                               | Lien vers la page d'accueil de l'application du tableau de bord                                       | -                |

## Configurer la page d'accueil de l'application WeCom

:::info
Dans les versions **v1.4.0** et supérieures, lorsque l'option **Connexion automatique** est activée, le lien vers la page d'accueil de l'application peut être simplifié : `https://<url>/<path>`, par exemple `https://example.nocobase.com/admin`.

Il est également possible de configurer des liens distincts pour les versions mobile et bureau, par exemple `https://example.nocobase.com/m` et `https://example.nocobase.com/admin`.
:::

Accédez à l'interface de gestion de l'administrateur WeCom et remplissez le lien de la page d'accueil de l'application dans la barre d'adresse de l'application.

![](https://static-docs.nocobase.com/202406272123631.png)

![](https://static-docs.nocobase.com/202406272123048.png)

## Connexion

Accédez à la page de connexion, puis cliquez sur le bouton sous le formulaire de connexion pour lancer l'authentification via un tiers.

![](https://static-docs.nocobase.com/202406272124608.png)

:::warning
En raison des restrictions d'autorisation de WeCom sur les informations sensibles comme le numéro de téléphone, l'autorisation ne peut être complétée que dans le client WeCom. Lors de la première utilisation de la connexion WeCom, veuillez suivre les étapes ci-dessous pour effectuer l'autorisation dans le client WeCom.
:::

## Première connexion

Depuis le client WeCom, accédez à l'application et faites défiler jusqu'en bas. Cliquez sur l'application pour accéder à la page d'accueil de l'application que vous avez remplie précédemment, cela permettra de compléter l'autorisation initiale. Après cela, vous pourrez vous connecter à NocoBase en utilisant WeCom.

<img src="https://static-docs.nocobase.com/202406272131113.png" width="400" />
