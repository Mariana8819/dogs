import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllDogs, getTemperaments, filterDogsByWeight, filterCreated } from "../../redux/actions";
import styles from './Filter.module.css';

export default function Filter(){
    
    const dispatch = useDispatch();
    

    function handleClick(evento){
        evento.preventDefault();
        dispatch(getAllDogs())
    //     setCurrentPage(1);
    }

    function handleFilterWeight(evento){
        evento.preventDefault();
        dispatch(filterDogsByWeight( evento.target.value))
        // setCurrentPage(1)
        // setOrder(evento.target.value)
    }

    function handleOrderByName(evento){
        evento.preventDefault();
        dispatch(filterDogsByWeight( evento.target.value))
        // setCurrentPage(1)
        // setOrder(evento.target.value)
    }

    function handleFilterCreated( evento){
        dispatch(filterCreated(evento.target.value))
    }

    useEffect(()=>{
        dispatch(getTemperaments())
    }, [dispatch])

    const temperamentsName = useSelector(state => {return state.allTemperaments})

    function handleFilterByTemperaments(evento){
        evento.preventDefault();
        // dispatch(filterDogsByWeight( evento.target.value))
        // setCurrentPage(1)
    }

return(
    <div className={styles.filtersContainer}>
        <div className={styles.filters}>           
            <h3>Orden Alfabetico</h3>                
            <select onChange={evento=>handleOrderByName(evento)}>
                <option value="asc">Ascending</option>
                <option value="dsc">Descending</option>                    
            </select>
            </div>

            <div>
            <h3>Creados</h3>
            <select onChange={evento=> handleFilterCreated(evento)}>
                <option value="all">All</option>
                <option value="created">Created</option>
                <option value="api">Api</option>
            </select>
            </div>

            <div>
            <h3>Por peso</h3>
            <select onChange={ evento=> handleFilterWeight(evento)}>
                <option value="all">All</option>
                <option value="min">Light to heavy</option>
                <option value="max">Heavy to light</option>
            </select>
            </div>

            <div>
            <h3>Temperamentos</h3>
            <select onChange={ evento=> handleFilterByTemperaments(evento)}>
                <option value="all">All temperaments</option> 
                {temperamentsName.map(evento => {
                    return (
                        <option value={evento.name} key={evento.id}>{evento.name}</option>
                    )
                })}                  
            </select>
            </div>

            <button onClick={evento=>{handleClick(evento)}}>
            Reload all dogs
        </button>

        </div>
)}


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
