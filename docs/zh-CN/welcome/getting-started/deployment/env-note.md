**注意事项：**

- `APP_KEY` 是应用的密钥，用于生成用户 token 等（如果 APP_KEY 修改了，旧的 token 也会随之失效）。它可以是任意随机字符串。请修改为自己的秘钥，并确保不对外泄露。
- `DB_*` 为数据库相关，如果不是例子默认的数据库服务，请根据实际情况修改
- 使用 MySQL（或 MariaDB）时，需要配置 DB_TIMEZONE 环境变量，如 `DB_TIMEZONE=+08:00`
- 生产环境部署时，`APP_ENV=production`
- 子路径部署时，需要配置 `APP_PUBLIC_PATH`，如 `APP_PUBLIC_PATH=/nocobase/`
