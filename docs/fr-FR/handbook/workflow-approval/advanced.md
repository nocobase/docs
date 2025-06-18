# Compréhension Avancée

## Instantané des Données Soumises pour Approbation

Dans le processus d'approbation, les données sont régies par le principe d'immuabilité transactionnelle des données. Chaque soumission génère un instantané qui est ensuite suivi et circulé pendant le processus d'approbation. Le flux de ce processus est le suivant :

![Diagramme du Processus de Snapshot des Données d'Approbation](https://static-docs.nocobase.com/62a545a85d9e72c6b47e4b52707c4380.png)

Lorsqu'une action comme "retirer" ou "retourner" est déclenchée dans le processus, le système préserve un instantané des données tel qu'il existait à ce moment-là dans le même document de l'application :

![Exemple de Processus d'Instantané des Données d'Approbation](https://static-docs.nocobase.com/62800d88772c88f1eaa11f6f493aea55.png)

Comme illustré ci-dessus, chaque fois que des données sont retirées puis soumises à nouveau, un nouveau snapshot est sauvegardé pour ce processus de soumission particulier.

## Statuts du Processus d'Approbation

Pour l'initiateur, le champ de statut du document de demande indique l'étape actuelle du processus d'approbation, reflétant généralement les états suivants :

| Statut       | Enum Value | Description |
|--------------| ---------- | ----------- |
| Brouillon   | 0 | L'application a été temporairement sauvegardée, mais n'a pas encore été officiellement soumise pour démarrer le processus. |
| Soumis      | 2 | La demande a été soumise et attend l'approbation. À ce stade, aucun approbateur ne l'a encore traitée, et si la configuration le permet, l'initiateur peut encore retirer la demande. |
| En cours    | 3 | La demande a traversé au moins un nœud d'approbation, avec au moins un approbateur ayant soumis sa décision. L'initiateur ne peut plus retirer la demande à ce stade. |
| Retourné    | 1 | La demande a été retournée par un approbateur, permettant à l'initiateur de la modifier et de la soumettre à nouveau. |
| Approuvé    | 4 | Tous les nœuds d'approbation ont été traités, et la demande a été approuvée à chaque étape, marquant la fin du processus. |
| Rejeté      | -1 | La demande a été rejetée à un des nœuds d'approbation, mettant ainsi fin au processus. |

## Statut de traitement du nœud d'approbation

Le statut de traitement du nœud d'approbation.

| Statut | Valeur énumérée | Description |
| --- | --- | --- |
| Assigné | null | L'enregistrement de traitement pour l'approbateur concerné a été créé, mais comme la règle de traitement est configurée en mode séquentiel, l'approbateur actuel doit attendre que le précédent ait terminé son traitement. |
| En attente | 0 | En attente du traitement par l'approbateur actuel. |
| Renvoyé | 1 | L'approbateur actuel a renvoyé la demande. |
| Approuvé | 2 | L'approbateur actuel a approuvé la demande. |
| Rejeté | -1 | L'approbateur actuel a rejeté la demande. |
| Non traité | 3 | Selon les règles de traitement du nœud, l'état final a été atteint par d'autres approbateurs ou le flux de travail est devenu invalide, donc l'approbateur actuel n'a pas besoin de traiter. |

## Statut de traitement d’un approbateur individuel

Pour chaque nœud d'approbation, un enregistrement de traitement est généré pour chaque approbateur configuré. Chaque enregistrement contient un champ de statut indiquant le statut de traitement de l’approbateur actuel. En plus de tous les statuts définis pour le nœud d'approbation, les statuts supplémentaires suivants sont inclus :

| Statut     | Enum Value | Description |
|------------| ---------- | ----------- |
| Delegated | 8 | The approval task has been delegated to another assignee, do not need to be processed by current assignee. |
