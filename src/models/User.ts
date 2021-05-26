import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
class User {
  @PrimaryColumn()
  readonly steamid: string;

  @Column()
  readonly name: string;

  @Column()
  readonly avatar_url: string;

  @Column()
  readonly inventory_url: string;

  @Column()
  readonly trade_url: string;
}

export { User };
