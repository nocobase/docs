# Après Soumission Réussie

## Introduction

La fonctionnalité "Après soumission réussie" permet de personnaliser le comportement de la réponse une fois l'opération terminée. Elle prend en charge la définition de messages de succès personnalisés, le choix entre une fermeture automatique ou manuelle des notifications de succès, ainsi que la possibilité de rester sur la page actuelle, de revenir à la fenêtre pop-up ou page précédente, ou de rediriger vers un itinéraire spécifié, en fonction des besoins.

![20240413213519](https://static-docs.nocobase.com/20240413213519.png)

![20241012125623](https://static-docs.nocobase.com/20241012125623.png)

- **Rester sur la fenêtre pop-up ou la page actuelle** : Après le succès de l'opération, la fenêtre pop-up ou la route ne sera pas fermée.
- **Retour à la fenêtre pop-up ou la page précédente (par défaut)** : La fenêtre pop-up sera fermée après la réussite de l'opération.
- **Rediriger vers** : Après le succès de l'opération, la route sera changée vers l'itinéraire spécifié.

### Redirection vers une route spécifique

Dans un formulaire, le bouton de soumission peut, après une soumission réussie, utiliser les valeurs de l'enregistrement dans la réponse pour effectuer une redirection dynamique vers une route spécifiée.

![20250405162542](https://static-docs.nocobase.com/20250405162542.png)

Vous pouvez passer les valeurs d'enregistrement de la réponse comme variables dans le chemin.

**Exemple :** Après la soumission réussie d'un enregistrement, rediriger vers la page de détails de l'enregistrement.

![20250405162732](https://static-docs.nocobase.com/20250405162732.png)
