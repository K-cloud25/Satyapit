import React,{useState,useEffect} from "react";
import Table from "../Table_Component/Table";
import Navbar from "../NavBar/Navbar";
import LoaderAuth from "../Loader_Auth_Page/Loader_Auth";
import Tabs from "../Tabs_Component/Tabs";
import { useNavigate } from "react-router-dom";

export default function MainPage(props){

    const [data,setData] = useState()
    const [sorted,setSorted] = useState()
    const [loading,setloading] = useState(false)

    const [filterOpt,setFilter] = useState(0)
    const [subFilter,setSubFilter] = useState(4)
    const [subFilter2,setSubFilter2] = useState(4)

    /* Data Caller Runs on Page load */
    useEffect(()=>{
        const runer = async()=>{

            const response = await fetch('/apiEP/getAllNews/')
            const data = await response.json()
            setData(data)
        }
        
        runer()
    },[])

    const navigate = useNavigate()

    const TableComponent=(e)=>{
      navigate('/mainpage/page',{ state : {'sorted' : sorted[e]}})
    }

    // Runs on data change 
    useEffect(()=>{
        if(typeof data !== 'undefined'){
            setSorted(data)
            setloading(true)
        }
    },[data])


    const refresh = () =>{
        setloading(false)
        const runer = async()=>{

            const response = await fetch('/apiEP/getAllNews/')
            const data = await response.json()
            setData(data)
        }
        
        setFilter(0)
        runer()
    }


    const optFilter = (e) =>{setFilter(e)}
    const optSubFilter = (e) =>{setSubFilter(e)}
    const optSubFilter2 = (e) =>{setSubFilter2(e)}

    useEffect(()=>{
        console.log(filterOpt,subFilter,subFilter2)
        if(filterOpt===0){
            setSorted(data)
        }
        else if(filterOpt===1){
            if(subFilter2==4){
                const temp = [...data].sort((a,b)=>{return b.pr_per_cent - a.pr_per_cent})
                setSorted(temp)
            }else if(subFilter2==5){
                const temp = [...data].sort((a,b)=>{return a.pr_per_cent - b.pr_per_cent})
                setSorted(temp)
            }
        }else if(filterOpt===2){
            if(subFilter===4){
                const temp = [...data].filter((a)=>{if(a.src === "Reddit"){return true} return false})
                setSorted(temp)
            }
            else if(subFilter===5){
                const temp = [...data].filter((a)=>{if(a.src === "Twitter"){return true} return false})
                setSorted(temp)
            }else if(subFilter===6){
                const temp = [...data].filter((a)=>{if(a.src === "Google"){return true} return false})
                setSorted(temp)
            }else if(subFilter===7){
                const temp = [...data].filter((a)=>{if(a.src==='Youtube'){return true} return false})
                setSorted(temp)
            }
            
        }
        else if(filterOpt==3){
            flagFilter()
        }
    },[filterOpt,subFilter,subFilter2])


    //Sorting/Filtering Funtions

    const flagFilter = () =>{
        const temp = [...data].filter((e)=>{if(e.flags===1){return true}return false})
        setSorted(temp)
    }


    return(
        <>
            <Navbar  onRefresh={refresh}/>
            <Tabs pFilter={optFilter} sFilter={optSubFilter} ssFilter={optSubFilter2} />
            {loading ? <Table data={sorted} TableComponent={TableComponent}/> : <LoaderAuth/>}
        </>
    )
}
