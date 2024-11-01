import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MulterModule } from '@nestjs/platform-express'

import { UploadController } from './upload.controller.js'
import { UploadService } from './upload.service.js'

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory(configService: ConfigService) {
        return {
          ...configService.getOrThrow('upload'),
        }
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule { }
