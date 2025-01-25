# **Modification en Masse**

## Introduction

La fonctionnalité de modification en masse est conçue pour des situations où des logiques de mise à jour différentes doivent être appliquées à divers groupes d'enregistrements, offrant ainsi une grande flexibilité pour les tâches de traitement des données. Lorsqu'un utilisateur clique sur le bouton de modification en masse, une interface de configuration apparaît, permettant à l'utilisateur de définir une logique d'attribution distincte pour chaque champ. Cela permet un contrôle précis sur la manière dont chaque enregistrement est mis à jour en fonction des besoins spécifiques.

![Interface de modification en masse](https://static-docs.nocobase.com/70e1fb4122f56fc340405b16d229bd60.png)

## Installation

Aucune installation spécifique requise.

## Guide de l'utilisateur

1. Sélectionnez les données à modifier en masse : soit les éléments sélectionnés, soit tous les éléments, l'option par défaut étant "Sélectionnés".

![Sélection des données pour modification en masse](https://static-docs.nocobase.com/c158538d86397bd48fdaed606b647166.png)

2. Définissez la logique de mise à jour pour chaque champ, avec les options suivantes :

  - Laisser inchangé
  - Modifier vers une valeur spécifiée
  - Effacer le champ

Dans l'exemple montré, l'opération de modification en masse est appliquée au bloc de la table des expéditions. Les données sélectionnées ont leur mode de transport mis à jour vers "fret aérien", et à la fois la confirmation de livraison et les heures d'arrivée réelles sont effacées.

![Configuration de la modification en masse](https://static-docs.nocobase.com/65db9e898d11b01441b7830895f4dd76.gif)
