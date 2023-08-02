// import { useState } from "react";
// import "./NavBar.module.css";
// import {Link} from "react-router-dom";
// //import logoxx from"../../assets/logo-home";


// export default function NavBar(){
//     const [byName, setByName] = useState("");

//     const searchByName = (evento)=>{
//         setByName(evento.target.value);
//     };

//     return(
//         <div>
//         <div>
//             <form>
//                 <input type="text" placeholder="Search" onChange={searchByName}/>
//                 <Link to={byName.length === 0 ?"/home" : `/dogssearch/${byName}`}>
//                     <button type="submit">Search Dog</button>
//                 </Link>
//             </form>
//         </div>
//         <Link to={"/home"}>
//             <button type="submit">To home</button>
//             </Link>
//         <Link to={"/create"}>
//             <button>Create Dog</button>
//         </Link>  
//         </div>  

//     )
// }

// //***************************************************************


// import logo from "./NavBar.module.css";
// import {Link, useLocation} from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";


// export default function NavBar({handleChange, handleSubmit}){
//     const location = useLocation();

//    return(
//         <div className="search-box">
//             <form onChange={handleChange}>
//                 <input placeholder="busquedaaa" type="search"/>
//                 <button type="submit" onClick={handleSubmit}>
//                     Buscarr
//                     </button>
            
//             <img src={logo} alt="go to home" />
            
            
//             <div>
//                 <Link to="/create">
//                     {location.pathname === "/create" || <button>New Dog</button>}
//                 </Link>
//                 <div>
//                     {location.pathname !== "/create" ? <SearchBar/> : null}
//                 </div>
//           </div> 
//           </form>                       
//        </div>  
//     )
// }

//*********************************************************
import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from './../SearchBar/SearchBar';
import './NavBar.module.css'

// Simple Nav Bar including SearchBar Component
export default function NavBar({ setInput, input }) {
  return (
    <div className="mainContainer">
      <nav className="navContainer">
        <div className="linkContainer">
          <Link to="/home" className="hover">
            Home
          </Link>
          <Link to="/create" className="hover">
            Create Dog Breed
          </Link>
        </div>
        <SearchBar setInput={setInput} input={input} />
      </nav>
    </div>
  )
}

