import React,{useState,useEffect, useSyncExternalStore} from "react";
import './css/LoginPage.css'
import * as BiIcons from 'react-icons/bi'
import * as RiIcons from 'react-icons/ri'
import { IconContext } from 'react-icons'
import { useLocation } from "react-router-dom";

export default function LoginPage(props){

    const [uid,setUid] = useState(-1)
    const [userName,setUserName] = useState()
    const [userPasswrd,setPasswrd] = useState()

    const [in_id,setInID] = useState(false)
    const [in_name,setInName] = useState(false)
    const [in_Passwrd,setInPasswrd] = useState(false)

    const [user,setUser] = useState()



    const unInput =(e) =>{
        if(in_name===true){
            setInName(!in_name)
            }
            setUserName(e.target.value)
    
    }

    const inID = (e) =>{
        if(inID === true){
            setInID(!inID)
        }
        setUid(e.target.value)
    }

    const inPwrd = (e) =>{
        if(inPwrd === true){
            setInPasswrd(!inPwrd)
        }
        setPasswrd(e.target.value)
    }

    const userVerify = async (e) => {

        if(uid == -1){
            setInID(!inID)
        }else{
            await    sub('1')
        }
    }

    const sub = async(e) =>{
        const response = await fetch('/api/getUser?id='+uid);
        if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        await setUser(data)

        }
        else{
            setInID(!inID);
        }
    }

    useEffect(() =>{
        if(user !== undefined){
            userCheck()
        }
    },[user])

    const userCheck = async () =>{
        if(userName === user.username){
            if(userPasswrd === user.passwrd){
                console.log(correct_credentials)
            }else{
                setInPasswrd(!in_Passwrd)
                console.log(incoreect_password)
            }
        }else{
            setInName(!in_name)
            console.log(incorrect_credentials)
        }
    }

    const onSubmitClick = () =>{
        console.log(uid)
        console.log(userName)
        console.log(userPasswrd)
    }

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

                    <button className="Submit_btn" onClick={onSubmitClick} >Submit</button>

                </div>
            </IconContext.Provider>
        </>
    )

}