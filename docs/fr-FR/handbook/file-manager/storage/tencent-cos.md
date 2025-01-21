# Tencent COS

Le moteur de stockage basé sur Tencent Cloud COS, vous devez préparer les comptes et les autorisations nécessaires à l'avance.

## Options

![Exemple des options de Tencent COS](https://static-docs.nocobase.com/20240712222125.png)

:::info{title=Astuce}
Cette section couvre uniquement les options spécifiques au moteur de stockage Tencent Cloud COS. Pour les paramètres communs, veuillez consulter les [Paramètres généraux du moteur](./index.md#common-engine-parameters).
:::

### Région

Indiquez la région du stockage COS, par exemple : `ap-chengdu`.

:::info{title=Astuce}
Vous pouvez consulter les informations de la région du seau de stockage dans le [console Tencent Cloud COS](https://console.cloud.tencent.com/cos), et vous n'avez besoin de prendre que la partie préfixe de la région (sans le nom de domaine complet).
:::

### SecretId

Indiquez l'ID de la clé d'accès autorisée de Tencent Cloud.

### SecretKey

Indiquez le secret de la clé d'accès autorisée de Tencent Cloud.

### Bucket

Indiquez le nom du seau COS, par exemple : `qing-cdn-1234189398`.
