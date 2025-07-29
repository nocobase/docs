# Sources de données: principale vs externe

Les différences entre les sources de données principales et les sources de données externes dans NocoBase se reflètent principalement dans quatre aspects : le support des types de sources de données, le support des types de collections, le support des types de champs et les capacités de sauvegarde et de migration.

## 1. Support des types de sources de données

Pour plus de détails, voir : [Gestionnaire de sources de données](https://docs.nocobase.com/handbook/data-source-manager)

### Types de sources de données

| Type de source de données | Support source de données principale | Support source de données externe |
|---------------------------|-------------------------------------|-----------------------------------|
| PostgreSQL | ✅ | ✅ |
| MySQL | ✅ | ✅ |
| MariaDB | ✅ | ✅ |
| KingbaseES | ✅ | ✅ |
| MSSQL | ❌ | ✅ |
| Oracle | ❌ | ✅ |

### Gestion des collections

| Gestion des collections | Support source de données principale | Support source de données externe |
|------------------------|-------------------------------------|-----------------------------------|
| Gestion de base | ✅ | ✅ |
| Gestion visuelle | ✅ | ❌ |

## 2. Support des types de collections

Pour plus de détails, voir : [Collections](https://docs.nocobase.com/handbook/data-modeling/collection)

| Type de collection | Source de données principale | Source de données externe | Description |
|-------------------|------------------------------|---------------------------|-------------|
| Générale | ✅ | ✅ | Collection de base |
| Vue | ✅ | ✅ | Vue de source de données |
| Héritage | ✅ | ❌ | Support de l'héritage de modèle de données, source de données principale uniquement |
| Fichier | ✅ | ❌ | Support des téléchargements de fichiers, source de données principale uniquement |
| Commentaire | ✅ | ❌ | Système de commentaires intégré, source de données principale uniquement |
| Calendrier | ✅ | ❌ | Collection pour les vues de calendrier |
| Expression | ✅ | ❌ | Support des calculs de formules |
| Arbre | ✅ | ❌ | Pour la modélisation de données en structure arborescente |
| SQL | ✅ | ❌ | Collection définie via SQL |
| Connexion externe | ✅ | ❌ | Collection de connexion pour sources de données externes, fonctionnalité limitée |

## 3. Support des types de champs

Pour plus de détails, voir : [Collections de champs](https://docs.nocobase.com/handbook/data-modeling/collection-fields)

### Types de base

| Type de champ | Source de données principale | Source de données externe |
|--------------|---------------------------|------------------------|
| Texte simple | ✅ | ✅ |
| Texte long | ✅ | ✅ |
| Téléphone | ✅ | ✅ |
| Email | ✅ | ✅ |
| URL | ✅ | ✅ |
| Entier | ✅ | ✅ |
| Nombre | ✅ | ✅ |
| Pourcentage | ✅ | ✅ |
| Mot de passe | ✅ | ✅ |
| Couleur | ✅ | ✅ |
| Icône | ✅ | ✅ |

### Types de choix

| Type de champ | Source de données principale | Source de données externe |
|--------------|---------------------------|------------------------|
| Checkbox | ✅ | ✅ |
| Sélection simple | ✅ | ✅ |
| Sélection multiple | ✅ | ✅ |
| Groupe radio | ✅ | ✅ |
| Groupe checkbox | ✅ | ✅ |
| Région chinoise | ✅ | ❌ |

### Types de médias

| Type de champ | Source de données principale | Source de données externe |
|--------------|---------------------------|------------------------|
| Média | ✅ | ✅ |
| Markdown | ✅ | ✅ |
| Markdown(Vditor) | ✅ | ❌ |
| Texte riche | ✅ | ✅ |
| Pièce jointe(Association) | ✅ | ❌ |
| Pièce jointe(URL) | ✅ | ✅ |

### Types de date et heure

| Type de champ | Source de données principale | Source de données externe |
|--------------|---------------------------|------------------------|
| Date et heure(avec fuseau horaire) | ✅ | ✅ |
| Date et heure(sans fuseau horaire) | ✅ | ✅ |
| Horodatage Unix | ✅ | ✅ |
| Date(sans heure) | ✅ | ✅ |
| Heure | ✅ | ✅ |

### Types géométriques

| Type de champ | Source de données principale | Source de données externe |
|--------------|---------------------------|------------------------|
| Point | ✅ | ✅ |
| Ligne | ✅ | ✅ |
| Cercle | ✅ | ✅ |
| Polygone | ✅ | ✅ |

### Types avancés

| Type de champ | Source de données principale | Source de données externe |
|--------------|---------------------------|------------------------|
| UUID | ✅ | ✅ |
| Nano ID | ✅ | ✅ |
| Tri | ✅ | ✅ |
| Formule | ✅ | ✅ |
| Séquence | ✅ | ✅ |
| JSON | ✅ | ✅ |
| Sélecteur de collection | ✅ | ❌ |
| Chiffrement | ✅ | ✅ |

### Champs d'informations système

| Type de champ | Source de données principale | Source de données externe |
|--------------|---------------------------|------------------------|
| Créé le | ✅ | ✅ |
| Dernière mise à jour le | ✅ | ✅ |
| Créé par | ✅ | ❌ |
| Dernière mise à jour par | ✅ | ❌ |
| OID de table | ✅ | ❌ |

### Types d'association

| Type de champ | Source de données principale | Source de données externe |
|--------------|---------------------------|------------------------|
| Un à un | ✅ | ✅ |
| Un à plusieurs | ✅ | ✅ |
| Plusieurs à un | ✅ | ✅ |
| Plusieurs à plusieurs | ✅ | ✅ |
| Plusieurs à plusieurs (tableau) | ✅ | ❌ |

:::info
Les champs de pièces jointes dépendent des collections de fichiers, qui ne sont supportées que par les sources de données principales. Par conséquent, les sources de données externes ne supportent actuellement pas les champs de pièces jointes.
:::

## 4. Comparaison du support de sauvegarde et de migration

| Fonctionnalité | Source de données principale | Source de données externe |
|---------------|------------------------------|---------------------------|
| Sauvegarde et restauration | ✅ | ❌ (Géré par l'utilisateur) |
| Gestion de la migration | ✅ | ❌ (Géré par l'utilisateur) |

:::info
NocoBase fournit des capacités de sauvegarde, de restauration et de migration de structure pour les sources de données principales. Pour les sources de données externes, ces opérations doivent être complétées indépendamment par les utilisateurs selon leurs propres environnements de source de données. NocoBase ne fournit pas de support intégré.
:::

## Comparaison résumée

| Élément de comparaison | Source de données principale | Source de données externe |
|-----------------------|------------------------------|---------------------------|
| Types de sources de données | PostgreSQL, MySQL, MariaDB, KingbaseES | PostgreSQL, MySQL, MariaDB, MSSQL, Oracle, KingbaseES |
| Support des types de collections | Tous les types de collections | Uniquement les collections générales et de vues |
| Support des types de champs | Tous les types de champs | Tous les types de champs sauf les champs de pièces jointes |
| Sauvegarde et migration | Support intégré | Géré par l'utilisateur |

## Recommandations

- **Si vous devez utiliser les fonctionnalités avancées de NocoBase** (comme les commentaires, l'héritage, les téléchargements de fichiers, etc.), veuillez utiliser la **source de données principale**.
- **Si vous devez seulement lire ou vous connecter aux données de sources de données externes existantes**, vous pouvez utiliser les **sources de données externes**.