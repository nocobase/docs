# Vue d'ensemble

Les déclencheurs sont les points d'entrée pour l'exécution des workflows. Lorsqu'un événement qui remplit les conditions du déclencheur se produit pendant l'exécution de l'application, le workflow sera déclenché. Le type de déclencheur détermine également le type de workflow, choisi lors de la création du workflow et qui ne peut pas être modifié par la suite. Les types de déclencheurs actuellement pris en charge sont les suivants :

- [Événements de collection](./collection.md) (intégré)
- [Tâches planifiées](./schedule.md) (intégré)
- [Événements avant l'action](./pre-action.md) (fournis par le plugin @nocobase/plugin-workflow-request-interceptor)
- [Événements d'action personnalisée](./custom-action.md) (fournis par le plugin @nocobase/plugin-workflow-custom-action-trigger)
- [Événements après l'action](./post-action.md) (fournis par le plugin @nocobase/plugin-workflow-action-trigger)
- [Approbation](./approval.md) (fournis par le plugin @nocobase/plugin-workflow-approval)
- [Webhook](./webhook.md) (fournis par le plugin @nocobase/plugin-workflow-webhook)

Le timing de chaque type de déclencheur d'événement est montré dans le diagramme suivant :

![Événements de workflow](https://static-docs.nocobase.com/20240514214606.png)

Par exemple, lorsqu'un utilisateur soumet un formulaire, ou que des données dans une collection changent à la suite d'une action de l'utilisateur ou d'appels de programme, ou lorsque qu'une tâche atteint son heure planifiée, le workflow correspondant sera déclenché.

Les déclencheurs liés aux données (comme les actions, les événements de collection) transportent généralement des données contextuelles du déclencheur. Ces données peuvent être référencées dans les nœuds du workflow pour réaliser un traitement automatisé des données. Par exemple, lorsqu'un utilisateur soumet un formulaire lié à un workflow, les données soumises seront injectées dans l'environnement de contexte du plan d'exécution, permettant aux nœuds suivants de les utiliser comme variables.

Après avoir créé un workflow, le déclencheur apparaîtra comme un nœud d'entrée au début du flux sur la page de vue du workflow. Cliquez sur la carte pour ouvrir le tiroir de configuration. En fonction du type de déclencheur, les conditions pertinentes peuvent être configurées.

![Nœud d'entrée du déclencheur](https://static-docs.nocobase.com/e8dc1937e41b2712b67d84d60e94b11e.png)
