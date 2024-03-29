import React from 'react';
import "./Navbar.css";
import { GiNotebook } from "react-icons/gi";
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {useDispatch} from 'react-redux'
import{authActions} from "../../store/index";
import { useState } from 'react';




const Navbar = () => {
 
  const isLoggedIn = useSelector((state)=>state.isLoggedIn);
  const dispatch = useDispatch();
  const logout =()=>{
   
    sessionStorage.clear();
    dispatch(authActions.logout());
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <GiNotebook className="navbar-icon"  style={{  fontSize: "45px" }}/> &nbsp;<h1 className="navbar-brand2">TODOM</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2 ">
                <Link className="nav-link active"  aria-current="page" to="/">Home</Link>
              </li>
              {!isLoggedIn && (
              <> <li className="nav-item mx-2 ">
                
                <Link className="nav-link active"  aria-current="page" to="/todom">TODOM</Link>
              </li>
              <div className="signupbtn d-flex">
              <li className="nav-item btn-nav mx-2">
                <Link className="nav-link active btn-nav p-2 " style={{color:"white"}} aria-current="page" to="/signup">Sign Up</Link>
              </li>
              </div>
              <div className="signinbtn d-flex">
              <li className="nav-item btn-nav mx-2">
                <Link className="nav-link active btn-nav p-2  " aria-current="page" style={{color:"white"}} to="/signin">Sign In</Link>
              </li>
              </div></>)}
              {isLoggedIn &&(<><div className="d-flex"> 
                <li className="nav-item mx-2 ">
                <Link className="nav-link active"  aria-current="page" to="/todom">TODOM</Link>
              </li>
              </div>
              <div className="d-flex">
              <li className="nav-item btn-nav mx-2" onClick={logout}>
                <Link className="nav-link active p-2 " aria-current="page" style={{color:"white"}} to="/">Log Out</Link>
                
              </li>
              </div>
              
             </>)}
             
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;

