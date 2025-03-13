import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css'
import Home from './pages/HomePage.jsx'
import Users from './pages/UsersPage.jsx'
import AddUser from './pages/AddUserPage.jsx'
import User from './pages/UserPage.jsx'
import EditUser from './pages/EditUserPage.jsx'

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

          {/* DYNAMIC ROUTES */}
          <Route path='/users/:id' element={<User/>}/>
          <Route path='/edit_user/:id' element={<EditUser/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
