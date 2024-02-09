exports.up = knex => knex.schema.createTable("dishes", table => {
    table.increments("id");
    table.text("name");
    table.text("description");
    table.integer("category").references("id").inTable("categories");
    table.float("price");
    table.text("picture").default(null);
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamo("updated_at").default(knex.fn.now());
})


exports.down = knex => knex.schema.dropTable("dishes")
