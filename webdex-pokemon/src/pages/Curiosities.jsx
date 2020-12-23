import React,{useEffect} from 'react'

import Header from '../components/Header'
import CuriositiesContent from '../contents/curiosities/CuriositiesContent'
import Footer from '../components/Footer'

export default function Curiosities() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Header/>
            <CuriositiesContent/>
            <Footer/>
        </>
    )
}
