# Événement planifié

Les tâches planifiées sont des événements déclenchés en fonction de conditions temporelles, incluant deux modes :

- **Heure personnalisée** : Déclencheurs programmés régulièrement similaires à un cron basé sur l'heure du système.
- **Champ temporel de la collection** : Déclenché en fonction de la valeur du champ temporel dans la collection.

Lorsque le système atteint l'heure (à la seconde près) qui satisfait les conditions du déclencheur configuré, le workflow correspondant sera déclenché.

## Utilisation de base

### Création d'un événement planifié

Sélectionnez le type "Événement planifié" lors de la création d'un workflow dans la liste des workflows :

![Créer un événement planifié](https://static-docs.nocobase.com/e09b6c9065167875b2ca7de5f5a799a7.png)

### Mode Heure personnalisée

Pour le mode régulier, commencez par configurer l'heure de début à n'importe quel moment dans le futur ou dans le passé (précis à la seconde). Lorsqu'elle est configurée pour un moment passé, le système vérifiera si l'heure est atteinte en fonction de la condition de répétition configurée. Si aucune condition de répétition n'est configurée, le workflow ne sera pas déclenché si l'heure de début est dans le passé.

Il existe deux façons de configurer les règles de répétition :

- **Temps d'intervalle** : Déclenchement à intervalles fixes après l'heure de début, par exemple, toutes les heures, toutes les 30 minutes, etc.
- **Mode avancé** : Utilisation des règles cron, permettant de configurer des déclenchements à des moments fixes basés sur des règles de dates et heures.

Après avoir configuré la règle de répétition, vous pouvez également configurer la condition de fin, qui peut être un point fixe dans le temps ou un nombre d'exécutions.

### Mode Champ temporel de la collection

L'utilisation du champ temporel de la collection pour déterminer l'heure de début est un mode de déclenchement qui combine des tâches planifiées ordinaires avec le champ temporel de la collection. Ce mode peut simplifier certains nœuds dans des processus spécifiques et rendre la configuration plus intuitive. Par exemple, pour changer le statut des commandes non payées depuis plus de 30 minutes en "Annulée", vous pouvez simplement configurer une tâche planifiée dans le mode champ temporel de la collection, en sélectionnant l'heure de début comme étant 30 minutes après le champ de l'heure de création de la commande.

## Conseils associés

### Les tâches planifiées lorsque l'application n'est pas démarrée

Si les conditions temporelles configurées sont remplies mais que le service complet de l'application NocoBase est arrêté ou en mode hors ligne, les tâches planifiées qui devraient être déclenchées au moment correspondant seront manquées. Après le redémarrage du service, ces tâches manquées ne seront pas déclenchées à nouveau. Il peut donc être nécessaire de prévoir des mesures ou des solutions de secours dans ce cas.

### Compte de répétition

Lorsque le nombre de répétitions est configuré dans la condition de fin, il calcule le nombre total d'exécutions du même workflow, y compris toutes les versions. Par exemple, si une tâche planifiée a été exécutée 10 fois dans la version 1, et que le nombre de répétitions est aussi configuré sur 10, le workflow ne sera plus déclenché. Même si cette tâche est copiée dans une nouvelle version, elle ne sera pas déclenchée, sauf si le nombre de répétitions est modifié à un nombre supérieur à 10. Toutefois, si elle est dupliquée dans un nouveau workflow, le nombre d'exécutions sera recalculé à partir de 0. Le nouveau workflow pourra être déclenché 10 fois supplémentaires.

### Différence entre le temps d'intervalle et le mode avancé dans les règles de répétition

Le temps d'intervalle dans la règle de répétition est relatif au moment du dernier déclenchement (l'heure de début), tandis que le mode avancé déclenche à des points horaires fixes. Par exemple, si il est configuré pour déclencher toutes les 30 minutes et que le dernier déclenchement a eu lieu à 2021-09-01 12:01:23, le prochain déclenchement aura lieu à 2021-09-01 12:31:23. Le mode avancé, comme cron, permet de configurer des règles pour déclencher à des moments fixes, par exemple, il peut être configuré pour se déclencher à 01 et 31 minutes après chaque heure.

## Exemple

Supposons que nous voulons vérifier les commandes non payées depuis plus de 30 minutes toutes les minutes et automatiquement changer leur statut en "Annulé". Nous allons l'implémenter en utilisant les deux modes.

### Mode Heure personnalisée

Créez un workflow basé sur une tâche planifiée, sélectionnez le mode "Heure personnalisée" dans la configuration du déclencheur, choisissez un moment n'importe quand avant l'heure actuelle comme heure de début, sélectionnez "Chaque minute" pour la règle de répétition, et laissez la condition de fin vide :

![Configuration du déclencheur Tâche planifiée Mode Heure personnalisée](https://static-docs.nocobase.com/71131e3f2034263f883062389b356cbd.png)

Ensuite, configurez les autres nœuds selon la logique du workflow, en calculant une heure 30 minutes avant l'heure système actuelle, et en mettant à jour le statut en "Annulé" pour les commandes non payées créées avant ce moment :

![Configuration du nœud de mise à jour du statut dans le mode Heure personnalisée](https://static-docs.nocobase.com/188bc5287ffa1fb24a4e7baa1de6eb29.png)

Après avoir activé le workflow, il sera déclenché toutes les minutes à partir de l'heure de début, calculera 30 minutes avant l'heure actuelle, et mettra à jour le statut des commandes créées avant ce moment pour les annuler.

### Mode Champ temporel de la collection

Créez un workflow basé sur une tâche planifiée, sélectionnez le mode "Champ temporel de la collection" dans la configuration du déclencheur, choisissez la collection "Commandes", sélectionnez 30 minutes après l'heure de création de la commande comme heure de début, et choisissez "Pas de répétition" pour la règle de répétition :

![Configuration du déclencheur de la tâche planifiée Mode Champ temporel de la collection](https://static-docs.nocobase.com/d40d5aef57f42799d31cc5882dd94246.png)

Ensuite, configurez les autres nœuds selon la logique du workflow, en mettant à jour les commandes dont l'ID a été déclenché et ayant le statut "Non payé" pour les annuler :

![Configuration du nœud de mise à jour dans le mode Champ temporel de la collection](https://static-docs.nocobase.com/491dde9df8f773f5b14a4fd8ceac9d3e.png)

Contrairement au mode Heure personnalisée, il n'est pas nécessaire de calculer 30 minutes avant, car le contexte des données déclenchées dans le workflow contient déjà l'enregistrement de données correspondant aux conditions temporelles, vous pouvez donc directement mettre à jour le statut des commandes concernées.
