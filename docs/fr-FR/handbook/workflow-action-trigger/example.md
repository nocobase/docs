# Exemple

**Sortie :** Traduction finale polie

---

Ici, nous allons passer en revue le processus en ajoutant une nouvelle opération.

Imaginons un scénario impliquant des "Demandes de frais". Après qu'un employé soumet une demande de remboursement de frais, le système doit effectuer une révision automatique du montant et, si nécessaire, déclencher une révision manuelle pour les montants dépassant une limite définie. Seules les demandes qui réussissent ces révisions seront approuvées et ensuite transmises au département financier pour traitement.

Pour commencer, nous pouvons créer une collection "Frais" avec les champs suivants :

- **Nom du projet** : Texte sur une ligne
- **Demandeur** : Plusieurs à un (Utilisateur)
- **Montant** : Numérique
- **Statut** : Choix unique (Options : "Approuvé", "Traitée")

Ensuite, nous créerons un flux de travail classé comme "Événement Post-action" et configurerons le modèle de table de données du déclencheur pour pointer vers la collection "Frais" :

![Exemple_Configuration du Déclencheur_Sélectionner la Table de Données](https://static-docs.nocobase.com/6e1abb5c3e1198038676115943714f07.png)

Une fois le flux de travail activé, nous pouvons procéder à la configuration des nœuds de traitement spécifiques.

Ensuite, dans l'interface utilisateur, créez un bloc de table pour la table de données "Frais" et ajoutez un bouton "Ajouter" à la barre d'outils, en vous assurant que les champs de formulaire correspondants sont correctement configurés. Dans les paramètres du bouton "Soumettre" du formulaire, ouvrez la fenêtre de configuration "Lier le Flux de Travail", sélectionnez les données du formulaire complet comme contexte et liez-les au flux de travail que nous avons précédemment créé :

![Exemple_Configuration du Bouton de Formulaire_Lier le Flux de Travail](https://static-docs.nocobase.com/fc00bdcdb975bb8850e5cab235f854f3.png)

Une fois la configuration du formulaire terminée, revenez au flux de travail pour organiser la logique. Par exemple, si le montant du remboursement dépasse 500, le système nécessitera une révision manuelle par un administrateur ; sinon, il approuvera automatiquement la demande. Lors de l'approbation, un enregistrement de frais est généré et envoyé aux finances pour traitement ultérieur (les détails sont omis).

![Exemple_Circuit de Processus](https://static-docs.nocobase.com/059e8e3d5ffb34cc2da6880fa3dc490b.png)

Mis à part le traitement financier ultérieur, cela complète la configuration du processus de demande de frais. Lorsqu'un employé remplit et soumet une demande de frais, le système déclenche le flux de travail correspondant. Si le montant est inférieur à 500, un enregistrement est automatiquement créé et attend l'action suivante des finances. Si le montant dépasse ce seuil, la demande subit une révision par un superviseur. Après approbation, l'enregistrement est créé et remis aux finances pour traitement.

Ce flux de travail exemple peut également être appliqué à un bouton "Soumettre" standard, en fonction de la manière dont le scénario commercial exige qu'un enregistrement soit créé avant de passer aux étapes suivantes.
