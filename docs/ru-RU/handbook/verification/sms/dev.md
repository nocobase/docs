# Расширение SMS-провайдеров

Эта статья объясняет, как расширить функциональность SMS-провайдеров в функции [Аутентификация по SMS](./index.md) с помощью плагина.

## Клиентская часть

### Регистрация формы конфигурации

При настройке SMS-верификатора после выбора типа SMS-провайдера появляется соответствующая форма конфигурации. Эту форму необходимо зарегистрировать на клиентской стороне.

![](https://static-docs.nocobase.com/202503011221912.png)

Пример кода:

```ts
import { Plugin, SchemaComponent } from '@nocobase/client';
import PluginVerificationClient from '@nocobase/plugin-verification/client';
import React from 'react';

const CustomSMSProviderSettingsForm: React.FC = () => {
  return <SchemaComponent schema={{
    type: 'void',
    properties: {
      accessKeyId: {
        title: `{{t("Access Key ID", { ns: "${NAMESPACE}" })}}`,
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'TextAreaWithGlobalScope',
        required: true,
      },
      accessKeySecret: {
        title: `{{t("Access Key Secret", { ns: "${NAMESPACE}" })}}`,
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'TextAreaWithGlobalScope',
        'x-component-props': { password: true },
        required: true,
      },
    }
  }} />
}

class PluginCustomSMSProviderClient extends Plugin {
  async load() {
    const plugin = this.app.pm.get('verification') as PluginVerificationClient;
    plugin.smsOTPProviderManager.registerProvider('custom-sms-provider-name', {
      components: {
        AdminSettingsForm: CustomSMSProviderSettingsForm,
      },
    });
  }
}
```

## Серверная часть

### Реализация интерфейса отправки

Плагин верификации уже включает процесс генерации одноразовых паролей (OTP), поэтому разработчикам нужно только реализовать логику отправки сообщений.

Пример реализации:

```ts
class CustomSMSProvider extends SMSProvider {
  constructor(options) {
    super(options);
    // options содержит конфигурацию с клиента
    const options = this.options;
    // ...
  }

  async send(phoneNumber: string, data: { code: string }) {
    // Логика отправки SMS
    // ...
  }
}
```

### Регистрация типа верификации

После реализации интерфейса отправки его необходимо зарегистрировать.

```ts
import { Plugin } from '@nocobase/server';
import PluginVerificationServer from '@nocobase/plugin-verification';
import { tval } from '@nocobase/utils';

class PluginCustomSMSProviderServer extends Plugin {
  async load() {
    const plugin = this.app.pm.get('verification') as PluginVerificationServer;
    // Имя должно соответствовать клиентской части
    plugin.smsOTPProviderManager.registerProvider('custom-sms-provider-name', {
      title: tval('Кастомный SMS-провайдер', { ns: namespace }),
      provider: CustomSMSProvider,
    });
  }
}
```
