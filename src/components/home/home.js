import React, {useState} from 'react'
import Topbar from "../topbar/topbar";
import Navbar from "../navbar/navbar";
import LandingFragment from "../landing-fragment/landing-fragment";
import InfoFragment from "../info-fragment/info-fragment";
import { InfoData2, InfoData1 } from '../info-fragment/info-data'
import ServicesFragment from "../services-fragment/services-fragment";
import Footer from "../footer/footer";
import CryptoFragment from "../crypto-fragment/crypto-fragment";
import StockMarket from "../market/stock-market";

const Home = () => {

    const [expand, setExpand] = useState(false)

    const toggleTopbar = () => {
        setExpand(!expand)
    }

    return(
        <div>
            <Topbar expand={expand} toggle={toggleTopbar}/>
            <Navbar toggle={toggleTopbar}/>
            <LandingFragment/>
            <InfoFragment {...InfoData2}/>
            <StockMarket/>
            <InfoFragment {...InfoData1}/>
            <CryptoFragment/>
            <ServicesFragment/>
            <Footer/>
        </div>
    )
}

export default Home