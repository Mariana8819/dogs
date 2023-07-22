import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route  path="/" Component={LandingPage}/>
        <Route  path="/home" Component={Home}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
