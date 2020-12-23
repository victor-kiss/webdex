import React,{useEffect} from 'react'

import Header from '../components/Header'
import DClick from '../contents/dontClick/dClick'

export default function DontClick() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Header/>
            <DClick/>
        </>
    )
}
