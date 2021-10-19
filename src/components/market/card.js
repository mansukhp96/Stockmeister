import React from 'react'
import './card.css'

export const Card = ({symbol, priceChange, value}) => {

    const precisePercentage = (x) => {
        return Number.parseFloat(x).toPrecision(4);
    }

    const preciseValue = (x) => {
        return Number.parseFloat(x).toPrecision(5);
    }

    return(
        <div className={`stockmeister-card shadow-sm ${priceChange <= 0 ? `bg-danger` : `bg-success`}`}>
            <div className="col stockmeister-card-symbol text-center">
                {symbol}
            </div>
            <div className="col stockmeister-card-price text-center">
                {precisePercentage(priceChange)+`%`}
            </div>
            <div className="col stockmeister-card-value text-center">
                {`$`+ preciseValue(value)}
            </div>
        </div>
    )
}