# Auth: LDAP

<PluginInfo commercial="true" name="auth-ldap"></PluginInfo>

## Introduction

Le plugin **Auth: LDAP** suit la norme de protocole LDAP (Lightweight Directory Access Protocol), permettant aux utilisateurs de se connecter à NocoBase en utilisant leurs identifiants de serveur LDAP.

## Activer le plugin

<img src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/202405101600789.png"/>

## Ajouter l'authentification LDAP

Accédez à la page de paramètres du plugin d'authentification.

<img src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/202405101601510.png"/>

Ajoutez - **LDAP**

<img src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/202405101602104.png"/>

## Configuration

### Configuration de base

<img src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/202405101605728.png"/>

- **Inscription automatique lorsque l'utilisateur n'existe pas** - Décidez s'il faut créer automatiquement un nouvel utilisateur lorsque aucun utilisateur existant correspondant n'est trouvé.
- **URL LDAP** - URL du serveur LDAP
- **Bind DN** - DN utilisé pour tester la connexion au serveur et rechercher des utilisateurs
- **Mot de passe Bind** - Mot de passe du Bind DN
- **Test de connexion** - Cliquez sur le bouton pour tester la connexion au serveur et l'authentification du Bind DN.

### Configuration de la recherche

<img src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/202405101609984.png"/>

- **Search DN** - DN utilisé pour rechercher des utilisateurs
- **Search filter** - Condition de filtrage pour la recherche des utilisateurs, utilisez `{{account}}` pour représenter le compte utilisateur utilisé pour la connexion
- **Scope** - `Base`, `One level`, `Subtree`, par défaut `Subtree`
- **Size limit** - Taille de la page de recherche

### Mapping des attributs

<img src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/202405101612814.png"/>

- **Champ utilisé pour lier l'utilisateur** - Champ utilisé pour lier les utilisateurs existants. Si le compte de connexion est un nom d'utilisateur, choisissez `username`; si c'est un e-mail, choisissez `email`. Par défaut, `username`.
- **Attributs mappés** - Mapping des attributs utilisateur aux champs dans la table des utilisateurs NocoBase.

## Connexion

Visitez la page de connexion et saisissez le nom d'utilisateur et le mot de passe LDAP dans le formulaire de connexion.

<img src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/202405101614300.png"/>
