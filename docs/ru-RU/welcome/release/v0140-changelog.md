# Версия 0.14: 2023-09-12

В этом выпуске доступны подключаемые модули `plug-and-play` в производственных средах. Теперь вы можете добавлять плагины непосредственно через пользовательский интерфейс и поддерживать загрузку из реестра npm (который может быть частным), локальную загрузку и загрузку по URL-адресу.

## Новые возможности

### Новый интерфейс менеджера плагинов

![20240429074459](https://static-docs.nocobase.com/20240429074459.png)

### Загруженные плагины находятся в каталоге storage/plugins.

Каталог storage/plugins используется для загрузки плагинов и организован в виде пакетов npm.

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

### Обновления плагинов

В настоящее время можно обновлять только плагины в разделе хранилище/plugins, как показано здесь:

![20240429074511](https://static-docs.nocobase.com/20240429074511.png)

Примечание: Чтобы упростить обслуживание и обновление, а также избежать недоступности плагинов хранилища из-за обновления, вы можете установить новый плагин непосредственно в хранилище/плагины, а затем выполнить операцию обновления.

## Несовместимые изменения

### Изменения в названиях плагинов

- Переменная среды `PLUGIN_PACKAGE_PREFIX` больше не используется.
- Имена плагинов и пакетов унифицированы, старые имена плагинов по-прежнему могут использоваться в качестве псевдонимов.

### Улучшения в pm.add

```bash
# Использовать packageName вместо PluginName, выполнить поиск локально, ошибка, если не найдено
pm add packageName

# Загрузка с удаленного компьютера возможна только при наличии реестра, также можно указать версию
pm add packageName --registry=xx --auth-token=yy --version=zz

# Вы также можете указать локальный почтовый индекс, добавлять его несколько раз и заменять последним
pm add /a/plugin.zip

# Удаленный архив, замените его на то же имя
pm add http://url/plugin.zip
```

### Изменения конфигурации Nginx

Добавить расположение `/static/plugins/`

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

Подробнее смотрите в полной версии [nocobase.conf](https://github.com/nocobase/nocobase/blob/main/docker/nocobase/nocobase.conf)

## Руководство по разработке плагина

[Разработка первого плагина](/development/your-fisrt-plugin)
