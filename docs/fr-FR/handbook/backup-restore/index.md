# Sauvegarde et Restauration

<PluginInfo name="backup-restore"></PluginInfo>

## Introduction

Le plugin de sauvegarde et de restauration peut être utilisé pour des scénarios tels que la réplication d'application, la migration et la mise à niveau.

## Installation

Ce plugin est intégré et ne nécessite pas d'installation ou d'activation manuelle.

## Instructions d'utilisation

![Page de liste de sauvegarde et de restauration](https://static-docs.nocobase.com/071b969c4db9bdc6d2c359e1b6bef5da.png)

### Créer une sauvegarde

![Création de la sauvegarde](https://static-docs.nocobase.com/0e3d9410e6b1cfbda38044033f0b4053.png)

### Restaurer une sauvegarde

Vous pouvez choisir de télécharger une sauvegarde depuis votre appareil local ou de cliquer sur un fichier de sauvegarde pour le restaurer.

![Restaurer la sauvegarde](https://static-docs.nocobase.com/e4b95a4376260fd516de7828fd9f1056.png)

Sélectionnez les données à restaurer, les données sélectionnées écraseront complètement les tables de données correspondantes de l'application cible.

![Restaurer la sauvegarde](https://static-docs.nocobase.com/9c7cb78b51c8f949e417b5a1e0180ae2.png)

### Instructions de sauvegarde

Cliquez sur "En savoir plus" pour consulter les instructions de sauvegarde.

![Instructions de sauvegarde et de restauration](https://static-docs.nocobase.com/4f54eba0fde2d6481274665cb184a79e.png)

Instructions de sauvegarde

![Instructions de sauvegarde et de restauration](https://static-docs.nocobase.com/bd5c68cf7e35d04e525f9b13e48e32d9.png)

Groupes de sauvegarde

- **Données requises** : Données essentielles pour le fonctionnement du système.
- **Données ignorées** : Données ignorées et non sauvegardées.
- **Données utilisateur** : Données liées aux utilisateurs.
- **Données de log** : Données utilisées pour enregistrer certains logs d'actions.
- **Informations sur les services tiers** : Généralement des informations sur les divers fournisseurs de services, tels que les services de stockage de fichiers, les services de cartographie, la configuration des fournisseurs de services SMS, etc.
- **Données de collections personnalisées** : Données des collections ajoutées via le gestionnaire de collections.
- **Données inconnues** : Données sans règles de sauvegarde configurées.

Note : Vous pouvez choisir les données que vous souhaitez sauvegarder ou restaurer par groupe. Les données sélectionnées seront complètement écrasées lors de la restauration.
