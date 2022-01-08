import React from "react";
import {Link} from "react-router-dom";
import logo from "../img/logo/logo.png";

const Navbar =()=>{
    return(
       <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav justify-content-center  ">
            <Link to="Home" ><img src={logo} alt="logo" width="270" height="50" className="d-inline-block align-center"/></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <Link to="Menu" className="nav-link " >Menu</Link>
            <Link to="Login" className="nav-link " >Login</Link>
            <Link to="Cart" className="nav-link ">Cart</Link>
            
       </nav>
       
       </>
    )
}
export default Navbar;