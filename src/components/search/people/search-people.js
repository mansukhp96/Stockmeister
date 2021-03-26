import React, {useEffect} from 'react'
import {fadeAnimate} from "../../../animations/animations";
import {motion} from "framer-motion";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import './search-people.css'

const SearchPeople = () => {

    useEffect(() => {

    }, []);

    const {section} = useParams();

    return(
        <motion.div initial="out"
                    animate="in"
                    variants={fadeAnimate}>
            <div className="stockmeister-people-section">
                <div className="stockmeister-people-search">
                    <form>
                        <input type="text"
                               placeholder="Search"
                               className="stockmeister-people-input form-control"/>
                    </form>
                </div>
            </div>
            {
               <Link to={`/search/${section}/details/userId`}>
                    Go to user details
               </Link>
            }
            {
                <div className="text-muted small">
                    Search for username to see results
                </div>
            }
        </motion.div>
    )
}

export default SearchPeople;