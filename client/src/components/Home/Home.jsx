// import React, { Fragment, StrictMode } from "react";
// import { useState, useRef } from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {Link} from "react-router-dom";
// import { getAllDogs, getTemperaments,filterByTemperaments, filterCreated, filterByOrder, filterByWeight} from "../../redux/actions";
// import Card from "../Card/Card";
// import Paginated from "../Paginated/Paginated";
// //import Filter from "../Filter/Filter";
// import NavBar from "../NavBar/NavBar";
// import  './Home.module.css';




// export default function Home(){
    
//     const dispatch= useDispatch();
    
//     const allDogs= useSelector((state)=>state.allDogs)
//     const allTemps= useSelector((state)=>state.temperaments)
    
//     const referenceValue = useRef(); 
//    // const [order, setOrder] = useState('');
//     //console.log(order);
//    // console.log(getTemperaments);

//     const [currentPage, setCurrentPage] = useState(1);
//     const [dogsPerPage, setDogsPerPage] = useState(8);
//     const indexOfLastDog = currentPage + dogsPerPage;
//     const indexOfFirstDog = indexOfLastDog - dogsPerPage;
//     const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
    
//     const [minPageNumber, setMinPageNumber] = useState(0);
//     const [maxPageNumber, setMaxPageNumber] = useState(5);
//     console.log(setDogsPerPage)

//     const pages = (pageNumber) => {
//         setCurrentPage(pageNumber);
//         referenceValue.current?.scrollIntoView({ behavior: "smooth" });
      
//         const isLastPage = pageNumber >= maxPageNumber;
//         const isFirstPage = pageNumber <= minPageNumber + 1 && pageNumber !== 1;
      
//         if (isLastPage) {
//           setMinPageNumber(minPageNumber + 4);
//           setMaxPageNumber(maxPageNumber + 4);
//         } else if (isFirstPage) {
//           setMinPageNumber(minPageNumber - 4);
//           setMaxPageNumber(maxPageNumber - 4);
//         }
//       };
    

//     const [order, setOrder] = useState('');
//     const newPage = (pageNumber)=>{
//         setCurrentPage(pageNumber)
//     }

//     useEffect(()=>{
//         dispatch(getAllDogs());        
//     },[dispatch])

//     useEffect(()=>{
//         dispatch(getTemperaments())
//     },[dispatch])

//     const handleClick = (evento)=>{
//         evento.preventDefault();
//         dispatch(getAllDogs());
//         setCurrentPage(1);
//     };

//     const handleFilterByTemperaments =(evento)=>{
//         evento.preventDefault(evento);
//         dispatch(filterByTemperaments(evento.target.value));
//         setCurrentPage(1);
//     };

//     const handleFilterCreated= (evento)=>{
//         evento.preventDefault(evento);
//         dispatch(filterCreated(evento.target.value));
//         setCurrentPage(1);
//     };

//     const handleFilterByOrder= (evento)=>{
//         evento.preventDefault(evento);
//         dispatch(filterByOrder(evento.target.value));
//         setCurrentPage(1);
//         setOrder(`Ordenado ${evento.target.value}`);
//     };

//     const handleFilterByWeight= (evento)=>{
//         evento.preventDefault(evento);
//         dispatch(filterByWeight(evento.target.value));
//         setCurrentPage(1);
//         setOrder(`Ordenado ${evento.target.value}`);
//     };
   
//     return(
//         <Fragment>
//             <div>
//                 <NavBar/>
//                 <div className="container-filtro">
//                     <div className="container-item">
//                         <button className="button-home" onClick={evento=>{handleClick(evento)}}>Resetear</button>                        
//                     </div>
//                     <div className="container-item select-home">
//                         <p className="p-home">Orden Alfabetico</p>
//                         <select onChange={evento=>handleFilterByOrder(evento)}>
//                             <option value="asc">A-Z</option>
//                             <option value="Dsc">Z-A</option>
//                         </select>
//                         <i></i>
//                     </div>

//                     <div className="container-item select-home">
//                         <p className="p-home">Ordenar Por Peso</p>
//                         <select onChange={evento=>handleFilterByWeight(evento)}>
//                             <option value="liviano">Livianos</option>
//                             <option value="pesado">Pesados</option>
//                         </select>
//                         <i></i>
//                     </div>

