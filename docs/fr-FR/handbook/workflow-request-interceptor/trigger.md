# Configuration du Déclencheur

## Création d'un Déclencheur

Lors de la configuration d'un flux de travail, sélectionnez "Événement pré-opération" comme type d'événement :

![Événement pré-opération](https://static-docs.nocobase.com/2add03f2bdb0a836baae5fe9864fc4b6.png)

## Sélection du Tableau de Données

La première étape pour configurer un déclencheur afin d'intercepter les flux de travail consiste à sélectionner le tableau de données associé à l'action :

![Configuration de l'événement d'interception_Tableau de Données](https://static-docs.nocobase.com/8f7122caca8159d334cf776f838d53d6.png)

Ensuite, choisissez le mode d'interception. Vous pouvez soit intercepter uniquement les boutons d'action liés à ce flux de travail, soit intercepter toutes les actions sélectionnées pour le tableau de données (indépendamment du formulaire d'origine de l'action et sans avoir besoin de lier le flux de travail correspondant) :

## Mode d'Interception

![Configuration de l'événement d'interception_Mode d'Interception](https://static-docs.nocobase.com/145a7f7c3ba440bb6ca93a5ee84f16e2.png)

Actuellement, les types d'action pris en charge incluent "Créer", "Mettre à jour" et "Supprimer". Vous pouvez sélectionner plusieurs types d'actions simultanément.
