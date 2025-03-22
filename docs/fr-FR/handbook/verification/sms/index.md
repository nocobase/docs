# Vérification : SMS

<PluginInfo name="verification"></PluginInfo>

## Introduction

Le code de vérification par SMS est un type de vérification intégré, utilisé pour générer un mot de passe à usage unique (OTP) et l'envoyer aux utilisateurs par SMS.

## Ajouter un vérificateur SMS

Accédez à la page de gestion des vérifications.

![](https://static-docs.nocobase.com/202502271726791.png)

Ajoutez - SMS OTP

![](https://static-docs.nocobase.com/202502271726056.png)

## Configuration administrateur

![](https://static-docs.nocobase.com/202502271727711.png)

Les fournisseurs de services SMS actuellement pris en charge sont :

- <a href="https://www.aliyun.com/product/sms" target="_blank">Alibaba Cloud SMS</a>  
- <a href="https://cloud.tencent.com/product/sms" target="_blank">Tencent Cloud SMS</a>  

Lors de la configuration du modèle de message SMS dans la console du fournisseur, il est nécessaire de réserver un paramètre pour le code de vérification.

- Exemple de configuration pour Alibaba Cloud : `Votre code de vérification est : ${code}`  
- Exemple de configuration pour Tencent Cloud : `Votre code de vérification est : {1}`  

Les développeurs peuvent également étendre d'autres fournisseurs de services SMS sous forme de plugins.  
Référence : [Extension des fournisseurs de services SMS](../../../handbook/verification/sms/dev)

## Liaison de l'utilisateur

Après avoir ajouté un vérificateur, les utilisateurs peuvent lier leur numéro de téléphone de vérification dans leur gestion personnelle des vérifications.

![](https://static-docs.nocobase.com/202502271737016.png)

![](https://static-docs.nocobase.com/202502271737769.png)

![](https://static-docs.nocobase.com/202502271738515.png)

Une fois l'association réussie, l'utilisateur pourra être vérifié dans les scénarios où ce vérificateur est activé.

![](https://static-docs.nocobase.com/202502271739607.png)

## Dissociation de l'utilisateur

La dissociation du numéro de téléphone nécessite une vérification via une méthode de vérification déjà associée.

![](https://static-docs.nocobase.com/202502282103205.png)
