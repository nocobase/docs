# 概述

| Field Interface     | Field type             |
| ------------------- | ---------------------- |
| Single line text    | String                 |
| Long text           | text                   |
| Phone               | String                 |
| Email               | String                 |
| URL                 | String                 |
| Integer             | bigInt<br/>Integer          |
| Number              | double<br/>float<br/>decimal     |
| Percent             | double<br/>float<br/>decimal     |
| Password            | password               |
| Color               | String                 |
| Icon                | String                 |
| Checkbox            | boolean                |
| Single select       | String<br/>Enum<br/>Integer      |
| Multiple select     | Array<br/>JSON<br/>Set           |
| Radio group         | String<br/>Enum<br/>Integer      |
| Checkbox group      | Array<br/>JSON<br/>Set           |
| Markdown            | Text                   |
| Rich Text           | Text                   |
| Datetime            | DatetimeTz<br/>Datetime<br/>Date |
| Time                | TimeTz<br/>Time             |
| Created at          | DatetimeTz             |
| Last updated at     | DatetimeTz             |
| Point               | Point                  |
| Line                | Line                   |
| Circle              | Cirecle                |
| Polygon             | Polygon                |
| JSON                | JSON<br/>JSONB              |
|                     |                        |
| ID                  | integer                |
| uuid                | uuid                   |
| Table OID           | -                      |
| Sort                | Sort                   |
| Sequence            | sequence               |
| Formula             | Formula                |
|                     |                        |
| o2o                 | hasOne<br/>belongsTo        |
| o2m                 | hasMany                |
| m2o                 | belongsTo              |
| m2m                 | belongsToMany          |
|                     |                        |
| Collection selector | String                 |
| Snapshot            | json                   |
|                     |                        |
| China region        | belongsToMany          |
| Attachment          | belongsToMany          |
| Created by          | belongsTo              |
| Last updated by     | belongsTo              |
|                     |                        |
|                     | virtual                |
|                     | radio                  |
|                     | context                |
|                     | uid                    |
