# create-nocobase-app 部署

与 [create-nocobase-app 安装](/welcome/getting-started/installation/create-nocobase-app) 流程无异。

<embed src="./env-note.md"></embed>

## 管理应用进程

NocoBase 已经内置了 [pm2](https://pm2.keymetrics.io/)，用于管理应用进程，生产环境直接 `yarn start` 就可以了，如果需要后台运行，加上 `-d` 参数即可，例如：

```bash
# 后台运行
yarn start -d
```

重启

```bash
yarn nocobase pm2-restart
```

停止

```bash
yarn nocobase pm2-stop
```

更多 pm2 命令

```bash
yarn nocobase pm2 -h
```

## 配置 Nginx

生产环境，可以考虑将静态文件交由 Nginx 代理，NocoBase 提供了 `create-nginx-conf` 命令用于生成 Nginx 配置文件。

```bash
yarn nocobase create-nginx-conf
```

文件路径在 `./storage/nocobase.conf`，将它加入 `/etc/nginx/sites-enabled`，例如：

```
ln -s /app/nocobase/storage/nocobase.conf /etc/nginx/sites-enabled/nocobase.conf
```

部署到子路径，需要配置 `APP_PUBLIC_PATH` 环境变量。配置完之后，需要重新执行 `create-nginx-conf` 命令。

**备注**

- `/app/nocobase/` 为示例应用所在目录，需要根据实际情况进行调整；
- `/etc/nginx/sites-enabled` 为默认 Nginx 的配置路径，实际情况可能有差异；
- 如果使用的不是 Nginx，可以参考 Nginx 的配置做一些调整。