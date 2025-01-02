# 密码策略

<PluginInfo licenseBundled="true" name="password-policy"></PluginInfo>

## 介绍

为所有用户设置密码规则，密码有效期和密码登录安全策略，管理锁定用户。

## 密码规则

![](https://static-docs.nocobase.com/202412281329313.png)

### 最小密码长度

设置密码的最小长度要求，最大长度为 64.

### 密码复杂度要求

支持以下选项：

- 必须包含字母和数字
- 必须包含字母，数字和符号
- 必须包含数字，大写和小写字母
- 必须包含数字，大写和小写字母，符号
- 必须包含以下字符的其中 3 种：数字、大写字母、小写字母和特殊字符
- 不限制

![](https://static-docs.nocobase.com/202412281331649.png)

### 密码不能包含用户名

设置密码是否能包含当前用户的用户名。

### 密码历史数量

记住用户最近使用的密码个数，用户修改密码时不能重复使用。0 代表不限制，最大数量为 24.

## 密码过期配置

![](https://static-docs.nocobase.com/202412281335588.png)

### 密码有效期

用户密码的有效期，密码过期后，需要管理员重新设置密码，用户才可以使用密码登录。如果有配置其他的登录方式，用户可以使用其他方式登录。

### 密码过期提示通知渠道

用户密码到期的 10 天内，用户每次登录时，发送提醒。默认发送到“密码过期提醒”的站内信渠道，可以在通知管理中管理渠道。

### 配置建议

由于密码过期可能导致账号无法登录，包括管理员账号，请及时修改密码，并在系统中设置多个可以修改用户密码的账号。

## 密码登录安全

设置无效密码登录尝试限制。

![](https://static-docs.nocobase.com/202412281339724.png)

### 最大无效密码登录尝试次数

设置用户在规定时间间隔内最多可以尝试登录次数。

### 最大无效密码登录时间间隔（秒）

设置计算用户最大无效登录次数的时间间隔，单位为秒。

### 锁定时间（秒）

设置用户超过无效密码登录限制以后，锁定用户的时间（0 代表不限制）。用户被锁定期间，将禁止以任何认证方式访问系统，包括 API keys. 如果需要主动解锁用户，可以参考 [用户锁定](./user-lockout.md)。

### 场景

#### 不限制

不限制用户无效密码尝试次数。

![](https://static-docs.nocobase.com/202412281343226.png)

#### 限制尝试频率，不锁定用户

例：用户每 5 分钟可以最多尝试登录 5 次。

![](https://static-docs.nocobase.com/202412281344412.png)

#### 超过限制后锁定用户

例：用户 5 分钟内连续 5 次无效密码登录，锁定用户 2 小时。

![](https://static-docs.nocobase.com/202412281344952.png)

### 配置建议

- 无效密码登录次数和时间间隔配置通常用于限制短时间内高频的密码登录尝试，防止暴力破解。
- 超过限制是否锁定用户需要结合实际的使用场景考虑。锁定时间设置可能被恶意利用，攻击者可能针对目标账号故意多次输入错误密码，迫使账号被锁定，无法正常使用。可以结合 IP 限制，API 频率限制等手段来防范这类攻击。
- 由于账号锁定将无法进入系统，包括管理员账号，可以在系统中设置多个有权限解锁用户的账号。