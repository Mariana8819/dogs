const { getDogById, getDogByName } = require("../controllers/getDogsControllers");

//GET | /dogs/:idRaza- {detalle}*getDogsRoutes.get('/dogs/:id',
const getDogsDetailHandler = async(req,res)=>{
    const {id} =req.params;
   
    try {
        const dogById= await getDogById(id);
        res.status(200).json(dogById);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};


// GET | /dogs
//GET | /dogs/name?="..."-*-getDogsRoutes.get('/dogs', 
const getDogsHandler= async(req, res)=>{
    const {name} = req.query;
    try {
        const dogByName= await getDogByName(name);
        res.status(200).json(dogByName);
    } catch (error) {
        res.status(400).json({error:error.message});        
    }
}


module.exports ={getDogsDetailHandler, getDogsHandler};