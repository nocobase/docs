**Points to Note:**

- `TZ` is used to set the application's time zone, with the default being the system's time zone;
- `APP_KEY` is the application's secret key, used for generating user tokens and so on (if APP_KEY is changed, the old tokens will also become invalid). It can be any random string. Please change it to your own secret key and ensure it is not disclosed to the public.
- `DB_*` is related to the database. If it is not the default database service in the example, please modify it according to the actual situation;
- When deploying in a production environment, `APP_ENV=production`;
- When deploying on a subpath, you need to configure `APP_PUBLIC_PATH`, such as `APP_PUBLIC_PATH=/nocobase/`.