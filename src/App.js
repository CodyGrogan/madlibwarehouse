import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Navbar from './components/Navbar';
import Play from './components/Play';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/play' element={<Play/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
