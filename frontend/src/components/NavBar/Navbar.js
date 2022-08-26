import "./css/Navbar.css";
import React,{ useState } from 'react';
import { useNavigate } from "react-router-dom";

import refresh from "./MainPge"
import {FiRefreshCw} from "react-icons/fi";

//import Logo fro

import Logo from '../images/Satyapit_Logo.png'


export default function Navbar() {

    const navigate = useNavigate()

    return (
    <div>
        
      <nav className="navigation">
      <img src={Logo}  id ="logo" className="logo"/>
      <button > <FiRefreshCw/>  </button>
      <button className="menu" onClick={()=>{navigate('/login/')}}> Logout</button>
      </nav> 
    </div>
    )
    
}