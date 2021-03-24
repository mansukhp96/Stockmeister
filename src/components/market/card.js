import React from 'react'
import './card.css'

export const Card = ({symbol, price}) => {
    return(
        <div className={`stockmeister-card shadow-sm ${price <= 0 ? `` : `bg-success`}`}>
            <div className="col stockmeister-card-symbol text-center">
                {symbol}
            </div>
            <div className="col stockmeister-card-value text-center">
                {price}
            </div>
        </div>
    )
}