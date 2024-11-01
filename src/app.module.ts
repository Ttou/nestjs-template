import { MikroOrmModule } from '@mikro-orm/nestjs'
import { SqliteDriver } from '@mikro-orm/sqlite'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { ApiModule } from './api.module.js'
import { ExcelModule } from './common/excel/excel.module.js'
import configuration from './configuration.js'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MikroOrmModule.forRoot({
      driver: SqliteDriver,
      dbName: 'db.sqlite3',
      entities: ['./dist/database/entities'],
      entitiesTs: ['./src/database/entities'],
    }),
    ExcelModule.forRoot({
      isGlobal: true,
    }),
    ApiModule,
  ],
})
export class AppModule { }
