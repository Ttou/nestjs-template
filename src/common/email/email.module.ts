import { DynamicModule, Module } from "@nestjs/common";
import { ASYNC_OPTIONS_TYPE, ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE, TRANSPORT } from "./email.module-definition.js";
import { EmailService } from "./email.service.js";
import { EmailModuleOptions } from "./interfaces/email-module-options.interface.js";
import { createTransport } from 'nodemailer'

@Module({
    providers: [EmailService],
    exports: [EmailService]
})
export class EmailModule extends ConfigurableModuleClass {
    static forRoot(options: typeof OPTIONS_TYPE): DynamicModule {
        return {
            providers: [
                {
                    provide: TRANSPORT,
                    useFactory(options: EmailModuleOptions) {
                        return createTransport(options)
                    },
                    inject: [MODULE_OPTIONS_TOKEN]
                }
            ],
            ...super.forRoot(options),
        };
    }

    static forRootAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
        return {
            ...super.forRootAsync(options),
        };
    }
}