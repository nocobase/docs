# Docker 安装的升级

## 0. 升级前的准备

:::warning
- 升级前一定要先备份数据库！！！
- 商业插件请在系统中验证授权码，验证后重启系统。详见 [NocoBase 商业授权激活指南](https://www.nocobase.com/cn/blog/nocobase-commercial-license-activation-guide)。
:::

## 1. 切换到 `docker-compose.yml` 所在的目录

例如

```bash
# MacOS, Linux...
cd /your/path/my-project/
# Windows
cd C:\your\path\my-project
```

## 2. 更新 image 版本号

- `latest`：功能稳定，测试较为完善的版本，仅做缺陷修复。推荐安装此版本。
- `beta`: 包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。
- `alpha`: 开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。
- `1.3.51`：指定版本号，最新版本查看 [已发布版本列表](https://hub.docker.com/r/nocobase/nocobase/tags)。

```yml
# ...
services:
  app:
    # 阿里云 latest 版本
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    # 阿里云 beta 版本
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:beta
    # 阿里云 alpha 版本
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:alpha
    # 阿里云指定版本
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:1.3.51
    # Docker Hub 镜像，可能会下载不了
    image: nocobase/nocobase:latest
    image: nocobase/nocobase:beta
    image: nocobase/nocobase:alpha
    image: nocobase/nocobase:1.3.51
# ...
```

## 3. 重启容器

```bash
# 拉取最新镜像
docker-compose pull
# 启动
docker-compose up -d app
# 查看 app 进程的情况
docker-compose logs app
```

## 4. 独立插件的升级

NocoBase 升级之后，通过界面安装的独立插件可能也需要升级，参考文档 [独立插件的安装与升级](/welcome/getting-started/plugin)
