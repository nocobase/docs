# Masque

<PluginInfo commercial="true" name="field-component-mask"></PluginInfo>

## Aperçu

Le composant de champ "Masque" permet d'afficher les valeurs des champs sous un format masqué, ce qui est particulièrement utile pour la gestion d'informations sensibles telles que les mots de passe ou les numéros de carte de crédit.

## Installation

Ce plugin est un plugin commercial.

## Options de configuration du champ

![Options de configuration du champ](https://static-docs.nocobase.com/Solution/202410222334271729611267.png)

- [Composant de champ](/handbook/ui/fields/field-settings/field-component) : Permet de basculer entre le composant de champ par défaut et le composant de champ masqué.
- Paramètres du masque : Configurez les règles de masquage et définissez les autorisations pour le champ.

## Paramètres du masque

![Paramètres du masque](https://static-docs.nocobase.com/Solution/202410222340521729611652.png)

### Règles de masquage

#### Règles de masque prédéfinies

- `******` : Masque entièrement les données avec six astérisques.
- `***abc` : Masque les données avec trois astérisques suivis des trois derniers caractères des données originales.
- `**ab**` : Masque les données avec deux astérisques au début et à la fin, révélant les deux caractères du milieu des données originales.
- `abc***` : Masque les données en montrant les trois premiers caractères suivis de trois astérisques.

#### Règles de masque personnalisées

Si les règles de masque prédéfinies ne répondent pas à vos besoins, vous pouvez sélectionner `Personnalisé` pour définir vos propres règles de masque.
La syntaxe des règles de masque personnalisées est la suivante :

- `*` représente un espace réservé, et le masque affichera un nombre spécifié de `*`.
- Tous les autres caractères seront affichés tels qu'ils apparaissent dans les données originales.

Exemples :

- `a*a*a*` : Masque les données originales `123456` en `1*3*5*`.
- `a****a` : Masque les données originales `123456789` en `1****9`.
- `ab***abc` : Masque les données originales `asdfghjkl` en `as***jkl`.

### Rôles autorisés à voir les valeurs originales

Vous pouvez spécifier les rôles des utilisateurs autorisés à voir les valeurs originales, non masquées, du champ. Par défaut, seul l'utilisateur racine dispose de cette autorisation.

:::info{title="INFO"}
Lorsque le champ est en mode édition, la valeur originale est toujours visible, indépendamment des paramètres de rôle.
:::
