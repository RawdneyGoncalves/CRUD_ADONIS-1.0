"use strict";

const Crud = use("App/Models/CRUD");

/**
 * Resourceful controller for interacting with Cruds
 */
class CrudController {
  /**
   * Show a list of all Cruds.
   * GET Cruds
   */
  async index() {
    const Cruds = await Crud.query()
      .with("user")
      .fetch();

    return Cruds;
  }

  /**
   * Create/save a new Crud.
   * POST Cruds
   */
  async store({ request, auth }) {
    const data = request.only(["content", "Crud_id"]);
    const Crud = await Crud.create({ user_id: auth.user.id, ...data });

    return Crud;
  }

  /**
   * Display a single Crud.
   * GET Cruds/:id
   */
  async show({ params }) {
    const Crud = await Crud.findOrFail(params.id);

    return Crud;
  }

  /**
   * Delete a Crud with id.
   * DELETE Cruds/:id
   */
  async destroy({ params, auth }) {
    const Crud = await Crud.findOrFail(params.id);

    if (Crud.user_id !== auth.user.id) {
      return response.status(401);
    }

    await Crud.delete();
  }
}

module.exports = CrudController;
