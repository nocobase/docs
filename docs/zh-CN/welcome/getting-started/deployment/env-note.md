**注意事项：**

- `TZ` 用于设置应用的时区，默认为操作系统时区；
- `APP_KEY` 是应用的密钥，用于生成用户 token 等（如果 APP_KEY 修改了，旧的 token 也会随之失效）。它可以是任意随机字符串。请修改为自己的秘钥，并确保不对外泄露；
- `DB_*` 为数据库相关，如果不是例子默认的数据库服务，请根据实际情况修改；
- 生产环境部署时，`APP_ENV=production`；
- 子路径部署时，需要配置 `APP_PUBLIC_PATH`，如 `APP_PUBLIC_PATH=/nocobase/`；

