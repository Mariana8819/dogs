// import React from "react";
// import "./Card.module.css";
// //import { Link } from "react-router-dom";


// export default function Card ({name, image,temperament,weight}){
//     return(
//         <div className="card-container">
//             <div className="card">
//                 <h2>{name}</h2>
//                 <img className="image-card" src={image} alt="imagen" />
//                 <p className="card-temperamentos">{temperament}</p>
//                 <p className="card-peso">{weight}</p>
//             </div>   
//         </div>
//     )
// }
//************************************************** */

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

//********************************************************


// import "./Card.module.css";
// import { Link } from "react-router-dom";


// export default function Card ({id,name, image,temperaments,weight}){
    
//     return(
//         <div className="card-container">
//             <Link to={`/detail/${id}`}>
//             <img src={image} alt="img"/>
//             </Link>
//             <h4>{name}</h4>
//             <h5>temperaments:</h5>
//             <p>{`${temperaments}`}</p>
//             <h5>Weight:{weight}</h5>
            
//         </div>
//     )
// }

////****************************************

import React from 'react';
import { Link } from 'react-router-dom';
import './Card.module.css';


export default function Card(props){
  const id= props.id;

  return (
    <div className="card">      
      <Link to={`/detail/${id}`}>
      <h2>{props.name}</h2>
      <img className="image-card" src={props.image} alt={props.name} />
      <p className="card-temperamentos">{props.temperament}</p>
      <p className="card-peso">{props.weight}</p>    
      </Link>
    </div>
  )
}
