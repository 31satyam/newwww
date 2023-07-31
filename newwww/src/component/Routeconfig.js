import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Product from './Product';
import About from './About';
import Navlaout from './Navlaout';

export default function Routeconfig() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navlaout/>}>
            <Route path='/product' element={<Product/>}/>            
            <Route path='/about' element={<About/>}/>  
            </Route>          
        </Routes>
    </BrowserRouter>
  )
}
