import React, {useEffect, useState} from 'react';
import '../details.css'
import '../chart-card-details.css'
import {Link, useParams} from "react-router-dom";
import {fadeAnimate} from "../../../animations/animations";
import {motion} from "framer-motion";
import CoinHistoryChart from "./crypto-details-chart";
import api from '../../../api/coingecko-api';
import CoinCard from "./crypto-details-card";

const CryptoDetails = () => {

    const {id} = useParams();

    const [coinData, setCoinData] = useState({});
    const [loading, setLoading] = useState(false);

    const formatData = (data) => {
        return data.map(x => {
            return {
                t : x[0],
                y : x[1].toFixed(2)
            }
        })
    }

    useEffect(() => {
            const fetchData = async () => {

                setLoading(true);
                const [dayDat, coinDetails] = await Promise.all([
                    api.get(id + "/market_chart?vs_currency=usd&days=1"),
                    api.get("markets?vs_currency=usd&ids=" + id + "&sparkline=false")
                ])

                setCoinData({
                    day : formatData(dayDat.data.prices),
                    details : coinDetails.data[0]
                });
            }
            fetchData();
        setLoading(false);
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
                        {id.toUpperCase()}
                    </div>
                </div>
            </div>
            <div className="stockmeister-crypto-details-chart text-center bg-light">
                {
                    loading &&
                    <div className="text-muted small bg-light">
                        Loading history chart for {id}...
                    </div>
                }
                {
                    !loading && coinData.details &&
                    <CoinHistoryChart data={coinData}/>
                }
            </div>
            <div className="stockmeister-crypto-details-data text-center bg-light">
                {
                    !loading &&
                    <CoinCard data={coinData}/>
                }
            </div>
        </motion.div>
    )
}

export default CryptoDetails;