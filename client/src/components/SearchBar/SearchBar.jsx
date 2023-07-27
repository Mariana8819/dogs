import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../../redux/actions";

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState(" ")

    function handleInputChange(evento){
        evento.preventDefault()
        setName(evento.target.value)
        console.log(name)
    }
    function handleSubmit(evento){
        evento.preventDefault()
        dispatch(getNameDogs(name))
    }
    return(
        <div>
            <input
            type="text"
            placeholder="Buscar..."
            onChange={(evento)=> handleInputChange(evento)}
            />
            <button 
            type="submit" onClick={(evento)=> handleSubmit(evento)}
            >Buscar</button>
        </div>
    )
}