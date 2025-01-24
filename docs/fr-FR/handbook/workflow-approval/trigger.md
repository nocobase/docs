# Configuration du Déclencheur

## Création d'un Workflow

Pour configurer un workflow d'approbation, commencez par sélectionner le type "Approbation" lors de la création du workflow :

![Déclencheur d'Approbation_Créer un Workflow d'Approbation](https://static-docs.nocobase.com/f52dda854f46a669e0c1c7fb487a17ea.png)

Ensuite, dans l'interface de configuration du workflow, cliquez sur le déclencheur pour ouvrir une fenêtre contextuelle avec des options de configuration supplémentaires.

## Lier les Tables de Données

Le plugin d'approbation de NocoBase est conçu pour offrir une grande flexibilité, permettant son intégration avec n'importe quelle collection de données personnalisée. Cela signifie qu'il n'est pas nécessaire de reconfigurer en permanence le modèle de données pour les processus d'approbation. Vous pouvez réutiliser des collections de données existantes. Lors de la configuration du déclencheur, la première étape consiste à sélectionner une table de données pour déterminer quelles entrées de données déclencheront le workflow lors de la création ou de la mise à jour :

![Déclencheur d'Approbation_Configuration du Déclencheur_Sélectionner la Table de Données](https://static-docs.nocobase.com/8732a4419b1e28d2752b8f601132c82d.png)

Après avoir sélectionné la table de données, liez le workflow au bouton de soumission du formulaire utilisé pour créer ou modifier les données dans la table sélectionnée :

![Démarrer l'Approbation_Lier le Workflow](https://static-docs.nocobase.com/2872ff108c61d7bf6d0bfb19886774c6.png)

Une fois le formulaire soumis, le workflow d'approbation correspondant sera déclenché. Les données soumises seront enregistrées dans la table de données spécifiée et également prises en instantané dans le flux d'approbation pour une révision future par les approbateurs.

## Où Initier une Approbation

Il existe deux emplacements dans l'interface utilisateur où les approbations peuvent être initiées :
1. Par la soumission d'un formulaire de collection de données qui a été lié à un processus d'approbation, généralement utilisé pour initier un processus d'approbation unique.
2. Via le bloc d'Approbation, qui permet l'initiation centralisée de processus globaux.

![Déclencheur d'Approbation_Configuration du Déclencheur_Où Initier l'Approbation](https://static-docs.nocobase.com/1a193ec0acfa6cde221c6e5d49a50b3e.png)

En sélectionnant "Initier et approuver dans les blocs de données et les blocs d'approbation globaux", le processus apparaîtra dans le menu déroulant “Initiations” au sein du bloc Centre d'Approbation, permettant aux utilisateurs de gérer diverses approbations depuis un emplacement centralisé.

## Retrait

Si le processus d'approbation permet à l'initiateur de retirer la demande, sélectionnez l'option "Autorisé à être retiré" :

![Déclencheur d'Approbation_Configuration du Déclencheur_Autoriser le Retrait](https://static-docs.nocobase.com/09185712fc55bc536892136ce0ade4a8.png)

Lorsque cette option est sélectionnée, l'initiateur peut retirer la demande d'approbation à tout moment avant qu'un approbateur n'ait traité la demande. Cependant, une fois que des nœuds d'approbation ont été traités, l'approbation ne peut plus être retirée.

## Configuration de l'Interface du Formulaire pour Initier des Approbations

Enfin, vous devrez configurer l'interface du formulaire pour l'initiateur. Cette interface est utilisée lors de l'initiation d'une approbation depuis le bloc Centre d'Approbation ou lors d'une nouvelle initiation après un retrait. Cliquez sur le bouton de configuration pour ouvrir une fenêtre contextuelle :

![Déclencheur d'Approbation_Configuration du Déclencheur_Formulaire de l'Initiateur](https://static-docs.nocobase.com/ca8b7e362d912138cf7d73bb60b37ac1.png)

Vous pouvez ajouter un formulaire basé sur la table de données liée ou inclure un texte explicatif (Markdown) pour guider l'initiateur. Un formulaire est requis, sinon l'initiateur ne pourra pas poursuivre après être entré dans cette interface.

Après avoir ajouté le bloc du formulaire, vous pouvez configurer les composants de champ de la table de données correspondante et les organiser comme nécessaire pour organiser le contenu à remplir, similaire à l'interface de configuration d'un formulaire standard :

![Déclencheur d'Approbation_Configuration du Déclencheur_Formulaire de l'Initiateur_Configuration des Champs](https://static-docs.nocobase.com/5a1e7f9c9d8de092c7b55585dad7d633.png)

En plus du bouton de soumission, vous pouvez également ajouter un bouton "Sauvegarder le Brouillon" pour permettre le stockage temporaire des données durant le processus :

![Déclencheur d'Approbation_Configuration du Déclencheur_Formulaire de l'Initiateur_Configuration des Actions](https://static-docs.nocobase.com/2f4850d2078e94538995a9df70d3d2d1.png)
