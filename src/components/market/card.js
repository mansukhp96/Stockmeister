import React from 'react'
import './card.css'

export const Card = ({symbol, priceChange, value}) => {
    return(
        <div className={`stockmeister-card shadow-sm ${priceChange <= 0 ? `` : `bg-success`}`}>
            <div className="col stockmeister-card-symbol text-center">
                {symbol}
            </div>
            <div className="col stockmeister-card-price text-center">
                {priceChange+`%`}
            </div>
            <div className="col stockmeister-card-value text-center">
                {`$`+value}
            </div>
        </div>
    )
}