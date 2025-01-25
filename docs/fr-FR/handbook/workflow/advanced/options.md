# Options Avancées

## Modes d'Exécution

L'exécution des flux de travail dépend du type de déclencheur sélectionné lors de la création et peut être effectuée en mode **"Asynchrone"** ou **"Synchrone"**. Le mode **"Asynchrone"** signifie qu'après qu'un événement spécifique ait été déclenché, il entre dans la file d'attente d'exécution et est exécuté un par un par le planificateur en arrière-plan. Tandis que le mode **"Synchrone"** ne passe pas par la file d'attente de planification après le déclenchement, mais commence immédiatement l'exécution et fournit un retour immédiat après l'exécution.

Les événements de collecte, les événements après action, les événements d'action personnalisée, les événements planifiés et les événements d'approbation seront exécutés de manière asynchrone par défaut, tandis que les événements avant action seront exécutés de manière synchrone par défaut. Parmi ceux-ci, les événements de collecte, les événements après action et les événements d'action personnalisée supportent les deux modes, et vous pouvez choisir lors de la création du flux de travail :

![Mode synchrone : Création d'un flux de travail synchrone](https://static-docs.nocobase.com/39bc0821f50c1bde4729c531c6236795.png)

:::info{title=Note}
Les flux de travail en mode synchrone sont limités par leur mode et ne peuvent pas utiliser des nœuds qui génèrent un statut "en attente", comme les nœuds "processus manuel", etc.
:::

## Suppression Automatique de l'Historique

Lorsque des flux de travail sont déclenchés fréquemment, vous pouvez réduire l'interférence et la pression sur le stockage de la base de données en configurant la suppression automatique des exécutions historiques.

De même, dans la fenêtre contextuelle de création et de modification des flux de travail, vous pouvez configurer si le processus correspondant supprime automatiquement l'historique :

![Configurer la suppression automatique de l'historique](https://static-docs.nocobase.com/b2e4c08e7a01e213069912fe04baa7bd.png)

La suppression automatique peut être configurée en fonction du statut de l'exécution. Dans la plupart des cas, il est recommandé de sélectionner uniquement le statut "Réussi", afin que l'historique des échecs d'exécution soit conservé pour un dépannage ultérieur.

Il est recommandé de ne pas activer la suppression automatique de l'historique lors du débogage des flux de travail, afin de pouvoir examiner la logique d'exécution des flux dans l'historique.

:::info{title=Note}
La suppression de l'historique des flux de travail ne réduira pas le nombre de flux de travail déjà exécutés.
:::
