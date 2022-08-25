import React,{useState,useEffect} from "react";
import Table from "../Table_Component/Table";


export default function MainPage(props){

    const [data,setData] = useState()
    const [sorted,setSorted] = useState()
    const [loading,setloading] = useState(false)


    /* Data Caller Runs on Page load */
    useEffect(()=>{
        const runer = async()=>{

            const response = await fetch('apiEP/getAllNews')
            const data = await response.json()
            setData(data)
            console.log(data)
        }
        runer()
    },[])


    // Runs on data change 
    useEffect(()=>{
        if(typeof data !== 'undefined'){
            setSorted(data)
            setloading(true)
        }
    },[data])

    return(
        <>
        
        </>
    )
}
