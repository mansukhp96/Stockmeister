import React from 'react';
import './details.css'
import {Link, useParams} from "react-router-dom";
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";

const CryptoDetails = () => {

    const {coin} = useParams();

    return(
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            <div className="stockmeister-search-tabs-container">
                <Link className="col-1 stockmeister-details-back-container"
                      to={`/search/crypto`}>
                    <i className="fas fa-chevron-left stockmeister-details-back"/>
                </Link>
                <div className={`stockmeister-search-tabs-active col-11`}>
                    <div className={`nav-link stockmeister-details-text`}>
                        {coin.toUpperCase()}
                    </div>
                </div>
            </div>
            <div className="text-center">
                Cryptocurrency Details
            </div>
        </motion.div>
    )
}

export default CryptoDetails;