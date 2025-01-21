# Fonctionnement de NocoBase

NocoBase prend en charge toutes ses fonctionnalités grâce à une architecture basée sur un microkernel et des plugins.

## Microkernel

Le noyau de NocoBase est similaire à un framework de développement qui définit le cycle de vie de l'application et standardise les protocoles d'interface de chaque couche. La structure de base de NocoBase est illustrée dans le diagramme suivant :

![how-micro-core](https://static-docs.nocobase.com/how-micro-core.png)

Le modèle de données est utilisé comme moteur sous-jacent, l'interface basée sur des blocs est utilisée comme couche utilisateur, et la couche de logique métier sert de pont reliant les deux et portant toutes sortes de règles métier, permettant ainsi aux données de circuler de manière cyclique à travers les opérations de l'utilisateur.

NocoBase définit des protocoles standard à trois niveaux principaux :
1. **Modèle de données** : basé sur l'encapsulation d'ORM de base de données relationnelle pour la couche supérieure, avec une description normalisée de la modélisation des données (voir [Collections et Champs](/development/server/collections)).
2. **Routage HTTP** : interface de type RESTful basée sur des définitions de ressources et d'actions (voir [Ressources et Actions](/development/server/resources-actions)).
3. **Interface côté client** : JSON Schema basé sur Formily 2.0 pour décrire la disposition personnalisée des pages et des blocs (voir [UI Schema](/development/client/ui-schema/quick-start)).

Sur la base de ces protocoles, cela rend également le développement d'autres modules plus standardisé et plus facile.

### Pluginisation

NocoBase ouvre des interfaces extensibles à tous les aspects du cycle de vie de l'application, y compris les types de champs, les types de collections, les sources de données tierces dans le modèle de données, l'insertion de middleware dans la couche de logique métier, les composants d'interface, les blocs, etc. Ces interfaces couvrent tout le cycle de vie de l'application (démarrage, arrêt, et chargement des plugins), et de nombreux plugins offrent même des interfaces extensibles secondaires. Cette conception offre une multitude de possibilités d'extension pour le développement d'applications, et toutes les fonctionnalités intégrées de NocoBase sont également composées à travers cette approche :

![how-plugins-en](https://static-docs.nocobase.com/how-plugins-en.png)

Les plugins peuvent être utilisés pour étendre les fonctionnalités requises à n'importe quelle étape du cycle de vie de l'application, comme le plugin **Permissions**, qui inclut des tables de données personnalisées, des traitements métier pour le middleware des requêtes, et des interfaces pour l'administration front-end.
Grâce à cette conception, NocoBase ne se contente pas de réaliser des fonctionnalités no-code riches, mais prend également en charge des extensions libres lorsque les fonctionnalités intégrées ne peuvent pas satisfaire les besoins.

### En savoir plus

Veuillez consulter la section [Développement de plugins](/development) pour commencer à étendre NocoBase en développant des plugins.
