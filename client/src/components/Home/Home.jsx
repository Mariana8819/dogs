import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { getCharacters } from "../../redux/actions";
import Card from "../Card/Card";

export default function Home(){
    const dispatch= useDispatch();
    const allCharacters= useSelector((state)=>state.characters)

    useEffect(()=>{
        dispatch(getCharacters());        
    },[dispatch])

    function handleClick(evento){
        evento.preventDefault();
        dispatch(getCharacters());
    }

    return(
        <div>
            <Link to= '/character'> Create dog</Link>
            <h1>Title of my page</h1>
            <button onClick={evento=>{handleClick(evento)}}>
                Reload all dogs
            </button>
            <div>
                <select>
                    <option value="asc">Ascending</option>
                    <option value="dsc">Descending</option>                    
                </select>
                <select>
                    <option value="weight">Weight</option>
                </select>
                {allCharacters?.map((character)=>{
                    return(
                        <fragment>
                            <Link to={"/home/"+ character.id}>
                                <Card name={character.name} image={character.image} key={character.id}/> 
                            </Link>
                        </fragment>
                    )
                })}
        </div>
        </div>
   )} 


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