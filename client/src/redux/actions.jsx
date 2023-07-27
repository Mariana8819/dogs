import axios from "axios";

export function getAllDogs(){
    return async function(dispatch){
        var json= await axios.get('http://localhost:3001/dogs');
        return dispatch({
            type: 'GET_ALL_DOGS',
            payload: json.data
        })
    }            
}

export function getNameDogs(name){
    return async function(dispatch){
        try{
            var json = await axios.get(`http://localhost:3001/dogs/?name=${name}`)
            return dispatch({
                type: 'GET_NAME_DOGS',
                payload: json.data
            })
        }catch(error){
            alert("Dog not found from the front")
        }
    }
}
export function getIdDogs(id){
    return async function(dispatch){
        var info = await axios.get(`http://localhost:3001/dogs/${id}`)
        return dispatch({
            type: 'GET_DETAIL_DOGS',
            payload: info.data
        });
    }
}
export function getTemperaments(){
    return async function(dispatch){
        var info = await axios.get('http://localhost:3001/temperament');
        return dispatch({
            type: 'GET_TEMPERAMENTS',
            payload: info.data
        });
    }
}
export function postDog(payload){
    return async function(){
        const response = await axios.post('http:localhost:3001/dogs', payload);
        console.log(response)
            return response;
    }
}
export function filterByTemperaments(payload){
    return{
        type: 'FILTER_BY _TEMPERAMENTS',
        payload
    }
}
export function filterDogsByWeight(payload){
    return{
        type: 'FILTER_BY_WEIGHT',
        payload
    }
}

export function orderByName(payload){
    return{
        type: 'FILTER_BY_ORDER',
        payload
    }
}
export function filterCreated(payload){
    return{
        type: 'FILTER_CREATED',
        payload
    }
}

//linea5<<//https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}&limit=10`)
    