import './App.css';
import React from "react";
import Navbar from "./component/Navbar";
import {Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Movies from './page/Movies';
import Users from './page/Users';
import Footer from './component/Footer';

function App() {

   
    return(
      <div className='App'>
          <Navbar/>
          <Routes>
            <Route path='/app' element={<Home />}/>
            <Route path='/' element={<Home />}/>
            <Route path='movies' element={<Movies />}/>
            <Route path='users' element={<Users />}/>
          </Routes>
          <Footer/>
      </div>
    )
}

export default App;