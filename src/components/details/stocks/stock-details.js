import React, {useEffect, useState} from 'react';
import {fadeAnimate} from "../../../animations/animations";
import {Link, useParams} from "react-router-dom";
import {motion} from "framer-motion";
import '../details.css'
import api from "../../../api/twelvedata-api";
import StockHistoryChart from "./stock-details-chart";
import StockCard from "./stock-details-card";

const StockDetails = () => {

    const {id} = useParams();
    const [stockData, setStockData] = useState({});
    const [loading, setLoading] = useState(false);

    const formatData = (data) => {
        return data.map(x => {
            return {
                t : x.datetime,
                y : x.open
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true);
            const [dayDat, weekDat, monthDat, stockDetails] = await Promise.all([
                api.get("time_series?apikey=" + process.env.REACT_APP_TWLDATA_APIKEY + "&interval=1min&symbol=" + id),
                api.get("time_series?apikey=" + process.env.REACT_APP_TWLDATA_APIKEY + "&interval=4h&symbol=" + id),
                api.get("time_series?apikey=" + process.env.REACT_APP_TWLDATA_APIKEY + "&interval=1week&symbol=" + id),
                api.get("quote?apikey=" + process.env.REACT_APP_TWLDATA_APIKEY + "&symbol=" + id)
            ])

            setStockData({
                day : formatData(dayDat.data.values),
                week : formatData(weekDat.data.values),
                year : formatData(monthDat.data.values),
                details : stockDetails.data
            });
        }
        fetchData();
        setLoading(false);
    },[]);

    return(
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            <div className="stockmeister-search-tabs-container">
                <Link className="col-1 stockmeister-details-back-container"
                      to={`/search/stocks`}>
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
                    !loading && stockData.details &&
                    <StockHistoryChart data={stockData}/>
                }
            </div>
            <div className="stockmeister-crypto-details-data text-center bg-light">
                {
                    !loading &&
                    <StockCard data={stockData}/>
                }
            </div>
        </motion.div>
    )
}

export default StockDetails;