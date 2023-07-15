const { Router } = require('express');
const {Dog, Temperament} = require('../db.js');
const axios = require('axios');
const {API_KEY} = process.env;
require('dotenv').config();


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async(req, res)=>{
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=live_NMelfaSKgwUyrFqHbwgNS7pNBDYJT3YRP616SPWbeCo4hay45WibFnGY5tikiWZF`);
    const apiInfo = await apiUrl.data.map(dog=>{
        return {
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            height: dog.height,   //{[imp],[metric]}??
            weight: dog.weight,   //{[imp],[metric]}
            life_span: dog.life_span,            
        }
    })
    return apiInfo;
}

const getDBinfo = async(req, res)=>{
    return await Temperament.findAll({
        include:{
            model: Temperament,
            attributes: ['id','name'],
            through:{
                attributes:[],
            }
        }
    })
}

const getAllDogs = async (req,res)=>{
    const infoApi = Array.from(getApiInfo);
    const infoDB = getDBinfo;
    //return [...infoApi,...infoDB];
    const infoTOTAL = infoApi.concat(infoDB);
    return infoTOTAL;
}

//GET | /dogs/:idRaza- {detalle}
router.get('/dogs/:id', async(req,res)=>{
    const {id} = req.params;
    const allDogsDetail = await getAllDogs()
    if(id){
        const dogFoundById = await allDogsDetail.filter(dogDetail=> dogDetail.id==id)
        dogFoundById.length?
        res.status(200).json(dogFoundById):
        res.status(404).send('That dog was not found')
    }
});

//GET | /dogs/name?="..."
router.get('/dogs', async(req, res)=>{
    const {name} = req.query;
    const allDogs = await getAllDogs()
    if(name){
        const dogFoundByName = await allDogs.filter(
            dogName=> dogName.name.toLowerCase().includes(name.toLowerCase()));
            dogFoundByName.length?
            res.status(200).json(dogFoundByName):
            res.status(404).send('That dog was not found with that name');
        }else{
            res.status(200).send(allDogs)
    }
});

// POST | /dogs
router.post('/dogs', async(req,res)=>{
    const {id,image,name,height,weight,life_span,temperament} = req.body;
    const dogCreated = await Dog.create({
        id,
        image,
        name,
        height,
        weight,
        life_span,
    })
    const temperamentDB = await Temperament.findAll({        //hago la relacion aparte creando una nva const,busco en mi modelo T todos los name que coincidan x query
        where:{
            name: temperament                                // q me llega x body
        }
    })
    dogCreated.addTemperament(temperamentDB)                  //met d sequelize q m trae de la tabla Temperament esa info(temperamentDB)
    res.send('Dog created succesfully')
});

//GET | /temperaments--[]c/todos los temperamentos existentes
router.get('/temperaments', async(req, res)=>{
    const temperamentApi= await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=live_NMelfaSKgwUyrFqHbwgNS7pNBDYJT3YRP616SPWbeCo4hay45WibFnGY5tikiWZF`)

    const temperaments= temperamentApi.data.map(element => element.temperament)  //return[]

    const temperamentEach =temperaments.map(element=>{
        for(let i=0; i< element.length; i++)return element[i]})
        console.log(temperamentEach)    //[[],[],[],..]

        temperamentEach.array.forEach(temperamentName => {
            Temperament.findOrCreate({
                where: {name: temperamentName}
            })            
        });
        const allTemperaments = await Temperament.findAll();
        res.send(allTemperaments);
})

module.exports = router;
