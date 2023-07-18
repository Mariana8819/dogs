const {Router}= require("express");
const getTemperamentsHandler = require("../handlers/TemperamentsHandler");

const getTemperamentsRoutes = Router();

getTemperamentsRoutes.get("/", getTemperamentsHandler);

module.exports= getTemperamentsRoutes;