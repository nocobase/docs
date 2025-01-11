Voici un résumé des changements apportés dans la version **v0.4** de **NocoBase** du 7 avril 2021 :

Cette version v0.4 introduit de nombreuses fonctionnalités améliorées pour la gestion des plugins, des permissions, des journaux d'actions et des nouveaux opérateurs pour les requêtes. De plus, elle corrige plusieurs erreurs liées à la gestion des associations, au tri et à la pagination.

## Merged
### Refactorisations et améliorations :
- **Refactorisation** de la gestion des valeurs booléennes dans les paramètres (#74).
- **Refactorisation** des middlewares de l'application (#17362a8).
- **Changements dans la publication des packages** pour la version alpha 0.4.0 (#c2f1876).

### Nouvelles fonctionnalités :
- **Plugin de région Chine** (#66).
- **Filtre pour le champ `linkTo`** (#64).
- **Automatisations des plugins** (#65).
- **Journaux d'action** (#61, #62).
- **Verrouillage de destruction** (#60).
- **Permissions sur les routes** (#58).
- **Plugin de permissions** (#53, #57).
- **Ajout d'opérateurs personnalisés pour les requêtes** (#48).
- **Téléchargement de fichiers unique vers les pièces jointes** (#46).
- **Gestion des champs `createdBy` et `updatedBy` dans les tables gérées par les collections** (#43).

### Corrections de bugs :
- **Problèmes mineurs corrigés** (#72).
- **Problème d'impossibilité de détruire la vue/tab par défaut** (#63).
- **Problèmes liés à l'association des champs** (#59, #51, #34).
- **Bug avec les associations imbriquées dans `toInclude`** (#47).
- **Bug de mise à jour d'autres champs évité** (#51).

### Améliorations de la base de données :
- **Support des champs virtuels** (#27).
- **Options de tri** (#36, #38, #37).
- **Amélioration des options de pagination** (#20).

### Tests :
- **Amélioration des tests CI** (#31, #17).
- **Référencement des tests pour la base de données et les actions** (#16, #15).

## Fixed
### Problèmes résolus :
- **Problème de connexion** : Amélioration des styles du formulaire de connexion (#9).
- **Messages d'erreur** dans les formulaires de connexion et d'inscription (#9).

### Commit :
- Ajustement des paramètres pour une meilleure gestion (#b95e2da).
- Formatage du code (#ce4a22f).

## Liens vers les Pull Requests :
- [#74](https://github.com/nocobase/nocobase/pull/74)
- [#66](https://github.com/nocobase/nocobase/pull/66)
- [#61](https://github.com/nocobase/nocobase/pull/61)
- [#53](https://github.com/nocobase/nocobase/pull/53)
