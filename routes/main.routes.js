const express = require("express");
const { login, dashBoard } = require("../controllers/main.controller");

const mainRouter = express.Router();

mainRouter.route("/dashboard").get(dashBoard);
mainRouter.route("/login").post(login);

module.exports = mainRouter;
