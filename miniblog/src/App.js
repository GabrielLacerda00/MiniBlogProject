import './App.css';

import {Routes, BrowserRouter, Route, Navigate} from "react-router-dom";
//Mapeia se autenticação foi feita com sucesso
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
//Context
import { AuthProvider } from './context/AuthContext';

//Import routes pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth,(user) => {
      setUser(user)
    })

  },[auth]);

  if(loadingUser){
    return <p>Loading.....</p>
  }

  return (

    <div className="App">
        <AuthProvider value={{user}}>
          <BrowserRouter>
            <Navbar/>
            <div className="container">
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
              </Routes>
            </div>
            <Footer/>
          </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
