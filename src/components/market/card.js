import React from 'react'
import './card.css'

export const Card = ({symbol}) => {
    return(
        <div className="stockmeister-card shadow-sm">
            <div className="col stockmeister-card-symbol text-center">
                {symbol}
            </div>
            <div className="col stockmeister-card-value text-center">
                ^ 0.1%
            </div>
        </div>
    )
}