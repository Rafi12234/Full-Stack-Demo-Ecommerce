import React from "react";
import "./Navbar.css";
import logo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="img-fluid" width={53} src={logo} alt="" /> MERN
          E-Commerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink style={({isActive}) => {
                return {

                  color: isActive ? "red" : '',
                }

              }}className="nav-link"  aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={({isActive}) => {
                return {

                  color: isActive ? "red" : '',
                }

              }}className="nav-link"  to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={({isActive}) => {
                return {

                  color: isActive ? "red" : '',
                }

              }}className="nav-link"  to="/cart">
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={({isActive}) => {
                return {

                  color: isActive ? "red" : '',
                }

              }}className="nav-link"  to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={({isActive}) => {
                return {

                  color: isActive ? "red" : '',
                }

              }}className="nav-link"  to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={({isActive}) => {
                return {

                  color: isActive ? "red" : '',
                }

              }}className="nav-link"  to="/dashboard">
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
