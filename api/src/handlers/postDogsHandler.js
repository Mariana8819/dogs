


// POST | /dogs -*-postDogsRoutes.post('/dogs', 
const postDogsHandler = (req,res)=>{
    res.status(200).send("Created dog");
}

//     const {id,image,name,height,weight,life_span,temperament} = req.body;
//     const dogCreated = await Dog.create({
//         id,
//         image,
//         name,
//         height,
//         weight,
//         life_span,
//     })
//     const temperamentDB = await Temperament.findAll({        //hago la relacion aparte creando una nva const,busco en mi modelo T todos los name que coincidan x query
//         where:{
//             name: temperament                                // q me llega x body
//         }
//     })
//     dogCreated.addTemperament(temperamentDB)                  //met d sequelize q m trae de la tabla Temperament esa info(temperamentDB)
//     res.send('Dog created succesfully')
// });

module.exports = postDogsHandler;