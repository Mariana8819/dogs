import React  from "react";
import { Link } from "react-router-dom";
//import './LandingPage.module.css';


export default function LandingPage(){
  
    return(
        <div>
           <div > 
            <h1>Welcome to the Dog´s App</h1>
            <Link to="/home">
                <button type="submit">Enter</button>
            </Link>
        </div>
        </div>
    )
}


///********************************************************************************************** */

// import { Link } from "react-router-dom";
// //import style from "./LandingPage.module.css";


// export default function LandingPage(){
    
//     return(
//         <div>
//            <div> 
//             <h1>BIENVENIDOS AL MUNDO DE LOS CACHORROS</h1>
//             <Link to='/home'>
//                 <button>Ingresar</button>
//             </Link>
//         </div>
//         </div>
//     );
// }
//******************************************

// import React from 'react';
// import { withRouter } from 'react-router';
// //import './LandingPage.module.css';

// // Basic Landing Page with button to push user to /home
// function LandingPage(props) {
//   const handleClick= ()=>{props.history.push('/home')}
//   return (
//     <div>
//       <div>
//         <p>Welcome to the Dogs App</p>
//         <button onClick={handleClick}>
//           Enter
//         </button>
//       </div>
//     </div>
//   )
// }
// export default LandingPage