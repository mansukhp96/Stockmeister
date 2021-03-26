import React, {useEffect, useState} from 'react';
import './details.css'
import './crypto-details.css'
import {Link, useParams} from "react-router-dom";
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";
import HistoryChart from "./crypto-details-chart";
import CryptoService from '../../services/crypto-service';

const CryptoDetails = () => {

    const {symbol} = useParams();

    const [coinData, setCoinData] = useState({});

    useEffect(() => {
        CryptoService.coinHistoryTimeSeries(symbol,7)
            .then((response) => {
                console.log(response.prices);
                //setCoinData({day : day, week : week, year : year});
            })
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
                <HistoryChart/>
            </div>
            <div className="stockmeister-crypto-details-data text-center bg-light">
                Cryptocurrency Data
            </div>
        </motion.div>
    )
}

export default CryptoDetails;