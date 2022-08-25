import React,{useEffect,useState} from 'react'
import './css/Tabs.css'

export default function Tabs(props){

    const [index,setIndex] = useState(0)    //Keep track of selected tab in child
    const [subIndex,setsub] = useState(4)          

    //Runs whenever index value changes
    useEffect(()=>{
        props.pFilter(index)
    },[index])

    const te = (e)=>{
        props.sFilter(e)
        setsub(e)
    }

    return(
        <>
           <div className='Container'>
                <div className={index !== 0 ? "header" : "headerSel"} onClick={()=>{setIndex(0)}}>
                    Trending
                </div> 
                <div className={index !== 1 ? "header" : "headerSel"} onClick={()=>{setIndex(1)}}>
                    Press Release Match
                </div>
                <div className={index !== 2 ? "header" : "headerSel"} onClick={()=>{setIndex(2)}}>
                    Source
                    {
                        index ===2 || index===4 || index===5 || index===6 ? 
                        <div className='subList'>
                            <div className={subIndex === 4 ?'listItemSel' : 'listItem'} onClick={()=>{te(4)}}>Reddit</div>
                            <div className={subIndex === 5 ?'listItemSel' : 'listItem'} onClick={()=>{te(5)}}>Twitter</div>
                            <div className={subIndex === 6 ?'listItemSel' : 'listItem'} onClick={()=>{te(6)}}>Web Article</div>
                        </div> : <></>
                    }
                     
                </div>
                <div className={index !== 3 ? "header" : "headerSel"} onClick={()=>{setIndex(3)}}>
                    Flagged Articles
                </div>
            </div>

        </>
    )

}