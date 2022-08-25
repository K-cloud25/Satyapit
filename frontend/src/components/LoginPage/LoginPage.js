import React,{useState,useEffect, useSyncExternalStore} from "react";
import './css/LoginPage.css'
import * as BiIcons from 'react-icons/bi'
import * as RiIcons from 'react-icons/ri'
import { IconContext } from 'react-icons'

export default function LoginPage(props){

    const [uid,setUid] = useState(-1)
    const [userName,setUserName] = useState()
    const [userPasswrd,setPasswrd] = useState()

    return (
        <>
            <IconContext.Provider value={{className:'react-icons'}}>
                <div className="loginContainer">
                    <p className="loginTitle">Login</p>

                    <form>
                        <div className="itemForm">
                            <RiIcons.RiContactsFill/>
                            <input type='number' className='formInput' id='userID' placeholder='Enter ID' onChange={(e)=>{setUid(e.target.value)}}></input><br></br>
                        </div>

                        <div className="itemForm">
                            <BiIcons.BiUserCircle/>
                            <input type='text' className='formInput' id='userName' placeholder='Enter Username' onChange={(e)=>{setUserName(e.target.value)}}></input><br></br>
                        </div>

                        <div className="itemForm">
                            <RiIcons.RiFingerprint2Line/>
                            <input type='text' className='formInput' id='userPasswrd' placeholder='Enter Password' onChange={(e)=>{setPasswrd(e.target.value)}}></input><br></br>
                        </div>
                    </form>

                </div>
            </IconContext.Provider>
        </>
    )

}