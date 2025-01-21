# Bloc Markdown

## Introduction

Les blocs Markdown peuvent être utilisés sans être liés à une source de données. Ils sont définis à l'aide de la syntaxe Markdown et conviennent à l'affichage de contenu texte formaté.

## Ajouter des Blocs

Les blocs Markdown peuvent être ajoutés dans des pages ou des pop-ups.

![20240612205004](https://static-docs.nocobase.com/20240612205004.png)

Des blocs Markdown en ligne peuvent également être ajoutés dans des blocs de formulaire et des blocs de détails.

![20240612205215](https://static-docs.nocobase.com/20240612205215.png)

## Moteur de Template

### Template de chaîne

Utilisez `{{xxx}}` pour l'interpolation.

![20240817175031](https://static-docs.nocobase.com/20240817175031.png)

### Handlebars

Supporte l'utilisation de syntaxes riches comme les conditions et les boucles pour générer dynamiquement du contenu HTML.

![20240817175355](https://static-docs.nocobase.com/20240817175355.png)

![20240817175501](https://static-docs.nocobase.com/20240817175501.png)

Pour plus d'informations, consultez [Template Handlebars](/handbook/template-handlebars)

## Utilisation des Variables

Les variables supportées dans Markdown varient en fonction de l'emplacement.

Le Markdown dans la page supporte des variables système communes, telles que l'utilisateur actuel, le rôle actuel, les variables de date, etc.

![20240612205857](https://static-docs.nocobase.com/20240612205857.png)

Le Markdown dans les fenêtres de ligne d'opérations de bloc (ou sous-pages) supporte davantage de variables de contexte de données, telles que l'enregistrement actuel, l'enregistrement popup actuel, etc.

![20240612210333](https://static-docs.nocobase.com/20240612210333.png)

### Données associées dans les variables

Par exemple, commande/expédition (un à un).

Utilisez la variable 'current popup record' dans le bloc Markdown de la fenêtre d'opération de détail pour afficher le numéro d'expédition de la commande actuelle.

#### Les templates de chaînes gèrent automatiquement les données associées (en chargeant automatiquement les données d'association requises)

![20241210165519](https://static-docs.nocobase.com/20241210165519.png)

![20241210165541](https://static-docs.nocobase.com/20241210165541.png)

#### Actuellement, Handlebars ne supporte pas le préchargement des données associées. Les utilisateurs doivent configurer explicitement les champs d'association correspondants dans le bloc de données pour récupérer les données pertinentes lors du rendu.

![20241210165625](https://static-docs.nocobase.com/20241210165625.png)

Après avoir configuré le champ d'association 'Shipment' dans le bloc de table des commandes, le bloc Markdown dans l'opération de détail (en utilisant Handlebars) pourra accéder et rendre les données d'association.

![20241210165655](https://static-docs.nocobase.com/20241210165655.png)

### Règles de Syntaxe

En plus de la différence dans le préchargement des données associées, il existe aussi des différences dans les règles de syntaxe entre les deux templates. Par exemple, lors de l'utilisation de variables avec une association "un-à-plusieurs", les données récupérées sont généralement un tableau. Les deux templates gèrent les données de type tableau différemment.

Par exemple, commande/produit (plusieurs à plusieurs)

Utilisez la variable 'current popup record' dans le bloc Markdown de la fenêtre d'opération de détail pour afficher les noms des produits associés à la commande actuelle (plusieurs éléments).

#### Les templates de chaînes affichent les tableaux en séparant les éléments par des virgules (',')

![20241210170508](https://static-docs.nocobase.com/20241210170508.png)

![20241210170545](https://static-docs.nocobase.com/20241210170545.png)

#### Les templates Handlebars utilisent `#each` pour itérer sur les données de type tableau

![20241210205357](https://static-docs.nocobase.com/20241210205357.png)

Les données associées à utiliser doivent être configurées dans le bloc de données.

![20241210170814](https://static-docs.nocobase.com/20241210170814.png)

```javascript
<ul>
  {{#each   $nPopupRecord.products }}
    <li>{{this.product_name}}</li>
  {{/each}}
</ul>
```

Pour plus d'informations sur les variables, consultez la section [Édition UI / Variables](/handbook/ui/variables).

## QR Codes

Le Markdown prend également en charge la configuration des QR codes, qui peuvent être utilisés en combinaison avec des variables.

```html
<qr-code value="https://www.nocobase.com/" type="svg"></qr-code>
```

## RoadMap

- Prévu ou en cours
  - Handlebars supporte le préchargement des données associées.
