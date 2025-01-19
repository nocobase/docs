# v0.16: 2023-11-20

## Nouveaux ajouts

### Refactorisation du cache

La version précédente du cache avait une faible utilisation (ne supportait que le cache en mémoire). La version v0.16 a été refactorisée pour inclure à la fois un cache en mémoire et un cache Redis, avec un support pour des magasins personnalisés. Pour plus de détails sur son utilisation, consultez la [documentation de l'API](https://docs.nocobase.com/api/cache/cache-manager).

## Changements incompatibles

### Mise à jour de la version minimale de Node

La version 16 de Node n'est plus maintenue. La version minimale est désormais la v18.

```json
{
  "engines": {
    "node": ">=18"
  }
}
```

### Mise à jour de la méthode de création du cache

La méthode de création de cache précédente est obsolète. Utilisez désormais `createCache`.

Avant :

```ts
import { createCache } from "@nocobase/cache";

const cache = createCache();
```

Désormais, le cache est géré par `CacheManager` et créé avec `app.cacheManager`.

```ts
const cache = await app.cacheManager.createCache({
  name: "memory", // nom unique du cache
  store: "memory", // méthode de cache unique
  // autres configurations
  max: 2000,
  ttl: 60 * 1000,
});
```

### Mise à jour des variables d'environnement

Les variables d'environnement précédentes pour la configuration du cache nécessitaient une chaîne JSON.

Avant :

```bash
CACHE_CONFIG={"storePackage":"cache-manager-fs-hash","ttl":86400,"max":1000}
```

Les nouvelles variables d'environnement pour configurer le cache sont les suivantes :

```bash
# Nom unique de la méthode de cache par défaut, mémoire ou redis
CACHE_DEFAULT_STORE=memory
# Nombre maximum d'éléments dans le cache en mémoire
CACHE_MEMORY_MAX=2000
# Redis, optionnel
CACHE_REDIS_URL=redis://localhost:6379
```

## Changements complets du changelog

- refactorisation(cache): amélioration du cache [`#3004`](https://github.com/nocobase/nocobase/pull/3004)
- correction: URL de base pour le stockage local [`#3063`](https://github.com/nocobase/nocobase/pull/3063)
- fonctionnalité: affichage de la définition de la table [`#3061`](https://github.com/nocobase/nocobase/pull/3061)
- fonctionnalité: support de MariaDB [`#3052`](https://github.com/nocobase/nocobase/pull/3052)
- correction(plugin-workflow): corrections mineures côté client [`#3062`](https://github.com/nocobase/nocobase/pull/3062)
- tâche: inférence de vue [`#3060`](https://github.com/nocobase/nocobase/pull/3060)
- correction: tri par collection d'association [`#3058`](https://github.com/nocobase/nocobase/pull/3058)
- fonctionnalité: Node >= 18 [`#3066`](https://github.com/nocobase/nocobase/pull/3066)
