# Aperçu

Les nœuds sont les unités de base de l'organisation logique dans un flux de travail. Un flux de travail peut contenir n'importe quel nombre de nœuds, et chaque type de nœud représente une instruction qui détermine le comportement du nœud. La configuration d'un nœud correspond aux paramètres de l'instruction, qui déterminent l'objet de données ou d'autres contenus associés à son comportement.

:::info{title=Note}
Les déclencheurs de flux de travail ne sont pas considérés comme des nœuds, mais sont affichés dans le diagramme de flux de travail en tant que nœuds d'entrée. Ce sont des concepts différents des nœuds. Pour plus de détails, veuillez consulter la section [Déclencheurs](../triggers/index.md).
:::

D'un point de vue fonctionnel, les nœuds implémentés jusqu'à présent se répartissent en quatre catégories (un total de 25 types de nœuds) :

- **Contrôle de Flux**
  - [Condition](./condition.md)
  - [Délai](./delay.md) (fourni par le plugin @nocobase/plugin-workflow-delay)
  - [Fin du Processus](./end.md)
  - [Boucle](./loop.md) (fourni par le plugin @nocobase/plugin-workflow-loop)
  - [Branche parallèle](./parallel.md) (fourni par le plugin @nocobase/plugin-workflow-parallel)
  - [Output](./output.md) (provided by plugin @nocobase/plugin-workflow-subflow)
  - [Call Workflow](./subflow.md) (provided by plugin @nocobase/plugin-workflow-subflow)
  - [Variable](./variable.md) (fourni par le plugin @nocobase/plugin-workflow-variable)
- **Calcul**
  - [Calcul](./calculation.md)
  - [Calcul de date](./date-calculation.md) (fourni par le plugin @nocobase/plugin-workflow-date-calculation)
  - [Calcul d'expressions dynamiques](./dynamic-calculation.md) (fourni par le plugin @nocobase/plugin-workflow-dynamic-calculation)
  - [Requête JSON](./json-query.md) (fourni par le plugin @nocobase/plugin-workflow-json-query)
  - [JSON Variable Mapping](./json-variable-mapping.md) (provided by plugin @nocobase/plugin-workflow-json-variable-mapping)
- **Opérations sur Tableaux de Données**
  - [Créer un enregistrement](./create.md)
  - [Mettre à jour un enregistrement](./update.md)
  - [Supprimer un enregistrement](./destroy.md)
  - [Requête d'enregistrement](./query.md)
  - [Requête agrégée](./aggregate.md) (fourni par le plugin @nocobase/plugin-workflow-aggregate)
  - [Opération SQL](./sql.md) (fourni par le plugin @nocobase/plugin-workflow-sql)
- **Traitement Manuel**
  - [Traitement manuel](./manual.md) (fourni par le plugin @nocobase/plugin-workflow-manual)
  - [Approbation](./approval.md) (fourni par le plugin @nocobase/plugin-workflow-approval)
  - [CC](./cc.md) (fourni par le plugin @nocobase/plugin-workflow-cc)
- **Autres Extensions**
  - [JavaScript](./javascript.md) (fourni par le plugin @nocobase/plugin-workflow-javascript)
  - [Requête HTTP](./request.md) (fourni par le plugin @nocobase/plugin-workflow-request)
  - [Message de réponse](./response-message.md) (fourni par le plugin @nocobase/plugin-workflow-response-message)
