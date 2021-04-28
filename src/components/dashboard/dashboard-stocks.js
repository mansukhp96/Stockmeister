import React from 'react';
import './dashboard.css'
import DashboardStockRow from "./dashboard-stock-row";
import {Link} from "react-router-dom";

const DashboardStocks = ({data}) => {
    return (
        <>
            <div className="stockmeister-watchlist-header">
                WatchList
            </div>
            {
                data.one && data.two && data.three &&
                <>
                    {
                        data.one.symbol &&
                        <Link className="text-decoration-none text-dark"
                              to={`/search/stocks/details/${data.one.symbol}`}>
                            <DashboardStockRow symbol={data.one.symbol}
                                               price={data.one.open}
                                               volume={data.one.volume}
                                               percent_change={data.one.percent_change}
                                               exchange={data.one.exchange}
                                               name={data.one.name}/>
                        </Link>
                    }
                    {
                        data.two.symbol &&
                        <DashboardStockRow symbol={data.two.symbol}
                                           exchange={data.two.exchange}
                                           price={data.two.open}
                                           volume={data.two.volume}
                                           percent_change={data.two.percent_change}
                                           name={data.two.name}/>
                    }
                    {
                        data.three.symbol &&
                        <DashboardStockRow symbol={data.three.symbol}
                                           exchange={data.three.exchange}
                                           price={data.three.open}
                                           volume={data.three.volume}
                                           percent_change={data.three.percent_change}
                                           name={data.three.name}/>
                    }
                </>
            }
        </>
    )
}

export default DashboardStocks;