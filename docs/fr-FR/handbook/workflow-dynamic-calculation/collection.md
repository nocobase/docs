# Collection d'Expressions

## Création d'un Modèle de "Collection d'Expressions"

Avant d'utiliser les nœuds d'opération d'expressions dynamiques dans un workflow, il est essentiel de créer d'abord une table modèle d'“Expression” en utilisant l'outil de gestion de tables de données. Cette table sert de référentiel pour diverses expressions :

![Création de la Table Modèle d'Expression](https://static-docs.nocobase.com/33afe3369a1ea7943f12a04d9d4443ce.png)

## Saisie des Données d'Expression

Ensuite, vous pouvez configurer un bloc de table et saisir plusieurs entrées de formules dans la table modèle. Chaque ligne de la table modèle d'“Expression” peut être vue comme une règle de calcul conçue pour un modèle de données spécifique dans la table. Vous pouvez utiliser différents champs des modèles de données de diverses tables comme variables, créant ainsi des expressions uniques en tant que règles de calcul. De plus, vous pouvez exploiter différents moteurs de calcul selon vos besoins.

![Saisie des Données d'Expression](https://static-docs.nocobase.com/761047f8daabacccbc6a924a73564093.png)

:::info{title=Astuce}
Une fois les formules établies, elles doivent être liées aux données commerciales. Associer directement chaque ligne de données commerciales avec les données de formule peut être fastidieux. Une approche courante consiste à utiliser une table de métadonnées, similaire à une table de classification, pour créer une relation plusieurs-à-un (ou un-à-un) avec la table des formules. Ensuite, les données commerciales sont associées aux métadonnées classées dans une relation plusieurs-à-un. Cette approche vous permet de spécifier facilement les métadonnées classées pertinentes lors de la création des données commerciales, ce qui facilite la recherche et l'utilisation des données de formule correspondantes via le chemin d'association établi.
:::

## Chargement des Données Pertinentes dans le Processus

Par exemple, considérons la création d'un workflow déclenché par un événement de table de données. Lorsqu'une commande est créée, le déclencheur doit précharger les données associées au produit ainsi que les données d'expression liées au produit :

![Événement Table de Données_Configuration du Déclencheur](https://static-docs.nocobase.com/f181f75b10007afd5de068f3458d2e04.png)
