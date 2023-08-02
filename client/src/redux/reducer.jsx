// import {
//     GET_ALL_DOGS,
//     GET_NAME_DOGS,
//     GET_DETAIL_DOGS, 
//     GET_TEMPERAMENTS, 
//     POST_DOG, 
//     FILTER_BY_TEMPERAMENTS, 
//     FILTER_BY_WEIGHT, 
//     FILTER_BY_ORDER, 
//     FILTER_CREATED
// } from "./actions";


// const initialState = {
//     allDogs:[],
//     dogs:[],    
//     detail:[],
//     temperaments:[],

// };

// function rootReducer(state = initialState, action){
//     switch(action.type){

//         case GET_ALL_DOGS:
//             return{
//                 ...state,
//                 dogs: action.payload,                
//                 allDogs: action.payload
//             };

//         case GET_NAME_DOGS:
//             return{
//                 ...state,
//                 dogs: action.payload
//             };    

//         case GET_DETAIL_DOGS:
//             return{
//                 ...state,
//                 detail: action.payload
//             };    

//         case POST_DOG:
//             return{
//                 ...state,
//             };   
            
//         case GET_TEMPERAMENTS:
//             return{
//                 ...state,
//                 temperaments: action.payload
//             };   

//         case FILTER_BY_TEMPERAMENTS:
//             const allDogs = state.allDogs; 
//             const filteredDogs = action.payload === 'todos' ? allDogs : allDogs.filter((dog) => 
//               dog.temperament?.includes(action.payload) 
//             ); 
//             return { 
//               ...state, 
//               dogs: filteredDogs, 
//            }

//            case FILTER_CREATED: 
//            let allDogss = state.allDogs; 
//            const filterCreated = action.payload === 'todos' ? allDogss : action.payload === 'existentes' ? allDogss : allDogss.filter(data => data.id.length > 4); 
          
//            return { 
//              ...state, 
//              dogs: filterCreated 
//            }   
         
//         case FILTER_BY_ORDER:
//         let listOfdogs = state.dogs;    
//         let sortedArray= action.payload === 'asc'?
//             listOfdogs.sort(function(a , b){
//                 if(a.name > b.name){
//                     return 1;
//                 }
//                 if(b.name > a.name){
//                     return -1;
//                 }
//                 return 0;                
//             }):
//             listOfdogs.sort(function(a,b){
//                 if(a.name > b.name){
//                     return -1;
//                 }
//                 if(b.name > a.name){
//                     return 1;
//                 }
//                 return 0;
//             })
//             return{
//                 ...state,
//                 dogs:sortedArray
//             }
        
//         case FILTER_BY_WEIGHT:
//             const value = action.payload === 'pesado' ? 
//               state.dogs.sort(function(a, b){
//                 return parseInt(b.weight) - parseInt(a.weight);
//                }):
//               state.dogs.sort(function(a, b){
//                 return parseInt(a.weight) - parseInt(b.weight);
//               });
//               return {
//                 ...state,
//                 dogs: value
//                 };

//             default: 
//             return state;
//     }
// }

// export default rootReducer;

///1454546861303351////////////////////////////////////////////
            
        // case FILTER_CREATED:
        //     const allDogs = state.allDogs;
        //     const createdFiltered = action.payload === 'created'?
        //     allDogs.filter(elemento=> elemento.createdInDb):
        //     allDogs.filter(elemento=> !elemento.createdInDb)
        //     return{
        //         ...state,
        //         dogs: action.payload === 'all'?
        //         state.allDogs:
        //         createdFiltered 
        //     };
            
//         case FILTER_BY_ORDER:
//             let sortedArray= action.payload === 'asc'?
//             state.dogs.sort(function(a , b){
//                 if(a.name > b.name){
//                     return 1;
//                 }
//                 if(b.name > a.name){
//                     return -1;
//                 }
//                 return 0;                
//             }):
//             state.dogs.sort(function(a,b){
//                 if(a.name > b.name){
//                     return -1;
//                 }
//                 if(b.name > a.name){
//                     return 1;
//                 }
//                 return 0;
//             })
//             return{
//                 ...state,
//                 dogs:sortedArray
//             }
                                    
