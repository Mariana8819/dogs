const express= require("express");
const {Dog, Temperament} = require('../db.js');
const axios = require('axios');
require('dotenv').config();

const getApiInfo = async(req, res)=>{
    const apiUrl =  axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=live_NMelfaSKgwUyrFqHbwgNS7pNBDYJT3YRP616SPWbeCo4hay45WibFnGY5tikiWZF`);
    const apiInfo = await apiUrl.data.map(dog=>{
        return {
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            height: dog.height.metric,   //{[imp],[metric]}??
            weight: dog.weight.metric,   //{[imp],[metric]}
            life_span: dog.life_span,    
            temperament: dog.temperament,        
    }
    })
    return apiInfo;
}

const getDBinfo = async(req, res)=>{
    return await Dog.findAll({
        include:{
            model: Temperament,
            attributes: ['name'],
            through:{
                attributes:[],
            }
        }
    })
}

const getAllDogs = async (req,res)=>{
    const infoApi = await getApiInfo();
    const infoDB = await getDBinfo();
    //return [...infoApi,...infoDB];
    const infoTOTAL = infoApi.concat(infoDB);
    return infoTOTAL;
};

module.exports= getAllDogs;