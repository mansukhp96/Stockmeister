import React from 'react'
import Carousel from "react-elastic-carousel";
import './market.css'
import {Card} from "./card";

export const StockMarket = () => {

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
             className="stockmeister-stock-market-container bg-light">
            <div className="stockmeister-stock-market-title">
                Trending This week.
            </div>
                <Carousel enableAutoPlay={true}
                          disableArrowsOnEnd={false}
                          autoPlaySpeed={2500}
                          pagination={false}
                          breakPoints={breakPoints}
                          className="stockmeister-carousel">
                    <Card symbol={"AAPL"}/>
                    <Card symbol="ACN"/>
                    <Card symbol="ADBE"/>
                    <Card symbol="AIG"/>
                    <Card symbol="ALL"/>
                    <Card symbol="AMGN"/>
                    <Card symbol="AMT"/>
                    <Card symbol="AMZN"/>
                    <Card symbol="AXP"/>
                    <Card symbol="BA"/>
                    <Card symbol="BAC"/>
                    <Card symbol="BIIB"/>
                    <Card symbol="BK"/>
                    <Card symbol="BKNG"/>
                    <Card symbol="BLK"/>
                    <Card symbol="BMY"/>
                    <Card symbol="BRK.B"/>
                    <Card symbol="CAT"/>
                    <Card symbol="CHTR"/>
                    <Card symbol="CL"/>
                    <Card symbol="CMCS"/>
                    <Card symbol="COF"/>
                    <Card symbol="COP"/>
                    <Card symbol="COST"/>
                    <Card symbol="CRM"/>
                    <Card symbol="CSCO"/>
                    <Card symbol="CVS"/>
                    <Card symbol="CVX"/>
                    <Card symbol="DD"/>
                    <Card symbol="DHR"/>
                    <Card symbol="DIS"/>
                    <Card symbol="DOW"/>
                    <Card symbol="DUK"/>
                    <Card symbol="EMR"/>
                    <Card symbol="EXC"/>
                    <Card symbol="FB"/>
                    <Card symbol="FDX"/>
                    <Card symbol="GD"/>
                    <Card symbol="GE"/>
                    <Card symbol="GILD"/>
                    <Card symbol="GM"/>
                    <Card symbol="GOOG"/>
                    <Card symbol="GOOG"/>
                    <Card symbol="GS"/>
                    <Card symbol="HD"/>
                    <Card symbol="HON"/>
                    <Card symbol="IBM"/>
                    <Card symbol="INTC"/>
                    <Card symbol="JNJ"/>
                    <Card symbol="JPM"/>
                    <Card symbol="KHC"/>
                    <Card symbol="KMI"/>
                    <Card symbol="KO"/>
                    <Card symbol="LLY"/>
                    <Card symbol="LMT"/>
                    <Card symbol="LOW"/>
                    <Card symbol="MA"/>
                    <Card symbol="MCD"/>
                    <Card symbol="MDLZ"/>
                    <Card symbol="MDT"/>
                    <Card symbol="MET"/>
                    <Card symbol="MMM"/>
                    <Card symbol="MO"/>
                    <Card symbol="MRK"/>
                    <Card symbol="MS"/>
                    <Card symbol="MSFT"/>
                    <Card symbol="NEE"/>
                    <Card symbol="NFLX"/>
                    <Card symbol="NKE"/>
                    <Card symbol="NVDA"/>
                    <Card symbol="ORCL"/>
                    <Card symbol="PEP"/>
                    <Card symbol="PFE"/>
                    <Card symbol="PG"/>
                    <Card symbol="PM"/>
                    <Card symbol="PYPL"/>
                    <Card symbol="QCOM"/>
                    <Card symbol="RTX"/>
                    <Card symbol="SBUX"/>
                    <Card symbol="SLB"/>
                    <Card symbol="SO"/>
                    <Card symbol="SPG"/>
                    <Card symbol="TGT"/>
                    <Card symbol="TMO"/>
                    <Card symbol="TSLA"/>
                    <Card symbol="TXN"/>
                    <Card symbol="UNH"/>
                    <Card symbol="UNP"/>
                    <Card symbol="UPS"/>
                    <Card symbol="USB"/>
                    <Card symbol="VZ"/>
                    <Card symbol="WBA"/>
                    <Card symbol="WFC"/>
                    <Card symbol="WMT"/>
                    <Card symbol="XOM"/>
                </Carousel>
        </div>
    )
}

export default StockMarket