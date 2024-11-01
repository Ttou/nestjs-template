import { AuthController } from './auth/auth.controller.js'
import { AuthModule } from './auth/auth.module.js'
import { UploadModule } from './upload/upload.module.js'

export const controllers = {
  AuthController,
}

export const modules = {
  AuthModule,
  UploadModule,
}
