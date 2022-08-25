import React,{useState,useEffect} from "react";
import Table from "../Table_Component/Table";
import { useLocation,useNavigate } from "react-router-dom";


export default function MainPage(props){

    const [data,setData] = useState()
    const [sorted,setSorted] = useState()
    const [loading,setloading] = useState(false)

    const location = useLocation()
    const navigate = useNavigation()

    /* Data Caller Runs on Page load */
    useEffect(()=>{
        const runer = async()=>{

            const response = await fetch('apiEP/getAllNews')
            const data = await response.json()
            setData(data)
            console.log(data)
        }
        if(location.state.user=== null){
            navigate('homepage/buffer')
        }
        else
            runer()
    },[])

    const TableComponent=(e)=>{
        //console.log(sorted[e])
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
            {load ? <Table data={sorted} TableComponent={TableComponent}/> : <Loader />}
        </>
    )
}
