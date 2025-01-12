# Synchronisation des Données Utilisateur via l'API HTTP

## Obtenir une Clé API

Référez-vous à [Clés API](../api-keys). Assurez-vous que le rôle associé à la clé API dispose des autorisations nécessaires pour synchroniser les données utilisateur.

## Vue d'Ensemble de l'API

### Exemple

```bash
curl 'https://localhost:13000/api/userData:push' \
  -H 'Authorization: Bearer <token>' \
  --data-raw '{"dataType":"user","records":[]}' # Voir les détails du corps de la requête ci-dessous
```

### Point d'Entrée

```bash
POST /api/userData:push
```

### Format des Données Utilisateur

#### UserData

| Paramètre    | Type                               | Description                                                                 |
|--------------|------------------------------------|-----------------------------------------------------------------------------|
| `dataType`   | `'user' \| 'department'`           | Obligatoire. Type de données envoyées. Utilisez `user` pour envoyer des données utilisateur. |
| `matchKey`   | `'username' \| 'email' \| 'phone'` | Facultatif. Utilisé pour associer les utilisateurs existants en fonction du champ spécifié. |
| `records`    | `UserRecord[]`                     | Obligatoire. Tableau des enregistrements de données utilisateur.                                       |

#### UserRecord

| Paramètre      | Type       | Description                                                                 |
|----------------|------------|-----------------------------------------------------------------------------|
| `uid`          | `string`   | Obligatoire. Identifiant unique pour les données utilisateur source. Inaltérable pour un utilisateur. |
| `nickname`     | `string`   | Facultatif. Surnom de l'utilisateur.                                         |
| `username`     | `string`   | Facultatif. Nom d'utilisateur.                                               |
| `email`        | `string`   | Facultatif. Adresse email de l'utilisateur.                                  |
| `phone`        | `string`   | Facultatif. Numéro de téléphone de l'utilisateur.                            |
| `departments`  | `string[]` | Facultatif. Tableau des identifiants des départements auxquels l'utilisateur appartient. |
| `isDeleted`    | `boolean`  | Facultatif. Indique si l'enregistrement est supprimé.                       |
| `<field>`      | `any`      | Facultatif. Champs personnalisés dans la table utilisateur.                 |

### Format des Données de Département

:::info
L'envoi des données de département nécessite l'installation et l'activation du plugin [Départements](../../departments).
:::

#### DepartmentData

| Paramètre    | Type                     | Description                                                             |
|--------------|--------------------------|-------------------------------------------------------------------------|
| `dataType`   | `'user' \| 'department'` | Obligatoire. Type de données envoyées. Utilisez `department` pour envoyer des données de département. |
| `records`    | `DepartmentRecord[]`     | Obligatoire. Tableau des enregistrements de données de département.     |

#### DepartmentRecord

| Paramètre      | Type      | Description                                                                 |
|----------------|-----------|-----------------------------------------------------------------------------|
| `uid`          | `string`  | Obligatoire. Identifiant unique pour les données de département source. Inaltérable. |
| `title`        | `string`  | Obligatoire. Titre du département.                                           |
| `parentUid`    | `string`  | Facultatif. Identifiant du département parent.                              |
| `isDeleted`    | `boolean` | Facultatif. Indique si l'enregistrement est supprimé.                       |
| `<field>`      | `any`     | Facultatif. Champs personnalisés dans la table département.                |

:::info

1. L'envoi des données est idempotent, garantissant des résultats cohérents lors de plusieurs envois.
2. Si un département parent n'est pas encore créé lors de l'envoi des données de département, il ne peut pas être associé. Il faudra renvoyer les données après avoir créé le département parent.
3. De même, si un département n'est pas encore créé lors de l'envoi des données utilisateur, il ne peut pas associer les utilisateurs à leurs départements. Il faut d'abord envoyer les données de département, puis renvoyer les données utilisateur.

:::
