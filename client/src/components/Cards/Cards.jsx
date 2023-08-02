import React from "react";
import {useSelector} from "react-redux";
import Card from "../Card/Card";
import  "./Cards.module.css"

export default function Cards(){
    const allDogs = useSelector((state)=> state.allDogs);

    return(
        <div className="cards_container ">
            {allDogs.map((dog)=>{
                return(
                    <Card 
                    key={dog.id}
                    id={dog.id}
                    image={dog.image}
                    name={dog.name}
                    height={dog.height}
                    weight={dog.weight}                    
                    temperaments={dog.temperaments}                    
                    />
                 )
             })
          }
        </div>
    )
}

//*************************************************

// import Card from "../Card/Card";
// import Paginated from "../Paginated/Paginated";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import  "./Cards.module.css"

// export default function Cards(){
    

//     const infoDogs = useSelector(state=> state.allDogs);
//     const [page, setPage] = useState(1)
//     const lastPage = page *8
//     const firstPage = lastPage - 8
//     const currentPage = infoDogs?.slice(firstPage,lastPage) //solo mostrar 8 pag
//     const totalPage = Math.ceil(infoDogs.length /8)
    
//     const handlePreviousPage=()=>{
//         setPage(page -1)
//     };
//     const handleNextPage=()=>{
//         setPage(page +1)
//     };
//     const handleNumberPage=(number)=>{
//         setPage(number)
//     }  
    
//     return(
//         <div className="card-container">
//             {currentPage.map((dog)=>{
//                 return <Card 
//                     key={dog.id}
//                     id={dog.id}
//                     image={dog.image}
//                     name={dog.name}
//                     height={dog.height}
//                     weight={dog.weight}
//                     temperaments={dog.temperaments}                    
//                     />
//             })}
//         <div>
//             <Paginated
//             totalPage={totalPage}
//             page={page}
//             previousPage={handlePreviousPage}
//             nextPage={handleNextPage}
//             pageNumber={handleNumberPage}
//             />
//         </div>               
//       </div>
//     )
// }