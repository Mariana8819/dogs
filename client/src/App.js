import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import DogCreated from './components/DogCreated/DogCreated';
import Detail from './components/Detail/Detail';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route  path="/" Component={LandingPage}/>
        <Route  path="/home" Component={Home}/>
        <Route  path="/dog" Component={DogCreated}/>
        <Route  path="/home/:id" Component={Detail}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
