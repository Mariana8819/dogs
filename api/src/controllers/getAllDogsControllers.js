const express= require("express");
const {Dog, Temperament} = require('../db.js');
const axios = require('axios');
require('dotenv').config();

const getAllDogs = async (req, res) => {
    let infoApi = [];
    try {
      const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds&limit=10`);
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
    } catch (error) {
        res.status(400).json({error:error.message});
     // console.error(error);
    }
  
    const dbInfo = await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ['name'],
        through: {
          attributes: [],
        },
      },
    });
  
    const allDogsInfo = infoApi.concat(dbInfo);
    return allDogsInfo;
  };

module.exports= getAllDogs;




// // const getApiInfo = async(req, res)=>{
// //    // console.log("soy el 1");
// //     const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=live_NMelfaSKgwUyrFqHbwgNS7pNBDYJT3YRP616SPWbeCo4hay45WibFnGY5tikiWZF&limit=10`);
// //     //console.log("soy el 2");
// //     //const data= apiUrl.data;
// //     console.log(apiUrl.data);
// //     const apiInfo = await apiUrl.data.map((dog)=>{
      
// //         return {
// //             id: dog.id,
// //             image: dog.image.url,
// //             name: dog.name,
// //             height: dog.height.metric,   //{[imp],[metric]}??
// //             weight: dog.weight.metric,   //{[imp],[metric]}
// //             life_span: dog.life_span,    
// //             temperament: dog.temperament,        
// //     }
// //     })
// //     res.status(200).send(apiInfo);
// //     //return apiInfo;
// // }

// // const getDBinfo = async(req, res)=>{
// //     return await Dog.findAll({
// //         include:{
// //             model: Temperament,
// //             attributes: ['name'],
// //             through:{
// //                 attributes:[],
// //             }
// //         }
// //     })
// // }

// const getAllDogs = async (req,res)=>{
//     const infoApi = await getApiInfo();
//     const infoDB = await getDBinfo();
//     return [...infoApi,...infoDB];
//     //const infoTOTAL = infoApi.concat(infoDB);
//    // return infoTOTAL;
// };

