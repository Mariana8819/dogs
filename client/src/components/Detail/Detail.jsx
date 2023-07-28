import { useEffect } from "react";
import { getIdDogs } from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
//import style from "./Detail/Detail.modules.css";


export default function Detail(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const dogsId = useSelector((state)=>state.dogsId);
    useEffect(()=>{
        dispatch(getIdDogs(id));
    },[]);

    return(
        <div>
            <div>
                <p>Id: {dogsId.id}</p>
                <h2>{dogsId.name}</h2>
                <img src={dogsId.image} alt="img" />
                <div>
                    <p>Height:{dogsId.height}</p>
                    <p>Weight:{dogsId.weight}</p>
                    <p>Time Life:{dogsId.life_span}</p>
                    <p>Temperament:{dogsId.temperament}</p>
                </div>
            </div>
        </div>
    )
}