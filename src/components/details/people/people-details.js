import React from 'react';
import {fadeAnimate} from "../../../animations/animations";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useParams} from "react-router";

const PeopleDetails = () => {

    const {id} = useParams();

    return(
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            <div className="stockmeister-search-tabs-container">
                <Link className="col-1 stockmeister-details-back-container"
                      to={`/search/people`}>
                    <i className="fas fa-chevron-left stockmeister-details-back"/>
                </Link>
                <div className={`stockmeister-search-tabs-active col-11`}>
                    <div className={`nav-link stockmeister-details-text`}>
                        {id.toUpperCase()}
                    </div>
                </div>
            </div>
            <div className="stockmeister-crypto-details-chart text-center bg-light">
                Person details
            </div>
            <div className="stockmeister-crypto-details-data text-center bg-light">
                Person details
            </div>
        </motion.div>
    )
}

export default PeopleDetails;