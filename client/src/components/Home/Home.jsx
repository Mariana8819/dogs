import React, { useState } from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { getAllDogs, getNameDogs, getIdDogs, getTemperaments, postDog, filterByTemperaments, filterDogsByWeight, filterCreated, orderByName} from "../../redux/actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";


export default function Home(){
    const dispatch= useDispatch();
    const allDogs= useSelector((state)=>state.dogs)
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const indexOfLastDog = currentPage + dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
    
    const paginado = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getAllDogs());        
    },[dispatch])

    useEffect(()=>{
        dispatch(getTemperaments())
    },[dispatch])

    function handleClick(evento){
        evento.preventDefault();
        dispatch(getAllDogs());
    }

    function handleFilterWeight(evento){
        dispatch(filterDogsByWeight( evento.target.value))
    }

    function handleFilterCreated( evento){
        dispatch(filterCreated(evento.target.value))
    }

   
    return(
        <div>
            <Link to= '/dogs'> Create dog</Link>
            <h1>Title of my page</h1>
            <button onClick={evento=>{handleClick(evento)}}>
                Reload all dogs
            </button>

            <div>
                <h3>Orden Alfabetico</h3>                
                <select>
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
                <select>
                    <option value="all">All temperaments</option>                   
                </select>
                </div>

                <Paginado
                dogsPerPage = {dogsPerPage}
                allDogs = {allDogs.length}
                paginado = {paginado}
                />
                {currentDogs?.map((dog)=>{
                    return(
                        <fragment>
                            <Link to={"/home/"+ dog.id}>
                                <Card name={dog.name} image={dog.image} key={dog.id}/> 
                            </Link>
                        </fragment>
                    )
                })}
        </div>
   )} 

   

 // function handleSort(evento){
    //     evento.preventDefault();
    //     dispatch(orderByName(evento.target.value))
    //     setCurrentPage(1);
    //     setOrder(`ordenado $ {evento.target.value}`)
    // };
   //*********** */
// {allCharacters.length?
// (allCharacters.map((character)=>{
//     return(
//         <fragment key={character.id}>
//             <Link to={"/home/"+ character.id}>
//                 <Card namme=
//                 {character.name} image={character.image}/> 
//             </Link>
//         </fragment>
//     )
// })
// ):(
// <div>
//     <h1>Cargando...</h1>            
// </div>