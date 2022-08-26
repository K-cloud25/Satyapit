import "./css/Navbar.css";
import React,{ useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../images/Satyapit_Logo.png'


export default function Navbar() {

    const navigate = useNavigate()

    return (
    <div>
        
      <nav className="navigation">
      <img src={Logo}  id ="logo" className="logo"/>
      <button className="menu" onClick={()=>{navigate('/login/')}}> Logout</button>
      </nav> 
    </div>
    )
    
}