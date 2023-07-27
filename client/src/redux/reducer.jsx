
const initialState = {
    allDogs:[],
    dogs:[],    
    dogDetail:{},
    allTemperaments:[],

}

function rootReducer(state = initialState, action){
    switch(action.type){

        case 'GET_ALL_DOGS':
            return{
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            };

        case 'GET_NAME_DOGS':
            return{
                ...state,
                dogs: action.payload
            };    

        case 'GET_DETAIL_DOGS':
            return{
                ...state,
                dogDetail: action.payload
            };    

        case 'POST_DOG':
            return{
                ...state,
            };   
            
        case 'GET_TEMPERAMENTS':
            return{
                ...state,
                allTemperaments: action.payload
            };   

        case 'FILTER_BY _TEMPERAMENTS':
            const allDogsTemperaments = state.allDogs;
            const temperamentsFiltered = action.payload === 'all'?
             allDogsTemperaments:
             allDogsTemperaments.filter( elemento=>{return elemento.temperament?.toLowerCase().includes(action.payload.toLowerCase());
        });
        return {
            ...state,
            dogs: temperamentsFiltered
        };    

        case 'FILTER_BY_WEIGHT':
            const allDogsWeight = state.allDogs.filter(elemento=> elemento.weight_min)
            console.log(action.payload, "Soy el payload")
            const filterWeight = action.payload === 'min'?
            allDogsWeight.sort((a,b)=> {return a.weight_min - b.weight_min}):
            allDogsWeight.sort((a,b)=> {return b.weight_min - a.weight_min})
            return{
                ...state,
                dogs: filterWeight
            };
       
            
        case 'FILTER_CREATED':
            const allDogs = state.allDogs;
            const createdFiltered = action.payload === 'created'?
            allDogs.filter(elemento=> elemento.createdInDb):
            allDogs.filter(elemento=> !elemento.createdInDb)
            return{
                ...state,
                dogs: action.payload === 'all'?
                state.allDogs:
                createdFiltered 
            };
            
        case 'FILTER_BY_ORDER':
            let sortedArray= action.payload === 'asc'?
            state.dogs.sort(function(a , b){
                if(a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1;
                }
                return 0;                
            }):
            state.dogs.sort(function(a,b){
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
                dogs:sortedArray
            }
                                    
    default: 
    return state;
    }
}

export default rootReducer;