// import React from "react";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getNameDogs, getAllDogs } from "../../redux/actions";

// export default function SearchBar(){
//     const dispatch = useDispatch();
//     const [busqueda, setBusqueda] = useState("")

//     useEffect(()=>{
//         dispatch(getAllDogs())
//     },[dispatch])

//     function handleInputChange(evento){
//         evento.preventDefault()
//         setBusqueda(evento.target.value)
//         console.log(busqueda)
//     };

//     function handleSubmit(evento){
//         evento.preventDefault()
//         dispatch(getNameDogs(busqueda));
//         setBusqueda("")
//     }

//     return(
//         <div className="containerInput">
//             <input
//             className="inputBuscar"
//             value={busqueda}
//             placeholder="Buscar..."
//             onChange={(evento)=> handleInputChange(evento)}
//             />
//             <button 
//             className="button-dark"
//             onClick={(evento)=> handleSubmit(evento)}>
//                 🔍
//                 </button>
//         </div>
//     )
// };

//*************************************************************

// import { useState} from "react";
// import { useDispatch } from "react-redux";
// import { getNameDogs, getAllDogs } from "../../redux/actions";

// export default function SearchBar(){
//     const dispatch = useDispatch();
//     const [busqueda, setBusqueda] = useState("")

//     const handleInputChange =(evento)=>{
//         if(!evento.target.value){
//             dispatch(getAllDogs());
//             setBusqueda('')
//         }else{
//             setBusqueda(evento.target.value)
//         }
//     }
    
//     const handleSubmit = (evento)=>{
//         const {value} =evento.target
//         if(value){
//             dispatch(getNameDogs(value))
//         }else{
//             dispatch(getAllDogs())
//         }
//     }
   
//     return(
//         <div>
//             <input
//             type="text"
//             name="search"
//             value={busqueda}
//             placeholder="Dog"
//             onChange={(evento)=> handleInputChange(evento)}
//             />
//             <button             
//             onClick={(evento)=> handleSubmit(evento)} 
//             value={busqueda}>
//                 🔍
//                 </button>
//         </div>
//     )
// };
//****************************************************************************

import React from 'react';
import './SearchBar.module.css'

    //! SearchBar input and Clear button
export default function SearchBar({ input, setInput }) {
  return (
    <div>
      <form
        onSubmit={(evento) => evento.preventDefault()}
        className="formContainer"
      >
        
        <div className="searchBarContainer">
          <input
            type="text"
            value={input}
            placeholder="Search Dog Breed"
            onChange={(evento) => setInput(evento.target.value)}
            className="input"
          ></input>
          <button
            className="button"
            onClick={() => (window.location.href = '/home')}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