//                     <div className="container-item select-home">
//                         <p className="p-home">Filtro Creados o Existentes</p>
//                         <select onChange={evento=>handleFilterCreated(evento)}>
//                             <option value="todos">Todos</option>
//                             <option value="existentes">Existentes</option>
//                             <option value="creados">Creados</option>
//                         </select>
//                         <i></i>
//                     </div>

//                     <div className="container-item select-home">
//                         <p className="p-home">Filtro Por Temperamento</p>
//                         <select onChange={evento=>handleFilterByTemperaments(evento)}>
//                             <option value="todos">Todos</option>
//                             {allTemps.map((data)=>(
//                                 <option key={data.id}  value={data.name}>{data.name}</option>
//                             ))}
//                         </select>
//                         <i></i>
//                     </div>
//                 </div>

//                 <Paginated
//                 currentPage={currentPage}
//                 minPageNumber={minPageNumber}
//                 maxPageNumber={maxPageNumber}
//                 dogsPerPage={dogsPerPage}
//                 dogsp={Array.isArray(allDogs) ? allDogs.length : 1}
//                 pages={pages}
//                 />

//                 <StrictMode>
//                 {
//                     currentDogs.map(elemento=>{
//                         return(
//                             <Link className="linktohome" to={'/dogs/' + elemento.id} key={elemento.id}>
//                                 <Card
//                                 name= {elemento.name}
//                                 image={elemento.image}
//                                 temperament={elemento.temperament}
//                                 weight={elemento.weight}
//                                 />
//                             </Link>
//                         )
//                     })
//                 }
//                </StrictMode>

//             </div>
//         </Fragment>    
//      )      
//    } 

///**************************************************************************************************** */
   

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

//***********************************************************************************************************


import { useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllDogs,setLoading} from "../../redux/actions";
import Filter from "../Filter/Filter";
import Card from "../Card/Card";
import Paginated from '../Paginated/Paginated';
import './Home.module.css';


export default function Home(){

      const dispatch = useDispatch()
      const allDogs = useSelector((state) => state.allDogs)
     // const page= useSelector((state)=>state.numPage)

      //const[aux,setAux]= useState(false);

    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage] = useState(8)
    const indexLastDog = currentPage + dogsPerPage
    const indexFirstDog = indexLastDog - dogsPerPage
    const currentDogs = allDogs.slice(indexFirstDog, indexLastDog)
    
    const paginated=(pageNumber)=>{
      setCurrentPage(pageNumber)
    }
    
     // const filteredDogs = useSelector((state) => state.filteredDogs)
    
      useEffect(() => {
        dispatch(setLoading())
        dispatch(getAllDogs())
        // eslint-disable-next-line
      }, [])
    
      
    
      // const displayDogs=(array)=> {
      //   if (array.message) {
      //     return (
      //       <div>
      //         <p>Dog not found</p>
      //         <button
                
      //           onClick={() => (window.location.href = '/home')}
      //         >
      //           Home
      //         </button>
      //       </div>
      //     )
      //   }
    
      //   let dogsToDisplay = array
      ////     ?.filter((dog) => dog.name.toLowerCase().includes(input.toLowerCase()))
      //     .slice(pages, pages + dogsPerPage)
    
      //   return dogsToDisplay.length ? (
      //     dogsToDisplay.map((dog) => {
      //       return <Card id={dog.id} name={dog.name} img={dog.image} />
      //     })
      //   ) : (
      //     <div>
      //       <p>No Dog Found</p>
      //       <button
              
      //         onClick={() => (window.location.href = '/home')}
      //       >
      //         Home
      //       </button>
      //     </div>
      //   )
      // }
    
      return (
        <div>
          <Filter />
          
          <div>
          <Paginated
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          paginated={paginated}
          />          
          </div>

          <div>
            {currentDogs[0]?(
              currentDogs?.map((dog)=>{
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
            ): (
              <div>
                <p>No Dog Found</p>
                  <button onClick={() => (window.location.href = '/home')}>
                      Home
                    </button>
                  </div>
            )}
             </div>    
        </div>
      )
    }
