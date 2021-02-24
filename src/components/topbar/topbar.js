import React from 'react'
import './topbar.css'
import {TopbarContainer} from './topbar-elements'
import {Link as LinkScroll} from "react-scroll";
import {Link as LinkRoute} from "react-router-dom";

const Topbar = ({expand, toggle}) => {
    return(
        <TopbarContainer expand={expand}
                         onClick={toggle}>
            <div className="stockmeister-icon" onClick={toggle}>
                    <i className="fas fa-times text-light"/>
            </div>
            <div className="stockmeister-topbar-wrapper">
                <div className="stockmeister-topbar-menu">
                    <LinkScroll to="market"
                                className="stockmeister-topbar-link text-decoration-none">
                        Market
                    </LinkScroll>
                    <LinkScroll to="news"
                                className="stockmeister-topbar-link text-decoration-none">
                        News
                    </LinkScroll>
                    <LinkScroll to="trade"
                                className="stockmeister-topbar-link text-decoration-none">
                        Trade
                    </LinkScroll>
                    <LinkScroll to="search"
                                className="stockmeister-topbar-link text-decoration-none">
                        Search
                    </LinkScroll>
                    <LinkScroll to="register"
                                className="stockmeister-topbar-link text-decoration-none">
                        Sign Up
                    </LinkScroll>
                </div>
                <div className="stockmeister-topbar-login">
                    <LinkRoute to="/login" className="stockmeister-topbar-link-route-login text-decoration-none">
                        Login
                    </LinkRoute>
                </div>
            </div>
        </TopbarContainer>
    )
}

export default Topbar