# v0.10 : 2023-06-20

## Nouvelles fonctionnalités du deuxième trimestre

- Améliorations du composant champ d'association, prise en charge du changement de plusieurs composants
  - Sélection
  - Sélecteur d'enregistrements
  - Sous-formulaire/Sous-détails
  - Sous-tableau
  - Gestionnaire de fichiers
  - Titre (en lecture seule)
- Création rapide de données relationnelles, prise en charge de deux modes de création rapide
  - Ajouter dans le menu déroulant pour créer rapidement un nouvel enregistrement basé sur le champ titre
  - Ajouter dans une fenêtre contextuelle pour configurer des formulaires d'ajout complexes
- Action de duplication, prend en charge deux modes
  - Duplication directe
  - Copier dans le formulaire et continuer à remplir
- Modèles de données de formulaire
- Prise en charge des variables dans le filtre de portée de données
- Bloc de liste
- Bloc de carte en grille
- Plugin client mobile
- Plugin d'authentification des utilisateurs, prise en charge de différentes méthodes d'authentification
  - E-mail/Mot de passe
  - SMS
  - OIDC
  - SAML
- Nœuds de workflow
  - Mise à niveau du nœud manuel, prise en charge de l'ajout et de l'édition à partir des collections existantes
  - Nœud de boucle
  - Nœud d'agrégation
- Gestionnaire de fichiers
  - Fournir un modèle de collection de fichiers
  - Fournir un composant gestionnaire de fichiers

## Mise à niveau des applications

### Mise à niveau pour Docker Compose

Aucune modification, référence de mise à niveau [Mise à niveau pour Docker Compose](/welcome/getting-started/upgrading/docker-compose)

### Mise à niveau pour le code source Git

v0.10 comporte une mise à niveau majeure des dépendances, afin d'éviter des erreurs lors de la mise à niveau du code source, vous devez supprimer les répertoires suivants avant la mise à niveau :

```bash
# Supprimer le cache .umi
yarn rimraf -rf "./**/{.umi,.umi-production}"
# Supprimer les fichiers compilés
yarn rimraf -rf "./packages/*/*/{lib,esm,es,dist,node_modules}"
# Supprimer les dépendances
yarn rimraf -rf node_modules
```

Voir [Mise à niveau pour le code source Git](/welcome/getting-started/upgrading/git-clone) pour plus de détails

### Mise à niveau pour create-nocobase-app

Il est recommandé de redéfinir la nouvelle version avec `yarn create` et de modifier la configuration `.env`. Pour plus de détails, consultez [guide de mise à niveau majeure](/welcome/getting-started/upgrading/create-nocobase-app#major-upgrade)

## Modifications et changements potentiels de compatibilité

### Composant de champ sous-tableau

Non compatible avec la nouvelle version, les champs de bloc doivent être supprimés et réassignés (réaffectation uniquement au niveau de l'UI)

### Changements de l'API de téléchargement de fichiers

En plus de la table de pièces jointes intégrée, les utilisateurs peuvent également créer une collection de fichiers personnalisée. L'API de téléchargement pour les pièces jointes a été modifiée de `/api/attachments:upload` à `/api/<file-collection>:create`. Le téléchargement est obsolète, encore compatible avec v0.10 mais sera supprimé.

### Changements des API de connexion/inscription

Le noyau de Nocobase fournit un module [auth] plus puissant avec les changements suivants pour les API de connexion, d'enregistrement, de vérification et de déconnexion des utilisateurs :

```bash
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

Note : Les anciennes interfaces des utilisateurs sont obsolètes, encore compatibles avec v0.10 mais seront supprimées dans la prochaine version majeure.

### Ajustements pour le filtrage des champs de date

Si un filtrage lié aux dates a été configuré dans la plage de données précédemment, il doit être supprimé et reconfiguré.

## Guide de mise à niveau des plugins tiers

### Mise à niveau des dépendances

Les dépendances comprennent principalement :

- `react` mis à jour vers v18
- `react-dom` mis à jour vers v18
- `react-router` mis à jour vers v6.11
- `umi` mis à jour vers v4
- `dumi` mis à jour vers v2

Le fichier `package.json` des dépendances doit être mis à jour vers la dernière version, par exemple :

```diff
{
  "devDependencies": {
+   "react": "^18".
+   "react-dom": "^18".
+   "react-router-dom": "^6.11.2".
-   "react": "^17".
-   "react-dom": "^17".
-   "react-router-dom": "^5".
  }
}
```

### Modifications du code

Étant donné que `react-router` a été mis à jour, le code associé doit également être modifié. Les principales modifications incluent :

### Composant Layout

Le composant Layout doit utiliser `<Outlet />` au lieu de `props.children`.

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
-      { props.children }
+      <Outlet />
    </div>
  );
}
```

Si vous utilisez `React.cloneElement` pour rendre le composant de la route, vous devez le changer ainsi :

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function RouteComponent(props) {
  return (
    <div>
-      { React.cloneElement(props.children, { someProp: 'p1' }) }
+      <Outlet context={{ someProp: 'p1' }} />
    </div>
  );
}
```

Modifiez le composant de la route pour obtenir la valeur via `useOutletContext` :

```diff
import React from 'react';
+ import { useOutletContext } from 'react-router-dom';

- export function Comp(props){
+ export function Comp() {
+   const props = useOutletContext();
  return props.someProp;
}
```

### Redirection

`<Redirect>` est remplacé par `<Navigate replace />`.

```diff
- <Redirect to="about" />
+ <Navigate to="about" replace />
```

### useHistory

`useHistory` est remplacé par `useNavigate`.

```diff
- import { useHistory } from 'react-router-dom';
+ import { useNavigate} from 'react-router-dom';

- const history = useHistory();
+ const navigate = useNavigate();

- history.push('/about')
+ navigate('/about')

- history.replace('/about')
+ navigate('/about', { replace: true })
```

### useLocation

`useLocation<type>()` est remplacé par `useLocation`.

```diff
- const location= useLocation<type>();
+ const location= useLocation();
```

`const { query } = useLocation()` est remplacé par `useSearchParams()`.

```diff
- const location = useLocation();
- const query = location.query;
- const name = query.name;
+ const [searchParams, setSearchParams] = useSearchParams();
+ searchParams.get('name');
```

### Chemin

Tous les chemins de route suivants sont valides en v6 :

```
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
```

Les chemins de route de type RegExp suivants ne sont pas valides en v6 :

```
/tweets/:id(\d+)
/files/*/cat.jpg
/files-*
```

Pour plus d'informations sur les changements d'API, consultez [react-router@6](https://reactrouter.com/en/main/upgrading/v5).
