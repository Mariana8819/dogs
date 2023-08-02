// import axios from "axios";

// export const GET_ALL_DOGS = 'GET_ALL_DOGS';
// export const GET_NAME_DOGS = 'GET_NAME_DOGS';
// export const GET_DETAIL_DOGS = 'GET_DETAIL_DOGS';
// export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
// export const POST_DOG = 'POST_DOG';
// export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS';
// export const FILTER_BY_WEIGHT = 'FILTER_BY_WEIGHT';
// export const FILTER_BY_ORDER = 'FILTER_BY_ORDER';
// export const FILTER_CREATED = 'FILTER_CREATED';

// export function getAllDogs(){
//     return async function(dispatch){
//         var json= await axios.get('http://localhost:3001/dogs');
//         return dispatch({
//             type: GET_ALL_DOGS,
//             payload: json.data
//         })
//     }            
// }

// export function getNameDogs(name){
//     return async function(dispatch){
//         try{
//             var json = await axios.get(`http://localhost:3001/dogs/?name=${name}`)
//             return dispatch({
//                 type: GET_NAME_DOGS,
//                 payload: json.data
//             })
//         }catch(error){
//             const dogsNotFound=[]
//             return dispatch({
//                 type: GET_NAME_DOGS,
//                 payload:dogsNotFound
//             })
//         }
//     }
// }
// export function getIdDogs(id){
//     return async function(dispatch){
//         try{
//         var info = await axios.get(`http://localhost:3001/dogs/${id}`)
//         return dispatch({
//             type: GET_DETAIL_DOGS,
//             payload: info.data
//         });
//     }catch(error){
//          alert("No existe el perro con el ID indicado")   //console.log(error);
//     }
//   }
// };

// export function getTemperaments(){
//     return async function(dispatch){
    
//         var info = await axios.get('http://localhost:3001/temperaments');
//         return dispatch({
//             type: GET_TEMPERAMENTS,
//             payload: info.data
//         });
//     }
// }
// export function postDog(payload){
//     return async function(dispatch){
//         try{
//         const response = await axios.post('http:localhost:3001/dogs', payload);
//         console.log(response);
//             return dispatch({
//                 type: POST_DOG,
//                 payload: response.data
//             })
//     }catch(error){
//         console.log(error);
//     }
//   }
// };
// export function filterByTemperaments(payload){
//     console.log(payload)
//     return {
//         type: FILTER_BY_TEMPERAMENTS,
//         payload
//     }
// };

// export function filterByWeight(payload){
//     console.log(payload)
//     return { 
//           type: FILTER_BY_WEIGHT, 
//           payload
//     }
// }

// export function filterByOrder(payload){
//     console.log(payload)
//     return{
//         type: FILTER_BY_ORDER,
//         payload
//     }
// }

// export function filterCreated(payload){
//     console.log(payload)
//     return{
//         type: FILTER_CREATED,
//         payload
//     }
// }

//*************************************************************** */
//***************///************///******************///********** */ */ */ */
//linea5<<//https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}&limit=10`)
    //    try{
//         let dogsSorted =[]
//         if(value ==="asc"){
//             dogsSorted = allDogs.sort((a,b)=>{
//                 if(a.name < b.name){return -1}
//                 if(a.name > b.name){return 1}
//                 return 0;
//             })
//         }if( value === "desc"){
//             dogsSorted = allDogs.sort((a,b)=>{
//                 if(a.name > b.name){return -1}
//                 if(a.name < b.name){return 1}
//                 return 0;
//             })
//         }
//         return function(dispatch){
//             dispatch({
//                 type: FILTER_BY_ORDER,
//                 payload: dogsSorted
//             })
//         }
//     }catch(error){
//         throw new Error(error);
//     }
// }
// export function filterDogsByWeight(allDogs, value){
//     case ORDER_BY_WEIGHT:
//   const allDogsFilterWeight = state.allDogs;
//   let sortedArrPeso;

