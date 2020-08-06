exports.up = function(knex) {
  return knex.schema.createTable('videos', function(table){
    table.increments('id').notNullable()
    table.integer('categories_id').notNullable()
    table.string('title').notNullable()
    table.string('url').notNullable()
  
    table.foreign('categories_id').references('id').inTable('categories')
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable('videos')

};