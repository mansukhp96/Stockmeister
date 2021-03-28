import React from 'react';
import {fadeAnimate} from "../../animations/animations";
import {Link, useParams} from "react-router-dom";
import {motion} from "framer-motion";
import './details.css'

const StockDetails = () => {

    const {id} = useParams();

    return(
        <motion.div initial="out" animate="in" exit="out" variants={fadeAnimate}>
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
            <div className="text-center">
                Stock Details
            </div>
        </motion.div>
    )
}

export default StockDetails;