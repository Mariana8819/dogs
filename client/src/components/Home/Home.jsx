//import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
//import {Link} from "react-router-dom";
import { getAllDogs} from "../../redux/actions";
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import Filter from "../Filter/Filter";
//import NavBar from "../NavBar/NavBar";
import styles from '../Home/Home.module.css';
import '../Card/Card.module.css';



export default function Home(){
    const dispatch= useDispatch();
    //const history= useHistory();
    const allDogs= useSelector((state)=>state.dogs)
    
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage] = useState(8);
    const indexOfLastDog = currentPage + dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
    
    // const [order, setOrder] = useState('');
    const newPage = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getAllDogs());        
    },[dispatch])

    // useEffect(()=>{
    //     dispatch(getTemperaments())
    // },[dispatch])

   
    return(
        <div className={styles.home}>
            
            <Filter/>

            <Paginated currentPage ={currentPage}  dogsPerPage={dogsPerPage} allDogs={allDogs.length}  newPage={newPage} />

            <Card allDogs={currentDogs} /> 
            </div>                                  
           )      
   } 

   

 // function handleSort(evento){
    //     evento.preventDefault();
    //     dispatch(orderByName(evento.target.value))
    //     setCurrentPage(1);
    //     setOrder(`ordenado $ {evento.target.value}`)
    // };
   //*********** */
// {allCharacters.length?
// (allCharacters.map((character)=>{
//     return(
//         <fragment key={character.id}>
//             <Link to={"/home/"+ character.id}>
//                 <Card namme=
//                 {character.name} image={character.image}/> 
//             </Link>
//         </fragment>
//     )
// })
// ):(
// <div>
//     <h1>Cargando...</h1>            
// </div>

// //******************** */
// import React from "react";
// import { useState, useEffect } from "react";
// import {useDispatch, useSelector} from "react-redux";
// //import {Link} from "react-router-dom";
// import { getAllDogs, getTemperaments} from "../../redux/actions";
// import Card from "../Card/Card";
// import Paginated from "../Paginated/Paginated";
// import Filter from "../Filter/Filter";
// import NavBar from "../NavBar/NavBar";
// import '../Home/Home.module.css';
// import '../Card/Card.module.css';



// export default function Home(){
//     const dispatch= useDispatch();
//     //const history= useHistory();
//     const allDogs= useSelector((state)=>state.dogs)
    
//     const [currentPage, setCurrentPage] = useState(1);
//     const [dogsPerPage, setDogsPerPage] = useState(8);
//     const indexOfLastDog = currentPage + dogsPerPage;
//     const indexOfFirstDog = indexOfLastDog - dogsPerPage;
//     const pagesDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
    
//     // const [order, setOrder] = useState('');
//     // const paginated = (pageNumber)=>{
//     //     setCurrentPage(pageNumber)
//     // }

//     useEffect(()=>{
//         dispatch(getAllDogs());        
//     },[dispatch])

//     useEffect(()=>{
//         dispatch(getTemperaments())
//     },[dispatch])

   
//     return(
//         <div className="backGround">
//             <NavBar setCurrentPage = {setCurrentPage} />

//             <Filter setCurrentPage = {setCurrentPage}  setOrder={setOrder}/>

//             <Paginated setCurrentPage = {setCurrentPage} currentPage ={currentPage} dogsPerPage={dogsPerPage} allDogs={allDogs.length}  paginated={paginated} />

//             <div className="container">
//                 {pagesDogs.length ?  
//                  pagesDogs.map(e => { 
//                     return( 
//                         <React.Fragment key={e.id}> 
//                         <Card id={e.id} image={e.image} name={e.name} height={e.height} weight={e.weight} temperament={!e.createdInDb ? e.temperament : e.Temperaments.map(dog => dog.name + " ")} key={e.id} /> 
//                         </React.Fragment> 
//                         )
//                         }) :  
//                         <div> <h1> Cargando...</h1> </div> 
//                         }
//             </div>
//         </div>
                
//            )      
//    } 