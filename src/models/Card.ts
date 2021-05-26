import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('cards')
class Card {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  readonly user_id: string;

  @Column()
  readonly name: string;

  @Column()
  readonly game: string;

  @Column()
  readonly image_url: string;

  @Column()
  readonly type: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Card };
