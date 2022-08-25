import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import Table from './Table_Component/Table';
import { BrowserRouter as Router, Route, Link,Redirect, useLocation, Routes } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import MainPage from './MainPage/MainPage';

function App () {

    //React Router Head Route 
        // 2 Routes : 1.Login Page ,2.Homepage /
                //Homepage 2 Routes  : 1. MainPage, 2.SingleItem

    return (
        <>
<<<<<<< HEAD
            
=======
        <MainPage />
>>>>>>> 198190e54e6fd70ddd12b8ef8a3fcf4e6159c232
        </>
    )

}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)