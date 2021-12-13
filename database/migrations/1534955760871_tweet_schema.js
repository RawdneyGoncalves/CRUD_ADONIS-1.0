"use strict";

const Schema = use("Schema");

class CRUDSchema extends Schema {
  up() {
    this.create("CRUD", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("content", 240).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("CRUD");
  }
}

module.exports = CRUDSchema;
