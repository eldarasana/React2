import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css'
import Home from './components/Home.jsx'

function App() {




  return (
    <>
      <BrowserRouter>
      
        <h1>Hi</h1>


        <ul>
          <NavLink to='/' activeclassname='active'>Home</NavLink>
        </ul>
      

        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
