import React, {useEffect, useState} from 'react';
import './details.css'
import './crypto-details.css'
import {Link, useParams} from "react-router-dom";
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";
import HistoryChart from "./crypto-details-chart";
import api from '../../api/crypto-api';

const CryptoDetails = () => {

    const {symbol} = useParams();

    const [coinData, setCoinData] = useState();

    useEffect(() => {
            const fetchData = async () => {

                const [dayDat, weekDat, yearDat] = await Promise.all([
                    api.get(symbol + "/market_chart?vs_currency=usd&days=1"),
                    api.get(symbol + "/market_chart?vs_currency=usd&days=7"),
                    api.get(symbol + "/market_chart?vs_currency=usd&days=365")
                ])

                setCoinData({
                    day : dayDat.data.prices,
                    week : weekDat.data.prices,
                    year : yearDat.data.prices
                });
            }
            fetchData()
    },[]);

    return(
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            <div className="stockmeister-search-tabs-container">
                <Link className="col-1 stockmeister-details-back-container"
                      to={`/search/crypto`}>
                    <i className="fas fa-chevron-left stockmeister-details-back"/>
                </Link>
                <div className={`stockmeister-search-tabs-active col-11`}>
                    <div className={`nav-link stockmeister-details-text`}>
                        {symbol.toUpperCase()}
                    </div>
                </div>
            </div>
            <div className="stockmeister-crypto-details-chart text-center bg-light">
                <HistoryChart data={coinData}/>
            </div>
            <div className="stockmeister-crypto-details-data text-center bg-light">
                Cryptocurrency Coin Data
            </div>
        </motion.div>
    )
}

export default CryptoDetails;