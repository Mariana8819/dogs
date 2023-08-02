
import React from "react";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {filter, filterCreated, filterByOrder,filterByWeight, getTemperaments} from "../../redux/actions";
import './Filter.module.css';

export default function Filter(){
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getTemperaments())
    },[dispatch])


    const allDogs= useSelector((state)=>state.allDogs)  
    const temperaments = useSelector((state)=>state.temperaments);

 //   filtro con DB

    const [searchString, setSearchString] = useState('');         //se inicializa en "" sera mi string dento del searchch bar
    const [selectedTemperaments, setSelectecTemperaments] = useState([]);

 
 
//************************** */

//filtro sobre el estado
//     const [filtered, setFiltered]= useState(allDogs)                //funcionalidad de search bar y es reutilizable
//     const [searchString, setSearchString] = useState('');         //se inicializa en "" sera mi string dento del searchch bar
//     const [selectedTemperaments, setSelectecTemperaments] = useState([]);
  
//    const handleChange=(evento)=>{
//     evento.preventDefault()                 //hace q no se refresque al instante la pag si no no se llega a ver las cartas
//     setSearchString(evento.target.value);    //target.value=lo q se modifica en mi input dentro d la barra de busqueda
//    }

//    const handleSubmit=(evento)=>{
//     evento.preventDefault()
//     const filtered= allDogs.filter((dog)=>  //segun el target.value asignado realizo el filtro  para su busqueda
//     dog.name.includes(searchString))
//     setFiltered(filtered);           //finalmente midifica mi estado local con aquellos nombres q coincidieron el la busqueda
//    }
//
//******** */
 
    const handleClick=()=>{            
        let filtered = []
        allDogs.forEach((dog)=>{
            dog.temperaments.map((temp)=>
            temp.name === searchString ? filtered.push(dog) : null)
        })
        dispatch(filter(filtered))        
    }

    const handleResetTemps = (evento)=>{        
        dispatch(filter([]))
    }

    const handleChangeTemp = (evento)=>{     //cuando el usuario realiza el input
        setSearchString(evento.target.value)
    }

    const handleSubmitTemp = (evento)=>{
        evento.preventDefault()
        setSelectecTemperaments([...selectedTemperaments, searchString])
    }

    const handleFilterCreated = (event)=>{
        const name =event.target.name
        const value =event.target.value;  // extrae las propiedades "name" y "value" del objeto "target" del evento. 
        if(name === "Origin"){
            dispatch(filterCreated(value));
        }
    }

    const handleFilterByOrder = () =>{
        dispatch(filterByOrder(searchString));
    };

    const handleFilterByWeight = (event) =>{
        const selectedSearchString = event.target.value;
        dispatch(filterByWeight(selectedSearchString));
    };

    // const handleResetDogs = ()=>{
    //     dispatch(getAllDogs());
    // }



    // useEffect(()=>{
    //     dispatch(getAllDogs());  
    //    return (()=>{
    //     resetDog()
    //    })      
    // },[dispatch])

   

    return( 
        <div className="header">
            <div className="body">                     
            
                <form>
                <select onChange={(evento)=>handleFilterCreated(evento)} >
                    <option disabled>Filter By Origen</option>
                    <option value="All">All</option>
                    <option value="Api">Api</option>
                    <option value="Data Base">Data Base</option>
                </select>
                </form>
                
                <form>
                <select onChange={handleFilterByOrder}>
                    <option disabled>Filter By ABC</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                </form>

                <form>
                <select onChange={handleFilterByWeight}>
                    <option disabled>Filter by weight</option>
                    <option value="H-L">Heavy to light</option> 
                    <option value="L-H">Light to Heavy</option>
                </select>
                </form>               

                <form onSubmit={handleSubmitTemp}>
                <select onChange={handleChangeTemp} value={searchString} name="temperaments">
                    <option disabled>Filter Temperaments:</option> 
                    {temperaments.map((temp)=>(
                        <option 
                        key={temp.id} 
                        value={temp.name}>
                            {temp.name}
                        </option>
                    ))}
                </select>
                
                <div>
                    <button onClick={()=> handleClick()}>
                        Filter
                    </button>
                    <button onClick={handleResetTemps}>
                        Clear
                    </button>
                </div>
                </form> 

                <button
                onClick={()=> (window.location.href ='/home')}
                >
                    Clear All Filters</button>               
           
         </div> 
         </div>                  
     )      
   } 


//*******************************************
// import React from "react";
// import { useEffect } from "react";
// import {useDispatch, useSelector} from "react-redux";
// import { getAllDogs, getTemperaments, filterByTemperaments, filterDogsByWeight, orderByName, filterCreated } from "../../redux/actions";
// import styles from '../Filter.module.css';

// export default function Filter({setCurrentPage , setOrder}){

//     const dispatch = useDispatch();

//    function handleClick(evento){
//         evento.preventDefault();
//         dispatch(getAllDogs())
//         setCurrentPage(1);
//     }

//     function handleFilterWeight(evento){
//         evento.preventDefault();
//         dispatch(filterDogsByWeight( evento.target.value))
//         setCurrentPage(1)
//         setOrder(evento.target.value)
//     }

//     function handleOrderByName(evento){
//         evento.preventDefault();
//         dispatch(filterDogsByWeight( evento.target.value))
//         setCurrentPage(1)
//         setOrder(evento.target.value)
//     }

//     function handleFilterCreated( evento){
//         dispatch(filterCreated(evento.target.value))
//     }

//     useEffect(()=>{
//         dispatch(getTemperaments())
//     }, [dispatch])

//     const temperamentsName = useSelector(state => {return state.allTemperaments})

//     function handleFilterByTemperaments(evento){
//         evento.preventDefault();
//         dispatch(filterDogsByWeight( evento.target.value))
//         setCurrentPage(1)
//     }

// return(
//     <div className="mainBar">
//         <div>           
//             <h3>Orden Alfabetico</h3>                
//             <select onChange={evento=>handleOrderByName(evento)}>
//                 <option value="asc">Ascending</option>
//                 <option value="dsc">Descending</option>                    
//             </select>
//             </div>

//             <div>
//             <h3>Creados</h3>
//             <select onChange={evento=> handleFilterCreated(evento)}>
//                 <option value="all">All</option>
//                 <option value="created">Created</option>
//                 <option value="api">Api</option>
//             </select>
//             </div>

//             <div>
//             <h3>Por peso</h3>
//             <select onChange={ evento=> handleFilterWeight(evento)}>
//                 <option value="all">All</option>
//                 <option value="min">Light to heavy</option>
//                 <option value="max">Heavy to light</option>
//             </select>
//             </div>

//             <div>
//             <h3>Temperamentos</h3>
//             <select onChange={ evento=> handleFilterByTemperaments(evento)}>
//                 <option value="all">All temperaments</option> 
//                 {temperamentsName.map(evento => {
//                     return (
//                         <option value={evento.name} key={evento.id}>{evento.name}</option>
//                     )
//                 })}                  
//             </select>
//             </div>

//             <button onClick={evento=>{handleClick(evento)}}>
//             Reload all dogs
//         </button>

//         </div>
