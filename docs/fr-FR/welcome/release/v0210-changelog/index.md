## v0.21 : 2024-03-29

### Annonce

![v1.0](https://static-docs.nocobase.com/img_v3_029o_3dd91ba0-bb96-4315-a273-208f06d432fg.png)

## Nouvelles fonctionnalités

### Prise en charge de plusieurs sources de données pour les graphiques

![20240407222304](https://static-docs.nocobase.com/20240407222304.png)

Avec cette version, vous pouvez maintenant intégrer plusieurs sources de données dans vos graphiques pour une visualisation de données plus riche. Cela vous permet d'afficher et d'analyser les données de différentes sources dans un seul graphique.

Pour plus de détails, consultez la [documentation sur la visualisation des données](/handbook/data-visualization).

### Prise en charge de plusieurs sources de données pour les flux de travail

![20240407222523](https://static-docs.nocobase.com/20240407222523.png)

Les flux de travail peuvent maintenant intégrer plusieurs sources de données de manière transparente, ce qui vous permet de déclencher des événements ou des actions en fonction des données de différentes sources. Cela améliore la flexibilité et la scalabilité de l'automatisation des flux de travail.

Pour plus d'informations, consultez la [documentation sur les flux de travail](/handbook/workflow).

### Optimisation des événements de déclenchement des flux de travail

Nous avons apporté plusieurs améliorations aux événements de déclenchement des flux de travail. Les noms de certains déclencheurs ont été modifiés pour plus de clarté et de cohérence :

| Nom original              | Nouveau nom            |
| ------------------------- | ---------------------- |
| Événements de formulaire, événements d'opération | Événements post-opération |
| Tâches planifiées          | Événements planifiés   |
| Intercepteurs de requêtes | Événements pré-opération |
| Approbation                | Événements d'approbation |

#### Événements post-opération

Les événements post-opération sont désormais plus personnalisables et peuvent être déclenchés après des actions spécifiques dans les flux de travail. Ces événements vous permettent d'affiner le comportement de vos flux de travail.

![20240407222652](https://static-docs.nocobase.com/20240407222652.png)

Pour plus de détails, consultez la [documentation sur les événements post-opération](/handbook/workflow-action-trigger).

#### Événements pré-opération

Les événements pré-opération vous permettent d'intercepter et de modifier les données ou les opérations avant qu'elles ne soient exécutées. Cette fonctionnalité est utile pour mettre en place des validations, des conditions ou une logique de prétraitement.

![20240407222834](https://static-docs.nocobase.com/20240407222834.png)

Pour plus d'informations, consultez la [documentation sur les événements pré-opération](/handbook/workflow-request-interceptor).

### Plugin de marque personnalisée

![20240407222949](https://static-docs.nocobase.com/20240407222949.png)

Nous avons ajouté un support pour un plugin de **marque personnalisée**. Cela vous permet d’adapter l’apparence visuelle et la marque de votre instance NocoBase pour correspondre à l’identité de votre organisation.

Pour plus de détails, consultez la [documentation sur la marque personnalisée](/handbook/custom-brand).

### Prise en charge du champ Nanoid

![20240407223221](https://static-docs.nocobase.com/20240407223221.png)

Le type de champ **Nanoid** a été introduit, vous permettant de générer des identifiants plus courts et plus sécurisés pour vos collections. Cela peut être utilisé comme alternative aux identifiants auto-incrémentés traditionnels.

Pour plus d'informations, consultez la [documentation sur le champ Nanoid](/handbook/data-modeling/collection-fields/advanced/nanoid).

### Prise en charge du champ UUID

![20240407223431](https://static-docs.nocobase.com/20240407223431.png)

Les champs **UUID** (Identifiant unique universel) sont désormais pris en charge, vous permettant de générer des identifiants uniques à l'échelle mondiale pour vos enregistrements. Cela est utile pour les systèmes qui doivent garantir des identifiants uniques dans des systèmes distribués.

Pour plus de détails, consultez la [documentation sur le champ UUID](/handbook/data-modeling/collection-fields/advanced/uuid).

### Support pour le champ de timestamp Unix

![20240407223512](https://static-docs.nocobase.com/20240407223512.png)

Le champ **timestamp Unix** a été ajouté pour faciliter l'utilisation des dates et heures sous forme de nombres entiers représentant le nombre de secondes écoulées depuis le 1er janvier 1970.

Pour plus d'informations, consultez la [documentation sur le champ de timestamp Unix](/handbook/data-modeling/collection-fields/datetime/unix-timestamp).

### Le champ de type nombre prend en charge la configuration de formatage

![20240407223736_rec_](https://static-docs.nocobase.com/20240407223736_rec_.gif)

Les champs de type **nombre** peuvent désormais être formatés en utilisant des configurations spécifiques, par exemple pour ajouter des séparateurs de milliers, des décimales ou des préfixes. Cela permet d'afficher des valeurs numériques de manière plus lisible.

Pour plus d'informations, consultez la [documentation sur la configuration du champ / Paramètres des propriétés spécifiques / Composant Nombre](/handbook/ui/fields/field-settings/input-number).

### Prise en charge du déploiement sous sous-chemin

La variable d'environnement `APP_PUBLIC_PATH` a été ajoutée pour prendre en charge le déploiement sous un sous-chemin. Par exemple :

```bash
APP_PUBLIC_PATH=/nocobase/
```

Cela vous permet d'accéder à l'application localement via l'URL suivante :  
[http://localhost:13000/nocobase/](http://localhost:13000/nocobase/)

Exemple de proxy Nginx :

```bash
server {
    listen 80;
    server_name your_domain.com;  # Remplacez your_domain.com par votre domaine

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

Vous pouvez désormais y accéder via [http://your_domain.com/nocobase/](http://your_domain.com/nocobase/).

### Optimisation des performances des blocs

#### Prise en charge de l'effet écran de squelette

Les **cartes de blocs** peuvent désormais afficher un effet d'écran de squelette pour améliorer l'expérience utilisateur en indiquant le chargement de données.

Cartes de Kanban

![20240407224811](https://static-docs.nocobase.com/20240407224811.png)

Cellules de tableau

![20240407230028](https://static-docs.nocobase.com/20240407230028.png)

#### Traitement distribué de la configuration des blocs

Auparavant, toute modification de Schéma sur la page entière entraînait le re-rendu de toute la page. Désormais, chaque Schéma de bloc est indépendant, ce qui améliore les performances.

```tsx | pure
<SchemaComponent distributed schema={} />
```

Le composant **Grid** prend également en charge le traitement distribué.

```tsx | pure
{
  'x-component': 'Grid',
  'x-component-props': {
    distributed: true,
  },
}
```

## Changements incompatibles

### Divers `useProps` du Schéma UI remplacés par `x-use-decorator-props` et `x-use-component-props`

Pour **useProps**, au lieu d'utiliser `x-component-props` avec la clé `useProps`, vous utilisez maintenant `x-use-component-props`. Voici le diff :

```diff
{
  "x-component": "Input",
+  "x-use-component-props": "useInputProps",
-  "x-component-props": {
-    useProps: "{{ useInputProps }}"
-  }
}
```

Pour **useParams** et **useSourceId**, au lieu d'utiliser `x-decorator-props` avec les clés pour `useParams` et `useSourceId`, vous utilisez maintenant `x-use-decorator-props` avec une seule clé. Voici le diff :

```diff
{
  "x-decorator": "TableBlockProvider",
+  "x-use-decorator-props": "useDecoratorProps",
-  "x-decorator-props": {
-    useParams: "{{ useParams }}",
-    useSourceId: "{{ useSourceId }}"
-  }
}
```

Pour plus d'informations sur `x-use-decorator-props` et la distinction entre les propriétés statiques et dynamiques, consultez : [Propriétés statiques et dynamiques](https://client.docs.nocobase.com/core/data-block/data-block-provider#%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7%E5%92%8C%E5%8A%A8%E6%80%81%E5%B1%9E%E6%80%A7).
