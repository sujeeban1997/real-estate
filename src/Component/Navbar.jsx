import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  useCart } from "react-use-cart";

const Navbar = () => {
    const state = useSelector((state) => state.handleCart);

    const {
        totalUniqueItems,
      } = useCart();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">
                    REAL ESTATE
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/properties">
                                Properties
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className="buttons-section">
                        <NavLink to="/login" className="btn btn-outline-dark">
                            <i className="fa fa-sign-in me-2"></i>Login
                        </NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-user-plus me-2"></i>Register
                        </NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-heart me-2"></i>Favourite ({totalUniqueItems})
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
