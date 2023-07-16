const { Router } = require("express");
const { getDogsDetailHandler, getDogsHandler } = require("../handlers/getDogsHandler");

const getDogsRoutes= Router();

getDogsRoutes.get("/", getDogsDetailHandler);
getDogsRoutes.get("/", getDogsHandler);


module.exports = getDogsRoutes;
