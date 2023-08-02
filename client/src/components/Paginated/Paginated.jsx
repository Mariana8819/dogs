// import React from "react";
// import './Paginated.module.css';

// export default function Paginated ({
//     currentPage,minPageNumber, maxPageNumber, dogsp, dogsPerPage, pages}){
//         const pageNumber = [];
//         const indexPagesNumber= Math.ceil(dogsp /dogsPerPage); 
        
//         for(let i=1; i<=indexPagesNumber;i++){
//         pageNumber.push(i);
//     }

//     const handlePrevious= ()=> (currentPage - 1) && pages( currentPage - 1);
//     const handleNext= ()=> (currentPage !== pageNumber.length) && pages(currentPage + 1);
    

//     return(
//         <nav>
//             <ul className="pages">
//                 <li className={currentPage === 1 ? 'pageNumber disabled' : 'pageNumber'} onClick={handlePrevious}>Previous</li>
//                 {pageNumber &&
//                 pageNumber.slice(minPageNumber, maxPageNumber).map(number =>(
//                     <li className={currentPage === number ? 'pageNumber activePage' : 'pageNumber'} key={number} onClick={()=>pages(number)}>
//                         {number}                      
//                     </li>
//                 ))}
//                 <li className={currentPage === pageNumber.length ? 'pageNumber disabled' : 'pageNumber'} onClick={handleNext}>Next</li>
//             </ul>
//         </nav>
//     );
// };

//****************************************************

// import style from './Paginated.module.css';

// export default function Paginated ({
//     totalPage ,page ,previousPage , nextPage,pageNumber}){
//         const pages = [];
               
//         for(let i=1; i<=totalPage;i++){
//         pages.push(i+1);
//     }

//     return(
//         <div>
//             <button 
//             onClick={()=>previousPage()} 
//             disabled={page <= 1}>                
//             </button>
//             {pages.length > 0 && pages.map(pag=>(
//                 <button
//                 onClick={()=> pageNumber(pag)}
//                 key={`page${pag}`}
//                 className={pag ===page?
//                     style.select:
//                     style.notselected}>
//                     {pag}
//                     </button>
//             ))}
//             <button onClick={()=>nextPage()} disabled={page =>totalPage} className={style.notselected}></button>
//         </div>
//    )         
// };
//******************************************* */

import React from 'react'
//import { useDispat useSelector } from 'react-redux';
//import { setPage } from "../../redux/actions.js";
import './Paginated.module.css';

export default function Paginated({ dogsPerPage, allDogs, paginated}){
  //const dispatch = useDispatch();
 // const numPage= useSelector((state)=> state.numPage );

  const pageNumbers = [];
  const totalPages = Math.ceil( allDogs/ dogsPerPage);

  for(let i = 0; i < totalPages; i++){
    pageNumbers.push(i+1);
  }

  //  const paginated = (pageNumber)=>{
  //   dispatch( setPage(pageNumber));
  // }

  return (
    <nav>
      <ul>
      { pageNumbers && 
        pageNumbers.map((page)=>(
          <li key={page}>
          <button onClick={()=>paginated(page)}>
            {page}
            </button> 
          </li>
        ))}
        </ul>                        
      
    </nav>
  )
}

