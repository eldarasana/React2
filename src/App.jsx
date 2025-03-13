import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css'
import Home from './components/Home.jsx'
import Users from './components/Users.jsx'
import AddUser from './components/AddUser.jsx'

function App() {




  return (
    <>
      <BrowserRouter>
    

        <ul>
          <NavLink to='/' activeclassname='active'>Home</NavLink>
          <NavLink to='/users' activeclassname='active'>Users</NavLink>
          <NavLink to='/add_user' activeclassname='active'>AddUser</NavLink>
        </ul>
      

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/add_user' element={<AddUser/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
