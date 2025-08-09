export async function up(knex) {
  await knex.schema.createTable('details', table => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.enu('gender', ['male', 'female', 'other']).notNullable();
    table.boolean('deleted').defaultTo(false); 
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  await knex.schema.dropTable('details');
}
