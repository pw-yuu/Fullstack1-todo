exports.up = function(knex) {
    return knex.schema
        .createTable('todos', function(table) {
            table.increments('id')
            table.string('description')
        });
};

exports.down = function(knex) {
    return knex.schema.dropTable("transactions")
};
