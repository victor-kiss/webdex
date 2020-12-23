import React,{useEffect} from 'react'

import Header from '../components/Header'
import HomeContent from '../contents/homeContent/HomeContent'
import Footer from '../components/Footer'

export default function Home() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Header/>
            <HomeContent/>
            <Footer/>
        </>
    )
}
