import { useState } from "react";
import styles from "./NavBar/NavBar.module.css";
import {Link} from "react-router-dom";
//import logoxx from"../../assets/logo-home";


export default function NavBar(){
    const [byName, setByName] = useState("");

    const searchByName = (evento)=>{
        setByName(evento.target.value);
    };

    return(
        <div>
        <div>
            <form>
                <input type="text" placeholder="Search" onChange={searchByName}/>
                <Link to={byName.length === 0 ?"/home" : `/dogssearch/${byName}`}>
                    <button type="submit">Search Dog</button>
                </Link>
            </form>
        </div>
        <Link to={"/home"}>
            <button type="submit">To home</button>
            </Link>
        <Link to={"/create"}>
            <button>Create Dog</button>
        </Link>  
        </div>  

    )
}