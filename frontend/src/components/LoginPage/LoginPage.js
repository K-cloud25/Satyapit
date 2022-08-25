import React,{useState,useEffect, useSyncExternalStore} from "react";
import './css/LoginPage.css'
import * as BiIcons from 'react-icons/bi'
import * as RiIcons from 'react-icons/ri'
import { IconContext } from 'react-icons'
import { useNavigate } from "react-router-dom";

export default function LoginPage(props){

    const [uid,setUid] = useState(-1)
    const [userName,setUserName] = useState()
    const [userPasswrd,setPasswrd] = useState()

    const [in_id,setInID] = useState(false)
    const [in_name,setInName] = useState(false)
    const [in_Passwrd,setInPasswrd] = useState(false)

    const [user,setUser] = useState()

    const navigate = useNavigate()

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

    const sub = async(e) =>{
        const response = await fetch('/apiEP/getUser?id='+uid);
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
                navigate('mainpage/')
            }else{
                setInPasswrd(!in_Passwrd)
            }
        }else{
            setInName(!in_name)
            navigate('mainpage/')
        }
    }

    const userVerify = async (e) => {
        console.log("clicked")
        if(uid === -1){
            setInID(!in_id)
        }else{
            await sub('1')
        }
    }

    const onSubmitClick = () =>{
        userVerify()
    }

    return (
        <>
            <IconContext.Provider value={{className:'react-icons'}}>
                <div className="loginContainer">
                    <p className="loginTitle">Login</p>

                    <form>
                        <p className={in_id ? 'Warning_active' : 'WarningMessage'}>Invalid User ID</p>
                        <div className={ in_id ? 'itemForm warning' : 'itemForm'}>
                            <RiIcons.RiContactsFill/>
                            <input type='number' className='formInput' id='userID' placeholder='Enter ID' onChange={(e)=>{setUid(e.target.value)}}></input><br></br>
                        </div>

                        <p className={in_name ? 'Warning_active' : 'WarningMessage'}>Invalid User Name</p>
                        <div className={ in_name ? 'itemForm warning' : 'itemForm'}>
                            <BiIcons.BiUserCircle/>
                            <input type='text' className='formInput' id='userName' placeholder='Enter Username' onChange={(e)=>{setUserName(e.target.value)}}></input><br></br>
                        </div>

                        <p className={in_Passwrd ? 'Warning_active' : 'WarningMessage'}>Incorrect Password</p>
                        <div className={ in_Passwrd ? 'itemForm warning' : 'itemForm'}>
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