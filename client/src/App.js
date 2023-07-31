import './App.css';
import axios from 'axios';
//import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import DogCreated from './components/DogCreated/DogCreated';
import Detail from './components/Detail/Detail';
import Error404 from './components/Error404/Error404';


axios.defaults.baseURL='http://localhost:3001';

function App() {
 // const [input, setInput] = useState('')
  
  return (    
    <div className="App">
      <Routes>
        <Route  exact path="/" Component={LandingPage}/>           
        <Route  path="/home" Component={Home}/>
        <Route  path="/create" Component={DogCreated}/>
        <Route  path="/detail/:id" Component={Detail}/>   
        <Route  path="/*"  Component={Error404}/>     
      </Routes>
      
    </div>    
  );
}

export default App;
