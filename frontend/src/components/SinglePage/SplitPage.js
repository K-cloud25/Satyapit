import React,{useEffect,useState} from "react";
import Windows from './Windows'
import Loader from '../Loader/Loader'
import './css/Setup.css'

export default function SplitPage(props){

    const [split,setSplit] = useState(true)

    const [jdata,getJdata] = useState()

    const [loading,setLoading] = useState(false)

    const splitBtnClick = () =>{
        setSplit(!split)
    }
    
    useEffect(() => {

        const getPrl = async () =>{
            const response = await fetch("/apiEP/getPrel/?id="+props.fnews.pr_id)
            const jdata = await response.json()
            getJdata(jdata)
        }

        getPrl()
    }, [])

    useEffect(()=>{

        if(typeof jdata !== 'undefined'){
            setLoading(true)
        }

    },[jdata])
    
    return(
        <>
            { loading? 
            <div className="windows">

                <button className="splitBtn" onClick={splitBtnClick}>Split Window</button>

                <div className="windownSplit">
                    <div className={split ? 'splitfull lefthide' : 'split left'}>
                        <div className="centered">
                            <Windows site={jdata.url} />
                        </div>
                    </div>

                    <div className={split ? 'splitfull right' : 'split right'}>
                        <div className='centered'>
                            <Windows site={props.fnews.url} />
                        </div>
                    </div>
                </div>

            </div>   
            : 
            <Loader></ Loader>
            }         
        </>
    )

}