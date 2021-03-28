import React, {useEffect, useState} from 'react'
import {fadeAnimate} from "../../../animations/animations";
import {motion} from "framer-motion";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import StockService from "../../../services/stocks-service";
import {connect} from "react-redux";
import './search-stocks.css'
import StockRow from "./stock-row";

const SearchStocks = ({
                          stocks=[],
                          findMatchingStocks = (keyword) => { alert("Searching...")}
}) => {

    const {section} = useParams();

    const handleChange = (e) => {
        findMatchingStocks(e.target.value);
    }

    const filterStocks = stocks.filter(s =>
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

const stpm = (state) => {
    return {
        stocks: state.stocksReducer.matchingStocks
    }
}

const dtpm = (dispatch) => {
    return {
        findAllStocks : () => {
            StockService.findAllStocks().then((response) => {
                dispatch( { type : "FIND_ALL_STOCKS", allStocks : response.data } )
            })
        },
        findMatchingStocks : (keyword) => {
            StockService.findMatchingStocks(keyword).then((matchStocks) => {
                console.log(matchStocks.data)
                dispatch({ type : "FIND_MATCHING_STOCKS", matchStocks : matchStocks.data })
            })
        }
    }
}

export default connect(stpm, dtpm)(SearchStocks)