# Délai

<PluginInfo name="workflow-delay" link="/handbook/workflow-delay"></PluginInfo>

Le nœud de **Délai** permet d'introduire une pause dans un workflow. Une fois le délai terminé, vous pouvez configurer si vous souhaitez poursuivre l'étape suivante ou terminer prématurément le workflow.

Ce nœud est souvent utilisé en tandem avec des nœuds de branchement parallèle. En ajoutant un nœud de délai à l'une des branches, vous pouvez efficacement gérer les expirations. Par exemple, dans un scénario où une branche nécessite un traitement manuel tandis qu'une autre inclut un nœud de délai, vous pouvez déterminer le résultat si le processus manuel dépasse le délai imparti. Si vous sélectionnez "échec par expiration", cela signifie que le processus manuel doit être terminé dans le délai spécifié. En revanche, en choisissant "continuer après expiration", vous permettez au workflow de contourner le processus manuel une fois le délai écoulé.

## Installation

Ce plugin est intégré et ne nécessite aucune installation.

## Manuel Utilisateur

### Création d'un Nœud

Dans l'interface de configuration du workflow, cliquez sur le signe plus ("+") dans le flux pour ajouter un nœud **Délai** :

![Créer un Nœud de Délai](https://static-docs.nocobase.com/d0816999c9f7acaec1c409bd8fb6cc36.png)

### Configuration du Nœud

![Configuration du Nœud de Délai](https://static-docs.nocobase.com/5fe8a36535f20a087a0148ffa1cd2aea.png)

#### Durée du Délai

Vous pouvez spécifier la durée du délai en entrant un nombre et en sélectionnant une unité de temps. Les unités prises en charge incluent les secondes, minutes, heures, jours et semaines.

#### Statut d'Expiration

Vous pouvez définir le statut d'expiration sur "Réussir et continuer" ou "Échouer et quitter". L'option "Réussir et continuer" garantit que le workflow progresse vers les étapes suivantes une fois le délai écoulé. En revanche, l'option "Échouer et quitter" termine le workflow avec un statut d'échec lorsque le délai est écoulé.

### Exemple

Dans un scénario où un ordre de travail doit être traité dans un délai donné, vous pouvez ajouter un nœud manuel à une branche et un nœud de délai à l'autre branche en parallèle. Si le processus manuel ne répond pas dans les 10 minutes, le statut de l'ordre de travail sera mis à jour en "Expiration non traitée."

![Exemple de Nœud de Délai - Organisation du Workflow](https://static-docs.nocobase.com/898c84adc376dc211b003a62e16e8e5b.png)
