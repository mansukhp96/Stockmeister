import React, {useEffect, useState} from 'react';
import './dashboard-stock-row.css';

const DashboardStockRow = ({symbol, name, price, volume, percent_change, exchange}) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {

    },[]);

    return(
        <div className="stockmeister-stock-container">
            <div className="stockmeister-stock-row">
                <div className="stockmeister-dashboard-stock">
                    <h1>
                        {name}
                    </h1>
                    <p className="stockmeister-dashboard-stock-symbol">
                        {symbol}
                    </p>
                    <p className="stockmeister-dashboard-stock-price">
                        ${price}
                    </p>
                    <p className="stockmeister-dashboard-stock-volume">
                        {volume}
                    </p>
                    {
                        percent_change >= 0 &&
                        <p className="stockmeister-dashboard-stock-percent_change text-success">
                            +{percent_change}%
                        </p>
                    }
                    {
                        percent_change < 0 &&
                        <p className="stockmeister-dashboard-stock-percent_change text-danger">
                            {percent_change}%
                        </p>
                    }

                    {
                        <p className="stockmeister-dashboard-stock-actions">
                            <button onClick={(e) => {
                                e.preventDefault();
                            }}
                                    className="btn btn-sm btn-outline-primary">
                                BUY
                            </button>
                            &nbsp;
                            <button onClick={(e) => {
                                e.preventDefault();
                            }}
                                    className="btn btn-sm btn-outline-success">
                                SELL
                            </button>
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default DashboardStockRow;