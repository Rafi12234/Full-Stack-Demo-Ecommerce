import React from 'react'
import './Navbar.css'
import logo from '../../../images/logo.png'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
  <div className="container">

    <a className="navbar-brand" href="/">
    <img className='img-fluid' width={53} src={logo} alt="" /> MERN E-Commerce
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/products">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/carts">Cart</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/profile">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/dashboard">Dashboard</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
