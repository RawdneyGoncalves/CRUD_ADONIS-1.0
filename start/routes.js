"use strict";

const Route = use("Route");

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

Route.group(() => {
  Route.resource("CRUD", "CRUDController")
    .apiOnly()
    .except("update");
}).middleware(["auth"]);
