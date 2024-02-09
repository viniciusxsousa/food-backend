exports.up = knex => knex.schema.createTable("ingredients", table => {
    table.increments("id");
    table.text("name");
    table.integer("dishe_id").references("id").inTable("dishes");
})


exports.down = knex => knex.schema.dropTable("ingredients");
