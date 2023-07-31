import React from "react";
import './Paginated.module.css';

export default function Paginated ({
    currentPage,minPageNumber, maxPageNumber, dogsp, dogsPerPage, pages}){
        const pageNumber = [];
        const indexPagesNumber= Math.ceil(dogsp /dogsPerPage); 
        
        for(let i=1; i<=indexPagesNumber;i++){
        pageNumber.push(i);
    }

    const handlePrevious= ()=> (currentPage - 1) && pages( currentPage - 1);
    const handleNext= ()=> (currentPage !== pageNumber.length) && pages(currentPage + 1);
    

    return(
        <nav>
            <ul className="pages">
                <li className={currentPage === 1 ? 'pageNumber disabled' : 'pageNumber'} onClick={handlePrevious}>Previous</li>
                {pageNumber &&
                pageNumber.slice(minPageNumber, maxPageNumber).map(number =>(
                    <li className={currentPage === number ? 'pageNumber activePage' : 'pageNumber'} key={number} onClick={()=>pages(number)}>
                        {number}                      
                    </li>
                ))}
                <li className={currentPage === pageNumber.length ? 'pageNumber disabled' : 'pageNumber'} onClick={handleNext}>Next</li>
            </ul>
        </nav>
    );
};