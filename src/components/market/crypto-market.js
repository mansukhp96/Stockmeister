import React from 'react'
import Carousel from "react-elastic-carousel";
import './crypto-market.css'
import {Card} from "./card";

export const CryptoMarket = () => {

    const breakPoints = [
        { width : 500, itemsToShow: 2 },
        { width : 550, itemsToShow: 3 },
        { width : 600, itemsToShow: 4 },
        { width : 800, itemsToShow: 5 },
        { width : 900, itemsToShow: 6 },
        { width : 1200, itemsToShow: 9 },
    ]

    return(
        <div id="market"
             className="stockmeister-crypto-market-container">
            <div className="stockmeister-stock-market-title">
                Trending Today.
            </div>
            <Carousel enableAutoPlay={true}
                      disableArrowsOnEnd={false}
                      autoPlaySpeed={2500}
                      pagination={false}
                      breakPoints={breakPoints}
                      className="stockmeister-carousel"
                      isRTL>
                <Card symbol="BTC"/>
                <Card symbol="ETH"/>
                <Card symbol="USDT"/>
                <Card symbol="ADA"/>
                <Card symbol="DOT"/>
                <Card symbol="XRP"/>
                <Card symbol="UNI"/>
                <Card symbol="LTC"/>
                <Card symbol="LINK"/>
                <Card symbol="BCH"/>
                <Card symbol="USDC"/>
                <Card symbol="XLM"/>
                <Card symbol="LUNA"/>
                <Card symbol="WBTC"/>
                <Card symbol="DOGE"/>
                <Card symbol="THETA"/>
                <Card symbol="ATOM"/>
                <Card symbol="CRO"/>
                <Card symbol="VET"/>
                <Card symbol="AAVE"/>
                <Card symbol="AVAX"/>
                <Card symbol="XMR"/>
                <Card symbol="OKB"/>
                <Card symbol="EOS"/>
                <Card symbol="TRX"/>
                <Card symbol="FIL"/>
                <Card symbol="MIOTA"/>
                <Card symbol="SOL"/>
                <Card symbol="BSV"/>
                <Card symbol="XEM"/>
                <Card symbol="FTT"/>
                <Card symbol="ALGO"/>
                <Card symbol="BUSD"/>
                <Card symbol="XTZ"/>
                <Card symbol="CHZ"/>
                <Card symbol="NEO"/>
                <Card symbol="DAI"/>
                <Card symbol="KSM"/>
                <Card symbol="SUSHI"/>
                <Card symbol="CDAI"/>
                <Card symbol="HT"/>
                <Card symbol="CETH"/>
                <Card symbol="HBAR"/>
                <Card symbol="CUSDC"/>
                <Card symbol="ENJ"/>
                <Card symbol="EGLD"/>
                <Card symbol="DASH"/>
                <Card symbol="DCR"/>
                <Card symbol="GRT"/>
                <Card symbol="LEO"/>
                <Card symbol="MATIC"/>
                <Card symbol="COMP"/>
                <Card symbol="CEL"/>
                <Card symbol="MKR"/>
                <Card symbol="ZIL"/>
                <Card symbol="RVN"/>
                <Card symbol="HBTC"/>
                <Card symbol="NEXO"/>
                <Card symbol="ZEC"/>
                <Card symbol="ETC"/>
                <Card symbol="XSUSHI"/>
                <Card symbol="UMA"/>
                <Card symbol="CAKE"/>
                <Card symbol="RUNE"/>
                <Card symbol="CHSB"/>
                <Card symbol="YFI"/>
                <Card symbol="HOT"/>
                <Card symbol="STX"/>
                <Card symbol="MANA"/>
                <Card symbol="ICX"/>
                <Card symbol="UST"/>
                <Card symbol="VGX"/>
                <Card symbol="BTT"/>
                <Card symbol="ZRX"/>
                <Card symbol="FLOW"/>
                <Card symbol="WAVES"/>
                <Card symbol="FTM"/>
                <Card symbol="REN"/>
                <Card symbol="ONT"/>
                <Card symbol="DGB"/>
                <Card symbol="BTMX"/>
                <Card symbol="SC"/>
                <Card symbol="AMP"/>
                <Card symbol="NPXS"/>
                <Card symbol="PAX"/>
                <Card symbol="IOST"/>
                <Card symbol="ONE"/>
                <Card symbol="OMG"/>
                <Card symbol="LRC"/>
                <Card symbol="NANO"/>
                <Card symbol="QTM"/>
                <Card symbol="CRV"/>
                <Card symbol="ZEN"/>
            </Carousel>
        </div>
    )
}

export default CryptoMarket