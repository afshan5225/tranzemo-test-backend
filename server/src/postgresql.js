import knex from 'knex'

export const postgresql = app => {
  const config = app.get('postgresql')

  // Modify connection to include SSL
  const knexConfig = {
    client: config.client,
    connection: {
      connectionString: config.connection,
      ssl: { rejectUnauthorized: false }
    }
  }

  const db = knex(knexConfig)

  app.set('postgresqlClient', db)
}
