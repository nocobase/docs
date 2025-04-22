# Configuration des Styles

## Introduction

Les règles de liaison des styles de champ sont un outil essentiel pour améliorer l'expérience utilisateur. En configurant dynamiquement les styles, vous pouvez améliorer l'impact visuel des blocs et aider les utilisateurs à repérer plus rapidement les informations clés. Cela comprend principalement :

- `color`
- `background-color`
- `text-align`
- `font-size`
- `font-weight`
- `font-style`

Ces règles sont couramment utilisées pour mettre en évidence des informations importantes en fonction de l'état du champ, signaler des anomalies ou guider visuellement l'utilisateur.

## Méthode d'utilisation

Exemple : Modifiez dynamiquement la couleur du champ "Montant de la commande" en fonction du montant de la commande. Si le montant de la commande dépasse 1000, la couleur devient verte ; si le montant est inférieur ou égal à 1000, la couleur devient rouge.

- Règle 1 : Lorsque **le montant de la commande est supérieur à 10000**, la couleur du champ devient verte.

![20250418171640](https://static-docs.nocobase.com/20250418171640.png)

- Règle 2 : Lorsque **le montant de la commande est inférieur ou égal à 1000**, la couleur du champ devient rouge.

![20250418171900](https://static-docs.nocobase.com/20250418171900.png)

Pour plus d'informations, consultez [Règles de Liaison](/handbook/ui/linkage-rule).
