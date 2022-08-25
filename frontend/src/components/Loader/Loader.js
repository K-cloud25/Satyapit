import React,{useState,useEffect} from "react";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

export default function Loader(props){

    const [text,setT] = useState('Loading')

    const [rep,setRep] = useState(false)

    const textGen = async() =>{
        await sleep(200)

        for(var i=1;i<4;i++){
            setT(text + '..'.repeat(i))
            await sleep(800);
        }

        setT('>Loading')
        setRep(!rep)
    }

    useEffect(()=>{
        textGen()
    },[rep])

    return(
        <>
            {text}
        </>
    )
}