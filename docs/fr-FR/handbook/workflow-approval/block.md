# Blocs Pertinents pour l'Approbation

## Bloc d'Approbation dans les Détails des Données

Dans la fenêtre contextuelle des détails des éléments soumis, un bloc d'approbation peut être configuré pour afficher les enregistrements d'approbation pertinents et fournir des points d'entrée pour les traiter :

![Bloc d'Approbation Détails_Création du Bloc](https://static-docs.nocobase.com/6b40f47474609d1dfd33618d80228189.png)

### Actions de l'Initiateur

Le bloc d'approbation affiche les informations de base sur l'application ainsi que l'historique de l'approbation. L'initiateur peut consulter les détails de sa demande soumise dans la fenêtre contextuelle. Si la rétractation est activée et que le processus en est encore à son stade initial — avant que tout approbateur n'ait pris une décision — l'initiateur peut retirer la demande :

![Bloc d'Approbation Détails_Vue de l'Initiateur](https://static-docs.nocobase.com/5c7d4a6dca8de820d154487e41808c2a.png)

Si l'initiateur retire la demande, l'enregistrement de retrait apparaîtra dans le bloc d'approbation. En cliquant dessus, la fenêtre contextuelle de la demande se rouvrira :

![Bloc d'Approbation Détails_Vue de l'Initiateur Après Retrait](https://static-docs.nocobase.com/df52cb5203c1fd0a2f7af1757fbf6ecd.png)

Le contenu de la fenêtre contextuelle reste inchangé, permettant à l'initiateur de modifier la demande et de la soumettre à nouveau :

![Bloc d'Approbation Détails_Réenvoyer par l'Initiateur](https://static-docs.nocobase.com/4b3a6119e9871760d2dbdc8a2a75ff2c.png)

### Actions de l'Approcheur

Les approbateurs peuvent également examiner le contenu d'approbation via ce bloc. Dans l'historique de traitement, si l'utilisateur connecté est responsable d'un nœud, un bouton "Voir" apparaîtra dans la colonne des détails. En cliquant dessus, la fenêtre contextuelle d'approbation s'ouvrira :

![Bloc d'Approbation Détails_Examen par l'Approcheur](https://static-docs.nocobase.com/b160090482823ff5dc87592d0d5cedec.png)

La fenêtre contextuelle affichera l'interface de l'approbateur pour ce nœud d'approbation, incluant généralement les détails de l'approbation et une barre d'actions :

![Bloc d'Approbation Détails_Fenêtre Pop-up de Traitement de l'Approcheur](https://static-docs.nocobase.com/26acffffd314e86a658334ae9bef9d9b.png)

Les approbateurs peuvent effectuer des actions telles qu'approuver, rejeter ou retourner dans la fenêtre contextuelle. Après qu'une action ait été effectuée, un enregistrement correspondant sera ajouté à l'historique de traitement. Si l'action est un retour, l'initiateur pourra modifier la demande et la soumettre à nouveau :

![Bloc d'Approbation Détails_Retour de l'Approcheur](https://static-docs.nocobase.com/5da879b24923ed25c31be658636ada64.png)

L'approbation ou le rejet déclenchera le statut correspondant en fonction des règles configurées pour le nœud :

![Bloc d'Approbation Détails_Approvisionnement de l'Approcheur](https://static-docs.nocobase.com/b020b1f82fce7c27b905ecf0b4c0046d.png)

## Bloc du Centre d'Approbation

Le plugin d'approbation offre deux blocs globaux pour gérer les processus d'approbation de manière centrale : "Initiations" et "Todos" :

![Bloc du Centre d'Approbation_Création](https://static-docs.nocobase.com/fb3957320f082159f6f1f908937894b6.png)

Le bloc "Initiations" fournit la perspective de l'initiateur, permettant à l'utilisateur de lancer une nouvelle approbation depuis la barre d'actions du bloc :

![Bloc du Centre d'Approbation_Démarrer l'Approbation](https://static-docs.nocobase.com/a888630f892f15882eb1ec6b8826c528.png)

Si le déclencheur d'approbation est configuré pour "Initier et approuver à la fois dans les blocs de données et les blocs d'approbation globaux", le processus d'approbation correspondant apparaîtra dans le menu déroulant sous le bouton "Initier".

Les utilisateurs peuvent également surveiller le statut des approbations qu'ils ont initiées :

![Bloc du Centre d'Approbation_Voir Liste des Initiations](https://static-docs.nocobase.com/4379ff809ae6a545dccab434cf6a6cfb.png)

Cliquer sur "Voir" ouvre une fenêtre contextuelle similaire au bloc d'approbation dans les détails des données. La différence majeure est que la soumission de l'initiateur et l'historique de l'approbation sont affichés sur des onglets séparés :

![Bloc du Centre d'Approbation_Vue des Détails de l'Initiateur](https://static-docs.nocobase.com/234edf3af9a3fb9e3c7aa820c3befd66.png)

Le bloc "Todos" sert à la perspective de l'approbateur, permettant aux utilisateurs de voir les approbations en attente. En cliquant sur le bouton "Voir" correspondant, une fenêtre contextuelle de traitement s'ouvrira, similaire au bloc d'approbation dans les détails des données, avec la distinction que le formulaire de l'approbateur et l'historique de l'approbation sont affichés sur des onglets séparés :

![Bloc du Centre d'Approbation_Vue des Détails Traités de l'Approcheur](https://static-docs.nocobase.com/bc425bd18837d6a918c609849c38da5d.png)

Si l'approbation a déjà été traitée, le contenu soumis est affiché tel quel et ne peut pas être modifié.
