import './App.css';
import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import DogCreated from './components/DogCreated/DogCreated';
import Detail from './components/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import Error404 from './components/Error404/Error404';
import SearchBar from './components/SearchBar/SearchBar';


axios.defaults.baseURL='http://localhost:3001';

function App() {
 // const [input, setInput] = useState('')
 const location= useLocation();

  return (    
    <div className="App">
      {location.pathname !== "/"&& <NavBar/>}
      <Routes>
        <Route  exact path="/" Component={LandingPage}/>;           
        <Route  path="/home" Component={Home}/>;
        <Route  path="/create" Component={DogCreated}/>;
        <Route  path="/detail/:id" Component={Detail}/>;   
        <Route  path="name" Component={SearchBar}/>;   
        <Route  path="/*"  Component={Error404}/>;     
      </Routes>
      
    </div>    
  );
}

export default App;

//**********************************
 
// import './App.css';
// // import axios from 'axios';
// // //import React, {useState} from 'react';
// // import { Route, Routes } from 'react-router-dom';
// // import { useLocation } from 'react-router-dom';
// import Home from './components/Home/Home';
// import LandingPage from './components/LandingPage/LandingPage';
// import DogCreated from './components/DogCreated/DogCreated';
// import Detail from './components/Detail/Detail';
// import NavBar from './components/NavBar/NavBar';
// import Error404 from './components/Error404/Error404';


// axios.defaults.baseURL='http://localhost:3001';

// function App() {

//  const location= useLocation();

//   return (    
//     <div className="App">
//       <Home/>
//       <Detail/>
//       <Create/>
//       <Landing/>   
      
//     </div>    
//   );
// }

// export default App;