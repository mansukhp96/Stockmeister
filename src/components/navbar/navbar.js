import React from 'react'
import './navbar.css'
import {Link as LinkRouter} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll"

const Navbar = () => {
    return(
        <div className="stockmeister-nav">
            <div className="stockmeister-navbar-container">
                <LinkRouter to="/"
                      className="stockmeister-nav-logo text-decoration-none">
                    <i className="fas fa-layer-group"/>
                    StockMeister
                </LinkRouter>
                <div className="stockmeister-mobile-icon">
                    <div>
                        <i className="fas fa-bars stockmesiter-fa-bars"/>
                    </div>
                </div>
                <ul className="stockmeister-nav-menu">
                    <li className="stockmesiter-nav-item">
                        <LinkScroll to="market"
                                    className="stockmeister-link-scroll text-decoration-none">
                            <i className="fas fa-poll"/>
                            &nbsp;Market
                        </LinkScroll>
                    </li>
                    <li className="stockmesiter-nav-item">
                        <LinkScroll to="news"
                                    className="stockmeister-link-scroll text-decoration-none">
                            <i className="fas fa-globe-americas"/>
                            &nbsp;News
                        </LinkScroll>
                    </li>
                    <li className="stockmesiter-nav-item">
                        <LinkScroll to="trade"
                                    className="stockmeister-link-scroll text-decoration-none">
                            <i className="fas fa-coins"/>
                            &nbsp;Trade
                        </LinkScroll>
                    </li>
                    <li className="stockmesiter-nav-item">
                        <LinkScroll to="search"
                                    className="stockmeister-link-scroll text-decoration-none">
                            <i className="fas fa-search-dollar"/>
                            &nbsp;Search
                        </LinkScroll>
                    </li>
                </ul>
                <div className="stockmesiter-nav-login">
                    <LinkRouter to="/register"
                                className="stockmeister-link-route-register text-decoration-none">
                        Sign Up
                    </LinkRouter>
                    <LinkRouter to="/login"
                                className="stockmeister-link-route-login active text-decoration-none">
                        Login
                    </LinkRouter>
                </div>
            </div>
        </div>
    )
}

export default Navbar