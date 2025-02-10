### Branches Parallèles

Les nœuds de branche parallèle permettent de diviser un processus en plusieurs branches, chacune configurable avec des nœuds distincts. En fonction du mode de branche sélectionné, l'approche d'exécution varie. Lorsque plusieurs opérations doivent être exécutées simultanément, le nœud de branche parallèle est particulièrement efficace.

## Installation

Cette fonctionnalité est un plugin intégré, il n'est donc pas nécessaire d'effectuer une installation.

## Manuel de l'Utilisateur

### Création d'un Nœud

Dans l'interface de configuration du workflow, cliquez sur le bouton plus ("+") pour ajouter un nœud "Branche Parallèle" au processus :

![Branche Parallèle_Ajouter](https://static-docs.nocobase.com/9e0f3faa0b9335270647a30477559eac.png)

Une fois qu'un nœud de branche parallèle est ajouté au processus, deux sous-branches seront automatiquement créées par défaut. Vous pouvez ajouter d'autres branches en cliquant sur le bouton approprié. Chaque branche peut inclure autant de nœuds que nécessaire, et les branches inutiles peuvent être supprimées en cliquant sur le bouton de suppression au début de la branche.

![Branche Parallèle_Gestion des Branches](https://static-docs.nocobase.com/36088a8b7970c8a1771eb3ee9bc2a757.png)

### Configuration du Nœud

#### Modes de Branche

Les nœuds de branche parallèle offrent trois modes :

- **Tous réussis** : Le processus continue d'exécuter les nœuds suivant les branches uniquement si toutes les branches réussissent. Si une branche se termine prématurément—que ce soit en raison d'une défaillance, d'une erreur ou de tout état non réussi—le nœud de branche parallèle entier se termine dans cet état. Ce mode est également appelé "Mode Tout".
- **N'importe quel réussi** : Le processus continuera d'exécuter les nœuds suivants dès qu'une branche réussit. Le nœud de branche parallèle entier ne se terminera prématurément que si toutes les branches échouent ou se terminent prématurément, quelle qu'en soit la raison. Ce mode est connu sous le nom de "Mode N'importe Quel".
- **N'importe quel réussi ou échoué** : Le processus continuera d'exécuter les nœuds suivants dès qu'une branche réussit. Cependant, si une branche échoue, le nœud de branche parallèle entier se terminera prématurément dans cet état. Ce mode est également appelé "Mode Course".

Dans tous les modes, les branches sont exécutées de manière séquentielle de gauche à droite. Le processus continue d'exécuter les nœuds suivants ou se termine prématurément dès que les conditions du mode sélectionné sont remplies.

### Exemple

Pour un exemple d'application de ces concepts, consultez la section [Nœud de Délai](/handbook/workflow-delay#示例).
