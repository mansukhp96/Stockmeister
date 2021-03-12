import React, { useState, useEffect } from 'react'
import './navbar.css'
import {Link as LinkRouter, useHistory, useLocation} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll"
import { useDispatch } from "react-redux";
import {animateScroll as scroll} from 'react-scroll'
import {Img} from "../info-fragment/info-fragment-elements";

const Navbar = ({toggle}) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({ type : "LOGOUT" });
        history.push("/");
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token

        //Json Web Token TODO

        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]);

    return(
        <div className="stockmeister-nav">
            <div className="stockmeister-navbar-container">
                <LinkRouter to="/"
                            onClick={() => scroll.scrollToTop()}
                            className="stockmeister-nav-logo text-decoration-none">
                    <i className="fas fa-layer-group"/>
                    StockMeister
                </LinkRouter>
                <div className="stockmeister-mobile-icon"
                     onClick={toggle}>

                    <div>
                        <i className="fas fa-bars stockmesiter-fa-bars"/>
                    </div>
                </div>
                <ul className="stockmeister-nav-menu">
                    <li className="stockmesiter-nav-item">
                        <LinkScroll to="market"
                                    smooth={true}
                                    duration={600}
                                    spy={true}
                                    exact="true"
                                    offset={-130}
                                    className="stockmeister-link-scroll text-decoration-none">
                            <i className="fas fa-poll"/>
                            &nbsp;Market
                        </LinkScroll>
                    </li>
                    <li className="stockmesiter-nav-item">
                        <LinkScroll to="personal"
                                    smooth={true}
                                    duration={600}
                                    spy={true}
                                    exact="true"
                                    offset={-79}
                                    className="stockmeister-link-scroll text-decoration-none">
                            <i className="fas fa-globe-americas"/>
                            &nbsp;News
                        </LinkScroll>
                    </li>
                    <li className="stockmesiter-nav-item">
                        <LinkScroll to="access"
                                    smooth={true}
                                    duration={600}
                                    spy={true}
                                    exact="true"
                                    offset={-79}
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
                {
                    !user?.result ? (
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
                    ) : (
                        <div className="stockmesiter-nav-login">
                            <LinkRouter to="/profile"
                                        className="stockmeister-link-route-avatar text-decoration-none">
                                <Img className="rounded-pill" src={user?.result.imageUrl}/>
                            </LinkRouter>
                            <LinkRouter to="/login"
                                        onClick={()=> { logout() }}
                                        className="stockmeister-link-route-login active text-decoration-none">
                                Logout
                            </LinkRouter>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar