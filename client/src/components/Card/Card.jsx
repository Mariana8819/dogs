import React from "react";
import style from "../Card/Card.module.css"

export default function Card ({name, image, temperament, temperaments, createdInDb}){
    return(
        <div className={style.cardContainer}>
            
            <h3>{name}</h3>
            <p>{temperament?.map(temperament=>" "+temperament)}</p>
            {createdInDb ?
             <p>{temperaments.map(temperament=> " "+ temperament.name)}</p>: null}
            <img src={image} alt="img"/>
        </div>
    )
}