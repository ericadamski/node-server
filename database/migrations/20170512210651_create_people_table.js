
exports.up = function(knex, Promise) {
    return knex.schema.createTable('people', table => {
        table.increments('id').primary();
        table.string('name');
        table.string('email').unique();
        table.string('password');
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('people');
};
