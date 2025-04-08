# Bloc Carte

<PluginInfo name="block-map"></PluginInfo>

## Aperçu

Le Bloc Carte est un outil essentiel pour afficher et gérer des données liées aux cartes, offrant la prise en charge de quatre types de champs cartographiques : points, lignes, cercles et polygones.

## Installation

Ce plugin est préinstallé mais doit être activé avant utilisation.

![20240421120958](https://static-docs.nocobase.com/20240421120958.png)

Après activation, les informations d'authentification de la carte doivent être configurées.

![20240421121032](https://static-docs.nocobase.com/20240421121032.png)

Une fois configuré, les champs cartographiques peuvent être intégrés dans vos tables de données.

![20240426171356](https://static-docs.nocobase.com/20240426171356.png)

## Ajouter des Blocs Carte

Les blocs carte ne peuvent être ajoutés que si la table de données associée comprend des champs cartographiques.

![20240408194209](https://static-docs.nocobase.com/20240408194209.png)

![20240408194420](https://static-docs.nocobase.com/20240408194420.png)

1. **Champ Carte :** Définit le type d'élément cartographique (point, ligne, polygone).
2. **Champ Marqueur :** Spécifie les marqueurs de carte (applicable uniquement pour les types de points).

## Points

**Cas d'utilisation :** Idéal pour visualiser la répartition des emplacements des magasins de détail.

![20240408195630](https://static-docs.nocobase.com/20240408195630.png)

## Lignes

Les lignes sont construites à partir d'une séquence de points cartographiques, souvent utilisées pour illustrer des chemins, tels que des itinéraires de livraison.

![20240408201608](https://static-docs.nocobase.com/20240408201608.png)

## Cercles

![20240408201939](https://static-docs.nocobase.com/20240408201939.png)

## Polygones

**Cas d'utilisation :** Parfait pour la planification des zones et des applications de zonage.

![Polygon](https://static-docs.nocobase.com/20240408200546.png)

## Paramètres du Bloc

![20240421121949](https://static-docs.nocobase.com/20240421121949.png)

## Connexions de Champs Séquentiels

Connectez les points selon l'ordre défini par les champs séquentiels.

![20240408202645](https://static-docs.nocobase.com/20240408202645.png)

![20240421121917](https://static-docs.nocobase.com/20240421121917.png)

![20240422101027](https://static-docs.nocobase.com/20240422101027.png)

## Niveau de Zoom par Défaut

Le niveau de zoom par défaut est 13, mais il peut être ajusté selon les besoins.

![20240408202854](https://static-docs.nocobase.com/20240408202854.png)

## Définir la Plage de Données

**Exemple :** Filtrage des bons de livraison marqués comme "expédiés" (en utilisant des champs relationnels). Seuls les bons de livraison dans la plage de données spécifiée seront affichés.

![20240422101250](https://static-docs.nocobase.com/20240422101250.png)

Pour plus de détails, consultez [Définir la Plage de Données](/handbook/ui/blocks/block-settings/data-scope).

## Ajuster la Hauteur du Bloc

**Exemple :** Modifiez la hauteur du bloc carte pour l'adapter à votre mise en page.

![20240605221111](https://static-docs.nocobase.com/20240605221111.gif)

Pour plus d'informations, consultez [Hauteur du Bloc](/handbook/ui/blocks/block-settings/block-height).

- [Modifier le Titre du Bloc](/handbook/ui/blocks/block-settings/block-title)
- [Connecter un Bloc de Données](/handbook/ui/blocks/block-settings/connect-block)
- [Enregistrer comme Modèle de Bloc](/handbook/block-template)

## Opérations de Configuration

![20240421122020](https://static-docs.nocobase.com/20240421122020.png)

## Sélection par Lot de Points

![20240422102334](https://static-docs.nocobase.com/20240422102334.gif)

- [Filtrer](/handbook/ui/actions/types/filter)
- [Ajouter](/handbook/ui/actions/types/add-new)
- [Rafraîchir](/handbook/ui/actions/types/refresh)
- [Mise à jour par lot](/handbook/action-bulk-update)
- [Édition par lot](/handbook/action-bulk-edit)
