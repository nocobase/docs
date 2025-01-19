# Overview

<PluginInfo name="workflow-custom-action-trigger" link="/handbook/workflow-custom-action-trigger" commercial="true"></PluginInfo>

NocoBase offre des opérations de données standard intégrées, telles que la création, la lecture, la mise à jour et la suppression. Cependant, lorsque ces opérations ne suffisent pas à répondre à des besoins commerciaux complexes, des événements d'action personnalisée au sein des workflows peuvent être utilisés. Ces événements peuvent être associés au bouton "Déclencher le Workflow" sur les blocs de page, vous permettant d'effectuer des opérations de données personnalisées adaptées à des besoins spécifiques.

:::info{title=Note}
L'événement "Action Personnalisée" a évolué à partir du mode "Soumettre au Workflow" trouvé dans la fonctionnalité "Post-Action Event". À partir de la version `v1.0.0-alpha.7`, il a été séparé en son propre événement et renommé "Événement d'Action Personnalisée."
:::

## Manuel de l'utilisateur

Les événements d'action personnalisée sont utilisés dans plusieurs domaines clés :

- [Configuration du déclencheur](./trigger.md)
- [Configuration de l'action](./action.md)

Pour des exemples pratiques sur la façon d'utiliser ces événements, consultez la section [Exemples](./example.md).

Si une intégration avec un système externe est nécessaire, consultez le guide [Http Api](./http-api.md).
