# Configuration du style

## Introduction

Les utilisateurs peuvent ajuster le style des champs dans le menu de style (actuellement, les paramètres de couleur et de couleur d'arrière-plan sont pris en charge). De plus, les styles peuvent être ajustés dynamiquement en fonction des valeurs des champs ou des variables système.

## Comment utiliser

Supposons que nous ayons un tableau des détails des transactions bancaires avec une colonne pour les montants des transactions. Nous souhaitons définir les montants positifs (revenus) en vert et les montants négatifs (dépenses) en rouge. Voici les étapes spécifiques :

1. Tout d'abord, ouvrez le menu des paramètres pour le champ du montant de la transaction et cliquez sur l'option de style.
![Screenshot_2024-08-08_14-56-12-2024-08-08-22-57-37](https://static-docs.nocobase.com/Screenshot_2024-08-08_14-56-12-2024-08-08-22-57-37.png)

2. Cliquez sur "Ajouter une règle dynamique" et définissez la première règle : lorsque le montant de la transaction est supérieur à 0, définissez la couleur du champ en vert.
![Screenshot_2024-08-08_14-58-17-2024-08-08-22-58-36](https://static-docs.nocobase.com/Screenshot_2024-08-08_14-58-17-2024-08-08-22-58-36.png)

3. Cliquez de nouveau sur "Ajouter une règle dynamique" pour définir la deuxième règle : lorsque le montant de la transaction est inférieur à 0, définissez la couleur du champ en rouge.

![Screenshot_2024-08-08_14-59-03-2024-08-08-22-59-14](https://static-docs.nocobase.com/Screenshot_2024-08-08_14-59-03-2024-08-08-22-59-14.png)

Le résultat final sera le suivant :
![Screenshot_2024-08-08_14-59-20-2024-08-08-22-59-28](https://static-docs.nocobase.com/Screenshot_2024-08-08_14-59-20-2024-08-08-22-59-28.png)
