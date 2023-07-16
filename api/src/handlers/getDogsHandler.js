

// GET | /dogs
// router.get('/dogs', async(req, res)=>{
//     const alldogs = await getAllDogs;
// });

//GET | /dogs/:idRaza- {detalle}*getDogsRoutes.get('/dogs/:id',
const getDogsDetailHandler = async(req,res)=>{
    res.satatus(200).send("Dogs´s Detail");
};

//     const {id} = req.params;
//     const allDogsDetail = await getAllDogs()
//     if(id){
//         const dogFoundById = await allDogsDetail.filter(dogDetail=> dogDetail.id==id)
//         dogFoundById.length?
//         res.status(200).json(dogFoundById):
//         res.status(404).send('That dog was not found')
//     }
// });

//GET | /dogs/name?="..."-*-getDogsRoutes.get('/dogs', 
const getDogsHandler= async(req, res)=>{
    res.status(200).send("Here are the Dogs");
}
//     try{
//     const {name} = req.query;
//     const allDogs = await getAllDogs()
//     if(name){
//         const dogFoundByName = await allDogs.filter(
//             dogName=> dogName.name.toLowerCase().includes(name.toLowerCase()));
//             dogFoundByName.length?
//             res.status(200).json(dogFoundByName):
//             res.status(404).send('That dog was not found with that name');
//         }else{
//             res.status(200).send(allDogs)
//     }
// }catch(error){
//     res.status(400).json({error:error.message});
// }
// });

module.exports ={getDogsDetailHandler, getDogsHandler};