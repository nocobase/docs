# Plan d'Exécution (Historique)

Après chaque déclenchement de flux de travail, un plan d'exécution correspondant sera créé pour suivre le processus de cette tâche. Chaque plan d'exécution possède une valeur d'état pour indiquer le statut actuel d'exécution, ce qui peut être consulté dans la liste et les détails de l'historique d'exécution.

![Status du plan d'exécution](https://static-docs.nocobase.com/d4440d92ccafac6fac85da4415bb2a26.png)

Lorsque tous les nœuds de la branche principale du processus sont exécutés jusqu'à la fin avec un statut "Résolu", le plan d'exécution entier se terminera avec un statut "Résolu". Si un nœud de la branche principale du processus se trouve dans un statut final tel que "Échoué", "Erreur", "Annulé" ou "Rejeté", le plan d'exécution entier sera interrompu prématurément avec le statut correspondant. Si un nœud de la branche principale est dans un statut "En attente", le plan d'exécution entier sera mis en pause mais affichera toujours un statut "En cours", jusqu'à ce que le nœud en attente soit repris et l'exécution continue. Différents types de nœuds gèrent différemment le statut "En attente". Par exemple, les nœuds "Manuel" doivent attendre un traitement manuel, tandis que les nœuds "Délai" doivent attendre que l'heure arrive pour poursuivre l'exécution.

### Statut du Plan d'Exécution

| Statut    | Correspond à l'état du dernier nœud exécuté du processus principal  | Explication                                                                                                                   |
| --------- | ------------------------------------------------------| ----------------------------------------------------------------------------------------------------------------------------- |
| En attente | -                                                         | Le processus a été déclenché et un plan d'exécution a été généré, en attente dans la file d'attente pour être planifié par l'ordonnanceur. |
| En cours  | En attente                                               | Le nœud demande une pause, attendant une entrée ou un rappel pour continuer.                                                    |
| Résolu    | Résolu                                                   | Aucun problème rencontré, tous les nœuds ont été exécutés comme prévu et ont été terminés.                                        |
| Échoué    | Échoué                                                    | Échec dû à des configurations de nœuds non remplies.                                                                            |
| Erreur    | Erreur                                                    | Le nœud a rencontré une erreur de programme non gérée et a été interrompu prématurément.                                         |
| Annulé    | Annulé                                                    | Le nœud en attente a été annulé de l'extérieur par l'administrateur et a été interrompu prématurément.                            |
| Rejeté    | Rejeté                                                    | Dans les nœuds nécessitant un traitement manuel, il a été rejeté par l'utilisateur et ne continue plus avec les processus suivants. |

Dans les exemples de [Démarrage rapide](../quick-start.md), nous savons déjà que consulter les détails de l'historique d'exécution d'un flux de travail permet de vérifier si tous les nœuds de l'exécution ont été correctement exécutés et d'afficher les statuts et les résultats de chaque nœud exécuté. Dans certains flux de travail avancés et nœuds, les résultats des nœuds peuvent être multiples, comme les résultats des nœuds "Boucle" :

![Résultats des nœuds exécutés plusieurs fois](https://static-docs.nocobase.com/bbda259fa2ddf62b0fc0f982efbedae9.png)

:::info{title=Note}
Un flux de travail peut être déclenché simultanément, mais il sera exécuté un par un dans la file d'attente. Même si plusieurs flux de travail sont déclenchés en même temps, ils seront exécutés séquentiellement, pas en parallèle. Ainsi, lorsque le statut indique "En attente", cela signifie qu'un flux de travail est en cours d'exécution et doit attendre.

Le statut "En cours" indique seulement que le plan d'exécution a commencé et qu'il est généralement mis en pause en raison du statut d'attente d'un nœud, mais cela ne signifie pas que le plan d'exécution occupe préemptivement les ressources d'exécution en tête de la file d'attente. Par conséquent, lorsque des plans d'exécution sont "En cours", d'autres plans d'exécution "En attente" peuvent toujours être programmés et exécutés.
:::

## Statut d'Exécution des Nœuds

Le statut du plan d'exécution est déterminé par chaque nœud. Dans un plan d'exécution après un déclenchement, chaque nœud exécuté générera un statut, qui déterminera si le processus suivant continue à être traité. En général, après l'exécution d'un nœud avec succès, le nœud suivant continuera à s'exécuter jusqu'à ce que tous les nœuds soient exécutés en séquence ou soient interrompus. Lorsque des nœuds de contrôle de processus tels que "Branche", "Boucle", "Parallèle" et "Délai", etc., sont rencontrés, l'exécution du nœud suivant dépendra des conditions définies dans le nœud de contrôle et des données de contexte en temps réel.

Les statuts possibles qui peuvent être générés après l'exécution de chaque nœud sont les suivants :

| Statut  | Est-ce un statut final ? | Interrompt-il prématurément ? | Explication                                                 |
| ------- | :-----------------------: | :----------------------------: | ---------------------------------------------------------- |
| En attente | Non                    | Non                            | Le nœud demande une pause, attendant des informations ou un rappel pour continuer. |
| Résolu    | Oui                     | Non                            | Aucun problème rencontré, le nœud s'est exécuté avec succès et continue à exécuter le nœud suivant jusqu'à la fin. |
| Échoué    | Oui                     | Oui                            | Le nœud a échoué en raison de configurations non remplies. |
| Erreur    | Oui                     | Oui                            | Le nœud a rencontré une erreur de programme non gérée et a été interrompu prématurément. |
| Annulé    | Oui                     | Oui                            | Le nœud en attente a été annulé de l'extérieur par l'administrateur, et l'exécution a été interrompue prématurément. |
| Rejeté    | Oui                     | Oui                            | Dans les nœuds nécessitant un traitement manuel, il a été rejeté par l'utilisateur et ne continuera pas avec les processus suivants. |

À l'exception du statut "En attente", tous les autres statuts sont des statuts finaux d'exécution du nœud. Seul le statut "Résolu" permet au processus de continuer à s'exécuter, sinon l'exécution de l'ensemble du processus sera interrompue prématurément. Lorsqu'un nœud est dans un processus de branchement ("Branches parallèles", "Condition", "Boucle", etc.), le statut final généré par le nœud sera pris en charge et traité par le nœud qui ouvre la branche, et ainsi de suite, déterminant le flux du processus entier.

Par exemple, lorsqu'on utilise un nœud "Condition" en mode "continuer si 'Oui'", si le résultat est "faux" lors de l'exécution, l'exécution du processus entier sera interrompue prématurément avec un statut échoué, comme indiqué ci-dessous :

![Échec de l'exécution d'un nœud](https://static-docs.nocobase.com/993aecfa1465894bb574444f0a44313e.png)

:::info{title=Note}
Tous les statuts finaux autres que "Résolu" peuvent être considérés comme des échecs, mais les raisons de l'échec peuvent être différentes. En vérifiant les résultats des nœuds, vous pourrez mieux comprendre la cause de l'échec.
:::
