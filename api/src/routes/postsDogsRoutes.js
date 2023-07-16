const {Router} = require("express");
const postDogsHandler = require("../handlers/postDogsHandler");

const postDogsRoutes = Router();

postDogsRoutes.post("/", postDogsHandler);

module.exports= postDogsRoutes;