import { createConnection } from 'typeorm';

createConnection({
  type: 'postgres',
  port: 5432,
  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  ssl: true,
});
