"use strict";

const Model = use("Model");

class CRUD extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = CRUD;
