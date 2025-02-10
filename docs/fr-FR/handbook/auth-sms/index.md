# Auth : SMS

## Introduction

Le plugin d'authentification SMS permet aux utilisateurs de s'inscrire et de se connecter à NocoBase via SMS.

> Il nécessite l'utilisation du plugin de code de vérification SMS fourni par le plugin [`@nocobase/plugin-verification`](../verification/).

## Ajouter l'authentification SMS

Accédez à la page de gestion des plugins d'authentification des utilisateurs.

![](../auth-oidc/static/2023-12-03-18-19-33.png)

Ajoutez - SMS

![](https://static-docs.nocobase.com/29c8916492fd5e1564a872b31ad3ac0d.png)

## Configuration

![](https://static-docs.nocobase.com/a4d35ec63ba22ae2ea9e3e8e1cbb783d.png)

Pour la configuration de la fonction de code de vérification SMS, consultez la [documentation du plugin Verification (@nocobase/plugin-verification)](../verification/index.md). La fonction d'authentification par SMS utilisera le fournisseur de code de vérification SMS par défaut que vous avez configuré et paramétré pour envoyer les SMS.

**Inscription automatique lorsqu'un utilisateur n'existe pas** : Lorsque cette option est activée, si le numéro de téléphone de l'utilisateur n'existe pas, un nouvel utilisateur sera inscrit en utilisant le numéro de téléphone comme pseudonyme.

## Connexion

Visitez la page de connexion pour utiliser l'authentification SMS.

![](https://static-docs.nocobase.com/8d630739201bc27d8b0de076ab4f75e2.png)
