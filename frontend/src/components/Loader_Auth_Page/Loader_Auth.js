import React,{useEffect,useState} from "react";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function LoaderAuth (props){
    const [text,setT] = useState('Loading')

    const [rep,setRep] = useState(false)

    const textGen = async() =>{
        await sleep(200)

        for(var i=1;i<4;i++){
            setT(text + '.'.repeat(i))
            await sleep(800);
        }

        setT('Loading')
        setRep(!rep)
    }

    useEffect(()=>{
        textGen()
    },[rep])

    return(
        <>
<<<<<<< HEAD
            {text}
=======
            <h1>Loading..</h1>
>>>>>>> e45c5f25bb0dfe1b74d69bc469f240f76690d1ec
        </>
    )

}