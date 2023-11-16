import React from 'react'
import '../App.css'
import Header from './header'
import Webdoor from './webdoor'
import WebdoorDevices from './webdoorDevices'
import DeviceSection from './deviceSection'
import CollectionSection from './collectionSection'
import Mosaic from './mosaic'
import ComeceAgora from './comeceAgora'
import Footer from './footer'
import EscolhaPlano from './escolhaPlano'

export default function Home(){
    
    return(
        <>            
            <Header></Header>
            <Webdoor></Webdoor>
            <WebdoorDevices></WebdoorDevices>
            <EscolhaPlano></EscolhaPlano>
            <DeviceSection></DeviceSection>
            <CollectionSection></CollectionSection>
            <Mosaic></Mosaic>
            <ComeceAgora></ComeceAgora>
            <Footer></Footer>
        </>
    );
}