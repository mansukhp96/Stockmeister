import React from 'react';
import '../chart-card-details.css'

const StockCard = ({data}) => {

    return (
        <>
            {
                data.details &&
                <div className="row stockmeister-coin-details-card-container">
                    <div className="stockmeister-coin-details-wrapper">
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                24Hr High
                            </div>
                            <div className="stockmeister-coin-details-value">
                                ${data.details.high}
                            </div>
                        </div>
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                24Hrs Low
                            </div>
                            <div className="stockmeister-coin-details-value">
                                ${data.details.low}
                            </div>
                        </div>
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                Volume
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {data.details.volume}
                            </div>
                        </div>
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                Average Volume
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {data.details.average_volume}
                            </div>
                        </div>
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                Exchange
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {data.details.exchange}
                            </div>
                        </div>
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                52 Week High
                            </div>
                            <div className="stockmeister-coin-details-value">
                                ${data.details.fifty_two_week.high}
                            </div>
                        </div>
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                Price Change (24Hrs)
                            </div>
                            <div className="stockmeister-coin-details-value">
                                ${data.details.change}
                            </div>
                        </div>
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                Price Change percentage
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {data.details.percent_change}%
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                !data.details &&
                <div className="text-sm-center small">
                    Loading...
                </div>
            }
        </>
    )
}

export default StockCard;