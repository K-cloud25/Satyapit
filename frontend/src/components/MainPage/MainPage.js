import React,{useState,useEffect} from "react";
import Table from "../Table_Component/Table";
<<<<<<< HEAD
import Loader from "../Loader/Loader";

=======
import LoaderAuth from "../Loader_Auth_Page/Loader_Auth";
>>>>>>> 4e404de7446f9f9ce7c97dc9139ff2b001e90e42

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
<<<<<<< HEAD
            {loading ? <Table data={sorted} TableComponent={TableComponent}/> : <Loader/>}
=======
            {loading ? <Table data={sorted} TableComponent={TableComponent}/> : <LoaderAuth/>}
>>>>>>> 4e404de7446f9f9ce7c97dc9139ff2b001e90e42
        </>
    )
}
