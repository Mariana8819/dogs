 const {Dog, Temperament} =require("../db");

const postCreateDogControllers = async(image,name,height,weight,life_span,temperament)=>{
    //const {id,image,name,height,weight,life_span,temperament} = req.body;
    const dogCreated = await Dog.create({
        id,
        image,
        name,
        height,
        weight,
        life_span,
    })
    const temperamentDB = await Temperament.findOne({        //hago la relacion aparte creando una nva const,busco en mi modelo T todos los name que coincidan x query
        where:{
            name: temperament                                // q me llega x body
        }
    });
    if(temperamentDB){
     await dogCreated.addTemperament(temperamentDB);
    }                  //met d sequelize q m trae de la tabla Temperament esa info(temperamentDB)
    res.send('Dog created successfully');
};

module.exports = postCreateDogControllers;


// const postDog = async ({
//     id,
//     image,
//     name,
//     height,
//     weight,
//     life_span,
//     temperament
// }) => {
//     const dogExist = await Dog.findOne({ where: { name } });
//     if (dogExist) {
//         throw new Error("Dog already exists");
//     } else {
//         const temperamentDB = await Temperament.findAll({
//             where: { temperament },
//         });
//         const temperamentxxx = temperamentDB.map(
//             temp => temp.dataValues.temperament
//         );
//         const temperamentjoin = temperamentxxx.join(",");
//         let createDog = await Dog.create({
//             id,
//             image,
//             name,
//             height,
//             weight,
//             life_span,
//             temperament: temperamentjoin,
//         });
//         createDog.addTemperament(temperamentDB);
//     }
// }
// module.exports = postDog;