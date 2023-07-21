const Dog = require("../models/Dog");
const getAllDogs = require("./getAllDogsControllers");

const getDogById =async(id,res)=>{
    const allDogsDetail = await getAllDogs();  
    const dog= allDogsDetail.find( dog => dog.id == id);
    if(dog){
        return dog;
        }else{
            throw new Error ("Dog is not found with that id");
            }
        };

const getDogByName = async(name)=>{
    //try{
      const allDogs = await getAllDogs();
      console.log("este setImmediate",allDogs);
    // if(name){
         const dogFoundByName = allDogs.filter(
             dogName=> dogName.name.toLowerCase().includes(name.toLowerCase()));
             return dogFoundByName;
             //.length?
             
             //res.status(200).json(dogFoundByName):
             //res.status(404).send('That dog was not found with that name');
       //  }else{
          //   res.status(200).send(allDogs)
     }
//  }catch(error){
//      res.status(400).json({error:error.message});
//  }
 //}
 
 module.exports={getDogById,getDogByName};






// const getDogByName = async(name,res)=>{  
//    //const infoApii = await infoApi();

//    //let dogBreed= await allDogs.filter((dog) => dog.breed.toLowerCase()==breed.toLowerCase()
//     const dogFoundByName = await allDogs.filter(           // [d,d,d,d,d,]
//         //dogName=> dogName.name.toLowerCase().includes(name.toLowerCase()));
//         dogName=> dogName.name.toLowerCase()==name.toLowerCase()));
//         const dogsDb = await Dog.findAll({
//             where: {name : name}     // {atributo, valor}
//         });
//         return [...dogFoundByName, ...dogsDb];   
//     };

  //  module.exports={getDogById,getDogByName};

//********************************************** */
    // if(dogFoundByName.length > 0){
        //     return dogFoundByName;
        //     }else{
        //         throw new Error("That dog was not found with that name");
        //         }};







    //          dogFoundByName.length?
    //          res.status(200).json(dogFoundByName):
    //          res.status(404).send('That dog was not found with that name');
    //      }else{
    //          res.status(200).send(allDogs)
    //  }
 //}}
 




//     try{
//         const allDogs = await getAllDogs();
//     if(id){
//         const dogFoundById = allDogs.filter(
//             dogDetail=> dogDetail.id==id);
//             return dogFoundById.length ?
//             res.status(200).json(dogFoundById) : 
//             res.status(404).send('That dog was not found');
//         // if(dogFoundById.length){
//         //     return res.status(200).json(dogFoundById);
//         // }else{
//         //     return res.status(404).send('That dog was not found');
//         //     }
//             }
//     }catch(error){
//          res.status(400).json({error:error.message});
//     }
// }

// const getDogByName = async(name,res)=>{
//    try{
//      const allDogs = await getAllDogs();
//     if(name){
//         const dogFoundByName = allDogs.filter(
//             dogName=> dogName.name.toLowerCase().includes(name.toLowerCase()));
//             return dogFoundByName.length?
//             res.status(200).json(dogFoundByName):
//             res.status(404).send('That dog was not found with that name');
        
//             // if(dogFoundByName.length){
//         //     return res.status(200).json(dogFoundByName);
//         // }else{
//         //      return res.status(404).send('That dog was not found with that name');
//         //      }
//         }else{
//             res.status(200).send(allDogs);
//             }
//     }catch(error){
//         res.status(400).json({error:error.message});
//         }
// };



//********************************* */
    // const allDogsDetail = await getAllDogs();  
    // const dog=await allDogsDetail.find( dog => dog.id == id);
    // if(dog){
    //     return dog;
    // }else{
    //     throw new Error ("Dog is not found with that id");
    // }
    
//*************************** */
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
 