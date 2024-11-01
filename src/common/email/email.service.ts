import { Inject, Injectable } from '@nestjs/common'

import { MODULE_OPTIONS_TOKEN, TRANSPORT } from './email.module-definition.js'
import { EmailModuleOptions, Transporter } from './interfaces/email-module-options.interface.js'

@Injectable()
export class EmailService {
  constructor(
        @Inject(MODULE_OPTIONS_TOKEN) private readonly options: EmailModuleOptions,
        @Inject(TRANSPORT) private readonly transport: Transporter,
  ) { }

  /**
     * send
     */
  public async send() {

  }
}
