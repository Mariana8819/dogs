const express= require("express");
const {Dog, Temperament} = require('../db.js');
const axios = require('axios');
//const {API_KEY} = process.env
require('dotenv').config();

const getAllDogs = async () => {
    //let infoApi = [];
    //try {
      const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?limit=8`);
      //jjgjjg http://localhost:3001/dogs'
        //`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}&limit=10`);
      //https://api.thedogapi.com/v1/breeds&limit=10`);
      // GGFFG?api_key=live_NMelfaSKgwUyrFqHbwgNS7pNBDYJT3YRP616SPWbeCo4hay45WibFnGY5tikiWZF&limit=10&page=0`);
      const infoApi = apiUrl.data.map((dog) => {
        return {
          id: dog.id,
          image: dog.image.url,
          name: dog.name,
          height: dog.height.metric,
          weight: dog.weight.metric,
          life_span: dog.life,
          temperament: dog.temperament,
        };
      });
      
      //console.log(infoApi);
    // } catch (error) {
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

