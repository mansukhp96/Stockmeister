import React, {useEffect, useState} from 'react'
import Carousel from "react-elastic-carousel";
import './stock-market.css'
import {Card} from "./card";
import api from '../../api/yahoo-stocks-api';

const YAHOO_KEY = process.env.YAHOO_APIKEY

export const StockMarket = () => {

    const breakPoints = [
        { width : 500, itemsToShow: 2 },
        { width : 550, itemsToShow: 3 },
        { width : 600, itemsToShow: 4 },
        { width : 800, itemsToShow: 5 },
        { width : 900, itemsToShow: 6 }
    ]

    const [trendingStocks, setTrendingStocks] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            return await api.get("get-trending-tickers?region=US",{
                headers : {
                    "x-rapidapi-key": "dd2c68c0b8msh7a436aa8ec273d1p13d278jsnf1e7c9c3ac8f",
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
                }
            })
        }
        // fetchTrending().then(response =>
        //     setTrendingStocks(response.data.finance.result[0].quotes))
    }, []);

    return(
        <div id="market"
             className="stockmeister-stock-market-container bg-light">
            <div className="stockmeister-stock-market-title">
                Trending Today
            </div>
            <div className="text-center text-secondary small">
                Current price and 24hr change %
            </div>
            {
                trendingStocks.length > 9 &&
                <Carousel enableAutoPlay={true}
                          disableArrowsOnEnd={false}
                          autoPlaySpeed={3500}
                          pagination={false}
                          breakPoints={breakPoints}
                          className="stockmeister-carousel">
                    {
                        trendingStocks.map((s,i) =>
                            <Card key={i}
                                  symbol={s.symbol}
                                  value={s.regularMarketPrice}
                                  priceChange={s.regularMarketChangePercent} />
                        )
                    }
                </Carousel>
            }
        </div>
    )
}

export default StockMarket;