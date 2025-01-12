# Vue d'ensemble

<PluginInfo name="workflow-request-interceptor" link="/handbook/workflow-request-interceptor" commercial="true"></PluginInfo>

Le plugin d'événement pré-opération introduit un mécanisme puissant pour intercepter les demandes d'opération de formulaire. Cette interception se produit après la soumission d'une opération de formulaire, mais avant qu'elle ne soit traitée. Si le processus déclenché inclut un nœud "Fin de processus" ou si d'autres nœuds échouent à s'exécuter correctement (que ce soit en raison d'erreurs ou d'exécutions incomplètes), l'opération du formulaire sera interceptée. Sinon, l'opération se poursuivra comme prévu. Lorsqu'il est associé au nœud "Message de réponse", cette fonctionnalité permet de configurer le processus afin de renvoyer des messages de réponse spécifiques au client, offrant ainsi des invites claires et pertinentes. Les événements pré-opération sont idéaux pour les validations métier ou les vérifications logiques, permettant l'approbation ou l'interception des demandes soumises par le client pour créer, mettre à jour ou supprimer des enregistrements.

## Guide de l'utilisateur

L'utilisation des événements pré-opération implique plusieurs étapes clés :

- [Configuration du déclencheur](./trigger.md)
- [Configuration de l'opération](./node.md)

Pour une compréhension approfondie, vous pouvez explorer [Utilisation avancée](./advanced.md), et voir comment cela est appliqué dans des scénarios réels en consultant les [Exemples](./example.md).

Si vous avez besoin de vous intégrer avec un système externe, consultez [Appel externe](./http-api.md).
