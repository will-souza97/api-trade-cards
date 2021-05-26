import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsers1621977697483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'steamid',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'avatar_url',
            type: 'varchar',
          },
          {
            name: 'inventory_url',
            type: 'varchar',
          },
          {
            name: 'trade_url',
            type: 'varchar',
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
