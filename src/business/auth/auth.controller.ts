import { Controller, Get, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { AuthService } from './auth.service.js'

@ApiTags('鉴权接口')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiOperation({ summary: '测试接口' })
  @Get('test')
  public async test() {
    return 'Test'
  }

  @Post('login')
  public async login() {}

  @Post('logout')
  public async logout() {}
}
