**Points à noter :**

- `TZ` est utilisé pour définir le fuseau horaire de l'application, la valeur par défaut étant le fuseau horaire du système ;
- `APP_KEY` est la clé secrète de l'application, utilisée pour générer des jetons utilisateur, etc. (si APP_KEY est modifié, les anciens jetons deviendront également invalides). Il peut s'agir de n'importe quelle chaîne aléatoire. Veuillez la remplacer par votre propre clé secrète et assurez-vous qu'elle ne soit pas divulguée au public.
- `DB_*` est lié à la base de données. S'il ne s'agit pas du service de base de données par défaut dans l'exemple, veuillez le modifier en fonction de la situation réelle ;
- Lors d'un déploiement dans un environnement de production, `APP_ENV=production` ;
- Lors du déploiement dans un sous-chemin, vous devez configurer `APP_PUBLIC_PATH`, tel que `APP_PUBLIC_PATH=/nocobase/`.
