# v0.18 : 2023-12-21

## Nouvelles fonctionnalités

Afin d'améliorer la robustesse de NocoBase, nous avons intégré des tests E2E (end-to-end) au cours du quatrième trimestre. Parallèlement, nous avons également peaufiné l'ensemble du système de test.

### @nocobase/test

Le kit de test NocoBase comprend :

- **`@nocobase/test/server`** pour les tests côté serveur
  - Intégration de **`supertest`** pour les tests d'interface.
  - `mockDatabase` et `mockServer` sont intégrés.
  
- **`@nocobase/test/client`** pour les tests côté client
  - Intégration de **`@testing-library/react`** et **`@testing-library/user-event`**.
  
- **`@nocobase/test/e2e`** pour les tests E2E
  - Intégration de **`@playwright/test`**.
  - Méthodes de simulation communes intégrées.

### Framework de tests

- **Tests côté serveur** : utilisant le framework **Vitest**.
- **Tests côté client** : utilisant le framework **Vitest**.
- **Tests E2E** : utilisant le framework **Playwright**.

### Écriture des tests

#### Tests côté serveur

```typescript
import { mockDatabase } from '@nocobase/test/server';

describe('ma suite de tests pour la base de données', () => {
  let db;

  beforeEach(async () => {
    db = mockDatabase();
    db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });
    await db.sync();
  });

  afterEach(async () => {
    await db.close();
  });

  test('mon cas de test', async () => {
    const repository = db.getRepository('posts');
    const post = await repository.create({
      values: {
        title: 'hello',
      },
    });

    expect(post.get('title')).toEqual('hello');
  });
});
```

Dans cet exemple de test côté serveur, un environnement de base de données est simulé avec `mockDatabase()`. La collection "posts" est créée, puis un enregistrement est inséré. Après cela, nous vérifions si la valeur du champ `title` est bien "hello".

#### Tests côté client

```typescript
import { render, screen, userEvent, waitFor } from '@nocobase/test/client';

it('devrait afficher la valeur de l\'entrée de l\'utilisateur', async () => {
  const { container } = render(<App1 />);
  const input = container.querySelector('input');
  await userEvent.type(input, 'Hello World');
  await waitFor(() => {
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
```

Dans cet exemple de test côté client, l'application `App1` est rendue et un utilisateur tape du texte dans un champ de saisie. Ensuite, le test attend que le texte "Hello World" apparaisse dans le document, ce qui est vérifié avec `screen.getByText`.

#### Tests E2E (End-to-End)

```typescript
import { test } from '@nocobase/test/e2e';

test('connexion', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Nom d\'utilisateur/Email').click();
  await page.getByPlaceholder('Nom d\'utilisateur/Email').fill('admin@nocobase.com');
  await page.getByPlaceholder('Mot de passe').click();
  await page.getByPlaceholder('Mot de passe').fill('admin123');
  await page.getByRole('button', { name: 'Se connecter' }).click();
  await expect(
      page.getByTestId('user-center-button').getByText('Super Admin')
    ).toBeVisible();
});
```

Dans ce test E2E, la page de connexion est simulée. Un utilisateur entre ses identifiants, clique sur le bouton de connexion, puis le test vérifie que le bouton "Super Admin" est visible après la connexion réussie.

### Exécution des tests avec Vitest

```bash
# Exécute tous les tests avec deux processus parallèles Vitest pour le frontend et le backend.
yarn test

# Exécute les tests côté client.
yarn test --client
# équivalent à
yarn cross-env TEST_ENV=client-side vitest

# Exécute les tests côté serveur.
yarn test --server
# équivalent à
yarn cross-env TEST_ENV=server-side vitest

# Spécifie un répertoire ou un fichier spécifique.
yarn test your/path/src/__tests__/test-file.test.ts
# Les fichiers côté client doivent inclure /client/ 
yarn test your/path/client/src/__tests__/test-file.test.ts
```

📢 **Différence avec l'exécution directe de Vitest :**

- Lorsque vous spécifiez un chemin, le système reconnaît automatiquement le côté frontend et backend. Le côté frontend doit inclure `/client/`.
- Les tests backend sont exécutés avec l'option `-single-thread` par défaut. Si vous souhaitez la désactiver, ajoutez `-single-thread=false`.
- L'option par défaut est `--run`. Si vous devez écouter les changements, ajoutez `--watch`.

### Exécution des tests Playwright

```bash
# Installer les dépendances
yarn e2e install-deps

# Exécuter les tests
yarn e2e test

# Mode UI
yarn e2e test --ui

# Spécifier l'URL de l'application
yarn e2e test --url=http://localhost:20000

# Démarrer une application. Elle est réinstallée à chaque fois.
yarn e2e start-app
```

## Autres changements

### Optimisation du plugin d'authentification

- Guide de développement de l'extension d'authentification [https://docs.nocobase.com/plugins/auth/dev/guide](https://docs.nocobase.com/plugins/auth/dev/guide)
- Changements incompatibles [https://docs.nocobase.com/breaking-changes/v0-18-0-alpha-1](https://docs.nocobase.com/breaking-changes/v0-18-0-alpha-1)

### Décomposition modulaire en plugins

Afin d'affiner le noyau et de le rendre plus léger, certaines fonctionnalités ont été séparées de manière modulaire. Récemment, les plugins qui ont subi cette modularisation comprennent :

| Nom du plugin                        | Nom du package                               |
| ------------------------------------ | -------------------------------------------- |
| Action - Édition en masse            | @nocobase/plugin-action-bulk-edit            |
| Action - Mise à jour en masse        | @nocobase/plugin-action-bulk-update          |
| Action - Duplication                 | @nocobase/plugin-action-duplicate            |
| Kanban                               | @nocobase/plugin-kanban                      |
| Gantt                                | @nocobase/plugin-gantt                       |
| Workflow - Agrégation                | @nocobase/plugin-workflow-aggregate          |
| Workflow - Approbation               | @nocobase/plugin-workflow-approval           |
| Workflow - Délai                     | @nocobase/plugin-workflow-delay              |
| Workflow - Calcul dynamique          | @nocobase/plugin-workflow-dynamic-calculation|
| Workflow - Déclencheur de formulaire | @nocobase/plugin-workflow-form-trigger       |
| Workflow - Requête JSON              | @nocobase/plugin-workflow-json-query         |
| Workflow - Boucle                    | @nocobase/plugin-workflow-loop               |
| Workflow - Manuel                    | @nocobase/plugin-workflow-manual             |
| Workflow - Parallèle                 | @nocobase/plugin-workflow-parallel           |
| Workflow - Demande                   | @nocobase/plugin-workflow-request            |
| Workflow - SQL                       | @nocobase/plugin-workflow-sql                |

Voir la [liste complète des plugins](https://docs.nocobase.com/plugins) pour plus de détails. Le document est en construction, avec certains contenus qui peuvent être manquants ou en attente de traduction. Vous pouvez suivre les mises à jour sur [nocobase/docs](https://github.com/nocobase/docs).
