import { ConfigurableModuleBuilder } from '@nestjs/common'

import { EmailModuleOptions } from './interfaces/email-module-options.interface.js'

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE, ASYNC_OPTIONS_TYPE }
    = new ConfigurableModuleBuilder<EmailModuleOptions>()
      .setExtras(
        {
          isGlobal: true,
        },
        (definition, extras) => ({
          ...definition,
          global: extras.isGlobal,
        }),
      )
      .setClassMethodName('forRoot')
      .setFactoryMethodName('createEmailOptions')
      .build()

export const TRANSPORT = Symbol('TRANSPORT')
