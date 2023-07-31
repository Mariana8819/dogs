import React from "react";
import "./Card.module.css";
//import { Link } from "react-router-dom";


export default function Card ({name, image,temperament,weight}){
    return(
        <div className="card-container">
            <div className="card">
                <h2>{name}</h2>
                <img className="image-card" src={image} alt="imagen" />
                <p className="card-temperamentos">{temperament}</p>
                <p className="card-peso">{weight}</p>
            </div>   
        </div>
    )
}

//export default Card; 

// const Card = (props) => {
//     return (
//         <div className={style.card}>
//             <img className={style.img} src={props.image} alt={
// props.name
// } />
//             <h2 className={
// style.name
// }>{
// props.name
// }</h2>
//             <p className={style.temperaments}>{props.temperaments}</p>
//             <p className={style.weightProps}>{props.minWeight} - {props.maxWeight} kg</p>
//             {
// props.id
//  === "no-info" ? (
//                 <><p>No details</p></>) :
//                 <Link to={`/home/${
// props.id
// }`}>
//                     <p className={style.enlace}>Details</p>
//                 </Link>}
//         </div>
//     )
// }

// export default Card; 
//*************************
// <img src={props.image} alt="img not found"/>
/* <h3>{props.name}</h3>
<h5>{props.height}</h5>
<h5>{props.weight}</h5>
<h5>{props.life_span}</h5>
<h5>{props.height}</h5>

<p>{props.temperaments}</p>
<Link to={`/home/${props.id}`}>
<p>Details</p>
</Link> */ 