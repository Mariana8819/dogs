const { Router } = require('express');
const postDogsRoutes = require('./postsDogsRoutes.js');
const getDogsRoutes = require('./getDogsRoutes.js');
const getTemperamentsRoutes = require('./getTemperamentsRoutes.js');



//require('dotenv').config();
//const {Dog, Temperament} = require('../db.js');
//const axios = require('axios');



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/posts", postDogsRoutes);
router.use("/get", getDogsRoutes);
router.use("/get", getTemperamentsRoutes);

module.exports= router;