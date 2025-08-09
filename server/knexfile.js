import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  }
});

db.raw('SELECT 1')
  .then(() => {
    console.log('DB connection successful!');
    process.exit(0);
  })
  .catch(err => {
    console.error('DB connection failed:', err);
    process.exit(1);
  });
