# HTTP API

Les événements d'opération personnalisée peuvent être déclenchés non seulement via des actions dans l'interface utilisateur, mais aussi par des appels API HTTP. Ces événements introduisent un nouveau type d'opération appelé `trigger` pour toutes les opérations sur les collections, permettant d'initier des workflows via l'API d'opération standard de NocoBase.

Par exemple, un workflow déclenché par un bouton peut être invoqué en utilisant la commande suivante :

```bash
curl -X POST -H 'Authorization: Bearer <votre jeton>' -H 'X-Role: <nomDuRôle>' \
  "http://localhost:3000/api/samples:trigger/<:id>?triggerWorkflows=workflowKey"
```

Puisque cette opération cible une seule entrée de données, lors de l'appel pour des données existantes, vous devez spécifier l'ID de la ligne de données en remplaçant la partie `<:id>` de l'URL.

Lorsque vous invoquez l'API pour une soumission de formulaire (comme l'ajout ou la mise à jour de données), vous pouvez omettre l'ID pour les nouvelles entrées mais devez fournir les données pertinentes en tant que contexte d'exécution :

```bash
curl -X POST -H 'Authorization: Bearer <votre jeton>' -H 'X-Role: <nomDuRôle>' -d \
  '{
    "title": "Sample 1",
    "indicator": 91
  }'
  "http://localhost:3000/api/samples:trigger?triggerWorkflows=workflowKey"
```

Pour mettre à jour un formulaire, vous devez inclure à la fois l'ID de la ligne de données et les données mises à jour :

```bash
curl -X POST -H 'Authorization: Bearer <votre jeton>' -H 'X-Role: <nomDuRôle>' -d \
  '{
    "title": "Sample 1",
    "indicator": 91
  }'
  "http://localhost:3000/api/samples:trigger/<:id>?triggerWorkflows=workflowKey"
```

Si à la fois l'ID et les données sont fournis, la ligne de données spécifiée sera d'abord chargée, puis les données fournies écraseront la ligne originale pour générer le contexte final du déclencheur.

:::warning{title="Note"}
Si des données relationnelles sont fournies, elles seront également écrasées. Faites particulièrement attention lorsque vous manipulez des données relationnelles avec des associations Preload pour éviter de modifier accidentellement des données liées.
:::

De plus, le paramètre d'URL `triggerWorkflows` désigne la ou les clés du workflow. Plusieurs workflows peuvent être séparés par des virgules. Vous pouvez obtenir cette clé en survolant le nom du workflow en haut du canevas de workflow :

![Méthode d'affichage de la clé du workflow](https://static-docs.nocobase.com/20240426135108.png)

Une fois l'appel réussi, l'événement d'opération personnalisé pour la table `samples` sera déclenché.

:::info{title="Astuce"}
Étant donné que les appels API externes nécessitent également une authentification utilisateur, vous devez inclure les informations d'authentification dans la requête, de manière similaire aux requêtes envoyées depuis l'interface standard. Cela inclut l'en-tête `Authorization` ou le paramètre `token` (le jeton obtenu après connexion) et l'en-tête `X-Role` (le nom du rôle actuel de l'utilisateur).
:::

Si vous devez déclencher un événement pour un élément de données many-to-one (actuellement non pris en charge pour les relations many-to-many), vous pouvez spécifier les données déclenchées du champ associé en utilisant `!` dans le paramètre :

```bash
curl -X POST -H 'Authorization: Bearer <votre jeton>' -H 'X-Role: <nomDuRôle>' \
  "http://localhost:3000/api/posts:trigger/<:id>?triggerWorkflows=workflowKey!category"
```

Après un appel réussi, l'événement d'opération personnalisé pour la table `categories` correspondante sera déclenché.

:::info{title="Astuce"}
Lorsque vous déclenchez un événement via l'API HTTP, assurez-vous que le workflow est activé et que la configuration de la collection est correcte. Sinon, l'appel pourrait échouer ou entraîner des erreurs.
:::
