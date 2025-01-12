# Fin du processus

Lors de son exécution, ce nœud mettra immédiatement fin à l'exécution du workflow actuel et le terminera avec le statut configuré dans le nœud. Il est généralement utilisé pour un contrôle spécifique du flux logique, afin de quitter le workflow actuel après avoir satisfait certaines conditions logiques, sans continuer le traitement suivant. Il peut être comparé à l'instruction `return` dans les langages de programmation, utilisée pour quitter la fonction en cours d'exécution.

## Création d'un Nœud

Dans l'interface de configuration du workflow, cliquez sur le bouton plus ("+") dans le flux pour ajouter un nœud "Fin du processus" :

![Ajouter Fin du Processus](https://static-docs.nocobase.com/672186ab4c8f7313dd3cf9c880b524b8.png)

## Configuration du Nœud

![Configuration du Nœud Fin du Processus](https://static-docs.nocobase.com/bb6a597f25e9afb72836a14a0fe0683e.png)

### Statut de Fin

Le statut de fin affectera le statut final de l'exécution du plan du workflow. Il peut être configuré comme "Succès" ou "Échec". Lorsque le workflow atteint ce nœud, il quittera immédiatement avec le statut configuré.

:::info{title=Note}
Lorsqu'il est utilisé dans des workflows du type "Pré-action", il interceptera les demandes d'action. Pour plus de détails, veuillez consulter les [instructions d'utilisation de la "Pré-action"](../triggers/pre-action).

Outre l'interception des demandes d'action, la configuration du statut de fin affectera également le statut des informations de retour dans le "Message de réponse" dans ce type de workflow.
:::
