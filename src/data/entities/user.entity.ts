import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export class UserEntity {
  @PrimaryKey()
  id: number

  @Property()
  username: string

  @Property()
  password: string

  @Property({ onCreate: () => new Date() })
  createdAt: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date
}
