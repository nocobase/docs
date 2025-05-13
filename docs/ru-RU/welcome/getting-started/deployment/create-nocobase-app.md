# create-nocobase-app

The other processes are no different from the [create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app).

<embed src="./env-note.md"></embed>
- When deploying in a production environment, to reduce volume, you can install only the necessary dependencies with `yarn install --production`

<br />

[>>> For more information, view the complete 'Environment Variables' <<<](/welcome/getting-started/env)

## Managing Application Processes

NocoBase has already built-in [PM2](https://pm2.keymetrics.io/) for managing application processes. In a production environment, you can directly use `yarn start`. If you need it to run in the background, just add the `-d` parameter, for example:

```bash
# Run in the background
yarn start -d
```

Restart

```bash
yarn nocobase pm2-restart
```

Stop

```bash
yarn nocobase pm2-stop
```

More PM2 commands

```bash
yarn nocobase pm2 -h
```

## Configuring Nginx

In a production environment, you can consider having Nginx proxy the static files. NocoBase provides the `create-nginx-conf` command to generate Nginx configuration files.

```bash
yarn nocobase create-nginx-conf
```

The file path is `./storage/nocobase.conf`. Adjust it further according to the actual situation, and finally add it to `/etc/nginx/sites-enabled`, for example:

```bash
ln -s /app/nocobase/storage/nocobase.conf /etc/nginx/sites-enabled/nocobase.conf
```

**Remarks**

- When deploying to a subpath, you need to configure the `APP_PUBLIC_PATH` environment variable. After configuring, you need to re-execute the `create-nginx-conf` command;
- Modify the generated `nocobase.conf` according to the actual situation, such as configuring the domain name, etc.;
- `/app/nocobase/` is the directory where the example application is located, and it needs to be adjusted according to the actual situation;
- `/etc/nginx/sites-enabled` is the default Nginx configuration path, the actual situation may vary, you can check it with `nginx -V`;
- If you are not using Nginx, you can make some adjustments referring to the Nginx configuration.