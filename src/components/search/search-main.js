import React, {useEffect, useState} from 'react';
import SearchPeople from "./search-people";
import SearchStocks from "./search-stocks";
import SearchCrypto from "./search-crypto";
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import "./search.css"
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";

export const SearchMain = () => {

    const {section} = useParams();

    return(
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            <div className="stockmeister-search-tabs-container">
                <div className={`stockmeister-search-tabs col ${section === "stocks" ? `stockmeister-search-tabs-active` : ``}`}>
                    <Link className={`stockmeister-search-tabs-link nav-link font-weight-bold ${section === "stocks" ? `stockmeister-search-tabs-link-active` : ``}`}
                          to={`/search/stocks`}>
                        Stocks
                    </Link>
                </div>
                <div className={`stockmeister-search-tabs col ${section === "crypto" ? `stockmeister-search-tabs-active` : ``}`}>
                    <Link className={`stockmeister-search-tabs-link nav-link font-weight-bold ${section === "crypto" ? `stockmeister-search-tabs-link-active` : ``}`}
                          to="/search/crypto">
                        Crypto
                    </Link>
                </div>
                <div className={`stockmeister-search-tabs col ${section === "people" ? `stockmeister-search-tabs-active` : ``}`}>
                    <Link className={`stockmeister-search-tabs-link nav-link font-weight-bold ${section === "people" ? `stockmeister-search-tabs-link-active` : ``}`}
                          to="/search/people">
                        People
                    </Link>
                </div>
            </div>
            <div className="stockmeister-search-content center text-center bg-light">
                {
                    section === "stocks" &&
                        <SearchStocks/>
                }
                {
                    section === "crypto" &&
                        <SearchCrypto/>
                }
                {
                    section === "people" &&
                        <SearchPeople/>
                }
            </div>
        </motion.div>
    )
}

export default SearchMain;