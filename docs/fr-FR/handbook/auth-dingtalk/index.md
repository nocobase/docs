# Auth: DingTalk

<PluginInfo commercial="true" name="auth-dingtalk"></PluginInfo>

## Introduction

Le plugin **Auth: DingTalk** permet aux utilisateurs de se connecter à NocoBase en utilisant leurs comptes DingTalk, simplifiant ainsi le processus de connexion.

## Activer le plugin

![](https://static-docs.nocobase.com/202406120929356.png)

## Demander les autorisations API dans la console développeur DingTalk

Suivez les étapes décrites dans le guide de la [DingTalk Open Platform - Implémenter la connexion pour les sites tiers](https://open.dingtalk.com/document/orgapp/tutorial-obtaining-user-personal-information) pour créer votre application.

Une fois dans la console de gestion de l'application, assurez-vous d'activer les autorisations suivantes :
- "Informations sur le numéro de téléphone mobile personnel"
- "Lecture des informations du carnet d'adresses personnel".

![](https://static-docs.nocobase.com/202406120006620.png)

## Obtenir le Client Secret depuis la console développeur DingTalk

Copiez votre **Client ID** et **Client Secret** depuis la console.

![](https://static-docs.nocobase.com/202406120000595.png)

## Ajouter l'authentification DingTalk à NocoBase

Accédez à la page de gestion du plugin **Authentification**.

![](https://static-docs.nocobase.com/202406112348051.png)

Sélectionnez **Ajouter nouveau - DingTalk**.

![](https://static-docs.nocobase.com/202406112349664.png)

### Configuration

![](https://static-docs.nocobase.com/202406120016896.png)

- **Inscription automatique lorsque l'utilisateur n'existe pas** : Si le numéro de téléphone ne correspond à aucun utilisateur existant, un nouvel utilisateur est créé automatiquement.
- **Client ID et Client Secret** : Entrez les informations que vous avez copiées plus tôt.
- **URL de redirection** : Entrez l'URL de rappel, copiez-la et passez à l'étape suivante.

## Configurer l'URL de redirection dans la console développeur DingTalk

Collez l'URL de redirection copiée dans le champ approprié dans la console développeur DingTalk.

![](https://static-docs.nocobase.com/202406120012221.png)

## Connexion

Accédez à la page de connexion et cliquez sur le bouton sous le formulaire de connexion pour lancer la connexion tierce via DingTalk.

![](https://static-docs.nocobase.com/202406120014539.png)
