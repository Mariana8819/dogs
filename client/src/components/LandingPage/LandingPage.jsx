import React ,{useEffect} from "react";
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { getAllDogs, getTemperaments} from "../../redux/actions";
import './LandingPage';


export default function LandingPage(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllDogs());
        dispatch(getTemperaments());
    }, [dispatch]);

    return(
        <div className="container-body">
           <div className="container-landing"> 
            <h1>BIENVENIDOS A DOG APP</h1>
            <Link to='/home'>
                <button>Ingresar</button>
            </Link>
        </div>
        </div>
    )
}