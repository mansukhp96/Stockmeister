import React, {useEffect, useState} from 'react'
import CryptoService from "../../services/crypto-service";
import {connect} from "react-redux";
import CryptoCoinRow from "./crypto-coin-row";
import "./search-crypto.css"
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {fadeAnimate} from "../../animations/animations";
import {motion} from "framer-motion";

const SearchCrypto = ({
                          cryptoCoins = [],
                          findAllCoins = () => { alert("Getting all coins") }
}) => {

    const [search, setSearch] = useState("");

    useEffect(() => {
        findAllCoins()
    }, []);

    const {section} = useParams();

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const filterCoins = cryptoCoins.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
    )

    return(
        <motion.div initial="out" animate="in" variants={fadeAnimate}>
            <div className="stockmeister-coin-section">
                <div className="stockmeister-coin-search">
                    <form>
                        <input type="text"
                               placeholder="Search"
                               className="stockmeister-coin-input form-control"
                               onChange={handleChange}/>
                    </form>
                </div>
                {
                    filterCoins.map(c => {
                        return(
                            <Link key={c.id}
                                  className="text-decoration-none text-dark"
                                  to={`/search/${section}/details/${c.name}`}>
                                <CryptoCoinRow symbol={c.symbol}
                                               image={c.image}
                                               name={c.name}
                                               volume={c.total_volume}
                                               price={c.current_price}
                                               priceChange={c.price_change_percentage_24h}
                                               marketcap={c.market_cap}/>
                            </Link>

                        )
                    })
                }
            </div>
        </motion.div>
    )
}

const stpm = (state) => {
    return {
        cryptoCoins : state.cryptoReducer.cryptoCoins
    }
}

const dtpm = (dispatch) => {
    return {
        findAllCoins : () => {
            CryptoService.findAllCoins().then(allCoins => {
                dispatch({ type : "FIND_ALL_COINS", allCoins : allCoins })
            })
        }
    }
}

export default connect(stpm, dtpm)(SearchCrypto);