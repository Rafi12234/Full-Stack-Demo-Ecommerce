import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Dashboard from './components/Dashboard/Dashboard'
import NotFound from './components/NotFound/NotFound'
import Product from './components/Product/Product'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='*' element={<NotFound/>} />

    </Routes>
  )
}

export default App
