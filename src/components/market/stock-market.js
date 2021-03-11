import React from 'react'
import Carousel from "react-elastic-carousel";
import './market.css'
import {Card} from "./card";

export const StockMarket = () => {

    const breakPoints = [
        { width : 1, itemsToShow: 1 },
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
                <Carousel enableAutoPlay={true}
                          disableArrowsOnEnd={true}
                          autoPlaySpeed={2000}
                          pagination={false}
                          breakPoints={breakPoints}
                          className="stockmeister-carousel">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Carousel>
        </div>
    )
}

export default StockMarket