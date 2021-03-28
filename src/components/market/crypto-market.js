import React, {useEffect, useState} from 'react'
import Carousel from "react-elastic-carousel";
import './crypto-market.css'
import {Card} from "./card";
import api from "../../api/crypto-api";

export const CryptoMarket = () => {

    const breakPoints = [
        { width : 500, itemsToShow: 2 },
        { width : 550, itemsToShow: 3 },
        { width : 600, itemsToShow: 4 },
        { width : 800, itemsToShow: 5 },
        { width : 900, itemsToShow: 6 }
    ]

    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            return await api.get("markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        }
        fetchTrending().then(response => setTrendingCoins(response.data))
    }, []);

    return(
        <div id="market"
             className="stockmeister-crypto-market-container">
            <div className="stockmeister-stock-market-title">
                Top {trendingCoins.length} Coins
            </div>
            <div className="text-center text-light small">
                Current price and 24hr change %
            </div>
            {
                trendingCoins.length > 9 &&
                <Carousel enableAutoPlay={true}
                          disableArrowsOnEnd={false}
                          autoPlaySpeed={2500}
                          pagination={false}
                          breakPoints={breakPoints}
                          className="stockmeister-carousel">
                    {
                        trendingCoins.map((c,i) =>
                            <Card key={i}
                                  symbol={c.symbol}
                                  priceChange={c.price_change_percentage_24h}
                                  value={c.current_price}/>
                        )
                    }
                </Carousel>
            }
        </div>
    )
}

export default CryptoMarket