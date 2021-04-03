import React, {useEffect, useState} from 'react'
import {fadeAnimate} from "../../../animations/animations";
import {motion} from "framer-motion";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import './search-stocks.css'
import api from '../../../api/twelvedata-stocks-search-api';
import StockRow from "./stock-row";

const SearchStocks = () => {

    const [ matchingStocks, setMatchingStocks ] = useState([]);
    const {section} = useParams();

    const handleChange = (e) => {
        const fetchMatching = async () => {
            return await api.get("&symbol=" + e.target.value);
        }
        fetchMatching().then(response => setMatchingStocks(response.data.data))
    }

    const filterStocks = matchingStocks.filter(s =>
        (s.country.toLowerCase().includes("united states")
        && s.instrument_type.toLowerCase().includes("common stock"))
    )

    return(
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            <div className="stockmeister-stock-section">
                <div className="stockmeister-stock-search">
                    <form>
                        <input type="text"
                               onChange={handleChange}
                               placeholder="Search"
                               className="stockmeister-stock-input form-control"/>
                    </form>
                </div>
            </div>
            {
                filterStocks.length > 0 &&
                filterStocks.map((s,i) => {
                    return(
                        <Link key={i}
                              className="text-decoration-none text-dark"
                              to={`/search/${section}/details/${s.symbol}`}>
                                <StockRow symbol={s.symbol}
                                          currency={s.currency}
                                          name={s.instrument_name}
                                          exchange={s.exchange}/>
                        </Link>
                    )
                })
            }
            {
                filterStocks.length <= 0 &&
                    <div className="text-muted small">
                        Search for stocks by name or symbol to see results
                    </div>
            }
        </motion.div>
    )
}

export default SearchStocks