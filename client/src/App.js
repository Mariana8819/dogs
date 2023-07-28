import './App.css';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import DogCreated from './components/DogCreated/DogCreated';
import Detail from './components/Detail/Detail';

axios.defaults.baseURL='http://localhost:3001';

function App() {
  //const location = useLocation();
  return (    
    <div className="App">
      <Routes>
        <Route  path="/" Component={LandingPage}/>
        <Route  path="/home" Component={Home}/>
        <Route  path="/dogs" Component={DogCreated}/>
        <Route  path="/home/:id" Component={Detail}/>
      </Routes>
    </div>    
  );
}

export default App;
