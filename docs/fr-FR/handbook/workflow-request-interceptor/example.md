# Exemple

En se basant sur les instructions de base fournies précédemment, explorons un scénario d'exemple de "Soumission de commande". Dans ce scénario, nous devons vérifier les niveaux de stock de tous les produits sélectionnés par l'utilisateur au moment de la soumission de la commande. Si un produit a un stock insuffisant, la soumission de la commande sera bloquée et une notification pertinente sera affichée. Le système passera en revue chaque produit et, si tous les produits ont un stock suffisant, les données de la commande seront générées avec succès.

Les autres étapes suivent la même procédure décrite dans les instructions. Cependant, étant donné qu'une commande peut inclure plusieurs produits, en plus d'établir une relation plusieurs-à-plusieurs entre "Commande" <-- m:1 -- "Détails" -- 1:m --> "Produit" lors de la modélisation des données, il est nécessaire d'introduire un nœud "Boucle" dans le flux de travail "Événement avant action". Cette boucle sera utilisée pour vérifier le niveau de stock de chaque produit :

![Processus de vérification de la boucle](https://static-docs.nocobase.com/8307de47d5629595ab6cf00f8aa898e3.png)

L'objet de la boucle doit être défini sur le tableau "Détails" des données de commande soumises :

![Configuration de l'objet de la boucle](https://static-docs.nocobase.com/ed662b54cc1f5425e2b472053f89baba.png)

À l'intérieur de la boucle, un nœud de vérification de condition est utilisé pour déterminer si le stock du produit actuel est suffisant :

![Vérification de condition dans la boucle](https://static-docs.nocobase.com/4af91112934b0a04a4ce55e657c0833b.png)

Les autres configurations restent cohérentes avec celles des instructions d'utilisation de base. Lors de la soumission de la commande, si le stock de l'un des produits est insuffisant, la commande sera bloquée et une notification correspondante sera renvoyée. Lors des tests, vous pouvez tenter de soumettre plusieurs produits dans une seule commande, avec un produit ayant un stock insuffisant et un autre ayant un stock suffisant. Le message de réponse que vous recevrez ressemblera à ceci :

![Message de réponse de soumission](https://static-docs.nocobase.com/dd9e81084aa237bda0241d399ac19270.png)

Comme illustré, le message de réponse ne signale pas le stock insuffisant du premier produit, "iPhone 15 Pro", mais indique bien le stock insuffisant du deuxième produit, "iPhone 14 Pro". Cela se produit parce que le stock du premier produit était suffisant, permettant à la soumission de se poursuivre, tandis que le stock insuffisant du deuxième produit a conduit à ce que la commande soit bloquée.
