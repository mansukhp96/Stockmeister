import React, {useEffect} from 'react'
import Carousel from "react-elastic-carousel";
import './crypto-market.css'
import {Card} from "./card";
import CryptoService from '../../services/crypto-service'
import {connect} from "react-redux";

export const CryptoMarket = ({
                                 cryptoCoins = [],
                                 findTrending = () => { alert("fetching trending") }
}) => {

    const breakPoints = [
        { width : 500, itemsToShow: 2 },
        { width : 550, itemsToShow: 3 },
        { width : 600, itemsToShow: 4 },
        { width : 800, itemsToShow: 5 },
        { width : 900, itemsToShow: 6 },
        { width : 1200, itemsToShow: 9 },
    ]

    useEffect(() => {
        findTrending()
    }, []);

    return(
        <div id="market"
             className="stockmeister-crypto-market-container">
            <div className="stockmeister-stock-market-title">
                Top 100 Coins
            </div>
            {
                cryptoCoins.length > 9 &&
                <Carousel enableAutoPlay={true}
                          disableArrowsOnEnd={false}
                          autoPlaySpeed={2500}
                          pagination={false}
                          breakPoints={breakPoints}
                          className="stockmeister-carousel">
                    {
                        cryptoCoins.map((c,i) =>
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

const stpm = (state) => {
    return {
        cryptoCoins : state.cryptoReducer.cryptoCoins
    }
}

const dtpm = (dispatch) => {
    return {
        findTrending : () => {
            CryptoService.findTrending().then(allCoins => {
                dispatch({ type : "FIND_ALL_COINS", allCoins : allCoins })
            })
        }
    }
}

export default connect(stpm, dtpm)(CryptoMarket)