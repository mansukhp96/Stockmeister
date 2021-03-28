import React from 'react';
import './crypto-details.css'

const CoinCard = ({data}) => {

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
                                ${data.details.high_24h}
                            </div>
                        </div>
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                24Hrs Low
                            </div>
                            <div className="stockmeister-coin-details-value">
                                ${data.details.low_24h}
                            </div>
                        </div>
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                Mkt Cap
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {data.details.market_cap}
                            </div>
                        </div>
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                24Hr Mkt Cap Change
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {data.details.market_cap_change_percentage_24h}%
                            </div>
                        </div>
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                Total Volume
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {data.details.total_volume}
                            </div>
                        </div>
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                Total Supply
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {
                                    !data.details.total_supply &&
                                    <>
                                        -NA-
                                    </>
                                }
                                {
                                    data.details.total_supply &&
                                    <>
                                        {data.details.total_supply}
                                    </>
                                }
                            </div>
                        </div>
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                ATH
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {data.details.ath}
                            </div>
                        </div>
                        <div className="stockmeister-coin-details-card-wrapper">
                            <div className="stockmeister-coin-details-head">
                                ATH Change
                            </div>
                            <div className="stockmeister-coin-details-value">
                                {data.details.ath_change_percentage}%
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

export default CoinCard;