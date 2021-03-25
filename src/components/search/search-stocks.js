import React from 'react'
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";

const SearchStocks = () => {
    return(
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            Search Stocks Section
        </motion.div>
    )
}

export default SearchStocks