# Événement Webhook

<PluginInfo name="workflow-webhook" link="/handbook/workflow-webhook" commercial="true"></PluginInfo>

Le déclencheur Webhook fournit une URL générée par le système pour que des systèmes tiers puissent l'appeler via des requêtes HTTP POST. Cette URL déclenche l'exécution du flux de travail lorsque des événements spécifiques se produisent, tels que des rappels de paiement ou des notifications.

## Guide de l'utilisateur

### Création d'un Déclencheur

Créez un flux de travail et sélectionnez "Événement Webhook" comme type de flux de travail :

![20241210105049](https://static-docs.nocobase.com/20241210105049.png)

:::info{title="Astuce"}
La principale différence entre les flux de travail "Synchrones" et "Asynchrones" réside dans leur comportement de réponse. Les flux de travail synchrones attendent que l'exécution du flux de travail soit terminée avant de renvoyer une réponse. En revanche, les flux de travail asynchrones renvoient immédiatement une réponse préconfigurée, puis exécutent le flux de travail en arrière-plan.
:::

### Configuration du Déclencheur

![20241210105441](https://static-docs.nocobase.com/20241210105441.png)

#### URL Webhook

L'URL est générée automatiquement et liée au flux de travail. Utilisez le bouton de copie pour coller l'URL dans le système tiers.

Les requêtes HTTP doivent utiliser la méthode POST. D'autres méthodes retournent une erreur `405`.

#### Sécurité

Une authentification HTTP de base est supportée. En activant cette option et en définissant un nom d'utilisateur et un mot de passe, vous pouvez sécuriser le Webhook. Le système tiers doit inclure le nom d'utilisateur et le mot de passe dans l'URL Webhook pour l'authentification (Détails : [MDN : Authentification HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme)).

Lorsque le nom d'utilisateur et le mot de passe sont définis, le système vérifie si le nom d'utilisateur et le mot de passe dans la requête correspondent, et renvoie une erreur `401` si aucune correspondance n'est fournie.

#### Analyse des Données de la Requête

Les données dans les requêtes HTTP doivent être analysées pour les rendre utilisables dans le flux de travail. Les données analysées sont disponibles en tant que variables dans les nœuds suivants.

L'analyse d'une requête HTTP est divisée en trois parties :

1. **En-têtes de la Requête**

   Les en-têtes sont de simples paires clé-valeur au format chaîne. Spécifiez les champs dont vous avez besoin, tels que `Date`, `X-Request-Id`, etc.

2. **Paramètres de la Requête**

   Le paramètre de la requête est l'URL des paramètres de la requête, comme `http://localhost:13000/api/webhook:trigger/1hfmkioou0d? query=1`. Copiez l'URL complète ou collez uniquement la partie du paramètre de la requête, puis cliquez sur le bouton d'analyse pour analyser automatiquement les paires clé-valeur.

   ![20241210111155](https://static-docs.nocobase.com/20241210111155.png)

   L'analyse automatique convertit la partie paramètre de l'URL en une structure JSON et génère un chemin basé sur la hiérarchie des paramètres, tel que `query[0]`, `query[0].a`, etc. Le nom du chemin peut être modifié manuellement si nécessaire, mais généralement, il n'est pas nécessaire de le modifier. Les alias sont optionnels pour afficher le nom d'une variable lorsqu'elle est utilisée en tant que variable. En même temps, toutes les tables des paramètres dans l'exemple sont générées. Si des paramètres inutiles existent, vous pouvez les supprimer.

3. **Corps de la Requête**

   Le corps de la requête est le contenu de la requête HTTP. Actuellement, seuls les corps de requête au format `application/json` sont pris en charge. Vous pouvez configurer directement le chemin à analyser ou entrer un exemple JSON et cliquer sur le bouton d'analyse pour une analyse automatique.

   ![20241210112529](https://static-docs.nocobase.com/20241210112529.png)

   L'analyse automatique du JSON transforme la paire clé/valeur en chemins, comme `{"a": 1, "b": {"c": 2}}` génère `a`, `b`, `b.c`, etc. Les alias sont optionnels pour afficher le nom d'une variable lorsqu'elle est utilisée en tant que variable. En même temps, toutes les tables des paramètres dans l'exemple sont générées. Si des paramètres inutiles existent, vous pouvez les supprimer.

#### Paramètres de Réponse

La partie réponse du Webhook est configurée différemment dans les flux de travail synchrones et asynchrones. Les flux de travail asynchrones sont directement configurés dans le déclencheur. Après avoir reçu la requête Webhook, la configuration de la réponse dans le déclencheur est immédiatement renvoyée au système tiers avant l'exécution du flux de travail. Les flux de travail synchrones doivent être traités dans le processus en ajoutant des nœuds de réponse selon les besoins de l'entreprise (Détails : [Nœuds de Réponse](#response-nodes)).

Typiquement, la réponse à un événement Webhook déclenché de manière asynchrone a un code d'état `200` et un corps de réponse de `ok`. Vous pouvez également personnaliser le code d'état, les en-têtes de réponse et le corps de la réponse.

![20241210114312](https://static-docs.nocobase.com/20241210114312.png)

### Nœud de Réponse

Il est uniquement pris en charge pour les flux de travail Webhook en mode synchrone afin de renvoyer des réponses aux systèmes tiers. Par exemple, si un résultat inattendu se produit (tel qu'une erreur ou un échec) lors du traitement d'un rappel de paiement, le nœud de réponse peut renvoyer une réponse d'erreur au système tiers afin que certains systèmes tiers puissent réessayer plus tard en fonction du statut.

De plus, l'exécution du nœud de réponse termine l'exécution du flux de travail, et les nœuds suivants ne sont pas exécutés. Si l'ensemble du flux de travail n'est pas configuré avec un nœud de réponse, le système répondra automatiquement en fonction de l'état de l'exécution du processus, renvoyant `200` pour une exécution réussie et `500` pour une exécution échouée.

#### Création d'un Nœud de Réponse

Dans l'interface de configuration du flux de travail, cliquez sur le signe plus ("+") dans le processus pour ajouter un nœud "Réponse" :

![20241210115120](https://static-docs.nocobase.com/20241210115120.png)

#### Configuration de la Réponse

![20241210115500](https://static-docs.nocobase.com/20241210115500.png)

Les variables dans le contexte du flux de travail peuvent être utilisées dans le corps de la réponse.

#### Exemple

Dans le flux de travail Webhook en mode synchrone, différentes réponses peuvent être renvoyées selon les différentes conditions métier, comme illustré ci-dessous :

![20241210120655](https://static-docs.nocobase.com/20241210120655.png)

Vérifiez si un statut de service est satisfait via le nœud de branchement conditionnel. Si oui, un message de succès est affiché. Sinon, un message d'échec est affiché.
