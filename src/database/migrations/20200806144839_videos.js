exports.up = function(knex) {
  return knex.schema.createTable('categories', function(table){
    table.increments('id')
  
    table.string('categoryName').notNullable()
    table.string('link').notNullable()
    table.string('color').notNullable()
})

};

exports.down = function(knex) {
  return knex.schema.dropTable('categories')

};