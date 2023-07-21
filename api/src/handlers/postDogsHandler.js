const postCreateDogControllers = require("../controllers/postCreateDogControllers");

// POST | /dogs -*-postDogsRoutes.post('/dogs', 
const postDogsHandler = (req,res)=>{
    const {image,name,height,weight,life_span,temperament} = req.body;
    try {
        const response=  postCreateDogControllers(id,image,name,height,weight,life_span,temperament);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
        
    }
    }

module.exports = postDogsHandler;