# Synchronisation des Données Utilisateur depuis WeCom (Entreprise WeChat)

<PluginInfo commercial="true" name="wecom"></PluginInfo>

## Introduction

Le plugin **WeCom (Entreprise WeChat)** permet de synchroniser les données des utilisateurs et des départements de WeCom avec NocoBase.

## Créer et Configurer une Application Personnalisée WeCom

Tout d'abord, vous devez créer une application personnalisée dans le panneau de gestion de WeCom et récupérer l'**ID de l'entreprise**, **AgentId**, et **Secret**.

Référez-vous à [Authentification Utilisateur - WeCom](./auth) pour plus de détails.

## Ajouter une Source de Données de Synchronisation dans NocoBase

Allez dans **Utilisateurs et Permissions > Synchronisation > Ajouter**, puis remplissez les informations obtenues ci-dessus.

![](https://static-docs.nocobase.com/202412041251867.png)

## Configurer la Synchronisation du Carnet d'Adresses

Accédez à la gestion de WeCom - **Sécurité et Gestion > Outils de Gestion**, puis cliquez sur **Synchronisation du Carnet d'Adresses**.

![](https://static-docs.nocobase.com/202412041249958.png)

Réglez les paramètres comme indiqué ci-dessous, et configurez également l'IP de confiance de l'entreprise.

![](https://static-docs.nocobase.com/202412041250776.png)

Vous pouvez maintenant commencer à synchroniser les données utilisateur.

## Configurer le Serveur de Réception des Événements

Si vous souhaitez que les modifications des données des utilisateurs et départements dans WeCom soient synchronisées en temps réel vers l'application NocoBase, vous devez configurer un serveur de réception d'événements.

Après avoir rempli les informations de configuration précédentes, vous pouvez copier l'URL de notification de retour du carnet d'adresses.

![](https://static-docs.nocobase.com/202412041256547.png)

Entrez cette URL dans la configuration de WeCom, puis récupérez le Token et le **EncodingAESKey**, pour finaliser la configuration de la source de données de synchronisation des utilisateurs dans NocoBase.

![](https://static-docs.nocobase.com/202412041257947.png)
