import React,{useEffect,useState} from "react";
import Windows from './Windows'
import './css/Setup.css'

export default function SplitPage(props){

    const [split,setSplit] = useState(false)

    const splitBtnClick = () =>{
        setSplit(!split)
    }
    
    return(
        <>
            <div className="windows">

                <button className="splitBtn" onClick={splitBtnClick}>Split Window</button>

                <div className="windownSplit">
                    <div className={split ? 'splitfull lefthide' : 'split left'}>
                        <div className="centered">
                            <h3>Press</h3>
                        </div>
                    </div>

                    <div className={split ? 'splitfull right' : 'split right'}>
                        <div className='centered'>
                            <h3>Flag</h3>
                        </div>
                    </div>
                </div>

            </div>            
        </>
    )

}