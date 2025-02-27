# Gestionnaire de Notifications

<PluginInfo name="notification-manager"></PluginInfo>

## Introduction

Le Gestionnaire de Notifications est un service centralisé qui intègre divers canaux de notifications, offrant une interface unifiée pour la configuration des canaux, la gestion des notifications et l'enregistrement des journaux. Il est également conçu pour être très flexible, permettant l'ajout de canaux supplémentaires.

![20240928112556](https://static-docs.nocobase.com/20240928112556.png)

- Section violette : Le Gestionnaire de Notifications offre un service complet incluant la configuration des canaux et l'enregistrement des journaux, avec la possibilité d'ajouter d'autres canaux de notifications.
- Section verte : Message en application, un canal intégré, permet aux utilisateurs de recevoir des notifications directement dans l'application.
- Section rouge : Email, un canal extensible, permet aux utilisateurs de recevoir des notifications par email.

## Gestion des Canaux

![20240928181752](https://static-docs.nocobase.com/20240928181752.png)

Les canaux actuellement supportés comprennent :

- [Message en application](/handbook/notification-in-app-message)
- [Email](/handbook/notification-email) (protocole SMTP intégré)

Pour les canaux supplémentaires, consultez la documentation sur l'[Extension des Canaux](./extension).

## Journaux de Notifications

Le système enregistre les détails et l'état de chaque notification, offrant ainsi un outil précieux pour l'analyse et le dépannage.

![20240928181649](https://static-docs.nocobase.com/20240928181649.png)

## Noeud de Notification de Flux de Travail

![20240928181726](https://static-docs.nocobase.com/20240928181726.png)
