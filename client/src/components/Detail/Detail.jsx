// import { useEffect } from "react";
// import { getIdDogs } from "../../redux/actions";
// import {useDispatch, useSelector} from "react-redux";
// import {useParams} from "react-router-dom";
// //import style from "./Detail/Detail.modules.css";


// export default function Detail(){
//     const {id} = useParams();
//     const dispatch = useDispatch();
//     const dogsId = useSelector((state)=>state.dogsId);
//     useEffect(()=>{
//         dispatch(getIdDogs(id));
//     },[]);

//     return(
//         <div>
//             <div>
//                 <p>Id: {dogsId.id}</p>
//                 <h2>{dogsId.name}</h2>
//                 <img src={dogsId.image} alt="img" />
//                 <div>
//                     <p>Height:{dogsId.height}</p>
//                     <p>Weight:{dogsId.weight}</p>
//                     <p>Time Life:{dogsId.life_span}</p>
//                     <p>Temperament:{dogsId.temperament}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

//**********************************************
import { useEffect } from "react";
import { getIdDogs } from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
//import style from "./Detail/Detail.modules.css";


export default function Detail(){
    const params = useParams();
    const dispatch = useDispatch();
    const {dogDetail} = useSelector((state)=>state)
    
    useEffect(()=>{
        dispatch(getIdDogs(params.id));
    },[dispatch, params.id]);

    return(
        
            <div>
                <p>Detail:</p>
                <h2>Id: {dogDetail.id}</h2>
                <h3>{dogDetail.name}</h3>
                <img src={dogDetail.image} alt="" />
                <h4>
                    Temperaments Types:{dogDetail.temperaments?.map((temp)=>(
                        <li key={temp}>{temp}</li>
                    ))}
                </h4>
                <h3>Height:{dogDetail.height}</h3>
                <h3>Weight:{dogDetail.weight}</h3>
                <h3>Time Life:{dogDetail.life_span}</h3>
                
            </div>
    
    )
}
