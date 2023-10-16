import Admin from '../PagesContent/Admin/index'
import User from '../PagesContent/User/index'
import Login from '../Login/index'
import SignUp from '../SignUP/index'
import HomePage from '../HomePage/index'
import React from 'react'
import { Routes,Route } from 'react-router-dom'

function index() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/SignUp" element={<SignUp/>}/> 
        <Route path="/Login" element={<Login/>}/> 
        <Route path="/Admin" element={<Admin/>}/> 
        <Route path="/User" element={<User/>}/> 
    </Routes>
  )
}

export default index