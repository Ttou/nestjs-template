import { Inject, Injectable } from '@nestjs/common'

import { MODULE_OPTIONS_TOKEN } from './excel.module-definition.js'
import { ExcelModuleOptions } from './interfaces/excel-module-options.interface.js'

@Injectable()
export class ExcelService {
  constructor(
        @Inject(MODULE_OPTIONS_TOKEN) private readonly options: ExcelModuleOptions,
  ) { }

  /**
     * generate
     */
  public async generate() {

  }

  /**
     * parse
     */
  public async parse() {

  }
}
