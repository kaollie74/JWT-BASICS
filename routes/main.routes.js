const express = require("express");
const { login, dashBoard } = require("../controllers/main.controller");
const authMiddleware = require("../middleware/auth")


const mainRouter = express.Router();

mainRouter.route("/dashboard").get(authMiddleware,dashBoard);
mainRouter.route("/login").post(login);

module.exports = mainRouter;
