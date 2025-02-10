# Connexion des Blocs de Données

## Introduction

La connexion des blocs de données est une fonctionnalité puissante qui permet une liaison dynamique de filtrage entre différents composants de données. En substance, cette fonctionnalité consiste à établir une relation entre deux collections : une collection source (collection principale) et une collection cible (collection clé étrangère). Cette connexion permet un filtrage et une interaction fluides des données.

Les options pour connecter les blocs sont polyvalentes, incluant :
- Des blocs de données provenant de la même collection sur la page actuelle ou la fenêtre pop-up.
- Des blocs provenant de différentes collections avec des contraintes de clé étrangère.
- Des blocs de collections avec des relations d'héritage.

Les utilisateurs peuvent connecter plusieurs blocs simultanément, ce qui renforce la flexibilité des interactions de données. Quel que soit le mode de connexion choisi, le principe sous-jacent reste le même : la collection source (collection activement connectée) fournit les paramètres de filtrage à la collection cible (collection connectée), permettant un filtrage et un affichage précis des données.

## Manuel de l'utilisateur

### Connecter des Blocs de Filtrage à des Blocs de Données

![Illustration de la connexion des blocs de filtrage aux blocs de données](https://static-docs.nocobase.com/20240407180953.png)

### Connecter des Blocs de Données entre eux

#### Liaison entre des Blocs de Données provenant de la Même Collection

Exemple : Créer une liaison dynamique entre un bloc de collection de commandes et son bloc de détails de commande correspondant.

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240407161700.mp4" type="video/mp4">
</video>

#### Liaison entre des Blocs de Collections Liées (Blocs de Collections Différentes avec Contraintes de Clé Étrangère)

Exemple : Utiliser la relation plusieurs-à-un entre la collection de commandes et la collection de clients pour mettre en œuvre une liaison de filtrage. Cette configuration permet aux utilisateurs de consulter les données de commande pour un client spécifique en établissant une connexion entre le bloc de la collection client et le bloc de la collection de commandes.

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240407163523.mp4" type="video/mp4">
</video>
