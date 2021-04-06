import React, {useState} from 'react'
import LandingFragment from "../landing-fragment/landing-fragment";
import InfoFragment from "../info-fragment/info-fragment";
import { InfoData2, InfoData1, InfoData3 } from '../info-fragment/info-data'
import ServicesFragment from "../services-fragment/services-fragment";
import Footer from "../footer/footer";
import CryptoFragment from "../crypto-fragment/crypto-fragment";
import StockMarket from "../market/stock-market";
import CryptoMarket from "../market/crypto-market";

const Home = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return(
        <>
            <LandingFragment/>
            <InfoFragment {...InfoData2}/>
            <StockMarket/>
            {
                !user &&
                <InfoFragment {...InfoData1}/>
            }
            {
                user &&
                <InfoFragment {...InfoData3}/>
            }
            <CryptoFragment/>
            <CryptoMarket/>
            {
                !user &&
                <ServicesFragment/>
            }
            <Footer/>
        </>
    )
}

export default Home