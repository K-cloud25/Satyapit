import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

import LoginPage from './LoginPage/LoginPage';

function App () {

    //React Router Head Route 
        // 2 Routes : 1.Login Page ,2.Homepage /
                //Homepage 2 Routes  : 1. MainPage, 2.SingleItem

    return (
        <>
        </>
    )

}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)