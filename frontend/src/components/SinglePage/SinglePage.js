import React from "react";
import {useNavigate,useLocation} from 'react-router-dom'
import SplitPage from "./SplitPage";
import CustomNavbar from "./CustomNavbar";
import './css/SinglePage.css'
import './css/Setup.css'

export default function SinglePage(props){

    const location = useLocation();
    const navigation = useNavigate();

    const OptClick = (e) =>{
        if(e ==='Flag'){
            flag()
        }else if(e=='Dismiss'){
            del()
        }else if(e=='Visit'){
            visit()
        }
    }

    const flag = () =>{
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id : location.state.sorted.id,
              flags : 1
            }),
          };
          fetch("/apiEP/updateFnews/", requestOptions).then((response) => {
            if (response.ok) {
                navigation('/mainpage/')
            } else {
              console.log('Error')
            }
          });
    }

    const del = () =>{
        const requestOptions = {
            method : "DELETE",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(),
        };

        fetch('/apiEP/deleteFnews/'+ String(location.state.sorted.id),requestOptions)
        navigation('/mainpage/')
    }

    const visit = () =>{
        window.open(location.state.sorted.url,'_blank');
    }

    return(
        <>
            <div className="pageContainer">
                <div className="navContainer">
                    <CustomNavbar optClick={OptClick}  title={location.state.sorted.title} />
                </div>

                <div className="splitContainer">
                    <SplitPage fnews={location.state.sorted}/>
                </div>  
            </div>
        </>
    )

}