const getAllDogs =require("./getAllDogsControllers")

const getDogById =async(id)=>{        
    const allDogsDetail = await getAllDogs();  
    const dog=await allDogsDetail.find( dog => dog.id == id);
    if(dog){
        return dog;
    }else{
        throw new Error ("Dog is not found with that id");
    }
    }
    
    const getDogByName = async(name)=>{
   try{
     const allDogs = await getAllDogs();
    if(name){
        const dogFoundByName = await allDogs.filter(
            dogName=> dogName.name.toLowerCase().includes(name.toLowerCase()));
            dogFoundByName.length?
            res.status(200).json(dogFoundByName):
            res.status(404).send('That dog was not found with that name');
        }else{
            res.status(200).send(allDogs)
    }
}catch(error){
    res.status(400).json({error:error.message});
}
}

module.exports={getDogById,getDogByName};


//     if(id){
//         const dogFoundById = await allDogsDetail.filter(dogDetail=> dogDetail.id==id)
//         dogFoundById.length?
//         res.status(200).json(dogFoundById):
//         res.status(404).send('That dog was not found')
//     }
// }

// const getDogByName = async(name)=>{
//     try{
//       const allDogs = await getAllDogs();
//      if(name){
//          const dogFoundByName = await allDogs.filter(
//              dogName=> dogName.name.toLowerCase().includes(name.toLowerCase()));
//              dogFoundByName.length?
//              res.status(200).json(dogFoundByName):
//              res.status(404).send('That dog was not found with that name');
//          }else{
//              res.status(200).send(allDogs)
//      }
//  }catch(error){
//      res.status(400).json({error:error.message});
//  }
//  }
 