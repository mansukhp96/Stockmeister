import React from 'react'
import LandingFragment from "../landing-fragment/landing-fragment";
import InfoFragment from "../info-fragment/info-fragment";
import { InfoData2, InfoData1 } from '../info-fragment/info-data'
import ServicesFragment from "../services-fragment/services-fragment";
import Footer from "../footer/footer";
import CryptoFragment from "../crypto-fragment/crypto-fragment";
import StockMarket from "../market/stock-market";
import CryptoMarket from "../market/crypto-market";

const Home = () => {

    return(
        <div>
            <LandingFragment/>
            <InfoFragment {...InfoData2}/>
            <StockMarket/>
            <InfoFragment {...InfoData1}/>
            <CryptoFragment/>
            <CryptoMarket/>
            <ServicesFragment/>
            <Footer/>
        </div>
    )
}

export default Home