import { Module } from '@nestjs/common'

import { ConfigurableModuleClass } from './excel.module-definition.js'
import { ExcelService } from './excel.service.js'

@Module({
  providers: [ExcelService],
  exports: [ExcelService],
})
export class ExcelModule extends ConfigurableModuleClass { }
