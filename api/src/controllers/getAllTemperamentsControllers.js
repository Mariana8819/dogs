const axios= require("axios");
const {Temperament} =require("../db");

const getAllTemperaments = async(req,res)=>{    
    const temperaments = [];
    const temperamentApi= await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=live_NMelfaSKgwUyrFqHbwgNS7pNBDYJT3YRP616SPWbeCo4hay45WibFnGY5tikiWZF`)
    const temperamentsFound= temperamentApi.data.forEach(dog => {
        const temperamentDog = dog.temperament ? dog.temperament.split(", ") : [];   //se divide en un array utilizando el método `split(", ") , de lo contrario, se asigna un array vacío  [] . Esto asegura que  temperamentDog  siempre sea un array, incluso si  dog.temperament` es nulo o indefinido.
                if(temperamentDog){
            for(let i=0; i< temperamentDog.length; i++){
                !temperaments.includes(temperamentDog[i]) 
                ? temperaments.push(temperamentDog[i]) 
                : null
                };
          }
        })

        temperaments.array.forEach(temperamentName => {
            Temperament.findOrCreate({
                where: {name: temperamentName}
            })            
        });
        return Temperament.findAll();
    }

module.exports= getAllTemperaments;


// const axios= require("axios");
// const {Temperament} =require("../db");

// const getAllTemperaments = async(req,res)=>{
//     const temperamentApi= await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=live_NMelfaSKgwUyrFqHbwgNS7pNBDYJT3YRP616SPWbeCo4hay45WibFnGY5tikiWZF`)
    
//     const arrayTemperaments= Array.from(temperamentApi)

//     const temperaments= arrayTemperaments.data.map(element => element.temperament)  //return[] 

//     const temperamentEach =temperaments.map(element=>{
//         for(let i=0; i< element.length; i++)return element[i]})
//       //  console.log(temperamentEach)    //[[],[],[],..]

//         temperamentEach.array.forEach(temperamentName => {
//             Temperament.findOrCreate({
//                 where: {name: temperamentName}
//             })            
//         });
//         const allTemperaments = await Temperament.findAll();
//         res.send(allTemperaments);
// };
// module.exports= getAllTemperaments;