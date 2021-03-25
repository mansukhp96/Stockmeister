import React from 'react';
import "./crypto-coin-row.css"

const CryptoCoinRow = ({image, name, symbol, price, volume, priceChange, marketcap}) => {
    return(
        <div className="stockmeister-coin-container">
            <div className="stockmeister-coin-row">
                <div className="stockmeister-coin">
                    <img src={image} alt=""/>
                    <h1>
                        {name}
                    </h1>
                    <p className="stockmeister-coin-symbol">
                        {symbol}
                    </p>
                    <div className="stockmeister-coin-data">
                        <p className="stockmeister-coin-price">
                            ${price}
                        </p>
                        <p className="stockmeister-coin-volume">
                            {volume.toLocaleString()}
                        </p>
                        {
                            priceChange < 0 ? (
                                <p className="stockmeister-coin-percent text-danger">
                                    {priceChange.toFixed(3)}%
                                </p>
                            ) : (
                                <p className="stockmeister-coin-percent text-success">
                                    {priceChange.toFixed(3)}%
                                </p>
                            )
                        }
                        <p className="stockmeister-coin-marketcap">
                            Mkt cap: {marketcap.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoCoinRow;