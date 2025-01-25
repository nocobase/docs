### **Extend Trigger Types**

Chaque workflow doit être configuré avec un déclencheur spécifique qui sert de point d'entrée pour l'exécution du processus.

Les types de déclencheurs correspondent généralement à des événements spécifiques du système. Tout au long du cycle de vie de l'application, tout événement offrant une option d'abonnement peut être défini comme un type de déclencheur. Parmi les exemples, on trouve la réception de requêtes, les opérations sur des tables de données ou des tâches planifiées.

Les types de déclencheurs sont enregistrés dans le registre des déclencheurs du plugin à l'aide d'identifiants uniques sous forme de chaînes de caractères. Le plugin de workflow inclut plusieurs déclencheurs intégrés :

- `'collection'` : Déclenché par des opérations sur des tables de données.
- `'schedule'` : Déclenché par des tâches planifiées.
- `'action'` : Déclenché par des événements post-opération.

Lors de l'extension des types de déclencheurs, il est essentiel de s'assurer que chaque identifiant est unique. Le côté serveur doit gérer l'enregistrement pour s'abonner et se désabonner des déclencheurs, tandis que le côté client doit fournir l'interface de configuration correspondante.

## **Implémentation Côté Serveur**

Tout déclencheur personnalisé doit étendre la classe de base `Trigger` et implémenter les méthodes `on` et `off`, qui gèrent l'abonnement et le désabonnement aux événements système spécifiques. La méthode `on` doit invoquer `this.workflow.trigger()` dans le rappel de l'événement pour déclencher le workflow. La méthode `off` doit garantir un nettoyage approprié lors du désabonnement.

La propriété `this.workflow` fait référence à l'instance du plugin de workflow, transmise à la classe de base `Trigger` lors de la construction.

```ts
import { Trigger } from '@nocobase/plugin-workflow';

class MyTrigger extends Trigger {
  timer: NodeJS.Timeout;

  on(workflow) {
    // Enregistrer l'événement
    this.timer = setInterval(() => {
      // Déclencher le workflow
      this.workflow.trigger(workflow, { date: new Date() });
    }, workflow.config.interval ?? 60000);
  }

  off(workflow) {
    // Désabonnement de l'événement
    clearInterval(this.timer);
  }
}
```

Ensuite, enregistrez l'instance du déclencheur avec le moteur de workflow dans le plugin qui étend le workflow :

```ts
import WorkflowPlugin from '@nocobase/plugin-workflow';

export default class MyPlugin extends Plugin {
  load() {
    // Obtenir l'instance du plugin de workflow
    const workflowPlugin = this.app.pm.get(WorkflowPlugin) as WorkflowPlugin;

    // Enregistrer le déclencheur
    workflowPlugin.registerTrigger('interval', MyTrigger);
  }
}
```

Une fois le serveur lancé, le type de déclencheur `'interval'` sera disponible pour être ajouté et exécuté.

## **Configuration Côté Client**

Du côté client, la tâche principale consiste à fournir une interface de configuration adaptée aux paramètres spécifiques requis pour chaque type de déclencheur. Chaque type de déclencheur doit également être enregistré avec le plugin de workflow.

Par exemple, pour configurer le déclencheur basé sur l'intervalle mentionné précédemment, définissez le champ de configuration `interval` dans l'interface du formulaire :

```ts
import { Trigger } from '@nocobase/workflow/client';

class MyTrigger extends Trigger {
  title = 'Interval Timer Trigger';
  // Champs de configuration du déclencheur
  fieldset = {
    interval: {
      type: 'number',
      title: 'Interval',
      name: 'config.interval',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      default: 60000,
    },
  };
}
```

Ensuite, enregistrez ce type de déclencheur avec l'instance du plugin de workflow dans le plugin étendant :

```ts
import { Plugin } from '@nocobase/client';
import WorkflowPlugin from '@nocobase/plugin-workflow/client';

import MyTrigger from './MyTrigger';

export default class extends Plugin {
  // Modifiez l'instance de l'application si nécessaire
  async load() {
    const workflow = this.app.pm.get(WorkflowPlugin) as WorkflowPlugin;
    workflow.registerTrigger('interval', MyTrigger);
  }
}
```

Une fois enregistré, le nouveau type de déclencheur apparaîtra dans l'interface de configuration du workflow.

:::info{title=Astuce}
Assurez-vous que l'identifiant du type de déclencheur enregistré côté client correspond à celui côté serveur pour éviter les erreurs.
:::

Pour plus de détails sur la définition des types de déclencheurs, consultez la section [Référence de l'API Workflow](./api#pluginregisterTrigger).
