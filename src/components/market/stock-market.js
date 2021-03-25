import React, {useEffect} from 'react'
import Carousel from "react-elastic-carousel";
import './stock-market.css'
import {Card} from "./card";
import StockService from '../../services/stocks-service';
import {connect} from "react-redux";

export const StockMarket = ({
                                stocks=[],
                                findTrending = () => { alert("fetching trending stocks") }
}) => {

    const breakPoints = [
        { width : 500, itemsToShow: 2 },
        { width : 550, itemsToShow: 3 },
        { width : 600, itemsToShow: 4 },
        { width : 800, itemsToShow: 5 },
        { width : 900, itemsToShow: 6 }
    ]

    useEffect(() => {
        // findTrending()
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
                stocks.length > 9 &&
                <Carousel enableAutoPlay={true}
                          disableArrowsOnEnd={false}
                          autoPlaySpeed={3500}
                          pagination={false}
                          breakPoints={breakPoints}
                          className="stockmeister-carousel">
                    {
                        stocks.map((s,i) =>
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

const stpm = (state) => {
    return {
        stocks: state.stocksReducer.stocks
    }
}

const dtpm = (dispatch) => {
    return {
        findTrending : () => {
            StockService.findTrendingStocks().then((trendingStocks) => {
                console.log(trendingStocks.finance.result[0].quotes)
                dispatch({ type : "FIND_TRENDING_STOCKS", trendingStocks : trendingStocks.finance.result[0].quotes })
            })
        }
    }
}

export default connect(stpm, dtpm)(StockMarket);