exports.up = function(knex) {
  return knex.schema.createTable('videos', function(table){
    table.increments('id').notNullable()
    table.integer('season_id').notNullable()
    table.string('title').notNullable()
    table.string('url').notNullable()
  
    table.foreign('season_id').references('season_number').inTable('seasons')
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable('videos')

};