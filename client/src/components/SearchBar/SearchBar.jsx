import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs, getAllDogs } from "../../redux/actions";

export default function SearchBar(){
    const dispatch = useDispatch();
    const [busqueda, setBusqueda] = useState("")

    useEffect(()=>{
        dispatch(getAllDogs())
    },[dispatch])

    function handleInputChange(evento){
        evento.preventDefault()
        setBusqueda(evento.target.value)
        console.log(busqueda)
    };

    function handleSubmit(evento){
        evento.preventDefault()
        dispatch(getNameDogs(busqueda));
        setBusqueda("")
    }

    return(
        <div className="containerInput">
            <input
            className="inputBuscar"
            value={busqueda}
            placeholder="Buscar..."
            onChange={(evento)=> handleInputChange(evento)}
            />
            <button 
            className="button-dark"
            onClick={(evento)=> handleSubmit(evento)}>
                🔍
                </button>
        </div>
    )
};