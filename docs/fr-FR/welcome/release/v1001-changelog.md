# v1.0 : 2024-04-28

## Milestone v1.0

Après 3 ans de développement, NocoBase atteint sa première mise à jour majeure, passant de la version 0.x à la version 1.0. Cela marque une étape importante dans l'évolution du projet.

- **Phase 0.x** : L'API principale et les fonctionnalités ont subi de fréquents changements, chaque nouvelle version pouvant introduire des changements incompatibles.
- **Phase 1.x** : L'API principale a été stabilisée, et NocoBase se concentrera désormais sur l'ajout de nouveaux plugins, l'optimisation de la sécurité et l'amélioration des performances, tout en maintenant la stabilité.

## Nouvelles fonctionnalités

- L'éditeur de thèmes permet désormais de configurer les marges de page et de modal, l'espacement des blocs et le rayon des coins des blocs.
- Lors de l'ajout de blocs, les collections prennent en charge le filtrage.
- Les enregistrements de relations prennent désormais en charge le tri.
- L'interactivité des visualisations de données a été améliorée.
- Prise en charge de l'ajout de blocs de graphiques sur les appareils mobiles.
- Les blocs de filtres de graphiques prennent en charge la définition du périmètre des données des champs.
- Ajout de plus de variables, [voir les détails](https://docs.nocobase.com/handbook/ui/variables).
- Les blocs de toutes les collections peuvent être ajoutés dans des popups.
- Workflows : Les événements "Post-action" peuvent être déclenchés par des boutons à l'intérieur des blocs d'association.
- Actualisation automatique des données dans le conteneur parent lorsque les données changent dans une popup.
- Améliorations significatives des performances des blocs de tableaux.
- Augmentation substantielle de la couverture des tests.

## Nouveaux Plugins

- **Champ : Markdown (Vditor)**

  - Permet de stocker du Markdown et de le rendre à l'aide de l'éditeur Vditor, avec prise en charge de la syntaxe Markdown courante, ainsi que l'upload d'images, de fichiers audio, etc. Il permet également un rendu instantané, où ce que vous voyez est ce que vous obtenez.

- **Commentaires**

  - Fournit un modèle de collection et un bloc pour ajouter une fonctionnalité de commentaires à n'importe quelle collection.

# Changelog complet

<details>
<summary>Voir le changelog complet</summary>

- **feat(plugin-workflow)** : actualiser la liste après la synchronisation <u>#4177</u>
- **feat(plugin-workflow)** : afficher la clé du workflow en tant que tooltip sur le titre <u>#4178</u>
- **test(plugin-workflow)** : ajouter des cas de test <u>#4199</u>
- **chore** : en-tête de contrôle de cache API <u>#4203</u>
- **feat** : charger la dépendance vditor depuis le local <u>#4190</u>
- **test** : test du séparateur de nombre dans le champ numérique <u>#4204</u>
- **fix** : le champ numérique doit prendre en charge la configuration du séparateur <u>#4197</u>
- **fix(plugin-workflow)** : améliorer l'expérience utilisateur <u>#4195</u>
- **chore** : optimiser la formulation des avertissements pour l'import et l'export <u>#4196</u>
- **refactor** : gestionnaire de collections de sources de données externes <u>#4193</u>
- **fix** : bug environnement <u>#4191</u>
- **fix** : opérateur vide avec un champ d'association <u>#4189</u>
- **chore** : ajouter un test e2e <u>#4184</u>
- **fix** : version de vditor <u>#4183</u>
- **refactor** : amélioration des locales de modèles de données de formulaire <u>#4188</u>
- **test** : ajouter des tests automatisés <u>#4098</u>
- **chore** : instance de logger pour la source de données <u>#4181</u>
- **chore** : obtenir l'instance de la base de données dans le référentiel des relations <u>#4179</u>
- **chore** : ajouter un test e2e pour les variables <u>#4152</u>
- **chore** : définir un message de débogage pour les collections <u>#4176</u>
- **chore** : champs non pris en charge dans la vue de collection <u>#4155</u>
- **feat** : ajouter le plugin-field-markdown-vditor <u>#4065</u>
- **fix** : erreur de l'action de modification en masse du formulaire acl <u>#4166</u>
- **fix** : création automatique de clé étrangère uuid dans le champ de relation <u>#4160</u>
- **fix(plugin-fm)** : corriger l'indication de taille limite confuse <u>#4153</u>
- **fix(users)** : améliorer la mise à jour du profil des utilisateurs <u>#4162</u>
- **fix(client)** : obtenir l'URL de l'API <u>#4161</u>
- **feat** : supprimer le plugin-ui-routes-storage <u>#4140</u>
- **fix** : verrouiller la version de cytoscape <u>#4158</u>
- **refactor** : prise en charge de presetFieldsDisabled dans le modèle de collection <u>#4159</u>
- **fix** : schéma de grille <u>#4157</u>
- **test** : test unitaire du client <u>#4150</u>
- **fix** : mettre à jour l'association "appartient à" où la clé cible n'est pas la clé primaire <u>#4146</u>
- **refactor** : améliorer les locales des modèles de données de formulaire <u>#4148</u>
- **fix(database)** : nom de colonne dans le champ de tableau <u>#4110</u>
- **test** : test e2e pour actualisation sur action <u>#4147</u>
- **fix(custom-request)** : prise en charge de la configuration du type de contenu <u>#4144</u>
- **chore** : déprécier la variable de l'enregistrement actuel dans le formulaire <u>#4063</u>
- **feat(Theme)** : ajout de quelques tokens <u>#4137</u>
- **fix(client)** : correction de certains avertissements <u>#4143</u>
- **style** : amélioration du style de la colonne d'action du tableau <u>#4138</u>
- **fix** : amélioration du style de la barre d'action <u>#4123</u>
- **chore** : message d'avertissement en cas de conflit de suppression <u>#4141</u>
- **fix(plugin-workflow-manual)** : permettre de passer un noeud lorsque aucun assignataire n'est défini <u>#4139</u>
- **chore** : API du gestionnaire de sources de données <u>#4124</u>
- **fix(plugin-workflow-manual)** : corriger le bug de l'analyse des assignataires <u>#4125</u>
- **fix** : charger un champ d'association dans la collection <u>#4122</u>
- **perf** : supprimer toute animation Skeleton <u>#4113</u>
- **test** : ajout d'un test e2e <u>#4121</u>
- **chore(data-vi)** : ajustement de l'API <u>#4116</u>
- **fix** : déclencheur de l'événement programmé <u>#4114</u>
- **feat(plugin-workflow)** : ajouter un vérificateur pour la distribution à intervalles <u>#4119</u>
- **feat** : ajouter le filtreOtherRecordsCollection pour DataBlockInitializer <u>#4117</u>
- **refactor** : optimisation du champ de collection <u>#4111</u>
- **fix** : améliorer la migration des champs triés <u>#4112</u>
- **fix** : composant de champ <u>#4102</u>
- **fix** : ajouter un mode d'ajout au sélecteur d'association <u>#4108</u>
- **fix** : options de cibles createdBy et updatedBy <u>#4109</u>
- **fix(linkage-rule)** : la règle de liaison prend désormais en charge les conditions vides <u>#4103</u>
- **fix** : ajouter SanitizedCollectionProvider <u>#4100</u>
- **fix** : erreur dans la cible de la collection en arbre <u>#4105</u>
- **fix** : ajouter ClearCollectionFieldContext <u>#4101</u>
- **feat** : améliorer le bloc de formulaire <u>#4099</u>
- **chore** : migrer les options triables vers le champ de tri <u>#4011</u>
- **feat** : prise en charge de l'option de tri dans les ajouts <u>#4056</u>
- **feat(data-vi)** : permet aux graphiques en secteurs d'accepter des nombres négatifs, corrige T-4075 <u>#4094</u>
- **fix(data-vi)** : le nombre devient une chaîne après la transformation de précision <u>#4092</u>
- **fix** : encodage des paramètres d'URL <u>#4055</u>
- **test(plugin-workflow)** : ajouter des cas de test pour le déclenchement en double d'un workflow programmé <u>#3817</u>
- **perf(LinkageRules)** : résoudre les problèmes de décalage <u>#4090</u>
- **fix(subTable)** : ne pas afficher l'option Ajouter de nouvelles données <u>#4086</u>
- **fix** : champs manquants <u>#4083</u>
- **fix** : erreur de pagination dans la sélection du tableau <u>#4078</u>
- **fix** : réinitialiser la page lors de la définition du périmètre de données du bloc <u>#4081</u>
- **fix** : rôle de la liste de demande personnalisée <u>#4074</u>
- **fix** : analyse de la semaine ISO <u>#4068</u>
- **fix(sourceId)** : éviter les erreurs <u>#4077</u>
- **fix(sql-collection)** : impossible de sélectionner l'interface lors de la définition des champs <u>#4079</u>
- **fix** : chargement avec un champ source <u>#4075</u>
- **fix** : suppression des règles de liaison ne prenant pas effet en temps réel <u>#4058</u>
- **fix(core)** : correction du bug d'arrondi dans l'évaluateur de formules <u>#4070</u>
- **test** : ajout de tests e2e pour les modes de chargement des données <u>#4069</u>
- **fix(filterForm)** : éviter les noms dupliqués <u>#4071</u>
- **chore** : optimisation du titre des blocs <u>#4040</u>
- **fix** : synchroniser les valeurs par défaut dans la vue <u>#4067</u>
- **fix(defaultValue)** : correction du problème de disparition des valeurs par défaut après un rafraîchissement de page <u>#4066</u>
- **refactor** : bloc Gantt <u>#4059</u>
- **fix** : le sous-tableau de grands champs doit prendre en charge la valeur par défaut variable <u>#4062</u>
- **chore(Theme)** : définir la taille de police par défaut du thème Compact à 16 <u>#4064</u>
- **test** : ajout de tests e2e pour les actions <u>#4053</u>
- **fix(variable)** : variables manquantes et traductions invalides <u>#4054</u>
- **test** : ajout de tests unitaires front-end <u>#3991</u>
- **feat** : prise en charge de l'option "Autres" dans le popup <u>#4015</u>
- **fix(collection-manager)** : pas de rafraîchissement après avoir écrasé le champ <u>#4022</u>
- **chore** : ajouter des avertissements pour l'import et l'export <u>#4027</u>
- **refactor** : prise en charge du tri des champs groupés par source de données tierces <u>#4023</u>
- **fix(plugin-acl)** : correction du snippet pm.acl.roles <u>#4026</u>
- **test** : test e2e pour le bloc de nom d'association <u>#4021</u>
- **fix** : obtenir l'URL de l'API <u>#4020</u>
- **fix(Sub-details)** : le bouton d'initialisation n'est pas affiché lorsque la valeur du champ est vide <u>#4019</u>
- **fix** : l'initialiseur utilise useAassociationName <u>#4018</u>
- **fix(auth)** : bug de connexion cas lorsque le déploiement utilise un sous-répertoire <u>#4017</u>
- **fix(TreeTable)** : ajouter une erreur enfant <u>#4008</u>
- **fix** : retirer le champ actif ne doit pas effacer la valeur <u>#4012</u>
- **fix(plugin-acl)** : correction du snippet des rôles de la source de données <u>#4016</u>
- **fix** : après avoir sélectionné tout, la mise à jour en masse affiche des données non sélectionnées <u>#4010</u>
- **refactor** : le tableau d'arbre n'est pas activé par défaut <u>#4001</u>
- **feat(plugin-workflow-action-trigger)** : prise en charge des actions d'association pour le déclenchement <u>#4007</u>
- **update** : application.ts <u>#4006</u>
- **fix** : configuration du champ de tag <u>#4009</u>
- **fix(users)** : suppression de la validation du téléphone en raison de la vérification incorrecte des numéros de téléphone étrangers <u>#4005</u>
- **fix** : échec de la vérification des permissions d'action du bloc d'association <u>#3994</u>
- **refactor** : les champs de tri des tableaux ne peuvent pas sélectionner de champs de tri avec scopekey <u>#3984</u>
- **fix(Form)** : erreur de parentRecord invalide <u>#3998</u>
- **fix(plugin-workflow)** : ajuster la locale <u>#3993</u>
- **fix** : sous-tableau prend désormais en charge la configuration allowSelectExistingRecord <u>#4004</u>
- **fix(auth)** : la page d'inscription n'est pas trouvée lors de l'entrée directe par URL <u>#4002</u>
- **chore(database)** : définir une valeur nulle lorsque le champ est unique et que la valeur est une chaîne vide <u>#3997</u>
- **chore(gateway)** : signaler une erreur avec le message de cause <u>#3999</u>
- **chore(error-handler)** : afficher le message expliquant l'erreur <u>#3996</u>
- **fix** : restaurer avec le nom de la table en camel case <u>#3995</u>
- **refactor(plugin-workflow)** : ajuster les commentaires <u>#3990</u>
- **fix** : correction de la fonctionnalité de réduction et d'expansion dans Gantt <u>#3982</u>
- **fix(BulkForm)** : le champ doit être requis lors du passage à "Changed to" <u>#3965</u>
- **fix** : déplacer l'action <u>#3985</u>
- **refactor** : le champ de tri ne doit pas avoir de valeur par défaut <u>#3986</u>
- **chore** : mettre à jour les noms de classe des plugins <u>#3981</u>
- **feat(plugin-workflow-sync)** : ajouter la synchronisation lorsque multi-app-share-collection est activé <u>#3969</u>
- **fix(localization)** : mauvaise locale lors de la première entrée <u>#3968</u>
- **chore** : ajuster et ajouter des commentaires à l'API <u>#3951</u>
- **refactor** : configuration des options de sélection <u>#3964</u>
- **fix(GridCard)** : définir le nombre de colonnes affichées dans une ligne <u>#3960</u>
- **refactor** : seuls les champs de formule numériques doivent prendre en charge le format <u>#3962</u>
- **chore(plugin-workflow)** : ajouter des commentaires <u>#3959</u>
- **chore** : supprimer les anciens plugins de formule <u>#3939</u>
- **fix(LinkageRules)** : la règle de liaison doit être immédiatement effective <u>#3958</u>
- **fix(Picker)** : doit afficher l'option "Allow add new data" <u>#3957</u>
- **fix(connect-data-blocks)** : doit s'afficher immédiatement dans le menu déroulant <u>#3953</u>
- **fix** : modifier le titre du menu gauche <u>#3956</u>
- **fix** : bug du fournisseur de la liste de modèles <u>#3950</u>
- **refactor** : auto-complétion pour nanoid et uuid <u>#3955</u>
- **feat** : ajouter getParentJsonSchema dans le référentiel du schéma UI <u>#3690</u>
- **fix** : sauvegarder uuid et nano id avec validation sequelize <u>#3952</u>
- **fix** : la recherche floue est maintenant prise en charge par throughCollection <u>#3949</u>
- **fix** : obtenir la clé source par association <u>#3947</u>
- **fix(RichText)** : unification du style <u>#3946</u>
- **fix(connectDataBlocks)** : doit ajouter FilterBlockProvider à la grille <u>#3944</u>
- **chore** : ajouter appVersion au schéma <u>#3936</u>
- **fix** : collectionFieldInterfaceSelect <u>#3945</u>
- **fix** : correction du sourceId des modèles <u>#3941</u>
- **fix(collection manager)** : gestionnaire de collections prend désormais en charge la configuration de la clé primaire, nanoid et uuid <u>#3943</u>
- **fix(plugin-formula-field)** : correction du contexte du composant <u>#3937</u>
- **fix** : disponibilité des types nanoid <u>#3942</u>
- **fix** : génération automatique des valeurs par défaut <u>#3940</u>
- **fix** : erreur de calcul dans le champ de formule <u>#3938</u>
- **fix** : prise en charge du format dans le champ de formule <u>#3928</u>
- **refactor** : unification de l'initialisation des onglets <u>#3932</u>
- **fix** : ajout de zIndex au style de la superposition Lightbox <u>#3934</u>
- **fix(Table)** : correction du problème où le contenu du champ d'association n'est pas affiché <u>#3930</u>
- **fix(evaluators)** : correction de l'aplatissement des tableaux <u>#3931</u>
- **refactor** : vue principale de la source de données, prise en charge du filtreTargetKey dans la collection <u>#3818</u>
- **fix** : correction de l'erreur de calcul dans le champ de formule <u>#3929</u>
- **fix** : charger la collection de vues "appartient à" avec les options source <u>#3912</u>
- **fix** : lorsque le formulaire n'a pas été modifié, ne pas afficher l'avertissement de non-sauvegarde lors de la fermeture de la fenêtre modale <u>#3920</u>
- **fix(Collapse)** : correction du problème pour chinaRegions <u>#3925</u>
- **fix** : format d'affichage du nombre <u>#3924</u>

# Changelog complet

<details>
<summary>Voir le changelog complet</summary>

- **fix(defaultValue)** : les valeurs par défaut doivent avoir un effet immédiat lors de leur définition <u>#3923</u>
- **feat** : la configuration de `refreshDataBlockRequest` est désormais prise en charge pour les actions <u>#3882</u>
- **refactor** : refactorisation des `formBlockProvider` et `detailBlockProvider` <u>#3898</u>
- **feat(data-vi)** : possibilité d'ajouter des graphiques pour le client mobile <u>#3922</u>
- **chore** : ajouter des commentaires dans l'API <u>#3919</u>
- **fix** : correction de la pagination <u>#3921</u>
- **test(plugin-error-handler)** : test du middleware <u>#3909</u>
- **fix** : mise à jour du plugin <u>#3895</u>
- **fix** : correction de la pagination du bloc Gantt <u>#3918</u>
- **fix** : correction de la source id nulle <u>#3917</u>
- **fix(Table)** : correction de la pagination <u>#3916</u>
- **fix** : obtenir le bon `sourceId` <u>#3897</u>
- **fix(DataScope)** : résolution du problème d'absence d'effet immédiat après la sauvegarde <u>#3910</u>
- **fix** : correction des options initiales du champ de sélection <u>#3911</u>
- **fix** : correction du clic sur les liens externes <u>#3908</u>
- **fix(inputNumber)** : perte de précision dans `inputNumber` <u>#3902</u>
- **feat(plugin-workflow-action-trigger)** : ajout des événements d'action globaux <u>#3883</u>
- **docs** : ajout des commentaires API <u>#3868</u>
- **fix** : correction du bug de configuration de `vitest` <u>#3907</u>
- **fix** : correction du bug avec le tableau fixe <u>#3901</u>
- **fix** : correction de l'erreur de données non définies dans la liste <u>#3905</u>
- **fix** : correction du bug de rendu paresseux <u>#3886</u>
- **fix** : paramètres de tri manquants <u>#3906</u>
- **refactor** : changement de `useProps` à `x-use-component-props` <u>#3853</u>
- **fix(withDynamicSchemaProps)** : changement de la fusion profonde en fusion superficielle <u>#3899</u>
- **fix** : ajout d'un bouton d'impression pour le bloc historique, correction de l'erreur lors du clic sur le bouton d'impression <u>#3900</u>
- **fix** : correction du bug `tar` <u>#3891</u>
- **chore** : retourner `bigInt` sous forme de chaîne <u>#3887</u>
- **feat(data-vi)** : ajout de la portée des données pour filtrer les champs des graphiques <u>#3894</u>
- **feat** : ajustement du menu d'ajout de nouveaux éléments <u>#3884</u>
- **fix(plugin-custom-request)** : correction du dialogue du bouton d'édition <u>#3893</u>
- **fix** : correction de l'absence de `fieldNames` lors de la définition de la portée des données <u>#3892</u>
- **fix** : erreur de vérification des dépendances lorsque l'on ajoute un plugin de production en mode développement <u>#3848</u>
- **fix** : les onglets du workflow n'existent pas <u>#3889</u>
- **fix** : prise en charge de la portée des données par le champ d'association <u>#3888</u>
- **fix** : `templateBlockProvider` prend désormais en charge l'ajout de champs d'association <u>#3866</u>
- **chore** : mise à jour de l'API de la source de données principale <u>#3880</u>
- **feat** : exécution de `vitest` avec couverture <u>#3802</u>
- **fix** : éviter les clés de menu en double <u>#3885</u>
- **fix(data-vi)** : le graphique à axes doubles s'affiche de manière anormale <u>#3881</u>
- **fix** : rejeter la mise à jour lorsque le filtre est un objet vide <u>#3777</u>
- **chore** : mise à jour du champ avec l'attribut clé primaire <u>#3852</u>
- **refactor** : prise en charge de la configuration de la valeur par défaut pour `uuid` et `nanoid` <u>#3830</u>
- **feat** : amélioration des performances du tableau <u>#3791</u>
- **fix** : correction de `setFormValueChanged` non défini <u>#3879</u>
- **fix(client)** : correction du problème avec `disabled` dans les composants dynamiques de filtre <u>#3874</u>
- **fix(plugin-workflow-parallel)** : correction de la locale <u>#3876</u>
- **fix(formula-field)** : mise à jour de la valeur du formulaire pour les champs de formule <u>#3873</u>
- **fix** : correction de l'affichage du bloc `formBlockProvider` <u>#3877</u>
- **refactor(plugin-workflow)** : modification de la structure du code <u>#3871</u>
- **fix** : correction de l'affichage anormal du modal de la carte Kanban <u>#3863</u>
- **fix** : `filterTargetKey` ne prend en charge que les collections de vue <u>#3872</u>

</details>

## Modifications des Plugins

### Plugins Supprimés

Les plugins suivants ne sont plus disponibles en version open-source. Les utilisateurs qui utilisent ces plugins en production sont invités à contacter NocoBase pour obtenir une mise à jour :

- **@nocobase/plugin-auth-cas** : Authentifie l'identité via le protocole CAS.
- **@nocobase/plugin-auth-odic** : Authentifie l'identité via le protocole OIDC (OpenID Connect).
- **@nocobase/plugin-auth-saml** : Authentifie l'identité via le protocole SAML 2.0.

### Plugins Dépréciés

Les plugins suivants ont été dépréciés et seront supprimés dans les versions futures. Ils ne seront plus installés dans les nouvelles versions, bien qu'ils soient encore disponibles temporairement :

- **@nocobase/plugin-audit-logs** : Déprécié, ne sera pas installé dans la nouvelle version.
- **@nocobase/plugin-snapshot-field** : Déprécié, ne sera pas installé dans la nouvelle version.
- **@nocobase/plugin-charts** : Utilisez **@nocobase/plugin-data-visualization** à la place.
- **@nocobase/plugin-excel-formula-field** : Utilisez **@nocobase/plugin-field-formula** à la place.
- **@nocobase/plugin-math-formula-field** : Utilisez **@nocobase/plugin-field-formula** à la place.
- **@nocobase/plugin-ui-routes-storage** : Déprécié, les routes frontend peuvent être étendues directement dans le frontend.

Pour la liste complète des plugins, veuillez consulter [Plugins NocoBase](https://www.nocobase.com/plugins.html).

## Commentaires de Code

Pour améliorer l'expérience de développement, nous avons ajouté les commentaires suivants à certaines API spéciales :

- **@internal** : Indique les détails d'implémentation internes ou les méthodes qui ne sont pas destinées à un usage public.
- **@experimental** : Marque les API ou fonctionnalités encore en développement ou en phase de test. Ces API peuvent subir des modifications importantes ou être supprimées dans les futures versions.
- **@deprecated** : Identifie les fonctionnalités, méthodes ou API dépréciées qui peuvent être supprimées à l'avenir. Des alternatives meilleures peuvent être disponibles.

## Accord de Licence

NocoBase est sous licence double AGPL-3.0 et commerciale. Pour plus de détails, veuillez consulter l'[Accord de Licence NocoBase](https://cn.nocobase.com/agreement-cn.html).

## Guide de Mise à Jour

### Notes Importantes :
- **Sauvegardez toujours votre base de données avant de mettre à jour !** Pensez également à sauvegarder tout le code de votre projet.

Puisque les plugins **Auth : CAS**, **Auth : OIDC** et **Auth : SAML** ont été supprimés du code open-source, le processus de mise à jour variera en fonction de votre utilisation des plugins.

### Si Vous N'utilisez Pas de Plugins SSO :
Veuillez suivre la [méthode de mise à jour conventionnelle](https://docs.nocobase.com/welcome/getting-started/upgrading) pour effectuer la mise à jour.

### Si Vous Utilisez des Plugins SSO :

Suivez les étapes ci-dessous pour effectuer la mise à jour :

#### 1. Mettre à Jour l'Application

- Référez-vous à l'[Aperçu de la Mise à Jour de NocoBase](/welcome/getting-started/upgrading) et mettez à jour NocoBase vers la dernière version.

Si vous avez activé les plugins CAS, OIDC ou SAML précédemment, vous verrez les invites suivantes lors de la mise à jour :

- **Invite en ligne de commande** :

    ![20240428212151](https://static-docs.nocobase.com/20240428212151.png)

- **Invite de l'interface Docker** :

    ![20240428194926](https://static-docs.nocobase.com/20240428194926.png)

#### 2. Supprimer les Plugins ou Obtenir la Version 1.0 des Plugins

**Si vous choisissez de supprimer les plugins et de continuer la mise à jour :**

Supprimez les plugins selon les invites.

```bash
# Application principale
yarn pm remove cas oidc saml --force
# Si c'est une sous-application, ajoutez le paramètre --app
yarn pm remove cas oidc saml --force --app=sub-app1
```

Continuez la mise à jour :

```bash
yarn nocobase upgrade
```

**Si vous choisissez de mettre à jour les plugins vers la version 1.0 :**

Contactez l'équipe NocoBase pour obtenir la version 1.0 des plugins et poursuivez la mise à jour.

#### 3. Processus de Mise à Jour des Plugins CAS, OIDC, SAML

À ce stade, l'interface de l'application ne sera plus accessible. Vous devrez donc effectuer la mise à jour manuellement.

1. Connectez-vous à la **Plateforme de Services Utilisateurs Entreprise** pour télécharger les dernières versions des plugins.
2. Décompressez les plugins dans les répertoires spécifiés :
    - Plugin CAS dans `./storage/plugins/@nocobase/plugin-auth-cas`
    - Plugin OIDC dans `./storage/plugins/@nocobase/plugin-auth-oidc`
    - Plugin SAML dans `./storage/plugins/@nocobase/plugin-auth-saml`
3. Mettez à jour l'application :
    - Pour Docker, redémarrez simplement le conteneur.
    - Pour la version du code source ou `create-nocobase-app` :
        1. Téléchargez les dépendances : `yarn install`
        2. Exécutez la commande de mise à jour : `yarn nocobase upgrade`
        3. Redémarrez l'application.
