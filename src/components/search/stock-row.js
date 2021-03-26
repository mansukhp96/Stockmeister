import React from 'react';
import './stock-row.css';

const StockRow = ({name, symbol, currency, exchange}) => {
    return(
        <div className="stockmeister-stock-container">
            <div className="stockmeister-stock-row">
                <div className="stockmeister-stock">
                    <h1>
                        {name}
                    </h1>
                    <p className="stockmeister-stock-symbol">
                        {symbol}
                    </p>
                    <p className="stockmeister-stock-exchange">
                        {exchange}
                    </p>
                    <p className="stockmeister-stock-currency">
                        {currency}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StockRow;