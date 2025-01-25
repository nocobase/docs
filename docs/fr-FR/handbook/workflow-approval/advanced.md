# Compréhension Avancée

## Instantané des Données Soumises pour Approbation

Dans le processus d'approbation, les données sont régies par le principe d'immuabilité transactionnelle des données. Chaque soumission génère un instantané qui est ensuite suivi et circulé pendant le processus d'approbation. Le flux de ce processus est le suivant :

![Diagramme du Processus de Snapshot des Données d'Approbation](https://static-docs.nocobase.com/62a545a85d9e72c6b47e4b52707c4380.png)

Lorsqu'une action comme "retirer" ou "retourner" est déclenchée dans le processus, le système préserve un instantané des données tel qu'il existait à ce moment-là dans le même document de l'application :

![Exemple de Processus d'Instantané des Données d'Approbation](https://static-docs.nocobase.com/62800d88772c88f1eaa11f6f493aea55.png)

Comme illustré ci-dessus, chaque fois que des données sont retirées puis soumises à nouveau, un nouveau snapshot est sauvegardé pour ce processus de soumission particulier.

## Statuts du Processus d'Approbation

Pour l'initiateur, le champ de statut du document de demande indique l'étape actuelle du processus d'approbation, reflétant généralement les états suivants :

| Statut       | Description |
|--------------| ----------- |
| Brouillon   | L'application a été temporairement sauvegardée, mais n'a pas encore été officiellement soumise pour démarrer le processus. |
| Soumis      | La demande a été soumise et attend l'approbation. À ce stade, aucun approbateur ne l'a encore traitée, et si la configuration le permet, l'initiateur peut encore retirer la demande. |
| En cours    | La demande a traversé au moins un nœud d'approbation, avec au moins un approbateur ayant soumis sa décision. L'initiateur ne peut plus retirer la demande à ce stade. |
| Retourné    | La demande a été retournée par un approbateur, permettant à l'initiateur de la modifier et de la soumettre à nouveau. |
| Approuvé    | Tous les nœuds d'approbation ont été traités, et la demande a été approuvée à chaque étape, marquant la fin du processus. |
| Rejeté      | La demande a été rejetée à un des nœuds d'approbation, mettant ainsi fin au processus. |

Pour chaque nœud d'approbation, un enregistrement de l'action de traitement est généré pour l'approbateur désigné. L'enregistrement de chaque approbateur inclut un champ de statut indiquant l'état actuel de son traitement, avec généralement les statuts suivants :

| Statut     | Description |
|------------| ----------- |
| Assigné    | Un enregistrement pour l'approbateur correspondant a été créé, mais comme la règle de traitement nécessite une gestion en série, l'approbateur doit attendre que le précédent approbateur termine avant de pouvoir continuer. |
| En attente | La demande est en attente d'action de l'approbateur actuel. |
| Retourné   | L'approbateur actuel a retourné la demande. |
| Approuvé   | L'approbateur actuel a approuvé la demande. |
| Rejeté     | L'approbateur actuel a rejeté la demande. |
| Non traité | La demande a atteint un état terminal selon les règles de traitement du nœud après avoir été traitée par d'autres approbateurs, ou le workflow est devenu invalide, donc l'approbateur actuel n'est plus requis pour agir. |
