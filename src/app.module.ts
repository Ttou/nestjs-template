import { MikroOrmModule } from '@mikro-orm/nestjs'
import { SqliteDriver } from '@mikro-orm/sqlite'
import { Module } from '@nestjs/common'

import { ApiModule } from './api.module.js'

@Module({
  imports: [
    MikroOrmModule.forRoot({
      driver: SqliteDriver,
      dbName: 'db.sqlite3',
      entities: ['./dist/data/entities'],
      entitiesTs: ['./src/data/entities'],
    }),
    ApiModule,
  ],
})
export class AppModule {}
