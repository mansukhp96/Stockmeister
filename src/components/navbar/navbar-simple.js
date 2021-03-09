import React from 'react'
import './navbar.css'
import {Link as LinkRouter} from "react-router-dom";

const NavbarSimple = () => {
    return(
        <div className="stockmeister-nav-simple">
            <div className="stockmeister-navbar-container">
                <LinkRouter to="/"
                            className="stockmeister-nav-logo text-decoration-none">
                    <i className="fas fa-layer-group"/>
                    StockMeister
                </LinkRouter>
            </div>
        </div>
    )
}

export default NavbarSimple