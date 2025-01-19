# Vue d'ensemble

## Introduction

Le plugin Workflow est un outil puissant couramment connu sous le nom d'outil de gestion des processus métier (BPM) dans l'industrie. Il est utilisé pour la conception et l'orchestration des processus métier basés sur des modèles de données. En organisant les conditions de déclenchement et les nœuds de flux, il permet au processus métier de s'exécuter automatiquement.

Dans les applications NocoBase, le plugin Workflow est conçu pour des scénarios sans code, permettant aux utilisateurs d'orchestrer et de traiter des tâches métier courantes via l'interface utilisateur. Ainsi, ils peuvent modifier dynamiquement les processus métier en temps réel dans le système.

Chaque workflow se compose d'un déclencheur et de plusieurs nœuds. Grâce à la fonctionnalité spécifique de chaque nœud, le workflow décrit la logique métier qui doit être traitée lorsque l'événement correspondant se produit dans le système. Un workflow typique est illustré dans le diagramme suivant :

![Exemple de workflow](https://static-docs.nocobase.com/4511011beac54779cb68e66555ebf8a8.png)

La fonctionnalité du workflow ci-dessus est la suivante : lorsqu'un utilisateur soumet un formulaire de commande, le système vérifie automatiquement l'inventaire des produits dans la commande. Si le stock est suffisant, l'inventaire sera déduit ; sinon, la commande sera mise à jour comme invalide.

D'un point de vue plus général, les workflows dans les applications NocoBase peuvent traiter les scénarios suivants :

- **Traitement automatisé des données** : Par exemple, traiter automatiquement les données d'une collection selon des workflows prédéfinis, comme calculer et mettre à jour des données associées après un événement déclenché.
- **Processus métier impliquant des humains** : Lorsqu'un processus métier ne peut pas être entièrement automatisé, une prise de décision partielle peut être confiée à un utilisateur via des nœuds manuels, comme l'approbation et la révision. Après que l'utilisateur ait soumis les résultats du traitement, les processus suivants continuent.
- **Intégration avec des systèmes externes** : Les interfaces API des systèmes externes peuvent être appelées via des nœuds de demande (ou des nœuds qui étendent divers types d'appels de fonctions tiers) pour réaliser l'interaction des données avec des systèmes externes.

## Installation

Workflow est un plugin intégré dans NocoBase et ne nécessite pas d'installation supplémentaire.

## En savoir plus

- [Démarrage rapide](./quick-start.md)
- Compréhension avancée
  - [Exécutions](./advanced/executions.md)
  - [Options avancées](./advanced/options.md)
  - [Variables](./advanced/variables.md)
  - [Révisions](./advanced/revisions.md)
- [Déclencheurs](./triggers/index.md)
- [Nœuds](./nodes/index.md)
- [Guide de développement](./development/index.md)
