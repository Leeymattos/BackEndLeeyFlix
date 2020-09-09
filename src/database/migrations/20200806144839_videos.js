exports.up = function(knex) {
  return knex.schema.createTable('seasons', function(table){
    table.increments('id')
  
    table.string('season_number').notNullable()
    table.string('link').notNullable()
    table.string('color').notNullable()
})

};

exports.down = function(knex) {
  return knex.schema.dropTable('seasons')

};