import React,{useState,useEffect} from "react";
import Table from "../Table_Component/Table";
import Loader from "../Loader/Loader";


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
            //console.log(data)
        }
            runer()
    },[])

    const TableComponent=(e)=>{useEffect(() => {
      if(typeof data  === 'undefined'){
        onLoading(false)
      }else{
        setSorted(data)
        onLoading(true)
      }
    },[data]);
        navigate('/homepage/page',{ state : {'sorted' : sorted[e],'user' : location.state.user}})
      }

    // Runs on data change 
    useEffect(()=>{
        if(typeof data !== 'undefined'){
            setSorted(data)
            setloading(true)
        }
    },[data])

    return(
        <>
            {loading ? <Table data={sorted} TableComponent={TableComponent}/> : <Loader/>}
        </>
    )
}
