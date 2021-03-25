import React from 'react'
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";

const SearchPeople = () => {
    return(
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            Search People Section
        </motion.div>
    )
}

export default SearchPeople;