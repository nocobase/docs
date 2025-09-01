# Division des services <Badge>v1.9.0+</Badge>

En règle générale, tous les services d’une application NocoBase s’exécutent dans la même instance Node.js. Lorsque les fonctionnalités de l’application deviennent progressivement plus complexes avec l’évolution des besoins, certains services gourmands en ressources peuvent affecter les performances globales.  
Pour améliorer les performances, NocoBase prend en charge, en mode cluster, la possibilité de répartir les services de l’application sur différents nœuds, afin d’éviter qu’un problème de performance d’un service unique n’empêche l’application de répondre correctement aux requêtes des utilisateurs.  
Par ailleurs, il est également possible de procéder à une montée en charge horizontale ciblée de certains services, afin d’optimiser l’utilisation des ressources du cluster.

Lors du déploiement en cluster, NocoBase permet de répartir différents services sur différents nœuds. Le schéma ci-dessous illustre cette architecture :

![20250803214857](https://static-docs.nocobase.com/20250803214857.png)

## Comment diviser les services

Pour répartir différents services sur différents nœuds, il faut configurer la variable d’environnement `WORKER_MODE`.  
Cette variable peut être définie selon les règles suivantes :

- `WORKER_MODE=<vide>` : non configuré ou vide, le mode de fonctionnement est identique à celui d’une instance unique. Le nœud reçoit toutes les requêtes et traite toutes les tâches. Compatible avec les applications existantes non configurées.
- `WORKER_MODE=!` : mode de fonctionnement où le nœud traite uniquement les requêtes, sans traiter de tâches.
- `WORKER_MODE=workflow:process,async-task:process` : configuré avec un ou plusieurs identifiants de service (séparés par des virgules), le nœud ne traite que les tâches correspondant à ces identifiants, sans traiter les requêtes.
- `WORKER_MODE=*` : mode de fonctionnement où le nœud traite toutes les tâches d’arrière-plan, tous modules confondus, mais sans traiter de requêtes.
- `WORKER_MODE=!,workflow:process` : mode de fonctionnement où le nœud traite les requêtes et uniquement les tâches correspondant à un identifiant donné.
- `WORKER_MODE=-` : mode où le nœud ne traite ni requêtes ni tâches (utilisé pour certains processus worker).

Par exemple, dans un environnement K8S, on peut configurer les nœuds ayant la même fonction avec la même variable d’environnement, ce qui permet de faciliter la montée en charge horizontale d’un type de service particulier.

## Quels services peuvent être séparés

### Workflow asynchrone

**Clé de service** : `workflow:process`

Les workflows en mode asynchrone sont déclenchés puis mis en file d’attente pour exécution.  
Ces workflows peuvent être considérés comme des tâches d’arrière-plan et ne nécessitent généralement pas que l’utilisateur attende un résultat immédiat.  
Pour les processus complexes et gourmands en ressources, particulièrement en cas de déclenchements fréquents, il est recommandé de les exécuter sur des nœuds dédiés.

### Autres tâches asynchrones côté utilisateur

**Clé de service** : `async-task:process`

Cela inclut des tâches créées par les actions utilisateur comme l’importation ou l’exportation asynchrones.  
En cas de grands volumes de données ou d’un fort taux de concurrence, il est recommandé de les exécuter sur des nœuds séparés.

## Exemple de configuration

### Nœuds traitant séparément

Supposons trois nœuds `node1`, `node2` et `node3` :

- `node1` : traite uniquement les requêtes UI utilisateur, avec `WORKER_MODE=!`.
- `node2` : traite uniquement les workflows, avec `WORKER_MODE=workflow:process`.
- `node3` : traite uniquement les tâches asynchrones, avec `WORKER_MODE=async-task:process`.

### Nœuds en traitement mixte

Supposons quatre nœuds `node1`, `node2`, `node3` et `node4` :

- `node1` et `node2` : traitent toutes les requêtes classiques, avec `WORKER_MODE=!`, et sont alimentés par un équilibrage de charge.
- `node3` et `node4` : traitent toutes les autres tâches d’arrière-plan, avec `WORKER_MODE=*`.

## Références pour le développement

Lors du développement de plugins métier, il est possible de séparer les services particulièrement gourmands en ressources.  
Pour cela, on peut procéder comme suit :

1. Définir un nouvel identifiant de service, par exemple `my-plugin:process`, à utiliser dans la configuration de la variable d’environnement et documenter son usage.
2. Dans le code côté serveur du plugin, utiliser l’interface `app.serving()` pour vérifier l’environnement et décider si le nœud doit fournir ce service en fonction de la variable d’environnement.

```javascript
const MY_PLUGIN_SERVICE_KEY = 'my-plugin:process';
// Dans le code serveur du plugin
if (this.app.serving(MY_PLUGIN_SERVICE_KEY)) {
  // Traiter la logique métier de ce service
} else {
  // Ne pas traiter la logique métier de ce service
}
```
