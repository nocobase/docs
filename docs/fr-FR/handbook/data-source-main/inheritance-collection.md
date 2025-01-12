# Collection d'héritage

<PluginInfo name="data-source-main"></PluginInfo>

## Introduction

Vous pouvez créer une collection parente et dériver une collection enfant à partir de cette collection parente. La collection enfant héritera de la structure de la collection parente, mais pourra également définir ses propres colonnes. Ce modèle de conception aide à organiser et gérer les données ayant des structures similaires mais avec des différences possibles.

Voici quelques fonctionnalités courantes des collections héritables :

- **Collection Parente** : La collection parente contient les colonnes et les données communes, définissant la structure de base de l'ensemble de la hiérarchie d'héritage.
- **Collection Enfant** : La collection enfant hérite de la structure de la collection parente, mais peut aussi définir ses propres colonnes. Cela permet à chaque collection enfant d'avoir les propriétés communes de la collection parente tout en contenant des attributs spécifiques à la sous-classe.
- **Interrogation** : Lors de l'interrogation, vous pouvez choisir d'interroger toute la hiérarchie d'héritage, uniquement la collection parente, ou une collection enfant spécifique. Cela permet de récupérer et de traiter différents niveaux de données selon les besoins.
- **Relation d'Héritage** : Une relation d'héritage est établie entre la collection parente et la collection enfant, ce qui signifie que la structure de la collection parente peut être utilisée pour définir des attributs cohérents, tout en permettant à la collection enfant d'étendre ou de remplacer ces attributs.

Ce modèle de conception aide à réduire la redondance des données, à simplifier le modèle de base de données et à faciliter la maintenance des données. Cependant, il doit être utilisé avec précaution, car les collections héritables peuvent augmenter la complexité des requêtes, en particulier lorsqu'il s'agit de traiter l'ensemble de la hiérarchie d'héritage. Les bases de données qui prennent en charge les collections héritables offrent généralement une syntaxe et des outils spécifiques pour gérer et interroger ces structures de collections.

## Manuel utilisateur

![20240324085907](https://static-docs.nocobase.com/20240324085907.png)
