import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css'
import Home from './pages/HomePage.jsx'
import Users from './pages/UsersPage.jsx'
import AddUser from './pages/AddUserPage.jsx'
import AddGame from './pages/AddGamePage.jsx';
import User from './pages/UserPage.jsx'
import EditUser from './pages/EditUserPage.jsx'
import EditGame from './pages/EditGamePage.jsx';
import Games from './pages/GamesPage.jsx';
import Game from './pages/GamePage.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
    
        <ul>
          <NavLink to='/' activeclassname='active'>Home</NavLink>
          <NavLink to='/users' activeclassname='active'>Users</NavLink>
          <NavLink to='/add_user' activeclassname='active'>Add User</NavLink>
          <NavLink to='/games' activeclassname='active'>Games</NavLink>
          <NavLink to='/add_game' activeclassname='active'>Add Game</NavLink>
        </ul>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/add_user' element={<AddUser/>}/>
          <Route path='/games' element={<Games/>}/>
          <Route path='/add_game' element={<AddGame/>}/>

          {/* DYNAMIC ROUTES */}
          <Route path='/users/:id' element={<User/>}/>
          <Route path='/games/:id' element={<Game/>}/>
          <Route path='/edit_user/:id' element={<EditUser/>}/>
          <Route path='/edit_game/:id' element={<EditGame/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
