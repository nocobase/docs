# Après Soumission Réussie

## Introduction

La configuration "Après soumission réussie" permet aux utilisateurs de personnaliser le comportement de réponse après l'achèvement. Les utilisateurs peuvent définir des messages de succès personnalisés, sélectionner la fermeture automatique ou manuelle des notifications de succès, et choisir de rester sur la page actuelle, retourner à la fenêtre popup ou page précédente, ou rediriger vers une route spécifiée, selon les exigences.

![20240413213519](https://static-docs.nocobase.com/20240413213519.png)

![20241012125623](https://static-docs.nocobase.com/20241012125623.png)

- Rester sur la popup ou page actuelle : Après le succès de l'opération, la fenêtre popup ou la route n'est pas fermée
- Retourner à la popup ou page précédente (par défaut) : Fermer la fenêtre popup après le succès de l'opération
- Rediriger vers : Après le succès de l'opération, la route est basculée vers la route spécifiée

## Actualiser les Blocs de Données<Badge>v1.7.0+</Badge>

Prend en charge l'actualisation des blocs de données après une opération réussie. Les utilisateurs peuvent sélectionner les blocs de données à actualiser via un menu déroulant, avec des options disponibles incluant les blocs de données sur la page actuelle et dans les popups. L'opération d'actualisation des blocs de données est exécutée immédiatement après le succès de l'opération, garantissant que les utilisateurs voient l'état des données le plus récent.

### Processus d'Opération
1. Ouvrir la popup de configuration "Après Soumission Réussie".
2. Dans l'option "Actualiser les Blocs de Données", sélectionner les blocs de données qui doivent être actualisés.
3. Cliquer sur le bouton "OK" pour terminer la configuration.

![428388359-4c20f495-619e-4392-95e3-eea2b6085a50](https://static-docs.nocobase.com/428388359-4c20f495-619e-4392-95e3-eea2b6085a50.gif)

### Rediriger vers une Route Spécifique

Le bouton `Soumettre` dans le formulaire prend en charge le passage dynamique de variables depuis les données de réponse après une soumission réussie, à utiliser dans une redirection de route.

![20250405162542](https://static-docs.nocobase.com/20250405162542.png)

Vous pouvez passer les données d'enregistrement de réponse comme variables dans le chemin.
Par exemple : Après avoir créé avec succès un enregistrement, vous pouvez rediriger vers la page de détails de cet enregistrement.
![20250405162732](https://static-docs.nocobase.com/20250405162732.png)
