import './App.css';

import {Routes, BrowserRouter, Route, Navigate} from "react-router-dom";

//Import routes pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;