import React from 'react';
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";

export const News = () => {

    return(
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            News API
        </motion.div>
    )
}

export default News;