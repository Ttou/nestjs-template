import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MulterModule } from '@nestjs/platform-express'

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory(configService: ConfigService) {
        return configService.getOrThrow('upload')
      },
      inject: [ConfigService],
    }),
  ],
})
export class UploadModule { }
