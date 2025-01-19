# v0.14: 2023-09-12

Cette version permet l'utilisation de plugins plug-and-play en environnements de production. Vous pouvez désormais ajouter des plugins directement via l'interface utilisateur, avec un support pour le téléchargement depuis le registre npm (y compris privé), les téléchargements locaux et les téléchargements depuis des URL.

## Nouvelles fonctionnalités

### Nouvelle interface de gestion des plugins

Cette mise à jour introduit une interface plus conviviale pour la gestion des plugins.

![Plugin Manager Interface](https://static-docs.nocobase.com/20240429074459.png)

### Plugins téléchargés situés dans le répertoire `storage/plugins`

Les plugins téléchargés sont maintenant organisés dans le répertoire `storage/plugins` sous forme de packages npm.

```bash
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /@foo/
      |- /bar/
    |- /my-nocobase-plugin-hello/
```

### Mises à jour des plugins

Les plugins peuvent désormais être mis à jour directement depuis le répertoire `storage/plugins`. Voici à quoi cela ressemble :

![Plugin Update](https://static-docs.nocobase.com/20240429074511.png)

Note : Pour faciliter la maintenance et la mise à jour des plugins, vous pouvez déposer directement la nouvelle version du plugin dans le répertoire `storage/plugins` avant de procéder à la mise à jour.

## Changements incompatibles

### Changements dans les noms de plugins

- La variable d'environnement `PLUGIN_PACKAGE_PREFIX` n'est plus fournie.
- Les noms de plugins et de packages sont désormais unifiés. Les anciens noms de plugins peuvent toujours exister en tant qu'alias.

### Améliorations de la commande `pm.add`

```bash
# Utilisez packageName au lieu de pluginName, cherche localement, erreur si non trouvé
pm add packageName

# Télécharge depuis un registre distant si spécifié, vous pouvez également préciser la version
pm add packageName --registry=xx --auth-token=yy --version=zz

# Vous pouvez aussi fournir un zip local, plusieurs ajouts possibles, seul le dernier sera pris
pm add /a/plugin.zip

# Télécharge un zip distant, remplace-le par le même nom
pm add http://url/plugin.zip
```

### Modifications de la configuration Nginx

Ajoutez la localisation `/static/plugins/` dans votre configuration Nginx.

```conf
server {
    location ^~ /static/plugins/ {
        proxy_pass http://127.0.0.1:13000/static/plugins/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_connect_timeout 600;
        proxy_send_timeout 600;
        proxy_read_timeout 600;
        send_timeout 600;
    }
}
```

Pour plus de détails, vous pouvez consulter la version complète de [nocobase.conf](https://github.com/nocobase/nocobase/blob/main/docker/nocobase/nocobase.conf).

## Guide de développement de plugins

Commencez à développer votre premier plugin en suivant ce guide : [Développer votre premier plugin](/development/your-fisrt-plugin).
