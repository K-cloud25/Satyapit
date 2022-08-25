import React from "react";
import * as IoIcons from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'
import * as ImIcons from 'react-icons/im'
import { IconContext } from 'react-icons/lib'
import './css/CustomNav.css'

export default function CustomNavbar(props){

    const backBtn = () =>{
        console.log('Back')
    }

    const displayTitle = () => {
        if(props.title.length < 50){
            return props.title
        }else{
            return props.title.slice(0,40) + "..." 
        }
    }

    return (
        <> 
            <div className="navbar">
            
                <div className="backBtn" onClick={backBtn}>
                    <IconContext.Provider value={{className:'backBtn'}}>
                        <IoIcons.IoMdReturnLeft />
                    </IconContext.Provider>
                </div>

                <div className="Title">Title</div>

                <div className="optionsTab">
                    <div className="option" onClick={()=>{console.log('Flag')}}>
                        <IconContext.Provider value={{className:'reactIcon flag'}}>
                            <IoIcons.IoMdFlag/>
                            <div className="options-Text">Flag</div>
                        </IconContext.Provider>
                    </div>
                    <div className="option" onClick={()=>{console.log('Dismiss')}}>
                        <IconContext.Provider value={{className:'reactIcon dismiss'}}>
                            <AiIcons.AiOutlineStop />
                            <div className="options-Text">Dismiss</div>
                        </IconContext.Provider>
                    </div>
                    <div className='option' onClick={() => console.log("Visit")} >
                        <IconContext.Provider value={{ className: 'reactIcon visit' }}>
                            <ImIcons.ImEarth />
                            <div className='options-Text'>Visit</div>
                        </IconContext.Provider>
                    </div>
                </div>

            </div>
        </>
    )
}