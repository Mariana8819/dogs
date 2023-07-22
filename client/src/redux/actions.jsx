import axios from "axios";

export function getCharacters(){
    return async function(dispatch){
        var json= await axios.get(`http:localhost:3001/dogs`);
        return dispatch({
            type: 'GET_CHARACTERS',
            payload: json.data
        })
    }            
}



//linea5<<//https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}&limit=10`)
    