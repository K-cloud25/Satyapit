import React,{useEffect,useState} from 'react'
import './css/Tabs.css'

export default function Tabs(props){

    const [index,setIndex] = useState(0)    //Keep track of selected tab in child
    const [subIndex,setsub] = useState(4)          
    const [subIndex2, setsub2] = useState(4)

    //Runs whenever index value changes
    useEffect(()=>{
        props.pFilter(index)
    },[index])

    const te = (e)=>{
        props.sFilter(e)
        setsub(e)
    }

    const te2 = (e)=>{
        props.ssFilter(e)
        setsub2(e)
    }

    return(
        <>
           <div className='Container'>
                <div className={index !== 0 ? "header" : "headerSel"} onClick={()=>{setIndex(0)}}>
                    Trending
                </div> 
                <div className={index !== 1 ? "header" : "headerSel"} onClick={()=>{setIndex(1)}}>
                    Press Release Match
                    {
                        index ===1  ?
                        <div className='subList'>
                            <div className={subIndex2 === 4 ?'listItemSel' : 'listItem'} onClick={()=>{te2(4)}}>High to Low</div>
                            <div className={subIndex2 === 5 ?'listItemSel' : 'listItem'} onClick={()=>{te2(5)}}>Low to High</div>
                        </div> : <></>
                    }
                </div>
                <div className={index !== 2 ? "header" : "headerSel"} onClick={()=>{setIndex(2)}}>
                    Source
                    {
                        index ===2 ? 
                        <div className='subList'>
                            <div className={subIndex === 4 ?'listItemSel' : 'listItem'} onClick={()=>{te(4)}}>Reddit</div>
                            <div className={subIndex === 5 ?'listItemSel' : 'listItem'} onClick={()=>{te(5)}}>Twitter</div>
                            <div className={subIndex === 6 ?'listItemSel' : 'listItem'} onClick={()=>{te(6)}}>Web Article</div>
                            <div className={subIndex === 7 ?'listItemSel' : 'listItem'} onClick={()=>{te(7)}}>Youtube</div>
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