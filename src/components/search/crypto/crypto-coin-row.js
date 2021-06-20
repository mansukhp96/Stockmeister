import React from 'react';
import "./crypto-coin-row.css"

const CryptoCoinRow = ({image, name, symbol, price, volume, priceChange, marketcap}) => {
    return(
        <div className="stockmeister-coin-container">
            <div className="stockmeister-coin-row">
                <div className="stockmeister-coin">
                    <img src={image}
                         alt=""/>
                    <h1>
                        {name}
                    </h1>
                    <p className="stockmeister-coin-symbol">
                        {symbol}
                    </p>
                        <p className="stockmeister-coin-price">
                            ${price}
                        </p>
                        <p className="stockmeister-coin-volume">
                            {volume.toLocaleString()}
                        </p>
                        {
                            priceChange ? (
                                <p className="stockmeister-coin-percent text-danger">
                                    {priceChange.toFixed(2)}%
                                </p>
                            ) : (
                                <p className="stockmeister-coin-percent text-success">
                                    {'-NA-'}%
                                </p>
                            )
                        }
                        <p className="stockmeister-coin-marketcap text-right">
                            Mkt cap: {marketcap.toLocaleString()}
                        </p>
                </div>
            </div>
        </div>
    )
}

export default CryptoCoinRow;