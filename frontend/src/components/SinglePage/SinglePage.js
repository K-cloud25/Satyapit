import React from "react";
import SplitPage from "./SplitPage";
import CustomNavbar from "./CustomNavbar";
import './css/SinglePage.css'
import './css/Setup.css'

export default function SinglePage(props){

    return(
        <>
            <div className="pageContainer">
                <div className="navContainer">
                    <CustomNavbar />
                </div>

                <div className="splitContainer">
                    <SplitPage />
                </div>  
            </div>
        </>
    )

}