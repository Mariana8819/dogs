const axios= require("axios");
const {Temperament} =require("../db");

const getAllTemperaments = async(req,res)=>{
    const temperamentApi= await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=live_NMelfaSKgwUyrFqHbwgNS7pNBDYJT3YRP616SPWbeCo4hay45WibFnGY5tikiWZF`)

    const temperaments= temperamentApi.data.map(element => element.temperament)  //return[]

    const arrayTemperaments= Array.from(temperaments)
    console.log(temperaments);

    const temperamentEach =arrayTemperaments.map(element=>{
        for(let i=0; i< element.length; i++)return element[i]})
      //  console.log(temperamentEach)    //[[],[],[],..]

        temperamentEach.array.forEach(temperamentName => {
            Temperament.findOrCreate({
                where: {name: temperamentName}
            })            
        });
        const allTemperaments = await Temperament.findAll();
        res.send(allTemperaments);
};
module.exports= getAllTemperaments;