//   if (action.payload === "Peso") {
//     sortedArrPeso = allDogsFilterWeight;
//   } else {
//     sortedArrPeso = state.dogs.sort((a, b) => {
//       const weightA = Number(a.weight.split(" ")[0]);
//       const weightB = Number(b.weight.split(" ")[0]);

//       if (action.payload === "Menor peso") {
//         return weightA - weightB;
//       } else {
//         return weightB - weightA;
//       }
//     });
//   }

//   return {
//     ...state,
//     dogs: sortedArrPeso,
//   };
//     return function (dispatch) {
//       dispatch({ 
//         type: FILTER_BY_WEIGHT, 
//         payload: dogsSorted 
//       });
//     };
//   } catch (error) {
//       throw new Error(error);
//   };
// };

//********************************************************************
// */
import axios from "axios";

export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_NAME_DOGS = 'GET_NAME_DOGS';
export const GET_DETAIL_DOGS = 'GET_DETAIL_DOGS';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const POST_DOG = 'POST_DOG';
export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS';
export const FILTER_BY_WEIGHT = 'FILTER_BY_WEIGHT';
export const FILTER_BY_ORDER = 'FILTER_BY_ORDER';
export const FILTER_CREATED = 'FILTER_CREATED';
export const RESET_DOG='RESET_DOG';
export const SET_PAGE='SET_PAGE';
export const FILTER ='FILTER';
export const SET_LOADING= 'SET_LOADING';


export function getAllDogs(){
    return async function(dispatch){
        var json= await axios.get('http://localhost:3001/dogs');
        return dispatch({
            type: GET_ALL_DOGS,
            payload: json.data
        })
    }            
}

export function getNameDogs(name){
    return async function(dispatch){
        try{
            var json = await axios.get(`http://localhost:3001/dogs/?name=${name}`)
            return dispatch({           
                type: GET_NAME_DOGS,
                payload: json.data
            })
        }catch(error){
            const dogsNotFound=[]
            return dispatch({
                type: GET_NAME_DOGS,
                payload:dogsNotFound
              })
        }
    }
}

export function getIdDogs(id){
    return async function(dispatch){
        try{
        var info = await axios.get(`http://localhost:3001/dogs/${id}`)
        return dispatch({
            type: GET_DETAIL_DOGS,
            payload: info.data
        });
    }catch( error){
        alert("No existe el perro con el ID indicado");
    }   
  }
};

export function getTemperaments(){
    return async function(dispatch){
        try{
        var info = await axios.get('http://localhost:3001/temperaments');
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: info.data
        });
    }catch(error){
        alert("Mi base de datos no tiene los temperamentos solicitados");
    }
   }
};
export function postDog(payload){
    return async function(dispatch){
        try{
        const response = await axios.post('http:localhost:3001/dogs', payload);        
            return dispatch({
                type: POST_DOG,
                payload: response.data
            })
    }catch(error){
        alert("No se pudo crear el perro");
    }
  }
};
export function filterByTemperaments(payload){
    console.log(payload)
    return {
        type: FILTER_BY_TEMPERAMENTS,
        payload
    }
};

export function filterByWeight(payload){
    console.log(payload)
    return { 
          type: FILTER_BY_WEIGHT, 
          payload
    }
}

export function filterByOrder(payload){
    console.log(payload)
    return{
        type: FILTER_BY_ORDER,
        payload
    }
}

export function filterCreated(payload){    
    return{
        type: FILTER_CREATED,
        payload
    }
}

export function filter(payload){
    return{
        type: FILTER,
        payload
    }
}

export function sortDogsByBreeds(order) {
    return {
      type: order,
    }
  }

export function resetDog (payload){
    return {
        type: RESET_DOG,  
        payload  
    }
}

export function setPage(page) {
    return{
        type: SET_PAGE,
        payload:page
    }
}

export function setLoading(){
    return {
      type: SET_LOADING,
    }
  }