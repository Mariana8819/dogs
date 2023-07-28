import React from "react";

export default function Paginated ({
    dogsPerPage, allDogs, paginado
}){
    const pageNumber = [];
    for (let i=0 ; i<= Math.ceil(allDogs/dogsPerPage); i++){
        pageNumber.push(i+1)
    }

    return(
        <nav>
            <ul className="paginado">
                {pageNumber &&
                pageNumber.map(number =>(
                    <li className="number"  key={number}>
                        <p onClick={()=> paginado(number)}>{number}</p>
                    </li>
                ))}
            </ul>
        </nav>
    )
}