# Exemple

Suite aux étapes de configuration décrites ci-dessus, illustrons comment calculer le prix final pour différents produits en appliquant diverses règles de prix pendant le processus de création de commande.

1. **Configurer la Collection de Produits :**

   | Nom du Champ     | Type                     |
   | ---------------- | ------------------------ |
   | Nom du Produit   | Texte                    |
   | Prix             | Nombre                   |
   | Règle de Prix    | `appartient à` (Collection Règles de Prix) |

2. **Configurer la Collection des Règles de Prix** (en utilisant le modèle de Collection d'Expressions) :

   | Nom du Champ        | Type                                  |
   | ------------------- | ------------------------------------- |
   | Nom de la Règle     | Texte                                 |
   | Collection          | Sélection unique (Collection de Données)  |
   | Moteur de Calcul    | Sélection unique (mathjs/formulajs)    |
   | Expression          | Texte                                 |

3. **Saisir les Règles de Prix :**

   | ID  | Nom    | Collection | Moteur de Calcul | Expression                  |
   | --- | ------- | ---------- | ---------------- | --------------------------- |
   | 1   | 80% off | Produit    | formula.js       | `{{Product.Price}} * 0.8`    |
   | 2   | 90% off | Produit    | formula.js       | `{{Product.Price}} * 0.9`    |

4. **Créer les Produits et Assigner les Règles de Prix :**

   | ID  | Nom du Produit   | Prix  | Règle de Prix |
   | --- | ---------------- | ----- | ------------- |
   | 1   | iPhone 14 Pro    | 7999  | 2             |
   | 2   | iPhone 13 Pro    | 6999  | 1             |

5. **Configurer un Workflow Déclenché par la Création de Commande :**

   ![Déclencheur_CréationCommande](https://static-docs.nocobase.com/f181f75b10007afd5de068f3458d2e04.png)

6. **Créer un Nœud de Calcul d'Expression Dynamique et le Configurer avec les Données du Déclencheur/Produit/Règle de Prix :**

   ![SélectionnerDonnéesExpressionDynamique](https://static-docs.nocobase.com/21ccc63e604dd90b7d26c3c33c12d671.png)

   Définir la source de données variable sur le produit dans les données du déclencheur :

   ![SélectionnerSourceDonnéesVariable](https://static-docs.nocobase.com/afbffe9661539d26e4b175ae8a4b28f7.png)

7. **Ajouter un Nœud de Mise à Jour des Données pour Mettre à Jour le Prix Total de la Commande avec le Résultat du Nœud de Calcul :**

   ![MettreÀJourDonnéesCommande](https://static-docs.nocobase.com/5cc7ffb113c8d6a2fd3b1b34abe06dcc.png)

8. **Déclencher le Workflow Lors de la Création de la Commande et Vérifier les Prix dans la Liste des Commandes :**

   | Produit de la Commande  | Prix | Règle de Prix     | Prix Total             |
   | ----------------------- | ---- | ----------------- | ---------------------- |
   | iPhone 14 Pro           | 7999 | Règle1 : 90% off  | 7999 * 0.9 = 7199.1    |
   | iPhone 13 Pro           | 6999 | Règle2 : 80% off  | 6999 * 0.8 = 5599.2    |

   Le prix final affiché dans l'image ci-dessous devrait correspondre au prix calculé dans la collection ci-dessus :

   ![PrixTotalCommande_AprèsCréation](https://static-docs.nocobase.com/a5610aca292e79c4841c97457bd3cc7c.png)

   :::info{title=Astuce}
   Puisque le workflow fonctionne de manière asynchrone, le prix total pourrait ne pas être immédiatement reflété dans la collection après la création de la commande. Vous devrez peut-être attendre un instant avant de rafraîchir la page pour voir le prix total mis à jour.
   :::
