const {Router}= require("express");
const getTemperamentsHandler = require("../handlers/getTemperamentsHandler");

const getTemperamentsRoutes = Router();

getTemperamentsRoutes.get("/", getTemperamentsHandler);

module.exports= getTemperamentsRoutes;