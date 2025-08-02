# HTTP API для управления файлами

Файлы можно загружать и управлять ими с помощью HTTP API. Ниже приведены примеры использования.

---

### Загрузка файла в хранилище по умолчанию

Чтобы загрузить файл, выполните операцию `create` к ресурсу таблицы вложений (`attachments`) с помощью POST-запроса, передав бинарные данные файла через поле `file`. После выполнения запроса файл будет загружен в хранилище по умолчанию.

```bash
curl -X POST \
  -H "Authorization: Bearer <JWT>" \
  -F "file=@<путь/к/файлу>" \
  "http://localhost:3000/api/attachments:create"
```

---

### Загрузка файла в указанное хранилище

Если необходимо загрузить файл в хранилище, отличное от хранилища по умолчанию, используйте параметр `attachmentField`, указав поле таблицы, для которого настроено нужное хранилище (если поле не настроено, файл загружается в хранилище по умолчанию).

```bash
curl -X POST \
  -H "Authorization: Bearer <JWT>" \
  -F "file=@<путь/к/файлу>" \
  "http://localhost:3000/api/attachments:create?attachmentField=<имя_таблицы>.<имя_поля>"
```

---

### Получение подписанного URL для загрузки (для S3 и совместимых хранилищ)

Для хранилищ на основе S3 (например, Amazon S3, Aliyun OSS, Tencent COS и др.) можно использовать подпись URL для загрузки файла. Это позволяет клиенту загружать файл напрямую, минуя сервер NocoBase.

**1. Создание подписанного URL**

```bash
curl 'http://localhost:13000/api/fileStorageS3:createPresignedUrl' \
  -X POST \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Authorization: Bearer <JWT>' \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "name": "<имя_файла>",
    "size": <размер_в_байтах>,
    "type": "<MIME-тип>",
    "storageId": <id_хранилища>,
    "storageType": "<тип_хранилища>"
  }'
```

**Пояснение параметров:**
- `name`: имя файла
- `size`: размер файла в байтах
- `type`: MIME-тип файла. Список распространённых типов: [Common MIME types](https://developer.mozilla.org/ru/docs/Web/HTTP/MIME_types/Common_types)
- `storageId`: идентификатор хранилища (поле `id`, полученное при настройке хранилища)
- `storageType`: тип хранилища (например, `s3`, `oss`, `cos` и т.д.)

**Пример ответа:**
```json
{
  "url": "https://your-bucket.s3.amazonaws.com/...",
  "method": "PUT",
  "headers": {
    "Content-Type": "image/png"
  },
  "fileInfo": {
    "title": "ATT00001",
    "key": "ATT00001-8nuuxkuz4jn.png",
    "extname": ".png",
    "size": 4405,
    "mimetype": "image/png",
    "meta": {}
  }
}
```

---

### Загрузка файла с помощью подписанного URL

После получения подписанного URL выполните PUT-запрос, передав файл напрямую в хранилище.

```bash
curl -X 'PUT' \
  -T /Users/Downloads/a.png \
  -H 'Content-Type: image/png' \
  'https://your-bucket.s3.amazonaws.com/...'
```

---

### Создание записи о файле

После успешной загрузки файла создайте запись в таблице вложений (`attachments`), выполнив операцию `create`.

```bash
curl 'http://localhost:13000/api/attachments:create?attachmentField=<имя_таблицы>.<имя_поля>' \
  -X POST \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Authorization: Bearer <JWT>' \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "title": "<title>",
    "filename": "<filename>",
    "extname": "<extname>",
    "path": "",
    "size": <size>,
    "url": "",
    "mimetype": "<mimetype>",
    "meta": <meta>,
    "storageId": <storageId>
  }'
```

**Описание полей в `data-raw`:**
- `title`: значение поля `fileInfo.title` из ответа при создании подписанного URL
- `filename`: значение `fileInfo.key`
- `extname`: значение `fileInfo.extname`
- `path`: оставьте пустым
- `size`: значение `fileInfo.size`
- `url`: оставьте пустым (будет заполнено автоматически)
- `mimetype`: значение `fileInfo.mimetype`
- `meta`: значение `fileInfo.meta`
- `storageId`: идентификатор хранилища (поле `id` из настройки хранилища)

**Пример тела запроса:**
```json
{
  "title": "ATT00001",
  "filename": "ATT00001-8nuuxkuz4jn.png",
  "extname": ".png",
  "path": "",
  "size": 4405,
  "url": "",
  "mimetype": "image/png",
  "meta": {},
  "storageId": 2
}
```

---

Этот процесс позволяет гибко управлять загрузкой файлов, включая прямую загрузку в облачные хранилища и создание соответствующих записей в базе данных NocoBase.
