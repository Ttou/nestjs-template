import { Module } from '@nestjs/common';
import { ApiModule } from './api.module.js';

@Module({
  imports: [ApiModule],
})
export class AppModule {}
