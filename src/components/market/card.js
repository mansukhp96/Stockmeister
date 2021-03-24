import React from 'react'
import './card.css'

export const Card = ({symbol, priceChange, value}) => {

    const precise = (x) => {
        return Number.parseFloat(x).toPrecision(4);
    }

    return(
        <div className={`stockmeister-card shadow-sm ${priceChange <= 0 ? `bg-danger` : `bg-success`}`}>
            <div className="col stockmeister-card-symbol text-center">
                {symbol}
            </div>
            <div className="col stockmeister-card-price text-center">
                {precise(priceChange, 3)+`%`}
            </div>
            <div className="col stockmeister-card-value text-center">
                {`$`+ value}
            </div>
        </div>
    )
}