### Compréhension Avancée

**Conditions d'Interception**

Dans les **"événements pré-action"**, deux conditions spécifiques peuvent entraîner l'interception de l'opération correspondante :

1. Le processus atteint un **nœud "Fin du Processus"**. Comme expliqué précédemment, si les données déclencheuses ne remplissent pas les conditions définies dans le **nœud "Condition"**, le processus suivra le branchement "Non", exécutant le nœud **"Fin du Processus"**. Cela entraîne la terminaison du processus et l'interception de l'opération demandée.
2. Un nœud dans le processus échoue à s'exécuter—en raison d'une erreur ou d'autres circonstances exceptionnelles. Dans ces cas, le processus se termine avec le statut correspondant, et l'opération est interceptée. Par exemple, si un **nœud "HTTP Request"** est utilisé pour récupérer des données externes et que la requête échoue, le processus se termine en échec, tout en interceptant la requête d'opération correspondante.

Lorsque ces conditions d'interception sont remplies, l'opération en question est complètement arrêtée. Par exemple, si la soumission d'une commande est interceptée, aucune donnée de commande correspondante ne sera générée.

---

**Paramètres pour les Opérations Correspondantes**

Dans les workflows d'**"événements pré-action"**, divers points de données sont disponibles en tant que variables au sein du processus, selon l'opération :

| Type d'Opération \\ Variable | "Utilisateur agissant" | "Rôle de l'utilisateur agissant" | Paramètre d'Opération : "ID" | Paramètre : "Valeurs soumises" |
| ----------------------------- | ----------------------- | ------------------------------- | ---------------------------- | ----------------------------- |
| Créer un enregistrement        | ✓                       | ✓                               | -                            | ✓                             |
| Mettre à jour un enregistrement| ✓                       | ✓                               | ✓                            | ✓                             |
| Supprimer un ou plusieurs enregistrements | ✓            | ✓                               | ✓                            | -                             |

:::info{title=Astuce}
Les variables **"Variables déclencheurs / Paramètre / Valeurs soumises"** dans les événements pré-action ne représentent pas les données réelles stockées dans la base de données, mais les paramètres soumis avec l'opération. Pour récupérer les données réelles de la base de données, vous devez utiliser le **nœud "Query record"** au sein du processus.

De plus, pour les opérations de suppression, lors de la gestion d'un seul enregistrement, l'**"ID"** dans les paramètres d'opération est une valeur simple. Cependant, pour plusieurs enregistrements, l'**"ID"** devient un tableau.
:::

---

**Messages de Réponse**

Une fois que le déclencheur est configuré, vous pouvez définir la logique pertinente dans le workflow. En règle générale, le mécanisme de branchement du **nœud "Condition"** est utilisé pour décider si le processus doit se **"Terminer"** en fonction de certaines conditions métier, renvoyant un **"Message de Réponse"** pré-défini :

![Configuration du Processus d'Interception](https://static-docs.nocobase.com/cfddda5d8012fd3d0ca09f04ea610539.png)

À ce stade, la configuration du workflow est complète. Vous pouvez le tester en soumettant des données qui ne remplissent pas les conditions configurées, ce qui déclenchera la logique d'interception. Cela entraînera le retour d'un message de réponse :

![Message de Réponse d'Erreur](https://static-docs.nocobase.com/06bd4a6b6ec499c853f0c39987f63a6a.png)

---

**Statut du Message de Réponse**

Si le nœud **"Fin du Processus"** est configuré pour se terminer avec un statut **"Succès"** et que le processus atteint ce nœud, la demande d'opération sera tout de même interceptée. Cependant, le message de réponse renvoyé affichera un statut **"Succès"** (au lieu de **"Erreur"**) :

![Message de Réponse avec Statut de Succès](https://static-docs.nocobase.com/9559bbf56067144759451294b18c790e.png)
