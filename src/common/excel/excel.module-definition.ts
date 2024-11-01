import { ConfigurableModuleBuilder } from '@nestjs/common';
import { ExcelModuleOptions } from './interfaces/excel-module-options.interface.js';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE, ASYNC_OPTIONS_TYPE } =
    new ConfigurableModuleBuilder<ExcelModuleOptions>()
        .setExtras(
            {
                isGlobal: true,
            },
            (definition, extras) => ({
                ...definition,
                global: extras.isGlobal,
            })
        )
        .setClassMethodName('forRoot')
        .setFactoryMethodName('createExcelOptions')
        .build();