# Blocs de Filtre

Le bloc de filtre au sein d'un bloc de graphique permet de filtrer dynamiquement plusieurs graphiques dans le même bloc.

## Activation/Désactivation

Pour activer ou désactiver un bloc de filtre, naviguez dans le bloc de graphique et sélectionnez "Ajouter un Bloc" - "Filtre."

![](https://static-docs.nocobase.com/d0e6b116952fa6b719acb0f858b432c3.png)

## Configuration des Champs

### Champs de Collection

Pour les graphiques au sein du bloc de graphique actuel, vous pouvez créer un champ de filtre en sélectionnant directement les champs pertinents depuis la collection associée.

![](https://static-docs.nocobase.com/e2ef150e9beb8c78004d9049a7536219.png)

Les champs du formulaire peuvent être configurés comme suit :

![](https://static-docs.nocobase.com/215f0b996e69bf2d5b99746e6d521c3d.png)

- Modifier le titre du champ.
- Modifier la description.
- Définir l’opérateur à utiliser lors de l’application du filtre.
  ![](https://static-docs.nocobase.com/d6a593a330d27da4ea78124dfdb8450d.png)

- Assigner une valeur par défaut au champ, en utilisant des variables si nécessaire. Le type de données de la variable doit être compatible avec le type de données du champ actuel.
  ![](https://static-docs.nocobase.com/37dee4008f3283db24d491fb8f0404fa.png)

  Par exemple :
  
  - Définir la valeur par défaut sur l'ID de l'utilisateur actuel pour filtrer automatiquement les données pour l'utilisateur actuel lors du chargement de la page.
  - Définir la valeur par défaut sur la date actuelle pour filtrer automatiquement les données pour la date actuelle lors du chargement de la page.

### Champs Personnalisés

Dans certains scénarios, vous pouvez avoir besoin d'utiliser un champ de filtre unique pour filtrer différents champs à travers plusieurs tables. Par exemple, un champ de date unique pourrait être utilisé pour filtrer différents champs de date dans différentes tables. Dans ces cas, vous pouvez choisir de créer un champ personnalisé.

![](https://static-docs.nocobase.com/87544594246453d175ef265030c0801a.png)

Lors de l'ajout d'un champ personnalisé, vous devrez spécifier le titre du champ, choisir le composant de champ approprié, et le configurer en conséquence. De plus, vous pouvez sélectionner un champ provenant des tables de données utilisées dans le bloc actuel pour appliquer la configuration des métadonnées de ce champ directement, évitant ainsi la redondance.

![](https://static-docs.nocobase.com/ef09136d674d4b7356e819350bcac804.png)

Pour mettre en œuvre un champ de filtre personnalisé, ouvrez la configuration du graphique pertinent, puis dans les paramètres de filtrage de la requête de données, ajoutez les conditions de filtrage en utilisant des variables provenant du "Filtre actuel". Assurez-vous que le type de champ à filtrer correspond au type du champ de filtre personnalisé.

![](https://static-docs.nocobase.com/f9f2487c4da4b2024af1556743beab6c.png)

Pour les champs personnalisés, vous pouvez également définir le titre, la description et la valeur par défaut.

![](https://static-docs.nocobase.com/4a8feb12404f5cc5e74d589263307e5a.png)

## Configuration des Actions de Bloc

- **Filtrer** : Applique les conditions de filtre.
- **Réinitialiser** : Réinitialise le formulaire de filtre.
- **Réduire / Développer** : Réduit le filtre en une seule ligne ou l'agrandit en plusieurs lignes.

![](https://static-docs.nocobase.com/8619ac90fa045b3a9c6d6610f7be1a81.png)

---

Les blocs de filtre permettent une gestion avancée de vos graphiques, vous offrant la possibilité de filtrer dynamiquement plusieurs graphiques en fonction des champs spécifiés. Vous pouvez utiliser des champs de collection ou des champs personnalisés, en fonction de vos besoins, tout en ayant un contrôle total sur les actions du bloc de filtre.
