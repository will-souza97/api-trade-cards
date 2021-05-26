import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  readonly steamid: string;

  @Column()
  readonly name: string;

  @Column()
  readonly avatar_url: string;

  @Column()
  readonly trade_url: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