//************************************************************************

import {
    GET_ALL_DOGS,
    GET_NAME_DOGS,
    GET_DETAIL_DOGS, 
    GET_TEMPERAMENTS, 
    POST_DOG, 
    FILTER_BY_TEMPERAMENTS, 
    FILTER_BY_WEIGHT, 
    FILTER_BY_ORDER, 
    FILTER_CREATED,
    RESET_DOG,
    SET_PAGE,
    SET_LOADING,
    FILTER
} from "./actions";


const initialState = {
    allDogs:[],
   // dogsCopy:[],    
    dogDetail:[],
    temperaments:[],
    searchDog:[],
    //filteredTemperaments:[],
    filteredDogs:[],
   // numPage:[],
    loading:false  
};

function rootReducer(state = initialState, action){
    switch(action.type){

        case GET_ALL_DOGS:
            return{
                ...state,
                dogsCopy: action.payload,                
                allDogs: action.payload
            };

        case GET_NAME_DOGS:
            return{
                ...state,
                allDogs: action.payload,
                filteredDogs:action.payload
            };    

        case GET_DETAIL_DOGS:
            return{
                ...state,
                dogDetail: action.payload
            };    

        case POST_DOG:
            return{
                ...state,
                dogsName:[...state.dogsName , action.payload],
                allDogs: [...state.allDogs , action.payload]
            };   
            
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments: action.payload
            };   

        case FILTER_BY_TEMPERAMENTS:
            const allDogs = state.allDogs; 
            const filteredDogs = action.payload === 'todos' ? allDogs : allDogs.filter((dog) => 
            dog.temperament?.includes(action.payload) 
            ); 
            return { 
                ...state, 
                dogs: filteredDogs, 
                   }
                
        case FILTER_CREATED: 
        let dogsNamee = state.dogsName; 
        const filterCreated = dogsNamee.filter((dog)=>{
        const regExp =  /^[0-9]+$/;
        if(action.payload ==="Api" && regExp.test(dog.id)){
            return true;
        }else if (action.payload === "DataBase" && !regExp.test(dog.id)){
            return true;                                
            }
            else if (action.payload === "All"){
            return true;
            }else{
            return false;
            }
        })
        return { 
            ...state, 
            allDogs: filterCreated
               }   
        case FILTER:
            return{
            ...state,
            filteredDogs:action.payload
              }   

        case RESET_DOG:
            return{
            ...state,
            allDogs: initialState.allDogs,   //Restablecer al estado inicial
               }  
        case SET_PAGE:
            return{
              ...state,
              numPage:action.payload
                  }    
        case SET_LOADING:
            return{
              ...state,
              loading:true
                  }    
                         
        case FILTER_BY_ORDER:
        let listOfdogs = state.allDogs;    
        let sortedArray= action.payload === 'A-Z'?
        listOfdogs.sort((a , b)=>{
            if(a.name > b.name){
                return 1;
                 }
            if(b.name > a.name){
                return -1;
                }
                return 0;                
            }):
            listOfdogs.sort((a,b)=>{
            if(a.name > b.name){
                return -1;
                }
            if(b.name > a.name){
                return 1;
               }
                return 0;
            })
                return{
                ...state,
                allDogs:sortedArray
                  }
                        
            case FILTER_BY_WEIGHT:
            let listOfdogss = state.allDogs;
            const value = action.payload === 'heavy' ? 
            listOfdogss.sort(function(a, b){
                  return parseInt(b.weight) - parseInt(a.weight);
             }):
                listOfdogss.sort(function(a, b){
                    return parseInt(a.weight) - parseInt(b.weight);
                     });
                       return {
                           ...state,
                           allDogs: value
                                };
                
                            default: 
                            return state;
                    }
                }
                

export default rootReducer;