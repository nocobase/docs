### Установка плагинов

См. раздел [Установка и обновление коммерческих плагинов](/welcome/getting-started/plugin)

### Установка LibreOffice (опционально)

Для генерации PDF необходимо установить LibreOffice. [Скачайте его с официального сайта](https://www.libreoffice.org/download/download-libreoffice).  
Если вы используете версию в Docker, вы можете создать скрипт напрямую в каталоге `./storage/scripts`.

```bash
mkdir ./storage/scripts
cd ./storage/scripts
vim install-libreoffice.sh
```

Содержимое `install-libreoffice.sh` следующее:

```sh
#!/bin/bash

# Определить переменные
INSTALL_DIR="/opt/libreoffice24.8"
DOWNLOAD_URL="https://download.documentfoundation.org/libreoffice/stable/24.8.5/deb/x86_64/LibreOffice_24.8.5_Linux_x86-64_deb.tar.gz"

# Проверьте, установлен ли уже LibreOffice
if [ -d "$INSTALL_DIR" ]; then
    echo "LibreOffice is already installed, skipping installation."
    exit 0
fi

# Обновите APT и установите зависимости
apt-get update

apt-get install -y \
    libfreetype6 \
    fontconfig \
    libgssapi-krb5-2 \
    libxml2 \
    libnss3 \
    libdbus-1-3 \
    libcairo2 \
    libxslt1.1 \
    libglib2.0-0 \
    libcups2 \
    libx11-xcb1 \
    fonts-liberation \
    fonts-noto-cjk \
    wget

rm -rf /var/lib/apt/lists/*

cd /app/nocobase/storage/scripts

# Загрузите и установите LibreOffice, если он еще не установлен
if [ ! -d "./libreoffice" ]; then
    rm -rf libreoffice.tar.gz
    wget --no-check-certificate -O libreoffice.tar.gz $DOWNLOAD_URL
    if [ $? -ne 0 ]; then
        echo "Failed to download LibreOffice."
        exit 1
    fi
    rm -rf libreoffice && mkdir libreoffice
    tar -zxvf libreoffice.tar.gz -C ./libreoffice --strip-components=1
    if [ $? -ne 0 ]; then
        echo "Failed to extract LibreOffice."
        exit 1
    fi
fi

# Установить LibreOffice
dpkg -i libreoffice/DEBS/*.deb

ln -s /opt/libreoffice24.8/program/soffice.bin /usr/bin/libreoffice
libreoffice --version

if [ $? -ne 0 ]; then
    echo "Failed to install LibreOffice."
    exit 1
fi

echo "LibreOffice installation completed successfully."
```

Перезапустите контейнер `app`:

```bash
docker compose restart app
# View logs
docker compose logs app
```

Убедитесь, что установка прошла успешно:

```bash
$ docker compose exec app bash -c "libreoffice --version"

LibreOffice 24.8.4.2 bb3cfa12c7b1bf994ecc5649a80400d06cd71002
```
