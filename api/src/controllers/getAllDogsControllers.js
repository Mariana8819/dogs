// const express= require("express");
// const {Dog, Temperament} = require('../db.js');
// const axios = require('axios');
// const {API_KEY} = process.env
// require('dotenv').config();

// const getApiInfo = async(req, res)=>{
//     const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
//       //`https://api.thedogapi.com/v1/breeds?api_key=live_NMelfaSKgwUyrFqHbwgNS7pNBDYJT3YRP616SPWbeCo4hay45WibFnGY5tikiWZF&limit=10`);
    
//     const apiInfo = await apiUrl.data.map((dog)=>{
// console.log(apiInfo);
//         return {
//             id: dog.id,
//             image: dog.image.url,
//             name: dog.name,
//             height: dog.height.metric,   
//             weight: dog.weight.metric,   
//             life_span: dog.life_span,
//             temperament: dog.temperament,
//     }
//     })
//       return apiInfo;
// }

// const getDBinfo = async(req, res)=>{
//     return await Dog.findAll({
//         include:{
//             model: Temperament,
//             attributes: ['name'],
//             through:{
//                 attributes:[],
//             }
//         }
//     })
// }

// // const infoCleaner =(arr)=>{
// //     arr.map(dog=>{
// //         return{
// //             id: dog.id,
// //             name: dog.name,
// //             image: dog.image,
// //             height: dog.height,
// //             weight: dog.weight,
// //             life_span: dog.life_span,
// //             temperament: dog.temperament,
// //         }
// //     })
// // };

// const getAllDogs = async (req,res)=>{
//     const infoApi = await getApiInfo();    
//     const infoDB = await getDBinfo();
//     // const dogApi =infoCleaner(infoApi);
//     //console.log( infoApi, infoDB, dogApi);
//   //  return [...infoDB,...dogApi];
//      const infoTOTAL = infoApi.concat(infoDB);
//      return infoTOTAL;
// };

// module.exports= {getAllDogs};
//     //infoCleaner, getDBinfo, getApiInfo};




//otra opcion /////////////////////////////////////

const express= require("express");
const {Dog, Temperament} = require('../db.js');
const axios = require('axios');
const {API_KEY} = process.env
require('dotenv').config();

const getAllDogs = async () => {
    //let infoApi = [];
    //try {
      const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}&limit=10`);
      //https://api.thedogapi.com/v1/breeds&limit=10`);
      // ?api_key=live_NMelfaSKgwUyrFqHbwgNS7pNBDYJT3YRP616SPWbeCo4hay45WibFnGY5tikiWZF&limit=10&page=0`);
      const infoApi = apiUrl.data.map((dog) => {
        return {
          id: dog.id,
          image: dog.image.url,
          name: dog.name,
          height: dog.height.metric,
          weight: dog.weight.metric,
          life_span: dog.life_span,
          temperament: dog.temperament,
        };
      });
      
      //console.log(infoApi);
    // } catch (error) {
    //    // res.status(400).json({error:error.message});
    //   console.error(error);
    // }

    const dbInfo = await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ['id','name'],
        through: {
          attributes: [],
        },
      },
    });
    const allInfo= [...infoApi,...dbInfo];
    console.log(allInfo);
    return allInfo;

    // const allDogsInfo = infoApi.concat(dbInfo);
    // return allDogsInfo;
  };

module.exports= getAllDogs;

